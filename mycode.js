async function testAxios(url) {
    await axios.get(url)
    .then((respones) => {
        console.log(respones.data);
    })
    .catch(err => {
        console.log(err.name);
    })
}

const url = 'https://jsonplaceholder.typicode.com/users/1'
testAxios(url);