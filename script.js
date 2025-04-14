document.addEventListener('DOMContentLoaded', function() {
    const emailInput = document.getElementById('email');
    const confirmEmailInput = document.getElementById('confirmEmail');
    const confirmButton = document.getElementById('confirmButton');
    const emailError = document.getElementById('emailError');
    const confirmEmailError = document.getElementById('confirmEmailError');
    const successMessage = document.getElementById('successMessage');

    // Function to validate email format
    function isValidEmail(email) {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(email);
    }

    // Function to reset all validation states
    function resetValidation() {
        emailError.style.display = 'none';
        confirmEmailError.style.display = 'none';
        successMessage.style.display = 'none';
        emailInput.classList.remove('error-border', 'success-border');
        confirmEmailInput.classList.remove('error-border', 'success-border');
    }

    // Add click event listener to confirm button
    confirmButton.addEventListener('click', function() {
        resetValidation();
        
        const email = emailInput.value.trim();
        const confirmEmail = confirmEmailInput.value.trim();
        let isValid = true;
        
        // Validate email field
        if (email === '') {
            emailError.textContent = 'Email address is required.';
            emailError.style.display = 'block';
            emailInput.classList.add('error-border');
            isValid = false;
        } else if (!isValidEmail(email)) {
            emailError.textContent = 'Please enter a valid email address.';
            emailError.style.display = 'block';
            emailInput.classList.add('error-border');
            isValid = false;
        }
        
        // Validate confirm email field
        if (confirmEmail === '') {
            confirmEmailError.textContent = 'Confirm email address is required.';
            confirmEmailError.style.display = 'block';
            confirmEmailInput.classList.add('error-border');
            isValid = false;
        } else if (email !== confirmEmail) {
            confirmEmailError.textContent = 'Email addresses do not match.';
            confirmEmailError.style.display = 'block';
            confirmEmailInput.classList.add('error-border');
            isValid = false;
        }
        
        // If everything is valid, show success
        if (isValid) {
            emailInput.classList.add('success-border');
            confirmEmailInput.classList.add('success-border');
            successMessage.style.display = 'block';
        }
    });

    // Real-time validation for confirm email field
    confirmEmailInput.addEventListener('input', function() {
        const email = emailInput.value.trim();
        const confirmEmail = this.value.trim();
        
        confirmEmailError.style.display = 'none';
        this.classList.remove('error-border', 'success-border');
        
        if (email && confirmEmail) {
            if (email === confirmEmail) {
                this.classList.add('success-border');
            } else {
                this.classList.add('error-border');
            }
        }
    });

    // Reset validation when editing email field
    emailInput.addEventListener('input', function() {
        resetValidation();
    });
});
