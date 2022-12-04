"use strict";

const { soap } = require("strong-soap");

soap.createClient('../encrypt.wsdl', (err, client) => {
    if (err) {
        console.log('Error!');
        console.log(err);
    }

    client.encryptAes({string: 'test'}, (err, result) => {
        if (err) {
            console.log('Error!');
            console.log(err);
        }

        console.log(`Result: ${result}`);
    });
})