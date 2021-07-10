import express from 'express';
import bodyParser from 'body-parser';
import fs from "fs";

// create express app
const app = express();

var studentsArr = { "results": ["rajesh", "mahesh", "pintur"] };

// parse requests of content-type - application/json
app.use(bodyParser.json())

// define a simple route
app.get('/student/studentsList', (req, res) => {
    //fs.readFile("students1.json", function(err, data) {

    // Check for errors
    // if (err) throw err;

    // Converting to JSON
    //const users = JSON.parse(data);

    // console.log(users); // Print users 
    // res.json(users);
    console.log(studentsArr); // Print users 
    res.json(studentsArr);
    // });


});



// listen for requests
app.listen(8082, () => {
    console.log("Server is listening on port 8082");
});