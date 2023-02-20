var weightInput = document.getElementById("weightInput")
var heightInput = document.getElementById("heightInput")
var results = document.getElementById("results");
var bmiimage = document.getElementById("bmiimage");


function calculate() {
    var weight = parseFloat(weightInput.value);
    var height = parseFloat(heightInput.value);
    var bmi = weight / (height * height);

    displayResults(bmi)
}

function displayResults(bmi) {
    results.innerHTML = "Your BMI is " + bmi.toFixed(2);

    if (bmi <= 18.5) {
        bmiimage.src = "Images/Underweight.jpg";
    }
    else if (bmi <= 24.9) {
        bmiimage.src = "Images/Normal.jpg";
    }
    else if (bmi <= 29.9) {
        bmiimage.src = "Images/Overweight.jpg";
    }
    else {
        bmiimage.src = "Images/Obese.jpg";
    }
}

function reset() {
    weightInput.value = ""
    heightInput.value = ""
    results.innerHTML = ""
    bmiimage.src = ""

}