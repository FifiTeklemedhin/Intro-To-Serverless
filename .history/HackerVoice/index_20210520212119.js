module.exports = async function (context, req) {
    context.log('JavaScript HTTP trigger function processed a request.');

    const password = req.query.password;
    //const name = (req.query.name || (req.body && req.body.name));
    const responseMessage = password
        ? password 
        : "Put in a password!";

    context.res = {
        // status: 200, /* Defaults to 200 */
        body: responseMessage
    };
}