$(document).ready(function () {
    $(".contact-form .submit-btn").click(function (e) {
        e.preventDefault();

        let isValid = true;

        $(".form-group input, .form-group textarea").removeClass("error valid");
        $(".error-message").text("").hide();

    const name = $(".name").val().trim();
    const nameRegex = /^[A-Za-z\s]+$/;

if (name === "") {
    $(".name").addClass("error");
    $(".name-error").text("Please enter your name").show();
    isValid = false;
} else if (!nameRegex.test(name)) {
    $(".name").addClass("error");
    $(".name-error").text("Name must contain only letters").show();
    isValid = false;
} else {
    $(".name").removeClass("error").addClass("valid");
    $(".name-error").hide();
}


        const email = $(".email").val().trim();
        const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.com$/;

        if (email === "") {
            $(".email").addClass("error");
            $(".email-error").text("Please enter your email").show();
            isValid = false;
        } else if (!emailPattern.test(email)) {
            $(".email").addClass("error");
            $(".email-error").text("Only valid Gmail addresses allowed").show();
            isValid = false;
        } else {
            $(".email").addClass("valid");

        }
const message = $(".message").val().trim();
const messagePattern = /^[a-zA-Z0-9 ]+$/;

if (message === "") {
    $(".message").addClass("error");
    $(".message-error").text("Please enter your message").show();
    isValid = false;
} else if (!messagePattern.test(message)) {
    $(".message").addClass("error");
    $(".message-error").text("Special characters are not allowed").show();
    isValid = false;
} else {
    $(".message").addClass("valid");
}

if (isValid) {
    alert("Your message has been sent successfully!");
    $(".contact-form form")[0].reset();
    $(".form-group input, .form-group textarea").removeClass("valid");
}


    });
});
