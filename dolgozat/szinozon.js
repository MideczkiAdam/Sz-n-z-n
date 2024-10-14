let body = document.body

function random(){
    return Math.floor(Math.random()*255)
}

let red = random()
let green = random()
let blue = random()

body.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`

console.log(red , green, blue)

let target = document.getElementById("szintipp")
let sliders = document.querySelectorAll(".sliders")


sliders.forEach(slider => {
    slider.addEventListener("input", function(){
        let R = document.getElementById("R").value
        let G = document.getElementById("G").value
        let B = document.getElementById("B").value

        let rednum = document.getElementById("rednum")
        let greennum = document.getElementById("greennum")
        let bluenum = document.getElementById("bluenum")

        let container = document.getElementById("container")

        rednum.innerText = R
        greennum.innerText = G
        bluenum.innerText = B

        btn.style.borderColor = `rgb(${R}, ${G}, ${B})`
        container.style.borderColor = `rgb(${R}, ${G}, ${B})`

        target.style.backgroundColor = `rgb(${R}, ${G}, ${B})`
    })
})

let btn = document.getElementById("tipp")
btn.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`


btn.addEventListener("click", function(){
    if (target.style.backgroundColor == body.style.backgroundColor){
        alert("Eltaláltad a színt!")
    }
    else{
        alert("Nem talált!")
    }
})