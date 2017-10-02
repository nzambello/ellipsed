# ellipsed

[![license](https://img.shields.io/github/license/nzambello/ellipsed.svg)](https://github.com/nzambello/ellipsed/blob/master/LICENSE)&nbsp;&nbsp;
[![GitHub forks](https://img.shields.io/github/forks/nzambello/ellipsed.svg?style=social&label=Fork)](https://github.com/nzambello/ellipsed)
[![GitHub stars](https://img.shields.io/github/stars/nzambello/ellipsed.svg?style=social&label=Star)](https://github.com/nzambello/ellipsed)  
[![npm version](https://badge.fury.io/js/ellipsed.svg)](https://www.npmjs.com/package/ellipsed)
[![npm](https://img.shields.io/npm/dt/ellipsed.svg)](https://www.npmjs.com/package/ellipsed)
[![npm](https://img.shields.io/npm/dw/ellipsed.svg)](https://www.npmjs.com/package/ellipsed) &nbsp;
[![Demo](https://img.shields.io/badge/Demo-here-yellowgreen.svg)](https://nzambello.github.io/ellipsed/)  
[![contributions welcome](https://img.shields.io/badge/contributions-welcome-brightgreen.svg?style=flat)](https://github.com/nzambello/ellipsed/issues)
[![Join the chat at https://gitter.im/ellipsed/Lobby](https://badges.gitter.im/ellipsed/Lobby.svg)](https://gitter.im/ellipsed/Lobby?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge)

## What is Ellipsed?
Ellipsed is a JavaScript plugin for generating multi-lined ellipsed text. It provides the ability to specify the number of lines visible.

## Demo  
You can see the example here: https://nzambello.github.io/ellipsed/

The [example/](https://github.com/nzambello/ellipsed/tree/master/example) directory of this repo contains the demo showed above.
To start it on your local machine, clone the repository and install it by following the installation instructions below, then start it with `npm start` (or with `yarn start`).  

## Install
```sh
# Yarn
yarn add ellipsed

# NPM
npm install --save ellipsed

# Bower
bower install ellipsed
```

## Usage
Call the ellipsis method with three parameters:
````javascript
ellipsis(selector, rows, options);
````

- `selector` - A CSS selector string used to target the element for truncation
- `rows` - An integer value used as the number of rows that should be visible, following words will be trucated with the `replaceStr` (default is `'...'`).
- `options` - Allows an options object to be passed to further customise the functionality. See options section below for details.

### Options
Options can be passed through the method using the third parameter, which provides greater control.

Name | Type |  Default | Description
---- | ---- |  ------- | -----------
replaceStr | string | `'...'` | The string that substituted following the trucated string.

### Import
Ellipsed is provided as a UMD module.

You can use it as a ES6 module:
```javascript
import { ellipsis } from 'ellipsed';
```
As a CommonJS module:
```javascript
var { ellipsis } = require('ellipsed');
```
As an AMD module:
```javascript
require([
  'ellipsed'
], function(ellipsed) {
  var ellipsis = ellipsed.ellipsis;
});
```
Or as a global module in the browser:
```javascript
var ellipsis = window.ellipsed.ellipsis;
```

## Contributing
New contributors are warmly welcome, see the [CONTRIBUTING.md](https://github.com/nzambello/ellipsed/blob/master/CONTRIBUTING.md) file for other information.
