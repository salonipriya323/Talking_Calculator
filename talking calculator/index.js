let screen =document.getElementById('screen');  //id - Screen
 buttons=document.querySelectorAll('button');      // here all buttons are selected
 let screenvalue=" "        // Initially screen value
for(items of buttons){
items.addEventListener('click',(e)=>{       //callback function
    buttontext=e.target.innerText;
    console.log('Button text is ',buttontext);

    if(buttontext=="=")
    {
        screen.value=eval(screenvalue);
        if(screen.value>0)
            speak("equals"+screen.value); 
        else{speak("equals"+screen.value);}       
    }
    else if(buttontext=='x')
    {
        buttontext='*';
        speak("multiplied")
        screenvalue +=buttontext;
        screen.value=screenvalue;
    }
    else if(buttontext=='/')
    {
        buttontext='/';
        speak("divide")
        screenvalue +=buttontext;
        screen.value=screenvalue;
    }
    else if(buttontext=="AC")
    {
        screenvalue="";
        speak("clear")
        screen.value=screenvalue;
    }
    else if(buttontext=="-")
    {
        speak("minus");
        screenvalue+=buttontext;
        screen.value=screenvalue;
    }
    else if(buttontext=="+")
    {
        speak("plus");
        screenvalue+=buttontext;
        screen.value=screenvalue;
    }
    else if(buttontext=="%")
    {
        speak("percent");
        screenvalue+=buttontext;
        screen.value=screenvalue;
    }
    else{
        screenvalue+=buttontext;
        speak(buttontext)
        screen.value=screenvalue;
    }
    

})
}
function speak(x)
{
let speech = new SpeechSynthesisUtterance();
speech.lang = "en-US";
                
speech.text = x;
speech.volume = 1;
speech.rate = 1;
speech.pitch = 1;
                
window.speechSynthesis.speak(speech);
}          
 