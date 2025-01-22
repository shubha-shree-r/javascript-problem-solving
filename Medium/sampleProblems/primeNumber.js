 // WAP to check the number is prime or not'


 function primenumber(num){
    let flag = true
      for(let i=2; i< num; i++){
        if(num%i == 0){
            flag = false;
            break
        }
      }
      if(flag == true){
         console.log("prime no") 
      }else{
          console.log("not a prime no") 
      }
    }
    
    primenumber(6);