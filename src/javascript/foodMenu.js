const foodMenu = () => {

    const foodButton = document.querySelectorAll('.food-menu__button')
    const foodCorses = document.querySelectorAll('.food-menu__corses')

    const changeMenu = (event) => {

        const currentMenuButton = event.target

        const currentMenuButtonId = event.target.dataset.tabId

        const currentMenuCorses = document.querySelector(`.food-menu__corses[data-tab-id="${currentMenuButtonId}"]`)

        foodButton.forEach(button => button.classList.remove('food-menu__button--current'))
        foodCorses.forEach(corse => corse.classList.remove('food-menu__corses--current'))

        currentMenuButton.classList.add('food-menu__button--current')

        if (changeMenu) {
            currentMenuCorses.classList.add('food-menu__corses--current')
        }
    }


    foodButton.forEach(button => button.addEventListener('click', changeMenu))

}

foodMenu()