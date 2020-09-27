# myUI

Modular UI elements, made with JS + CSS + Webpack. Lightweight and easy to use.    
  
Create UI layouts by specifying UI elements, row by row, within a div.  

View the [example webpage](https://jinjagit.github.io/Modular_UI/).  

See the [wiki](https://github.com/jinjagit/Modular_UI/wiki) for more details.

## Notes
* Many UI element components are assigned ids, which may be useful for writing custom css styling.  
  For example of custom tooltip, see `div#Modular_UI { ... }` and `div#Modular_UI:hover::after { ... }` styling in [`style.css`](https://github.com/jinjagit/Modular_UI/blob/master/dist/css/style.css).  
* Number input fields look funky on Linux version of FireFox = use Chromium.  

## Getting Started
You will need `node.js` installed and, optionally, `php` (used for local server - you can use an alternative, or just run index.html directly).  

* clone the repo.
```  
$ cd Modular_UI  
$ npm init -y  
$ npm install webpack --save-dev  
$ npm install webpack-cli --save-dev  
$ npx webpack --watch
```
* open another terminal:
```
$ cd Modular_UI/dist
$ php -S 127.0.0.1:8080
```
* view the example UI running locally @ `127.0.0.1:8080`  
* edit the appropriate files to your taste (see [wiki](https://github.com/jinjagit/Modular_UI/wiki) for details)  
  