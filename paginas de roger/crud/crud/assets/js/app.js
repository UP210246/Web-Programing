import { getAllTasks, getAllUsers } from './petitions.js';

//alert("Hola mundo!!!")

const listUsers = document.getElementById('users');
const listTasks = document.getElementById('tasks');
const listTask = document.getElementById('listTasks');
const formTask = document.getElementById('form-task');

//let selectedTaskId; 

document.addEventListener('DOMContentLoaded', async () => {
    const users = await getAllUsers();
    const tasks = await getAllTasks(); 
//    const listTareas = await getAllTask();

    //console.log(users);

    let template = listUsers.innerHTML;
    let templateTasks = listTasks.innerHTML;
    templateTasks = '';
    let templateTask = listTask.innerHTML;
    //console.log(template);
    for ( const user of users) {
        template += `
        <option value="${user.id}">${user.fullname}</option>
        `;
    };

    for (const task of tasks){
        templateTasks += `
        <tr>
            <td>${task.iduser}</td>
            <td>${task.name}</td>
            <td>${task.idtask}</td>
            <td>${task.tittle}</td> 
            <td></td>
            <td>
            <button class="btn btn-secondary btn-sm">
              <span>Update</span> <i class="nf nf-md-pencil"></i>
            </button>
            <button class="task-delete btn btn-danger btn-sm" value="${task.idtask}">
              <span>Delete</span> <i class="nf nf-cod-trash"></i>
            </button>
          </td>
        </tr>     
        `;
    };

    for (const taske of tasks) {
        templateTask += `
        <option value="${taske.idtask}">${taske.idtask}</option>
        `;
    };

    //console.log(template);
    listUsers.innerHTML = template;
    listTasks.innerHTML = templateTasks; 
    listTask.innerHTML = templateTask; 

    listTask.addEventListener('change', async function() {
      const selectedValue = this.value;
      console.log('id: ', selectedValue);

      const respuesta = await fetch(`api/getTask.php?selectedTaskId=${selectedValue}`);
      const data = await respuesta.json();

      console.log(data);
      let templateTasks = '';

      for (const task of data) {
          templateTasks += `
              <tr>
                  <td>${task.iduser}</td>
                  <td>${task.name}</td>
                  <td>${task.idtask}</td>
                  <td>${task.title}</td> 
                  <td></td>
                  <td>
                      <button class="btn btn-secondary btn-sm">
                          <span>Update</span> <i class="nf nf-md-pencil"></i>
                      </button>
                      <button class="task-delete btn btn-danger btn-sm" value="${task.idtask}">
                          <span>Delete</span> <i class="nf nf-cod-trash"></i>
                      </button>
                  </td>
              </tr>     
          `;
      }

      listTasks.innerHTML = templateTasks;

  });

  document.addEventListener('click', async (event) => {
    if (event.target.classList.contains('task-delete')) {
        const taskId = event.target.value;
        console.log('ID de la tarea:', taskId);

        const formData = new FormData();
        formData.append('taskId', taskId);

        await fetch('api/deleteTask.php', {
            method: 'POST',
            body: formData
        });
    }
    });


    formTask.addEventListener('submit', async (event) => {
        event.preventDefault();

        const formData = new FormData(formTask);
        const title = formData.get('title');
        const userId = formData.get('users');

        await fetch('api/createTask.php', {
            method: 'POST',
            body: formData
        });
    });
    
});