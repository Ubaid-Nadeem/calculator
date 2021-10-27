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
            val1 = ans
            val2 = ''
            operator = undefined;
        }
        else if (operator == '-') {
            ans = +val1 - +val2
            // console.log(ans)
            document.getElementById('ans').innerText = ans;
            val1 = ans
            val2 = ''
            operator = undefined
        }
        else if (operator == '*') {
            ans = +val1 * +val2
            // console.log(ans)
            document.getElementById('ans').innerText = ans;
            val1 = ans
            val2 = ''
            operator = undefined
        }
        if (operator == '/') {
            ans = +val1 / +val2
            document.getElementById('ans').innerText = ans;
            val1 = ans
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
