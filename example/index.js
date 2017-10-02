var ellipsis = window.ellipsed.ellipsis;

function reset() {
  var aaa = document.querySelectorAll('.text p')[0];

  var loremIpsum = document.querySelectorAll('.text p')[1];

  aaa.innerText = 'A a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a';

  loremIpsum.innerText = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quis lorem ut libero malesuada feugiat. Curabitur non nulla sit amet nisl tempus convallis quis ac lectus. Pellentesque in ipsum id orci porta dapibus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec velit neque, auctor sit amet aliquam vel, ullamcorper sit amet ligula. Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed porttitor lectus nibh. Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a. Lorem ipsum dolor sit amet, consectetur adipiscing elit.';
}

function getReplaceStr() {
  return document.querySelector('.replace-str-input').value;
}

function oneRow() {
  reset();
  ellipsis('.text p', 1, { replaceStr: getReplaceStr() });
}

function twoRows() {
  reset();
  ellipsis('.text p', 2, { replaceStr: getReplaceStr() });
}

function threeRows() {
  reset();
  ellipsis('.text p', 3, { replaceStr: getReplaceStr() });
}

function fourRows() {
  reset();
  ellipsis('.text p', 4, { replaceStr: getReplaceStr() });
}

function fiveRows() {
  reset();
  ellipsis('.text p', 5, { replaceStr: getReplaceStr() });
}
