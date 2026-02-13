document.addEventListener("DOMContentLoaded", () => {
  const alertBox = document.getElementById("copy-alert");

  // Animação inicial
  document.querySelectorAll(".social-btn").forEach((btn, i) => {
    btn.style.opacity = "0";
    btn.style.transform = "translateY(20px)";
    setTimeout(() => {
      btn.style.transition = "all 0.6s ease";
      btn.style.opacity = "1";
      btn.style.transform = "translateY(0)";
    }, i * 150);
  });

  // Copiar link ao clicar
  document.querySelectorAll(".social-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      const link = btn.dataset.link;
      navigator.clipboard.writeText(link).then(() => {
        alertBox.classList.remove("hidden");
        setTimeout(() => alertBox.classList.add("hidden"), 2000);
      });
    });
  });

  // Efeito hover
  document.querySelectorAll(".social-btn").forEach(btn => {
    btn.addEventListener("mouseenter", () => {
      btn.querySelector("img").style.transform = "scale(1.15)";
      btn.querySelector("img").style.filter = "drop-shadow(0 0 10px rgba(0,0,0,0.4))";
    });
    btn.addEventListener("mouseleave", () => {
      btn.querySelector("img").style.transform = "scale(1)";
      btn.querySelector("img").style.filter = "none";
    });
  });
});

// Define o ano atual no rodapé dinamicamente
document.getElementById('current-year').textContent = new Date().getFullYear();


// Função para mostrar alerta customizado (pode ser substituído por SweetAlert ou outro)
function showCustomAlert(message) {
    alert(message);
}

// Portal do Professor
document.getElementById('professor').addEventListener('click', function () {    
    window.open('https://portalaluno.abaweb.org/FrameHTML/Web/App/Edu/PortaldoProfessor/#/login', '_blank');
});

// Macmillan
document.getElementById('macmillan-portal').addEventListener('click', function () {   
    window.open('https://www.macmillaneducationeverywhere.com/', '_blank');
});

// Abanet
document.getElementById('abanet-portal').addEventListener('click', function () {
    window.open('http://abanet.abaweb.org/index2.php#', '_blank');
});

// Gmail
document.getElementById('gmail-portal').addEventListener('click', function () {
   window.open('https://mail.google.com/', '_blank');
});

// Registro de Ponto
document.getElementById('registro-ponto-portal').addEventListener('click', function () {
    // TODO: substitua pela URL correta do seu sistema de registro de ponto
    window.open('https://portalrh.abaweb.org/FrameHTML/Web/App/RH/PortalMeuRH/#/login', '_blank');
});


