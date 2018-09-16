const crypto = require('crypto');

const objectRandoms = {
    title: "6 Secure Randoms",
    randoms: []
}
function makeSecureRandom(size){
    return new Promise((resolve, reject) => {
       setTimeout(() => {
           crypto.randomBytes(size, function(err, buffer){
            if(resolve){
                let hexSecure = buffer.toString("hex");
                console.log(hexSecure);
            } else if(reject){
                reject("ej det altså en ommer")
            }
           })
           }, 0); 
    })
}

Promise.all([
    makeSecureRandom(48),
    makeSecureRandom(43),
    makeSecureRandom(40),
    makeSecureRandom(39),
]).then(res => {
    for(let i = 0; i< res.length; i++){
        objectRandoms.randoms.push(res[i])
    }
    console.log(objectRandoms);
})