var btn = document.querySelector("button");
btn.addEventListener('click',btnFunction);

var array =[{
  name:'pradeepdurai',
  dueDate:'2023-08-12'
},
{
  name:'pradeep',
  dueDate:'2023-08-12'
}];



function addAutomatic(){
  var variable = '';
  for(var i = 0 ; i <= array.length -1; i++){
  var todo = array[i];
  // var name = todo.name;
  // var dueDate = todo.dueDate;
  var{name,dueDate}=todo;

  
  var html = `
  <div> ${name} </div>
  <div>${dueDate}</div>
 
  <button onClick="array.splice(${i}, 1);
  addAutomatic(); "
  class="btn-delete">Delete
  </button>
  `
  variable += html;
  console.log(html);
  document.querySelector('.div-class2').innerHTML= variable;
}}

function btnFunction(){
  var input = document.querySelector('.input-todo');
  var name = input.value;
  var input2 = document.querySelector('.date-input');
  var dueDate = input2.value;
   array.push({
    // name: name,
    // dueDate: dueDate,
    name,
    dueDate,
   });
  // console.log(array);
  input.value= "";
  input2.value= "";
 addAutomatic();
}