/* Sending Email from Contact Section */
(function () {
    emailjs.init("user_DWPl7mFaV1DtsPZUwfz7b");
})();

function sendmail() {
    let fullName = document.getElementById("name").value;
    let userEmail = document.getElementById("email").value;
    let userMessage = document.getElementById("projectsummary").value;

        var contactParams = {
            from_name: fullName,
            from_email: userEmail,
            projectsummary: userMessage
        };

        emailjs.send('service_vgoaob9', 'template_resume', contactParams).then(function (res) {})
}

   