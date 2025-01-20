const readline = require('readline');

// Create an interface for reading input
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Fixed exchange rate (INR to USD)
const exchangeRate = 0.012; // 1 INR = 0.012 USD (example, can be updated)

function convertCurrency(amountInINR) {
    return amountInINR * exchangeRate;
}

function promptForInput() {
    rl.question("Enter amount in INR (or type 'q' to quit): ", (input) => {
        if (input.toLowerCase() === 'q') {
            console.log("Exiting the currency converter.");
            rl.close();
            return;
        }

        const amountInINR = parseFloat(input);

        if (isNaN(amountInINR) || amountInINR <= 0) {
            console.log("Please enter a valid number for INR.");
        } else {
            const amountInUSD = convertCurrency(amountInINR);
            console.log(`${amountInINR} INR is equal to ${amountInUSD.toFixed(2)} USD.`);
        }

        promptForInput(); // Ask for input again
    });
}

// Start the currency conversion process
console.log("Currency Converter: INR to USD");
promptForInput();
