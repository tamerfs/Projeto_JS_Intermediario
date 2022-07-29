class ContaBancaria {
    constructor(agencia, numero, tipo ,limiteDeposito) {
        this.agencia = agencia;
        this.numero = numero;
        this.tipo = tipo;
        this.limiteDeposito = limiteDeposito;
        this._saldo = 0.0;
;

    }
    get saldo(){
        return this._saldo
    }
    set saldo(valor){
        this._saldo = valor
    }

    saque(valor){
            if (valor> this._saldo){
                return console.log("saldo insuficiente")}
            this._saldo = this._saldo - valor;
        return this._saldo   
        }

    deposito(valor){
            if (valor > this.limiteDeposito){
                return console.log("Excedido o limite Diario de deposito")}
            this._saldo = this._saldo + valor;
        return this._saldo   
        }
    
}
    class ContaCorrente extends ContaBancaria {
        constructor(agencia, numero, limiteDeposito, limiteCartao) {
            super(agencia,numero, limiteDeposito)
            this.tipo = 'corrente';
            this._creditoDisponivel = limiteCartao;
            this._limiteCartao = limiteCartao;
        }

        get cartaoCredito(){
            return this._creditoDisponivel
        }

        set cartaoCredito(valor){
            this._creditoDisponivel = valor
        }




        compraCredito(valor){
            if (valor > this._creditoDisponivel){
                return console.log("Compra Negada")}
            this._creditoDisponivel = this._creditoDisponivel - valor
        return this._creditoDisponivel
        }

        pagamentoFatura(valor){
            let fatura = this._limiteCartao - this._creditoDisponivel;
            if (valor < fatura){
                fatura = fatura - valor
                juros = fatura * .14
                console.log("juros de " + juros +" em cima de "+fatura )
            this._creditoDisponivel = this._creditoDisponivel + valor
              return (fatura + juros)
            }
            this._creditoDisponivel = this._creditoDisponivel + valor
            if ((this._creditoDisponivel + valor) > this._limiteCartao){
                return this._creditoDisponivel = this._limiteCartao
            }            
        return this._creditoDisponivel
        }   
    }

    class ContaPolpanca extends ContaBancaria {
        constructor(agencia, numero, limiteDeposito) {
            super(agencia,numero, limiteDeposito)
            this.tipo = 'polpança';
            this.rendimento = rendimento;
            this.TaxaReferencial = TaxaReferencial;

        }

        rendimentoPolpança(qtdMeses){

            if (selic <= 8.5  && qtdMeses == 12){
                rendimento = (((0.7 * selic)* this.saldo) + (TaxaReferencial* this.saldo))/100
                console.log("selic <= 8,5 e 1 ano")
            }else if (selic <= 8.5  && qtdMeses < 12){
                rendimento = (((0.7 * (selic / 12 * qtdMeses))* this.saldo) + (TaxaReferencial* this.saldo))/100                      
                console.log("selic <= 8,5 e menos de 1 ano")
            }else{
                rendimento = (((0.5 * qtdMeses)*this.saldo) + (TaxaReferencial* this.saldo))/100
                console.log("selic > 8,5")
            }
           return (this.saldo + rendimento)   
        }
    }

    class ContaUniversitaria  extends ContaBancaria {
        constructor(agencia,numero,limiteDeposito) {
            super(agencia,numero,limiteDeposito)
            this.tipo = 'universitária';
        }

        saque(valor){
            if(valor > 500.00){
                return console.log("limite de saque diario excedido")}
            this._saldo = this._saldo - valor;
        return this._saldo  
        }
    }

var TaxaReferencial = 0.048;
var selic = 13.25;
var rendimento;
var juros;