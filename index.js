$(document).ready(function () {
  $('.owl-carousel').owlCarousel();
});

var owl = $('.owl-carousel');
owl.owlCarousel({
    items: 3,
    loop: true,
    margin: 0,
    dots: false,
    stagePadding: 50,
    autoplay: true,
    autoplayTimeout: 450,
    autoplayHoverPause: true,
    responsiveClass: true,
    responsive: {
        0: {
            items: 1,
        },
        600: {
            items: 3,
        },
        1000: {
            items: 3,
        }
    }
});

var firebaseConfig = {
    apiKey: "AIzaSyA1jD_V_IoN6gA-VY8AaRr_h0E3HVtHB6Y",
    authDomain: "portfolio-46492.firebaseapp.com",
    projectId: "portfolio-46492",
    storageBucket: "portfolio-46492.appspot.com",
    messagingSenderId: "955931189093",
    appId: "1:955931189093:web:77e440045edf39d0044b8c",
    measurementId: "G-90GQHGC8MB"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();

var messagesRef = firebase.database().ref('messages');

document.getElementById('contactForm').addEventListener('submit', submitForm);

function submitForm(e) {
  e.preventDefault();

  var name = getInputVal('exampleFormControlInput1');
  var email = getInputVal('exampleFormControlInput1');
  var message = getInputVal('exampleFormControlTextarea1');
  saveMessage(name, email, message);

}

function getInputVal(id) {
  return document.getElementById(id).value;
}

function saveMessage(name, email, message) {
  var newMessageRef = messagesRef.push();
  newMessageRef.set({
    name: name,
    email: email,
    message: message,
  });
}
