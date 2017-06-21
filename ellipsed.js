const ellipsed = (selector, rows) => {
  let elements = document.querySelectorAll(selector);

  for (let el of elements) {
    if (rows) {
      let splittedText = el.innerText.split(' ');
      let rowsWrapped = 0;
      let textBeforeWrap = '';

      el.innerText = '';
      let elHeight = window.getComputedStyle(el).height;

      for (let token of splittedText) {
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
