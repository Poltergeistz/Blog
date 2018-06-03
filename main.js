// Tuto JSON into localStorage 
// Fichier JSON en String
var string = '{"users": [{"Username": "pouetlachouette"}, {"Username": "loutrefacile"}],"billet": [{"Article": "rien"},{"Article": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto magni earum asperiores illum voluptates quia magnam, possimus nulla id itaque doloremque recusandae, suscipit accusamus debitis tenetur nihil repudiandae perspiciatis culpa!"}]}';

// DO NOT STRINGIFY AGAIN WHEN WRITING TO LOCAL STORAGE
localStorage.setItem('added-items', string);

// READ STRING FROM LOCAL STORAGE
var retrievedObject = localStorage.getItem('added-items');

// CONVERT JSON STRING TO REGULAR JS OBJECT
var parsedObject = JSON.parse(retrievedObject);
console.log(parsedObject)

// ACCESS DATA
console.log(parsedObject.users[0].Username);
console.log(parsedObject.billet[1].Article);




// GET INFO

var inputPrenom = document.getElementById('prenom');
localStorage.setItem("prenom", inputPrenom.value);

var inputNom = document.getElementById('nom');
localStorage.setItem("nom", inputNom.value);

var inputPseudo = document.getElementById('pseudo');
localStorage.setItem("pseudo", inputPseudo.value);

var inputEmail = document.getElementById('email');
localStorage.setItem("email", inputEmail.value);

var inputGender = document.getElementById('gender');
localStorage.setItem("gender", inputGender.value);

var inputBirthday = document.getElementById('birthday');
localStorage.setItem("birthday", inputBirthday.value);

var inputPasswd = document.getElementById('passwd');
localStorage.setItem("passwd", inputNom.value);

var inputCity = document.getElementById('city');
localStorage.setItem("city", inputCity.value);

var inputHobbies = document.getElementById('hobbies');
localStorage.setItem("hobbies", inputHobbies.value);

var inputTel = document.getElementById('telephone');
localStorage.setItem("telephone", inputTel.value);

var inputSiteweb = document.getElementById('site');
localStorage.setItem("site", inputSiteweb.value);

var inputColor = document.getElementById('color');
localStorage.setItem("color", inputColor.value);

// Get stored value 

var storedValue = localStorage.getItem("pseudo");