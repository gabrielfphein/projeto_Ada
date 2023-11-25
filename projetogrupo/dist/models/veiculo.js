"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Veiculo = void 0;
const fs = require("fs");
class Veiculo {
    constructor(novoVeiculo) {
        this._reservadoPor = null;
        this._horaAluguel = novoVeiculo.valorHora;
        this._placa = novoVeiculo.placa;
        this._tipoVeiculo = novoVeiculo.tipoVeiculo;
        this._modelo = novoVeiculo.modelo;
    }
    static buscarVeiculos() {
        return JSON.parse(fs.readFileSync("./src/dados/veiculos.json", "utf-8"));
    }
    static buscarVeiculoPorPlaca(placa) {
        const veiculos = Veiculo.buscarVeiculos();
        const veiculo = veiculos.find(veiculo => veiculo.placa === placa);
        if (veiculo) {
            return veiculo;
        }
    }
    adicionarVeiculo() {
        const veiculos = Veiculo.buscarVeiculos();
        if (Veiculo.buscarVeiculoPorPlaca(this._placa)) {
            console.error("Placa já cadastrada!");
            return;
        }
        veiculos.push({
            placa: this._placa,
            tipoVeiculo: this._tipoVeiculo,
            valorHora: this._horaAluguel,
            modelo: this._modelo,
            reservadoPor: this._reservadoPor = null
        });
        fs.writeFileSync("./src/dados/veiculos.json", JSON.stringify(veiculos));
    }
    static listarVeiculosDisponiveis() {
        const veiculos = Veiculo.buscarVeiculos();
        const veiculosDisponiveis = veiculos.filter(veiculo => veiculo.reservadoPor === null);
        return console.log(veiculosDisponiveis);
    }
    static listarVeiculosAlugados() {
        const veiculos = Veiculo.buscarVeiculos();
        const veiculosAlugados = veiculos.filter(veiculo => veiculo.reservadoPor !== null);
        return console.log(veiculosAlugados);
    }
}
exports.Veiculo = Veiculo;
