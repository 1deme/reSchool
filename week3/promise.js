const myPromise = new Promise((resolve, reject) => {
    const number = 5;

    if (number > 3) {
        resolve("Big number");
    } else {
        reject("Small number");
    }
});

myPromise
    .then(result => {
        console.log(result);
    })
    .catch(error => {
        console.log(error);
    });