document.addEventListener('DOMContentLoaded', function() {
    const emailInput = document.getElementById('email');
    const confirmEmailInput = document.getElementById('confirmEmail');
    const confirmButton = document.getElementById('confirmButton');
    const emailError = document.getElementById('emailError');
    const confirmError = document.getElementById('confirmError');
    const successPopup = document.getElementById('successPopup');
    const closePopup = document.getElementById('closePopup');

    function validateEmail(email) {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(email);
    }

    function showError(element, message) {
        element.textContent = message;
        element.style.display = 'block';
    }

    function hideErrors() {
        emailError.style.display = 'none';
        confirmError.style.display = 'none';
    }

    function showSuccessPopup() {
        successPopup.style.display = 'flex';
    }

    function hideSuccessPopup() {
        successPopup.style.display = 'none';
    }

    confirmButton.addEventListener('click', function() {
        const email = emailInput.value.trim();
        const confirmEmail = confirmEmailInput.value.trim();

        hideErrors();

        if (!email) {
            showError(emailError, 'Email address is required');
            return;
        }

        if (!confirmEmail) {
            showError(confirmError, 'Confirm email address is required');
            return;
        }

        if (!validateEmail(email)) {
            showError(emailError, 'Please enter a valid email address');
            return;
        }

        if (email !== confirmEmail) {
            showError(confirmError, 'Email addresses do not match');
            return;
        }

        showSuccessPopup();
    });

    closePopup.addEventListener('click', hideSuccessPopup);

    // Clear errors when user starts typing
    emailInput.addEventListener('input', function() {
        hideErrors();
    });
    confirmEmailInput.addEventListener('input', function() {
        hideErrors();
    });
});
