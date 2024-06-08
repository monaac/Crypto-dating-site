document.getElementById('cta-button').addEventListener('click', function() {
    window.location.href = '#signup';
});

document.getElementById('contact-form').addEventListener('submit', function(e) {
    e.preventDefault();
    alert('Thank you for contacting us!');
    this.reset();
});

document.getElementById('signup-form').addEventListener('submit', function(e) {
    e.preventDefault();
    alert('Thank you for signing up!');
    this.reset();
});
