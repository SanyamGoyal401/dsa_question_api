const data = require('./questions/allQuestions.json')
const fs = require('fs');

// const Array = ['https://www.youtube.com/watch?v=081zwL7ut04', 'https://www.youtube.com/watch?v=6lAFOFQ_NNs', 'https://www.youtube.com/watch?v=9s6ZcFZ_3ys'];
// const BackTracking = ['https://www.youtube.com/watch?v=4BBB0mvvbGA', 'https://www.youtube.com/watch?v=1OkZKjxRokU', 'https://www.youtube.com/watch?v=lpbBCI1Brdo'];
// const stacks = ['https://www.youtube.com/watch?v=5B6jw4wOJR0', 'https://www.youtube.com/watch?v=MOGBRkkOhkY'];
// const binary = ['https://www.youtube.com/watch?v=vQIiUWofWw8', 'https://www.youtube.com/watch?v=ICpp88mcB-k', 'https://www.youtube.com/watch?v=9fj_-Sr84CU'];
// const bit = ['https://www.youtube.com/watch?v=u96TGyV73kk', 'https://www.youtube.com/watch?v=v3qlwj6c-ds'];
// const bst = ['https://www.youtube.com/watch?v=kU9Lv3e_kxs', 'https://www.youtube.com/watch?v=Nq_slyv_xtc', 'https://www.youtube.com/watch?v=SXKAD2svfmI'];
// const dp = ['https://www.youtube.com/watch?v=GBBRjI_1LRI', 'https://www.youtube.com/watch?v=PPcpC5QbMx0', 'https://www.youtube.com/watch?v=3D_Oj16EtD8'];
// const graph  = ['https://www.youtube.com/watch?v=dhgKr8942rs', 'https://www.youtube.com/watch?v=geOBaNYYInc'];
// const greedy = ['https://www.youtube.com/watch?v=DHr-Mn_vzs0', 'https://www.youtube.com/watch?v=LjPx4wQaRIs'];
// const heap = ['https://www.youtube.com/watch?v=XWEEmITavdc', 'https://www.youtube.com/watch?v=MMTQz-G8e-I', 'https://www.youtube.com/watch?v=TCHSXAu5pls'];
// const linkedlist = ['https://www.youtube.com/watch?v=bjtMCwy_LMA', 'https://www.youtube.com/watch?v=Of0HPkk3JgI','https://www.youtube.com/watch?v=Fj1ywT9ETQk']; 
// const matrix = ['https://www.youtube.com/watch?v=1ZGJzvkcLsA', 'https://www.youtube.com/watch?v=ZYpYur0znng'];
// const search = ['https://www.youtube.com/watch?v=zr_AoTxzn0Y', 'https://www.youtube.com/watch?v=hASRzBXY5kY'];
// const string = ['https://www.youtube.com/watch?v=L44_gKvPZ34', 'https://www.youtube.com/watch?v=nwsYtfufL6I'];
// const trie =  ['https://www.youtube.com/watch?v=xqsaAhQC6c8', 'https://www.youtube.com/watch?v=CB-WeyCFjlc'];


// const all = data.map((item, index)=> {
//     if(item.Topic == "Array"){
//         return {
//             ...item,
//             Link: Array[index%3]
//         }
//     }
//     else if(item.Topic == "BackTracking"){
//         return {
//             ...item,
//             Link: BackTracking[index%3]
//         }
//     }
//     else if(item.Topic == "Stack & Queues"){
//         return {
//             ...item,
//             Link: stacks[index%2]
//         }
//     }
//     else if(item.Topic == "Binary Trees"){
//         return {
//             ...item,
//             Link: binary[index%3]
//         }
//     }
//     else if(item.Topic == "Bit Manipulation"){
//         return {
//             ...item,
//             Link: bit[index%2]
//         }
//     }
//     else if(item.Topic == "Binary Search Trees"){
//         return {
//             ...item,
//             Link: bst[index%3]
//         }
//     }
//     else if(item.Topic == "Dynamic Programming"){
//         return {
//             ...item,
//             Link: dp[index%3]
//         }
//     }
//     else if(item.Topic == "Graph"){
//         return {
//             ...item,
//             Link: graph[index%2]
//         }
//     }
//     else if(item.Topic == "Greedy"){
//         return {
//             ...item,
//             Link: greedy[index%2]
//         }
//     }
//     else if(item.Topic == "Heap"){
//         return {
//             ...item,
//             Link: heap[index%3]
//         }
//     }
//     else if(item.Topic == "LinkedList"){
//         return {
//             ...item,
//             Link: linkedlist[index%3]
//         }
//     }
//     else if(item.Topic == "Matrix"){
//         return {
//             ...item,
//             Link: matrix[index%2]
//         }
//     }
//     else if(item.Topic == "Searching & Sorting"){
//         return {
//             ...item,
//             Link: search[index%2]
//         }
//     }
//     else if(item.Topic == "String"){
//         return {
//             ...item,
//             Link: string[index%2]
//         }
//     }
//     else{
//         return {
//             ...item,
//             Link: trie[index%2]
//         }
//     }
// })

const all = data.map((item, index)=>{
    return {
        ...item,
        Link :"https://www.youtube.com/embed/bhPEMkeI5sk"
    }
});
fs.writeFileSync("data.json", JSON.stringify(all));
console.log(all);

