   $(document).ready(function() {

       // This code will execute after the document has loaded

       $("#confirmButton").click(function() {

           // Get the values entered in both email fields

           var email1 = $("#email1").val();

           var email2 = $("#email2").val();

           

           // Check if the emails match

           if (email1 === email2) {

               // Emails match, show a confirmation alert

               alert("Emails match. Email confirmed: " + email1);

           } else {

               // Emails do not match, show an error alert

               alert("Emails do not match. Please confirm your email.");

           }

       });

   });
