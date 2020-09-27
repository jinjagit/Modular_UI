# myUI

Modular UI elements, made with JS + CSS + Webpack. Lightweight and easy to use.    
  
Create UI layouts by specifying UI elements, row by row, within a div.  

View the [example webpage](https://jinjagit.github.io/Modular_UI/).  

See the [wiki](https://github.com/jinjagit/Modular_UI/wiki) for more details.

## Aim
To develop UI elements (sliders, buttons, etc.), that are:  
* modular  
* resizable  
* functional (i.e. easy to use and good at what they do)  
* clear  
* 'modern / sci-fi(ish)'     
* procedurally generated from a simple 'list' 
* easy to configure / style      
* easy to incorporate / maintain / alter  

## Notes
* Many UI element components are assigned ids, which may be useful for writing custom css styling.  
  For example of custom tooltip, see `div#Modular_UI { ... }` and `div#Modular_UI:hover::after { ... }` styling in [`style.css`](https://github.com/jinjagit/Modular_UI/blob/master/dist/css/style.css).  
* Number input fields look funky on Linux version of FireFox = use Chromium.  

## Colors:
To change colors, edit vars at top of [`style.css`](https://github.com/jinjagit/Modular_UI/blob/master/dist/css/style.css) and [`uiElements.js`](https://github.com/jinjagit/Modular_UI/blob/master/src/uiElements.js).    

Previous color-scheme (blue):  
```
  --background: #002439;
  --foreground: #275161;
  --foreground-hover: #467181;
  --foreground-active: #78cce2;
  #dev-text-div {
    background-color: rgb(20, 22, 31);
  }
  ```

## Setup notes
Built from basic webpack setup. Follow my readme @ https://github.com/jinjagit/webpack-source  

## Useful dev commands
* `$ npx webpack --watch`  
* `$ php -S 127.0.0.1:8080`  
* `$ git subtree push --prefix dist origin gh-pages`  