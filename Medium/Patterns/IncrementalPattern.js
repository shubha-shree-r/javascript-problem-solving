function incrementPattern() {
    for(let i=1; i<=4; i++){
        let row = '';
        for(let j=1; j<=i; j++){
            row += "* ";
        }
        console.log(row.trim())
    }
}
     
incrementPattern() 