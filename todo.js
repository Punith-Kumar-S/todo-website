const key = document.querySelector('.todoenter');
const input = document.getElementById('todo');
const Todo = document.getElementById('new');
const instructionsBtn = document.querySelector('.btn');
const popupContainer = document.querySelector('.popup-container');
const body = document.body;

key.addEventListener("keypress",function(e){

    if(e.keyCode === 13){

            e.preventDefault();
            const text  = input.value;
            
            if(text){
                const newTodo = document.createElement('li');
                newTodo.classList.add('normal');

                newTodo.addEventListener("click", () => {

                    newTodo.classList.toggle('done');

                });

                newTodo.addEventListener('dblclick', () => {
                    newTodo.remove();
                });

                newTodo.setAttribute("style","list-style:none");
                newTodo.textContent = text;
                Todo.appendChild(newTodo);

                
            }
               input.value = null;
        }  

    });

instructionsBtn.addEventListener('click', () => {

   const closeBtn = document.querySelector(".close");
   popupContainer.classList.add("active");
   body.setAttribute("style","background-color:rgba(0,0,0,0.9)");


    closeBtn.addEventListener('click',() => {
        popupContainer.classList.remove("active");
        body.removeAttribute("style","background-color:rgba(0,0,0,0.9)");
    });


})