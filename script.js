
document.getElementById('order-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const address = document.getElementById('address').value;
    const phone = document.getElementById('phone').value;
    const email = document.getElementById('email').value;
    const orderDetails = document.getElementById('order-details').value;
    const feedback = document.getElementById('feedback');

    
    if (!name || !address || !phone || !email || !orderDetails) {
        feedback.textContent = 'Please fill in all fields.';
        feedback.style.color = 'red';
        return;
    }

    

    feedback.textContent = 'Thank you for your order!';
    feedback.style.color = 'green';

    
    document.getElementById('order-form').reset();
});