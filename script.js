$(document).ready(function() {
    $('#confirmButton').click(function() {
        const email = $('#email').val().trim();
        const confirmEmail = $('#confirmEmail').val().trim();
        const errorMessage = $('#errorMessage');
        
        // Hide error message initially
        errorMessage.hide();
        
        // Check if fields are empty
        if (email === '' || confirmEmail === '') {
            alert('Please fill in both email fields.');
            return;
        }
        
        // Validate email format (simple validation)
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            alert('Please enter a valid email address.');
            return;
        }
        
        // Check if emails match
        if (email === confirmEmail) {
            alert('Email address has been verified successfully!');
        } else {
            errorMessage.show();
            $('#confirmEmail').focus();
        }
    });
    
    // Real-time validation as user types
    $('#confirmEmail').on('input', function() {
        const email = $('#email').val().trim();
        const confirmEmail = $(this).val().trim();
        
        if (email && confirmEmail) {
            if (email === confirmEmail) {
                $(this).css('border-color', '#4CAF50');
                $('#errorMessage').hide();
            } else {
                $(this).css('border-color', '#f44336');
            }
        } else {
            $(this).css('border-color', '#ccc');
        }
    });
});
