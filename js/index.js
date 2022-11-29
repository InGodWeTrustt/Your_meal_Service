// console.dir(document) // Представить в виде объекта DOM дерево

const createElement = (type, props = {classes: ['test'], content: ''}) => {
    const el = document.createElement(type);
    const {classes, content : val} = props
    el.classList.add(...classes)
    el.textContent = val
    return el
}


const product = {
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

const modalProduct = document.querySelector('.modal_product');
const catalogList = document.querySelector('.catalog__list')

const modalProductTitle = document.querySelector('.modal-product__title');
const modalProductImage = document.querySelector('.modal-product__image');
const modalProductDescription = document.querySelector('.modal-product__description');
const ingredientsList = document.querySelector('.ingredients__list');
const ingredientsCalories = document.querySelector('.ingredients__calories');
const modalProductPriceCount = document.querySelector('.modal-product__price-count');

ingredientsList.textContent = ''

const ingredientListItems = product.ingredients.map(elem => {
    const el = createElement('li', {classes: ['ingredients__item'], content: elem})
    return el;
})

ingredientsList.append(...ingredientListItems)

const {title, image: src, description, calories, price} = product

modalProductTitle.textContent = title;
modalProductImage.src = src;
modalProductDescription.textContent = description;
ingredientsCalories.textContent = calories;
modalProductPriceCount.textContent = price;


// Добавим обработчик события клика по элементу
catalogList.addEventListener('click', event => {
    const target = event.target
    if (target.closest('.product__detail') || target.closest('.product__image')) {
        // показать модальное окно
        modalProduct.classList.add('modal_open');
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
