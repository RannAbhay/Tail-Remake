let mouses = [];
let zoro = 0;
let lastMouseX;
let lastMouseY;
let divs = 0;


function getInputValue() {
    const inputElement = document.getElementById('myInput').value;

    if (inputElement > 0 && inputElement <= 50) {
        divs = inputElement;
        for (let i = 1; i <= divs; i++) {
            let newDiv = document.createElement('div');
        
            newDiv.id = `${i}`;
            newDiv.className = "pick";
        
            document.body.appendChild(newDiv);
        }

        setInterval(fast, 3);

        const submitDiv = document.getElementsByClassName('submit-div')[0];
        if (submitDiv) {
            submitDiv.remove();
        }
    } else {
        alert('pls type number between 0 and 50');
    }
}



function fast() {

    const mouseX = lastMouseX;
    const mouseY = lastMouseY;

    mouses.push({ X: mouseX, Y: mouseY });

    if (mouses.length > (divs * 3 - 2)) {
        mouses.shift(); 
    }

    for (let y = 1; y <= divs; y++) {
        if (zoro < mouses.length) {
            document.getElementById(`${y}`).style.left = `${mouses[zoro].X}px`;
            document.getElementById(`${y}`).style.top = `${mouses[zoro].Y}px`;
            zoro += 3;
        }
    }

    zoro = 0;
}

document.addEventListener('mousemove', (event) => {
    lastMouseX = event.clientX;
    lastMouseY = event.clientY;
});