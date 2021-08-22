import { Cookies, articleClasses, buttonComponent } from './cookies';

import './style.scss';

class TaskFactory {
  constructor(button, input, container, form) {
    this.button = document.querySelector(button);
    this.btnComponent = buttonComponent;
    this.input = document.querySelector(input);
    this.container = document.querySelector(container);
    this.class = articleClasses;
    this.animation = ['transform', 'translate-y-10', 'rotate-12', 'xl:rotate-6', 'opacity-0', 'transition', 'ease-in', 'duration-350'];
    this.form = document.querySelector(form);
  }

  preventReloading() {
    this.form.addEventListener('submit', (event) => {
      this.resetInput();
      event.preventDefault();
    });
  }

  hasChild() {
    if (this.container.firstChild && this.container.firstChild.nodeName === 'P') {
      this.container.innerHTML = '';
    }
  }

  addTask() {
    this.hasChild();
    document.querySelectorAll('.delete');
    const task = document.createElement('article');
    if (this.input.value === '' || this.input.value.length > 25) {
      return;
    }
    task.innerHTML = `
            <p class="test text-white text-3xl">${this.input.value}</p>
            ${this.btnComponent}
            `;

    task.classList.add(...this.class);
    this.container.prepend(task);
  }

  resetInput() {
    this.input.value = '';
  }

  deleteTask() {
    document.querySelectorAll('.delete').forEach((btn) => btn.addEventListener('click', () => {
      const article = btn.parentElement;
      article.classList.add(...this.animation);
      setTimeout(() => {
        article.remove();
        localStorage.removeItem('to-do-tasks', btn.previousElementSibling.textContent);
      }, 400);
    }));
  }
}

const taskAdder = new TaskFactory('#addButton', '#input', '#work-list', 'form');
const cookies = new Cookies('#work-list');

document.querySelector('#addButton').addEventListener('click', () => {
  taskAdder.addTask();
  taskAdder.resetInput();
  taskAdder.deleteTask();
  cookies.setCookie();
});

window.addEventListener('load', () => {
  cookies.getCookie();
  taskAdder.preventReloading();
  taskAdder.deleteTask();
});
