function square(){
    for(let i=1; i<=4; i++){
        let row = ''
        for(let j=1; j<=4; j++){
            row += "* "
        }
        console.log(row.trim())
    }
}

square()