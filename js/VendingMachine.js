
function intoscreen(elem) {
    document.getElementById('message').innerHTML = document.getElementById('message').innerHTML + elem.innerHTML
}

function outofscreen() {
    document.getElementById('message').innerHTML = document.getElementById('message').innerHTML.slice(0, -1)
}

function clearscreen() {
    document.getElementById('message').innerHTML = ""
}

function confirmitem() {
    var msg = document.getElementById('message').innerHTML
    if (msg == '011') {
        document.getElementById('message').innerHTML = '[WATER] selected <p/> [Clear] and Specify <p/> [QUANTITY]'
        console.log(window.value = 011)
    }
    else if (msg == '012') {
        document.getElementById('message').innerHTML = '[COKE] selected <p/> [Clear] and Specify <p/> [QUANTITY]'
        console.log(window.value = 012)
    }
    else if (msg == '013') {
        document.getElementById('message').innerHTML = '[FANTA] selected <p/> [Clear] and Specify <p/> [QUANTITY]'
        console.log(window.value = 013)
    }
    else if (msg == '014') {
        document.getElementById('message').innerHTML = '[SPRITE] selected <p/> [Clear] and Specify <p/> [QUANTITY]'
        console.log(window.value = 014)
    }
    else if (msg == '021') {
        document.getElementById('message').innerHTML = '[GRANOLA] selected <p/> [Clear] and Specify <p/> [QUANTITY]'
        console.log(window.value = 021)
    }
    else if (msg == '022') {
        document.getElementById('message').innerHTML = '[CHIPS] selected <p/> [Clear] and Specify <p/> [QUANTITY]'
        console.log(window.value = 022)
    }
    else if (msg == '023') {
        document.getElementById('message').innerHTML = '[PRINGLES] selected <p/> [Clear] and Specify <p/> [QUANTITY]'
        console.log(window.value = 023)
    }
    else if (msg == '024') {
        document.getElementById('message').innerHTML = '[DORITOS] selected <p/> [Clear] and Specify <p/> [QUANTITY]'
        console.log(window.value = 024)
    }
    else if (msg == '031') {
        document.getElementById('message').innerHTML = '[RED BULL] selected <p/> [Clear] and Specify <p/> [QUANTITY]'
        console.log(window.value = 031)
    }
    else if (msg == '032') {
        document.getElementById('message').innerHTML = '[COFFEE] selected <p/> [Clear] and Specify <p/> [QUANTITY]'
        console.log(window.value = 032)
    }
    else if (msg == '033') {
        document.getElementById('message').innerHTML = '[TEA] selected <p/> [Clear] and Specify <p/> [QUANTITY]'
        console.log(window.value = 033)
    }
    else if (msg == '034') {
        document.getElementById('message').innerHTML = '[MILK] selected <p/> [Clear] and Specify <p/> [QUANTITY]'
        console.log(window.value = 034)
    }
    else {
        alert("INVALID Item Code")
        document.getElementById('message').innerHTML = '!!  Invalid Item Code!! <p/> Please refer to ITEM CODE bar above'
    }
}

function totalprice() {
    var msg = document.getElementById('message').innerHTML

    if (window.value == 011) {
        document.getElementById('message').innerHTML = msg + ' [WATER] bottle(s) = ₵' + 3 * Number(msg) + ' <br>[Clear] and Enter <br> Cash to [PAY] '
        console.log(window.value = 3 * Number(msg))
    }
    else if (window.value == 012) {
        document.getElementById('message').innerHTML = msg + ' [COKE] can(s) = ₵' + 4 * Number(msg) + ' <br>[Clear] and Enter <br> Cash to [PAY] '
        console.log(window.value = 4 * Number(msg))
    }
    else if (window.value == 013) {
        document.getElementById('message').innerHTML = msg + ' [FANTA] can(s) = ₵' + 4 * Number(msg) + ' <br>[Clear] and Enter <br> Cash to [PAY] '
        console.log(window.value = 4 * Number(msg))
    }
    else if (window.value == 014) {
        document.getElementById('message').innerHTML = msg + ' [SPRITE] can(s) = ₵' + 4 * Number(msg) + ' <br>[Clear] and Enter <br> Cash to [PAY] '
        console.log(window.value = 4 * Number(msg))
    }
    else if (window.value == 021) {
        document.getElementById('message').innerHTML = msg + ' [GRANOLA] bar(s) = ₵' + 2 * Number(msg) + ' <br>[Clear] and Enter <br> Cash to [PAY] '
        console.log(window.value = 2 * Number(msg))
    }
    else if (window.value == 022) {
        document.getElementById('message').innerHTML = msg + ' [CHIPS] bag(s) = ₵' + 2 * Number(msg) + ' <br>[Clear] and Enter <br> Cash to [PAY] '
        console.log(window.value = 2 * Number(msg))
    }
    else if (window.value == 023) {
        document.getElementById('message').innerHTML = msg + ' [PRINGLES] can(s) = ₵' + 7 * Number(msg) + ' <br>[Clear] and Enter <br> Cash to [PAY] '
        console.log(window.value = 7 * Number(msg))
    }
    else if (window.value == 024) {
        document.getElementById('message').innerHTML = msg + ' [DORITOS] bag(s) = ₵' + 6 * Number(msg) + ' <br>[Clear] and Enter <br> Cash to [PAY] '
        console.log(window.value = 6 * Number(msg))
    }
    else if (window.value == 031) {
        document.getElementById('message').innerHTML = msg + '[RED BULL] can(s) = ₵' + 4 * Number(msg) + ' <br>[Clear] and Enter <br> Cash to [PAY] '
        console.log(window.value = 4 * Number(msg))
    }
    else if (window.value == 032) {
        document.getElementById('message').innerHTML = msg + ' [COFFEE] cup(s) = ₵' + 3 * Number(msg) + ' <br>[Clear] and Enter <br> Cash to [PAY] '
        console.log(window.value = 3 * Number(msg))
    }
    else if (window.value == 033) {
        document.getElementById('message').innerHTML = msg + '[TEA] can(s) = ₵' + 3 * Number(msg) + ' <br>[Clear] and Enter <br> Cash to [PAY] '
        console.log(window.value = 3 * Number(msg))
    }
    else if (window.value == 034) {
        document.getElementById('message').innerHTML = msg + ' [MILK] bottle(s) = ₵' + 1 * Number(msg) + ' br>[Clear] and Enter <br> Cash to [PAY] '
        console.log(window.value = 1 * Number(msg))
    }
}

function changecalc() {
    var msg = document.getElementById('message').innerHTML

    if (Number(msg) == 0) {
        document.getElementById('message').innerHTML = 'No Payment made 😐😑'
    }
    else if (window.value < Number(msg) && Number(msg) > 0) {
        document.getElementById('message').innerHTML = '₵' + String(Number(msg) - window.value) + ' has been returned below as your change <br> Thank you!🎉🙏🏽 <br> Come back soon! '
    }
    else if (window.value > Number(msg)) {
        document.getElementById('message').innerHTML = 'You did not pay enough 😶⚠️<P/>  ₵' + msg + ' has been returned'
    }
    else if (window.value = Number(msg)) {
        document.getElementById('message').innerHTML = 'Thank you <br> For your purchase! <p/> 🎉🙏🏽'
    }

}



