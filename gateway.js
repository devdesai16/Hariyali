const firebaseConfig = {
    apiKey: "AIzaSyDPQxDIeN5OXGTZgAjJ644cvDWEHH1vZJI",
    authDomain: "plantify-42981.firebaseapp.com",
    databaseURL: "https://plantify-42981-default-rtdb.firebaseio.com",
    projectId: "plantify-42981",
    storageBucket: "plantify-42981.appspot.com",
    messagingSenderId: "365750154182",
    appId: "1:365750154182:web:6b28c6c57895a22555b8c7"
  };

//---------------------------------------------------------------------------------//
  //Initialize firebse 
//   firebase.initializeApp(firebaseConfig);
//----------------------------------------------------------------------------------//
  //Reference the Firebase
//   var MiniProjectDB1 = firebase.database().ref('Payment_Details');
//   var MiniProjectDB2 = firebase.database().ref('Billing_Details');
//----------------------------------------------------------------------------------//

//   document.getElementById("BillingForm").addEventListener("submit",CallSubmit);

//   document.getElementById("PayementForm").addEventListener("submit",PaymentForm);

// document.getElementById("Submitt").addEventListener(CallSubmit);

// var btn = document.getElementById("Submitt");
// btn.addEventListener("click", CallSubmit);

//----------------------------------------------------------------------------------//
// function BillingForm(e){
//     e.preventDefault();

//     var Fname = document.getElementById("Fname");
//     var Email = document.getElementById("Email");
//     var Address = document.getElementById("Address");
//     var City = document.getElementById("City");
//     var e = document.getElementById("state");
//     var text = e.options[e.selectedIndex].value;

//     saveMessages1(Fname, Email, Address, City, text);
    

// }
// const saveMessages1 = (Fname, Email, Address, City, text) =>{
//     var newform = MiniProjectDB1.push();
//     newform.set({
//         Full_name: Fname,
//         Email: Email,
//         Address: Address,
//         City: City,
//         State: text,
//     });
    
// };

// function PaymentForm(e){
//     e.preventDefault();

//     var Credit = document.getElementById("Credit");
//     var Expiry = document.getElementById("Expiry");
//     var Cvv = document.getElementById("Cvv");
//     var e = document.getElementById("year");
//     var text = e.options[e.selectedIndex].value;

//     saveMessages2(Credit, Expiry, Cvv, text);
    

// }
// const saveMessages2 = (Credit, Expiry, Cvv, text) =>{
//     var newform = MiniProjectDB1.push();
//     newform.set({
//         Credit: Credit,
//         Expiry: Expiry,
//         Year: Year,
//         Cvv: Cvv,
//     });
    
// };

function CallSubmit(){
    window.location = "./transition.html"

    // PaymentForm();
}

// const getElementVal = (id) =>{
//     return document.getElementById(id).value;
// };