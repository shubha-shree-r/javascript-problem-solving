
function squareNumber(){
    for(let i=1; i<=4; i++){
        let row = ''
        for(let j=1; j<=4; j++){
            row += i  // instead of i if j is add columnwise number will print
        }
        console.log(row.trim())
    }
}

squareNumber()