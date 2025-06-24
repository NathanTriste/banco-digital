function login() {
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;
  const error = document.getElementById('error');

  if (email === "cliente@solaris.com" && password === "1234") {
    document.getElementById("login-screen").style.display = "none";
    document.getElementById("dashboard").style.display = "block";
    error.textContent = "";
  } else {
    error.textContent = "Email ou senha incorretos!";
  }
}

function logout() {
  document.getElementById("dashboard").style.display = "none";
  document.getElementById("investimentos").style.display = "none";
  document.getElementById("login-screen").style.display = "block";
}

function irParaInvestimentos() {
  document.getElementById("dashboard").style.display = "none";
  document.getElementById("investimentos").style.display = "block";
}

function voltarPainel() {
  document.getElementById("investimentos").style.display = "none";
  document.getElementById("dashboard").style.display = "block";
}