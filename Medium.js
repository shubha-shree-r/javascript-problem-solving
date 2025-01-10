// WAP to print the even  number from 10 to 1 without using any loop ;

function recurcivecalling(n){
    if(n > 0 ){
        test(n-1)
        console.log(n)
    }
     
}

recurcivecalling(10);

// WAP to find the factorial of given number;

function factorial(){
    let n = 4;
    let m = 1;

    for(let i=1; i<=n; i++){
        m = m*i;

    }
    console.log(m);
}

factorial();

// WAP to find the fibonocci series for first 10 numbers;

function fibonocii(n){
    let a = 0;
    let b =1;
    let temp;
    
    for(let i=0; i < n; i++){
        console.log(b);
        temp = a+b;
        a = b;
        b= temp
    }
};
fibonocii(10)


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
    
    primenumber(6)