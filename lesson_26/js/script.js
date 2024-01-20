"use strict"

// Задача №1____________________________
// Отримати в константу елемент <body>

// Відповідь:

// const bodyElement = document.body;
// console.log(bodyElement)


// Задача №2____________________________
// Написати функцію, яка додає в <body> список UL
// з певною кількістю LI (кількість має передаватись як параметр функції, також мати значення за замовченням)

// Відповідь:

// const bodyElement = document.body
// function addUl(item = 5) {
//   const newUl = document.createElement('ul')
//   for (let i = 1; i <= item; i++) {
//     const newLi = document.createElement('li')
//     newUl.append(newLi)
//   }
//   bodyElement.insertAdjacentElement("afterbegin", newUl)
// }

// addUl(10)


// Задача №3_________________________
// Додати до елементу <body> класс loaded.
// Потім перевірити чи є клас loaded у елемента <body>
// і, якщо є, додати стиль кольору тесту зедлений.

// Відповідь:

// const bodyElement = document.body
// bodyElement.classList.add('loaded');
// if (bodyElement.classList.contains('loaded')) {
//   bodyElement.style.color = `green`;
// }

// Задача №4 __________________________
// Дано в html: три елементи з класом item.
// Треба отримати ці елементи в константу, кожному додати клас active,
// та перезаписати контент всередені кожного елемента на "Елемент №(тут порядковий номер елементу починаючи з 1)".

// Відповідь:

// const someElements = document.querySelectorAll('.item')

// for (let i = 0; i < someElements.length; i++) {
//   someElements[i].classList.add('active');
//   someElements[i].textContent = `Елемент №${i + 1}`
// }

// або

// someElements.forEach((element, i) => {
//   element.classList.add('active');
//   element.textContent = `Елемент №${i + 1}`
// });


// Задача №5 _________________________________
// Дано в html: текст, далі кнопка з класом button.
// Треба прокрутити скрол сторінки до кнопки


// Відповідь:

// const someButton = document.querySelector('.button')

// const buttonPos = someButton.offsetTop
// if (someButton) {
//   window.scrollTo({
//     top: buttonPos,
//     let: 0,
//     behavior: "smooth"
//   });
// }

// або


// function scrollToBlock() {
//   someButton.scrollIntoView({
//     //"start", "center", "end". За замовчуванням "center".
//     block: "center",
//     //"start", "center", "end" чи "nearest". За замовчуванням "nearest".
//     inline: "nearest",
//     behavior: "smooth"
//   })
// };

// if (someButton) {
//   scrollToBlock()
// }



// Задача №6 _____________________________________
// Дано в html: посилання з класом link
// Треба додати до посилання дата атрибут зі значенням 100
// Поім отримати значення трибуту, та, якщо значення меньше 200
// пофарбувати колір тексту посилання в червоний

// Відповідь:

// const someLink = document.querySelector('.link')
// if (someLink) {
//   someLink.dataset.someAttr = "100"
//   let valueAttr = parseFloat(someLink.dataset.someAttr);
//   if (someLink.hasAttribute('data-some-attr')) {
//     if (valueAttr < 200) {
//       someLink.style.color = `red`
//     }
//   }
// }



// ---------------------------Домашка 26 ---------------------------

// Задача №1
// Дано в html: три елементи з класом item.
// При кліку на кожен з елментів додати клас active,
// при повторному кліку прибрати клас


document.addEventListener('click', documentAction)

function documentAction(e) {
  const targetElement = e.target
  if (targetElement.closest('.item')) {
    targetElement.classList.toggle('active')
    e.preventDefault()
  }
}


// Задача №2
// Дано в css/scss: body прозорий
// При повному завантаженню сторінки додати клас до body який прибирає прозорість.

window.addEventListener("load", pageLoaded);

function pageLoaded() {
  const body = document.body
  body.classList.add('bg-on')
}


// Задача №3
// Дано в html: header main footer
// Пи наведенні курсору на header змінювати колір фону у footer.
// Коли курсор йде з header повертати початковий фон для footer.


const header = document.querySelector('.header');
const footer = document.querySelector('.footer');
if (header && footer) {
  header.addEventListener('mouseover', () => {
    footer.style.backgroundColor = '#492f2f'
  })
  header.addEventListener('mouseout', () => {
    footer.style.backgroundColor = '#cecece'
  })
}

// Задача №4
// Дано в html: текст, елемент з класом item, текст. Так, що елемент з класом item за межами в'юпотрта.
// Створити функцію яка будує інтервал який буде змінювати контент в елементі item виводячи цифру яка збільшується на одиницю: 1 2 3 ... і т.д.
// Затримка між зміною числа, та до якого числа має працювати інтервал має задаватись в дата атрибутах елемента item.
// Функція має запустатить коли ми доскролюємо до елементу item (його видно), і не запускатись повторно.


const itemElement = document.querySelector('.item-counter')
const maxCount = Math.abs(Math.round(parseFloat(itemElement.getAttribute('data-max-num'))))
const interval = Math.abs(Math.round(parseFloat(itemElement.getAttribute('data-interval-time'))))


let options = {
  root: null,
  rootMargin: "0px 0px 0px 0px",
  threshold: 0.6,
};

let callback = (entries, observer) => {
  entries.forEach((entry) => {
    const itemElement = entry.target;
    if (entry.isIntersecting) {
      if (itemElement && itemElement.hasAttribute('data-max-num') && itemElement.hasAttribute('data-interval-time') && maxCount !== 0) {
        let i = 1
        let timer = setInterval(() => {
          itemElement.textContent = i
          i === maxCount ? clearInterval(timer) : null
          ++i
        }, interval)
      }
      observer.unobserve(itemElement)
    }
  });
}

let observer = new IntersectionObserver(callback, options);
observer.observe(itemElement);






