async function delayedMessage(params, delay = 1000) {
      return new Promise((resolve) => setTimeout(() => resolve(params), delay));
}

async function displayFunc() {
      let display = await delayedMessage('Hello world!', 1000);
      console.log(display);
}

displayFunc();