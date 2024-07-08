FILE=.flame
if test -f "$FILE"; then
    rm -r applications/junction;
    mkdir applications/junction;
    cd applications/junction;
    ember init;
    yes | ember install ember-tribe;
    yes | ember install ember-junction;
    ember build -prod;
    php sync-dist.php;
    rm .gitignore;
else
    echo "This is not a Flame folder."
fi