function ellipsed(selector, rows) {
  /*   Copyright (C) 2017  Nicola Zambello
   *
   *		https://github.com/nzambello/ellipsed
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

  for (var el of elements) {
    if (rows) {
      var splittedText = el.innerText.split(' ');
      var rowsWrapped = 0;
      var textBeforeWrap = '';

      el.innerText = '';
      var elHeight = window.getComputedStyle(el).height;

      for (var token of splittedText) {
        if (el.innerText.length) {
          el.innerText = el.innerText.concat(' ').concat(token).concat('...');
        }
        else {
          el.innerText = el.innerText.concat(token).concat('...');
        }

        if (parseFloat(window.getComputedStyle(el).height) > parseFloat(elHeight)) {
          elHeight = window.getComputedStyle(el).height;
          rowsWrapped++;

          if (rowsWrapped === rows + 1) {
            el.innerHTML = textBeforeWrap[textBeforeWrap.length - 1] === '.'
                           ? textBeforeWrap.concat('..')
                           : textBeforeWrap.concat('...');

            break;
          }
        }

        textBeforeWrap = textBeforeWrap.length
                         ? textBeforeWrap.concat(' ').concat(token)
                         : textBeforeWrap.concat(token);
        el.innerHTML = textBeforeWrap;
      }
    }
    else {
      el.innerText = '';
    }
  }
};
