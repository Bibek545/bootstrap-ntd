const handleOnSubmit =(e) => {
     const newForm = new FormData(e);

     const task = newForm.get("task")
     const number = newForm.get("number")
     console.log(task, number);
}
