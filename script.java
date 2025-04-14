$(document).ready(function() {
    $('#verify').click(function() {
        var email1 = $('#email1').val();
        var email2 = $('#email2').val();
        
        if (email1 === email2) {
            alert('Email has been confirmed!');
        } else {
            alert('Emails do not match!');
        }
    });
});
