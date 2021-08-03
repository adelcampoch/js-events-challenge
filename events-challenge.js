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



//find and replace
const findAndReplace = (event) => {
    event.preventDefault()
    const findAndReplaceElement = document.getElementById('find-replace-text')
    const find = document.getElementById('text-find').value
    const replace = document.getElementById('text-replace').value
    const expression = new RegExp(find, 'gi')
    console.log(expression)
    findAndReplaceElement.innerText = findAndReplaceElement.innerText.replaceAll(expression, replace)
}


//Map Scroll to Delete Words

const scrolling= (event) => {
  console.log(event.target.innerText)
    let arrayOfText = event.target.innerText.split(' ')
    console.log(event)
 console.log(arrayOfText)
    arrayOfText.pop()
 console.log(arrayOfText)
    event.target.innerText = arrayOfText.join (' ')
}