const firebaseConfig = {
    apiKey: "AIzaSyA9E5pSfeOiRPIj1LAwpG74jAQ0o3kPp48",
    authDomain: "brewerscafe-26012.firebaseapp.com",
    databaseURL: "https://brewerscafe-26012-default-rtdb.firebaseio.com",
    projectId: "brewerscafe-26012",
    storageBucket: "brewerscafe-26012.appspot.com",
    messagingSenderId: "677401871661",
    appId: "1:677401871661:web:75c7390b96b81c88faffa4"
  };
  firebase.initializeApp(firebaseConfig);
  var BrewerscafeDB = firebase.database().ref('Brewerscafe')
  document.getElementById('brewerscafe').addEventListener('Book A Table' submitform)
  function submitform(e){
    e.preventDefault();
    var name=getElementById('name');
    var phone =getElementById('phone');
    var person=getElementById('person');
    var reservation=getElementById('reservation-date');
    var timeoutline=getElementById('timeoutline');
    var message=getElementById('message');

    console.log(name,phone,person,reservation,timeoutline,message);
  }

  const getElementById =(id) =>{
    return document.getElementById(id).ariaValueMax; 
  }