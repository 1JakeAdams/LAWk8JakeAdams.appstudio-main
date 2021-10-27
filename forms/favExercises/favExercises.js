let exercises = ["pullups","pushups","situps","jogging","plank","curls"]
let coreExercises = ["situps","plank"]
selection = []

favExercises.onshow=function(){
  SlctExercise.clear()
  for (i = 0; i < exercises.length; i++)
    SlctExercise.addItem(exercises[i])
  for (i = 0; i < coreExercises.length; i++)
    SlctExercise.addItem(coreExercises[i])
}

SlctExercise.onclick = function() {
  selection.push(SlctExercise.value)
}

btnShowExercise.onclick = function() {
  if (selection[0] == "situps" && selection[1] == "plank") {
    lblExercises.value = (`You chose ${selection[0]} and ${selection[1]} - those are the two core exercises.`)
  } else if (selection[1] == "situps" && selection[0] == "plank") {
    lblExercises.value = (`You chose ${selection[0]} and ${selection[1]} - those are the two core exercises.`)
  } else {
    lblExercises.value = (`You did not pick the two core exercises.`)
  }
}

btnNav.onclick = function() {
  ChangeForm(mobileNav)
}


