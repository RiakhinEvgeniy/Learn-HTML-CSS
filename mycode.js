
async function testAxios(url) {
    let obj;
    await axios.get(url)
        .then((respones) => {
            obj = respones.data
        })
        .catch(err => {
            console.log(err.name);
        })

    loopOnObject(obj);
}

const url = 'https://jsonplaceholder.typicode.com/users/1'
testAxios(url);

function loopOnObject(objectWithData) {
    for (let key in objectWithData) {
        if (objectWithData.hasOwnProperty(key)) {

            const value = objectWithData[key];

            if (typeof value === 'object' && value !== null) {
                loopOnObject(value)
            }
            else {
                // console.log(`${key}: ${value}`);
                console.log(key, value);
            }
        }
    }
}