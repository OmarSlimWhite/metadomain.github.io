const form  = document.getElementById('contact-form');

function messageProcessing() {
    form.addEventListener('click', (event)=>{
        event.preventDefault();
    })
    document.getElementById('success_msz').style.display = 'block';
    alert('Are you Sure !');
    var sender_name = form.sender_name.value;
    var sender_email = form.sender_email.value;
    var sender_phone_number = form.sender_phone_number.value;
    var sender_message_text = form.sender_message_text.value;
    var Body='Name: ' + sender_name + '<br>Email: '+sender_email+'<br>Phone: '+ sender_phone_number+'<br> Message: ' + sender_message_text;
    const name = localStorage.getItem('DOMAIN');
    Email.send({
        /*SecureToken:'7514e41a-a0a7-457a-8be2-36e1397773d3',*/
        Host: "smtp.gmail.com",
        Username : "abcdxyz272727@gmail.com",
        Password : "demopassword123",
        To : 'Omar@OmarSlimWhite.com',
        From : sender_email,
        Subject : "This email about " + name,
        Body : Body,
    })
    .then(function(message){
        alert("Email sent successfully");
        setTimeout(()=>{
            document.getElementById('success_msz').style.display = 'none';
        },2000);
    });
   
    
}

function mszClear(){
    form.sender_name.value = '';
    form.sender_email.value = '';
    form.sender_phone_number.value = null;
    form.sender_message_text.value = '';
}



var domainName = document.getElementById('domainName');

window.addEventListener('load', () => {


    // Via local Storage
     const name = localStorage.getItem('DOMAIN');
     const price = localStorage.getItem('PRICE');
    domainName.innerHTML = name;
    document.getElementById('priceDomain').innerHTML = "$ " + price;
});