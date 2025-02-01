function alphabets(){
    let ch="A";
    for(let i=1; i<=4;i++){
        let row = "";
        for(let j=1; j<=4;j++){
            row += ch;
        ch = String.fromCharCode(ch.charCodeAt(0) + 1);
        if (ch > "Z") {
                ch = "A"; // Reset to "A" after "Z"
            }
        }
        console.log(row.trim())
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
//         if (ch < "A") {
//                 ch = "Z"; // Reset to "A" after "Z"
//             }
//         }
//         console.log(row.trim())
//     }
// }
// alphabets() // Z to A