const content = document.getElementsByTagName("p")

// party blower sound effect
var audio = document.createElement("AUDIO")
document.body.appendChild(audio)
audio.src = "https://bigsoundbank.com/UPLOAD/mp3/1555.mp3"

if (content) {
  const randomTextSelection = Math.floor(Math.random() * content.length)

  const selectedElement = content[randomTextSelection]

  // adds sound effect to click wally
  let trying = selectedElement.innerHTML
  const newStringArray = trying.split(" ")
  const randomWordSelection =
    newStringArray[Math.floor(Math.random() * newStringArray.length)]
  trying = trying.replace(
    randomWordSelection,
    `<span id="wally">${randomWordSelection}</span>`
  )

  selectedElement.innerHTML = trying
  const newWally = document.getElementById("wally")

  newWally.addEventListener("mouseover", function () {
    this.style.color = "red"
  })

  newWally.addEventListener("mouseout", function () {
    this.style.color = "inherit"
  })

  newWally.addEventListener(
    "mousedown",
    function () {
      audio.play()
    },
    { once: true }
  )

  console.log("Wally is hiding in the word '", randomWordSelection, "'")
}
