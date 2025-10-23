// Mostrar saludo dinámico según la hora
const saludo = document.getElementById("saludo");
const hora = new Date().getHours();
let mensaje = "";

if (hora < 12) mensaje = "🌅 ¡Buenos días, Ayadany!";
else if (hora < 18) mensaje = "🌞 ¡Buenas tardes, Ayadany!";
else mensaje = "🌙 ¡Buenas noches, Ayadany!";

saludo.textContent = mensaje;

// Botón para abrir GitHub
document.getElementById("btnGitHub").addEventListener("click", () => {
  window.open("https://github.com/ayadany20", "_blank");
});
