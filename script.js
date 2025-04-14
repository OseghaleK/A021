$(document).ready(function() {
    const emailInput = $('#email');
    const confirmEmailInput = $('#confirmEmail');
    const errorMessage = $('#errorMessage');
    const successMessage = $('#successMessage');
    const confirmButton = $('#confirmButton');

    // Hide messages initially
    errorMessage.hide();
    successMessage.hide();

    confirmButton.click(function() {
        const email = emailInput.val().trim();
        const confirmEmail = confirmEmailInput.val().trim();
        
        // Hide messages on new verification attempt
        errorMessage.hide();
        successMessage.hide();

        // Scenario 1: No data entered
        if (email === '' || confirmEmail === '') {
            errorMessage.text('Please fill in both email fields').show();
            return;
        }

        // Scenario 2: Emails don't match
        if (email !== confirmEmail) {
            errorMessage.text('Email addresses do not match').show();
            confirmEmailInput.css('border-color', '#d93025');
            return;
        }

        // Scenario 3: Emails match
        successMessage.show();
        confirmEmailInput.css('border-color', '#1e8e3e');
    });

    // Real-time validation
    confirmEmailInput.on('input', function() {
        const email = emailInput.val().trim();
        const confirmEmail = $(this).val().trim();
        
        errorMessage.hide();
        
        if (email && confirmEmail) {
            if (email === confirmEmail) {
                $(this).css('border-color', '#1e8e3e');
            } else {
                $(this).css('border-color', '#d93025');
            }
        } else {
            $(this).css('border-color', '#dadce0');
        }
    });
});
