const btn = document.querySelector('.main-item button')
const content = document.querySelector('.content-hidden')
const input = document.querySelector('.close')
const back = document.querySelector('.backdrop')


btn.addEventListener('click', function(){
    content.classList.toggle('hera')
})
input.addEventListener('click', function(){
    content.classList.add('hera')
})
back.addEventListener('click', function(){
    content.classList.add('hera')
})

const data=[
    'DREAM',
    'LIVE',
    'LAUGH',
    'RELAX'
]
let output = document.getElementById("output")
let wordTurn = 0
let charTurn = 0 


const printWord = ()=>{
    if(charTurn <= data[wordTurn].length){
        let str = data[wordTurn].substr(0, charTurn)
        output.innerHTML = str
        charTurn++
        setTimeout(printWord, 130)
    }else{
        setTimeout(deleteWord, 200)
    }
}

const deleteWord = () =>{
    if(charTurn >=0){
        let str = data[wordTurn].substring(0, charTurn)
        output.innerHTML=str
        charTurn--
        setTimeout(deleteWord, 200)
    }else{
        wordTurn++
        if(wordTurn >= data.length){
            wordTurn = 0
        }
        setTimeout(printWord, 130)
    }
}
printWord()

$('.slider').slick({
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1000
  });


