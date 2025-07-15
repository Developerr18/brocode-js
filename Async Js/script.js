function loadScript(src, callback) {
    let script = document.createElement("script");
    script.src = src;
    script.onload = () => callback(script);
    document.head.append(script);
}

loadScript(
    "https://cdnjs.cloudflare.com/ajax/libs/lodash.js/3.2.0/lodash.js",
    (script) => {
        console.log(`Cool, the script ${script.src} is loaded`);
        console.log(_); // _ is a function declared in the loaded script
    }
);

//////////////////////////////////////////////////
function fn1(callback) {
    console.log("fn1 executed");
    callback();
}

function fn2() {
    console.log("fn2 executed, last fn executed");
}

function fn3(callback) {
    console.log("after fn1, fn3 executed");
    callback();
}

function fn4(callback) {
    console.log("after fn3, fn4 executed");
    callback();
}

fn1(() => {
    fn3(() => {
        fn4(fn2);
    });
});

///////////////////////////////////////////////
let promise = new Promise((resolve, reject) => {
    resolve(1);

    setTimeout(() => resolve(2), 1000);
});

promise.then((value) => console.log(value));

///////////////////////////////////////////////
function delay(ms) {
    return new Promise((resolve) => {
        setTimeout(resolve, ms);
    });
}

delay(3000).then(() => console.log("runs after 3 seconds"));
