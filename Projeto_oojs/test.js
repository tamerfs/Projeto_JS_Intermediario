class ContaBancaria {
    constructor(agencia = 1, numero, tipo, limiteDeposito) {
        this.agencia = agencia;
        this.numero = numero;
        this.tipo = tipo;
        this._saldo = 0.0;
        this._limiteDeposito = limiteDeposito;

    }
    get saldo(){
        return this._saldo
    }
    set saldo(valor){
        this._saldo = valor
    }

    saque(valor){
            if (valor> this._saldo){
                return "saldo insuficiente"}
            this._saldo = this._saldo - valor;
        return this._saldo   
        }

    deposito(valor){
            if (valor > this._saldo){
                return "Excedido o limite Diario de deposito"}
            this._saldo = this._saldo + valor;
        return this._saldo   
        }
    
}
    class ContaCorrente extends ContaBancaria {
        constructor(agencia, numero, limiteDeposito, creditoDisponivel,limiteCartao) {
            this.tipo = 'corrente';
            this._creditoDisponivel = creditoDisponivel;
            this._limiteCartao = limiteCartao;
            super(agencia,numero,limiteDeposito)
        } 

        get cartaoCredito(){
            return this._creditoDisponivel
        }

        set cartaoCredito(valor){
            this._creditoDisponivel = valor
        }

        compraCredito(valor){
            if (valor > this._creditoDisponivel){
                return "Compra Negada"}
            this._creditoDisponivel = this._creditoDisponivel - valor
        return this._creditoDisponivel
        }

        pagamentoFatura(valor){
            let fatura = this._limiteCartao - this._creditoDisponivel;
            if (valor < fatura){
                return fatura * juros}
            this._creditoDisponivel = this._creditoDisponivel + valor
            if ((this._creditoDisponivel + valor) > this._limiteCartao){
                return this._creditoDisponivel = this._limiteCartao
            }            
        return this._creditoDisponivel
        }   
    }


    class ContaPolpanca extends ContaBancaria {
        constructor(agencia, numero, limiteDeposito, selic,qtdMeses,TaxaReferencial) {
            this.tipo = 'polpança';
            this.selic = selic;
            this.qtdMeses = qtdMeses;
            this.TaxaReferencial = TaxaReferencial;
            super(agencia,numero,limiteDeposito)
        }

        rendimentoPolpança(){
            let rendimento;
            if (this.selic <= 8.5){
                rendimento = (70/100)* this.selic + TaxaReferencial
            }else{
                rendimento = (0,5*qtdMeses)* this.saldo + TaxaReferencial
            }
           return this.saldo * rendimento   
        }
    }

    class ContaUniversitaria  extends ContaBancaria {
        constructor(agencia,numero) {
            this.tipo = 'universitaria';
            super(agencia,numero)
        }

        saque(valor){
            if(valor > 500.00){
                return "limite de saque diario excedido"}
            this._saldo = this._saldo - valor;
        return this._saldo  
        }
    }


var TaxaReferencial = 0.048;
var selic = 13.25;
// taxas obritifas no dia 15/07/22 17hrs

// var ContaBancaria = function(agencia,numero,tipo,saldo){
//     this.agencia = agencia
//     this.numero = numero
//     this.tipo = tipo
//     this.saldo = saldo
// }
// ContaBancaria.prototype.ContaCorrente = function(){
//     return
// }
// ContaBancaria.prototype.ContaPolpanca = function(){
//     return
// }
// ContaBancaria.prototype.ContaUniversitaria = function(){
//     return
// }