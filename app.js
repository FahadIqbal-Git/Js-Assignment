// Chapter#1

// #1 
// alert("Welcome!")

// #2
// var msg1="JavaScript ALert"
// var msg2="\n\nError! Please enter a valid password"
// alert(msg1+msg2)

// #3
// var msg1="JavaScript Alert"
// var msg2="\n\nWelcome to Js Land..."
// var msg3="\nHappy Coding!"
// alert(msg1+msg2+msg3)

// #4
// var msg1="JavaScipt ALert"
// var msg2="\n\nWelcome to Js Land..."
// var msg3="\n\nHappy Coding!"
// var msg4="\n\n▢ Prevent this page from making additional dialoges"

// alert(msg1+msg2)
// alert(msg1+msg3+msg4)

// #5
// Type this in browser's console

// var msg="Hello... I can run Js through my web browser's console"
// alert(msg)


// Chapter#2

// #1
// var username;

// #2
// var myName;
// myName ="Fahad Iqbal";

// #3
// var message;
// message ="Hello World!"
// alert(message)

// #4
// var name;
// name ="Jhone Doe"
// var age;
// age ="15 Years"
// var qualifucation
// qualifucation ="Certified Mobile Application Development"

// alert(name)
// alert(age)
// alert(qualifucation)

// #5

// var name = "PIZZA"
// var msg = ""
// for (var i = name.length ; i >= 1 ; i--) {
//     msg += name.slice(0,i) + "\n"
// }
// alert(msg)

// #6

// var email;
// email = " example@example.com"
// var fullLine;
// fullLine = "My email address is"

// alert(fullLine + email)

// #7

// var book;
// book = " A smarter way to learn JavaScript"
// var fullLine;
// fullLine = "I am trying to learn from the Book"

// alert(fullLine + book)

// #8

// var msg;
// msg = "Yah! I can write HTML content through JavaScript."

// document.write(msg)

// Chapter #3

// #1

// var age = " 15"
// var msg = "I am"
// var msg1 = " years old."

// alert(msg + age + msg1)

// #2

// var msg = "You have visited this site 14 times!"

// alert(msg)

// #3

// var msg1="My birth year is"
// var age=" 1990 </br>"
// var msg2="Data type of my declared variable is number"

// document.write(msg1+age)
// document.write(msg2)

// #4

// var name=prompt("Enter your Name")
// var product=prompt("Enter Product's Title")
// var quantity=prompt("Enter Quantity")

// var msg1=(" ordered")
// var msg3=(" on XYZ clothing store")

// document.write(name+msg1+quantity+product+msg3)

// Chapter #4

// #1

// var msg1="I am"
// var msg2=" learning JavaScript"
// var msg3=" from Saylani"

// document.write(msg1+msg2+msg3)

// #2

// Legal
// var msg="Hey!"
// var msg1="This"
// var msg_="is"
// var msgH="Fahad"
// var msg$="Iqbal"

// Illegal
// var 1msg="Hey!"
// var @msg="This"
// var 5msg="is"
// var -msg="Fahad"
// var #msg="Iqbal"

// #3

// var msg="Rules for naming JS variables </br></br>"

// var msg1="Variable names can only contain numbers, $ and _ . For example : $my_1stVariable </br>"
// var msg2="Variable must begin with a letter, $ or _ . For example : $name, _name or name </br>"
// var msg3="Variable names are case sensitive </br>"
// var msg4="Variable name should not be Js keywords </br>"

// document.write(msg+msg1+msg2+msg3+msg4)

// Chapter #5

// #1

// var firstValue=prompt("Enter First Value")
// var secondValue=prompt("Enter Second Value")
// var sign="+"

// msg1="Sum of "
// msg2=" and "
// msg3=" is "

// document.write(msg1+firstValue+msg2+secondValue+msg3+((+firstValue)+(+secondValue)))

// #2

// var val1=prompt("Enter First Value")
// var sign=prompt("Enter operation")
// var val2=prompt("Enter Second Value")

// msg1="Sum of "
// msg2=" and "
// msg3=" is "
// mtg1="Subtraction of "
// mug="Multiple of "
// mvg="Division of "

// console.log(val1+sign+val2)

// if (sign === "+"){
//     document.write(msg1+val1+msg2+val2+msg3+((+val1)+(+val2)))
// }
// else if(sign === "-"){
//     document.write(mtg1+val1+msg2+val2+msg3+(val1-val2))
// }
// else if (sign === "*"){
//     document.write(mug+val1+msg2+val2+msg3+val1*val2)
// }
// else if (sign === "/"){
//     document.write(mvg+val1+msg2+val2+msg3+val1/val2)
// }

// #3


// #4

// var val1=prompt("Enter no. of Tickets")
// var tick="600"
// var msg1="Total cost to buy "
// var msg2=" tickets to a movie is "
// var msg3="PKR"
// document.write(msg1+val1+msg2+(val1*tick)+msg3)

// #5

// for (var i = 1 ; i <= 10 ; i++) {
//     document.write("8 " + "x " + i + " = " + 8*i + "</br>")
// }

// #6

// var cel="30"
// msg1="°C is "
// msg2=" °F"
// document.write(cel+msg1+(cel*9/5+32)+msg2)

// var far="75"
// msg1="°F is "
// msg2="°C"
// document.write(far+msg1+(far-32*5/9)+msg2)

// #7

// var val1="750"
// var val2="3"
// var vl1="150"
// var vl2="7"
// var $ship="100"

// msg1="Price of item 1 is "
// msg2="Quantity of item 1 is "
// msg3="Price of item 2 is "
// msg4="Quantity of item 2 is "
// msg5="Shipping Charges "
// msg6="Total cost of your is "

// document.write(msg1+val1+"<br>"+msg2+val2+"<br>"+msg3+vl1+"<br>"+msg4+vl2+"<br>"+msg5+$ship)
// document.write("<br><br>"+msg6+((+val1*val2)+(+vl1*val2)+(+$ship)))

// #8

// var obt=prompt("Enter Obtained Marks")
// var tot=prompt("Enter Total Marks")

// msg1="Obtained Marks = "
// msg2="Total Marks = "
// msg3="Percentage = "

// document.write(msg1+obt+"<br>"+msg2+tot+"<br><br>"+msg3+(obt/tot*100))

// Chapter #6

// #1

// msg="Result :"
// dot="..........................."
// sg="Now the value of a is : "
// msg1="The value of ++a is : 11"
// msg2="The value of a++ is : 11"
// msg3="The value of --a is : 11"
// msg4="The value of a-- is : 11"
// var val1="10"
// var val2="11"
// var val3="12"

// document.write(msg+"<br><br>"+dot+"<br><br>"+msg1+"<br>"+sg+"11"+"<br><br>"+msg2+"<br>"+sg+"12"+"<br><br>"+msg3+"<br>"+sg+"11"+"<br><br>"+msg4+"<br>"+sg+"10")

// #3

// var name=prompt("Enter your name")
// msg="Welcome! "

// document.write(msg+name)

// #5

var val = prompt("Enter the value")

if (val === "") {
    for (var i = 1; i <= 10; i++) {
        document.write("5 " + "x " + i + " = " + 5 * i + "</br>")
    }
}
else if (val === "1","2","3","4","5","6","7","8","9","10") {
    for (var i = 1; i <= 10; i++) {
        document.write(val + " x " + i + " = " + val * i + "</br>")
    }
}