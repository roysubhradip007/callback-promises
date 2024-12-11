function greetingPromise(name) {
    return new Promise((resolve, reject) => {
        if (name) {
            resolve(`Hello, ${name}!`);
        } else {
            reject("Name is required");
        }
    });
}