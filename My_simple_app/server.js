
//npm init -y   --> it wil generate json file
//npm start
// npm -i --save-dev nodemon   
//npm i --save-devclear -- it will save and generate package-lock.json file
//npm i --save-dev nodemon  ---> installs node modules packages
//npm run devstart  --> it will start application when we do any changes, auto restart

const express = require("express")
const app = express()
const body = `
<html>
<body>
<h1>hello</h1>
</body>
</html>
`;
app.get("/", (req, res) => {
    console.log("hello world");
    res.send("hello world");

});

app.get("/home", (req, res) => {
    const data = [
        {
            id: 1,
            name: "shwetha",
        },
        {
            id: 2,
            name: "pranav",
        },
        {
            id: 3,
            name: "raju",
        },
    ]
    res.json(data);
});
//app.post()
//app.put()
//app.delete()

app.listen(3000)
