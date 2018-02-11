
var a ;
//refers to today's date
var today = new Date();


function daysCalc(){
    // reads date in yyyy-mm-dd format
    var enteredDate = document.getElementById('datePicker').value;
    //to convert the given date to Date and store into birthDate
    var birthDate = new Date(enteredDate);
    //var test = birthDate.getHours();
    //Converting date to time and subtracting birthdate from current date
    var calcTime = today.getTime() - birthDate.getTime();
    var oneday = 24*60*60*1000; //hours*minutes*seconds*milliseconds
    //convert the returned milliseconds from calcTime to Date.
   // var d = new Date(calcTime);
    // subtract -2 to 
   
    //Calculates to number of days
    //https://stackoverflow.com/questions/2627473/how-to-calculate-the-number-of-days-between-two-dates
    var calcDays = Math.round(Math.abs(calcTime/oneday)-1);
    var calchours = calcDays*24;
    var calcMinutes = calchours*60;
    var calcSeconds = calcMinutes*60
    document.getElementById('ageDisplay').innerHTML = calcDays + '   Days';
    
   }

function hoursCalc(){
  // reads date in yyyy-mm-dd format
  var enteredDate = document.getElementById('datePicker').value;
  //to convert the given date to Date and store into birthDate
  var birthDate = new Date(enteredDate);
  //var test = birthDate.getHours();
  //Converting date to time and subtracting birthdate from current date
  var calcTime = today.getTime() - birthDate.getTime();
  var oneday = 24*60*60*1000; //hours*minutes*seconds*milliseconds
  //convert the returned milliseconds from calcTime to Date.
 // var d = new Date(calcTime);
  // subtract -2 to 

  //Calculates to number of days
  //https://stackoverflow.com/questions/2627473/how-to-calculate-the-number-of-days-between-two-dates
  var calcDays = Math.round(Math.abs(calcTime/oneday)-1);
  var calchours = calcDays*24;
  var calcMinutes = calchours*60;
  console.log(calcTime)
  document.getElementById('ageDisplay').innerHTML = calchours + '   Hours';
 
}

function minutesCalc(){
   // reads date in yyyy-mm-dd format
   var enteredDate = document.getElementById('datePicker').value;
   //to convert the given date to Date and store into birthDate
   var birthDate = new Date(enteredDate);
   //var test = birthDate.getHours();
   //Converting date to time and subtracting birthdate from current date
   var calcTime = today.getTime() - birthDate.getTime();
   var oneday = 24*60*60*1000; //hours*minutes*seconds*milliseconds
   //convert the returned milliseconds from calcTime to Date.
  // var d = new Date(calcTime);
   // subtract -2 to 
 
   //Calculates to number of days
   //https://stackoverflow.com/questions/2627473/how-to-calculate-the-number-of-days-between-two-dates
   var calcDays = Math.round(Math.abs(calcTime/oneday)-1);
   var calchours = calcDays*24;
   var calcMinutes = calchours*60;
   var calcSeconds = calcMinutes*60
   document.getElementById('ageDisplay').innerHTML = calcMinutes + '   Minutes';

}

