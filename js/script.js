var firstName = "Joaquin".toUpperCase();
var lastName = "Pacia";
var fullName = firstName + " " + lastName;
var yearOfBirth = 2003;
var currentYear = 2023;
var age = currentYear - yearOfBirth;
var email = "joaquin.pacia@mail.utoronto.ca";
var couponValue = 1000;
var person1 = {
    name: "Joaquin Pacia",
    id: 235711131719,
    email: "joaquin.pacia@mail.utoronto.ca",
    yearOfAdmission: 2021,
    yearOfGraduation: 2025,
    owingTuition: false,
    studyDuration: function () {
        return this.yearOfGraduation - this.yearOfAdmission;
    },
};
var person2 = {
    name: "John Smith",
    id: 12345679,
    email: "john.smith@mail.utoronto.ca",
    yearOfAdmission: 2020,
    yearOfGraduation: 2024,
    owingTuition: true,
    studyDuration: function () {
        return this.yearOfGraduation - this.yearOfAdmission;
    },
};
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
    '<a href="mailto:' +
    email +
    '">' +
    email +
    "</a> <br>" +
    "Sorry, we have taxed you, so the total coupon is now $" +
    incomeTax(bonusCoupon(), 0.4) +
    ". The total deduction from your coupon and the bonus was: $" +
    deduction();

var profile;
profile =
    person1.name +
    "<br>" +
    person1.email +
    "<br>" +
    person1.id +
    "<br>" +
    person1.yearOfAdmission +
    "<br>" +
    person1.yearOfGraduation +
    "<br>" +
    person1.owingTuition +
    "<br>" +
    person1.studyDuration();
var profile2;
profile2 =
    person2.name +
    "<br>" +
    person2.email +
    "<br>" +
    person2.id +
    "<br>" +
    person2.yearOfAdmission +
    "<br>" +
    person2.yearOfGraduation +
    "<br>" +
    person2.owingTuition +
    "<br>" +
    person2.studyDuration();
    // window.alert();

function ageCalculator() {
    return currentYear - yearOfBirth;
};

function bonusCoupon() {
    return couponValue + ageCalculator() * 10;
}

function taxCalculator(price) {
    var totalPrice = price * 1.13;
    return totalPrice;
}

function incomeTax(incomeGross, taxRate) {
    return incomeGross - incomeGross * taxRate;
}

function deduction() {
    return bonusCoupon() - incomeTax(bonusCoupon(), 0.4);
}

function customMessage() {
    document.getElementById("message").innerHTML = message;
}

function customProfile() {
    document.getElementById("profile").innerHTML = profile;
}

function customProfile2() {
    document.getElementById("profile").innerHTML = profile2;
}
