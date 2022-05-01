# Public Key Cryptography
- it can do two useful things
### Encrypt Data
- Encrypt with public key
- Decrypt with private key
### Verify Identities
- Encrypt with private key
- Decrypt with public key
- this is important use case in regards to authentication also
## Understanding the usecases
- to encrypt some sort of data but not protecting identity we will encrypt with public key and decrypt with private key
- to verify identities, we encrypt with the private key and decrypt with the public key

## "Trap door" functions
- it is a one way function that takes one big piece of data and convert into deterministic small piece of data outcome.
- we can have infinitely large piece of data and it will always convert it into deterministic output with same length
- But it can not be reversed, even though we know the output but then also we cannot derive the original value from it
- if we talk about sha256 hash function the chances that two different inputs will produce same output is very less or practically impossible

## Elliptic Curve Cryptography
- When it comes to public key cryptography we are interested in a one-way/trap door function called `Elliptic Curve Multiplication`
- Elliptic curve multiplication is a cryptographic function, it mathematically links the public and private key
- Using the private key we can derive the public key but with public key we can **never** get back to that private key.
- so we can share public key anyone in the world.
- Mathematically we can determine by Elliptic Curver Cryptography that whether the public key corresponds to a private key but we cannot find the private key.
    - So we can say that we can decrypt a message with the public key.
### Data encryption
- encrypt(someMessage, public_key)
- decrypt(someMessage, private_key)
### Identity Verification
- encrypt(someMessage, private_key)
- decrypt(someMessage, public_key)

## Let's code
- in this repo we have a file called `generateKeypair.js` which will create private and public keys for us.
    - it will do all the maths and Elliptic key cryptography under the hood.
- We will use encrypt.js to simulate the working of public key cryptography