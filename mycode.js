const myPromise = new Promise((resolve, reject) => {
      // Симулируем асинхронную операцию
      setTimeout(() => {
          const success = false; // Попробуйте поменять на false для теста reject
          if (success) {
              resolve("Операция завершена успешно!");
          } else {
              reject("Произошла ошибка!");
          }
      }, 1000);
  });

  myPromise
  .then((res) => {
      console.log(res);
  })
  .catch((error) => {
      console.log(error);
  })
  .finally(() => {
      console.log('Finally!');
  })
  