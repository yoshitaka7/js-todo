const taskText = document.getElementById('task_text');
const taskAdd = document.getElementById('task_add');
const taskList = document.getElementById('task_list');

//追加ボタンを作成
const addTasks = (task) => {
  const listItem = document.createElement('li');
  const showItem = taskList.appendChild(listItem);
  showItem.innerHTML = task;

  const deleteButton = document.createElement('button');
  deleteButton.innerHTML = '削除';
  listItem.appendChild(deleteButton);

  deleteButton.addEventListener('click', e => {
    e.preventDefault();
    deleteTasks(deleteButton);
  });
};

const deleteTasks = (deleteButton) => {
  const chosenTask = deleteButton.closest('li');
  taskList.removeChild(chosenTask);
};

taskAdd.addEventListener('click', e => {
  e.preventDefault();
  const task = taskText.value;
  addTasks(task);
  taskText.value = '';
  });