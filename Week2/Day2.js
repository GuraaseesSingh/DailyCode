
function asciiToBytesArray(str){
    const retArr=[]
    for(let i =0;i<str.length;i++){
        retArr.push(str.charCodeAt(i))
    }
    return new Uint8Array(retArr)
}

const stri = "Hello"
const arr = asciiToBytesArray(stri)
console.log(arr)

//to do hex, base58/64