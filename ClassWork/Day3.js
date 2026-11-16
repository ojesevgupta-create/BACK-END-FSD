// Promise Example

function getData() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Data received successfully");
        }, 2000);
    });
}

console.log("Promise started");

getData()
    .then((data) => {
        console.log(data);
    })
    .catch((error) => {
        console.log(error);
    });


// Async / Await Example

async function showData() {
    console.log("\nAsync/Await started");

    try {
        const data = await getData();
        console.log(data);
    } catch (error) {
        console.log(error);
    }
}

showData();