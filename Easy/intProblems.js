// WAP to print the number from 1 to 10 using for loop.

function Asscending(){
    for(let i=1; i<=10; i++){
        console.log(i);
    }
}
Asscending();


// WAP to print the number from 10 to 1 using for loop.

function Desscending(){
    for(let i=10; i>=1; i--){
        console.log(i);
    }
}
Desscending();

// WAP to print the even number from 1 to 10 ; if the number is even;

function EvenNumberAss(){
    for(let i=1; i<=10; i++){
        if(i%2 == 0){
            console.log(i);
        }
    }
}
EvenNumberAss();

// WAP to print the even number from 10 to 1 ; if the number is even;

function EvenNumberDes(){
    for(let i=10; i>=1; i--){
        if(i%2 == 0){
            console.log(i);
        }
    }
}
EvenNumberDes();


// WAP to print the odd number from 1 to 10 ;

function OddNumberAss(){
    for(let i=1; i<=10; i++){
        if(i%2 != 0){
            console.log(i);
        }
    }
}
OddNumberAss();

// WAP to print the odd number from 10 to 1 ;

function OddNumberDes(){
    for(let i=10; i>=1; i--){
        if(i%2 != 0){
            console.log(i);
        }
    }
}
OddNumberDes();

// WAP to print the  number from 1 to 10 using while ;

let n=1;

while(n <= 10){
    console.log(n);
    n++
}


// WAP to print the  number from 10 to 1 using while ;

let num=10;

while(num >= 1){
    console.log(num);
    num--
}

// WAP to print the even number from 1 to 10 using while ;

let evennum=1;

while(evennum <= 10){
    if(evennum%2 == 0){
        console.log(evennum);
    
    }
    evennum++
}

// WAP to print the even  number from 10 to 1 using while ;

let oddnum=10;

while(oddnum >= 1){
    if(oddnum%2 == 0){
        console.log(oddnum);
       
    }
    oddnum--
}

// WAP to print the even number from 1 to 10 using while ;

let evennumdes=1;

while(evennumdes <= 10){
    if(evennumdes%2 != 0){
        console.log(evennumdes);
    
    }
    evennumdes++
}

// WAP to print the even  number from 10 to 1 using while ;

let oddnumdes=10;

while(oddnumdes >= 1){
    if(oddnumdes%2 != 0){
        console.log(oddnumdes);
       
    }
    oddnumdes--
}

// wap to sawp a number using third variable;

function swapnumber(){
    let a =10;
    let b =20;
    let temp;
    
    temp = a;
    a= b;
    b= temp;
    
    console.log("a " +a);
    console.log("b " +b);
    }
    
    swapnumber();

// wap to sawp a number without using third variable;


    function swapnumber(){
        let a =10;
        let b =20;
      
        a = a+b;
        b = a-b;
        a = a-b;
        
        console.log("a " +a);
        console.log("b " +b);
        }
        
        swapnumber()    


// wap tp print table of 2 
function table(n){
    let no =2
  for (let i = 1; i <= n; i++) {
   console.log(no*i)
  }
  }
  
  table(10)

//   wap to print the length of given string;

function test(){
    n = 'SHUBHA';
    
    console.log(n.length)
    
}
test();

// WAP to fetch tthe character from the given string;


function test(){
    n = 'JAVAMAVA';
    str = "M";
    index = 4;
    char = ''
for(let i=0; i<=index; i++){
   char = n[i]
    
}
  return char  
}
console.log(test())