function openRegisterForm() {
    document.getElementById("modal").style.display = "block";
}

function closeRegisterForm() {
    document.getElementById("modal").style.display = "none";
}

function handleFormSubmit(event) {
    event.preventDefault(); // Prevent the default form submission
    // Here you can handle the form data, send it to a server, etc.
    alert("Form submitted!");
    closeRegisterForm(); // Close the modal
}

document.addEventListener("DOMContentLoaded", function() {
    // When the user clicks anywhere outside of the modal, close it
    window.onclick = function(event) {
        var modal = document.getElementById("modal");
        if (event.target == modal) {
            closeRegisterForm();
        }
    }
});


