let ListToDo = [{Name1: '', Date1:''}];
function Webdisplay(){
    let String1='';
    for(let i=0; i<ListToDo.length;i++){
        const todo=ListToDo[i];
        console.log(todo);
        if(todo.Name1 !== '' && todo.Date1 !== ''){
        const htML=`
        <div>${i}.${todo.Name1}</div>
        <div>${todo.Date1}</div>
        <button onclick="
        ListToDo.splice(${i},1)
        Webdisplay();" class="Delete-button">Delet</button>
        `;
       String1+=htML;
        }
    }
    console.log(String1);
    document.querySelector('.PrintList').innerHTML=String1;
}
    function UpdateList(){
        var name= document.querySelector('.AddList');
        let UpdateName=name.value;
        var Date= document.querySelector('.dateList');
        let UpdateDate= Date.value;
        if(UpdateDate !== '' && UpdateName !== ""){
        ListToDo.push({Name1:UpdateName, Date1:UpdateDate});
        console.log(ListToDo);
        }
        name.value='';
        Date.value='';
        Webdisplay();
         }