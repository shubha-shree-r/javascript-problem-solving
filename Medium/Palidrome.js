function palidrome(){
    let str = "NOON";
    let str1 = ""
   
   for(let i = str.length -1; i >= 0; i--){
       str1 = str1+str[i]
       
   }
   if(str1 == str){
       console.log("pal")
   }else{
        console.log("not a pal")
   }
       
   }
   
   palidrome();