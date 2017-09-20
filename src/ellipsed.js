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
  const { el, elStyle, rowsLimit, rowsWrapped } = acc;
  if (rowsWrapped === rowsLimit + 1) {
    return { ...acc };
  }
  const textBeforeWrap = el.textContent;
  const elHeight = elStyle.height;
  let newRowsWrapped = rowsWrapped;
  el.textContent = el.textContent.length
    ? `${el.textContent} ${token}...`
    : `${token}...`;

  if (parseFloat(elStyle.height) > parseFloat(elHeight)) {
    newRowsWrapped++;

    if (newRowsWrapped === rowsLimit + 1) {
      el.textContent = textBeforeWrap[textBeforeWrap.length - 1] === '.'
        ? `${textBeforeWrap}..`
        : `${textBeforeWrap}...`;
      
      return { ...acc, rowsWrapped: newRowsWrapped };
    }
  }

  el.textContent = textBeforeWrap.length
    ? `${textBeforeWrap} ${token}`
    : `${token}`;

  return { ...acc, rowsWrapped: newRowsWrapped };
}

function ellipsis(selector = '', rows = 1) {
  const elements = document.querySelectorAll(selector);

  for (const el of elements) {
    const splittedText = el.textContent.split(' ');
    // let rowsWrapped = 0;
    // let textBeforeWrap = '';

    el.textContent = '';
    const elStyle = window.getComputedStyle(el);
    // let elHeight = elStyle.height;

    splittedText.reduce(
      tokensReducer,
      {
        el,
        elStyle,
        rowsLimit: rows,
        rowsWrapped: 0,
      }
    );
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
}

export { ellipsis };
