//task4
while(true){
    var na=prompt("Enter your name","Type your name here");
    if(isNaN(na))
    {
      var n1=na;
      var birthYear=prompt("Enter your birthYear","Type your birthYear here");
      if(isFinite(birthYear)&&(parseInt(birthYear)<2010))
      {
        var n2=birthYear;
        var age=2021-birthYear;
        break;
      }
    }
}
document.write("Name:"+" " +n1+"<br/>");
document.write("Birth year:" + " "+n2+"<br/>");
document.write("Age:"+" "+age+"<br/>");