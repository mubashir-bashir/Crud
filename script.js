let row = null;

const table = document.getElementById("table")
function submitbtn(){
   const dataEntered = retriveData()
    const readData=  readingDataFromLocalStorage(dataEntered)
    if(row == null){
        insert(readData)
    }
    else{
        update()
    }
}

//Create
//REtreiving data from Form
function retriveData(){
    const name = document.getElementById("name").value ;
    const job = document.getElementById("job").value;
    const exp = document.getElementById("exp").value;

    const arr = [name,job,exp]
    return arr
}

// READ
//Data in localstorage
function readingDataFromLocalStorage(data){
    // Storing data in local storage

    const n = localStorage.setItem("Name",data[0])
    const j = localStorage.setItem("Job",data[1])
    const e = localStorage.setItem("Experience",data[2])

    // Getting values from local to table
    const n1 = localStorage.getItem("Name",n)
    const j1 = localStorage.getItem("Job",j)
    const e1 = localStorage.getItem("Experience",e)

    const arr = [n1,j1,e1]
    return arr
}


//INSERT 
function insert(data){
     row = table.insertRow();
    row.insertCell(0).innerHTML = data[0]
    row.insertCell(1).innerHTML = data[1]
    row.insertCell(2).innerHTML = data[2]
    row.insertCell(3).innerHTML = `<button onclick = "edit(this)">Edit</button> 
    <button onclick = "remove(this)">Delete</button>`
}

// EDIT
function edit(btn){
     row = btn.parentElement.parentElement;
    document.getElementById("name").value = row.cells[0].innerHTML
    document.getElementById("job").value = row.cells[1].innerHTML
    document.getElementById("exp").value = row.cells[2].innerHTML
    const submit = document.getElementById("btn")
    submit.value = "Update"
}
//UPDATE
function update(){
    row.cells[0].innerHTML = document.getElementById("name").value;
    row.cells[1].innerHTML = document.getElementById("job").value;
    row.cells[2].innerHTML = document.getElementById("exp").value;
    row = null;
    const submit = document.getElementById("btn")
    submit.value = "Submit"
}
//DELETE
function remove(btn) {
    const ans = confirm("Do you want to delete this record")
    if(ans === true){
        const row = btn.parentElement.parentElement;
        console.log(row.rowIndex)
        document.getElementById("table").deleteRow(row.rowIndex);
     
    }
}