let containers = document.querySelectorAll('.box-container');
const freezer = document.querySelector('.freezer');
let items = document.querySelectorAll('.item');
let draggedItem = null;
let drawer = document.querySelector('.drawer');
let drawerHandle = document.querySelector('.drawer-handle')

const form = document.querySelector('form');
const formName = document.querySelector('.form-name');
const formRadios= document.querySelectorAll('.form-type');
const formNumber = document.querySelector('.form-number');

const deleteBox = document.querySelector('.delete');
const deleteBoxDrawer = document.querySelector('.delete-drawer');



items.forEach((item) => {
    item.addEventListener('dragstart', (e) => {
        draggedItem = e.target;
    })

    item.addEventListener('dragend', (e) => {
        draggedItem = null;
        drawer.classList.remove('drawer-open');
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

deleteBox.addEventListener('dragover', (e) => {
        deleteBox.classList.add('drop')
        e.preventDefault();
    })

deleteBox.addEventListener('drop', (e) => {
        e.preventDefault();
        deleteBox.appendChild(draggedItem);
        draggedItem.remove();
        draggedItem = null;
    })

deleteBox.addEventListener('dragleave', (e) => {
        deleteBox.classList.remove('drop')
        e.preventDefault();
    })

drawer.addEventListener('dragover',(e) => {
    drawer.classList.add('drawer-open')
})

drawerHandle.addEventListener('click',(e) => {
    drawer.classList.remove('drawer-open')
})


deleteBoxDrawer.addEventListener('dragover', (e) => {
        deleteBoxDrawer.classList.add('drop')
        e.preventDefault();
    })

deleteBoxDrawer.addEventListener('drop', (e) => {
        e.preventDefault();
        draggedItem.remove();
        draggedItem = null;
        drawer.classList.remove('drawer-open');
    })

deleteBoxDrawer.addEventListener('dragleave', (e) => {
        deleteBoxDrawer.classList.remove('drop')
        e.preventDefault();
    })


form.addEventListener('submit', (e) => {
    e.preventDefault()
    let fname = formName.value;
    let fradio
    formRadios.forEach((radio) => {
        if(radio.checked)
        {
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
    div.style.backgroundColor = type == 'meat' ? '#D48C8C' : type == 'veg' ? 'hsl(121,46%,69%)' : type == 'carb' ? 'hsl(26,46%,69%)' : 'hsl(205,46%,69%)'
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