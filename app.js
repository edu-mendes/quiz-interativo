const form = document.querySelector('.quiz-form')

const h2 = document.createElement('h2')

const button = document.querySelector('button')

const correctAnswers = ['D', 'C', 'B', 'A']

form.addEventListener('submit', event => {
    event.preventDefault()

    let score = 0

    const userAnswers = [
        form.inputQuestion1.value,
        form.inputQuestion2.value,
        form.inputQuestion3.value,
        form.inputQuestion4.value,
    ]

    userAnswers.forEach((userAnswer, index) => {
        if (userAnswer === correctAnswers[index]) {
            score += 25
        }
    })
    h2.textContent = `Aproveitamento de ${score}% dos pontos`
    h2.setAttribute('class', 'm-5 bg-danger bg-gradient text-warning')
    button.insertAdjacentElement('afterend', h2)
})