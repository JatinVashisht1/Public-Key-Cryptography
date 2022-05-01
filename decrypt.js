const crypto = require('crypto')

function decryptWithPrivteKey(privateKey, encryptedMessage){
    return crypto.privateDecrypt(privateKey, encryptedMessage);
}

module.exports.decryptWithPrivteKey = decryptWithPrivteKey