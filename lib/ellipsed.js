(function(global, factory) {
  if (typeof define === 'function' && define.amd) {
    define(['exports'], factory);
  } else if (typeof exports !== 'undefined') {
    factory(exports);
  } else {
    var mod = {
      exports: {},
    };
    factory(mod.exports);
    global.ellipsed = mod.exports;
  }
})(this, function(exports) {
  'use strict';

  Object.defineProperty(exports, '__esModule', {
    value: true,
  });

  var _extends =
    Object.assign ||
    function(target) {
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
   *   Copyright (C) 2017 Nicola Zambello
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

    var oldBuffer = acc.buffer;
    var newBuffer = oldBuffer;

    if (rowsWrapped === rowsLimit + 1) {
      return _extends({}, acc);
    }
    var textBeforeWrap = oldBuffer;
    var newRowsWrapped = rowsWrapped;
    var newHeight = elHeight;
    el.innerHTML = newBuffer = oldBuffer.length
      ? '' + oldBuffer + options.delimiter + token + options.replaceStr
      : '' + token + options.replaceStr;

    if (parseFloat(elStyle.height) > parseFloat(elHeight)) {
      newRowsWrapped++;
      newHeight = elStyle.height;

      if (newRowsWrapped === rowsLimit + 1) {
        el.innerHTML = newBuffer =
          textBeforeWrap[textBeforeWrap.length - 1] === '.' && options.replaceStr === '...'
            ? textBeforeWrap + '..'
            : '' + textBeforeWrap + options.replaceStr;

        return _extends({}, acc, { elHeight: newHeight, rowsWrapped: newRowsWrapped });
      }
    }

    el.innerHTML = newBuffer = textBeforeWrap.length ? '' + textBeforeWrap + options.delimiter + token : '' + token;

    return _extends({}, acc, { buffer: newBuffer, elHeight: newHeight, rowsWrapped: newRowsWrapped });
  }

  function ellipsis() {
    var selector = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
    var rows = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
    var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

    var defaultOptions = {
      replaceStr: '...',
      responsive: false,
      debounceDelay: 250,
      delimiter: ' ',
    };

    var opts = _extends({}, defaultOptions, options);

    var elements =
      selector &&
      (selector instanceof NodeList
        ? selector
        : selector.nodeType === 1 //if node type is Node.ELEMENT_NODE
        ? [selector] // wrap it in (NodeList) if it is a single node
        : document.querySelectorAll(selector));

    var originalTexts = [];

    for (var i = 0; i < elements.length; i++) {
      var el = elements[i];
      originalTexts[i] = el.innerHTML;
      var splittedText = el.innerHTML.split(opts.delimiter);

      el.innerHTML = '';
      var elStyle = window.getComputedStyle(el);

      splittedText.reduce(tokensReducer, {
        el: el,
        buffer: el.innerHTML,
        elStyle: elStyle,
        elHeight: 0,
        rowsLimit: rows,
        rowsWrapped: 0,
        options: opts,
      });
    }

    if (opts.responsive) {
      var resizeTimeout = false;
      var last_window_w = window.innerWidth;

      var resizeHandler = function resizeHandler() {
        if (window.innerWidth !== last_window_w) {
          last_window_w = window.innerWidth;

          for (var _i = 0; _i < elements.length; _i++) {
            elements[_i].innerHTML = originalTexts[_i];
          }

          ellipsis(selector, rows, _extends({}, options, { responsive: false }));
        }
      };

      var resizeListener = function resizeListener() {
        clearTimeout(resizeTimeout);
        resizeTimeout = setTimeout(resizeHandler, opts.debounceDelay);
      };

      window.addEventListener('resize', resizeListener);

      return resizeListener;
    }
  }

  function disableResponsive(listener) {
    window.removeEventListener('resize', listener);
  }

  exports.disableResponsive = disableResponsive;
  exports.ellipsis = ellipsis;
});
