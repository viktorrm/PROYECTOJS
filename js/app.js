var calculadora = {
    primervalor: 0,
    segundovalor: 0,
    pantalla: document.getElementById("display"),
    resultado: 0,
    previa: 0,
    operador: "",
    aux: 0,

    denominarbnt: function () {
        document.getElementById("0").addEventListener("mousedown", function () { calculadora.ingresaNumero("0");});
        document.getElementById("1").addEventListener("mousedown", function () { calculadora.ingresaNumero("1"); });
        document.getElementById("2").addEventListener("mousedown", function () { calculadora.ingresaNumero("2"); });
        document.getElementById("3").addEventListener("mousedown", function () { calculadora.ingresaNumero("3"); });
        document.getElementById("4").addEventListener("mousedown", function () { calculadora.ingresaNumero("4"); });
        document.getElementById("5").addEventListener("mousedown", function () { calculadora.ingresaNumero("5"); });
        document.getElementById("6").addEventListener("mousedown", function () { calculadora.ingresaNumero("6"); });
        document.getElementById("7").addEventListener("mousedown", function () { calculadora.ingresaNumero("7"); });
        document.getElementById("8").addEventListener("mousedown", function () { calculadora.ingresaNumero("8"); });
        document.getElementById("9").addEventListener("mousedown", function () { calculadora.ingresaNumero("9"); });
        document.getElementById("on").addEventListener("mousedown", function () { calculadora.resetear(); });
        document.getElementById("punto").addEventListener("mousedown", function () { calculadora.ingresaNumero("."); });
        document.getElementById("igual").addEventListener("mousedown", function () { calculadora.resolver(calculadora.operador); });
        document.getElementById("raiz").addEventListener("mousedown", function () { calculadora.ingresaoperador("raiz"); });
        document.getElementById("dividido").addEventListener("mousedown", function () { calculadora.ingresaoperador("/"); });
        document.getElementById("por").addEventListener("mousedown", function () { calculadora.ingresaoperador("*"); });
        document.getElementById("menos").addEventListener("mousedown", function () { calculadora.ingresaoperador("-"); });
        document.getElementById("mas").addEventListener("mousedown", function () { calculadora.ingresaoperador("+"); });
        document.getElementById("sign").addEventListener("mousedown", function () { calculadora.cambiarsigno(); });
    },

    achica:function (_id) {
        var y=_id;
        var x= document.getElementById(y);
            if (y=="1" || y=="2" || y=="3" || y=="0" || y=="=" || y=="." ) {
                x.style.width = "28%";
                x.style.height = "62px";
            } else if(y=="+") {
               x.style.width = "88%";
                x.style.height = "98%";
            } else {
            x.style.width = "21%";
            x.style.height = "62px";
            }
            document.getElementById(y).addEventListener("mouseup",function (){calculadora.aumenta(y)});
        },
        
        aumenta: function(_id){
           
            var y=_id;
            var x= document.getElementById(y);
            if (y=="1" || y=="2" || y=="3" || y=="0" || y=="=" || y=="." ) {
                x.style.width = "29%";
                x.style.height = "62.91px";
            } else if(y=="+") {
                x.style.width = "90%";
                x.style.height = "100%";
            } else {
            x.style.width = "22%";
            x.style.height = "62.91px";
            }
        },



        

    cambiarsigno:function(){
        var cambiasigno=0;
            cambiasigno=parseFloat(-(this.pantalla.innerHTML));
            this.primervalor=cambiasigno;
            this.pantalla.innerHTML=cambiasigno;
    },
    ingresaNumero: function (_tomaValor) {
        calculadora.achica(_tomaValor);
       
    

        if (this.pantalla.innerHTML.length < 8) {
            if (this.pantalla.innerHTML == "0") {
                this.pantalla.innerHTML = "";
            this.pantalla.innerHTML+=_tomaValor;}else{
                this.pantalla.innerHTML += _tomaValor;              
            }
            
        }
       
    },

    limpiarPantalla: function () {
        this.pantalla.innerHTML = "";
    },

    ingresaoperador: function (_oper) {
        this.operador = _oper;
    
        
        this.primervalor = parseFloat(this.pantalla.innerHTML);
        _oper = "";
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
                this.resultado = this.primervalor / this.segundovalor;
                break;

            case "raiz":
                this.resultado = Math.sqrt(this.segundovalor);

                break;
        }
        this.pantalla.innerHTML = this.resultado;

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