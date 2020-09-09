// Uncomment below to test DOM access:
// alert('hi')
// ====================================

const testData = 'https://reqres.in/api/users';
const submitBtn = document.querySelector('.btn-submit');
const form = document.querySelector('.form');

form.addEventListener('submit', function (event) {
    event.preventDefault();

    // Creates new Form Data from submit event
    const formData = new FormData(event.target);

    // Reveals submit value while creating key/value pairs into object
    let object = {};
    formData.forEach((value, key) => {
        object[key] = value;
    });

    // Utilize fetch method to POST data from form to controller routes api
    fetch('/api/tickets', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(object),
    })
        .then((res) => {
          console.log(res)
            return res.json();
        })
        .then((data) => {
            console.log("I'm in the the FETCH data");
            console.log(data);
        });
});
