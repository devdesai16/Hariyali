const firebaseConfig = {
    apiKey: "AIzaSyDPQxDIeN5OXGTZgAjJ644cvDWEHH1vZJI",
    authDomain: "plantify-42981.firebaseapp.com",
    databaseURL: "https://plantify-42981-default-rtdb.firebaseio.com",
    projectId: "plantify-42981",
    storageBucket: "plantify-42981.appspot.com",
    messagingSenderId: "365750154182",
    appId: "1:365750154182:web:6b28c6c57895a22555b8c7"
  };

  firebase.initializeApp(firebaseConfig);
  const auth = firebase.auth()
  const database = firebase.database()

//   document.getElementById('contactFormReg').addEventListener('submit',register)
  document.getElementById('contactFormLog').addEventListener('submit',login)

//   function register(e){
//     e.preventDefault();
//     name1 = document.getElementById('name1').value
//     addr = document.getElementById('addr').value
//     email = document.getElementById('email').value
//     pass = document.getElementById('pass').value
    
//     auth.createUserWithEmailAndPassword(email,pass)
//     .then(function(){
//       var user = auth.currentUser
//       var database_ref = database.ref()
//       var user_data = {
//         name1: name1,
//         addr:addr,
//         email: email,
//         pass: pass,
//       }
//       database_ref.child('Dev/'+user.uid).set(user_data)

//       alert('user created')
//     })
//     .catch(function(error){
//       var error_code = error.error_code
//       var error_message = error.error_message
//       alert(error_message)
//     })
//   }


function login(e){
  e.preventDefault();
  name1 = document.getElementById('name2').value
  pass = document.getElementById('pass').value

  auth.signInWithEmailAndPassword(name1, pass)
  .then(function(){
    var user = auth.currentUser
    var database_ref = database.ref()
    var user_data = {
      name1:name1,
      pass: pass,
    }
    database_ref.child('Dev/'+user.uid).update(user_data)
    alert("logined Successfully");
    })
  .catch(function(){
    alert("Data Entered is Wrong");
  })
}
