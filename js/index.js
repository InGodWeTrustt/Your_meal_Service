import { createCardProduct } from "./createCardProduct.js";
import {
    catalogList,
    modalProduct
} from "./elements.js";
import { navigationListController } from "./navigationListController.js";
import { openModal } from "./openModal.js";
import { renderListProduct } from "./renderListProduct.js";


const burgerMax = {
    title: 'Бургер Макс',
    price: 10000,
    weight: 5000,
    calories: 150000,
    description: 'Огромный бургер',
    image: 'img/megaburger.jpg',
    ingredients: [
        'Пшеничная булка',
        'Котлета из говядины',
        'Много сыра',
        'Листья салата'
    ]
}


// Добавим обработчик события клика по элементу
catalogList.addEventListener('click', event => {
    const target = event.target
    if (target.closest('.product__detail') || target.closest('.product__image')) {
        openModal(burgerMax)
    }
})

modalProduct.addEventListener('click', () => {
    const target = event.target;
    // console.log(target);
    if (target.closest('.modal__close') || target === modalProduct) {
        // скрыть модальное окно
        modalProduct.classList.remove('modal_open');
    }
})


const init = () => {
    renderListProduct();
    navigationListController()
}

init()