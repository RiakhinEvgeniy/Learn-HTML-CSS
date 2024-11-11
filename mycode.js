window.addEventListener('load', function(varLoad) {
    console.log(`Loading in ${varLoad.timeStamp} happened`);
});

document.addEventListener('DOMContentLoaded', (contentLoad) => {
    console.log(`Content load in ${contentLoad.timeStamp} happened`);
});