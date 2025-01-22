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