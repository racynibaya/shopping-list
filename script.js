var userInput = document.getElementById('user-input');
var button = document.getElementById('button');
var body = document.getElementsByTagName('body')[0];
var li = document.querySelectorAll('li');
var ul = document.querySelector('ul');

function getInputLength() {
  return userInput.value.length;
}

function createElementList() {
  var li = document.createElement('li');
  li.appendChild(document.createTextNode(userInput.value));

  ul.appendChild(li);

  userInput.value = '';
}

function addElAfterClick() {
  if (getInputLength() > 0) {
    createElementList();
  }
}

function addElAfterEnter(e) {
  if (getInputLength() > 0 && e.key === 'Enter') {
    createElementList();
  }
}

function toggleLineThrough(e) {
  var ulChildLength = ul.children.length;
  for (var i = 0; i < ulChildLength; i++) {
    if (e.target === ul.children[i]) {
      e.target.classList.toggle('done');
    }
  }
}

button.addEventListener('click', addElAfterClick);

body.addEventListener('keypress', addElAfterEnter);

body.addEventListener('click', toggleLineThrough);
