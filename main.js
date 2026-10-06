let containers = document.querySelectorAll('.box-container');
const freezer = document.querySelector('.freezer');
let items = document.querySelectorAll('.item');
let draggedItem = null;

const form = document.querySelector('form');
const formName = document.querySelector('.form-name');
const formRadios= document.querySelectorAll('.form-type');
const formNumber = document.querySelector('.form-number');



items.forEach((item) => {
    item.addEventListener('dragstart', (e) => {
        draggedItem = e.target;
    })
})

containers.forEach((container) => {
    container.addEventListener('dragover', (e) => {
        e.preventDefault();
    })

    container.addEventListener('drop', (e) => {
        container.appendChild(draggedItem);
        draggedItem = null;
    })

})


form.addEventListener('submit', (e) => {
    e.preventDefault()
    let fname = formName.value;
    let fradio
    formRadios.forEach((radio) => {
        if(radio.checked)
        {
            alert(radio)
            fradio = radio.value;
        }
    })
    let fnum = formNumber.value;
    createItem(fname,fradio,fnum)


})


function createItem(name,type,number)
{
    let div = document.createElement('div');
    let p = document.createElement('p');
    div.classList.add('item')
    div
    p.classList.add('item-text')
    p.textContent = name;
    div.appendChild(p)
    div.draggable = true;
    div.addEventListener('dragstart', (e) => {
        draggedItem = e.target;
    })
    div.style.backgroundColor = type == 'meat' ? 'blue' : type == 'veg' ? 'green' : 'red'
    debugger
    switch (number) {
    case "1":
    freezer.querySelector('.one-container').appendChild(div)
    break
    case "2":
    freezer.querySelector('.two-container').appendChild(div)
    break
    case "3":
    freezer.querySelector('.three-container').appendChild(div)
    break
    case "4":
    freezer.querySelector('.four-container').appendChild(div)
    break
    case "5":
    freezer.querySelector('.five-container').appendChild(div)
    break
    default:
    freezer.querySelector('.six-container').appendChild(div)
}
}