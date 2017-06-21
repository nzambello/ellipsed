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
        textBeforeWrap = textBeforeWrap.concat('...');
        break;
      }
    }

    beforeWrappedToken = token;
    textBeforeWrap = textBeforeWrap.length
                     ? textBeforeWrap.concat(' ').concat(beforeWrappedToken)
                     : textBeforeWrap.concat(beforeWrappedToken);
  }

  el.innerHTML = textBeforeWrap;
};
