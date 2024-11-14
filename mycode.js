function runTimers() {
      
      setTimeout(() => {
            console.log('Привет!');
      }, 3000);
  
      let countSeconds = 0;
      
      let interval = setInterval(() => {
            let time = new Date().toLocaleTimeString();
            console.log(`${time}`);
            countSeconds++;
            if(countSeconds >= 10){
                  clearInterval(interval);
            }
            
      }, 1000)
  }
  
  runTimers();