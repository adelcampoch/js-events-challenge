const p = document.getElementById("p1");
p.style.color = "green";






function highlight(text) {
    const inputText = document.getElementById("target");
    let innerHTML = inputText.innerHTML;
    const index = innerHTML.indexOf(text);
    if (index >= 0) {
        innerHTML = innerHTML.substring(0,index) + "<p class='highlight'>" + innerHTML.substring(index,index+text.length) +
            "</p>" + innerHTML.substring(index + text.length);
        inputText.innerHTML = innerHTML;
    }
}

//const str = "Eat a rug and furry furry hairs everywhere oh no human coming lie on counter";
//const cleanStr = str.replace(/furry/, "rainbow");

//const ret = "target".replace('furry','rainbow');
//console.log(ret);

let myStr = 'Eat a rug and furry furry hairs everywhere oh no human coming lie on counter';

console.log(myStr.replace('furry', 'rainbow'));