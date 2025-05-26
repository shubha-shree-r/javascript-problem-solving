function alphabets(){
    let ch="A";
    for(let i=1; i<=9;i++){
        let row = "";
        for(let j=1; j<=9;j++){
            row += ch;
        ch = String.fromCharCode(ch.charCodeAt(0) + 1);
        
        }
        console.log(row.trim())
        ch = "A"
    }
}
alphabets() // A to Z


// function alphabets(){
//     let ch="Z";
//     for(let i=1; i<=4;i++){
//         let row = "";
//         for(let j=1; j<=4;j++){
//             row += ch;
//         ch = String.fromCharCode(ch.charCodeAt(0) - 1);
//        
//         }
//         console.log(row.trim())
// ch = "Z"
//     }
// }
// alphabets() // Z to A