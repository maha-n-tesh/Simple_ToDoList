let btn = document.querySelector("#add-task");
let inputValue = document.querySelector("#text-task");
let ul = document.querySelector("#task-list");

btn.addEventListener('click', ()=>{
    let ul = document.querySelector("#task-list");
    let li = document.createElement('li'); //creating li
    let removeBtn = document.createElement('button') // creating remove button
    let removeImg = document.createElement('i') //creating an icon
    removeImg.setAttribute("class","fa-solid fa-xmark")
    if(inputValue.value === '') return;
    
    li.textContent = inputValue.value;
    // removeBtn.textContent = imgAdd;
    removeBtn.addEventListener('click', ()=>{
        li.remove();
    })
    li.appendChild(removeBtn);// adding remove button to task
    removeBtn.appendChild(removeImg)
    ul.appendChild(li); //adding li(tasks) into ul
    inputValue.value = '';
    
})
