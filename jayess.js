  function validate(){
    var nome = document.getElementById("nome").value;
    var sobrenome = document.getElementById("sobrenome").value;
    var idNumero = document.getElementById("idNumero").value;
    var DD = document.getElementById("DD").value;
    var phone = document.getElementById("phone").value;
    var error_message = document.getElementById("error_message");
    
    error_message.style.padding = "10px";
    
    var text;
    if(nome==null || nome==""){
      text = "Please Enter valid Name";
      error_message.innerHTML = text;
      document.getElementById('error_message').classList.remove('hide') = text;
      return false;
    }
    if(sobrenome==null || sobrenome==""){
      text = "Please Enter valid Last Name";
      error_message.innerHTML = text;
      document.getElementById('error_message').classList.remove('hide') = text;
      return false;
    }
    if(idNumero.length < 11 || idNumero.length > 11 ||isNaN(idNumero)){
      text = "Please Enter valid ID Number";
      error_message.innerHTML = text;
      document.getElementById('error_message').classList.remove('hide') = text;
      return false;
    }
    if(isNaN(DD) || DD.length < 2 || DD.length > 2 ||DD==null || DD==""){
      text = "Please Enter valid Area Number";
      error_message.innerHTML = text;
      document.getElementById('error_message').classList.remove('hide') = text;
      return false;
    }
    if(isNaN(phone) || phone.length < 9 || phone.length > 9 ||phone==null || phone==""){
      text = "Please Enter Valid Phone Number";
      error_message.innerHTML = text;
      document.getElementById('error_message').classList.remove('hide') = text;
      return false;
    }
    alert("Form Submitted Successfully!");
    document.getElementById('error_message').classList.add('hide');
    var nome = document.getElementById("nome").value="";
    var sobrenome = document.getElementById("sobrenome").value="";
    var idNumero = document.getElementById("idNumero").value="";
    var DD = document.getElementById("DD").value="";
    var phone = document.getElementById("phone").value="";
    return true;
  }