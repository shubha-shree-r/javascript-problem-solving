function amStrong(num){

    let original = num;
    let sum = 0;
 
      while(num > 0){
         let rem = num % 10;
         sum +=  rem * rem * rem;
         num = num / 10;
        
      }
   return sum === original;
  
 
 }
 console.log(amStrong(153));
 
 function isArmstrong(num) {
     let originalNum = num;
     let sum = 0;
   
     while (num > 0) {
       let rem = num % 10;
       sum += rem * rem * rem;
       num = parseInt(num / 10); 
     }
   
     return sum === originalNum;
   }
   
   const num = 153;
   console.log(isArmstrong(num));
 //   if (isArmstrong(num)) {
    
 //   } else {
 //     console.log(num + " is not an Armstrong number");
 //   }
 function amStrong(){
 
     // let num = 153;
     // let copy = num;
     let sum = 0;
     for(let i=1; i<= 1000; i++){
         let num = i;
         let copy = num
         while( num != 0){
             let rem = num % 10;
             sum += rem * rem * rem;
             num = parseInt(num/10);
             
         }
         if( sum == copy){
             console.log(sum)
          }
     }
  
      
  
  }
  amStrong()