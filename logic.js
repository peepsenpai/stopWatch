let currentTime = 0;
let intervalClear; // for use it multiple times
let input = document.getElementById('input');
let button = document.getElementById('button')
const mint = document.getElementById('mint'),
sec = document.getElementById('sec');
button.addEventListener('click', ()=>{
    value = input.value * 60000;
    if(value <= 0)return //if user click the 'start timer' button without provbide any value
    input.style.pointerEvents = 'none'
    function getTime(){
        currentTime++
        function backcount(currentTime){
            let output = value - (currentTime * 1000)
            // console.log(output);
            let minute = Math.floor(output/60000)
            let second = ((output % 60000) / 1000).toFixed(0)
            mint.innerText = minute;
            sec.innerText = second;

            if(output == 0){
                clearInterval(intervalClear)
            }
        }
        backcount(currentTime);
    }
    getTime()
    intervalClear = setInterval(getTime, 1000)
})

const reset = document.getElementById('reset')
reset.addEventListener('click', ()=>{
    input.value = '';
    input.style.pointerEvents = 'auto'
    clearInterval(intervalClear);
    mint.innerText = '00';
    sec.innerText = '00';
    location.reload();
})