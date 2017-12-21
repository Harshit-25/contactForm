 // Initialize Firebase
  var config = {
    apiKey: "AIzaSyCsC8rV3RFyKMK9F0HME2q_fr4960Dsxdk",
    authDomain: "contactform-cdd12.firebaseapp.com",
    databaseURL: "https://contactform-cdd12.firebaseio.com",
    projectId: "contactform-cdd12",
    storageBucket: "contactform-cdd12.appspot.com",
    messagingSenderId: "300414439617"
  };

  firebase.initializeApp(config);

  //message collection

  var messagesRef=firebase.database().ref('message');





//add event listener
document.getElementById('myForm').addEventListener('submit',submitForm);

function submitForm(e){
      e.preventDefault();
      
      //get value
      var name=getFormVal('name');
      var company=getFormVal('company');
      var email=getFormVal('email');
      var phone=getFormVal('phone');
      var message=getFormVal('message');

      saveMessage(name,company,email,phone,message);

      //show alert

      document.querySelector('.alert').style.display="block";

      //hide alert

      setTimeout(function()
      {
      	document.querySelector('.alert').style.display="none";
      },3000);

      document.getElementById('myForm').reset();

   }


//function to get form input
function getFormVal(id){
	return document.getElementById(id).value;
}


function saveMessage(name,company,email,phone,message){

	var newMessagesRef= messagesRef.push();
	newMessagesRef.set({
		name:name,
		company:company,
		email:email,
		phone:phone,
		message:message
	})

}