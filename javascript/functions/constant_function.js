// constant_function.js

const logText = (textParameter) => {
    let date = new Date().toLocaleString();
    console.log(`[${date}] Zalování: ${textParameter}`);
};

logText("Ahoj JS světe!");