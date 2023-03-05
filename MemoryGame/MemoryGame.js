/*const card = document.querySelectorAll(".card");*/
const playButton = document.getElementById("playButton");


/*function flippAlert(){
 alert("flip");   
}
playButton.addEventListener("click",()=>{
    setTimeout(flippAlert,5000);//If you put flippAlert() its going to call the function overriding the setTimeout. Instead the reference was used.
})*/

//const cardImg = ["img0_A","img1_A","img2_A","img3_A","img4_A","img5_A","img6_A","img7_A","img8_A"];



let cardImg = ["Mustang-Mach-1_memgame.png","2022_kia_carnival_memgame.png","BMW_memgame.png","civic_memgame.png","ghini_memgame.png","gwagon_memgame.png","Koenigsegg-Gemera-1_memgame.png","Roadster_memgame.png","porsche_memgame.png"];// it was of type const before for good code practise until I need to change it

let stackOfCards_Analogy ={
"card0_A":"Mustang-Mach-1_memgame.png",
"card1_A":"2022_kia_carnival_memgame.png",
"card2_A":"BMW_memgame.png",
"card3_A":"civic_memgame.png",
"card4_A":"ghini_memgame.png",
"card5_A":"gwagon_memgame.png",
"card6_A":"Koenigsegg-Gemera-1_memgame.png",
"card7_A":"Roadster_memgame.png",
"card8_A":"porsche_memgame.png"
}/**/



let unpackedGroups = rollForWinningCard();

let winningImgIndex = randomize(9);

if(winningImgIndex===0) console.log("winning image:"+cardImg[0]);
if(winningImgIndex===1) console.log("winning image:"+cardImg[1]);
if(winningImgIndex===2) console.log("winning image:"+cardImg[2]);
if(winningImgIndex===3) console.log("winning image:"+cardImg[3]);
if(winningImgIndex===4) console.log("winning image:"+cardImg[4]);
if(winningImgIndex===5) console.log("winning image:"+cardImg[5]);
if(winningImgIndex===6) console.log("winning image:"+cardImg[6]);
if(winningImgIndex===7) console.log("winning image:"+cardImg[7]);
if(winningImgIndex===8) console.log("winning image:"+cardImg[8]);


console.log("winning index "+winningImgIndex);

//console.log("winning image:"+cardImg[winningImgIndex]);

//var ImgIndexForNonWinningCards = winningImgIndex;
const ImgIndexForAllOther =[] //change to const because the address won't change but what you store at the memory address can change;

//genPossImgNum(winningImgIndex,ImgIndexForAllOther);

genPossImgNum(winningImgIndex);

//console.log("New Image for non winning is "+ genPossImgNum(winningImgIndex,ImgIndexForAllOther));

//genNonViolatingCombo(genPossImgNum(winningImgIndex,ImgIndexForAllOther));
//genNonViolatingCombo();

let CounterThresholdPass = genNonViolatingCombo(/*9,genPossImgNum(winningImgIndex,ImgIndexForAllOther)*/);


genPerf_NonWinC(CounterThresholdPass);


assignCombo(unpackedGroups[1],unpackedGroups[2]);

/*console.log(unpackedGroups[1]);
console.log(unpackedGroups[2]);*/



    const img1 = document.createElement("img");
    if(unpackedGroups[0].includes(0)){
        img1.src = unpackedGroups[1]["card0_A"];
    }else{
        img1.src = unpackedGroups[2]["card0_A"];
    }
    //img1.src = "Mustang-Mach-1_memgame.png";
    img1.class= "imgaa";
    img1.id= "img1";
    img1Src=img1.src

    const img2= document.createElement("img");
    if(unpackedGroups[0].includes(1)){
        img2.src = unpackedGroups[1]["card1_A"];
    }else{
        img2.src = unpackedGroups[2]["card1_A"];
    }
    //img2.src = "2022_kia_carnival_memgame.png";
    img2.class= "imgaa";
    img2Src=img2.src

    const img3= document.createElement("img");
    if(unpackedGroups[0].includes(2)){
        img3.src = unpackedGroups[1]["card2_A"];
    }else{
        img3.src = unpackedGroups[2]["card2_A"];
    }
    //img3.src = "BMW_memgame.png";
    img3.class= "imgaa";
    img3Src=img3.src

    const img4= document.createElement("img");
    if(unpackedGroups[0].includes(3)){
        img4.src = unpackedGroups[1]["card3_A"];
    }else{
        img4.src = unpackedGroups[2]["card3_A"];
    }
    //img4.src = "civic_memgame.png";
    img4.class= "imgaa";
    img4Src=img4.src

    const img5= document.createElement("img");
    if(unpackedGroups[0].includes(4)){
        img5.src = unpackedGroups[1]["card4_A"];
    }else{
        img5.src = unpackedGroups[2]["card4_A"];
    }
    //img5.src = "ghini_memgame.png";
    img5.class= "imgaa";
    img5Src=img5.src

    const img6= document.createElement("img");
    if(unpackedGroups[0].includes(5)){
        img6.src = unpackedGroups[1]["card5_A"];
    }else{
        img6.src = unpackedGroups[2]["card5_A"];
    }
    //img6.src = "gwagon_memgame.png";
    img6.class= "imgaa";
    img6Src =img6.src

    const img7= document.createElement("img");
    if(unpackedGroups[0].includes(6)){
        img7.src = unpackedGroups[1]["card6_A"];
    }else{
        img7.src = unpackedGroups[2]["card6_A"];
    }
    //img7.src = "Koenigsegg-Gemera-1_memgame.png";
    img7.class= "imgaa";
    img7Src = img7.src

    const img8= document.createElement("img");
    if(unpackedGroups[0].includes(7)){
        img8.src = unpackedGroups[1]["card7_A"];
    }else{
        img8.src = unpackedGroups[2]["card7_A"];
    }
    //img8.src = "Roadster_memgame.png";
    img8.class= "imgaa";
    img8Src = img8.src

    const img9= document.createElement("img");
    if(unpackedGroups[0].includes(8)){
        img9.src = unpackedGroups[1]["card8_A"];
    }else{
        img9.src = unpackedGroups[2]["card8_A"];
    }
    //img9.src = "porsche_memgame.png";
    img9.class= "imgaa";
    img9Src = img9.src

    let imgArr =[img1,img2,img3,img4,img5,img6,img7,img8,img9];

    let imgSrc = [img1Src, img2Src, img3Src, img4Src, img5Src, img6Src, img7Src, img8Src, img9Src];
//document.body.append(imgArr[0]);

const backSide =document.getElementsByClassName("backSide");

const card = document.querySelectorAll(".card");

const innerCard = document.querySelectorAll(".innerCard");

const scoreText = document.getElementById("scoreText");

const passedAttempts = document.getElementById("passedAttempts");

let imgPos =0; //You dont want this in the for each function because it is going set impPos to 0 everytime a new loop is executed which defeats the purpose of incrementing
let score=0;

let failedAttempts =0;
//let seriesOfEvents=null;


//function seriesOfEvents(){



let clicked;

const listenerfunc = ()=>{

    cardImg = ["Mustang-Mach-1_memgame.png","2022_kia_carnival_memgame.png","BMW_memgame.png","civic_memgame.png","ghini_memgame.png","gwagon_memgame.png","Koenigsegg-Gemera-1_memgame.png","Roadster_memgame.png","porsche_memgame.png"];

    stackOfCards_Analogy ={
        "card0_A":"Mustang-Mach-1_memgame.png",
        "card1_A":"2022_kia_carnival_memgame.png",
        "card2_A":"BMW_memgame.png",
        "card3_A":"civic_memgame.png",
        "card4_A":"ghini_memgame.png",
        "card5_A":"gwagon_memgame.png",
        "card6_A":"Koenigsegg-Gemera-1_memgame.png",
        "card7_A":"Roadster_memgame.png",
        "card8_A":"porsche_memgame.png"
        }/**/

        unpackedGroups = rollForWinningCard();

        winningImgIndex = randomize(9);
        genPossImgNum(winningImgIndex);

        CounterThresholdPass = genNonViolatingCombo();

        genPerf_NonWinC(CounterThresholdPass);

        assignCombo(unpackedGroups[1],unpackedGroups[2]);

        if(unpackedGroups[0].includes(0)){
            img1.src = unpackedGroups[1]["card0_A"];
        }else{
            img1.src = unpackedGroups[2]["card0_A"];
        }

        if(unpackedGroups[0].includes(1)){
            img2.src = unpackedGroups[1]["card1_A"];
        }else{
            img2.src = unpackedGroups[2]["card1_A"];
        }

        if(unpackedGroups[0].includes(2)){
            img3.src = unpackedGroups[1]["card2_A"];
        }else{
            img3.src = unpackedGroups[2]["card2_A"];
        }

        if(unpackedGroups[0].includes(3)){
            img4.src = unpackedGroups[1]["card3_A"];
        }else{
            img4.src = unpackedGroups[2]["card3_A"];
        }

        if(unpackedGroups[0].includes(4)){
            img5.src = unpackedGroups[1]["card4_A"];
        }else{
            img5.src = unpackedGroups[2]["card4_A"];
        }

        if(unpackedGroups[0].includes(5)){
            img6.src = unpackedGroups[1]["card5_A"];
        }else{
            img6.src = unpackedGroups[2]["card5_A"];
        }

        if(unpackedGroups[0].includes(6)){
            img7.src = unpackedGroups[1]["card6_A"];
        }else{
            img7.src = unpackedGroups[2]["card6_A"];
        }

        if(unpackedGroups[0].includes(7)){
            img8.src = unpackedGroups[1]["card7_A"];
        }else{
            img8.src = unpackedGroups[2]["card7_A"];
        }

        if(unpackedGroups[0].includes(8)){
            img9.src = unpackedGroups[1]["card8_A"];
        }else{
            img9.src = unpackedGroups[2]["card8_A"];
        }

        let target1_rptCnt =0;
        let target2_rptCnt =0;
        let target3_rptCnt=0;
        let target4_rptCnt=0;
        let target5_rptCnt=0;
        let target6_rptCnt=0;
        let target7_rptCnt=0;
        let target8_rptCnt=0;
        let target9_rptCnt=0;
        
    flipReset();
        //seriesOfEvents=null;

        //seriesOfEvents();
        
        //function seriesOfEvents(){
            setTimeout(()=>{
                            const instructions=confirm("Choose the positions where a card repeats 3 times");//This returns true or false
                            if(instructions==true){
                                setTimeout(()=>{

                            let cardImgCount_1 =0;
                            let cardImgCount_2 =0;
                            let cardImgCount_3 =0;
                            let cardImgCount_4 =0;
                            let cardImgCount_5 =0;
                            let cardImgCount_6 =0;
                            let cardImgCount_7 =0;
                            let cardImgCount_8 =0;
                            let cardImgCount_9 =0;

                                    clicked=0;

                                    innerCard.forEach((node,index) => { //note how the innerCard variable is placed as the function name. You have to think about the for loop executing these blocks at the speed of light because a computer is afterall a result of electrons in different state. With that said you wouldn't be able to percieve that loop by loop action being carrried out.
                                    
                                    //backSide.append(imgArr[imgPos]);
                                    
                                    /* backSide[imgPos].append(imgArr[imgPos]);//A bracket notation, ie an array was used because of the backside variable is a combination of many nodes*/

                                    node.querySelector(".backSide").append(imgArr[index]);

                                    node.classList.toggle("isflipped");/* I guess you don't have to put dot because its already identifying as a class. What this does is switch a class on or off. Whatever class is true the properties of that class will be used*/
                                    setTimeout(() => {//You really have to think about the order inwhich you want the instructions to be carried out to understand this.

                                    node.classList.toggle("isflipped");
                                            
                                            }, 5000);/**/
                                    });/**/ 
                                    

                                    setTimeout(() => {

                                                let pickCard_img;
    
                                                document.addEventListener("click", function activity_touchcard(e){// It's not recommended to have an addEventListener in a loop.
                                                //this went hand in hand with the css property pointer-event
                                                //e (event) object is different from the document the eventlistener was added to
                                                    console.log(e.target);
                                                    //console.log(e.currentTarget);
                                                    if(e.target === innerCard[0]){
                                                        target1_rptCnt++;
                                                        console.log(target1_rptCnt)
                                                    }else if(e.target === innerCard[1]){
                                                        target2_rptCnt++;
                                                        console.log(target2_rptCnt)

                                                    }else if(e.target === innerCard[2]){
                                                        target3_rptCnt++;
                                                        console.log(target3_rptCnt)

                                                    }else if(e.target === innerCard[3]){
                                                        target4_rptCnt++;
                                                        console.log(target4_rptCnt)

                                                    }else if(e.target === innerCard[4]){
                                                        target5_rptCnt++;
                                                        console.log(target5_rptCnt)

                                                    }else if(e.target === innerCard[5]){
                                                        target6_rptCnt++;
                                                        console.log(target6_rptCnt)

                                                    }else if(e.target === innerCard[6]){
                                                        target7_rptCnt++;
                                                        console.log(target7_rptCnt)

                                                    }else if(e.target === innerCard[7]){
                                                        target8_rptCnt++;
                                                        console.log(target8_rptCnt)

                                                    }else if(e.target === innerCard[8]){
                                                        target9_rptCnt++;
                                                        console.log(target9_rptCnt)

                                                    }
                                                    
                                                    if(e.target.closest(".innerCard")){//closest is used instead of match because there is are nested elements in .innerCard element
                                                        
                                                        //These are to enusre each card is not processed more the one time 
                                                        if(e.target ===innerCard[0] && target1_rptCnt>1)return 
                                                        if(e.target ===innerCard[1] && target2_rptCnt>1)return
                                                        if(e.target ===innerCard[2] && target3_rptCnt>1)return
                                                        if(e.target ===innerCard[3] && target4_rptCnt>1)return
                                                        if(e.target ===innerCard[4] && target5_rptCnt>1)return
                                                        if(e.target ===innerCard[5] && target6_rptCnt>1)return
                                                        if(e.target ===innerCard[6] && target7_rptCnt>1)return
                                                        if(e.target ===innerCard[7] && target8_rptCnt>1)return
                                                        if(e.target ===innerCard[8] && target9_rptCnt>1)return

                                                    clicked++;

                                                    console.log(clicked);

                                                      console.log(e.target.classList.toggle("isflipped")); 
                                                     
                                                        
                                                    //console.log(e.target.classList.toggle("isflipped"));

                                                    pickCard_img =  e.target.querySelector(".backSide").lastChild.getAttribute("src"); /*imgArr[index].getAttribute("src");*/
                                                //console.log(node);
    
                                                    console.log(pickCard_img);
    
                                                //console.log(index);
    
                                                    if(pickCard_img==="Mustang-Mach-1_memgame.png"){ cardImgCount_1++;
                                                    console.log(cardImgCount_1);
                                                    }//remember to have the correct amount of equal operator
    
                                                    if(pickCard_img==="2022_kia_carnival_memgame.png"){ cardImgCount_2++;
                                                    console.log(cardImgCount_2);
                                                    }
    
                                                    if(pickCard_img==="BMW_memgame.png"){ cardImgCount_3++;
                                                    console.log(cardImgCount_3);
                                                    }
    
                                                    if(pickCard_img==="civic_memgame.png"){ cardImgCount_4++;
                                                    console.log(cardImgCount_4);
                                                    }
    
                                                    if(pickCard_img==="ghini_memgame.png"){cardImgCount_5++;
                                                    console.log(cardImgCount_5);
                                                    } 
    
                                                    if(pickCard_img==="gwagon_memgame.png"){cardImgCount_6++;
                                                    console.log(cardImgCount_6);
                                                    }
    
                                                    if(pickCard_img==="Koenigsegg-Gemera-1_memgame.png"){cardImgCount_7++;
                                                    console.log(cardImgCount_7);
                                                    }
    
                                                    if(pickCard_img==="Roadster_memgame.png"){cardImgCount_8++;
                                                    console.log(cardImgCount_8);
                                                    }
    
                                                    if(pickCard_img==="porsche_memgame.png"){ cardImgCount_9++;
                                                    console.log(cardImgCount_9);
                                                    }
                                                                                                
                                                    console.log(`click number: ${clicked}`);
    
                                                    if(cardImgCount_1>2||cardImgCount_2>2||cardImgCount_3>2||cardImgCount_4>2||cardImgCount_5>2||cardImgCount_6>2||cardImgCount_7>2||cardImgCount_8>2||cardImgCount_9>2){
    
                                                    score+=10;
                                                    console.log(score);

                                                    

                                                    document.removeEventListener("click",activity_touchcard);
                                                    //Notice how the function has no parantheses. This is because you don't want to call the fucntion but reference it.
    
                                                    setTimeout(() => {alert("You won");
                                                
                                                    scoreText.innerText = "Score: " + score;
                                                
                                                    }, 2000);
    
                                                    }else if(clicked==3){
                                                        
                                                        failedAttempts++;

                                                        
                                                
                                                        document.removeEventListener("click",activity_touchcard);//You need to have a common function in the add event listener and remove hence the activity_touchcard function name
                                                        setTimeout(() => {alert("End of game");
                                                        passedAttempts.innerText = "Failed Attempt: "+failedAttempts;

                                                        }, 2000);
    
                                                        }
                                                  }
                                                },/*{once:true}*/)
            
                                                //node.addEventListener("click",function activity_touchcard(){//this will be a call back function so it will automatically take the event of the addeventlistener as a parameter and also the index in this case. Check the docs for morre information
        
                                                
                                                        
                                                
                                                    }, 12000);        
                                      
                                    //imgPos++;

                                },5000);

                                }
                            

                        }, 5000);
        //}
    }

const flipReset = ()=>{
    innerCard.forEach(innerCard=>{
        if(innerCard.classList.contains("isflipped")===true){//Checks if the isflipped class was added to the classlist of innercard element. Read docs to understand toggle. 
            innerCard.classList.toggle("isflipped");
        }
    })
}


scoreText.append(score);

passedAttempts.append(failedAttempts);
//}

//playButton.addEventListener("click",listenerfunc); 


document.addEventListener("click", e => {
    
    if(e.target.matches("button"))listenerfunc()
    
})


  

/*function userCardPick_img(){
    let currentImg =imgSrc[imgPos];
    return currentImg;
}
/*const card1 = "img1";
const card1 = "img2";
const card1 = "img3";
const card1 = "img4";
const card1 = "img5";
const card1 = "img6";
const card1 = "img7";
const card1 = "img8";
const card1 = "img9";*/







/*let stackOfCards = 
[{"card0":"filler0"},
{"card1":"filler1"},
{"card2":"filler2"},
{"card3":"filler3"},
{"card4":"filler4"},
{"card5":"filler5"},
{"card6":"filler6"},
{"card7":"filler7"},
{"card8":"filler8"}]*/
//console.log(Object.keys(stackOfCards)[0]);
//console.log(Object.entries(stackOfCards)[0]);




//console.log(cardImg[0]);

function randomize(num){
    return Math.floor(Math.random()*num); // rmbr we use return so that the function it self gives a value

}
function rollForWinningCard(){
    var winningCardIdOne = 0;
    var winningCardIdTwo = 0;
    var winningCardIdThree = 0;
    var winngCardIds = [];

     winningCardIdOne = randomize(9);
     winngCardIds.push(winningCardIdOne);
    const cardPickOne= console.log("card"+winningCardIdOne);

    winningCardIdTwo=randomize(9);
    while(winningCardIdTwo===winningCardIdOne){
         winningCardIdTwo=randomize(9);
    }
    const cardPickTwo= console.log("card"+winningCardIdTwo);
    winngCardIds.push(winningCardIdTwo);

    winningCardIdThree=randomize(9);
    while(winningCardIdThree===winningCardIdOne || winningCardIdThree===winningCardIdTwo){
         winningCardIdThree=randomize(9);
    }
    const cardPickThree= console.log("card"+winningCardIdThree);
    winngCardIds.push(winningCardIdThree);
    
    console.log(winngCardIds);
    
    

    const specialGroup_card =[];

    if(winngCardIds.includes(0)) {
        specialGroup_card.push("card0_A");
        }
     if(winngCardIds.includes(1)) {
         specialGroup_card.push("card1_A");
        }
     if(winngCardIds.includes(2)) {
         specialGroup_card.push("card2_A");
        }
     if(winngCardIds.includes(3)) {
         specialGroup_card.push("card3_A");
        }
     if(winngCardIds.includes(4)) {
         specialGroup_card.push("card4_A");
        }
    if(winngCardIds.includes(5)) {
        specialGroup_card.push("card5_A");
        }
    if(winngCardIds.includes(6)) {
        specialGroup_card.push("card6_A");
        }
     if(winngCardIds.includes(7)) {
         specialGroup_card.push("card7_A");
        }
     if(winngCardIds.includes(8)) {

         specialGroup_card.push("card8_A");
        }
    //If your string values have numbers and they are to match with index number ensure that they start form zero

     //if(winngCardIds.includes(8)) specialGroup.stackOfCards["card9"];
     

    /*const removedProp1 = postRemoved_1;
    //const removedProp1_key = Object.key(removedProp1);
    console.log(specialGroup);
    const removedProp2 = postRemoved_2;
    const removedProp2_key = Object.key(removedProp2);
    const removedProp3 =postRemoved_3;
    const removedProp3_key = Object.key(removedProp3);*/

    //const removeProp3 =Object.key(specialGroup)[2]; You cannot set the variable to a key apparently
    const removedProp1 = specialGroup_card[0];
    const removedProp2 = specialGroup_card[1];
    const removedProp3 = specialGroup_card[2];


     const {[removedProp1]:removedProp1_value,[removedProp2]:removedProp2_value,[removedProp3]:removedProp3_value,...rest} = stackOfCards_Analogy; // You have to put the variable declared outside the object in square brackets along with a colon and value. The statement has no square brackets because the variable contains an array already

     const specialGroup_obj ={}

     specialGroup_obj[removedProp1]=removedProp1_value;

     specialGroup_obj[removedProp2]=removedProp2_value;

     specialGroup_obj[removedProp3]=removedProp3_value;


    /*Useable***if(winngCardIds.includes(0)) delete stackOfCards["card1"];
     if(winngCardIds.includes(1)) delete stackOfCards["card2"];//when stack of cards was an object
     if(winngCardIds.includes(2)) delete stackOfCards["card3"];
     if(winngCardIds.includes(3)) delete stackOfCards["card4"];
     if(winngCardIds.includes(4)) delete stackOfCards["card5"];
    if(winngCardIds.includes(5)) delete stackOfCards["card6"];
    if(winngCardIds.includes(6)) delete stackOfCards["card7"];
     if(winngCardIds.includes(7)) delete stackOfCards["card8"];
     if(winngCardIds.includes(8)) delete stackOfCards["card9"];*Useable*/
    
    /*switch(winngCardIds){ // using array in switch is not recommended
        case includes(0):
            delete stackOfCards["card1"];
            break;
        case includes(1):
            delete stackOfCards["card2"]
            break;
        case includes(2):
            delete stackOfCards["card3"];
            break;
        case includes(3):
            delete stackOfCards["card4"];
            break;
        case includes(4):
            delete stackOfCards["card5"];
            break;
        case includes(5):
            delete stackOfCards["card6"];
            break;
        case includes(6):
            delete stackOfCards["card7"];
            break;
        case includes(7):
            delete stackOfCards["card8"];
            break;
        default:
            delete stackOfCards["card9"];
            
    }*/
   const outCastGroup = rest;
   //console.log(outCastGroup);

   return [winngCardIds,specialGroup_obj,outCastGroup];
    
}

//const screenOutcastGroup = rollForWinningCard()[1]; //Picks 3 winning cards. It also runs the function once and returns two objects. This line of code works

//const screenOutcastGroup = rollForWinningCard(); DECLARED AT THE BEGINNING OF THE CODE

/*for (const [key, value] of Object.entries(unpackedGroups[2])) {
    console.log(`${key}: ${value}`);
  }*/

/*t*var winningImgIndex = randomize(9);


console.log("winning image:"+cardImg[winningImgIndex]);

//var ImgIndexForNonWinningCards = winningImgIndex;
var ImgIndexForAllOther =[];

function genPossImgNum(ImgIndexAvoid){// Picks numbers other than the one for winning image
    
    
     /***********ImgIndexAvoid = winningImgIndex;*********/
     //console.log(ImgIndexAvoid);

    /*t* var ImgIndexForNonWinningCards = ImgIndexAvoid;

   while(ImgIndexForNonWinningCards === ImgIndexAvoid ){
    if(ImgIndexForNonWinningCards!==ImgIndexAvoid) break;
    ImgIndexAvoid  = randomize(9);
    //console.log("result for try up to winning "+ ImgIndexAvoid);
    } 
    var newImgIndex = ImgIndexAvoid;
    console.log("New Image for non winning is "+newImgIndex);
    ImgIndexForAllOther.push(newImgIndex);
     
    /*If else may not be the best because it stops once it finds one that is true*/
/*t*}

/**********Try to write better function, ones that are independent of each other */
/*t*var counterThreshold;
function genNonViolatingCombo(){
    Array.from({length: 9}, () => genPossImgNum(winningImgIndex));//repeats genNewNum

    console.log(ImgIndexForAllOther);

    var zeroCntr =0;
    var oneCntr = 0;
    var twoCntr = 0;
    var threeCntr = 0;
    var fourCntr = 0;
    var fiveCntr = 0;
    var sixCntr = 0;
    var sevenCntr = 0;
    var eightCntr = 0;
    //Once these were placed here it started to count the numbers properly

    for(var l of ImgIndexForAllOther){

        if(l === 0)zeroCntr++; 
        if(l===1)oneCntr++;
        if(l===2)twoCntr++;
        if(l===3)threeCntr++;
        if(l===4)fourCntr++;
        if(l===5)fiveCntr++;
        if(l===6)sixCntr++;
        if(l===7)sevenCntr++;
        if(l===8)eightCntr++
        /*
        if(ImgIndexForAllOther.includes(0)) zeroCntr++;  // use for instead
     if(ImgIndexForAllOther.includes(1)) oneCntr++;
     if(ImgIndexForAllOther.includes(2)) twoCntr++;
     if(ImgIndexForAllOther.includes(3)) threeCntr++;
     if(ImgIndexForAllOther.includes(4)) fourCntr++;
     if(ImgIndexForAllOther.includes(5)) fiveCntr++;
     if(ImgIndexForAllOther.includes(6)) sixCntr++;
     if(ImgIndexForAllOther.includes(7)) sevenCntr++;
     if(ImgIndexForAllOther.includes(8)) eightCntr++*/
    /*t*}
    

    //console.log("zeroCntr: "+zeroCntr+" oneCntr: "+oneCntr+" twoCntr: "+twoCntr+" threeCntr: "+threeCntr+" fourCntr: "+fourCntr+" fiveCntr "+fiveCntr+" sixCntr: "+sixCntr+" sevenCntr: "+sevenCntr+" eightCntr: "+eightCntr);

    if(zeroCntr>2|| oneCntr>2 ||twoCntr>2||threeCntr>2||fourCntr>2||fiveCntr>2||sixCntr>2||sevenCntr>2||eightCntr>2){
     counterThreshold=true;   
    }else{
        counterThreshold=false;
    }
       /* switch(ImgIndexForAllOther){
            case includes(1):
                oneCntr++;
                break;
            case includes(2):
                twoCntr++;
                break;
            case includes(3):
                threeCntr++;
                break;
            case includes(4):
                fourCntr++;
                break;
            case includes(5):
                fiveCntr++;
                break;
            case includes(6):
                sixCntr++;
                break;
            case includes(7):
                sevenCntr++;
                break;
            case includes(8):
                eightCntr++;
                break;
            default:
                nineCntr++;
        }*/
/*t*}
genNonViolatingCombo();

while(counterThreshold===true){
    ImgIndexForAllOther=[];

    genNonViolatingCombo();
}

/*while(oneCntr ===3 || twoCntr ===3 ||threeCntr ===3||fourCntr ===3||fiveCntr ===3||sixCntr ===3||sevenCntr ===3||eightCntr ===3 ||nineCntr ===3){
    
   /*for(let o of stackOfCards){
    var myNewNum = genNewNum();
    stackOfCards.o = cardImg[myNewNum];
    }*/
//}
/*t*console.log(ImgIndexForAllOther)
var index =0;
for(let o in stackOfCards){

    //console.log(o);
    var ImgIndexForAllOther_cycleNum =ImgIndexForAllOther[index];
    console.log(ImgIndexForAllOther_cycleNum);
    if(ImgIndexForAllOther_cycleNum===0) stackOfCards[o]="img0";
    if(ImgIndexForAllOther_cycleNum===1) stackOfCards[o]="img1";
    if(ImgIndexForAllOther_cycleNum===2) stackOfCards[o]="img2";
    if(ImgIndexForAllOther_cycleNum===3) stackOfCards[o]="img3";
    if(ImgIndexForAllOther_cycleNum===4) stackOfCards[o]="img4";
    if(ImgIndexForAllOther_cycleNum===5) stackOfCards[o]="img5";
    if(ImgIndexForAllOther_cycleNum===6) stackOfCards[o]="img6";
    if(ImgIndexForAllOther_cycleNum===7) stackOfCards[o]="img7";
    if(ImgIndexForAllOther_cycleNum===8) stackOfCards[o]="img8";

    //
    index++;
  //console.log(o +":"+ o.value);
    }
//console.log(stackOfCards["card1"]);
//console.log(stackOfCards.card1);
console.log(stackOfCards);


//randomize(); //Notice how this does not display to the screen with just return



/*randomArrayValue =()=>{
     let randomNum = randomize(9);
    return cardImg[randomNum];
}
var matchingValue = randomArrayValue();

for( let i in stackOfCards){
    console.log(i);
    //cardValue = ;
    let headOrTail = randomize(2);// flip head or tail. 0 is head 1 is tail
    //(headOrTail ===0)? stackOfCards[i] = matchingValue : // if statement
    if(headOrTail===0){
        stackOfCards[i] = matchingValue;
        var zeroCounter = 0;
        zeroCounter++;
        var marked = true;
    }
    if(zeroCounter===3 && marked === true){
        continue;
    }

    /*****Have to flip the deck */
    //console.log(stackOfCards[i]= randomArrayValue());// i alone give property name
//}







function genPossImgNum(ImgIndexAvoid/*, array*/){// Picks a numbers other than the one for winning image

    let ImgIndexForNonWinningCards = ImgIndexAvoid;

    
   while(ImgIndexForNonWinningCards === ImgIndexAvoid ){
       if(ImgIndexForNonWinningCards!==ImgIndexAvoid) break;
       ImgIndexForNonWinningCards  = randomize(9);
    } 

    let newImgIndex = ImgIndexForNonWinningCards;
    console.log("New Image for non winning is "+newImgIndex);
    //array.push(newImgIndex);
     
    return newImgIndex;
}

/*function AddNum_Array(){
    
}

function clickage(){
    console.log("click");
}*/

function pushFuncValue(func){
    ImgIndexForAllOther.push(func); // adds function to array
}

function genNonViolatingCombo(){ //repeats function and tells whether it has exceeded the threshold

    ImgIndexForAllOther.length=0;

    for(let i=0; i<9; i++){
        pushFuncValue(genPossImgNum(winningImgIndex/*,ImgIndexForAllOther*/));
    }
    //Array.from({length:9}, () => funct);

    //console.log(ImgIndexForAllOther);

    let zeroCntr =0;
    let oneCntr = 0;
    let twoCntr = 0;
    let threeCntr = 0;
    let fourCntr = 0;
    let fiveCntr = 0;
    let sixCntr = 0;
    let sevenCntr = 0;
    let eightCntr = 0;
    

    for(let l of ImgIndexForAllOther){

        if(l === 0)zeroCntr++; 
        if(l===1)oneCntr++;
        if(l===2)twoCntr++;
        if(l===3)threeCntr++;
        if(l===4)fourCntr++;
        if(l===5)fiveCntr++;
        if(l===6)sixCntr++;
        if(l===7)sevenCntr++;
        if(l===8)eightCntr++
     
    }
    let counterThresholdBool = null;

    if(zeroCntr>2|| oneCntr>2 ||twoCntr>2||threeCntr>2||fourCntr>2||fiveCntr>2||sixCntr>2||sevenCntr>2||eightCntr>2){
     counterThresholdBool=true;   
    }else{
        counterThresholdBool=false;
    }

    console.log(counterThresholdBool);
       return counterThresholdBool;
}


//let CounterThresholdPass = genNonViolatingCombo(9,genPossImgNum(winningImgIndex,ImgIndexForAllOther));

function genPerf_NonWinC(thresholdClearance){ // generates a perfect group of numbers that don't exceed the threshold
    while(thresholdClearance===true){
        if(thresholdClearance!==true){
            break; //breaks the loop so that the block after the condition is meet is not executed
        }
        //ImgIndexForAllOther.length=0;

        thresholdClearance = genNonViolatingCombo(/*9,genPossImgNum(winningImgIndex/*,ImgIndexForAllOther)*/);
    }
    console.log(ImgIndexForAllOther);
}
//
//let j=0; j<Object.entries(screenOutcastGroup); j++


function assignCombo(winners_refined,loser){

   let i =0;
for(let key in loser){
    
    let myImage;
    if(ImgIndexForAllOther[i]===0) myImage=cardImg[0];
    if(ImgIndexForAllOther[i]===1) myImage=cardImg[1];
    if(ImgIndexForAllOther[i]===2) myImage=cardImg[2];
    if(ImgIndexForAllOther[i]===3) myImage=cardImg[3];
    if(ImgIndexForAllOther[i]===4) myImage=cardImg[4];
    if(ImgIndexForAllOther[i]===5) myImage=cardImg[5];
    if(ImgIndexForAllOther[i]===6) myImage=cardImg[6];
    if(ImgIndexForAllOther[i]===7) myImage=cardImg[7];
    if(ImgIndexForAllOther[i]===8) myImage=cardImg[8];

    unpackedGroups[2][key]= myImage;
    //console.log(myImage);
    i++;
    //console.log(i);
}



for(let key_win in winners_refined){

let winnersImage;
if(winningImgIndex===0) winnersImage =cardImg[0];
if(winningImgIndex===1) winnersImage =cardImg[1];
if(winningImgIndex===2) winnersImage=cardImg[2];
if(winningImgIndex===3) winnersImage =cardImg[3];
if(winningImgIndex===4) winnersImage =cardImg[4];
if(winningImgIndex===5) winnersImage =cardImg[5];
if(winningImgIndex===6) winnersImage =cardImg[6];
if(winningImgIndex===7) winnersImage =cardImg[7];
if(winningImgIndex===8) winnersImage =cardImg[8];
unpackedGroups[1][key_win]=winnersImage;
}
console.log(unpackedGroups[1]);
console.log(unpackedGroups[2]);


console.log(stackOfCards_Analogy);
}

