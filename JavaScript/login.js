$('#loginform').submit(function(event){
    event.preventDefault()
    var errorname = $('#error-name');
    var erroremail = $('#error-email');
    var errorpassword = $('#error-password');
    var errorCpassword = $('#error-Cpassword');
    var name = $('#name').val();
    var email = $('#email').val();
    var password = $('#password').val();
    var Cpassword = $('#Cpassword').val();
    var nameregex = /^[a-zA-ZÀ-ÖØ-öø-ÿ'\- ]{1,50}$/;
    var emailregex = /^[^@]+@[^@]+\.[a-zA-Z]+$/;
    var passwordregex = /^.{5,}$/;
    errorname.hide()
    erroremail.hide()
    errorpassword.hide()
    errorCpassword.hide()
    if (!nameregex.test(name)) {
        errorname.show()
        errorname.text("Name can only contain letters, spaces, '-', or apostrophes.")
        errorname.css('background-color','black')
        errorname.css('padding','8px')
        errorname.css('color','red')
        errorname.css('border-radius','10px')
    } 
    else {
        errorname.text("");
        errorname.hide();
    }

    if (!emailregex.test(email)) {
        erroremail.show()
        erroremail.text("Please enter a valid email address.")
        erroremail.css('background-color','black')
        erroremail.css('padding','8px')
        erroremail.css('color','red')
        erroremail.css('border-radius','10px')
    } 
    else {
        erroremail.text("");
        erroremail.hide();
    }

    if (!passwordregex.test(password)) {
        errorpassword.show()
        errorpassword.text("Password should be at least 5 characters long.")
        errorpassword.css('background-color','black')
        errorpassword.css('padding','8px')
        errorpassword.css('color','red')
        errorpassword.css('border-radius','10px')
    } 
    else {
        errorpassword.text("");
        errorpassword.hide();
    }

    if (password == Cpassword) {
        errorCpassword.text("");
        errorCpassword.hide();
    } 
    else {
        errorCpassword.show()
        errorCpassword.text("Password and Confirm Password must be the same.")
        errorCpassword.css('background-color','black')
        errorCpassword.css('padding','8px')
        errorCpassword.css('color','red')
        errorCpassword.css('border-radius','10px')
    }
})
