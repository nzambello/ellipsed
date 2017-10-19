var ellipsis = window.ellipsed.ellipsis;

function reset() {
  var aaa = document.querySelectorAll('.text p')[0];

  var loremIpsum = document.querySelectorAll('.text p')[1];

  aaa.innerText =
    'A a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a';

  loremIpsum.innerText =
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quis lorem ut libero malesuada feugiat. Curabitur non nulla sit amet nisl tempus convallis quis ac lectus. Pellentesque in ipsum id orci porta dapibus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec velit neque, auctor sit amet aliquam vel, ullamcorper sit amet ligula. Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed porttitor lectus nibh. Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a. Lorem ipsum dolor sit amet, consectetur adipiscing elit.';
}

function getReplaceStr() {
  return document.querySelector('.replace-str-input').value;
}

function getResponsive() {
  return document.querySelector('input.responsive-input').checked;
}

function oneRow() {
  reset();
  ellipsis('.text p.aaa', 1, { replaceStr: getReplaceStr(), responsive: getResponsive() });
  ellipsis('.text p.lorem-ipsum', 2, { replaceStr: getReplaceStr(), responsive: getResponsive() });
}

function twoRows() {
  reset();
  ellipsis('.text p.aaa', 2, { replaceStr: getReplaceStr(), responsive: getResponsive() });
  ellipsis('.text p.lorem-ipsum', 3, { replaceStr: getReplaceStr(), responsive: getResponsive() });
}

function threeRows() {
  reset();
  ellipsis('.text p.aaa', 3, { replaceStr: getReplaceStr(), responsive: getResponsive() });
  ellipsis('.text p.lorem-ipsum', 4, { replaceStr: getReplaceStr(), responsive: getResponsive() });
}

function fourRows() {
  reset();
  ellipsis('.text p.aaa', 4, { replaceStr: getReplaceStr(), responsive: getResponsive() });
  ellipsis('.text p.lorem-ipsum', 5, { replaceStr: getReplaceStr(), responsive: getResponsive() });
}

function fiveRows() {
  reset();
  ellipsis('.text p.aaa', 5, { replaceStr: getReplaceStr(), responsive: getResponsive() });
  ellipsis('.text p.lorem-ipsum', 6, { replaceStr: getReplaceStr(), responsive: getResponsive() });
}
