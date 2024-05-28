

  $(document).ready(function() {
    $("#contactForm").submit(function(event) {
        event.preventDefault();
        var isValid = true;
        var errorMessage = '';

        var firstName = $("#firstName").val().trim();
        var lastName = $("#lastName").val().trim();
        var email = $("#email").val().trim();
        var password = $("#password").val();
        var message = $("#message").val().trim();
        var acceptTerms = $("#acceptTerms").is(":checked");

        if (firstName === '') {
            isValid = false;
            errorMessage += 'First name is required.<br>';
        }
        if (lastName === '') {
            isValid = false;
            errorMessage += 'Last name is required.<br>';
        }
        if (email === '') {
            isValid = false;
            errorMessage += 'Email address is required.<br>';
        } else if (!validateEmail(email)) {
            isValid = false;
            errorMessage += 'Invalid email address.<br>';
        }
        if (password === '') {
            isValid = false;
            errorMessage += 'Password is required.<br>';
        }
        if (message === '') {
            isValid = false;
            errorMessage += 'Message is required.<br>';
        }
        if (!acceptTerms) {
            isValid = false;
            errorMessage += 'You must accept the terms and conditions.<br>';
        }

        if (isValid) {
            // Submit the form or perform desired actions here
            alert("Form submitted successfully!");
        } else {
            $("#formErrors").html(errorMessage);
        }
    });

    function validateEmail(email) {
        var re = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;
        return re.test(email);
    }
});
// JavaScript code for search functionality
document.getElementById("searchInput").addEventListener("input", function() {
    var searchValue = this.value.toLowerCase();
    var partnerItems = document.querySelectorAll(".partner");
    var cardItems = document.querySelectorAll(".card");

    partnerItems.forEach(function(item) {
        var universityName = item.querySelector("h2.color").innerText.toLowerCase();
        if (universityName.includes(searchValue)) {
            item.classList.remove("hidden");
        } else {
            item.classList.add("hidden");
        }
    });

    cardItems.forEach(function(item) {
        var programTitle = item.querySelector("h2.color").innerText.toLowerCase();
        if (programTitle.includes(searchValue)) {
            item.classList.remove("hidden");
        } else {
            item.classList.add("hidden");
        }
    });
});
//  // JavaScript code for back to top functionality
//     document.getElementById("backToTop").addEventListener("click", function(event) {
//         event.preventDefault();
//         window.scrollTo({
//             top: 0,
//             behavior: "smooth"
//         });
//     });
$(document).ready(function() {
    $(".back-to-top").on("click", function(event) {
        event.preventDefault();
        $('html, body').animate({scrollTop: 0}, 'slow');
    });
});