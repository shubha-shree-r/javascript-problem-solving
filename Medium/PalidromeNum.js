function palidrome(){
    let num = 12321;
    let orgNum = num;
    let rem = 0;
    
    while(num > 0){
         rem = rem*10 + num %10;
         num = parseInt(num/10)
        
    }
  return orgNum == rem;
}
console.log(palidrome())