var calculadora = {
    primervalor: 0,
    segundovalor: 0,
    pantalla: document.getElementById("display"),
    resultado: 0,
    previa: 0,
    operador: "",
    denominarbnt: function () {
        document.getElementById("0").addEventListener("click", function () { calculadora.ingresaNumero("0"); });
        document.getElementById("1").addEventListener("click", function () { calculadora.ingresaNumero("1"); });
        document.getElementById("2").addEventListener("click", function () { calculadora.ingresaNumero("2"); });
        document.getElementById("3").addEventListener("click", function () { calculadora.ingresaNumero("3"); });
        document.getElementById("4").addEventListener("click", function () { calculadora.ingresaNumero("4"); });
        document.getElementById("5").addEventListener("click", function () { calculadora.ingresaNumero("5"); });
        document.getElementById("6").addEventListener("click", function () { calculadora.ingresaNumero("6"); });
        document.getElementById("7").addEventListener("click", function () { calculadora.ingresaNumero("7"); });
        document.getElementById("8").addEventListener("click", function () { calculadora.ingresaNumero("8"); });
        document.getElementById("9").addEventListener("click", function () { calculadora.ingresaNumero("9"); });
        document.getElementById("on").addEventListener("click", function () { calculadora.resetear(); });
        document.getElementById("sign").addEventListener("click", function () { calculadora.cambiarSigno(); });
        document.getElementById("punto").addEventListener("click", function () { calculadora.ingresaNumero("."); });
        document.getElementById("igual").addEventListener("click", function () { calculadora.resolver(calculadora.operador); });
        document.getElementById("raiz").addEventListener("click", function () { calculadora.ingresaoperador("raiz"); });
        document.getElementById("dividido").addEventListener("click", function () { calculadora.ingresaoperador("/"); });
        document.getElementById("por").addEventListener("click", function () { calculadora.ingresaoperador("*"); });
        document.getElementById("menos").addEventListener("click", function () { calculadora.ingresaoperador("-"); });
        document.getElementById("mas").addEventListener("click", function () { calculadora.ingresaoperador("+"); });
    },
    ingresaNumero: function (_tomaValor) {
        if((this.pantalla.innerHTML=="0" || this.pantalla.innerHTML=="" ) && this.operador=="-"){
            this.pantalla.innerHTML="";
           this.pantalla.innerHTML+="-"+(this.pantalla.innerHTML);
           this.resultado=parseFloat(this.pantalla.innerHTML);
        }
        if (this.pantalla.innerHTML.length < 8) {
            if (_tomaValor == ".") {
                this.pantalla.innerHTML += _tomaValor
            } else {
                if (this.pantalla.innerHTML == "0") {
                    this.pantalla.innerHTML = "";
                    this.pantalla.innerHTML += _tomaValor;
                } else {
                    this.pantalla.innerHTML += _tomaValor;
                }
            }
        }
        _tomaValor = "";
    },
    limpiarPantalla: function () {
        this.pantalla.innerHTML = "";
    },

    ingresaoperador: function (_oper) {
        this.primervalor = parseFloat(this.pantalla.innerHTML);
        this.operador = _oper;
        _oper = 0;
        this.limpiarPantalla();
    },

    resolver: function () {
        this.segundovalor = parseFloat(this.pantalla.innerHTML);

        switch (this.operador) {
            case "+":
                this.resultado = this.primervalor + this.segundovalor;
                break;

            case "-":
                this.resultado = this.primervalor - this.segundovalor;
                break;
            case "*":
                this.resultado = this.primervalor * this.segundovalor;
                break;
            case "/":
                this.resultado = this.primervalor % this.segundovalor;
                break;

            case "raiz":
                this.resultado = Math.sqrt(this.segundovalor);

                break;
        }
        this.pantalla.innerHTML = this.resultado;
        this.primervalor = this.resultado;
        this.resultado = 0;
        this.segundovalor = 0;

    },
    resetear: function () {
        this.pantalla.innerHTML = 0;
        this.primervalor = 0;
        this.segundovalor = 0;
        this.resultado = 0;
        this.operador = 0;
    },

}
calculadora.denominarbnt();