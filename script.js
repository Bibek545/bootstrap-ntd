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
  };

  taskList.push(obj);
displayEntryList();
};

// here we have created a fubnction displayEntryList to add value and 
const displayEntryList = () => {
  console.log(taskList);
 let str = " ";

  const entryElm = document.getElementById("entryList");
  taskList.map((item, i)=>{
   str += `
     <tr>
         <td>${ i + 1}</td>
            <td>${item.task}</td>
                <td>${item.hr}</td>
              <td class = "text-end">
                    <div onclick="handleOnDelete('${item.id}')" class="btn btn-danger"><i class="fa-solid fa-trash"></i></div>
                    <div class="btn btn-success"><i class="fa-solid fa-arrow-right"></i></div>

              </td>
   </tr>
    `;
  });
  entryElm.innerHTML = str
};

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

const handleOnDelete = (id) => {
    console.log(id);
}

