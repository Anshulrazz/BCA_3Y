let fname ='ANSHUL';

document.write("Hello, &nbsp;", fname,"<br>");

let age = 21;

document.write("Age: ", age,"<br>");

let isStudent = true;

document.write(`Student: ${isStudent ? "Yes" : "No"}`,"<br>");

let emptyValue = null;

document.write(`About Us: ${emptyValue || "Write Something"}`,"<br>");

let uninitialised;

document.write(!uninitialised && "Fill complete details","<br>");