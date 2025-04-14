// Email verification form validation script
document.addEventListener('DOMContentLoaded', function() {
    const emailInput = document.getElementById('email');
    const confirmEmailInput = document.getElementById('confirmEmail');
    const confirmButton = document.getElementById('confirmButton');

    confirmButton.addEventListener('click', function() {
        const email = emailInput.value.trim();
        const confirmEmail = confirmEmailInput.value.trim();
        
        if (email === '' || confirmEmail === '') {
            alert('Please fill in both email fields');
            return;
        }
        
        if (email !== confirmEmail) {
            alert('Email addresses do not match');
            return;
        }
        
        alert('Email verified successfully!');
    });

    // Optional: Real-time validation as user types
    confirmEmailInput.addEventListener('input', function() {
        const email = emailInput.value.trim();
        const confirmEmail = this.value.trim();
        
        if (email && confirmEmail) {
            if (email === confirmEmail) {
                this.style.borderColor = '#1e8e3e'; // Green border for matching
            } else {
                this.style.borderColor = '#d93025'; // Red border for not matching
            }
        } else {
            this.style.borderColor = '#ccc'; // Default border
        }
    });
});
