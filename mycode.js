function performTask() {
      return new Promise((resolve, reject) => {
            setTimeout(() => {
                  let randomNumber = Math.random() > 0.5;
                  if(randomNumber) {
                        resolve('Task completed successfully');
                  } else {
                        reject('Task failed');
                  }
            }, 2000);
      })
}

performTask()
  .then(message => {
    console.log(message);
  })
  .catch(error => {
    console.error(error);
  })
  .finally(() => {
    console.log("Task is completed");
  });