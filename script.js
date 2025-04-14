document.addEventListener('DOMContentLoaded', function() {
    const emailInput = document.getElementById('email');
    const confirmEmailInput = document.getElementById('confirmEmail');
    const confirmButton = document.getElementById('confirmButton');
    const errorMessage = document.getElementById('errorMessage');
    const successPopup = document.getElementById('successPopup');
    const closePopup = document.getElementById('closePopup');

    function validateEmail(email) {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(email);
    }

    function showError(message) {
        errorMessage.textContent = message;
        errorMessage.style.display = 'block';
    }

    function hideError() {
        errorMessage.style.display = 'none';
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

        hideError();

        if (!email || !confirmEmail) {
            showError('Both email fields are required');
            return;
        }

        if (!validateEmail(email)) {
            showError('Please enter a valid email address');
            return;
        }

        if (email !== confirmEmail) {
            showError('Email addresses do not match');
            return;
        }

        showSuccessPopup();
    });

    closePopup.addEventListener('click', hideSuccessPopup);

    // Clear error when user starts typing
    emailInput.addEventListener('input', hideError);
    confirmEmailInput.addEventListener('input', hideError);
});
