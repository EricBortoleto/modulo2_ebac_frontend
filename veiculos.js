function Veiculo(marca, modelo) {
  this.marca = marca;
  this.modelo = modelo;

  this.descricao = function () {
    console.log(`${this.marca} ${this.modelo}`);
  };
}

function Carro(marca, modelo, portas) {
  Veiculo.call(this, marca, modelo); // Herdando de Veiculo
  this.portas = portas;

  this.descricaoCompleta = function () {
    console.log(`${this.marca} ${this.modelo} com ${this.portas} portas`);
  };
}

function Moto(marca, modelo, cilindradas) {
  Veiculo.call(this, marca, modelo); // Herdando de Veiculo
  this.cilindradas = cilindradas;

  this.descricaoCompleta = function () {
    console.log(`${this.marca} ${this.modelo} com ${this.cilindradas} cc`);
  };
}

const carro1 = new Carro('Toyota', 'Corolla', 4);
const carro2 = new Carro('Honda', 'Civic', 4);
const moto1 = new Moto('Yamaha', 'MT-07', 689);

carro1.descricao();
carro1.descricaoCompleta();

carro2.descricao();
carro2.descricaoCompleta();

moto1.descricao();
moto1.descricaoCompleta();
