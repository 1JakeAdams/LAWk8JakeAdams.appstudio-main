hmbMenu1.onshow=function(){
  hmbMenu1.clear()
  hmbMenu1.addItem("Dessert Voting")
  hmbMenu1.addItem("Describe You")
  hmbMenu1.addItem("Favorite Excerise")
  hmbMenu1.addItem("Mobile Nav")
}


hmbMenu1.onclick=function(s){
 // add code to check if user clicked the hamburger control to open it 
  /* add a switch here to take the user to the form
     they chose. 
  */

   if (typeof(s) == "object") {
    return
  } else {
    switch (s) {
      case "Dessert Voting":
        ChangeForm(dessertVoting)
        break
      case "Describe You":
        ChangeForm(describeYou)
        break
      case "Favorite Exercises":
        ChangeForm(favExercises)
        break
      case "Mobile Nav":
        ChangeForm(mobileNav)
        break
    }
  }
}


 