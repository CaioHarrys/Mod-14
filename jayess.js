function vascoM() {
    var nome = document.getElementById("nome").value;
    if (nome==null || nome=="") {
        alert("Escreva um Nome valido");
        console.log("Campo de Nome preenchido incorretamente.");
    } else{
        console.log("Campo de Nome preenchido com sucesso!");
        }
    var sobrenome = document.getElementById("sobrenome").value;
    if (sobrenome==null || sobrenome=="") {
        alert("Escreva um Sobrenome valido");
        console.log("Campo de Sobrenome preenchido incorretamente.");
    } else {
        console.log("Campo de Sobrenome preenchido corretamente!");
    }
    var idNumero = document.getElementById("idNumero").value;
    if (idNumero.length < 11 || idNumero.length > 11 ||isNaN(idNumero)) {
        alert("Digite um CPF Valido");
        console.log("Campo CPF preenchido incorretamente.");
    } else {
            console.log("Campo CPF preenchido corretamente!");
        }
      var DD = document.getElementById("DD").value;
      if (isNaN(DD) || DD.length < 2 || DD.length > 2 ||DD==null || DD=="") {
          alert("Digite um DD Valido");
          console.log("Campo DD preenchido incorretamente.");
        } else {
            console.log("Campo DD preenchido corretamente!");
        }
    var phone = document.getElementById("phone").value;
    if (isNaN(phone) ||phone==null || phone==""|| phone <= 0 || phone.length < 9 || phone.length > 9) {
        alert("Digite um Telefone valido");
        console.log("Campo de Telefone preenchido incorretamente.");
      } else {
        console.log("Campo de Telefone Preenchido Corretamente!");
      }
  }