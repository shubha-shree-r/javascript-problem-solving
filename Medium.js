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
    
    primenumber(6);

// WAP to convert string into uppercase;


function string(){
    let str = "shubha";
    let upperCase = [];

    for(let i=0; i< str.length; i++ ){
        const charCode = str.charCodeAt(i);

        if(charCode >= 97 && charCode <= 122){
            upperCase.push(String.fromCharCode(charCode - 32));
        }else{
            upperCase.push(str[i]);
        }
    }
    console.log(upperCase) 
}

string();

// Wap to convert string to array;


function test(){
    n = 'SHUBHA'
    const arr = Array.from(n)
    // let arr =[];
    // for(let i =0; i< n.length; i++){
    //     arr.push(n[i])
    // }
   console.log(arr) 
}
test()

// WAP to  fetch "amava" from "javamava";


function subString(){
  let startindex = 3;
  let enddindex= 7;
  let result = '';
  let str = "JAVAMAVA"

   for(let i = startindex; i<= enddindex; i++){
    result += str[i]
   }
   console.log(result)
}
subString()


// Reverse a string;

function Reverse(){
   
   str = "shubha";
   result = "";

        for(let i = str.length - 1; i >= 0; i--){
            result += str[i];
        }
            console.log(result)
}

Reverse()