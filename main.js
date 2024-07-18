


const ttai = document.querySelector('.tientai') 
const txiu = document.querySelector('.tienxiu') 
const tai = document.getSelection('.tai') 
const xiu = document.getSelection('.xiu')
// const rotate = document.querySelector('#rotate') 

const diceEl1 = document.querySelector('.dice1')
const diceEl2 = document.querySelector('.dice2')
const diceEl3 = document.querySelector('.dice3')
const btnRoll = document.querySelector('#roll') 
const diceEl = document.querySelector('.dice')
const tnhan1 = document.querySelector('.tiennhan1')
const tnhan2 = document.querySelector('.tiennhan2')


// const k10 = document.querySelector('.10k')
// const k20 = document.querySelector('.20k')
// const k50 = document.getSelection('.50k')
// const k100 = document.getSelection('.100k')
// const k200 = document.getSelection('.200k')
// const k500 = document.getSelection('.500k')

// k10.classList.add('hidden');
btnRoll.addEventListener('click', function(){
    const dice1 = Math.trunc(Math.random()*6)+1
    const dice2 = Math.trunc(Math.random()*6)+1
    const dice3 = Math.trunc(Math.random()*6)+1
    const dice123 = dice1+dice2+dice3
    diceEl1.src = `./img/${dice1}.png`;
    diceEl2.src = `./img/${dice2}.png`;
    diceEl3.src = `./img/${dice3}.png`;
    if (11>= dice123) {
        // Finish the game
        playing = false;

        document.querySelector(`.player--0`)?.classList.add(`player--winner`);
        document.querySelector(`.player--1`)?.classList.remove(`player--active`);
        document.querySelector(`.player--1`)?.classList.remove(`player--winner`);

    }
    else {
        document.querySelector(`.player--1`)?.classList.add(`player--winner`);
        document.querySelector(`.player--0`)?.classList.remove(`player--active`);
        document.querySelector(`.player--0`)?.classList.remove(`player--winner`);
    }
    
})

ttai.addEventListener('click', function(){
    document.getElementById(`datcuoc`).classList.remove(`hidden`);

})
txiu.addEventListener('click', function(){
    document.getElementById(`datcuoc`).classList.remove(`hidden`);

})

const cube = document.getElementById('cube');
let isDragging = false;
let offsetX, offsetY;
cube.addEventListener('mousedown', (e) => {
    isDragging = true;
    offsetX = e.clientX - cube.getBoundingClientRect().left;
    offsetY = e.clientY - cube.getBoundingClientRect().top;
});

document.addEventListener('mousemove', (e) => {
if (isDragging) {
cube.style.left = e.clientX - offsetX + 'px';
cube.style.top = e.clientY - offsetY + 'px';
}});
document.addEventListener('mouseup', () => {
    isDragging = false;
});