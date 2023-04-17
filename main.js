'use strict';

const items = document.querySelector('.items');
const input = document.querySelector('.footer__input');
const addBtn = document.querySelector('.footer__btn');


function onAdd() {
  const text = input.value;  //1. 사용자가 입력한 텍스트 받아오기
  if(text === '') {
    input.focus();
    return;
  }

  const item = createItem(text); //2. 받아온 텍스트로 새로운 아이템 만들기

  items.appendChild(item);   //3. items 안에 새로 만든 아이템 추가

  item.scrollIntoView({block: 'center'});   //4. 새로 추가된 item으로 이동(스크롤링)

  input.value='';   //5. input을 초기화(비어있는 상태)
  input.focus();
}

function createItem(text) {
  const itemRow = document.createElement('li');
  itemRow.setAttribute('class','item__row');

  const item = document.createElement('div');
  item.setAttribute('class','item');

  const name = document.createElement('span');
  name.setAttribute('class', 'item__name');
  name.innerText = text;

  const deleteBtn = document.createElement('button');
  deleteBtn.setAttribute('class', 'item__delete');
  deleteBtn.innerHTML = '<i class="fa-solid fa-trash-can"></i>';
  deleteBtn.addEventListener('click', () => {
    items.removeChild(itemRow);
  });
  
  const itemDivider = document.createElement('div');
  itemDivider.setAttribute('class', 'item__divider');

  item.appendChild(name);
  item.appendChild(deleteBtn);

  itemRow.appendChild(item);
  itemRow.appendChild(itemDivider);
  return itemRow;
}

//list 삭제
addBtn.addEventListener('click', () => {
  onAdd();
});

//enter키 입력시 추가
input.addEventListener('keypress', (event) => {
  if(event.key === 'Enter') {
    onAdd();
  }
});