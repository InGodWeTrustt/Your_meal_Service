import {
    modalProductDescription,
    modalProductImage,
    modalProductPriceCount,
    modalProductTitle,
    ingredientsCalories,
    ingredientsList,
    modalProduct
} from "./elements.js"
import { createElement } from "./createElement.js"


export const openModal = (product) => {

    ingredientsList.textContent = ''

    const ingredientListItems = product.ingredients.map(elem => {
        const el = createElement('li', { classes: ['ingredients__item'], content: elem })
        return el;
    })

    ingredientsList.append(...ingredientListItems)

    const { title, image: src, description, calories, price, weight } = product

    modalProductTitle.textContent = title;
    modalProductImage.src = src;
    modalProductDescription.textContent = description;
    ingredientsCalories.textContent = `${weight}г, ккал ${calories}`;
    modalProductPriceCount.textContent = price;

    // показать модальное окно
    modalProduct.classList.add('modal_open');
}