const myButton = document.getElementById("btn-say-hello");

myButton.onclick = () => {
    document.getElementById("message").innerHTML = "Hello Everyone!";
    document.getElementById("stuff").classList = ("special");
};

document.getElementById("btn-say-goodbye").onclick = () => {
    document.getElementById("message").innerHTML = "Hello Everyone!";
    document.getElementById("stuff").classList = ("special");
}

//Showing data from an input field
document.getElementById("txt-first-name").onkeyup = () => {
    const textBox = document.getElementById("text-first-name");
    document.getElementById("result").innerHTML = textBox.value;
}
//Showing data from an input field
/*document.getElementById("txt-first-name").onkeyup = () => {
    const textBox = document.getElementById("text-first-name");
    document.getElementById("result").innerHTML = textBox.value;
}*/

document.getElementById("txt-first-name").onkeyup = (event) => {
    document.getElementById("text-first-name").
