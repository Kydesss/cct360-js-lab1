var firstName = "Joaquin".toUpperCase();
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
    ageCalculator() +
    " years old. Congratulations for getting old. " +
    "But worry not, we have a coupon for you." +
    " We have sent you a $" +
    bonusCoupon() +
    " coupon to your email address: " +
    "<a href=\"mailto:" + email + "\">" + email + "</a> <br>" +
    "Sorry, we have taxed you, so the total coupon is now $" +
    incomeTax(bonusCoupon(), 0.4) +
    ". The total deduction from your coupon and the bonus was: $" +
    deduction();
// window.alert();

function ageCalculator() {
    return currentYear - yearOfBirth;
}

function bonusCoupon() {
    return couponValue + ageCalculator() * 10;
}

function taxCalculator(price) {
    var totalPrice = price * 1.13;
    return totalPrice;
}

function incomeTax(incomeGross, taxRate) {
    return incomeGross - (incomeGross * taxRate)
}

function deduction() {
    return bonusCoupon() - incomeTax(bonusCoupon(), 0.4);
}

function customMessage() {
    document.getElementById("message").innerHTML = message;
}

