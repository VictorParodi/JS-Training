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
  document.addEventListener('DOMContentLoaded', getTasks);
 }

 // Get tasks from LS
 function getTasks() {
  let tasks;

  if(localStorage.getItem('tasks') === null) {
    tasks = [];
  } else {
    tasks = JSON.parse(localStorage.getItem('tasks'));
  }

  tasks.forEach(function(task) {
    const li = document.createElement('li');
    li.setAttribute('class', 'collection-item');
    li.appendChild(document.createTextNode(task));

    const link = document.createElement('a');
    link.setAttribute('class', 'delete-item secondary-content');
    link.innerHTML = '<i class="fa fa-remove"></i>';
    li.appendChild(link);
    taskList.appendChild(li);
  });
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

   storeInLocalStorage(taskInput.value);

   taskInput.value = '';
  }

  e.preventDefault();
 }


 // Store in local Store
 function storeInLocalStorage(task) {
  let tasks;

  if(localStorage.getItem('tasks') === null) {
    tasks = [];
  } else {
    tasks = JSON.parse(localStorage.getItem('tasks'));
  }

  tasks.push(task);

  localStorage.setItem('tasks', JSON.stringify(tasks));
 }


 // Remove task
 function removeTask(e) {
  if(e.target.parentElement.classList.contains('delete-item')) {
    e.target.parentElement.parentElement.remove();

    removeTaskFromLS(e.target.parentElement.parentElement);
  }
 }

 function removeTaskFromLS(taskItem) {
  let tasks;

  if(localStorage.getItem('tasks') === null) {
    tasks = [];
  } else {
    tasks = JSON.parse(localStorage.getItem('tasks'));
  }

  tasks.forEach(function(task, index) {
    if(taskItem.textContent === task) {
      tasks.splice(index, 1); 
    }
    
    localStorage.setItem('tasks', JSON.stringify(tasks));
  });
 };


 // Clear tasks
 function clearTasks(e) {
  const tasks = document.querySelectorAll('.collection-item');
  
  for(let task of tasks) {
    task.remove();
  }

  clearTasksFromLS();
 }

 function clearTasksFromLS() {
   localStorage.clear();
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