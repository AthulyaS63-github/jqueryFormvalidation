$(document).ready(function() {
 $('#firstForm').submit(function(e) {
    e.preventDefault();
    var firstName = $('#firstName').val();
    var lastName = $('#lastName').val();
    var email = $('#email').val();
    var password = $('#password').val();
    var num=$('#num').val();
    var address=$('#address').val();
    var selectedRadio=$("input[name='sex']:checked").val();
    var selectedLang=$("input[name='lan']:checked").val();
    var selectedPlace=$("option[name='place']:checked").val();
    $(".error").remove();
   
    if(firstName.length < 1) {
      $('#firstName').after('<div class="error">This field is required</div>');
    }
    if (lastName.length < 1) {
      $('#lastName').after('<div class="error">This field is required</div>');
    }
    if (email.length < 1) {
      $('#email').after('<div class="error">This field is required</div>');
    } else {
      var regEx = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      var validEmail = regEx.test(email);
      if (!validEmail) {
        $('#email').after('<div class="error">Enter a valid email</div>');
      }
    }
    if (password.length < 5) {
      $('#password').after('<div class="error">Password must be at least 5 characters long</div>');
    }

    if (num.length < 10) {
      $('#num').after('<div class="error">Phonenumber must be  10 digits </div>');
    } else {
      var filter = /^((\+[1-9]{1,4}[ \-]*)|(\([0-9]{2,3}\)[ \-]*)|([0-9]{2,4})[ \-]*)*?[0-9]{3,4}?[ \-]*[0-9]{3,4}?$/;
      var validNum= filter.test(num);
      if (!validNum) {
        $('#num').after('<div class="error">Enter a valid phoneNumber</div>');
      }
    }
    if (address.length < 1) {
      $('#address').after('<div class="error">This field is required</div>');
    }

   if(selectedRadio){
   }
   else{
      $('#gender1').after('<div class="error">please select any one</div>');
   }
    if(selectedLang){
   }
   else{
      $('#lang').after('<div class="error">please select any one</div>');
   }
   if(selectedPlace){
   }
   else{
      $('#select').after('<div class="error">This field is required</div>');
   }
  });
 
});