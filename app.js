const btns = document.querySelectorAll('.counter__button');

btns.forEach(btn => {
    btn.addEventListener('click', function () {
        const direction = this.dataset.direction;
        const inp = this.parentElement
            .querySelector('.input')
        const counterValue = +inp.value;
        let newCounter;

        if (direction === 'plus') {
            newCounter = counterValue +1;
        } else {
            newCounter = counterValue - 1 > 0 ?
                counterValue - 1 : 0;
        }
        inp.value = newCounter;
    })
})

















