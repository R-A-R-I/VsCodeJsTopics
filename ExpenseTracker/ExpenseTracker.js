const addExpenseBtn = document.getElementById("AddExpenseButton");

//addExpenseBtn.setAttribute("style","color:white; background-color: green; border-radius:3px;");

const form1 = document.getElementById('TopForm');

const form2 = document.getElementById('BottomForms');

const nameInput = document.getElementById("ExpenseInputField");

const dateInput = document.getElementById("DateInputField");


const amountInput = document.getElementById("AmountInputField");

let removeplaceHolderNameCell = document.getElementById("placeHolderNameCell");

let removeplaceHolderDateCell = document.getElementById("placeHolderDateCell");

let removeplaceHolderAmountCell = document.getElementById("placeHolderAmountCell");

let removeplaceHolderRemoveCell = document.getElementById("placeHolderRemoveCell");

//let newExpense; 



if (document.getElementById('task') != null) {
    str = document.getElementById("ExpenseInputField").value;
}


addExpenseBtn.addEventListener("click",()=>{
    //removeplaceHolderNameCell.value ="";

    if(document.querySelector("#Outputln")!=null){
        document.getElementById("ExpenseTable").deleteRow(1);//Replaces that placeholder row
    }
    
    
    let nameInputValue = nameInput.value;
    //its important to have this here inside the this callback function
    let dateInputValue = dateInput.value;
    let amountInputValue = amountInput.value;




    if(nameInputValue==""){
    alert("Please enter the expense");  
    }

    if(amountInputValue==""){
    alert("Please enter an amount");
    }
    if(dateInputValue==""){
        alert("Please enter a date");
    }
    console.log(nameInputValue);
    let newExpense = document.createElement("tr"); // if the remove button(element correction) is placed outside of the eventlistener you will be deleting elements that come after 
    
    /*const expenseField = document.getElementById("Outputln");
    expenseField.append(newExpense);*/
    const nameCell = document.createElement("td");
    console.log(nameCell);
    nameCell.class = "colName";
    const dateCell = document.createElement("td");
    dateCell.class = "colDate";
    const amountCell = document.createElement("td");
    amountCell.class ="colAmount";
    const removeCell = document.createElement("td");

    const removeImg = document.createElement("img");

    removeImg.src ="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAA30lEQVRIS+2V4Q0CIQxG302gm+gIuokbqBM5gq5wGziKbmC+BBIS77hWUPwBv5s++mjLQKMzNOLSwT8z31X/leo1cAXOwH3hZgfgCOyBRy7W8saCbUIiJZyDC3oJsBHYlYLThKpiCp7GPAM0a8dSsS6eg7uhSmgFz8G3iV5TpVG/BzwFV+PpuKDeiuNlU7UfQWuB5xouO3klqqV3FbK74R7wVPemzeWCW8G5kbHM+Zt2C9gyp264BRxX5tLIVF+ZmtUbcDJ+EorTni7+JL7yVVpUd3AVA111FY2WJM1UvwDddEIfo/ojLgAAAABJRU5ErkJggg==";
    
    /*const dimRef = "20px"
    removeImg.width = dimRef;
    removeImg.height = dimRef;*/

    function delete_row(e) {
        e.remove();
    }

    const removebtn = document.createElement("button");
    removebtn.class = "remove";
    //removebtn.width ="4px";
    //removebtn.height ="4px";

    removebtn.append(removeImg);

    removebtn.addEventListener("click",()=>{
        delete_row(newExpense);
        //getElementById("ExpenseContainer") = null;
    });
    //,"#dateCell","#amountCell"));
    //console.log(nameCell);
    //console.log(querySelector("#nameCell"));
    //console.log(document.querySelector("#nameCell","#dateCell","#amountCell"));
    //document.querySelector("#nameCell","#dateCell","#amountCell") this gives a null because you cannot select the same same element twiice; it was selected already. Instead change the style for the element that has been made earlier as seen below
    const defaultwidth = document.getElementById("FirstHeadingColumn");

    
    
    /*nameCell.setAttribute("style","border: 1px solid #1a1414; border-collapse: collapse; text-align: center;table-layout: fixed;");
    nameCell.setAttribute("width",defaultwidth);
    dateCell.setAttribute("style","border: 1px solid #1a1414; border-collapse: collapse; text-align: center;table-layout: fixed;");
    dateCell.setAttribute("width",defaultwidth);
    amountCell.setAttribute("style","border: 1px solid #1a1414; border-collapse: collapse; text-align: center;table-layout: fixed;");
    amountCell.setAttribute("width",defaultwidth);*/

    function applyCSS(e){
            e.setAttribute("style","border: 1px solid #dbdbdb; border-collapse: collapse; text-align: left;table-layout: fixed; background-color: rgb(236, 235, 235); font-size: 13px; height: 30px; font-family: Segoe UI, Tahoma, Geneva, Verdana, sans-serif;");
          //  e.setAttribute("width",defaultwidth);
        }
    function setMaxHeight(h){
        h.setAttribute("style","max-height: 200px");
    }
    
    
    setMaxHeight(newExpense);

   

    nameCell.setAttribute("style","max-width:300px; word-wrap:break-word;");
    dateCell.setAttribute("style","max-width:130px");
    amountCell.setAttribute("style","max-width:170px; word-wrap:break-word;");
    //console.log(nameCell.getAttribute("width"));

    /*function setWidth(e,f,g){
        e.setAttribute("width","300px");
        f.setAttribute("width","130px");
        g.setAttribute("width","170px");
        setMaxHeight(e,f,g);
    }*/

     applyCSS(nameCell);

     /******************Removing sides from a border***************** */
    /*nameCell.setAttribute("style","border-right:none");
    dateCell.setAttribute("style","border-right:none; border-left:none;");
    amountCell.setAttribute("style","border-right:none; border-left:none;");*/

    applyCSS(dateCell);

    applyCSS(amountCell);
    
    removeCell.setAttribute("style","border: 1px solid #dbdbdb; border-collapse: collapse; text-align: center;table-layout: fixed; background-color: rgb(236, 235, 235);")
    
   // removeCell.setAttribute("style","border-left:none;");

    //setWidth(nameCell,dateCell,amountCell);

    let placeDollarquestmrk;

    console.log(amountInputValue);

    if(amountInputValue===""){
        placeDollarquestmrk = "";
    }else{
        placeDollarquestmrk = "$";
    }

    nameCell.append(nameInputValue);

    dateCell.append(dateInputValue);

    amountCell.append(placeDollarquestmrk + amountInputValue);

    removeCell.append(removebtn);

    removeCell.setAttribute("align","center");
    
    /*newExpense.appendChild(nameCell, dateCell,amountCell);*/
    newExpense.append(nameCell,dateCell,amountCell,removeCell); //Instead of appending one by one
   //newExpense.append(amountCell);

   const table = document.getElementById("ExpenseTable");

   table.append(newExpense);

    //document.getElementById('DateInputField').value=null;

    /*nameInputValue.reset();
    dateInputValue.reset();
    amountInputValue.reset();*/

    /*function clearfunctions(){
      nameInputValue = null;
    dateInputValue = null;
    amountInputValue = null;  
    }
    clearfunctions();*/
    document.getElementById("ExpenseInputField").value ="";
    document.getElementById("DateInputField").value ="";
    document.getElementById("AmountInputField").value ="";

    console.log(dateCell);
})