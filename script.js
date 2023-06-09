function displayExponentValue(e){
    e.preventDefault()
    const baseInput = Number(e.target.base.value)
    const expInput  = Number(e.target.exp.value)
    const superScript = document.createElement("sup") // Create a superscript tag
    superScript.innerText = expInput
    const display = document.getElementById("display")
    display.append(document.createTextNode(baseInput))
    display.append(superScript)
    display.append(document.createTextNode(" = " + String(Math.pow(baseInput, expInput))))
}

document.getElementById("exponentFormID").addEventListener("submit", displayExponentValue)