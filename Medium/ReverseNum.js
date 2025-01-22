function reversenum(){
    let num = 1234;
    let num2 = 0;
    
    
    while(num !=0){
        let rem = num % 10;
        num2 += num2*10 + rem;
       num = parseInt(num/10)
    }
     
    console.log(num2)
}

reversenum()
