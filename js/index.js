import { cartInit } from "./cart.js";
import {
    catalogList,
    modalProduct
} from "./elements.js";
import { navigationListController } from "./navigationListController.js";
import { openModal } from "./openModal.js";
import { renderListProduct } from "./renderListProduct.js";


// Добавим обработчик события клика по элементу
catalogList.addEventListener('click', event => {
    const target = event.target
    if (target.closest('.product__detail') || target.closest('.product__image')) {
        const id = target.closest('.product').dataset.idProduct;
        openModal(id);
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
    navigationListController(renderListProduct)
    cartInit()
}

init()