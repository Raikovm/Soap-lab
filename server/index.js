"use strict";

const fs = require('fs');
const http = require('http');
const { soap } = require("strong-soap");
const CryptoJS = require("crypto-js");

const key = 'super-secret-key'

const service = {
    EncryptService: {
        EncryptPort: {
            encryptAes: (string) => {
                const encrypted =  CryptoJS.AES.encrypt(string, key).toString();
                return({
                    result: encrypted
                });
            },
            encryptSha: (string) => {
                const encrypted =  CryptoJS.SHA256.encrypt(string).toString();
                console.log(string);
                return({
                    result: encrypted
                });
            }
        }

    }
};

const wsdl = fs.readFileSync('../encrypt.wsdl', 'utf8');
const server = http.createServer((request, response) =>
    response.end("404: Not Found: " + request.url));

server.listen(8000);
console.log('Listening to localhost:8000');
soap.listen(server, '/encrypt', service, wsdl);

