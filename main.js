
 var number = window.prompt("Enter NO.");
 window.alert(number);



 var number = window.prompt("Enter NO.");
 number = Number(number);
 if(number%3==0&&number%4==0){
     window.alert("Yes")
 }else{
     window.alert("NO")
 }

 var number1 = Number(window.prompt("Enter NO1"));
 var number2 = Number(window.prompt("Enter NO2"));

 if (number1>number2){
     window.alert(number1)
 }else{
     window.alert(number2)
 }

 var number = Number(window.prompt("Enter NO"));
 if(number<0){
     window.alert("negative")
 }else{
     window.alert("positive")
 }

 var number1 = Number(window.prompt("Enter NO1"));
 var number2 = Number(window.prompt("Enter NO2"));
 var number3 = Number(window.prompt("Enter NO3"));

 if(number1>number2&&number1>number3){
     window.alert("Max NO  : "+number1)
 }else if(number2>number1&&number2>number3){
     window.alert("Max NO  : "+number2)
 }else if(number3>number1&&number3>number2){
     window.alert("Max NO  : "+number3)
 }





 if(number1<number2&&number1<number3){
     window.alert("Min NO : "+number1)
 }else if(number2<number1&&number2<number3){
     window.alert("Min NO  : "+number2)
 }else if(number3<number1&&number3<number2){
     window.alert("Min NO  : "+number3)
 }








if(int1>int2){
    if(int1>int3){
        alert("Max number  : " + int1);
        if(int2>int3){
            alert("Min number  : " + int3);
        }else{
            alert("Min number  : " + int2);
        }
    }else{
        alert("Max number  : " + int3);
        alert("Min number  : " + int2);
    }
}else{
    if(int2>int3){
        alert("Max number  : " + int2);
        if(int1>int3){
            alert("Min number  : " + int3);
        }else{
            alert("Min number  : " + int1);
        }
    }else{
        alert("Max number  : " + int3);
        alert("Min number  : " + int1);
    }
}














 var number = Number(window.prompt("Enter Number"));

 if(number%2==0){
     window.alert("Nimber "+number+"  Even")
 }else{
     window.alert("Nimber "+number+"  Odd")
 }

 var char = window.prompt("Enter your char");
 switch (char) {
   case "a":
   case "A":
   case "e":
   case "i":
   case "o":
   case "u":
     window.alert("vowel");
     break;
     default:
         window.alert("consonant");
         break;
 }







 var number = Number(window.prompt("Enter number :"));
 for(var i = 1;i<=number;i++){
     window.alert(i);
 }








 var number = Number(window.prompt("Enter number :"));
 for(var i=1;i<=12;i++){
     window.alert(i*number);
 }








 var number = Number(window.prompt("Enter number :"));
 for (var i = 2; i <= number; i += 2) {
   window.alert(i);
 }







 var number = Number(window.prompt("Enter number :"));
 var power = Number(window.prompt("Enter power :"));
 var result = 1;

 for (var i = 0; i < power; i++) {
     result*=number;
 }

 window.alert(result);


 var total =0;
 for(var i =0 ;i<5;i++){
     total+=Number( window.prompt("Enter mark subject"+(i+1)));
 }

 window.alert("Total marks = "+total);
 window.alert("Avg = "+total/5);
 window.alert("persentage = "+total/500*100);

 











 var monthNumber = window.prompt("Enter month number");
 if(monthNumber ==1||monthNumber==3 ||monthNumber==5 ||monthNumber==7||monthNumber==8||monthNumber==10||monthNumber==12){
     window.alert("31")
 }else if(monthNumber ==2){
     window.alert("28 days in a common year and 29 days in leap years")
 }else if(monthNumber==4||monthNumber==6||monthNumber==9||monthNumber==11){
     window.alert("30");
 }




 var physicsMark =Number( window.prompt("Enter mark of physics subject"));


 var chemtryMark = Number(window.prompt("Enter mark of Chemtry subject"));

 var biologyMark = Number(window.prompt("Enter mark of Biology subject"));

 var mathematicsMark = Number(window.prompt("Enter mark of Mathematics subject"));

 var computerMark = Number(window.prompt("Enter mark of Computer subject"));


 var persentage = (physicsMark+chemtryMark+biologyMark+mathematicsMark+computerMark)/500*100;


 if(persentage>=90){

     window.alert("Grade A")

 }else if(persentage>=80){

     window.alert("Grade B")

 }else if(persentage>=70){

     window.alert("Grade C")

 }else if(persentage>=60){

     window.alert("Grade D")

 }else if(persentage>=40){

     window.alert("Grade E")

 }else if(persentage<40){
    
     window.alert("Grade F")
 }


 var monthNumber = window.prompt("Enter month number");
 switch (monthNumber) {
   case "1":
   case "3":
   case "5":
   case "7":
   case "8":
   case "10":
   case "12":
     window.alert("31");
     break;
   case "2":
     window.alert("28 days in a common year and 29 days in leap years");
     break;
   case "4":
   case "6":
   case "9":
   case "11":
     window.alert("30");
     break;
 }



 var char = window.prompt("Enter your char");
 if(char=='a' || char=='e' || char =='o' ||char=='u'||char=='i'){
     window.alert("vowel");
 }else {
     window.alert("consonant");
 }


 var number1 = window.prompt("Enter first number");
 var number2 = window.prompt("Enter sec number");

 switch (number1 > number2) {
   case true:
     window.alert(number1);
     break;
   case false:
     window.alert(number2);
     break;
 }


 var number = window.prompt("Enter number");
 switch (number % 2 == 0) {
   case true:
     window.alert("Even");
     break;
   case false:
     window.alert("odd");
     break;
 }


 var number = Number(window.prompt("Enter number"));
 switch (number > 0) {
   case true:
     window.alert("Number  positive");
     break;
   case false:
     switch (number == 0) {
       case true:
         window.alert("Zero");
         break;
       case false:
         window.alert("negative");
         break;
     }
     break;
 }

 var number1 = Number(window.prompt("Enter first number"));
 var sign = window.prompt("Enter your sign");
 var number2 = Number(window.prompt("Enter sec number"));

 switch (sign) {
   case "+":
     window.alert(number1 + number2);
     break;
   case "-":
     window.alert(number1 - number2);
     break;
   case "*":
     window.alert(number1 * number2);
     break;
   case "/":
     window.alert(number1 / number2);
     break;
 }
console.log('nbbbbbbbb');