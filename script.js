document.addEventListener('DOMContentLoaded', function() {
    const confirmButton = document.getElementById('confirmButton');
    const closeButton = document.getElementById('closeButton');
    const successMessage = document.getElementById('successMessage');
    
    confirmButton.addEventListener('click', function() {
        const email = document.getElementById('email').value.trim();
        const confirmEmail = document.getElementById('confirmEmail').value.trim();
        
        if (email === confirmEmail && email.includes('@') && email.includes('.')) {
            successMessage.style.display = 'block';
        }
    });
    
    closeButton.addEventListener('click', function() {
        successMessage.style.display = 'none';
    });
});
