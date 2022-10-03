
function Calcular(){

n1 = document.getElementById('n1').value;
n2 = 50
if(n1 < 1){
    alert('Ai não! Me ajuda a te ajudar!')
    document.getElementById('n1').value = 1 
    document.getElementById('n1').focus();
}else{
resultado = n1 * n2;
document.getElementById('resultado').value = resultado; 
}
};