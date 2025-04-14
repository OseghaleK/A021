// Email verification form validation script
document.addEventListener('DOMContentLoaded', function() {
    // Get form elements
    const emailForm = document.getElementById('emailForm');
    const emailInput = document.getElementById('email');
    const confirmEmailInput = document.getElementById('confirmEmail');
    const confirmButton = document.getElementById('confirmButton');
    const message = document.getElementById('message');

    // Function to show message
    function showMessage(text, isSuccess) {
        message.textContent = text;
        message.style.display = 'block';
        
        if (isSuccess) {
            message.className = 'success';
        } else {
            message.className = 'error';
        }
    }

    // Add click event listener to confirm button
    confirmButton.addEventListener('click', function(e) {
        e.preventDefault(); // Prevent form submission
        
        // Get input values
        const email = emailInput.value.trim();
        const confirmEmail = confirmEmailInput.value.trim();
        
        // Clear previous messages
        message.style.display = 'none';
        
        // Check if first email field is empty
        if (email === '') {
            showMessage('Email Address field is required.', false);
            emailInput.focus();
            return;
        }
        
        // Check if confirmation email field is empty
        if (confirmEmail === '') {
            showMessage('Confirm Email Address field is required.', false);
            confirmEmailInput.focus();
            return;
        }
        
        // Check if emails match
        if (email !== confirmEmail) {
            showMessage('Email addresses do not match. Please check and try again.', false);
            confirmEmailInput.focus();
            return;
        }
        
        // If all validations pass
        showMessage('Email confirmation was successful!', true);
    });

    // Reset message when user starts typing
    emailInput.addEventListener('input', function() {
        message.style.display = 'none';
    });
    
    confirmEmailInput.addEventListener('input', function() {
        message.style.display = 'none';
    });
});
</script>
