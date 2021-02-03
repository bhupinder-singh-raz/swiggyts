// // Import
// const fastify = require("fastify")();
// require("dotenv/config");
// const path = require('path');
// const bcrypt = require("bcrypt");
// const jwt = require("jsonwebtoken");
// var otpGenerator = require('otp-generator');
// const mailgun = require("mailgun-js");
// const mg = mailgun({apiKey: "32bb37a9c46286a8dabc3d39bcf06ea3-07bc7b05-e0e05e27", domain: "sandboxf66bf61ca519403783b6fab8e2815aaa.mailgun.org"});

// const express = require("express");
// const app = express();

// // Import local modules
// require("./db/conn");
// const Registeruser = require("./model/model");
// const Location = require("./model/location");

// // fastify.register(require("./routes/userroute"));
// fastify.register(require('fastify-cors'));

// // Port
// let port = process.env.PORT || 5000;


//     // Admin
//     // send all the names of those delivery boys that has login i.e. isavailable = "1"
//     // var arr = [];
//     // fastify.get('/', (request, reply) => {

//     //     console.log("TOKEN \n");
//     //     const token = request.headers.authorization.replace('Bearer ', '');
//     //     console.log(token);

//     //     if(!token)
//     //         reply.code(400).send({message : "no auth"});
//     //     else
//     //     {
//     //         // check if it is correct token (i.e. verify the token)
//     //         jwt.verify(token, "secretkey", (err, user) =>                            // payload
//     //         {                
//     //             if(err)
//     //                 reply.code(400).send({message : "token is not valid"});
//     //             else
//     //             {
//     //                 Registeruser.find({isavailable : "1"}, (err, data) => {
//     //                     if(err)
//     //                         reply.code(400).send({msg : "server side error"});
//     //                     else
//     //                     {
//     //                         arr = [];
//     //                         data.forEach((obj) => {
//     //                             arr.push((obj.name));
//     //                         })

//     //                         // console.log(arr);   contains names of delivery boy whose "isavailable" property is "1"

//     //                         Location.find({ name: { $in: arr } }, (err,data) => {
//     //                             if(err)
//     //                                 reply.code(400).send({msg : "server side error"});
//     //                             else
//     //                             {
//     //                                 reply.code(200).send({msg : data});                                    
//     //                             }
//     //                         })
//     //                     } 
//     //                 })                    
//     //             }
//     //         });                     
//     //     }
//     // })



//     // // Signup
//     // fastify.post('/signup', (request, reply) => {

//     //     if(request.body.mobileno.length !== 10)
//     //         reply.code(400).send({msg : "phoneno must have 10 digit"});

//     //     else if(request.body.password !== request.body.confirmpassword)
//     //         reply.code(400).send({msg : "pass & confirmpass must be same"});

//     //     else
//     //     {
//     //         bcrypt.hash(request.body.password, 10, function(err, hash)
//     //         {
//     //             if(err)
//     //                 reply.code(400).send({msg : "server side error"});
//     //             else
//     //             {
//     //                 Registeruser.create({name : request.body.name, email : request.body.email, mobileno : request.body.mobileno, password : hash}, (err, data) => {
//     //                     if(err)
//     //                         reply.code(400).send({msg : "email id already used"});
//     //                     else
//     //                     {
//     //                         // update location table
//     //                         Location.create({userid : data._id, name : data.name});

//     //                         // update oldLocation
//     //                         // OldLocation.create({userid : data._id});


//     //                         // Generate otp
//     //                         const otp = otpGenerator.generate(6, { upperCase: false, specialChars: false });

//     //                         // save in database
//     //                         // Registeruser.findOneAndUpdate({email : {$eq : request.body.email}}, {otp : otp})
//     //                         data.otp = otp;
//     //                         data.save();

//     //                         // send otp to email id
//     //                         const mail = {
//     //                             from: 'bhupindersingh987686@gmail.com',
//     //                             to: 'bhupindersingh987686@gmail.com',
//     //                             subject: 'Verify',
//     //                             html : `
//     //                             <h1> OTP </h1>
//     //                             <p> ${otp} </p>
//     //                             `
//     //                         };
//     //                         mg.messages().send(mail, function (error, body) {
//     //                             console.log(body);
//     //                         });

//     //                         reply.code(200).send({msg : "data saved successfully please verify the email id"});

//     //                         // load another webpage
//     //                         // reply.sendFile('verify.html');
//     //                     }
//     //                 })
//     //             }
//     //         })
//     //     }
//     // })  


//     // // Verify account
//     // fastify.post('/signup/verify', (request, reply) => {
//     //     // check the otp if it is correct make isverified '0' to '1'
        
//     //     Registeruser.find({email : request.body.email}, (err, data) =>{
//     //         if(err)
//     //             reply.code(400).send({msg : "server side error"});
//     //         else
//     //         {
//     //             console.log(data[0].otp);

//     //             if(data[0].otp === request.body.otp)
//     //             {
//     //                 data[0].isverified = "1";
//     //                 data[0].save();
//     //                 reply.code(400).send({msg : "congratulations your account is verified"});
//     //             }
//     //             else
//     //                 reply.code(400).send({msg : "wrong otp"});
//     //         }
//     //     })
//     // })


//     // // Login
//     // fastify.post('/login', (request, reply) => 
//     // {
//     //     var user = Registeruser.find({name : request.body.name}, (err,user) =>
//     //     {
//     //         try
//     //         {
//     //             if(user[0].isverified === "1")
//     //             {
//     //                 bcrypt.compare(request.body.password, user[0].password, function(err, booleanvalue)
//     //                 {
//     //                     if(err)
//     //                         reply.code(400).send({msg : "server side error"});
//     //                     else
//     //                     {
//     //                         if(booleanvalue)    
//     //                         {
//     //                             console.log(user[0]);

//     //                             // assign token
//     //                             jwt.sign({_id : user[0]._id},"secretkey", (err,token) =>            // Generate token            
//     //                             {
//     //                                 reply.code(200).send({msg : {token : token, role : user[0].role, id : user[0]._id}});
//     //                             })

//     //                             // change isavailable value 0 to 1
//     //                             if(user[0].role === "deliveryboy")
//     //                             {
//     //                                 user[0].isavailable = 1;
//     //                                 user[0].save();
//     //                             }
//     //                         }
//     //                         else
//     //                             reply.code(400).send({msg : "wrong username and password"});
//     //                     }     
//     //                 })
//     //             }
//     //             else
//     //                 reply.code(400).send({msg : "please verify your email id"});
//     //         }
//     //         catch(err)
//     //         {
//     //             reply.code(400).send({msg : "First create your account"});
//     //         }
//     //     })
//     // });



//     // // Logout
//     // fastify.post('/logout', (request, reply) => 
//     // {
//     //     Registeruser.find({_id : request.body.id}, (err, data) => 
//     //     {
//     //         if(err)
//     //             reply.code(400).send({msg : "server side error"});    
//     //         else
//     //         {
//     //             console.log("logout");
//     //             data[0].isavailable = 0;
//     //             data[0].save();
//     //             reply.code(200).send({msg : "successfully logged out"});
//     //         }
//     //     })
//     // })



//     // // Delivery boy : Update longitude and latitude of logged in user
//     // var arr = [];
//     // fastify.patch('/update', (request, reply) => {

//     //     // Token
//     //     console.log("TOKEN \n");
//     //     const token = request.headers.authorization.replace('Bearer ', '');
//     //     console.log(token);

//     //     if(!token)
//     //         reply.code(400).send({message : "no auth"});
//     //     else
//     //     {
//     //         // check if it is correct token (i.e. verify the token)
//     //         jwt.verify(token, "secretkey", (err, user) =>                            // payload
//     //         {                
//     //             if(err)
//     //                 reply.code(400).send({message : "token is not valid"});
//     //             else
//     //             {
//     //                 Location.find({userid : request.body.id}, (err,data) => 
//     //                 {
//     //                     data[0].location.push(request.body.location[0]);
//     //                     data[0].save();
//     //                     reply.code(200).send({msg : "updated"});
//     //                 })
//     //             }
//     //         })
//     //     }

//     // })



//     // // Resend otp
//     // fastify.post("/resendotp", (request, reply) => {
//     //     console.log(request.body);
//     //     Registeruser.find({email : request.body.email}, (err, data) => {
//     //         if(err)
//     //             reply.code(400).send("email not found");
//     //         else
//     //         {
//     //             // Generate otp
//     //             const otp = otpGenerator.generate(6, { upperCase: false, specialChars: false });

//     //             // save in database
//     //             data[0].otp = otp;
//     //             data[0].save();

//     //             // send otp to email id
//     //             const mail = {
//     //                 from: 'bhupindersingh987686@gmail.com',
//     //                 to: 'bhupindersingh987686@gmail.com',
//     //                 subject: 'Verify',
//     //                 html : `
//     //                 <h1> OTP </h1>
//     //                 <p> ${otp} </p>
//     //                 `
//     //             };
//     //             mg.messages().send(mail, function (error, body) {
//     //                 console.log(body);
//     //             });

//     //             reply.code(200).send({msg : "we have resended the code"});
//     //         }
//     //     })
//     // })


//     // fastify.get("/", (req, rep) => {
//     //     rep.send({msg : "get request"});
//     // })


// // Listen
// // fastify.listen(port, (err) => {
// //     if(err)
// //         fastify.log.error(err);
// //     else
// //     {
// //         console.log("hello");
// //         console.log(`Listening at port no ${port}`);
// //     }
// // })



// const express = require("express");
// const app = express();
// app.get("/", (req, res) => {
//     res.status(200).send("get request");
// })

// let port = process.env.PORT || 5000;
// app.listen(port,(err )=>
// {
//     if(err)
//         console.log(err);
//     else
//         console.log(`Listening to port no ${port}`);
// })  



const fastify = require("fastify")();
fastify.get('/', (req, rep) => {
    rep.send("get request ok ok");
})

let port = process.env.PORT || 5000;
fastify.listen(port, (err) => {
    if(err)
        fastify.log.error(err);
    else
    {
        console.log("hello");
        console.log(`Listening at port no ${port}`);
    }
})