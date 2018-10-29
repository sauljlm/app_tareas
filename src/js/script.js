// variables
const lista = document.getElementById('lista');
const tareaInput = document.getElementById('tareaInput');
const date = document.getElementById('fecha');
const btnNuevaTarea = document.getElementById('btn-agregar');
const miArreglo = [];
const miObjeto = {};
let idCheck = 1;

// funciones
function dataReceived(event) {
  const Response = event.target.response;
  for (const element of Response) {
    const listItem = document.createElement('li');
    listItem.setAttribute('id', idCheck);
    const check = document.createElement('input');
    check.setAttribute('type', 'checkbox');
    check.setAttribute('class', 'check');
    check.setAttribute('id', idCheck);
    check.setAttribute('name', 'checkbox');
    idCheck += 1;
    listItem.innerText = `${element.task} ${element.dueDate}`;

    lista.appendChild(check);
    lista.appendChild(listItem);
  }
}

function getData() {
  const request = new XMLHttpRequest();
  request.addEventListener('load', dataReceived);
  request.responseType = 'json';
  request.open('GET', '/data.json');
  request.send();
}

getData();


function agregarTarea(event) {
  event.preventDefault();
  const tarea = tareaInput.value;
  let content = date.value;
  content = `[ ${content}]`;
  const nuevaTarea = document.createElement('li');
  nuevaTarea.setAttribute('id', idCheck);
  const contenido = document.createTextNode(tarea);
  const contentDate = document.createTextNode(content);
  // check box
  const check = document.createElement('input');
  check.setAttribute('type', 'checkbox');
  check.setAttribute('id', idCheck);
  check.setAttribute('class', 'check');
  check.setAttribute('name', 'checkbox');
  idCheck += 1;
  console.log(idCheck);
  // objeto
  miObjeto.task = contenido;
  miObjeto.complete = false;
  miObjeto.dueDate = contentDate;
  miArreglo.push(miObjeto);
  // fin objeto

  // Agregamos el contenido al enlace
  lista.appendChild(check);
  nuevaTarea.appendChild(miObjeto.task);
  nuevaTarea.appendChild(miObjeto.dueDate);
  // Agregamos la nueva tarea a la lista
  lista.appendChild(nuevaTarea);
  // limpiamos el formulario
  date.value = '';
  tareaInput.value = '';
}
function aplycheck(event) {
  const task = document.querySelectorAll('li');
  const contentSelector = event.target.getAttribute('id');
  const idTask = task[idCheck].querySelector(contentSelector);
  idTask.className = 'complete';
  console.log('hoola');
}
// agregar tarea
btnNuevaTarea.addEventListener('click', agregarTarea);
  for (const element of lista){
  check.addEventListener ('click', aplycheck);
}
