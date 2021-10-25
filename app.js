var val1 = '';
var val2 = '';
var operator = undefined
var ans = 0;

function getvalue(a) {
    if (operator != undefined) {
        if(a != '+' && a != '-' && a != '*' && a != '/' && a != '=')   
        val2 = val2 + a
            // console.log(val2); 
            document.getElementById('ans').innerText=val2
      
    }

    else  if(a != '+' && a != '-' && a != '*' && a != '/' && a != '=') {
        val1 = val1 + a
        // console.log(val1)
        document.getElementById('ans').innerText=val1

    }



    if (a == '+') {
        operator = "+"
        // console.log(operator)
        document.getElementById('ans').innerText=operator

    }
    else if (a == '-') {
        operator = "-"
        document.getElementById('ans').innerText=operator
        // console.log(operator)

    }
    else if (a == '*') {
        operator = "*"
        document.getElementById('ans').innerText=operator
        // console.log(operator)

    }
    else if (a == '/') {
        operator = "/"
        // console.log(operator)
        document.getElementById('ans').innerText=operator

    }

    if (a == '=') {
        if (operator == '+') {
            ans = +val1 + +val2
            // console.log(ans)
            document.getElementById('ans').innerText=ans
            val1 = ''
            val2 = ''
            operator = undefined
        }
        else if (operator == '-') {
            ans = +val1 - +val2
            // console.log(ans)
            document.getElementById('ans').innerText=ans
        }
        else if (operator == '*') {
            ans = +val1 * +val2
            // console.log(ans)
            document.getElementById('ans').innerText=ans
        }
        if (operator == '/') {
            ans = +val1 / +val2
            document.getElementById('ans').innerText=ans
            // console.log(ans)
        }
    }
}
function erase(){
    document.getElementById('ans').innerHTML=0;
}
