import { catalogTitle, navigationList, navigationListItems } from "./elements.js"

export const navigationListController = cb => {
    navigationList.addEventListener('click', e => {
        const categoryItem = e.target.closest('.navigation__button')

        if(!categoryItem) return;

        navigationListItems.forEach((item) => {
            if(item === categoryItem){
                item.classList.add('navigation__button_active')
                catalogTitle.textContent = item.textContent
                cb(item.dataset.category)
            } else {
                item.classList.remove('navigation__button_active')
            }
        })
    })
}
