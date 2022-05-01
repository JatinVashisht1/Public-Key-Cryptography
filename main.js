const fs = require('fs')
const encrypt = require('./encrypt')
const decrypt = require('./decrypt')

const publicKey = fs.readFileSync(__dirname + '/id_rsa_pub.pem', 'utf-8');

// stores a buffer object
 const encryptMessage = encrypt.encryptoWithPublicKey(publicKey, 'Super secret message')

// if you try to 'crack the code', you will just get the gibberish
console.log(encryptMessage.toString())

const privateKey = fs.readFileSync(__dirname + '/id_rsa_priv.pem', 'utf-8')
const decryptedMessage = decrypt.decryptWithPrivteKey(privateKey, encryptMessage)



console.log(decryptedMessage.toString())