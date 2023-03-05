
//Notics how all of the getElementsbyIds are outside of addEventListeners
const inputI = document.getElementById("noteI");
const AddNoteBtn = document.getElementById("AddNotebtn");
const detailModal = document.getElementById("detailModal");
const detailModalBody = document.getElementById("detailModalBody");
const optionsModal = document.getElementById("optionsModal");
let detailModalContent = document.getElementById("detailModalContent");
const outSide_modal = document.getElementById("outSide_modal");
const sectionContainer = document.getElementById("sectionContainer");
const leaveModalBtn = document.getElementById("leaveModalBtn");
const fillerStatement = document.getElementById("fillerStatement");
var noteNumCount = 0;

//foreach (const)

if(sectionContainer.innerHTML!=null){
    fillerStatement.remove();
}
AddNoteBtn.addEventListener("click",()=>{//remember this is a function and a function just provides way to repeat behaviour without retyping the instructions for the behavious over and over.
    /*console.log(detailModalContent.innerText);
    if(detailModalContent.innerText!=null){
        detailModalContent.innerText=null;
        console.log(detailModalContent.innerText);
    }*/
    
    noteNumCount++;
    const noteIvalue = inputI.value;
    //console.log(noteIvalue);
    if(noteIvalue===""){
        alert("Please enter a note");
    }
    
    //document.body.append(sectionContainer);
    const contentWrapper = document.createElement("div");
    contentWrapper.id= "contentWrapper";
    
    const newNote = document.createElement("section");
    //this is important because the body need to append any elemnt inside of it
    sectionContainer.append(newNote);
    
    const noteNum = document.createElement("p");
    noteNum.innerText ="Note " +noteNumCount;
    noteNum.id="noteNum";

    newNote.append(noteNum);
    newNote.append(contentWrapper);
    const newNoteContent = document.createElement("p");
    newNoteContent.id="noteBody";
    
    newNoteContent.append(noteIvalue);
    contentWrapper.append(newNoteContent);

    const viewDetailBtnBox = document.createElement("div");
    viewDetailBtnBox.id="viewDetailBtnBox";


    const viewDetailBtn = document.createElement("button");
    viewDetailBtn.innerText="View in detail";
    viewDetailBtn.id ="viewDetailBtn";

    viewDetailBtnBox.append(viewDetailBtn);

    newNote.append(viewDetailBtnBox); 
    

    detailModalContent.append(noteIvalue);//by having this here and not inside the event listener you will not get a chain of the same value because the instruction does not take place each time the view button is clicked


    viewDetailBtn.addEventListener("click",()=>{
        detailModal.style.display="block";
        outSide_modal.style.display="block";
        
        //detailModalContent.append(noteIvalue); Not recommended to have this in this addeventlistener
        //One element cannot be appended more than once. If attempted the parent to last append the child will remove the child from the previous parent


        outSide_modal.addEventListener("click",()=>{
            detailModal.style.display="none";
            outSide_modal.style.display="none";
        }) 

        leaveModalBtn.addEventListener("click",()=>{
            detailModal.style.display="none";
            outSide_modal.style.display="none";
        })
        
    })

    //newNote.append(viewDetailBtn);
    
    

    /*if(event.target =="outSide_modal"){
        detailModal.style.display="none";
        outSide_modal.style.display="none";
    }*/


    /*const optionBtn =document.createElement("button");
    optionBtn.class="btnLook";
    optionBtn.id="optionBtn";
    const optionBtnImg = document.createElement("img");
    optionBtnImg.setAttribute("src","data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAAgElEQVRIS+2WQQqAMAwEpy/Tn6k/059JDoII0rhgc0gCvZTQaZahtBFULYhLgYclr0S9Asvjhhtg++4qsCeqfFF7Uun2KHJ1D/U0KOAZmB6HH8DuAV49CjifXPkmNrls3cvE+l2uL/K+9ipWh4HzyVUTm2xDvj5hVhdYSiDs5ToBUlQgHzKDlPoAAAAASUVORK5CYII=");
    
    optionBtn.append(optionBtnImg);

    noteNum.append(optionBtn);

    optionBtn.addEventListener("click",()=>{
        optionsModal.style.display="block";
    })*/

    inputI.value="";
})





