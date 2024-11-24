FILE=.flame
if test -f "$FILE"; then
    rm -r applications/junction;
    mkdir applications/junction;
    cd applications/junction;
    ember init;
    yes | ember install ember-tribe;
    yes | ember install ember-junction;
    php sync-types.php;
    ember build -prod;
    php sync-dist.php;
    rm .gitignore;
    cd ../../;
    rm build.sh;

    ##################
    ##################

    # git push and increment version of flame-junction-dist

    ##################
    ##################

    # Function to check if we're in a git repository
    check_git_repo() {
        if ! git rev-parse --git-dir > /dev/null 2>&1; then
            echo "Error: Not a git repository"
            exit 1
        fi
    }

    # Function to check if there are any changes to commit
    check_changes() {
        if [[ -n $(git status -s) ]]; then
            return 0 # changes exist
        else
            return 1 # no changes
        fi
    }

    # Function to get the latest tag from a directory
    get_latest_tag() {
        local dir=$1
        (cd "$dir" && git describe --tags --abbrev=0 2>/dev/null) || echo "0.0.0"
    }

    # Main execution starts here
    echo "Starting version synchronization process..."

    # Check if current directory is a git repository
    check_git_repo

    # Get reference tag first (we'll need it for the commit message)
    reference_tag=$(get_latest_tag "../flame-junction-src")

    # Save changes in master branch and push to origin
    if check_changes; then
        echo "Changes detected, committing..."
        git add .
        commit_message="latest validated build ${reference_tag}"
        echo "Using commit message: $commit_message"
        git commit -m "$commit_message"
        
        echo "Pushing changes to origin/master..."
        git push origin master
    else
        echo "No changes to commit in current repository"
    fi

    # Get tags from both repositories
    current_tag=$(get_latest_tag ".")

    echo "Current repository tag: $current_tag"
    echo "Reference repository tag: $reference_tag"

    # Compare and update tags if necessary
    if [ "$current_tag" != "$reference_tag" ]; then
        echo "Tags are different. Updating current repository tag to match reference..."
        
        # Delete the current tag locally and remotely if it exists
        if [ -n "$current_tag" ]; then
            git tag -d "$current_tag" 2>/dev/null
            git push origin ":refs/tags/$current_tag" 2>/dev/null
        fi
        
        # Create new tag and push it
        git tag "$reference_tag"
        git push origin "$reference_tag"
        
        echo "Tag $reference_tag has been created and pushed to origin"
    else
        echo "Tags are already synchronized"
    fi

    echo "Version synchronization completed successfully"

else
    echo "This is not a Flame folder."
fi