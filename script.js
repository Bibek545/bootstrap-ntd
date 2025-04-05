let taskList = []; // we declared an array here to store the value, we will create objects inside the array

const handleOnSubmit = (e) => {
  const newForm = new FormData(e);

  const task = newForm.get("task");
  const number = newForm.get("number");
  //  console.log(task, number);
  const obj = {
    //we created an obj and intitalised the value, so that we can push the obj inside the taskList. using the push method.
    task: task,
    hr: number,
    id: randomIdGenerator(),
    type: 'entry',
  };

  taskList.push(obj);
displayEntryList();
};

// here we have created a fubnction displayEntryList to add value and 
const displayEntryList = () => {
    console.log(taskList);
 let str = " ";

  const entryElm = document.getElementById("entryList");

  const entryList =taskList.filter((item) =>item.type === 'entry');
  entryList.map((item, i) => {
   str += `
     <tr>
         <td>${ i + 1}</td>
            <td>${item.task}</td>
                <td>${item.hr}</td>
              <td class = "text-end">
                    <div onclick="handleOnDelete('${item.id}')" class="btn btn-danger"><i class="fa-solid fa-trash"></i></div>
                    <div onclick="switchTask('${item.id}', 'bad')" class="btn btn-success"><i class="fa-solid fa-arrow-right"></i></div>

              </td>
   </tr>
    `;
});
  entryElm.innerHTML = str;
};

// here we have created a function for badList
const displayBadList = () => {
    console.log(taskList);
 let str = " ";

  const badElm = document.getElementById("badList");

  const badList =taskList.filter((item) =>item.type === 'bad');
  badList.map((item, i) => {
   str += `
     <tr>
         <td>${ i + 1}</td>
            <td>${item.task}</td>
                <td>${item.hr}</td>
              <td class = "text-end">
                
                    <div onclick="switchTask('${item.id}', 'entry')" class="btn btn-warning"><i class="fa-solid fa-arrow-left"></i></div>
                    <div onclick="handleOnDelete('${item.id}')" class="btn btn-danger"><i class="fa-solid fa-trash"></i></div>

              </td>
   </tr>
    `;
});
  badElm.innerHTML = str;
};

//here we have created a function to gice task a randomId
const randomIdGenerator = (length = 6) => {
const str = "qwertyuiopasdfghjklzxcvbnmQWERTYUIOPASDFGHJKLZXCVBNM1234567890" 

// creating a random id generator 

let id = ""

for (let i=0;i< 6; i++){
   const randomIndex = Math.floor(Math.random() * str.length); //0-61.99
   id += str[randomIndex]
;
}
return id;
}
//here we have created a function and passed ID as a parameter to delete the task with the help of id
const handleOnDelete = (id) => {
    if (window.confirm("Are you sure you want to delete this?")) {
    taskList = taskList.filter((item)=> item.id !== id);
    displayEntryList();
    displayBadList();
}
};

const switchTask = (id, type) => {
taskList = taskList.map((item) => {
    //
    // console.log(item);
    if(item.id === id ) {
        item.type = type
    } 
    return item;
})
displayEntryList();
displayBadList();
};
