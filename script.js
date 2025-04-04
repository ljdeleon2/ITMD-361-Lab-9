function init() {
    const input = document.getElementById("entryinput");
    const button = document.getElementById("entrybutton");
    const output = document.getElementById("textoutput");

    button.addEventListener("click", function () {
        const inputValue = input.value;
        const name = "Leo De Leon";

        // Show alert
        alert(name + ": " + inputValue);

        // Update h2
        output.textContent = inputValue;
    });
}

window.addEventListener("load", init);