// console.log(document.documentElement); //тег <html>
// console.log(document.body); //тег <body>

console.log(document.body.firstElementChild); // первый элемент body
console.log(document.body.lastElementChild); // последн. элемнт body
console.log(document.body.previousElementSibling); //предыдущий элемент собрат
console.log(document.body.nextElementSibling); //следующий элемент собрат
console.log(document.body.parentElement); //родительский элемент
console.log(document.body.childNodes); // NodeList(12) [text, a, text, a, text, button.backButton, text, button.forwardButton, text, comment, text, script]   //включая переносы(text)
console.log(document.body.children); //HTMLCollection(5) [a, a, button.backButton, button.forwardButton, script]

//Перебор коллекции вывод проверки, является ли он div
// for (let val of document.body.children) {
//     console.log(val.localName === 'div' ? "Это DIV" : "Это не DIV");
// }

//в таком переборе можно узнать тип узла
for (let val of document.body.childNodes) {
    console.dir(val.nodeType); // в выводе увидим цифры расшифровка https://dom.spec.whatwg.org/#node
}

//Свойства узлов--------------------------
/*
nodeType – тип узла
nodeName – название узла
tagName – название элемента
nodeValue – данные текстового узла
data – содержимое текстового узла
outerHTML – содержимое HTML-кода элемента целиком
hidden – скрывает элемент
style – изменяет стиль элемента
className – помогает обращаться
к имени класса элемента и изменить его
innerHTML – позволяет изменить полностью разметку всего элемента
textContent – изменяет содержимое текстового узла
*/ 

/*У нас есть дерево комментариев ввиде вложенных элементов <div>. Каждый комментарий имеет кнопку "Ответить", при нажатии которой открывается форма для написания ответа. Задача - реализовать функциональность, чтобы при нажатии на кнопку "Ответить", только форма этого комментария открывалась, остальные оставались скрытыми.*/

