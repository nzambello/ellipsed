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
  const { el, elStyle, elHeight, rowsLimit, rowsWrapped, options } = acc;
  if (rowsWrapped === rowsLimit + 1) {
    return { ...acc };
  }
  const textBeforeWrap = el.textContent;
  let newRowsWrapped = rowsWrapped;
  let newHeight = elHeight;
  el.textContent = el.textContent.length
    ? `${el.textContent} ${token}${options.replaceStr}`
    : `${token}${options.replaceStr}`;

  if (parseFloat(elStyle.height) > parseFloat(elHeight)) {
    newRowsWrapped++;
    newHeight = elStyle.height;

    if (newRowsWrapped === rowsLimit + 1) {
      el.innerHTML = textBeforeWrap[textBeforeWrap.length - 1] === '.' && options.replaceStr === '...'
        ? `${textBeforeWrap}..`
        : `${textBeforeWrap}${options.replaceStr}`;

      return { ...acc, elHeight: newHeight, rowsWrapped: newRowsWrapped };
    }
  }

  el.textContent = textBeforeWrap.length
    ? `${textBeforeWrap} ${token}`
    : `${token}`;

  return { ...acc, elHeight: newHeight, rowsWrapped: newRowsWrapped };
}

function ellipsis(selector = '', rows = 1, options) {
  let defaultOptions = {
    replaceStr : '...',
  };

  let opts = { ...defaultOptions, ...options };

  const elements = document.querySelectorAll(selector);

  for(let i = 0; i < elements.length; ++i) {
    const el = elements[i];
    const splittedText = el.textContent.split(' ');

    el.textContent = '';
    const elStyle = window.getComputedStyle(el);

    splittedText.reduce(
      tokensReducer,
      {
        el,
        elStyle,
        elHeight: 0,
        rowsLimit: rows,
        rowsWrapped: 0,
        options: opts
      }
    );
  }
}

export { ellipsis };
