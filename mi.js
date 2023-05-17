
const init = document.getElementById('location-modal');

eventListeners();

function eventListeners(){

    init.addEventListener('click', (e) => {
        e.preventDefault();
        console.log("lcic")
    });


}