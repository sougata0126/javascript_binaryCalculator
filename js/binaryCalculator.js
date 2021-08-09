const res = document.getElementById("res");
 let a = number = b = '';
 function add(value) {
     if(number) {
         b += value;
     } else {
         a += value;
     }
     renderResult();
 }
 function clearresult() {
     a = number = b = '';
     renderResult();
 }
 function equal() {
     a = parseInt(a, 2);
     b = parseInt(b, 2);
     switch(number) {
         case '+':
             a += b;
             break;
         case '-':
             a -= b;
             break;
         case '*':
             a *= b;
             break;
         case '/':
             if(b)
                 a /= b;
             break;
         default:
             break;
     }
     a = parseInt(a).toString(2);
     number = b = '';
     renderResult();
 }
 function assignOperator(value) {
     number = value;
     renderResult();
 }
 function renderResult() {
     res.innerHTML = a + number + b;
 }