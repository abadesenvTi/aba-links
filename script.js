body {
    font-family: 'Inter', sans-serif;
    
    background-image: url('IMG/FUNDO\ 3.jpg');
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    
}


/* Animação de fade-in simples */

@keyframes fadeIn {
    from { opacity: 0; transform: translateY(10px); }
    to { opacity: 1; transform: translateY(0); }
}
.fade-in {
    animation: fadeIn 0.8s ease-out forwards;
}

/* === ÁREA DE CORES DOS BOTÕES === */


.btn-professor {
background: linear-gradient(to right, #1E5765, #00A99D);}

.btn-macmillan { background-color: #DC2626; }
.btn-macmillan:hover { background-color: #B91C1C; }

.btn-abanet {
background: linear-gradient(to bottom right, #62BDE8, #8BC34A);}

.btn-gmail { background-color: #FFFFFF; }
.btn-gmail:hover { background-color: #F9FAFB; }

/* Botão Registro de Ponto */
.btn-registro {
    background: linear-gradient(to right, #f9a534, #f57c00);
}
.btn-registro:hover {
    background: linear-gradient(to right, #f57c00, #f9a534);
}
