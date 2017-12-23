var ellipsis = window.ellipsed.ellipsis;
var disableResponsive = window.ellipsed.disableResponsive;

var globalState = {
  lastEllipsis: null,
};

function setLastEllipsis(state, lastEllipsis) {
  if (typeof lastEllipsis == 'number' && state) {
    state.lastEllipsis = lastEllipsis;
  }
}

function getReplaceStr() {
  return document.querySelector('.replace-str-input').value;
}

function getResponsive() {
  return document.querySelector('input#responsive-input').checked;
}

var resizeListenerAaa;
var resizeListenerLorem;

function ellipsize(rows) {
  if (rows === null) {
    return;
  }

  var replaceStr = getReplaceStr();
  var responsive = getResponsive();

  reset(resizeListenerAaa, resizeListenerLorem);

  resizeListenerAaa = ellipsis('.text p.aaa', rows, { replaceStr: replaceStr, responsive: responsive });
  resizeListenerLorem = ellipsis('.text p.lorem-ipsum', rows, { replaceStr: replaceStr, responsive: responsive });
  setLastEllipsis(globalState, rows);
}

function clearEllipsis(resizeListenerAaa, resizeListenerLorem) {
  if (typeof resizeListenerAaa !== 'undefined' && typeof resizeListenerLorem !== 'undefined') {
    disableResponsive(resizeListenerAaa);
    disableResponsive(resizeListenerLorem);
  }
}

function reset(resizeListenerAaa, resizeListenerLorem) {
  var elements = document.querySelectorAll('.text p');
  var aaa = elements[0];
  var loremIpsum = elements[1];

  aaa.innerHTML =
    'A a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a';

  loremIpsum.innerHTML =
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. <strong>It works with formatted content, too.</strong> Nulla quis lorem ut libero malesuada feugiat. Curabitur non nulla sit amet nisl tempus convallis quis ac lectus. Pellentesque in ipsum id orci porta dapibus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec velit neque, auctor sit amet aliquam vel, ullamcorper sit amet ligula. Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed porttitor lectus nibh. Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a. Lorem ipsum dolor sit amet, consectetur adipiscing elit.';

  clearEllipsis(resizeListenerAaa, resizeListenerLorem);
  globalState.lastEllipsis = null;
}

document.querySelector('.controls').addEventListener('click', function(e) {
  if (e.target.tagName.toLowerCase() == 'button') {
    var row = Number(e.target.getAttribute('data-row'));
    if (row) {
      ellipsize(row);
    }
  }
});

document.getElementById('responsive-input').addEventListener('change', function() {
  if (globalState.lastEllipsis) {
    ellipsize(globalState.lastEllipsis);
  }
});

document.querySelector('.replace-str-input').addEventListener('input', function() {
  if (globalState.lastEllipsis) {
    ellipsize(globalState.lastEllipsis);
  }
});
