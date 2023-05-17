let ejercicios = [
    "Sentadilla",
    "Banco",
    "Peso Muerto"
]

function* rutinaEjercicios() {
    let i = 0;
    while (true) {
      yield ejercicios[i];
      i = (i + 1) % ejercicios.length;
    }
  }
  
  const generator = rutinaEjercicios();
  
  const boton = document.getElementById("boton");
  const semanasInput = document.getElementById("semanas");
  const diasInput = document.getElementById("dias");
  
  boton.addEventListener("click", function (event) {
    event.preventDefault();
  
    const semanas = Number(semanasInput.value);
    const dias = Number(diasInput.value);
    const repeticiones = semanas * dias;
    let diasEjercicios = 1
  
    for (let i = 0; i < repeticiones; i++) {
      const ejercicio = generator.next().value;
      console.log(`Día: ${diasEjercicios} ${ejercicio}`);
      diasEjercicios = diasEjercicios + (dias - 1)
      
    }
  });