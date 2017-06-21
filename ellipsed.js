const ellipsed = (selector, rows) => {
  let el = document.querySelector(selector);
  let text = el.innerText;

  let splittedText = text.split(' ');
  let rowsWrapped = 0;
  let beforeWrappedToken = '';
  let textBeforeWrap = '';

  el.innerText = '';
  let elHeight = window.getComputedStyle(el).height;

  for (let token of splittedText) {
    if (el.innerText.length) {
      el.innerText = el.innerText.concat(' ').concat(token);
    }
    else {
      el.innerText = el.innerText.concat(token);
    }

    if (window.getComputedStyle(el).height > elHeight) {
      elHeight = window.getComputedStyle(el).height;
      rowsWrapped++;

      if (rowsWrapped === rows + 1) {
        el.innerHTML = textBeforeWrap.concat('...');
        break;
      }
    }

    textBeforeWrap = textBeforeWrap.length
                     ? textBeforeWrap.concat(' ').concat(token)
                     : textBeforeWrap.concat(token);
  }

  // el.innerHTML = textBeforeWrap;
};
