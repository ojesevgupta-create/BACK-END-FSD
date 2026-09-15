// Synchronous Programming

console.log("Start of synchronous example");

function synchronousExample() {
    console.log("Middle of synchronous example");
}

synchronousExample();

console.log("End of synchronous example");


// Asynchronous Programming

console.log("\nStart of asynchronous example");

function asynchronousExample() {
    setTimeout(() => {
        console.log("Middle of asynchronous example");
    }, 2000);
}

asynchronousExample();

console.log("End of asynchronous example");


// Callback

console.log("\nStart of callback example");

function callbackExample(callback) {
    setTimeout(() => {
        console.log("Middle of callback example");
        callback();
    }, 2000);
}

callbackExample(() => {
    console.log("End of callback example");
});


// Simple Callback Example

function helloFSD(callback) {
    console.log("\nHello FSD");
    callback();
}

helloFSD(() => {
    console.log("Welcome to FSD");
});