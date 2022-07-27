const getEle = ele => document.getElementById(ele);
const TODO = getEle("TODO");
const DONE = getEle("DONE");
let changeToDONE = () => {
        TODO.style.display = 'none';
        DONE.style.display = 'block';
}
let changeToTODO = () => {
    TODO.style.display = 'block';
    DONE.style.display = 'none'; 
}
getEle("todobtn").addEventListener("click", changeToTODO);
getEle("donebtn").addEventListener("click", changeToDONE);
