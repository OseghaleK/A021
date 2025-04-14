$(document).ready(function() {
    // When the confirm button is clicked
    $('#confirmButton').click(function() {
        // Get the values of both email fields
        const email = $('#email').val().trim();
        const confirmEmail = $('#confirmEmail').val().trim();
        
        // Check if either field is empty
        if (email === '' || confirmEmail === '') {
            alert('Please fill in both email fields.');
            return;
        }
        
        // Check if emails match
        if (email === confirmEmail) {
            alert('Email has been confirmed!');
        } else {
            alert('Emails do not match. Please try again.');
            // Clear the second field and focus on it
            $('#confirmEmail').val('').focus();
        }
    });
    
    // Optional: Add real-time validation as users type
    $('#confirmEmail').on('input', function() {
        const email = $('#email').val().trim();
        const confirmEmail = $(this).val().trim();
        
        if (email && confirmEmail) {
            if (email === confirmEmail) {
                $(this).css('border-color', 'green');
            } else {
                $(this).css('border-color', 'red');
            }
        } else {
            $(this).css('border-color', '#ddd');
        }
    });
});
