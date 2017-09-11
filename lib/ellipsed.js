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
  function ellipsed() {
    var selector = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
    var rows = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;

    /*   Copyright (C) 2017  Nicola Zambello
     *
     *    https://github.com/nzambello/ellipsed
     *
     *    The JavaScript code in this page is free software: you can
     *    redistribute it and/or modify it under the terms of the GNU
     *    General Public License (GNU GPL) as published by the Free Software
     *    Foundation, either version 3 of the License, or (at your option)
     *    any later version.  The code is distributed WITHOUT ANY WARRANTY;
     *    without even the implied warranty of MERCHANTABILITY or FITNESS
     *    FOR A PARTICULAR PURPOSE.  See the GNU GPL for more details.
     *
     *    As additional permission under GNU GPL version 3 section 7, you
     *    may distribute non-source (e.g., minimized or compacted) forms of
     *    that code without the copy of the GNU GPL normally required by
     *    section 4, provided you include this license notice and a URL
     *    through which recipients can access the Corresponding Source.
     */

    var elements = document.querySelectorAll(selector);

    var _iteratorNormalCompletion = true;
    var _didIteratorError = false;
    var _iteratorError = undefined;

    try {
      for (var _iterator = elements[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
        var el = _step.value;

        var splittedText = el.textContent.split(' ');
        var rowsWrapped = 0;
        var textBeforeWrap = '';

        el.textContent = '';
        var elStyle = window.getComputedStyle(el);
        var elHeight = elStyle.height;

        var _iteratorNormalCompletion2 = true;
        var _didIteratorError2 = false;
        var _iteratorError2 = undefined;

        try {
          for (var _iterator2 = splittedText[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
            var token = _step2.value;

            if (el.textContent.length) {
              el.textContent = el.textContent + ' ' + token + '...';
            } else {
              el.textContent = '' + el.textContent + token + '...';
            }

            if (parseFloat(elStyle.height) > parseFloat(elHeight)) {
              elHeight = elStyle.height;
              rowsWrapped++;

              if (rowsWrapped === rows + 1) {
                el.innerHTML = textBeforeWrap[textBeforeWrap.length - 1] === '.' ? textBeforeWrap + '..' : textBeforeWrap + '...';

                break;
              }
            }

            textBeforeWrap = textBeforeWrap.length ? textBeforeWrap + ' ' + token : '' + textBeforeWrap + token;
            el.textContent = textBeforeWrap;
          }
        } catch (err) {
          _didIteratorError2 = true;
          _iteratorError2 = err;
        } finally {
          try {
            if (!_iteratorNormalCompletion2 && _iterator2.return) {
              _iterator2.return();
            }
          } finally {
            if (_didIteratorError2) {
              throw _iteratorError2;
            }
          }
        }
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

  exports.default = ellipsed;
});