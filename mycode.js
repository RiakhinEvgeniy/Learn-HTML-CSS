function fetchData(data) {
      return new Promise((resolve) => {
            setTimeout(() => {
                  resolve(data);
            }, 1000)
      })
}

fetchData('Data 1')
.then((res) => {
      console.log(res);
      return fetchData('Data 2');
})
.then((res) => {
      console.log(res);
      return fetchData('Data 3')
})
 .then((res) => {
      console.log(res);
 })
 .catch((error) => {
      console.log(error)
 })