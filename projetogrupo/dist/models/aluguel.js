"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Aluguel = void 0;
const cliente_1 = require("./cliente");
const IdGenerator_1 = require("../uteis/IdGenerator");
const veiculo_1 = require("./veiculo");
const fs = require("fs");
class Aluguel {
    constructor(novoAluguel) {
        this._cpfCliente = novoAluguel.cpfCliente;
        this._placaVeiculo = novoAluguel.placaVeiculo;
        this._nomeCliente = novoAluguel.nomeCliente;
        this._tipoCarteiraCliente = novoAluguel.tipoCarteiraCliente;
        this._dataInicio = novoAluguel.dataInicio;
        this._dataFim = novoAluguel.dataFim;
    }
    static buscarAlugueis() {
        return JSON.parse(fs.readFileSync("./src/dados/alugueis.json", "utf-8"));
    }
    static buscarAluguelPorNumeroDaReserva(numeroDaReserva) {
        const alugueis = Aluguel.buscarAlugueis();
        return alugueis.find(aluguel => aluguel.numeroDaReserva === numeroDaReserva);
    }
    static buscarAluguelPorCpf(cpf) {
        const alugueis = Aluguel.buscarAlugueis();
        return alugueis.find(aluguel => aluguel.cpfCliente === cpf);
    }
    static alugarVeiculo(cpfCliente, placaVeiculo, nomeCliente, tipoCarteiraCliente, dataInicio, dataFim) {
        const veiculo = veiculo_1.Veiculo.buscarVeiculoPorPlaca(placaVeiculo);
        const cliente = cliente_1.Cliente.buscarClientePorCpf(cpfCliente);
        const alugueis = Aluguel.buscarAlugueis();
        if ((veiculo === null || veiculo === void 0 ? void 0 : veiculo.reservadoPor) === null && (cliente === null || cliente === void 0 ? void 0 : cliente.veiculoAlugado) === null) {
            if ((cliente.tipoCarteira === "A" && veiculo.tipoVeiculo === "moto") ||
                (cliente.tipoCarteira === "B" && veiculo.tipoVeiculo === "carro")) {
                alugueis.push({
                    cpfCliente: cpfCliente,
                    placaVeiculo: placaVeiculo,
                    nomeCliente: nomeCliente,
                    tipoCarteiraCliente: tipoCarteiraCliente,
                    dataInicio: dataInicio,
                    dataFim: dataFim,
                    numeroDaReserva: IdGenerator_1.IdGenerator.getInstance().getNextId()
                });
                fs.writeFileSync("./src/dados/alugueis.json", JSON.stringify(alugueis));
                Aluguel.registrarReserva(placaVeiculo, cpfCliente);
                console.log("Reserva concluída!");
            }
            else {
                console.error("Sua carteira não permite este tipo de veículo!");
            }
        }
        else {
            console.error("Veículo já alugado ou cliente com pendência! ");
        }
    }
    static registrarReserva(placaVeiculo, cpfCliente) {
        const veiculo = veiculo_1.Veiculo.buscarVeiculoPorPlaca(placaVeiculo);
        const cliente = cliente_1.Cliente.buscarClientePorCpf(cpfCliente);
        const veiculos = veiculo_1.Veiculo.buscarVeiculos();
        const indexVeiculo = veiculos.findIndex(veiculo => veiculo.placa === placaVeiculo);
        const clientes = cliente_1.Cliente.buscarCliente();
        const indexCliente = clientes.findIndex(cliente => cliente.cpf === cpfCliente);
        veiculos[indexVeiculo].reservadoPor = cpfCliente;
        fs.writeFileSync("./src/dados/veiculos.json", JSON.stringify(veiculos));
        clientes[indexCliente].veiculoAlugado = placaVeiculo;
        fs.writeFileSync("./src/dados/clientes.json", JSON.stringify(clientes));
    }
    static devolverVeiculo(placaVeiculo, cpfCliente) {
        const veiculos = veiculo_1.Veiculo.buscarVeiculos();
        const indexVeiculo = veiculos.findIndex(veiculo => veiculo.placa === placaVeiculo);
        const clientes = cliente_1.Cliente.buscarCliente();
        const indexCliente = clientes.findIndex(cliente => cliente.cpf === cpfCliente);
        const veiculo = veiculo_1.Veiculo.buscarVeiculoPorPlaca(placaVeiculo);
        const cliente = cliente_1.Cliente.buscarClientePorCpf(cpfCliente);
        if (veiculo && cliente) {
            veiculo.reservadoPor = null;
            veiculos.splice(indexVeiculo, 1, veiculo);
            fs.writeFileSync("./src/dados/veiculos.json", JSON.stringify(veiculos));
            cliente.veiculoAlugado = null;
            clientes.splice(indexCliente, 1, cliente);
            fs.writeFileSync("./src/dados/clientes.json", JSON.stringify(clientes));
            console.log('Operação concluída!');
        }
        else {
            console.error('Veiculo e/ou cliente não existe.');
        }
    }
    static faturamento(cpf) {
        const aluguel = this.buscarAluguelPorCpf(cpf);
        if (aluguel) {
            const veiculo = veiculo_1.Veiculo.buscarVeiculoPorPlaca(aluguel.placaVeiculo);
            if (veiculo) {
                const valor = veiculo === null || veiculo === void 0 ? void 0 : veiculo.valorHora;
                const dtInicio = new Date(aluguel.dataInicio);
                const dataFim = new Date(aluguel.dataFim);
                const horasAlugadas = Math.floor(((dataFim.getTime() - dtInicio.getTime()) / (1000 * 60 * 60)));
                const acresceCarro = 1.1;
                const acresceMoto = 1.05;
                let valorTotal = 0;
                if (veiculo.tipoVeiculo === "moto") {
                    valorTotal = veiculo.valorHora * horasAlugadas * acresceMoto;
                }
                else if (veiculo.tipoVeiculo === "carro") {
                    valorTotal = veiculo.valorHora * horasAlugadas * acresceCarro;
                }
                console.log(`
            Número de horas alugadas: ${horasAlugadas}
            Valor da hora de aluguel: ${valor.toLocaleString("pt-BR", { style: "currency", currency: "BRL" })}
            Acréscimos:
                    Moto = 5%
                    Carro = 10%

        ************************************

            Valor total: ${valorTotal.toLocaleString("pt-BR", { style: "currency", currency: "BRL" })}
            `);
                return valorTotal;
            }
        }
    }
}
exports.Aluguel = Aluguel;
