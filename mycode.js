function loadResource(step, load = true) {
      return new Promise((resolve, reject) => {
            setTimeout(() => {
                  if(load) {
                        resolve(`${step} completed.`);
                  } else {
                        reject(`${step} faild`);
                  }
            }, 500)
      })
}

loadResource('Step 1', true)
.then((result) => {
      console.log(result);
      return loadResource('Step 2', false).catch((error) => {
            console.warn(error);
            return 'Handled error'
      })
})
.then((result) => {
      console.log(result);
      return loadResource('Step 3', true);
})
.finally(() => {
      console.log('Finally complited')
})