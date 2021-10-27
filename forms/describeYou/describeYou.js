rbtnCharacter.onchange=function(){
// get the text of the option chosen by the user
   let userChoice = $("input[name=rbtnCharacter]:checked").prop("value")
   Label1.value = (`I would agree that you are a ${userChoice} person too!`)
}
btnExercise.onclick=function(){
  ChangeForm(favExercises)
}