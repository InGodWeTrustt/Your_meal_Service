import { API_URL, PREFIX_PRODUCT } from "./const.js"
import { createCardProduct } from "./createCardProduct.js";
import { catalogList } from "./elements.js"
import { getData } from "./getData.js"

export const renderListProduct = async () => {
    catalogList.textContent = '';
    const listProduct = await getData(`${API_URL}${PREFIX_PRODUCT}`)
    const listCard = listProduct.map(createCardProduct)
    // console.log('listCard: ', listCard);
    catalogList.append(...listCard)
    debugger;
}