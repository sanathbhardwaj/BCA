
const Firebase=require('firebase-admin');
const shortid=require('shortid');

var serviceAccount = require('../bcasanath.json');
Firebase.initializeApp({
    credential: Firebase.credential.cert(serviceAccount),
    databaseURL: "https://bca-foundation.firebaseio.com",
    //storageBucket: ""
  });

  var db = Firebase.database();
  var usersRef = db.ref("users");

var paymentOpeartion={
    submit(object,res){

if(object.email){
    singleuser=usersRef.child(object.fname+shortid());
    singleuser.update(object,(err,doc)=>{
        if(err){
            res.status(403).json({"msg":"something went wrong","err":err});
            console.log("Somethimg went wrong ",err)
        }
        else{
          //  res.json({"msg":"user created sucessfully","doc":doc});
            console.log("User created sucessfully ",doc);

        }
    })
}else{
    res.json({"msg":"Please enter mail"});
    console.log("Invalid or empty mail");
}


res.redirect('https://p-y.tm/5p-TJxI');
//res.send("Hi payment successful");
    }
}

module.exports=paymentOpeartion;