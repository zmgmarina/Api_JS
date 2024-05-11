// History API даёт доступ к управлению историей браузера в рамках текущей сессии. Браузер создаёт новую сессию, когда пользователь открывает новую вкладку или новое окно браузера.
// С помощью History API можно переходить по истории вперёд, назад и управлять содержимым истории. Доступ к API осуществляется с помощью объекта window.history.

// Основные методы:
// back() перемещает пользователя по истории на страницу назад;
// forward() перемещает пользователя по истории на страницу вперёд;
// go() универсальный метод для перемещения по истории вперёд или назад;
// pushState() добавляет новую запись в истории сессии;
// replaceState() изменяет текущую запись в истории сессии.

const backButton = document.querySelector('.backButton');
const forwardButton = document.querySelector('.forwardButton');

backButton.addEventListener('click', () => {
    window.history.back();         //можно применить setTimout, выставить время, через которое вернется к предыдущей странице
});

forwardButton.addEventListener('click', () => {
    window.history.forward();
});



