var conversionMode = "toFahrenheit"; // Default conversion mode

// Set the default button styling
document.getElementById("toFahrenheitButton").classList.add("active");

// Update the formula text initially
updateFormulaText();

// Function to toggle between conversion modes
function toggleConversion(mode) {
    conversionMode = mode;

    // Update button styling based on selected mode
    if (conversionMode === "toFahrenheit") {
        document.getElementById("toFahrenheitButton").classList.add("active");
        document.getElementById("toCelsiusButton").classList.remove("active");
    } else if (conversionMode === "toCelsius") {
        document.getElementById("toFahrenheitButton").classList.remove("active");
        document.getElementById("toCelsiusButton").classList.add("active");
    }

    // Update the formula text
    updateFormulaText();
}

// Function to update the formula text based on the conversion mode
function updateFormulaText() {
    var formulaTextElement = document.getElementById("formulaText");

    if (conversionMode === "toFahrenheit") {
        formulaTextElement.innerHTML = "<strong>Cara Konversi Dari Celcius (&deg;C) ke Fahrenheit (&deg;F)</strong><br>" +
            "---------------------------------------------------------------------------<br><br>" +
            "Suhu <em>S</em> dalam derajat Fahrenheit (&deg;F) sama dengan Celcius (&deg;C) kali 9/5 tambah 32<br><br>" +
            "<em>S</em>(&deg;F) = (<em>S</em>(&deg;C) 9/5) + 32<br><br>" +
            "atau<br><br>" +
            "<em>S</em>(&deg;F) = (<em>S</em>(&deg;C) 1.8) + 32";
    } else if (conversionMode === "toCelsius") {
        formulaTextElement.innerHTML = "<strong>Cara Konversi Dari Fahrenheit (&deg;F) ke Celcius (&deg;C)</strong><br>" +
            "---------------------------------------------------------------------------<br><br>" +
            "Suhu <em>S</em> dalam derajat Celcius (&deg;C) sama dengan Fahrenheit (&deg;F) dikurangi 32, lalu dikali 5/9<br><br>" +
            "<em>S</em>(&deg;C) = (<em>S</em>(&deg;F) - 32) 5/9<br><br>" +
            "atau<br><br>" +
            "<em>S</em>(&deg;C) = (<em>S</em>(&deg;F) - 32) 0.55";
    }
}

// Function to convert the temperature based on the conversion mode
function convertTemperature() {
    var temperatureInput = parseFloat(document.getElementById("temperatureInput").value);
    var convertedTemperature;
    var calculationExplanation;

    if (isNaN(temperatureInput)) {
        alert("Masukkan suhu dalam angka.");
        return;
    }

    if (conversionMode === "toFahrenheit") {
        convertedTemperature = (temperatureInput * 9/5) + 32;
        calculationExplanation = temperatureInput + " \u00B0C * 9/5 + 32 = " + convertedTemperature.toFixed(2) + " \u00B0F";
    } else if (conversionMode === "toCelsius") {
        convertedTemperature = (temperatureInput - 32) * 5/9;
        calculationExplanation = "(" + temperatureInput + " \u00B0F - 32) * 5/9 = " + convertedTemperature.toFixed(2) + " \u00B0C";
    }

    document.getElementById("convertedOutput").textContent = convertedTemperature.toFixed(2);
    document.getElementById("calculationExplanation").textContent = calculationExplanation;
}

// Function to reset the form
function resetForm() {
    document.getElementById("temperatureForm").reset();
    document.getElementById("convertedOutput").textContent = "";
    document.getElementById("calculationExplanation").textContent = "";
}

// Event listener for form submission
document.getElementById("temperatureForm").addEventListener("submit", function(event) {
    event.preventDefault();
    convertTemperature();
});
