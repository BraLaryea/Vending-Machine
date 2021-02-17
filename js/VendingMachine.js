
function water() {
    document.getElementById('message').innerHTML = '[WATER] selected <p/> Specify <p/> [QUANTITY]'
    console.log(window.value = 011)
}

function coke() {
    document.getElementById('message').innerHTML = '[COKE] selected <p/> Specify <p/> [QUANTITY]'
    console.log(window.value = 012)
}

function fanta() {
    document.getElementById('message').innerHTML = '[FANTA] selected <p/> Specify <p/> [QUANTITY]'
    console.log(window.value = 013)
}

function sprite() {
    document.getElementById('message').innerHTML = '[SPRITE] selected <p/> Specify <p/> [QUANTITY]'
    console.log(window.value = 014)
}

function granola() {
    document.getElementById('message').innerHTML = '[GRANOLA] selected <p/> Specify <p/> [QUANTITY]'
    console.log(window.value = 021)
}

function chips() {
    document.getElementById('message').innerHTML = '[CHIPS] selected <p/> Specify <p/> [QUANTITY]'
    console.log(window.value = 022)
}

function pringles() {
    document.getElementById('message').innerHTML = '[PRINGLES] selected <p/> Specify <p/> [QUANTITY]'
    console.log(window.value = 023)
}

function doritos() {
    document.getElementById('message').innerHTML = '[DORITOS] selected <p/> Specify <p/> [QUANTITY]'
    console.log(window.value = 024)
}

function bull() {
    document.getElementById('message').innerHTML = '[RED BULL] selected <p/> Specify <p/> [QUANTITY]'
    console.log(window.value = 031)
}

function coffee() {
    document.getElementById('message').innerHTML = '[COFFEE] selected <p/> Specify <p/> [QUANTITY]'
    console.log(window.value = 032)
}

function tea() {
    document.getElementById('message').innerHTML = '[TEA] selected <p/> Specify <p/> [QUANTITY]'
    console.log(window.value = 033)
}

function milk() {
    document.getElementById('message').innerHTML = '[MILK] selected <p/> Specify <p/> [QUANTITY]'
    console.log(window.value = 034)
}


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
        document.getElementById('message').innerHTML = '[WATER] selected <p/> Specify <p/> [QUANTITY]'
        console.log(window.value = 011)
    }
    else if (msg == '012') {
        document.getElementById('message').innerHTML = '[COKE] selected <p/> Specify <p/> [QUANTITY]'
        console.log(window.value = 012)
    }
    else if (msg == '013') {
        document.getElementById('message').innerHTML = '[FANTA] selected <p/> Specify <p/> [QUANTITY]'
        console.log(window.value = 013)
    }
    else if (msg == '014') {
        document.getElementById('message').innerHTML = '[SPRITE] selected <p/> Specify <p/> [QUANTITY]'
        console.log(window.value = 014)
    }
    else if (msg == '021') {
        document.getElementById('message').innerHTML = '[GRANOLA] selected <p/> Specify <p/> [QUANTITY]'
        console.log(window.value = 021)
    }
    else if (msg == '022') {
        document.getElementById('message').innerHTML = '[CHIPS] selected <p/> Specify <p/> [QUANTITY]'
        console.log(window.value = 022)
    }
    else if (msg == '023') {
        document.getElementById('message').innerHTML = '[PRINGLES] selected <p/> Specify <p/> [QUANTITY]'
        console.log(window.value = 023)
    }
    else if (msg == '024') {
        document.getElementById('message').innerHTML = '[DORITOS] selected <p/> Specify <p/> [QUANTITY]'
        console.log(window.value = 024)
    }
    else if (msg == '031') {
        document.getElementById('message').innerHTML = '[RED BULL] selected <p/> Specify <p/> [QUANTITY]'
        console.log(window.value = 031)
    }
    else if (msg == '032') {
        document.getElementById('message').innerHTML = '[COFFEE] selected <p/> Specify <p/> [QUANTITY]'
        console.log(window.value = 032)
    }
    else if (msg == '033') {
        document.getElementById('message').innerHTML = '[TEA] selected <p/> Specify <p/> [QUANTITY]'
        console.log(window.value = 033)
    }
    else if (msg == '034') {
        document.getElementById('message').innerHTML = '[MILK] selected <p/> Specify <p/> [QUANTITY]'
        console.log(window.value = 034)
    }
    else {
        alert("INVALID Item Code")
        document.getElementById('message').innerHTML = '!!  Invalid Item Code!! <p/> Please refer to ITEM CODE bar above'
    }
}

function totalprice() {
    var msg = document.getElementById('message').innerHTML
    console.log(window.qty = Number(msg))
    if (window.value == 011) {
        document.getElementById('message').innerHTML = msg + ' [WATER] bottle(s) = ₵' + 3 * Number(msg) + ' <br>Enter <br> [CASH] to Pay '
        console.log(window.total = 3 * Number(msg))
    }
    else if (window.value == 012) {
        document.getElementById('message').innerHTML = msg + ' [COKE] can(s) = ₵' + 4 * Number(msg) + ' <br>Enter <br> [CASH] to Pay '
        console.log(window.total = 4 * Number(msg))
    }
    else if (window.value == 013) {
        document.getElementById('message').innerHTML = msg + ' [FANTA] can(s) = ₵' + 4 * Number(msg) + ' <br>Enter <br> [CASH] to Pay '
        console.log(window.total = 4 * Number(msg))
    }
    else if (window.value == 014) {
        document.getElementById('message').innerHTML = msg + ' [SPRITE] can(s) = ₵' + 4 * Number(msg) + ' <br>Enter <br> [CASH] to Pay '
        console.log(window.total = 4 * Number(msg))
    }
    else if (window.value == 021) {
        document.getElementById('message').innerHTML = msg + ' [GRANOLA] bar(s) = ₵' + 2 * Number(msg) + ' <br>Enter <br> [CASH] to Pay '
        console.log(window.total = 2 * Number(msg))
    }
    else if (window.value == 022) {
        document.getElementById('message').innerHTML = msg + ' [CHIPS] bag(s) = ₵' + 2 * Number(msg) + ' <br>Enter <br> [CASH] to Pay '
        console.log(window.total = 2 * Number(msg))
    }
    else if (window.value == 023) {
        document.getElementById('message').innerHTML = msg + ' [PRINGLES] can(s) = ₵' + 7 * Number(msg) + ' <br>Enter <br> [CASH] to Pay '
        console.log(window.total = 7 * Number(msg))
    }
    else if (window.value == 024) {
        document.getElementById('message').innerHTML = msg + ' [DORITOS] bag(s) = ₵' + 6 * Number(msg) + ' <br>Enter <br> [CASH] to Pay '
        console.log(window.total = 6 * Number(msg))
    }
    else if (window.value == 031) {
        document.getElementById('message').innerHTML = msg + '[RED BULL] can(s) = ₵' + 4 * Number(msg) + ' <br>Enter <br> [CASH] to Pay '
        console.log(window.total = 4 * Number(msg))
    }
    else if (window.value == 032) {
        document.getElementById('message').innerHTML = msg + ' [COFFEE] cup(s) = ₵' + 3 * Number(msg) + ' <br>Enter <br> [CASH] to Pay '
        console.log(window.total = 3 * Number(msg))
    }
    else if (window.value == 033) {
        document.getElementById('message').innerHTML = msg + '[TEA] can(s) = ₵' + 3 * Number(msg) + ' <br>Enter <br> [CASH] to Pay '
        console.log(window.total = 3 * Number(msg))
    }
    else if (window.value == 034) {
        document.getElementById('message').innerHTML = msg + ' [MILK] bottle(s) = ₵' + 1 * Number(msg) + ' <br>Enter <br> [CASH] to Pay '
        console.log(window.total = 1 * Number(msg))
    }
}

function takeout() {

    if (window.value == 011) {
        for (counter = 1; counter <= window.qty; counter++) {
            var outbox = document.getElementById('takeout');
            var img = document.createElement('img');
            img.src = "img/water_out.png";
            outbox.appendChild(img)
        }
    }
    else if (window.value == 012) {
        for (counter = 1; counter <= window.qty; counter++) {
            var outbox = document.getElementById('takeout');
            var img = document.createElement('img');
            img.src = "img/coke_out.png";
            outbox.appendChild(img)
        }
    }
    else if (window.value == 013) {
        for (counter = 1; counter <= window.qty; counter++) {
            var outbox = document.getElementById('takeout');
            var img = document.createElement('img');
            img.src = "img/fanta_out.png";
            outbox.appendChild(img)
        }
    }
    else if (window.value == 014) {
        for (counter = 1; counter <= window.qty; counter++) {
            var outbox = document.getElementById('takeout');
            var img = document.createElement('img');
            img.src = "img/sprite_out.png";
            outbox.appendChild(img)
        }
    }
    else if (window.value == 021) {
        for (counter = 1; counter <= window.qty; counter++) {
            var outbox = document.getElementById('takeout');
            var img = document.createElement('img');
            img.src = "img/granola_out.png";
            outbox.appendChild(img)
        }
    }
    else if (window.value == 022) {
        for (counter = 1; counter <= window.qty; counter++) {
            var outbox = document.getElementById('takeout');
            var img = document.createElement('img');
            img.src = "img/chips_out.png";
            outbox.appendChild(img)
        }
    }
    else if (window.value == 023) {
        for (counter = 1; counter <= window.qty; counter++) {
            var outbox = document.getElementById('takeout');
            var img = document.createElement('img');
            img.src = "img/pringles_out.png";
            outbox.appendChild(img)
        }
    }
    else if (window.value == 024) {
        for (counter = 1; counter <= window.qty; counter++) {
            var outbox = document.getElementById('takeout');
            var img = document.createElement('img');
            img.src = "img/doritos_out.png";
            outbox.appendChild(img)
        }
    }
    else if (window.value == 031) {
        for (counter = 1; counter <= window.qty; counter++) {
            var outbox = document.getElementById('takeout');
            var img = document.createElement('img');
            img.src = "img/redbull_out.png";
            outbox.appendChild(img)
        }
    }
    else if (window.value == 032) {
        for (counter = 1; counter <= window.qty; counter++) {
            var outbox = document.getElementById('takeout');
            var img = document.createElement('img');
            img.src = "img/coffee_out.png";
            outbox.appendChild(img)
        }
    }
    else if (window.value == 033) {
        for (counter = 1; counter <= window.qty; counter++) {
            var outbox = document.getElementById('takeout');
            var img = document.createElement('img');
            img.src = "img/tea_out.png";
            outbox.appendChild(img)
        }
    }
    else if (window.value == 034) {
        for (counter = 1; counter <= window.qty; counter++) {
            var outbox = document.getElementById('takeout');
            var img = document.createElement('img');
            img.src = "img/milk_out.png";
            outbox.appendChild(img)
        }
    }
}

function changecalc() {
    var msg = document.getElementById('message').innerHTML

    if (Number(msg) == 0) {
        document.getElementById('message').innerHTML = 'No Payment made 😐😑'
    }
    else if (window.total < Number(msg) && Number(msg) > 0) {
        document.getElementById('message').innerHTML = '₵' + String(Number(msg) - window.total) + ' has been returned below as your change <br> Thank you!🎉🙏🏽 <br> Come back soon! '
        takeout()
    }
    else if (window.total > Number(msg)) {
        document.getElementById('message').innerHTML = 'You did not pay enough 😶⚠️<P/>  ₵' + msg + ' has been returned'
    }
    else if (window.total = Number(msg)) {
        document.getElementById('message').innerHTML = 'Thank you <br> For your purchase! <p/> 🎉🙏🏽'
        takeout()
    }
}

function item() {
    clearscreen()
    console.log(window.name = 1)
}

function quantity() {
    clearscreen()
    console.log(window.name = 2)
}

function pay() {
    clearscreen()
    console.log(window.name = 3)
}

function functselector() {
    if (window.name == 1) {
        confirmitem()
    }
    else if (window.name == 2) {
        totalprice()
    }
    else if (window.name == 3) {
        changecalc()
    }
}
