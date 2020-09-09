// Uncomment below to test DOM access:
// alert('hi')
// ====================================

const testData = 'https://reqres.in/api/users';
const submitBtn = document.querySelector('.btn-submit');

submitBtn.addEventListener('click', function (event) {
    event.preventDefault();

    // Attempting to serve backend controller routes using fetch api
    fetch('/api/tickets', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            data: 'insert name here',
        }),
    })
        .then((res) => {
            return res.json();
        })
        .then((data) => {
            console.log("I'm in the the FETCH data");
            console.log(data);
        });
});
