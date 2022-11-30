export const createElement = (type, props = { classes: [''], content: '' }) => {
    const el = document.createElement(type);
    const { classes, content: val, innerHtml } = props
    el.classList.add(...classes)
    el.textContent = val

    return el
}