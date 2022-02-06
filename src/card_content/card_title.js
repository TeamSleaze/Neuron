setInterval(
    function() {
        var value = document.getElementById('textArea-1').value;
        localStorage.setItem('value', value);
    }, 10000
)



function onload() {
    var value = localStorage.getItem('value');
    document.getElementById('textArea-1').value = value;
}

