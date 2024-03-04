//form validation
document.getElementById('ContactForm').addEventListener('sumbit', function (event) {
    var name = documentgetElementById('name').value;
    var email = documentgetElementById('email').value;

    if (name === '' || email === '') {
        alert('All fields must be filled');
        event.preventDefault();
    }
});