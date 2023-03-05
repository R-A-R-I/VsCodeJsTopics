const text = document.getElementById("text");
const checkButton = document.getElementById("checkButton");


checkButton.addEventListener("click",()=>{

    const textValue = text.value;
    console.log(textValue);
    const rippedString = textValue.split("");//Space character inbetween the pair of double quotes means you want to break apart into a words. No space character inbetween means you want to break string apart in letters.
    console.log(rippedString);
    var num_vowels =0;

    for( let l of rippedString){
        
       l =l.toLowerCase();// you have to ensure that you convert the input to lower case
       console.log(l);
        // (l ==="a"||"e"||"i"||"o"||"u")?num_vowels++ look up itenary operator
        //if(l ==="a"/*||l ==="e"||l ==="i"|| l==="o"||l ==="u"*/){// if you have triple equal, it will check if the operands are the same case(lower or upper)
            
        //     num_vowels++;
        //}
        if(/a|e|i|o|u/.test(l)){ //check bookmark for .test which is a regular expression
            num_vowels++;
        }
        /*if(l in [,"a","e","i","o","u"]){
            num_vowels++;
        }*/
        /*if(l.includes("a") || l.includes("e") || l.includes('i') || l.includes('o')|| l.includes('u')){
            num_vowels++;
        }*/

        /*switch(l){
            case "a":
                num_vowels++;
                break;
            case "e":
                num_vowels++;
                break;
            case "i":
                num_vowels++;
                break;
            case "o":
                num_vowels++;
                break;
            case "u":
                num_vowels++;
                break;
            default:
        }*/
        /*if(l =="a" || captVowel ==="e" || captVowel ==="i" || captVowel ==="o" || captVowel ==="u"){
            num_vowels++;
        }*/
    }
    


    alert("The number of vowel(s) are "+num_vowels);
})