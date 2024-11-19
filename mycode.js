let axios = require('axios');

let updatePost = async (data) => {
  try {
    let url = 'https://jsonplaceholder.typicode.com/posts/1'
    let response = await axios.put(url, data);
    console.log(response.data);
  } catch(error) {
    console.error(error);
  }
}

updatePost({title: 'Updated Post', body: 'This post has been updated', userId: 1});