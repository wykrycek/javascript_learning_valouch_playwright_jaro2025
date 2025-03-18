const elements = ["button1", "field2", "radio6"];

elements.forEach((element) => {
    console.log(element);
});

elements.forEach((element, index) => {
    console.log(`Element ${index}: ${element}`);
});


const multipleElements = [
    ["button1", "field2", "radio6"],
    ["button2", "field3", "radio7"],
    ["button3", "field4", "radio8"],
];

multipleElements.forEach((element) => {
    element.forEach((element) => {
        console.log(element);
    });
});


multipleElements.forEach((elements, index) => {
    elements.forEach((element) => {
        console.log(`Element ${index}: ${element}`);
    });    
});