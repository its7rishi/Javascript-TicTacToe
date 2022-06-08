const boxes = document.getElementsByClassName('play-box')

let playbox = [...boxes]

// GAME LOGIC

let prevValue = '' //TO record the previous value

playbox.forEach(elem => {
    elem.addEventListener('click', () => {
        console.log("click")

        if(!elem.textContent && prevValue !== 'x') {
            elem.textContent = 'x'
            prevValue = elem.textContent
        } else if(prevValue !== 'o') {
            elem.textContent = 'o'
            prevValue = elem.textContent
        } else {
            return
        }

        chooseWinner();
    })
    
})

// Select Winner
function chooseWinner() {
    const container = document.getElementById('container')

    const box1 = document.getElementById('box1').textContent;
    const box2 = document.getElementById('box2').textContent;
    const box3 = document.getElementById('box3').textContent;
    const box4 = document.getElementById('box4').textContent;
    const box5 = document.getElementById('box5').textContent;
    const box6 = document.getElementById('box6').textContent;
    const box7 = document.getElementById('box7').textContent;
    const box8 = document.getElementById('box8').textContent;
    const box9 = document.getElementById('box9').textContent;

    const result = document.getElementById('result')

    let resultText = document.getElementById('result-text')


    // HORIZONTAL CASES

    if(box1 === box2 && box1 === box3 && box1 !== "") {

        result.style.display = 'flex'

        resultText.innerHTML = `The winner is ${box1.toUpperCase()}`

        container.style.pointerEvents = 'none'


    } else if (box4 === box5 && box4 === box6 && box4 !== "") {
        
        result.style.display = 'flex'

        resultText.innerHTML = `The winner is ${box4.toUpperCase()}`

        container.style.pointerEvents = 'none'

    } else if(box7 === box8 && box7 === box9 && box7 !== "") {
        
        result.style.display = 'flex'

        resultText.innerHTML = `The winner is ${box7.toUpperCase()}`

        container.style.pointerEvents = 'none'
        
    }
    // VERTICAL CASES

    else if(box1 === box4 && box1 === box7 && box1 !== "") {
        
        result.style.display = 'flex'

        resultText.innerHTML = `The winner is ${box1.toUpperCase()}`

        container.style.pointerEvents = 'none'
        
    }
    else if(box2 === box5 && box2 === box8 && box2 !== "") {
        
        result.style.display = 'flex'

        resultText.innerHTML = `The winner is ${box2.toUpperCase()}`

        container.style.pointerEvents = 'none'
        
    }
    else if(box3 === box6 && box3 === box9 && box3 !== "") {
        
        result.style.display = 'flex'

        resultText.innerHTML = `The winner is ${box3.toUpperCase()}`
        
        container.style.pointerEvents = 'none'
    }

    // DIAGONAL CASES

    else if(box1 === box5 && box1 === box9 && box1 !== "") {
        
        result.style.display = 'flex'

        resultText.innerHTML = `The winner is ${box1.toUpperCase()}`

        container.style.pointerEvents = 'none'
        
    }

    else if(box3 === box5 && box3 === box7 && box3 !== "") {
        
        result.style.display = 'flex'

        resultText.innerHTML = `The winner is ${box3.toUpperCase()}`

        container.style.pointerEvents = 'none'
        
    }

    // IN CASE OF A DRAW

    else if(box1 && box2 && box3 && box4 && box5 && box6 && box7 && box8 && box9) {
        
        result.style.display = 'flex'

        resultText.innerHTML = `Its a Draw!!!`

        container.style.pointerEvents = 'none'
        
    }

}


//  RESTART GAME

const btn = document.getElementById('btn');

btn.addEventListener('click', () => {
    console.log('Restart')
    window.location.reload();
})