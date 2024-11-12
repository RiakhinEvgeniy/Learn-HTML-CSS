const input = document.getElementById('search-input');
const resultsDiv = document.getElementById('results');

input.addEventListener('input', (e) => {

    debounceInputSearch(e.target.value);
})

let debounceInputSearch = debounceSearch(text => {
    resultsDiv.textContent = text;
}, 1000);

function debounceSearch(func, delay = 300) {
    let timeout;

    return (args) => {
        clearTimeout(timeout);

        timeout = setTimeout(() => {
            func(args);
        }, delay);
    }
}