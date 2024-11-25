// Объявление асинхронной функции fetchDataAsync
async function fetchDataAsync() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
    let err = Math.random() > 0.5 ? true : false;
    if(!err) {
      reject(err);
    } else {
      resolve({id: 1, name: 'Evgeniy'});
    }
  }, 1000);
  })
}

// Объявление асинхронной функции loadDataAsync
async function loadDataAsync() {
  try {
    let data = await fetchDataAsync();
    console.log(data);
  } catch(error) {
    console.log(error);
  }
}

// Вызов функции loadDataAsync для тестирования
loadDataAsync();