import {
    modalProductDescription,
    modalProductImage,
    modalProductPriceCount,
    modalProductTitle,
    ingredientsCalories,
    ingredientsList,
    modalProduct,
    modalProductBtn
} from "./elements.js"
import { createElement } from "./createElement.js"
import { getData } from "./getData.js"
import { API_URL, PREFIX_PRODUCT } from "./const.js"


export const openModal = async id => {
    const product = await getData(`${API_URL}${PREFIX_PRODUCT}/${id}`)
    console.log('product: ', product);
    ingredientsList.textContent = ''

    const ingredientListItems = product.ingredients.map(elem => {
        const el = createElement('li', { classes: ['ingredients__item'], content: elem })
        return el;
    })

    ingredientsList.append(...ingredientListItems)

    const { title, image: src, description, calories, price, weight, id: productId } = product

    modalProductTitle.textContent = title;
    modalProductImage.src = `${API_URL}/${src}`;
    modalProductDescription.textContent = description;
    ingredientsCalories.textContent = `${weight}г, ккал ${calories}`;
    modalProductPriceCount.textContent = price;

    modalProductBtn.dataset.idProduct = productId
    // показать модальное окно
    modalProduct.classList.add('modal_open');
}