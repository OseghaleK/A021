$(document).ready(function() {
    $('#verify').click(function() {
        // Clear previous errors
        $('#error').text('');
        
        // Get values
        var email1 = $('#email1').val().trim();
        var email2 = $('#email2').val().trim();
        
        // Validate
        if(!email1 || !email2) {
            $('#error').text('Both email fields are required');
            return;
        }
        
        if(email1 !== email2) {
            $('#error').text('Emails do not match');
            return;
        }
        
        if(!isValidEmail(email1)) {
            $('#error').text('Please enter a valid email');
            return;
        }
        
        // If all checks pass
        alert('Email has been confirmed!');
    });
    
    function isValidEmail(email) {
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    }
});
