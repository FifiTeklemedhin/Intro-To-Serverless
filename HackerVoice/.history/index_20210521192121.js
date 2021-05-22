const fetch = require('node-fetch');
module.exports = async function (context, req) {
    context.log('JavaScript HTTP trigger function processed a request.');

    //const name = (req.query.name || (req.body && req.body.name));
    let resp1 = await fetch("https://cataas.com/cat/cute/says/Daniel", {
        method: 'GET'
    });
    let data1 = await resp1.arrayBuffer()
    base64data1 = Buffer.from(data1).toString('base64')

    let resp2 = await fetch("https://cataas.com/cat/cute/says/Shreya", {
        method: 'GET'
    });
    let data2 = await resp2.arrayBuffer()
    base64data2 = Buffer.from(data2).toString('base64')

    let responseMessage = {
        "cat1": base64data1,
        "cat2": base64data2,
        "names": [
            "Daniel",
            "Shreya"
        ]
    }
    // we need to receive it as a buffer since this is an image we are receiving from the API
    // Buffer?? https://developer.mozilla.org/en-US/docs/Web/API/Blob
    context.res = {
        // status: 200, /* Defaults to 200 */
        body: responseMessage
    };
}