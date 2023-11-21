var firstName = "Joaquin";
var lastName = "Pacia";
var fullName = firstName + " " + lastName;
var yearOfBirth = 2003;
var currentYear = 2023;
var age = currentYear - yearOfBirth;
var email = "joaquin.pacia@mail.utoronto.ca";
var couponValue = 1000;
var message;
message =
    "Welcome " +
    fullName +
    "!" +
    " You have turned " +
    age +
    " years old. Congratulations for getting old. " +
    "But worry not, we have a coupon for you." +
    " We have sent you a $" +
    couponValue +
    " coupon to your email address: " +
    "<a href=\"mailto:" + email + "\">" + email + "</a>";
// window.alert();

function customMessage() {
    document.getElementById("message").innerHTML = message;
}
