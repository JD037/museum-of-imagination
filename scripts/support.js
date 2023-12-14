
/* function that extract the numeric value of every element(item)
and returning the value to donation */

function getNumFromElement(item) {
    let myItem = document.getElementById(item);
    let inputText = myItem.value;
    let myNum = Number(inputText);  //save the

    return (myNum);
}

/* function that receive the input amount of the project donation */

function calculate() {
    let donation = [];

    donation[0] = getNumFromElement("amountProject1");
    donation[1] = getNumFromElement("amountProject2");
    donation[2] = getNumFromElement("amountProject3");
   

    let totalDonation = sumDonation(donation);
    

    let outputMessage = "Total Donations $: " + totalDonation + ".00" + " USD";                    
    let outputElement = document.getElementById("outputParagraph");

    outputElement.textContent = outputMessage;
}

/* Function that calculates the total sum donations */

function sumDonation(array) {
    let total = 0;

    for(let donation of array) {
        total = total + donation;
    }

    return total;
}
