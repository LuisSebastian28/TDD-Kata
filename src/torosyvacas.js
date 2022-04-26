
class TorosYVacas {
    constructor(codigoSecreto) {
        this.codigoSecreto = codigoSecreto;
      }
    adivinar(intento) {
      let respuesta = "";
      if (intento === this.codigoSecreto) {
        return "Ganaste!";
      }
      return respuesta;
    }
  }
  
  export default TorosYVacas;