let uri = undefined
const fetch = require('node-fetch');

const fs = require('fs') //get the methods in the fs package

//if you wanna add more files, just put a comma after the filename (array)

const commit_file = ['./../../HackerVoice/index.js']

for(var i = 0; i < commit_file.length; i++) {
    var a = commit_file[i];
    fs.access(commit_file[i], err => {
        if (err) {
            throw new Error("You did not commit '" + a + "'")
        }
    })
}



uri = 'https://hackervoice.azurewebsites.net/api/HackerVoice';
access_denied_test = "fifiiscool";
access_granted_test = "letmein";
uri1 = uri + "?password=" + access_denied_test;
uri2 = uri + "?password=" + access_granted_test;
console.log(uri2);
if (uri[0] != "h") {
   throw new Error("You have not added your function url as a secret!");
}

try {
    (async () => {
        const resp = await fetch(uri1, {
            method: 'GET'
        });
        var data = await resp.text()
        let test = JSON.stringify(data)
        console.log(typeof(test) );
        if (test == "Access denied.") {     
            console.log("Yay! 🎉 We got: " + JSON.stringify(data) + "/n/t your Access Denied test works")
        } else {
            console.log("We got this when entering in the wrong password: " + JSON.stringify(data) + " ... Try again!")
            process.exit(1)
        }
    })();
} catch (e) {
    throw new Error("You have not added your function url as a secret!");
}
try {
    (async () => {
        const resp = await fetch(uri2, {
            method: 'GET'
        });
        var data = await resp.text()
        let test = JSON.stringify(data)
        console.log(test === "Access granted.");
        if (test == "Access granted.") {     
            console.log("Yay! 🎉 We got: " + JSON.stringify(data) + "/n/t your Access Granted test works")
        } else {
            console.log("We got this when entering in the right password: " + JSON.stringify(data) + " ... Try again!")
            process.exit(1)
        }
    })();
} catch (e) {
    throw new Error("You have not added your function url as a secret!");
}

