// let fname ='ANSHUL';

// document.write("Hello, &nbsp;", fname,"<br>");

// let age = 21;

// document.write("Age: ", age,"<br>");

// let isStudent = true;

// document.write(`Student: ${isStudent ? "Yes" : "No"}`,"<br>");

// let emptyValue = null;

// document.write(`About Us: ${emptyValue || "Write Something"}`,"<br>");

// let uninitialised;

// document.write(!uninitialised && "Fill complete details","<br>");





// let age = 21;
// document.write(age > 17 ?  "You can vote" : "You can't vote" );


// let number = prompt("Enter a number");

// if (number < 0) {
//     document.write("The number is negative");
// } else if (number > 0) {
//     document.write("The number is positive");
// } else {
//     document.write("The number is zero");
// }


// let fruit = prompt("Enter a fruit");

// switch (fruit) {
//     case "apple":
//         document.write(`You choose : ${fruit}`);
//         break;
//     case "banana":
//         document.write(`You choose : ${fruit}`);
//         break;
//     default:
//         document.write(`You choose unkonwn `);
// }

let greet = () => {
    let date = new Date();
    if (date.getHours() < 12) {
        document.getElementById("demo").innerHTML = "Good Morning";
    } else if (date.getHours() < 18) {
        document.getElementById("demo").innerHTML = ("Good Afternoon");
    } else {
        document.getElementById("demo").innerHTML = ("Good Evening");
    }
}

let themeDay = () => {
document.body.style.backgroundColor = "#ccc";
document.body.style.color = "black";

}
let themeNight = () => {
document.body.style.backgroundColor = "#1E201E";
document.body.style.color = "white";
}

function updateClock() {
    const now = new Date();

    let hours = now.getHours();
    let minutes = now.getMinutes();
    let seconds = now.getSeconds();

    hours = hours < 10 ? '0' + hours : hours;
    minutes = minutes < 10 ? '0' + minutes : minutes;
    seconds = seconds < 10 ? '0' + seconds : seconds;
    document.getElementById('hours').textContent = hours;
    document.getElementById('minutes').textContent = minutes;
    document.getElementById('seconds').textContent = seconds;
}
updateClock();
setInterval(updateClock, 1000);
