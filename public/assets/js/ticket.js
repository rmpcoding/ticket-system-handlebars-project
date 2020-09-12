const form = document.querySelector('.form');

form.addEventListener('submit', function (event) {
    event.preventDefault();

    // Creates new Form Data from submit event
    const formData = new FormData(event.target);

    // Reveals submit value while adding key/value pairs into object
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
            return res;
        })
        .then((data) => {
            // quietly refreshes page to display POST data
            location.reload();
            return data;
        });
});
