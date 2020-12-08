function bmi() {
    m = document.getElementById('yM').value;
    kg = document.getElementById('yKg').value;

    Number(kg);
    parseFloat(m);
    
    result = kg/Math.pow(m, 2);
    alert(result);

    if (result >= 25) {
        alert("肥満");
    }else if (result >= 18.5) {
        alert("普通");
    }else{
        alert("低体重");
    }
     
}
