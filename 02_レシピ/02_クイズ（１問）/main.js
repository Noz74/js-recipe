const div1 = document.getElementById("div1")

for (let i = 0; i < 1; i++) {
  const newDiv = document.createElement("div")
  for (let j = 0; j < 3; j++) {
    const newBtn = document.createElement("button")
    newBtn.innerHTML = i * 3 + j + 1

    newBtn.onclick = () => {
      console.log(`ボタン${newBtn.innerHTML}が押されました！`)
    }
    newDiv.appendChild(newBtn)
  }
  div1.appendChild(newDiv)
}
