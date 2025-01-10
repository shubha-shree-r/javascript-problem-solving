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
