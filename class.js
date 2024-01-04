class Heroi {
  constructor(nome, idade, tipo) {
    this.nome = nome;
    this.idade = idade;
    this.tipo = tipo;
  }

  atacar() {
    console.log(`o ${this.tipo} atacou usando ${this.tipoAtaque()}}`);
  }

  private tipoAtaque() {
    switch (this.tipo) {
      case "mago":
        return "magia";
      case "guerreiro":
        return "espada";
      case "monge":
        return "artes marciais";
      case "ninja":
        return "shuriken";
      default:
        return "desconhecido";
    }
  }
}

const heroi1 = new Heroi("Aragon", 30, "guerreiro");
const heroi2 = new Heroi("Gandalf", 1000, "mago");
const heroi3 = new Heroi("Bruce Lee", 40, "monge");
const heroi4 = new Heroi("Kakashi", 27, "ninja");

heroi1.atacar();
heroi2.atacar();
heroi3.atacar();
heroi4.atacar();
