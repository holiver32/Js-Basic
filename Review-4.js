export function solution(article) {
    switch (true) {
      case (article == "computadora"):
        return "Con mi computadora puedo programar usando JavaScript";
      case (article == "celular"):
        return "En mi celular puedo aprender usando la app de Platzi";
      case (article == "cable"):
        return "¡Hay un cable en mi bota!";
      default:
        return "Artículo no encontrado";
    } // Tu código aquí 👈
  }
  solution('computadora')
  solution('celular')
  solution('cable')