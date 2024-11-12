// const input = document.getElementById('search-input');
// const resultsDiv = document.getElementById('results');

// input.addEventListener('input', (e) => {

//     debounceInputSearch(e.target.value);
// })

// let debounceInputSearch = debounceSearch(text => {
//     resultsDiv.textContent = text;
// }, 1000);

// function debounceSearch(func, delay = 300) {
//     let timeout;

//     return (args) => {
//         clearTimeout(timeout);

//         timeout = setTimeout(() => {
//             func(args);
//         }, delay);
//     }
// }

// let scrollContainer = document.getElementById('scroll-container');
// let divScroll = document.getElementById('status');

// function count() {
//     divScroll.textContent = `Scroll Position1: ${scrollContainer.scrollTop}`
// }

// let throttleStatus = throttle(count, 500);

// function throttle(func, limit) {
//     let lastCall = 0;
//     return function(...args) {
//         const now = (new Date()).getTime();
//         if (now - lastCall >= limit) {
//             lastCall = now;
//             return func(...args);
//         }
//     }
// }

// scrollContainer.addEventListener('scroll', throttleStatus);

let scrollContainer = document.getElementById('scroll-container');
let divScroll = document.getElementById('status');

 function count() {
     divScroll.textContent = `Scroll Position1: ${scrollContainer.scrollTop}`
 }

 let throttleStatus = throttle(count, 200);

 function throttle(func, delay) {
    let isPaused = false;

    return (...args) => {
        if(isPaused) return;

        func(args);

        isPaused = true;

        setTimeout(() => {
            isPaused = false;
        }, delay)
    }
 }

 scrollContainer.addEventListener('scroll', throttleStatus);