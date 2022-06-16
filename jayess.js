function vascoM() {
    var nome = document.getElementById("nome").value;
    if (nome==null || nome=="") {
        alert("Escreva um Nome valido")
        return false;
    }
    var sobrenome = document.getElementById("sobrenome").value;
    if (sobrenome==null || sobrenome=="") {
        alert("Escreva um Sobrenome valido")
        return false;
    }
    var idnumero = parseInt(document.getElementById("idnumero").value);
    if (isNaN(idnumero) || idnumero <= 0 ) {
        alert("Digite um Numero Valido");
        return false;
      }
    var phone = document.getElementById("phone").value;
    if (isNaN(phone) ||phone==null || phone==""|| phone <= 0) {
        alert("Digite um Telefone valido")
        return false;
      }
  }