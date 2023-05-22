let h3 = document.querySelector("h3");

let item1 = document.querySelector(".item1");
let item2 = document.querySelector(".item2");
let item3 = document.querySelector(".item3");
let item4 = document.querySelector(".item4");
let item5 = document.querySelector(".item5");
let item6 = document.querySelector(".item6");
let item7 = document.querySelector(".item7");
let item8 = document.querySelector(".item8");
let item9 = document.querySelector(".item9");

let back = document.querySelector(".back")

function nour() {
    if (item1.innerHTML == item2.innerHTML && item2.innerHTML == item3.innerHTML && item1.innerHTML != "") {
        h3.innerHTML = "winner";
        document.querySelector(".item1").style.backgroundColor = "yellow";
        document.querySelector(".item2").style.backgroundColor = "yellow";
        document.querySelector(".item3").style.backgroundColor = "yellow";
        setInterval(() => {
            confetti();
            h3.innerHTML += "."
        }, 1000);
        setInterval(() => {
            location.reload()
        }, 4000);

    }
    else if (item4.innerHTML == item5.innerHTML && item5.innerHTML == item6.innerHTML && item4.innerHTML != "") {
        h3.innerHTML = "winner";
        document.querySelector(".item4").style.backgroundColor = "yellow";
        document.querySelector(".item5").style.backgroundColor = "yellow";
        document.querySelector(".item6").style.backgroundColor = "yellow";
        setInterval(() => {
            confetti();
            h3.innerHTML += "."
        }, 1000);
        setInterval(() => {
            location.reload()
        }, 4000);
    }
    else if (item7.innerHTML == item8.innerHTML && item8.innerHTML == item9.innerHTML && item7.innerHTML != "") {
        h3.innerHTML = "winner";
        document.querySelector(".item7").style.backgroundColor = "yellow";
        document.querySelector(".item8").style.backgroundColor = "yellow";
        document.querySelector(".item9").style.backgroundColor = "yellow";
        setInterval(() => {
            confetti();
            h3.innerHTML += "."
        }, 1000);
        setInterval(() => {
            location.reload()
        }, 4000);
    }

    else if (item1.innerHTML == item4.innerHTML && item4.innerHTML == item7.innerHTML && item1.innerHTML != "") {
        h3.innerHTML = "winner";
        document.querySelector(".item1").style.backgroundColor = "yellow";
        document.querySelector(".item4").style.backgroundColor = "yellow";
        document.querySelector(".item7").style.backgroundColor = "yellow";
        setInterval(() => {
            confetti();
            h3.innerHTML += "."
        }, 1000);
        setInterval(() => {
            location.reload()
        }, 4000);
    }

    else if (item2.innerHTML == item5.innerHTML && item5.innerHTML == item8.innerHTML && item2.innerHTML != "") {
        h3.innerHTML = "winner";
        document.querySelector(".item2").style.backgroundColor = "yellow";
        document.querySelector(".item5").style.backgroundColor = "yellow";
        document.querySelector(".item8").style.backgroundColor = "yellow";
        setInterval(() => {
            confetti();
            h3.innerHTML += "."
        }, 1000);
        setInterval(() => {
            location.reload()
        }, 4000);
    }
    else if (item3.innerHTML == item6.innerHTML && item6.innerHTML == item9.innerHTML && item3.innerHTML != "") {
        h3.innerHTML = "winner";
        document.querySelector(".item3").style.backgroundColor = "yellow";
        document.querySelector(".item6").style.backgroundColor = "yellow";
        document.querySelector(".item9").style.backgroundColor = "yellow";
        setInterval(() => {
            confetti();
            h3.innerHTML += "."
        }, 1000);
        setInterval(() => {
            location.reload()
        }, 4000);
    }


    else if (item1.innerHTML == item5.innerHTML && item5.innerHTML == item9.innerHTML && item1.innerHTML != "") {
        h3.innerHTML = "winner";
        document.querySelector(".item1").style.backgroundColor = "yellow";
        document.querySelector(".item5").style.backgroundColor = "yellow";
        document.querySelector(".item9").style.backgroundColor = "yellow";
        setInterval(() => {
            confetti();
            h3.innerHTML += "."
        }, 1000);
        setInterval(() => {
            location.reload()
        }, 4000);
    }

    else if (item3.innerHTML == item5.innerHTML && item5.innerHTML == item7.innerHTML && item3.innerHTML != "") {
        h3.innerHTML = "winner";
        document.querySelector(".item3").style.backgroundColor = "yellow";
        document.querySelector(".item5").style.backgroundColor = "yellow";
        document.querySelector(".item7").style.backgroundColor = "yellow";
        setInterval(() => {
            confetti();
            h3.innerHTML += "."
        }, 1000);
        setInterval(() => {
            location.reload()
        }, 4000);
    }

}

let div = document.querySelectorAll(".box");

let on = "X"

div.forEach(item => {
    item.addEventListener("click", (eo) => {

        if (on === "X" && eo.target.innerHTML == "") {
            eo.target.innerHTML = "X"
            on = "O"
            h3.innerHTML = "O"
            eo.target.style.opacity = "1"
        }
        else if (on === "O" && eo.target.innerHTML == "") {
            eo.target.innerHTML = "0"
            on = "X"
            h3.innerHTML = "X"
            eo.target.style.opacity = "1"
        }



        nour()



    })
})


















