const crypto = require('crypto')
const fs = require('fs')
const decrypt = require('./decrypt')

// this is the data that we are receiving from the sender
const receiveData = require('./signMessage').packageOfDataToSend

const hash = crypto.createHash(receiveData.algorithm)

const publicKey = fs.readFileSync(__dirname + '/id_rsa_pub.pem', 'utf-8')

const decryptMessage = decrypt.decryptWithPublicKey(publicKey, receiveData.signedAndEncryptedData)

const decryptMessageHex = decryptMessage.toString()

const hashOfOriginal = hash.update(JSON.stringify(receiveData.originalData))

const hashOfOriginalHex = hash.digest('hex')

if(hashOfOriginalHex === decryptMessageHex){
    console.log('Success! the data has not been tampered with and the sender is valid')
}
else{
    console.log('Failed! the data has been tampered with or the sender is NOT valid')
}