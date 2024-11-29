function validateForm(event) {
    
    event.preventDefault();

    
    const firstName = document.querySelector('input[name="firstname"]').value;
    const lastName = document.querySelector('input[name="lastname"]').value;
    const email = document.querySelector('input[name=" email"]').value;
    const dob = document.querySelector('input[name=" dob"]').value;
    const gender = document.querySelector('input[name="sex"]:checked');
    const address = document.querySelector('textarea[name="address"]').value;
    const country = document.querySelector('select[name=" Country"]').value;
    const terms = document.querySelector('input[type="checkbox"]');

    
    if (firstName === "" || lastName === "") {
        alert("Please enter both your first and last name");
        return;
    }

    if (email === "") {
        alert("Please enter your email");
        return;
    }

    if (dob === "") {
        alert("Please select your date of birth");
        return;
    }

    if (!gender) {
        alert("Please select your gender");
        return;
    }

    if (address === "") {
        alert("Please enter your address");
        return;
    }

    if (country === "Select a Country") {
        alert("Please select your country");
        return;
    }

    if (!terms.checked) {
        alert("You must agree to the terms and conditions");
        return;
    }

    
    if (confirm("Are you sure you want to submit?")) {
        alert("Successfully Submitted");
        
    } else {
        alert("Submission cancelled. You can continue editing the form.");
    }
}
