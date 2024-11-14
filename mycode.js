function loadImage() {
      return new Promise((resolve) => {
            setTimeout(() => {
                  resolve('Loaded image.');
            }, 1000)

      })
}

//loadData
function loadData() {
      return new Promise((resolve) => {
            setTimeout(() => {
                  resolve('Loaded data.');
            }, 2000)

      })
}

//All resources loaded
Promise.all([loadImage(), loadData()])
.then(res => {
      console.log('All resources loaded');
      console.log(res);
})
.catch(error => {
      console.log(error);
});
