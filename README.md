# gortpage
another go at making a new tab/homepage, this time building it as a firefox extension so you don't have to use any external extensions or do any hosting to have a custom new tab page.

nothing fancy here either, just most used pages, a search bar, the time and of course some edgy greeting and a neat pic to meet some kind of aesthetic or something.

gruvbox theme to match my desktop. my dotfiles are in [my dotfiles repo](https://github.com/gfriesen98/dotfiles)

![ZoomedIn](../assets/screenshots/screenshotzoom.png?raw=true)
![Normal](../assets/screenshots/screenshot.png?raw=true)

# installing

homepage instructions:

1. go to your preferences in firefox (hamburger menu -> preferences)
2. click on home (under general)
3. click the drop down for 'homepage and new windows' to 'custom urls...'
4. enter this format into the box `file:///home/username/path/to/html/file.html`

new tab instructions:

1. install [mozilla's web-ext](https://github.com/mozilla/web-ext)
2. while in the html directory, run
    
    `web-ext sign --api-key=$your_jwt_issuer --api-secret=$your_jwt_secret`

    * if you dont know what this means, then create an account on mozilla's add-on [developer hub](https://addons.mozilla.org/en-US/developers/addons)
        * if you already have an account with mozilla then you can already login.
    * read this [tutorial](https://extensionworkshop.com/documentation/develop/getting-started-with-web-ext/) on web-ext
3. if you are too lazy to do it this way, then use [Custom New Tab Page](https://addons.mozilla.org/en-CA/firefox/addon/custom-new-tab-page/) by MethodGrab

## setting the new tab
find the .xpi file that web-ext generated. should be in `/gortpageclone/html/web-ext-artifacts/`

1. go to firefox addons page (hamburger menu -> addons)
2. drag and drop the file onto the page, or click the gear icon -> install addon from file
3. click add on the pop up that will show up

the custom homepage will be permanently set as the new tab page. you can remove it by uninstalling the addon from the addons page
