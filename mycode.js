function loadResource1() {
            return new Promise((resolve) => setTimeout(() => resolve('Data 1'), 2000));
      }
      
      function loadResource2() {
            return new Promise((resolve) => setTimeout(() => resolve('Data 2'), 3000));
      }
      
      async function loadAllResources() {
            let [data1, data2] = await Promise.all([loadResource1(), loadResource2()]);
            console.log(data1);
            console.log(data2);
      }
      
      // Запуск функции для демонстрации
      loadAllResources();