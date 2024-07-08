# To build Junction's dist folder with PHP
```
rm -r applications/junction; mkdir applications/junction; cd applications/junction; ember init; yes | ember install ember-tribe; yes | ember install ember-junction; ember build -prod; php sync-dist.php; rm .gitignore;
```