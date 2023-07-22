var resultElement;
window.addEventListener("DOMContentLoaded", function () {
    resultElement = document.getElementById("result");
});
function appendToResult(value) {
    if (resultElement) {
        resultElement.value += value;
    }
}
function calculateResult() {
    if (resultElement) {
        try {
            var result = eval(resultElement.value);
            resultElement.value = result.toString();
        }
        catch (error) {
            resultElement.value = "Error";
        }
    }
}
function clearResult() {
    if (resultElement) {
        resultElement.value = "";
    }
}
