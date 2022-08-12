const numbers = document.querySelectorAll('.number')

numbers.forEach(item=>{
    item.innerHTML='0'

    function changeNUM() {
        let final = +(item.getAttribute('data-num'))
        let value = +(item.innerHTML)
        let step = final/10

        if(value<final){
            item.innerHTML = step+value
            setTimeout(changeNUM, 100)
        }else if(value>=final){
            item.innerHTML = final
        }
    }

    changeNUM()
})