document.querySelector('#btn_connect').addEventListener('click', function() {
    const results = fetch('http://localhost:3000/')
    results.then(response => {
        if (response.ok) {
            return response.text();
        } else {
            throw new Error('Network response was not ok');
        }
    }).then(data => {
        document.querySelector('#content').innerHTML = data;
        console.log('Connection successful:', data);
    }).catch(error => {
        document.querySelector('#content').innerHTML = 'Error: ' + error.message;
    });
});