document.addEventListener('DOMContentLoaded', function() {
    const emailForm = document.getElementById('emailForm');
    const emailInput = document.getElementById('email');
    const confirmEmailInput = document.getElementById('confirmEmail');
    const confirmButton = document.getElementById('confirmButton');
    const successMessage = document.getElementById('successMessage');
    const closeButton = document.getElementById('closeButton');
    const errorMessage = document.getElementById('errorMessage');

    function validateEmail(email) {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(email);
    }

    function showError(message) {
        errorMessage.textContent = message;
        errorMessage.style.display = 'block';
        successMessage.style.display = 'none';
    }

    function resetMessages() {
        errorMessage.style.display = 'none';
        successMessage.style.display = 'none';
    }

    emailForm.addEventListener('submit', function(e) {
        e.preventDefault();
        resetMessages();

        const email = emailInput.value.trim();
        const confirmEmail = confirmEmailInput.value.trim();

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

        successMessage.style.display = 'block';
    });

    closeButton.addEventListener('click', function() {
        successMessage.style.display = 'none';
    });

    // Real-time validation
    emailInput.addEventListener('input', resetMessages);
    confirmEmailInput.addEventListener('input', resetMessages);
});
