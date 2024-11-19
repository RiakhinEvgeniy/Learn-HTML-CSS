let axios = require('axios');

let createPost = async (data) => {
  try {
    let url = 'https://jsonplaceholder.typicode.com/posts'
    let response = await axios.post(url, data);
    console.log(response.data);
  } catch(error) {
    console.error('Error', error);
  }
}

createPost({title: 'New Post', body: 'This is a new post', userId: 1});