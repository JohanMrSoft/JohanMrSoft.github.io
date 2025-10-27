const motivos = [
    "Porque cada gota de sudor te acerca a la mejor versión de ti mismo.",
    "Porque tu cuerpo merece sentirse fuerte y vivo.",
    "Porque hoy puedes hacer lo que antes creías imposible.",
    "Porque tu mente también entrena cuando tu cuerpo lo hace.",
    "Porque el cambio no llega solo, se construye.",
    "Porque no hay mejor sensación que cumplir lo que prometiste.",
    "Porque el esfuerzo de hoy será tu orgullo mañana.",
    "Porque moverte es un acto de amor propio.",
    "Porque la disciplina vence a la motivación.",
    "Porque el gym es tu espacio para liberar todo.",
    "Porque los límites solo existen si tú los aceptas.",
    "Porque el espejo no miente, pero el proceso tampoco.",
    "Porque cuidar tu salud es cuidar tu futuro.",
    "Porque no entrenas solo para verte bien, sino para sentirte bien.",
    "Porque rendirse no es una opción.",
    "Porque cada día que entrenas estás ganando.",
    "Porque tu cuerpo te lo agradecerá en silencio.",
    "Porque entrenar es terapia sin palabras.",
    "Porque el dolor de hoy es la fuerza de mañana.",
    "Porque te lo mereces, punto."
  ];
  
  function generarMotivo() {
    const randomMotivo = motivos[Math.floor(Math.random() * motivos.length)];
    document.getElementById('motivo').textContent = randomMotivo;
  }
  
  function toggleMenu() {
    const nav = document.querySelector('nav');
    nav.classList.toggle('active');
  }
  