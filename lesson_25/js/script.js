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

// addUl()


// Задача №3_________________________
// Додати до елементу <body> класс loaded.
// Потім перевірити чи є клас loaded у елемента <body>
// і, якщо є, додати стиль кольору тесту зедлений.

// Відповідь:

// const bodyElement = document.body
// bodyElement.classList.add('loaded');
// if (bodyElement.classList.contains('loaded')) {
//   bodyElement.style.color = `red`;
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
// window.scrollTo({
//   top: buttonPos,
//   let: 0,
//   behavior: "smooth"
// });

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
// scrollToBlock()



// Задача №6 _____________________________________
// Дано в html: посилання з класом link
// Треба додати до посилання дата атрибут зі значенням 100
// Поім отримати значення трибуту, та, якщо значення меньше 200
// пофарбувати колір тексту посилання в червоний

// Відповідь:

// const someLink = document.querySelector('.link')
// someLink.dataset.someAttr = "100"
// let valueAttr = parseFloat(someLink.dataset.someAttr);
// if (someLink.hasAttribute('data-some-attr')) {
//   if (valueAttr < 200) {
//     someLink.style.color = `red`
//   }
// } 