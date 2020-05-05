const tasks = [
  {
    _id: '5d2ca9e2e03d40b326596aa7',
    completed: true,
    body:
      'Привет проверь как работает это Todo list. Ты можешь добавлять заметки или удалять, как та что ниже меня. также можешь изменить цвета отображения справа ввеху. Хорошего тебе дня... ах забыл сказать все что ты тут изменяешь будет жить в твоем браузере',
    title: 'Привет я твоя заметка',
  },
  {
    _id: '5d2ca9e29c8a94095c1288e0',
    completed: false,
    body: 'Ненужная заметка',
    title: 'Удали меня если я тебе не нужна',
  },
];
import '../css/styles.css';
(function (arrOfTasks) {
  const themes = {
    default: {
      '--base-text-color': '#212529',
      '--header-bg': '#007bff',
      '--header-text-color': '#fff',
      '--default-btn-bg': '#007bff',
      '--default-btn-text-color': '#fff',
      '--default-btn-hover-bg': '#0069d9',
      '--default-btn-border-color': '#0069d9',
      '--danger-btn-bg': '#dc3545',
      '--danger-btn-text-color': '#fff',
      '--danger-btn-hover-bg': '#bd2130',
      '--danger-btn-border-color': '#dc3545',
      '--input-border-color': '#ced4da',
      '--input-bg-color': '#fff',
      '--input-text-color': '#495057',
      '--input-focus-bg-color': '#fff',
      '--input-focus-text-color': '#495057',
      '--input-focus-border-color': '#80bdff',
      '--input-focus-box-shadow': '0 0 0 0.2rem rgba(0, 123, 255, 0.25)',
    },
    dark: {
      '--base-text-color': '#212529',
      '--header-bg': '#343a40',
      '--header-text-color': '#fff',
      '--default-btn-bg': '#58616b',
      '--default-btn-text-color': '#fff',
      '--default-btn-hover-bg': '#292d31',
      '--default-btn-border-color': '#343a40',
      '--default-btn-focus-box-shadow':
        '0 0 0 0.2rem rgba(141, 143, 146, 0.25)',
      '--danger-btn-bg': '#b52d3a',
      '--danger-btn-text-color': '#fff',
      '--danger-btn-hover-bg': '#88222c',
      '--danger-btn-border-color': '#88222c',
      '--input-border-color': '#ced4da',
      '--input-bg-color': '#fff',
      '--input-text-color': '#495057',
      '--input-focus-bg-color': '#fff',
      '--input-focus-text-color': '#495057',
      '--input-focus-border-color': '#78818a',
      '--input-focus-box-shadow': '0 0 0 0.2rem rgba(141, 143, 146, 0.25)',
    },
    light: {
      '--base-text-color': '#212529',
      '--header-bg': '#fff',
      '--header-text-color': '#212529',
      '--default-btn-bg': '#fff',
      '--default-btn-text-color': '#212529',
      '--default-btn-hover-bg': '#e8e7e7',
      '--default-btn-border-color': '#343a40',
      '--default-btn-focus-box-shadow':
        '0 0 0 0.2rem rgba(141, 143, 146, 0.25)',
      '--danger-btn-bg': '#f1b5bb',
      '--danger-btn-text-color': '#212529',
      '--danger-btn-hover-bg': '#ef808a',
      '--danger-btn-border-color': '#e2818a',
      '--input-border-color': '#ced4da',
      '--input-bg-color': '#fff',
      '--input-text-color': '#495057',
      '--input-focus-bg-color': '#fff',
      '--input-focus-text-color': '#495057',
      '--input-focus-border-color': '#78818a',
      '--input-focus-box-shadow': '0 0 0 0.2rem rgba(141, 143, 146, 0.25)',
    },
  };
  let lastSelectedTeheme = localStorage.getItem('theme') || 'default';
  let LocalStorageListItem;
  checkLocalStarage(arrOfTasks);
  function checkLocalStarage(storage) {
    if (!localStorage.getItem('TaskList')) {
      LocalStorageListItem = arrOfTasks;

      return LocalStorageListItem;
    }
    LocalStorageListItem = localStorage.getItem('TaskList');
    LocalStorageListItem = JSON.parse(LocalStorageListItem);

    return LocalStorageListItem;
  }
  function changeLocalStorageTaskList(newTaskList) {
    localStorage.setItem('TaskList', JSON.stringify(newTaskList));
  }
  function newTaskList() {
    const newTaskList = listContailer;

    let arrOfTasks = [];
    for (let i = 0; i < newTaskList.children.length; i++) {
      const childTaskList = newTaskList.children[i].children;
      const Task = {
        _id: newTaskList.children[0].dataset.taskId,
        completed: true,
        body: childTaskList[2].textContent,
        title: childTaskList[0].textContent,
      };
      arrOfTasks.push(Task);
    }

    changeLocalStorageTaskList(arrOfTasks);
  }

  // Eements UI
  let listContailer = document.querySelector('.tasks-list-section .list-group');
  const form = document.forms['addTask'];
  const inputTitle = form.elements['title'];
  const inputBody = form.elements['body'];
  const themeSelect = document.querySelector('#themeSelect');

  renderAllTasks(LocalStorageListItem);
  //Events
  setTheme(lastSelectedTeheme);
  form.addEventListener('submit', onFormSubmitHandler);
  listContailer.addEventListener('click', onDeletehandler);
  themeSelect.addEventListener('change', onThemeSelectHandle);
  function renderAllTasks(tasksList) {
    if (!tasksList) {
      console.error('Нет данных');
      return;
    }
    const fragment = document.createDocumentFragment();
    Object.values(tasksList).forEach((task) => {
      const li = listItemTemplate(task);
      fragment.appendChild(li);
      listContailer.appendChild(fragment);
      newTaskList();
    });
  }

  function listItemTemplate({ _id, title, body } = {}) {
    const li = document.createElement('li');
    li.classList.add(
      'list-group-item',
      'd-flex',
      'align-items-center',
      'flex-wrap',
      'mt-2'
    );
    li.setAttribute('data-task-id', _id);
    const span = document.createElement('span');
    span.textContent = title;
    const button = document.createElement('button');
    button.textContent = 'Удалить';
    button.classList.add('btn', 'btn-danger', 'ml-auto', 'delete-btn');
    const article = document.createElement('p');
    article.classList.add('mt-2', 'w-100');
    article.textContent = body;
    li.appendChild(span);
    li.appendChild(button);
    li.appendChild(article);
    return li;
  }

  function onFormSubmitHandler(e) {
    e.preventDefault();
    const titleValue = inputTitle.value;
    const bodyValue = inputBody.value;
    if (!titleValue || !bodyValue) {
      alert('Введите данные');
      return;
    }
    const task = createNewTask(titleValue, bodyValue);
    const listItem = listItemTemplate(task);

    listContailer.insertAdjacentElement('afterbegin', listItem);
    form.reset();
    newTaskList();
  }

  function createNewTask(title, body) {
    const newTask = {
      title,
      body,
      complited: false,
      _id: `task-${Math.random()}`,
    };

    return { ...newTask };
  }
  function deleteTaskt(id) {
    const isConfirm = confirm('Точно удалить???');
    if (!isConfirm) return isConfirm;

    return isConfirm;
  }
  function deletaskFromHtml(confirmed, el) {
    if (!confirmed) return;
    el.remove();
    newTaskList();
  }

  function onDeletehandler({ target }) {
    if (target.classList.contains('delete-btn')) {
      const parent = target.closest('[data-task-id]');
      const id = parent.dataset.taskId;
      const confirmed = deleteTaskt(id);
      deletaskFromHtml(confirmed, parent);
    }
  }

  function onThemeSelectHandle(e) {
    const selectedTheme = themeSelect.value;
    const isConfirmed = confirm(
      `Вы дествительно хотите установть тему на ${selectedTheme}`
    );
    if (!isConfirmed) {
      themeSelect.value = lastSelectedTeheme;
      return;
    }
    setTheme(selectedTheme);
    lastSelectedTeheme = selectedTheme;
    localStorage.setItem('theme', lastSelectedTeheme);
  }
  function setTheme(name) {
    themeSelect.value = name;
    const selectedthemOBj = themes[name];
    Object.entries(selectedthemOBj).forEach(([key, value]) => {
      document.documentElement.style.setProperty(key, value);
    });
  }
})(tasks);
