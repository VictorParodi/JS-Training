{
 const form = document.querySelector('#task-form');
 const taskList = document.querySelector('.collection');
 const clearBtn = document.querySelector('.clear-tasks');
 const filter = document.querySelector('#filter');
 const taskInput = document.querySelector('#task');

 loadEventListeners();

 function loadEventListeners() {
  form.addEventListener('submit', addTask);
  taskList.addEventListener('click', removeTask);
  clearBtn.addEventListener('click', clearTasks);
  filter.addEventListener('keyup', filterTasks);
 }

 
 // Add task
 function addTask(e) {
  if(taskInput.value === '') {
   alert('Add task');
  } else {
   const li = document.createElement('li');
   li.className = 'collection-item';
   li.appendChild(document.createTextNode(taskInput.value));

   const link = document.createElement('a');
   link.className = 'delete-item secondary-content';
   link.innerHTML =  '<i class="fa fa-remove"></i>';
   
   li.appendChild(link);

   taskList.appendChild(li);

   taskInput.value = '';
  }

  e.preventDefault();
 } // addTask


 // Remove task
 function removeTask(e) {
  if(e.target.parentElement.classList.contains('delete-item')) {
    e.target.parentElement.parentElement.remove();
  }
 }


 // Clear tasks
 function clearTasks(e) {
  const tasks = document.querySelectorAll('.collection-item');
  
  for(let task of tasks) {
    task.remove();
  }
 }


 // Filter tasks
 function filterTasks(e) {
  const text = e.target.value.toLowerCase();
  
   const tasks = document.querySelectorAll('.collection-item');

   tasks.forEach(function(task) {
    if(task.firstChild.textContent.toLowerCase().includes(text) ) {
      task.style.display = 'block';
    } else {
      task.style.display = 'none';
    }
   });
 }

} // scope