import { clearCart } from "./cart.js"
import { modalDeliveryForm } from "./elements.js"

export const orderController = (getCart) => {
    modalDeliveryForm.addEventListener('change', () => {
        if (modalDeliveryForm.format.value === 'pickup') {
            modalDeliveryForm['address-info'].classList.add('modal-delivery__fieldset-input_hide')
        }

        if (modalDeliveryForm.format.value === 'delivery') {
            modalDeliveryForm['address-info'].classList.remove('modal-delivery__fieldset-input_hide')
        }
    })

    modalDeliveryForm.addEventListener('submit', e => {
        // чтоб не было перезагрузки страницы
        e.preventDefault();

        const formData = new FormData(modalDeliveryForm);
        // console.log(Object.fromEntries(formData));

        const data = Object.fromEntries(formData)
        data.order = getCart()

        fetch('https://63895b67c5356b25a2feb4a8.mockapi.io/order', {
            method: 'post',
            body: JSON.stringify(data),
        }).then(res => res.json())
            .then(data => console.log(data))
            .finally(clearCart)
    })
}