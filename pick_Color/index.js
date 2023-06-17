const colors = ["red", "green", "blue", "gray", "yellow"];
const btn = document.getElementById("btn")
const color = document.querySelector(".color")

btn.addEventListener("click", function() {
    const randomColor = getRandomColor()
    document.body.style.backgroundColor = colors[randomColor]
    color.textContent = colors[randomColor]
})

function getRandomColor(){
    return Math.floor(Math.random() * colors.length)
}