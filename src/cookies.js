export const articleClasses = ['relative', 'animate-show', 'flex', 'bg-green-400', 'items-center', 'rounded-sm', 'justify-between', 'my-8', 'px-3', 'h-14'];
export const buttonComponent = '<button class="delete relative bg-white rounded w-6">X</button>';

export class Cookies {
  constructor(container) {
    this.container = document.querySelector(container);
    this.class = articleClasses;
    this.btnComponent = buttonComponent;
    this.allTasks = document.querySelectorAll('article .test');
  }

  setCookie() {
    const tasks = [];
    console.log(this.allTasks);
    document.querySelectorAll('article .test').forEach((task) => {
      tasks.unshift(task.textContent);
    });
    localStorage['to-do-tasks'] = JSON.stringify(tasks);
  }

  getCookie() {
    let tasks = null;
    if (localStorage.getItem('to-do-tasks') === null) {
      tasks = [];
      this.container.innerHTML = '<p class="mt-8 text-center text-bold text-green-500 text-3xl">Dodaj nowe zadanie!</p>';
    } else {
      tasks = JSON.parse(localStorage['to-do-tasks']);
    }
    for (let i = 0; i < tasks.length; i += 1) {
      const task = document.createElement('article');

      task.classList.add(...this.class);
      task.innerHTML = `
            <p class="text-white text-3xl">${tasks[i]}</p>
            ${this.btnComponent}
            `;
      this.container.prepend(task);
    }
  }
}
