//create variables
const submitBtn = document.querySelector('.submit');
const section = document.querySelector('#tasks');
const input = document.querySelector('.input');
// const tasks = document.querySelector('#tasks');
const article = document.querySelector('.div');
const eachTask = document.querySelector('.task');
const allBtn = document.querySelector('.button');
const delBtn = document.querySelector('.delete');
const clearAll = document.querySelector('.clear-items');
const alert = document.querySelector('.head');

//functions
function alerts(){
    setTimeout(function(){
        alert.innerHTML = '';
    }, 2000)
}

//button event handler
submitBtn.addEventListener('click', (e)=>{
    e.preventDefault();
    console.log('clicked');
    if (input.value !=='') {
       //create article
        const createArticle = document.createElement('article');
        createArticle.classList.add('div');
        //create text 
        const createTask = document.createElement('p');
        createTask.innerHTML = 
        `
        
            <p class="task">${input.value}</p>
            
        `;
        createTask.classList.add('task');
        

        //create Btn Container
        const createBtncontainer = document.createElement('div');
        createBtncontainer.classList.add('button');

        //create EditBtn
        const createEditBtn = document.createElement('button');
        createEditBtn.classList.add('edit');

        //create DelBtn
        const createDelBtn = document.createElement('button');
        createDelBtn.classList.add('delete');

       

        //append children
        section.appendChild(createArticle);
        // createTask.appendChild(input.value);
        createArticle.appendChild(createTask);
        createArticle.appendChild(createBtncontainer);
        createBtncontainer.appendChild(createEditBtn);
        createBtncontainer.appendChild(createDelBtn);


        alert.innerHTML = 'Task added succesfully';
        alert.style.background = 'green';
        alert.style.color = 'white';
        alerts();

        //empty input field after submitting task
        input.value ='';
        clearAll.classList.add('clear-items-show');
        //delete function

        createDelBtn.addEventListener('click', ()=>{
            console.log('delete');
            createArticle.innerHTML = '';
            createArticle.classList.remove('div');
            alert.innerHTML = 'Task deleted succesfully';
            alert.style.background = 'grey';
            alert.style.color = 'white'
            alerts();
            if (section.innerHTML == '') {
                clearAll.innerHTML ='';
            }
        })
    }
    else{
        alert.innerHTML = 'Enter a task, lazy youth!';
        alert.style.background = 'tomato';
        alert.style.color = 'white'
        alerts();
    }

})


//clear All function
clearAll.addEventListener('click', ()=>{
        section.innerHTML = '';

        alert.innerHTML = 'All task(s) cleared succesfully';
            alert.style.background = 'tomato';
            alert.style.color = 'white'
            alerts();
            clearAll.classList.remove('clear-items-show');
})


