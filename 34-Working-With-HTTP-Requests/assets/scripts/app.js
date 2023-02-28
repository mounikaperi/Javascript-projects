const listElement = document.querySelector('.posts');
const postTemplate = document.getElementById('single-post');
const form = document.querySelector('#new-post form');
const fetchButton = document.querySelector('#available-posts button');

function sendHTTPRequest(method, url, data) {
  const promise = new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();
    xhr.open(method, url);
    xhr.responseType = 'json';
    xhr.onload = function () {
      resolve(xhr.response);
    };
    xhr.send(JSON.stringify(data));
  });
  return promise;
}

async function fetchPosts() {
  const responseData = await sendHTTPRequest('GET', 'https://jsonplaceholder.typicode.com/posts');
  const listOfPosts = responseData;
  for (const post of listOfPosts) {
    const postElement = document.importNode(postTemplate.content, true);
    postElement.querySelector('h2').textContent = post.title.toUpperCase();
    postElement.querySelector('p').textContent = post.body;
    listElement.append(postElement);
  }
}

async function createPost(title, content) {
  const userId = Math.floor(Math.random() * 10);
  const createdPostObject = {
    title: title,
    body: content,
    userId: userId
  };
  sendHTTPRequest('POST', 'https://jsonplaceholder.typicode.com/posts', createdPostObject);
}

fetchButton.addEventListener('click', fetchPosts);
form.addEventListener('submit', event => {
  event.preventDefault();
  const enteredTitle = event.currentTarget.querySelector('#title').value;
  const enteredContent = event.currentTarget.querySelector('#content').value;
  createPost(enteredTitle, enteredContent);
})