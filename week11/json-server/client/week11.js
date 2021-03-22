import {makeRequest}  from './json-server/client/authHelpers.js/index.js';
import Auth from './json-server/client/auth.js/index.js';

// makeRequest('login', 'POST', {
//     password: 'user1',
//     email: 'user1@email.com'
// });

const myAuth = new Auth();
// myAuth.login();

const loginForm = document.getElementById('login');

loginForm.querySelector('button').addEventListener('click', () => {
    myAuth.login(getPost);
});

async function getPost(){
    const data = await makeRequest("posts", "GET", null, myAuth.token);
    console.log(data);
    var ul = document.getElementById('userPosts');
    ul.innerHTML = '';
    data.forEach(element => {
        var li = document.createElement('li');
        li.appendChild(document.createTextNode(element.title));
        li.appendChild(document.createElement('br'));
        li.appendChild(document.createTextNode(element.content));
        ul.appendChild(li);
    });
}
const postForm = document.getElementById('createPostForm');

postForm.querySelector('button').addEventListener('click', () => {
    createPost();
});

async function createPost(){
    const form = document.getElementById('createPostForm');
    const data = {
        title:form.title.value,
        content: form.postContent.value
    }
    console.log(data);
    // window.confirm();

try {
    const result = await makeRequest('posts', 'POST', data, myAuth.token);
    form.title.value = '';
    form.postContent.value = '';
    getPost();
} catch (error) {
    console.log("There was a mistake")
}


}
