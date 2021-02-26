var index = 0
var pricepaid = 0
var balance = 0
const Itemcode = ['011', '012', '013', '014', '021', '022', '023', '024', '031', '032', '033', '034'];
const Itemname = ['WATER', 'COKE', 'FANTA', 'SPRITE', 'GRANOLA', 'CHIPS', 'PRINGLES', 'DORITOS', 'RED BULL', 'COFFEE', 'TEA', 'MILK'];
const Unitprice = [3, 4, 4, 4, 2, 2, 7, 6, 4, 3, 3, 1,];
const Img = ["img/water_out.png", "img/coke_out.png", "img/fanta_out.png", "img/sprite_out.png", "img/granola_out.png", "img/chips_out.png", "img/pringles_out.png", "img/doritos_out.png", "img/redbull_out.png", "img/coffee_out.png", "img/tea_out.png", "img/milk_out.png",]
const Img2 = ["img/water_receipt.png", "img/coke_receipt.png", "img/fanta_receipt.png", "img/sprite_receipt.png", "img/granola_receipt.png", "img/chips_receipt.png", "img/pringles_receipt.png", "img/doritos_receipt.png", "img/redbull_receipt.png", "img/coffee_receipt.png", "img/tea_receipt.png", "img/milk_receipt.png",]

function clear() {
    document.getElementById("message").innerHTML = "";
    document.getElementById("itemname").innerHTML = "";
    document.getElementById("quantity").innerHTML = "";
    document.getElementById("totalamount").innerHTML = "";
    document.getElementById("totalscreen").innerHTML = "";
}

function item(x) {
    clear()
    document.getElementById("cast").style.display = "block";
    document.getElementById("message").style.display = "none";
    document.getElementById('cast').innerHTML = '[' + x + '] selected <p/> Specify <p/> [QUANTITY]'
    index = indexwithname(x);
    document.getElementById("itemname").innerHTML = Itemname[index];
    document.getElementById('takeout').innerHTML = ""
    balance = 0
    pricepaid = 0
}

function intoscreen(elem) {
    document.getElementById("message").style.display = "block";
    document.getElementById("cast").style.display = "none";
    document.getElementById('message').innerHTML += elem.innerHTML
    document.getElementById('totalscreen').innerHTML += elem.innerHTML
}

function outofscreen() {
    document.getElementById('message').innerHTML = document.getElementById('message').innerHTML.slice(0, -1)
    document.getElementById('totalscreen').innerHTML = document.getElementById('totalscreen').innerHTML.slice(0, -1)
}

function indexwithcode(code) {
    for (let i = 0; i < Itemcode.length; i++) {
        if (code == Itemcode[i]) {
            return i
        }
    }
}

function indexwithname(name) {
    for (let i = 0; index < Itemname.length; i++) {
        if (name == Itemname[i]) {
            return i
        }
    }
}

function takeout() {
    var quantity = document.getElementById("quantity").innerHTML
    var outbox = document.getElementById('takeout')
    for (counter = 1; counter <= quantity; counter++) {
        var img = document.createElement('img');
        img.src = Img[index]
        outbox.appendChild(img)
    }
}

function functselector() {
    var message = document.getElementById("message")
    var cast = document.getElementById("cast")
    var nameslot = document.getElementById("itemname")
    var quantity = document.getElementById("quantity")
    var totalamount = document.getElementById("totalamount")
    var totalscreen = document.getElementById('totalscreen')

    if (nameslot.innerHTML == 0 && message.innerHTML == 0 && quantity.innerHTML == 0 && totalamount.innerHTML == 0) {
        alert('Kindly Choose an item first')
    }

    else if (nameslot.innerHTML == 0) {
        index = indexwithcode(parseFloat(message.innerHTML));
        nameslot.innerHTML = Itemname[index];
        message.innerHTML = "";
        message.style.display = "none";
        message.innerHTML = "";
        cast.style.display = "block";
        cast.innerHTML = '[' + Itemname[index] + '] selected <p/> Specify <p/> [QUANTITY]'
    }

    else if (nameslot.innerHTML != 0 && quantity.innerHTML == 0) {
        quantity.innerHTML = parseInt(message.innerHTML);
        cast.style.display = "block";
        cast.innerHTML = '[' + Itemname[index] + '] x ' + quantity.innerHTML + '= GH₵' + message.innerHTML * Unitprice[index] + ' <br>Enter <br> [CASH] to Pay '
        message.style.display = "none";
        totalamount.innerHTML = message.innerHTML * Unitprice[index]
        totalscreen.innerHTML = ""
        totalscreen.style.display = "block";
    }

    else if (nameslot.innerHTML != 0 && quantity.innerHTML != 0 && totalamount.innerHTML != 0) {
        totalscreen.style.display = "none";
        message.style.display = "none";
        cast.style.display = "block";
        if (parseInt(totalscreen.innerHTML) == 0) {
            cast.innerHTML = 'No Payment made 😐😑'
        }
        if (nameslot.innerHTML != 0 && quantity.innerHTML != 0 && totalamount.innerHTML != 0 && pricepaid != 0) {
            clear()
            cast.style.display = "block";
            cast.innerHTML = '<marquee behavior="scroll" scrollamount="5" direction="left"> Welcome to the FS Vendor </marquee> Touch Item <br> or <br> Enter[Item] Code'
            document.getElementById('takeout').innerHTML = ""
            balance = 0
            pricepaid = 0
        }
        else if (parseInt(totalamount.innerHTML) < parseInt(totalscreen.innerHTML) && parseInt(totalscreen.innerHTML) > 0) {
            cast.innerHTML = 'GH₵' + parseInt(totalscreen.innerHTML - totalamount.innerHTML) + ' has been returned below as your change <br> Thank you!🎉🙏🏽 <br> Come back soon! '
            balance = parseInt(totalscreen.innerHTML - totalamount.innerHTML)
            takeout()
        }
        else if (parseInt(totalamount.innerHTML) > parseInt(totalscreen.innerHTML)) {
            cast.innerHTML = 'You did not pay enough 😶⚠️<P/>  GH₵' + parseInt(totalscreen.innerHTML) + ' has been returned'
        }
        else if (parseInt(totalamount.innerHTML) = parseInt(totalscreen.innerHTML)) {
            cast.innerHTML = 'Thank you <br> For your purchase! <p/> 🎉🙏🏽'
            takeout()
        }
        pricepaid = totalscreen.innerHTML
    }
}

function clearscreen() {
    clear()
    document.getElementById("message").style.display = "none";
    balance = 0
    pricepaid = 0
    document.getElementById('takeout').innerHTML = ""
    document.getElementById("cast").style.display = "block";
    document.getElementById("cast").innerHTML = '<marquee behavior="scroll" scrollamount="5" direction="left"> Welcome to the FS Vendor </marquee> Touch Item <br> or <br> Enter[Item] Code'
}

function printreceipt() {
    document.getElementById('receipt').style.display = "block"
    document.getElementById('itm').innerHTML = Itemname[index]
    document.getElementById('cod').innerHTML = Itemcode[index]
    document.getElementById('qty').innerHTML = document.getElementById("quantity").innerHTML
    document.getElementById('unitpr').innerHTML = Unitprice[index]
    document.getElementById('totalpr').innerHTML = document.getElementById("totalamount").innerHTML
    document.getElementById('paid').innerHTML = pricepaid
    document.getElementById('bal').innerHTML = balance
    var imgslot = document.getElementById('imgcontainer')
    var img2 = document.createElement('img');
    img2.src = Img2[index]
    imgslot.appendChild(img2)
}