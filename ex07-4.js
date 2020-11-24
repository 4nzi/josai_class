function bmi() {
    m = document.getElementById('yM').value;
    kg = document.getElementById('yKg').value;

    Number(kg);
    parseFloat(m);

    alert(kg/Math.pow(m, 2));
}