function patternIntegers(){
    let no = 16;
    for(let i=4; i>=1; i--){
        let row = "";
        for(let j=4; j>=1; j--){
           row += no;
           no--
        }
        console.log(row.trim())
    }
}
patternIntegers()

// function patternIntegers(){
//     let no = 1;
//     for(let i=1; i<=4; i++){
//         let row = "";
//         for(let j=1; j<=4; j++){
//            row += no;
//            no++
//         }
//         console.log(row.trim())
//     }
// }
// patternIntegers()
// output:
// 1234
// 5678
// 9101112
// 13141516