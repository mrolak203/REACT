

document.getElementById('btn0').addEventListener('click', function()
    {
  document.getElementById('res').insertAdjacentHTML('beforeend', '0');
    });

document.getElementById('btn1').addEventListener('click', function()
    {
  document.getElementById('res').insertAdjacentHTML('beforeend', '1');
    });

document.getElementById('btnMul').addEventListener('click', function()
    {
  document.getElementById('res').insertAdjacentHTML('beforeend', "*");
    });

document.getElementById('btnDiv').addEventListener('click', function()
    {
  document.getElementById('res').insertAdjacentHTML('beforeend', "/");
    });
document.getElementById('btnSum').addEventListener('click', function()
    {
  document.getElementById('res').insertAdjacentHTML('beforeend', "+");
    });
document.getElementById('btnSub').addEventListener('click', function()
    {
  document.getElementById('res').insertAdjacentHTML('beforeend', "-");
    });


document.getElementById('btnClr').addEventListener('click', function()
    {
  document.getElementById('res').innerHTML = " ";
    });


document.getElementById('btnEql').addEventListener('click', function()
    {
  
    var str = document.getElementById('res').innerHTML;
    let first = 0;
    let second = 0;
    let op = '';
    for (let i = 0; i < str.length; i++) {
        if(str[i] == '*' || str[i] == '/' || str[i] == '+' || str[i] == '-'){
            first = parseInt(str.substring(0,i), 2);
            op = str[i];
            second = parseInt(str.substring(i+1,str.length),2);
        }
}   
    let value = 0;
    if(op == '+'){
        value = first+second,10;
    } else if(op == '*'){
        value = first*second,10;
    } else if(op == '-'){
        value = first-second,10;
} else{
    value = first/second,10;
}

    document.getElementById('res').innerHTML = value.toString(2);
    
    });

