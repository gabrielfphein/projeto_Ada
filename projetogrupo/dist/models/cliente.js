"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Cliente = void 0;
const fs = require("fs");
class Cliente {
    constructor(novoCliente) {
        this._veiculoAlugado = null;
        this._cpf = novoCliente.cpf;
        this._nome = novoCliente.nome;
        this._tipoCarteira = novoCliente.tipoCarteira;
    }
    static buscarCliente() {
        return JSON.parse(fs.readFileSync("./src/dados/clientes.json", "utf-8"));
    }
    static buscarClientePorCpf(cpf) {
        const clientes = Cliente.buscarCliente();
        const cliente = clientes.find(cliente => cliente.cpf === cpf);
        if (cliente) {
            return cliente;
        }
    }
    adicionarCliente() {
        const clientes = Cliente.buscarCliente();
        if (Cliente.buscarClientePorCpf(this._cpf)) {
            console.error("CPF já cadastrado! ");
            return;
        }
        clientes.push({
            cpf: this._cpf,
            nome: this._nome,
            tipoCarteira: this._tipoCarteira,
            veiculoAlugado: this._veiculoAlugado
        });
        fs.writeFileSync("./src/dados/clientes.json", JSON.stringify(clientes));
    }
}
exports.Cliente = Cliente;
