'use strict'



  function validateLogin() {
    var email = document.getElementById('example1').value;
    var password = document.getElementById('example2').value;

    
    if (email === 'admin@gmail.com' && password === '12345') {
      alert('Login successful');
    } else {
      alert('Wrong email or password');
    }
  }

