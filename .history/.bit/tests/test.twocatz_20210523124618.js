let uri = 'https://hackervoice.azurewebsites.net/api/HackerVoice';
const fetch = require('node-fetch');

if (uri[0] != "h") {
   throw new Error("You have not added your function url as a secret!");
}

try {
    (async () => {
        const resp = await fetch(uri, {
            method: 'GET'
        });
        var data = await resp.json()
        let test = JSON.stringify(data)

        if (test.length < 3) {
            console.log("No response... Try again!")
            process.exit(1)
        }

        try {
            var catimage1 = data.cat1;
            var catimage2 = data.cat2;
            var newCat1 = Buffer.from(catimage1, 'base64').toString('ascii')
            var newCat2 = Buffer.from(catimage2, 'base64').toString('ascii')
            console.log("Yay! 🎉 We got your cat pictures 🐱")
        } catch (e) {
            throw new Error("Sorry! We couldn't find one or both of the cat pictures. Make sure you encoded in BASE64!")
        }

    })().catch( e => { console.error(e) })
} catch (e) {
    throw new Error("You have not added your function url as a secret!");
}
