class ToDo {
    constructor(container) {
        this.tasksInput = container.querySelector('#task__input');
        this.tasksAdd = container.querySelector('#tasks__add');
        this.tasksList = container.querySelector('#tasks__list');
        this.loadPage();
        this.createTasks();
    }

    loadPage() {
        const tasks = this.getTasksFromLocalStorage();
        if (tasks.length > 0) {
            tasks.forEach(task => {
                this.createHtmlElement(task, true);
            });
        }
    }

    createTasks() {
        this.tasksAdd.addEventListener('click', (event) => {
            event.preventDefault();
            if (this.tasksInput.value) {
               this.createHtmlElement(this.tasksInput.value, false);
            } 
        });
    }

    createHtmlElement(task, isPageLoaded) {
        const toDoTask = document.createElement('div');
        toDoTask.classList.add('task');

        const toDoTitle = document.createElement('div');
        toDoTitle.classList.add('task__title');
        toDoTitle.textContent = task;
        toDoTask.insertAdjacentElement('beforeend',toDoTitle);

        const taskRemove = document.createElement('a');
        taskRemove.setAttribute('href','#');
        taskRemove.classList.add('task__remove');
        taskRemove.textContent = 'х';
        toDoTask.insertAdjacentElement('beforeend',taskRemove);

        this.tasksList.insertAdjacentElement('beforeend', toDoTask);
        this.tasksInput.value = '';

        taskRemove.addEventListener('click', () => {
            toDoTask.remove();
            const tasks = this.getTasksFromLocalStorage();
            const index = tasks.findIndex(el => el === task);
            if (index >= 0) {
                tasks.splice(index, 1);
                this.setTasksToLocalStorage(tasks);
            }
        });

        if (!isPageLoaded) {
            this.setTaskToLocalStorage(task);
        }
    }

    setTaskToLocalStorage(task) {
        const tasksString = localStorage.getItem('task');
        const tasks = tasksString ? JSON.parse(tasksString) : [];
        tasks.push(task);
        localStorage.setItem('task', JSON.stringify(tasks));

        /*if (!localStorage.getItem('task')){
            const myLocalStorage = [task];
           localStorage.setItem('task',JSON.stringify(myLocalStorage)); 

        } else {
            const myLocalStorage = JSON.parse(localStorage['task']);
            myLocalStorage.push(task);
            localStorage.setItem('task',JSON.stringify(myLocalStorage));
        }*/
    }
    
    getTasksFromLocalStorage() {
        const tasksString = localStorage.getItem('task');
        const tasks = tasksString ? JSON.parse(tasksString) : [];
        return tasks;
    }

    setTasksToLocalStorage(tasks) {
        localStorage.setItem('task', JSON.stringify(tasks));
    }
}


new ToDo(document.querySelector('.content'));