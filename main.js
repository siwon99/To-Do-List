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

let id = 0; //UUID
function createItem(text) {
  const itemRow = document.createElement('li');
  itemRow.setAttribute('class','item__row');
  itemRow.setAttribute('data-id', id);
  itemRow.innerHTML = `
        <div class="item">
          <span class="item__name">${text}</span>
          <button class="item__delete">
            <i class="fa-solid fa-trash-can" data-id=${id}></i>
          </button>
        </div>
        <div class="item__divider"></div>`;
  id++;
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

items.addEventListener('click', event => {
  const id = event.target.dataset.id;
  if(id) {
    const toBeDeleted = document.querySelector(`.item__row[data-id="${id}"]`);
    toBeDeleted.remove();

  }
})