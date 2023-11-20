var currentYear = 2023;

function calculateAge() {
    var name = document.getElementById("name");
    var date = document.getElementById("date");
    var age = currentYear - date.value.toString().split("-")[0];
    document.getElementById("customMessage").innerHTML =
        "Hello " + name.value + " your age is " + age;
}
