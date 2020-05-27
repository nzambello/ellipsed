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

const NUMBER_OF_EXAMPLE = 4;
var resizeListenerList = new Array(NUMBER_OF_EXAMPLE);

function ellipsize(rows) {
  if (rows === null) {
    return;
  }

  var replaceStr = getReplaceStr();
  var responsive = getResponsive();

  reset(resizeListenerList);

  resizeListenerList[0] = ellipsis('.text p.aaa', rows, { replaceStr: replaceStr, responsive: responsive });
  resizeListenerList[1] = ellipsis('.text p.lorem-ipsum', rows, { replaceStr: replaceStr, responsive: responsive });
  resizeListenerList[2] = ellipsis('.text p.jp', rows, {
    replaceStr: replaceStr,
    responsive: responsive,
    delimiter: '', // CJK text should be split character by character
  });
  resizeListenerList[3] = ellipsis('.text p.long-word', rows, {
    replaceStr: replaceStr,
    responsive: responsive,
    delimiter: '', // text contains long word should be split character by character
  });
  resizeListenerList[4] = ellipsis(document.querySelector('.text-root p'), rows, {
    replaceStr: replaceStr,
    responsive: responsive,
    delimiter: '', // CJK text should be split character by character
  });

  setLastEllipsis(globalState, rows);
}

function clearEllipsis(resizeListenerList) {
  if (resizeListenerList.every(resizeListener => typeof resizeListener !== 'undefined')) {
    resizeListenerList.forEach(listener => {
      disableResponsive(listener);
    });
  }
}

function reset(resizeListenerList) {
  var elements = document.querySelectorAll('.text p');
  var aaa = elements[0];
  var loremIpsum = elements[1];
  var jp = elements[2];
  var longWord = elements[3];
  var textNode = document.querySelector('.text-root p');

  aaa.innerHTML =
    'A a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a';

  loremIpsum.innerHTML =
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. <strong>It works with formatted content, too.</strong> Nulla quis lorem ut libero malesuada feugiat. Curabitur non nulla sit amet nisl tempus convallis quis ac lectus. Pellentesque in ipsum id orci porta dapibus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec velit neque, auctor sit amet aliquam vel, ullamcorper sit amet ligula. Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed porttitor lectus nibh. Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a. Lorem ipsum dolor sit amet, consectetur adipiscing elit.';

  jp.innerHTML =
    '皮肉にも、捜索のきっかけとなった海王星の軌道の摂動の原因となるには、<strong>冥王星</strong>はあまりにも小さすぎた。19世紀に天文学者が観測した海王星の軌道の計算との食い違いは、海王星の質量の見積もりが正確でなかったためのものだった。いったんそれが分かると、冥王星が非常に暗く、望遠鏡で円盤状に見えないことから、冥王星はローウェルの考えた惑星Xであるという考えに疑問の目が向けられた。ローウェルは1915年に惑星Xの位置を予測しており、これは当時の冥王星の実際の位置にかなり近かった。しかし、アーネスト・ウィリアム・ブラウンはほとんど即座にこれは偶然の一致だと結論付け、この見方は今日でも支持されている。従って、冥王星がピッカリング、ローウェル、ケタカルの予測した領域の近くにあったことがただの偶然に過ぎないことを考慮すると、トンボーが冥王星を発見したことはさらに驚くべきことになる。';

  longWord.innerHTML =
    'Methionyl​threonyl​threonyl​glutaminyl​alanyl​prolyl​threonyl​phenyl​alanyl​threonyl​glutaminyl​prolyl​leucyl​glutaminyl​seryl​valyl​valyl​valyl​leucyl​glutamyl​glycyl​seryl​threonyl​alanyl​threonyl​phenyl​alanyl​glutamyl​alanyl​histidyl​isoleucyl​seryl​glycyl​phenyl​alanyl​prolyl​valyl​prolyl​glutamyl​valyl​seryl​tryptophyl​phenyl​alanyl​arginyl​aspartyl​glycyl​glutaminyl​valyl​isoleucyl​seryl​threonyl​seryl​threonyl​leucyl​prolyl​glycyl​valyl​glutaminyl​isoleucyl​seryl​phenyl​alanyl​seryl​aspartyl​glycyl​arginyl​alanyl​lysyl​leucyl​threonyl​isoleucyl​prolyl​alanyl​valyl​threonyl​lysyl​alanyl​asparaginyl​seryl​glycyl​arginyl​tyrosyl​seryl​leucyl​lysyl​alanyl​threonyl​asparaginyl​glycyl​seryl​glycyl​glutaminyl​alanyl​threonyl​seryl​threonyl​alanyl​glutamyl​leucyl​leucyl​valyl​lysyl​alanyl​glutamyl​threonyl​alanyl​prolyl​prolyl​asparaginyl​phenyl​alanyl​valyl​glutaminyl​arginyl​leucyl​glutaminyl​seryl​methionyl​threonyl​valyl​arginyl​glutaminyl​glycyl​seryl​glutaminyl​valyl​arginyl​leucyl​';

  if (textNode.length) {
    [...textNode].map(text => {
      text.innerHTML =
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quis lorem ut libero malesuada feugiat. Curabitur non nulla sit amet nisl tempus convallis quis ac lectus. Pellentesque in ipsum id orci porta dapibus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec velit neque, auctor sit amet aliquam vel, ullamcorper sit amet ligula. Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed porttitor lectus nibh. Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a. Lorem ipsum dolor sit amet, consectetur adipiscing elit.';
    });
  } else {
    textNode.innerHTML =
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quis lorem ut libero malesuada feugiat. Curabitur non nulla sit amet nisl tempus convallis quis ac lectus. Pellentesque in ipsum id orci porta dapibus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec velit neque, auctor sit amet aliquam vel, ullamcorper sit amet ligula. Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed porttitor lectus nibh. Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a. Lorem ipsum dolor sit amet, consectetur adipiscing elit.';
  }

  clearEllipsis(resizeListenerList);
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
