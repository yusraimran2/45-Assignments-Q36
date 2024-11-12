// 36. T-Shirt: Write a function called make_shirt() that accepts a size and the text of a message that should be printed on the shirt. The function should print a sentence summarizing the size of the shirt and the message printed on it. Call the function.

function makee_shirt(size: string, message: string): void {
    console.log(`Printing shirt with size ${size} and message: "${message}"`);
}

// Calling the function
makee_shirt('Large', 'Hello, World!');