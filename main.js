let addInput = document.querySelector('#addInp')

let addBtn = document.querySelector('#addBtn')

let ul = document.querySelector('.list-item')


addBtn.addEventListener('click', ()=>{

    if(addInput.value === ''){
        alert('you must write text')
    }else{

        
        let li = document.createElement('li')
    let input = document.createElement('input')
    let label  =document.createElement('label')
    input.type = 'checkbox'
    label.innerHTML = addInput.value
    li.appendChild(input)
    li.appendChild(label)
    ul.appendChild(li)
    label.for = 'one'
    input.id = 'one'
    if (label.for === input.id) {
    li.style.color = 'blue'
    }

    
}
    addInput.value = ''
})
