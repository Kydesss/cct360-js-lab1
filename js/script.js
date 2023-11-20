var firstName, lastName, email, currentYear, birthYear;
firstName = "Joaquin";
lastName = "Pacia";
email = "something@gmail.com";
currentYear = 2023;
birthYear = 2003;

function myFunction() {
    document.getElementById("customMessage").innerHTML =
        "Hello " +
        firstName +
        " " +
        lastName +
        "!<br>" +
        "You are currently " +
        (currentYear - birthYear) +
        " years old this year.";
}
