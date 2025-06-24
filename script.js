function logar() {
  const usuario = document.getElementById("usuario").value;
  const senha = document.getElementById("senha").value;

  // Qualquer entrada é aceita
  if (usuario && senha) {
    window.location.href = "painel.html";
  } else {
    alert("Por favor, preencha todos os campos.");
  }
}
