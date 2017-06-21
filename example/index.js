const reset = () => {
  let aaa = document.querySelectorAll('.text p')[0];

  let loremIpsum = document.querySelectorAll('.text p')[1];

  aaa.innerText = 'A a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a';

  loremIpsum.innerText = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quis lorem ut libero malesuada feugiat. Curabitur non nulla sit amet nisl tempus convallis quis ac lectus. Pellentesque in ipsum id orci porta dapibus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec velit neque, auctor sit amet aliquam vel, ullamcorper sit amet ligula. Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed porttitor lectus nibh. Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a. Lorem ipsum dolor sit amet, consectetur adipiscing elit.';
};

const uno = () => {
  reset();
  ellipsed('.text p', 1);
};

const due = () => {
  reset();
  ellipsed('.text p', 2);
};

const tre = () => {
  reset();
  ellipsed('.text p', 3);
};

const quattro = () => {
  reset();
  ellipsed('.text p', 4);
};

const cinque = () => {
  reset();
  ellipsed('.text p', 5);
};
