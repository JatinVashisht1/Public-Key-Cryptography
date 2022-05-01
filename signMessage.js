const crypto = require('crypto')
const hash = crypto.createHash('sha256')
const fs = require('fs')
const encrypt = require('./encrypt')
const decrypt = require('./decrypt')

const myData = {
    firstName: 'Jatin',
    lastName: 'Vashisht',
    socialSecurityNumber: 'NO NO NO never put personal info in a digitally/signed message since this form of cryptography does not hide the data'
};

// String version of our data that can be hashed
const myDataString = JSON.stringify(myData)

// sets the value on the hash object: requires string format, so we must convert our data to string
hash.update(myDataString)

// hashed data in Hexadecimal format
const hashedData = hash.digest('hex')

const senderPrivateKey = fs.readFileSync(__dirname + '/id_rsa_priv.pem', 'utf-8')

const signedMessage = encrypt.encryptWithPrivateKey(senderPrivateKey, hashedData)

const packageOfDataToSend = {
    algorithm: 'sha256',
    originalData: myData,
    signedAndEncryptedData: signedMessage
}

module.exports.packageOfDataToSend = packageOfDataToSend