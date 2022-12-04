"use strict";

const { soap } = require("strong-soap");
const prompt = require('prompt-sync')();

const inputString = prompt('Enter string to encrypt: ');
const encryption = prompt('Choose encryption sha256 or AES: ');

soap.createClient('../encrypt.wsdl', (err, client) => {
    if (err) {
        console.log('Error!');
        console.log(err);
    }

    switch (encryption.toLowerCase()) {
        case 'sha256':
            client.encryptSha({string: inputString}, clientCallback);
            break
        case 'aes':
            client.encryptAes({string: inputString}, clientCallback);
            break
    }
});

const clientCallback = (err, result) => {
    if (err) {
        console.log('Error!');
        console.log(err);
    }

    console.log(`Result: ${result}`);
}