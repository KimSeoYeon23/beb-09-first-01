const PINATAAPIKEY = process.env.PINATAAPIKEY
const PINATASECRETAPIKEY = process.env.PINATASECRETAPIKEY

const pinataSDK = require('@pinata/sdk');
const pinata = new pinataSDK(PINATAAPIKEY, PINATASECRETAPIKEY);
console.log(PINATAAPIKEY, PINATASECRETAPIKEY)

const img = "./testImg/cat.jpg"

console.log(img)