function Display(value) {
    document.getElementById("display").value += value;
}

function clearDisplay() {
    document.getElementById("display").value = '';
}
function clear1(){
    let display = document.getElementById("display").value;
    document.getElementById("display").value = display.slice(0, -1);
}
function calculateResult() {
    try {
        const result = eval(document.getElementById("display").value);
        document.getElementById("display").value = result;
    } catch (error) {
        document.getElementById("display").value = 'Error';
    }
}