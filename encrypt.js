// in this file we will simulate the working of public key cryptography

const crypto = require('crypto')

function encryptWithPublicKey(publicKey, message){
    const bufferMessage = Buffer.from(message, 'utf-8')
    return crypto.publicEncrypt(publicKey, bufferMessage)
}


function encryptWithPrivateKey(privateKey, message){
    const bufferMessage = Buffer.from(message, 'utf-8')
    return crypto.privateEncrypt(privateKey, bufferMessage)
}

module.exports.encryptoWithPublicKey = encryptWithPublicKey
module.exports.encryptWithPrivateKey = encryptWithPrivateKey