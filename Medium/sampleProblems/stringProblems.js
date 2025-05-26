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

 // sum the number


function sum() {
    let str = 125;
  let sums = 0;

   while(str != 0){
     let rem = str % 10;
       sums = sums + rem * rem;
       str = str/10
   }
   console.log(sums);
}

sum();




