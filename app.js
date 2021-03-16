const answers = document.querySelectorAll('.answer');
const questions = document.querySelectorAll('.question strong');
const arrows = document.querySelectorAll('.arrow img');

arrows.forEach((arrow, index) => {
    arrow.addEventListener('click', (e) => {

        if([...arrow.classList].includes('open-arrow')) {
            answers[index].style.maxHeight = '0px';
            setTimeout(() => answers[index].children[0].style.visibility = 'hidden', 300);
            questions[index].style.fontWeight = '400';
        }
        else {
            questions[index].style.fontWeight = '700';
            answers[index].style.maxHeight = '10em';
            answers[index].children[0].style.visibility = 'visible';
        }

        arrow.classList.toggle('open-arrow');

    })

})