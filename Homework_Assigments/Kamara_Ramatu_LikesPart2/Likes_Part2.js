function increaseLikes(elementID){
    console.log("Plus2", "Plus3", "Plus4");


    let spanElement = document.querySelector("#" + elementID);
    console.log(spanElement.innerText)

    let currentCount = spanElement.innerText;

    
    currentCount++;


    spanElement.innerText = currentCount;

    spanElement.innerText = currentCount;
}

