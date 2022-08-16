//utility.js

const request = require("request-promise");
const EXTERNAL_API="https://tools.ecpe.nu.ac.th/network/api/student/"; // put url
const accessToken="eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOlwvXC90b29scy5lY3BlLm51LmFjLnRoXC9uZXR3b3JrXC9hcGlcL2xvZ2luIiwiaWF0IjoxNjYwNjYyNzI5LCJleHAiOjE2NjA2NjYzMjksIm5iZiI6MTY2MDY2MjcyOSwianRpIjoiVzBqa2xwdFliV2pWbk9qTiIsInN1YiI6MjAsInBydiI6IjIzYmQ1Yzg5NDlmNjAwYWRiMzllNzAxYzQwMDg3MmRiN2E1OTc2ZjcifQ.FoXmj2hHD5gLrmeshCH-5u3s1CpP2zbbH7-dKXa8Btw"; // put access token
const student = {
  id_student:63361467,
  name: 'chaiwat', // replace with your full name.
  age: 20, // put your age.
  gender: 'Male', // replace with your gender
  department: 'CPE'
};


exports.findStudentbyId = function (student_id, cb) {
  //-- call external api 
          request({
            method: "GET",
            uri: EXTERNAL_API+student_id,
            headers: {
                Authorization: `Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOlwvXC90b29scy5lY3BlLm51LmFjLnRoXC9uZXR3b3JrXC9hcGlcL2xvZ2luIiwiaWF0IjoxNjU4ODQ0NzkxLCJleHAiOjE2NTg4NDgzOTEsIm5iZiI6MTY1ODg0NDc5MSwianRpIjoiNlFlNmd2Wk1rd3pZR2dQMyIsInN1YiI6MjAsInBydiI6IjIzYmQ1Yzg5NDlmNjAwYWRiMzllNzAxYzQwMDg3MmRiN2E1OTc2ZjcifQ.Dl1mtArflZx3xdwNKrEdBDvAUwSOH7N17J9KnIkpzVc`
            }
        }).then((response) => {
            console.log('Sent');
            console.log({
                "request": student_id,
                "response": response
            });

           cb(response);

        }).catch((err) => {
            console.log('Error:', err.message);
            console.log({
                "Error": err.message
            });
        });
}