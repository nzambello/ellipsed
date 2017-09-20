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
        rowsLimit = acc.rowsLimit,
        rowsWrapped = acc.rowsWrapped;

    if (rowsWrapped === rowsLimit + 1) {
      return _extends({}, acc);
    }
    var textBeforeWrap = el.textContent;
    var elHeight = elStyle.height;
    var newRowsWrapped = rowsWrapped;
    el.textContent = el.textContent.length ? el.textContent + ' ' + token + '...' : token + '...';

    if (parseFloat(elStyle.height) > parseFloat(elHeight)) {
      newRowsWrapped++;

      if (newRowsWrapped === rowsLimit + 1) {
        el.textContent = textBeforeWrap[textBeforeWrap.length - 1] === '.' ? textBeforeWrap + '..' : textBeforeWrap + '...';

        return _extends({}, acc, { rowsWrapped: newRowsWrapped });
      }
    }

    el.textContent = textBeforeWrap.length ? textBeforeWrap + ' ' + token : '' + token;

    return _extends({}, acc, { rowsWrapped: newRowsWrapped });
  }

  function ellipsis() {
    var selector = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
    var rows = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;

    var elements = document.querySelectorAll(selector);

    var _iteratorNormalCompletion = true;
    var _didIteratorError = false;
    var _iteratorError = undefined;

    try {
      for (var _iterator = elements[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
        var el = _step.value;

        var splittedText = el.textContent.split(' ');
        // let rowsWrapped = 0;
        // let textBeforeWrap = '';

        el.textContent = '';
        var elStyle = window.getComputedStyle(el);
        // let elHeight = elStyle.height;

        splittedText.reduce(tokensReducer, {
          el: el,
          elStyle: elStyle,
          rowsLimit: rows,
          rowsWrapped: 0
        });
        /* for (const token of splittedText) {
          if (el.textContent.length) {
            el.textContent = `${el.textContent} ${token}...`;
          } else {
            el.textContent = `${token}...`;
          }
           if (parseFloat(elStyle.height) > parseFloat(elHeight)) {
            elHeight = elStyle.height;
            rowsWrapped++;
             if (rowsWrapped === rows + 1) {
              el.innerHTML = textBeforeWrap[textBeforeWrap.length - 1] === '.'
                ? `${textBeforeWrap}..`
                : `${textBeforeWrap}...`;
               break;
            }
          }
           textBeforeWrap = textBeforeWrap.length
            ? `${textBeforeWrap} ${token}`
            : `${token}`;
          el.textContent = textBeforeWrap;
        } */
      }
    } catch (err) {
      _didIteratorError = true;
      _iteratorError = err;
    } finally {
      try {
        if (!_iteratorNormalCompletion && _iterator.return) {
          _iterator.return();
        }
      } finally {
        if (_didIteratorError) {
          throw _iteratorError;
        }
      }
    }
  }

  exports.ellipsis = ellipsis;
});