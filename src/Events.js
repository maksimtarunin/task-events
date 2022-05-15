/*
   1. Создайте функцию createButton(). Необходимо, чтобы эта функция осуществила вставку в body тег button с текстом: "Удали меня".
      При клике по button удалить этот button.
*/
export function createButton() {
    document.body.insertAdjacentHTML(
        'afterbegin',
        '<button>Удали меня</button>',
    );
    const button = document.getElementsByTagName('button')[0];
    button.addEventListener('click', () => button.remove());
}

/*
   2. Создайте функцию createArrList(arr), в которую передается 1 параметр: arr - массив строк.
      Функция выводит этот массив в виде маркированного списка внутри тега body.
      При наведении курсора мыши на элемент списка у этого элемента создается атрибут title, в котором записан его текст.
*/
export function createArrList(arr) {
    let ul = document.createElement('ul');
    document.body.appendChild(ul);

    for (let element of arr) {
        let li = document.createElement('li');
        li.innerHTML = element;
        li.addEventListener('mouseover', () =>
            li.setAttribute('title', element),
        );
        ul.appendChild(li);
    }
}

/*
   3. Создайте функцию createLink(), которая сгенерирует следующую разметку и вставит ее в body:

      <a href="https://tensor.ru/">tensor</a>

      При первом клике по ссылке в конец ее текста через пробел дописывается ее href.
      При следующем клике происходит действие по умолчанию (переход по ссылке в текущей вкладке).
*/
export function createLink() {
    document.body.insertAdjacentHTML(
        'afterbegin',
        '<a href="https://tensor.ru/">tensor</a>',
    );
    const linkNode = document.getElementsByTagName('a')[0];

    linkNode.addEventListener(
        'click',
        (event) => {
            linkNode.text += ' ' + linkNode.getAttribute('href');
            event.preventDefault();
        },
        { once: true },
    );
}

/*
   4. Создайте функцию createList(), которая сгенерирует следующую разметку и вставит ее в body:

      <ul>
         <li>Пункт</li>
      </ul>
      <button>Добавить пункт</button>

      При клике по элементу li ему в конец текста добавляется восклицательный знак.
      При клике по button в конец списка добавляется новый элемент li с текстом: "Пункт".
      Клик по новому li также добавляет восклицательный знак в конец текста.
*/
export function createList() {
    let ul = document.createElement('ul');
    document.body.appendChild(ul);

    let li = document.createElement('li');
    li.innerHTML = 'Пункт';
    li.addEventListener('click', () => (li.innerHTML += '!'));
    ul.appendChild(li);

    let button = document.createElement('button');
    button.innerHTML = 'Добавить пункт';
    button.addEventListener('click', () => {
        let li = document.createElement('li');
        li.innerHTML = 'Пункт';
        li.addEventListener('click', () => (li.innerHTML += '!'));
        ul.appendChild(li);
    });
    document.body.appendChild(button);
}
