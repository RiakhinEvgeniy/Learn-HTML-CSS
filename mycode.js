// Подключение библиотеки Axios
const axios = require('axios');

// Определение функции fetchTodo
const fetchTodo = () => {
    let url = 'https://jsonplaceholder.typicode.com/todos/1'
    axios.get(url)
    .then((response) => {
      console.log(response.data)
    })
    .catch((error) => {
      console.log('Error response', error);
    })
};

// Вызов функции
fetchTodo();