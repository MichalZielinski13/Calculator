//Downloading main elements
const screen = document.querySelector(".screen");
const buttons = document.querySelector(".buttons");
const history = document.querySelector(".history")

//Downloading buttons
const seven = document.querySelector(".seven");
const eight = document.querySelector(".eight");
const nine = document.querySelector(".nine");
const plus = document.querySelector(".plus");
const slash = document.querySelector(".slash");
const modulo = document.querySelector(".modulo");
const exclamation = document.querySelector(".exclamation");
const four = document.querySelector(".four");
const five = document.querySelector(".five");
const six = document.querySelector(".six");
const minus = document.querySelector(".minus");
const times = document.querySelector(".times");
const root = document.querySelector(".root");
const squared = document.querySelector(".squared");
const one = document.querySelector(".one");
const two = document.querySelector(".two");
const three = document.querySelector(".three");
const equals = document.querySelector(".equals");
const squaredx = document.querySelector(".squaredx");
const plusMinus = document.querySelector(".plusMinus");
const zero = document.querySelector(".zero");
const dot = document.querySelector(".dot");
const C = document.querySelector(".C");
const CE = document.querySelector(".CE");
const MPlus = document.querySelector(".MPlus");
const MMinus = document.querySelector(".mMinus");
const M = document.querySelector(".M");
const MC = document.querySelector(".MC");

//Downloading other buttons
const increase = document.querySelector(".increase");
const decrease = document.querySelector(".decrease");
const precision = document.querySelector(".precision");
const first = document.querySelector(".first");

//Customizing other buttons
let number = 10000;
let value = "Obecna precyzja: " + 1 + "/" + number;

let counter = 0;
first.textContent = "W pamięci stałej: " + counter;
precision.textContent = value;

increase.addEventListener("click", function () {
    number = number * 10;
    let value = "Obecna precyzja: " + 1 + "/" + number;
    precision.textContent = value;
})

decrease.addEventListener("click", function () {
    number = number / 10;
    let value = "Obecna precyzja: " + 1 + "/" + number / 10;
    precision.textContent = value;
})


const innerHTMLEventHandler = function (arg) {
    screen.innerHTML = screen.innerHTML + arg;
}

// Numbers
zero.addEventListener("click", () => innerHTMLEventHandler("0"))
one.addEventListener("click", () => innerHTMLEventHandler("1"))
two.addEventListener("click", () => innerHTMLEventHandler("2"))
three.addEventListener("click", () => innerHTMLEventHandler("3"))
four.addEventListener("click", () => innerHTMLEventHandler("4"));
five.addEventListener("click", () => innerHTMLEventHandler("5"));
six.addEventListener("click", () => innerHTMLEventHandler("6"));
seven.addEventListener("click", () => innerHTMLEventHandler("7"))
eight.addEventListener("click", () => innerHTMLEventHandler("8"));
nine.addEventListener("click", () => innerHTMLEventHandler("9"));

// Operations
plus.addEventListener("click", () => innerHTMLEventHandler("+"));
slash.addEventListener("click", () => innerHTMLEventHandler("/"));
minus.addEventListener("click", () => innerHTMLEventHandler("-"));
times.addEventListener("click", () => innerHTMLEventHandler("*"));
modulo.addEventListener("click", () => innerHTMLEventHandler("%"));
exclamation.addEventListener("click", () => innerHTMLEventHandler("!"));
squared.addEventListener("click", () => {
    const currentResult = eval(screen.innerHTML)
    if (!currentResult) return
    screen.innerHTML = Math.pow(parseFloat(currentResult), 2);
})
root.addEventListener("click", () => {
    const currentResult = eval(screen.innerHTML)
    if (!currentResult) return
    screen.innerHTML = `√(${currentResult})`;
})
squaredx.addEventListener("click", () => {
    const currentResult = eval(screen.innerHTML)
    screen.innerHTML = `${currentResult}^`;
})
dot.addEventListener("click", () => innerHTMLEventHandler("."))
plusMinus.addEventListener("click", function () {
    const currentResult = eval(screen.innerHTML)
    if (!currentResult) return
    screen.innerHTML = -currentResult;
})

// Calculator Operations
C.addEventListener("click", function () {
    screen.innerHTML = "";
})

CE.addEventListener("click", function () {
    screen.innerHTML = screen.innerHTML.slice(0, -1);
})

MPlus.addEventListener("click", function () {
    // Dodanie do pamięci wyświetlaną liczbę
    history.innerHTML = history.innerHTML + ` <p>${screen.innerHTML}</p>`
})

MMinus.addEventListener("click", function () {
    history.innerHTML = history.innerHTML.split("").slice(0, -1).join("");
    //odjęcie liczby z wyświetlacza od wbudowanej pamięci kalkulatora
})

M.addEventListener("click", function () {
    counter++;
    first.textContent = "W pamięci stałej: " + counter
    history.innerHTML = history.innerHTML + ` <p>${screen.innerHTML}</p>`
    //zapisuje w pamięci wyświetloną liczbę
})

MC.addEventListener("click", function () {
    counter = 0;
    first.textContent = "W pamięci stałej: " + counter
    history.innerHTML = "";
})

increase.addEventListener("click", function () {
    history.innerHTML = "";
})

const parseEquation = (equation) => {
    const parsedEquation = `${equation}`.replaceAll("√", "Math.sqrt")
    if (equation.includes("^")) {
        const [firstPart, secondPart] = parsedEquation.split("^")
        return `Math.pow(${firstPart}, ${secondPart})`
    }
    return parsedEquation
}

equals.addEventListener("click", function () {
    screen.textContent = eval(parseEquation(screen.textContent));
})

