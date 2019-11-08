function ellipsed(selector = '', rows = 1) {
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

  const elements = (selector && selector instanceof NodeList && selector.nodeType === 1) ? selector : document.querySelectorAll(selector);

  for (const el of elements) {
    const splittedText = el.textContent.split(' ');
    let rowsWrapped = 0;
    let textBeforeWrap = '';

    el.textContent = '';
    const elStyle = window.getComputedStyle(el);
    let elHeight = elStyle.height;

    for (const token of splittedText) {
      if (el.textContent.length) {
        el.textContent = `${el.textContent} ${token}...`;
      } else {
        el.textContent = `${el.textContent}${token}...`;
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
        : `${textBeforeWrap}${token}`;
      el.textContent = textBeforeWrap;
    }
  }
}

export default ellipsed;
