const input = getEle("inp");
const addbtn = getEle("add2TODO");
const list = getEle("list");
const doneList = document.getElementById("DONELIST")
const add = event => {
    event.preventDefault();
    const todoDiv = document.createElement('div');
    todoDiv.id = "todo";
    todoDiv.className = "todoDiv";
    const li = document.createElement('li');
    li.id = "li"
    li.innerText = input.value;
    li.className = "li";
    todoDiv.appendChild(li);
    save(input.value);
    const done = document.createElement("button");
    done.id = "done";
    done.innerText = "done";
    done.className = "done";
    todoDiv.appendChild(done);
    const Delete = document.createElement("button");
    Delete.id = "delete";
    Delete.innerText = "delete";
    Delete.className = "delete";
    Delete.style.backgroundColor = 'red'
    todoDiv.appendChild(Delete);
    const edit = document.createElement("button");
    edit.id = "edit";
    edit.innerText = "edit";
    edit.className = "edit";
    todoDiv.appendChild(edit);
    list.appendChild(todoDiv);
    input.value = ""

}
const targeter = (e) => {
    const item = e.target;
    if (item.id === 'done') {
        add2DONE(item);
    }
    else if (item.id === 'delete') {
        deleteFromList(item);
        removeTODO(item.parentElement)
    }
    else if (item.id === 'edit') {
        editTODO(item.parentElement);
    }
}
const DoneTargeter = (e) => {
    const item = e.target;
    if (item.id === 'delete') {
        deleteFromList(item);
        removeDONES(item.parentElement)
        
    }
    else;
}
const add2DONE = (item) => {
    const parent = item.parentElement;
    const copy = parent;
    copy.removeChild(item);
    copy.removeChild(parent.children[2])
    saveDONE(parent.children[0].innerText)
    removeTODO(parent)
    doneList.appendChild(copy);
    parent.remove;
}
const deleteFromList = (item) => {
    const parent = item.parentElement;
    parent.remove()
}
addbtn.addEventListener("click", add)
list.addEventListener("click", targeter)
doneList.addEventListener("click", DoneTargeter)



//save to storage

const save = (todo) => {
    let todos;
    if (localStorage.getItem('todos') === null) {
        todos = [];
    }
    else {
        todos = JSON.parse(localStorage.getItem('todos'))
    }
    todos.push(todo);
    localStorage.setItem('todos', JSON.stringify(todos))
}

const saveDONE = (done) => {
    let dones;
    if (localStorage.getItem('dones') === null) {
        dones = [];
    }
    else {
        dones = JSON.parse(localStorage.getItem('dones'))
    }
    dones.push(done);
    localStorage.setItem('dones', JSON.stringify(dones))
}
const getTODO = () => {
    let todos;
    if (localStorage.getItem('todos') === null) {
        todos = [];
    }
    else {
        todos = JSON.parse(localStorage.getItem('todos'))
    }
    todos.forEach(todo => {
        const todoDiv = document.createElement('div');
        todoDiv.id = "todo";
        todoDiv.className = "todoDiv";
        const li = document.createElement('li');
        li.innerText = todo;
        li.className = "li";
        todoDiv.appendChild(li);
        const done = document.createElement("button");
        done.id = "done";
        done.innerText = "done";
        done.className = "done";
        todoDiv.appendChild(done);
        const Delete = document.createElement("button");
        Delete.id = "delete";
        Delete.innerText = "delete";
        Delete.className = "delete";
        Delete.style.backgroundColor = 'red'
        todoDiv.appendChild(Delete);
        const edit = document.createElement("button");
    edit.id = "edit";
    edit.innerText = "edit";
    edit.className = "edit";
    todoDiv.appendChild(edit);
        list.appendChild(todoDiv); 
    })
}
const getDONE = () => {
    let dones;
    if (localStorage.getItem('dones') === null) {
        dones = [];
    }
    else {
        dones = JSON.parse(localStorage.getItem('dones'))
    }
    dones.forEach(done => {
        const todoDiv = document.createElement('div');
        todoDiv.id = "todo";
        todoDiv.className = "todoDiv";
        const li = document.createElement('li');
        li.innerText = done;
        li.className = "li";
        todoDiv.appendChild(li);
        const Delete = document.createElement("button");
        Delete.id = "delete";
        Delete.innerText = "delete";
        Delete.className = "delete";
        Delete.style.backgroundColor = 'red'
        todoDiv.appendChild(Delete);
        doneList.appendChild(todoDiv);  
    })
}
const removeTODO = (todo) => {
    let todos;
    if (localStorage.getItem('todos') === null) {
        todos = [];
    }
    else {
        todos = JSON.parse(localStorage.getItem('todos'))
    }
    console.log(todos.indexOf(todo.children[0].innerText))
    todos.splice(todos.indexOf(todo.children[0].innerText), 1);
    localStorage.setItem('todos', JSON.stringify(todos))
}
const removeDONES = (done) => {
    let dones;
    if (localStorage.getItem('dones') === null) {
        dones = [];
    }
    else {
        dones = JSON.parse(localStorage.getItem('dones'))
    }
    dones.splice(dones.indexOf(done.children[0].innerText), 1);
    localStorage.setItem('dones', JSON.stringify(dones))
}
const editTODO = (parent) => {
    document.getElementById("TODO").style.display = 'none';
    document.getElementById("EDIT").style.display = 'block';
    const input = document.getElementById("EditInput");
    let item = parent.children[0].innerText;
    input.value = item;
    let todos;
    if (localStorage.getItem('todos') === null) {
        todos = [];
    }
    else {
        todos = JSON.parse(localStorage.getItem('todos'))
    }
    console.log(todos[todos.indexOf(item)])
    document.getElementById("saveChages").addEventListener("click", () => {
        todos[todos.indexOf(item)] = input.value;
        console.log(todos[todos.indexOf(item)])
        localStorage.setItem('todos', JSON.stringify(todos))
        getTODO();
        document.getElementById("TODO").style.display = 'block';
        document.getElementById("EDIT").style.display = 'none';
    })
    


}
window.addEventListener("load", () => {
    getTODO()
    getDONE()
})