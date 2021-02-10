window.addEventListener("DOMContentLoaded", function () {
    console.log(`DOM has loaded`);


// to assign the value of text field
// eventlistener for click => grab input value
// append the value as a new li
// const newTaskButtonPressed = function () {
//     const taskValue = taskText.target.value
//     console.log(taskValue)
// }
const addNewTask = () => {
    const taskText = document.getElementById(`#newTask`)
    const taskList = document.getElementById(`myTaskList`)
    const textValue = taskText.value
//     console.log(textValue())
    
// //     console.log(textValue)
// //     console.log(addNewTask)
    const newTaskLi = document.createElement(`li`)
    taskList.appendChild(newTaskLi)
    newTaskLi.innerText(`${textValue}`)
    // console.log(addNewTask())
}
addNewTask()
});