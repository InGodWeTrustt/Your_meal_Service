import { API_URL } from "./const.js";

export const createCardProduct = ({image, title, weight, price, id}) => {
    const li = document.createElement('li');

    li.classList.add('catalog__item');

    li.innerHTML = `<article class="product" data-id-product=${id}>
    <img class="product__image" src="${API_URL}/${image}" alt="${title}">

    <p class="product__price">${price}<span class="currency">₽</span></p>

    <h3 class="product__title">
      <button class="product__detail">${title}</button>
    </h3>

    <p class="product__weight">${weight}</p>

    <button class="product__add">Добавить</button>
  </article>
    `
    return li
}