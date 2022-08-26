function increaseLikes(elementID){
    console.log("Plus1");


    let spanElement = document.querySelector("#" + elementID);
    console.log(spanElement.innerText)

    let currentCount = spanElement.innerText;

    
    currentCount++;


    spanElement.innerText = currentCount;

    spanElement.innerText = currentCount;
}

