(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(['exports'], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports);
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports);
    global.ellipsed = mod.exports;
  }
})(this, function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  /*
   *   Copyright (C) 2017  Nicola Zambello
   *
   *    The JavaScript code in this page is open source software licensed under MIT license
   *    References about this code and its license, see:
   *
   *    https://github.com/nzambello/ellipsed
   *
   */

  function tokensReducer(acc, token) {
    var el = acc.el,
        elStyle = acc.elStyle,
        elHeight = acc.elHeight,
        rowsLimit = acc.rowsLimit,
        rowsWrapped = acc.rowsWrapped,
        options = acc.options;

    if (rowsWrapped === rowsLimit + 1) {
      return _extends({}, acc);
    }
    var textBeforeWrap = el.textContent;
    var newRowsWrapped = rowsWrapped;
    var newHeight = elHeight;
    el.textContent = el.textContent.length ? el.textContent + ' ' + token + options.replaceStr : '' + token + options.replaceStr;

    if (parseFloat(elStyle.height) > parseFloat(elHeight)) {
      newRowsWrapped++;
      newHeight = elStyle.height;

      if (newRowsWrapped === rowsLimit + 1) {
        el.innerHTML = textBeforeWrap[textBeforeWrap.length - 1] === '.' && options.replaceStr === '...' ? textBeforeWrap + '..' : '' + textBeforeWrap + options.replaceStr;

        return _extends({}, acc, { elHeight: newHeight, rowsWrapped: newRowsWrapped });
      }
    }

    el.textContent = textBeforeWrap.length ? textBeforeWrap + ' ' + token : '' + token;

    return _extends({}, acc, { elHeight: newHeight, rowsWrapped: newRowsWrapped });
  }

  function ellipsis() {
    var selector = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
    var rows = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
    var options = arguments[2];

    var defaultOptions = {
      replaceStr: '...',
      responsive: false
    };

    var opts = _extends({}, defaultOptions, options);

    var elements = document.querySelectorAll(selector);
    var originalTexts = [];

    for (var i = 0; i < elements.length; i++) {
      var el = elements[i];
      originalTexts[i] = el.textContent;
      var splittedText = el.textContent.split(' ');

      el.textContent = '';
      var elStyle = window.getComputedStyle(el);

      splittedText.reduce(tokensReducer, {
        el: el,
        elStyle: elStyle,
        elHeight: 0,
        rowsLimit: rows,
        rowsWrapped: 0,
        options: opts
      });
    }

    window.onresize = function () {
      for (var _i = 0; _i < elements.length; _i++) {
        var _el = elements[_i];
        _el.textContent = originalTexts[_i];
      }

      ellipsis(selector, rows, options);
    };
  }

  exports.ellipsis = ellipsis;
});