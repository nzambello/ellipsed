var ellipsis = window.ellipsed.ellipsis;

function reset() {
  var elements = document.querySelectorAll('.text p');
  var aaa = elements[0];
  var loremIpsum = elements[1];

  aaa.innerText =
    'A a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a';

  loremIpsum.innerText =
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quis lorem ut libero malesuada feugiat. Curabitur non nulla sit amet nisl tempus convallis quis ac lectus. Pellentesque in ipsum id orci porta dapibus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec velit neque, auctor sit amet aliquam vel, ullamcorper sit amet ligula. Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed porttitor lectus nibh. Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a. Lorem ipsum dolor sit amet, consectetur adipiscing elit.';
}

function getReplaceStr() {
  return document.querySelector('.replace-str-input').value;
}

function getResponsive() {
  return document.querySelector('input#responsive-input').checked;
}

function ellipsize(rows) {
  reset();
  ellipsis('.text p.aaa', rows, { replaceStr: getReplaceStr(), responsive: getResponsive() });
  ellipsis('.text p.lorem-ipsum', rows, { replaceStr: getReplaceStr(), responsive: getResponsive() });
  didEllipsize = true;
}

function oneRow() {
  ellipsize(1);
}
document.getElementById('one-row').addEventListener('click', oneRow);

function twoRows() {
  ellipsize(2);
}
document.getElementById('two-rows').addEventListener('click', twoRows);

function threeRows() {
  ellipsize(3);
}
document.getElementById('three-rows').addEventListener('click', threeRows);

function fourRows() {
  ellipsize(4);
}
document.getElementById('four-rows').addEventListener('click', fourRows);

function fiveRows() {
  ellipsize(5);
}
document.getElementById('five-rows').addEventListener('click', fiveRows);

var didEllipsize = false;

function responsiveListener() {
  didEllipsize && window.location.reload();
}
document.getElementById('responsive-input').addEventListener('change', responsiveListener);
