let resultElement: HTMLInputElement | null;

window.addEventListener("DOMContentLoaded", () => {
  resultElement = document.getElementById("result") as HTMLInputElement;
});

function appendToResult(value: string) {
  if (resultElement) {
    resultElement.value += value;
  }
}

function calculateResult() {
  if (resultElement) {
    try {
      const result = eval(resultElement.value);
      resultElement.value = result.toString();
    } catch (error) {
      resultElement.value = "Error";
    }
  }
}

function clearResult() {
  if (resultElement) {
    resultElement.value = "";
  }
}