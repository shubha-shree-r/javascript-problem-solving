function number(){
    let int = 11051
       let  count = 0;
       while(int != 0){
           let rem = int % 10
           if(rem == 1){
               count++
           }
           int = parseInt(int/10);
           
       }
       console.log(count)
       
   }
   
   number();