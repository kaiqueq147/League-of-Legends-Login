const helpButton = document.querySelector('.help')
const helpBox = document.querySelector('.help-info')



helpButton.addEventListener('mouseover', () => {
    helpBox.classList.add('ativo')
})
helpButton.addEventListener('mouseleave', () => {
    helpBox.classList.remove('ativo')
})