

// calculator 1




var val1 = '';
var val2 = '';
var operator = undefined
var ans = 0;

function getvalue(a) {
    if (operator != undefined) {
        if (a != '+' && a != '-' && a != '*' && a != '/' && a != '=')
            val2 = val2 + a
        document.getElementById('ans').innerText =  val1 + operator + val2

    }

    else if (a != '+' && a != '-' && a != '*' && a != '/' && a != '=') {
        val1 = val1 + a 
        document.getElementById('ans').innerText = val1

    }



    if (a == '+') {
        operator = "+"
        // console.log(operator)
        document.getElementById('ans').innerText = val1 + operator 

    }
    else if (a == '-') {
        operator = "-"
        document.getElementById('ans').innerText = val1 + operator 
        // console.log(operator)

    }
    else if (a == '*') {
        operator = "*"
        document.getElementById('ans').innerText = val1 + operator 
        // console.log(operator)

    }
    else if (a == '/') {
        operator = "/"
        // console.log(operator)
        document.getElementById('ans').innerText = val1 + operator 

    }

    if (a == '=') {

        if (operator == '+') {
            ans = +val1 + +val2
            // console.log(ans)
            document.getElementById('ans').innerText = ans
            val1 = String(ans)
            val2 = ''
            operator = undefined;
        }
        else if (operator == '-') {
            ans = +val1 - +val2
            // console.log(ans)
            document.getElementById('ans').innerText = ans;
            val1 = String(ans)
            val2 = ''
            operator = undefined
        }
        else if (operator == '*') {
            ans = +val1 * +val2
            // console.log(ans)
            document.getElementById('ans').innerText = ans;
            val1 = String(ans)
            val2 = ''
            operator = undefined
        }
        if (operator == '/') {
            ans = +val1 / +val2
            document.getElementById('ans').innerText = ans;
            val1 = String(ans)
            val2 = ''
            operator = undefined
            // console.log(ans)
        }

    }
}
function erase() {
    document.getElementById('ans').innerHTML = 0;
    val1 = ''
    val2 = ''
    operator = undefined
}




// calculator 2

// var num1 = '';
// function getvalue(a) {


//     if (a != '=') {
//         num1 = num1 + a
//         document.getElementById('ans').innerHTML = num1
//         console.log(num1)
//     }
//     if(a == '='){
//       Plus = num1.split('+');
// minus = num1.split('-');
// multi = num1.split('*');
// divide = num1.split('/')

// for(let i=0; i<divide[0].length; i++){
// console.log(divide[0][i])
// }

// console.log(Plus);
// console.log(minus);        
// console.log(multi);        
// console.log(divide[0]);        

//     }
// }

































// var n = '12/2/3*2+5-2+6-15*5+100';
// var n = '456+54-5/54+4/5+4445*12+78-6-9-2+56+12';
// var n = '456+54-5/54+4/5+45*12+78-6-9-2+56+1210/10';


// var n = '456+54+45*12+78-6-9-2+56+1/10/2';
// console.log(n)
// ;

// function splitPlus(val) {
//     var plusArray = val.split('+');
//     let m = []
//     for (let i = 0; i < plusArray.length; i++) {
//         m.push(splitMinus(plusArray[i]))
//     }
//     console.log(m)
//     let n = Number(m[0]);
//     if (m.length > 1) {
//         for (let i = 1; i < m.length; i++) {
//             n += Number(m[i])
//         }
//     }
//     console.log(n)
//     return n;
// }

// function splitMinus(val) {
//     let minusArray = val.split('-');
//     let m = []
//     for (let i = 0; i < minusArray.length; i++) {
//         m.push(splitMultiply(minusArray[i]))
//     }
//     let n = m[0];
//     if (m.length > 1) {
//         for (let i = 1; i < m.length; i++) {
//             n -= m[i]
//         }
//     }
//     return n;
// }
// // console.log(n)

// function splitMultiply(val) {
//     let multiplyArray = val.split('*');
//     let m = [];
//     for (let i = 0; i < multiplyArray.length; i++) {
//         m.push(splitDivide(multiplyArray[i]))
//     }
//     let n = m[0];
//     if (m.length > 1) {
//         for (let i = 1; i < m.length; i++) {
//             n *= m[i]
//         }
//     }
//     return n;
// }

// function splitDivide(val) {
//     let divideArray = val.split('/');
//     let n = divideArray[0];
//     if (divideArray.length > 1) {
//         for (let i = 1; i < divideArray.length; i++) {
//             n /= divideArray[i]
//         }
//     }
//     return n;
// }

// console.log('Answer ==== ', splitPlus(n), eval(n));









