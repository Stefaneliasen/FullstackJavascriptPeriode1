//b
const crypto = require('crypto');

const arrNumbers = [48, 40, 32];
function asyncfunction1(arrNumbers){
    crypto.randomBytes(arrNumbers[0], function (err, buffer) {
        var number = buffer.toString("hex");
        console.log("1 " + number)
    })
    function asyncfunction2(arrNumbers) {
        crypto.randomBytes(arrNumbers[1], function (err, buffer) {
            var number = buffer.toString("hex");
            console.log("2 " + number)
        })
        function asyncfunction3(arrNumbers) {
            crypto.randomBytes(arrNumbers[2], function (err, buffer) {
                var number = buffer.toString("hex");
                console.log("3 " + number)
            })
        }
        asyncfunction3(arrNumbers)
    }
    asyncfunction2(arrNumbers);
}

asyncfunction1(arrNumbers);