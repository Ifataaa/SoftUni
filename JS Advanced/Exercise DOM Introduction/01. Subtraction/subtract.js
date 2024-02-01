function subtract() {
    const a = Number(document.getElementById("firstNumber").value);
    const b = Number(document.getElementById("secondNumber").value);

    const res = a - b;
    document.getElementById('result').textContent = res;
}