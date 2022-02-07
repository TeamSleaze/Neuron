const modalWindow = document.getElementById('modal-card');
const cardButton = document.getElementById('modal-window-btn');
const closeButton = document.getElementById('modal-window-close-btn');

// Open Modal UI if Button pressed
cardButton.onclick = function() {
    modalWindow.style.display = 'block';
}

// Close Modal UI if close button pressed
closeButton.onclick = function() {
    modalWindow.style.display = 'none';
}

// Close Modal UI if clicked outside modal window
window.onclick = function(event) {
    if (event.target == modalWindow) {
        modalWindow.style.display = 'none';
    }
}
