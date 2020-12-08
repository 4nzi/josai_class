function okikae() {
    document.getElementById("ichigo").src="./image/ichigo2.jpg";
}

function okikae2() {
    document.getElementById('ichigo').src="image/ichigo.jpg";
} 

function okikae3() {
   document.getElementById('ichigo2').src="image/ichigo2.jpg"; 
   setTimeout("modoru()",3000);
}

function modoru() {
    document.getElementById('ichigo2').src="image/ichigo.jpg";

}

function txtchange1() {
    document.getElementById('txt1').innerHTML ="ナンバーワン！"
}
