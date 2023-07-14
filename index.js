function appendValue(value){
    document.getElementById('result').value+= value;
}
function clearValue(){
    document.getElementById('result').value= '';
}
function calculate(){
    const result= document.getElementById('result').value;
    const calculation = eval(result);

    document.getElementById('result').value = calculation;
}
function squareRoot(){
    const result= document.getElementById('result').value;
    const calculation = Math.sqrt(eval(result));

    document.getElementById('result').value = calculation;
}
