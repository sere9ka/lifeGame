const start = () => {
    const body = document.querySelector('body')
    const blockForGame = body.querySelector('.main__block-game')
    const arrWH = {}

    const renderGame = arrWH => {
        const blockForGameWidth = blockForGame.offsetWidth
        const blockForGameHeight = blockForGame.offsetHeight
        const newBlockGame = document.createElement('div')
        const blockWidth = blockForGameWidth / arrWH.width
        const blockHeight = blockForGameHeight / arrWH.height

        newBlockGame.classList.add('game__block')
        newBlockGame.style.width = `${blockWidth}px`
        newBlockGame.style.height = `${blockHeight}px`
        blockForGame.append(newBlockGame)

        // blockForGame
        console.log(blockWidth);
        console.log(blockHeight);
    }

    const startGame = () => {
        const inputGroups = body.querySelectorAll('.main__group')
        inputGroups.forEach((group) => {
            const nameKey = group.querySelector('label').textContent
            const value = group.querySelector('input').value
            arrWH[nameKey] = value
        })
        
        renderGame(arrWH)
    }

    body.addEventListener('click', (e) => {
        if (e.target == body.querySelector('button')) {
            startGame()
        }
    })
}

export default start