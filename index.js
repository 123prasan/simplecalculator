
let output=document.querySelector(".output");
let output2=document.querySelector(".output2");
// for(let i=)
document.querySelectorAll("button").forEach(function(button){
  button.addEventListener("click",function(event){
    button.style.border="black solid";
    setTimeout(()=>{
      button.style.border="white";
    },100)
      let r=['0','1','2','3','4','5','6','7','8','9','*','-','+','/','%','.'].includes(event.target.getAttribute("name"))
      if(r==true){
        if(['*','-','+','/','%','.'].includes(event.target.getAttribute("name"))){
          if(!['*','-','+','/','%','.'].includes(output.value[output.value.length-1])){
            console.log(output.scrollIntoView);
            output.value=output.value+event.target.getAttribute("name");
          }
        }else{
          console.log(event.target.getAttribute("name"));
          output.value=output.value+event.target.getAttribute("name");
        }
      }else if(event.target.getAttribute("id")=='C'){
        change2();
     
      }else if(event.target.getAttribute("name")=='re'){
    
        result();
      
      }else if(event.target.getAttribute("name")=='del'){
        remo()
      }
    
  })
})

//evalution of reslut Arithmatic operation
function result(){
  
  try{
    let temp=output.value;
    let result=eval(output.value);
    change();
    output.value=result;
    changevalue(temp);
  } catch(error){
     console.log("invalid Expression");
    
     
  }
}
//changing the height out input tag2
function change(){
 
      output.style.height="22px";
      output2.style.height="65px";
      // output.style.height="10px";
      output.style.fontSize="15px";
      output2.style.fontSize="35px"
     
}

function changevalue(temp){
  output2.value="="+output.value;
  output.value=temp;
}

//changing the height out input tag2
function change2(){
  output.value=0;
  output.style.fontSize="30px";
  output.style.height="65px";
  output2.style.fontSize="0px"
  output2.style.height="0px"
  output2.value=0;
}


//remove single sumber
function remo(){
  let a=0;
      for(let i=0;i<output.value.length-1;i++){
        a=a+output.value[i];
      }
      a=a.toString().substring(1,a.length);
      output.value=a;
}

//take input from keyboard
window.addEventListener("keydown", (e) => {
  let r=['0','1','2','3','4','5','6','7','8','9','.','+','*','/','-','%'].includes(e.code.charAt(e.code.length-1))
  console.log(e);
  if(r==true){
    output.value=output.value+e.code.charAt(e.code.length-1);
  }else if(e.code=='Backspace'){
    remo();
  }else if(e.code=='Enter'){
     result();
  }
});


