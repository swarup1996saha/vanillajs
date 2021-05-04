// getting all required elements

const inputBox = document.querySelector('.inputField input');
const addBtn = document.querySelector('.inputField button');
const todoList = document.querySelector('.todoList');
const deleteAllBtn = document.querySelector('.footer button');

// onkeyup event
inputBox.onkeyup = ()=>{
    let userEnteredValue = inputBox.value; //getting user entered value
    if(userEnteredValue.trim() != 0){ //if the user value isn't only spaces
      addBtn.classList.add("active"); //active the add button
    }else{
      addBtn.classList.remove("active"); //unactive the add button
    }
  }
  showTask();
  //if user clicks on the add button
  addBtn.onclick = ()=>{
    let userData = inputBox.value;
    let getLocalStorage = localStorage.getItem("New Todo"); //getting localstorage
    if(getLocalStorage == null){ //if local storage is null
         listArr = []; //creating blank Array
    }else{
        listArr = JSON.parse(getLocalStorage);//transforming json string into a js object  
    }
    listArr.push(userData); //pusing or adding user data
    localStorage.setItem("New Todo", JSON.stringify(listArr));//transforming js object into a json string
    showTask(); //calling showtask function
    addBtn.classList.remove("active"); //unactive the add button
  }
//function to add task list inside ul
  function showTask(){
    let getLocalStorage = localStorage.getItem("New Todo");
    if(getLocalStorage == null){ //if local storage is null
        listArr = []; //creating blank Array
   }else{
       listArr = JSON.parse(getLocalStorage);//transforming json string into a js object  
   }
   const pendingNumb = document.querySelector('.pendingNumber');
   pendingNumb.textContent=listArr.length; //passing the length value in the pending number
   if(listArr.length>0){// if array length is grater than 0
       deleteAllBtn.classList.add("active"); //active the clear all button
   }else{
       deleteAllBtn.classList.remove("active");//unactive the clearall button
   }
   let newLiTag = '';
   listArr.forEach((element,index)=>{
       newLiTag += `<li> ${element} <span onclick="deleteTask(${index})";><i class="fas fa-trash"></i></span></li>`;
   });
   todoList.innerHTML = newLiTag; // adding new li tag indside ul tag
   inputBox.value=""; //once task added leave the input field blank
  }

  //delete task functio
  function deleteTask(index){
    let getLocalStorage = localStorage.getItem("New Todo");
    listArr = JSON.parse(getLocalStorage);
    listArr.splice(index, 1); //delete or remove the particular index li
    // after remove the li again update the local Storage
    localStorage.setItem("New Todo", JSON.stringify(listArr));//transforming js object into a json string
    showTask(); //calling showtask function
  }

  //delete all tasks function
  deleteAllBtn.onclick = ()=>{
    listArr=[]; //empty an array
     //after delete all task again update the local storage
    localStorage.setItem("New Todo", JSON.stringify(listArr));//transforming js object into a json string
    showTask(); //calling showtask function
  }