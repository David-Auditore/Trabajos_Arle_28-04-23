function jobs() {
    return {
        p1: () => {
            let fila = []; //Creamos el arreglo donde guardaremos la fila

            //Aqui la funcion donde guardaremos las personas
            function agregarPersona() {
                fila.push(prompt("Ingresa el nombre de la persona:"));

                if (fila.length > 4) {
                    fila.shift();
                }

                console.log("Fila actual:", fila);
            }

            //Aqui la funcion donde eliminaremos a las personas
            function retirarPrimeraPersona() {
                fila.shift();

                console.log("Fila actual:", fila);
            }

            for (let i = 0; i < 10; i++) {
                agregarPersona();
            }

            for (let i = 0; i < 3; i++) {
                retirarPrimeraPersona();
            }
        },
        p2: () => {
            // 
            let eModulo, ePersona, eTransferencia;
            // Usuarios totales inicia en 0
            const usuarios = [];
            // 1-Oficina 2-Telefono
            const modulos = [1, 2, 99];
            // 1-Docente 2-Estudiante
            const tipoPersonas = [1, 2];
            // Funcion para filtrar 
            function filtrar(modulo, tipo) {
                return usuarios.filter(val => val.pedirModulo === modulo && val.pedirPersona === tipo).length;
            };

            do {
                console.clear();

                console.log(`Usuarios atendidos ${usuarios.length}`);

                console.log(`Oficina:\nEstudiantes: ${filtrar(1, 2)} - Docentes ${filtrar(1, 1)}\nTelefono:\nEstudiantes: ${filtrar(2, 2)} - Docentes ${filtrar(2, 1)}`);

                let pedirModulo = parseInt((eModulo = prompt("Seleccione modulo a usar: \n1: Oficina \n2: Telefono")) !== null && eModulo !== void 0 ? eModulo : '0');

                if (pedirModulo === 99)
                    break;

                const pedirPersona = parseInt((ePersona = prompt("Usted es: \n1: Docente \n2: Estudiante")) !== null && ePersona !== void 0 ? ePersona : '0');

                if (!modulos.includes(pedirModulo) || !tipoPersonas.includes(pedirPersona)) {
                    alert("Opcion invalida");
                    continue;
                }

                let transferencia = false;

                if (pedirModulo === 1) {
                    const transferir = parseInt((eTransferencia = prompt("¿Transferir a telefono? \n1: Si \n2: No")) !== null && eTransferencia !== void 0 ? eTransferencia : '0');
                    if (transferir === 1)
                        transferencia = true;
                    pedirModulo = 2;
                }

                usuarios.push({ pedirModulo, pedirPersona, transferencia });
            } while (true);
            console.log(usuarios);
            return true;
        },
        p3: () => {

            // Ejercicio 2:
            // El software que se desarrollará controlará un cajero automático (ATM) a través de una 
            // simulación usando el lenguaje de programación JavaScript.
            // • El cajero automático atenderá a un cliente a la vez. Se le pedirá al cliente 
            // que inserte su documento de identidad y su pin de 4 dígitos, los cuales se 
            // enviarán al banco para su validación como parte de cada transacción. El 
            // cliente podrá entonces realizar una o más transacciones. El menú se 
            // mostrará en la consola hasta que el cliente indique que no desea realizar 
            // más transacciones.
            // • El cajero automático debe ser capaz de proporcionar los siguientes servicios 
            // al cliente:
            // • Un cliente debe poder realizar un retiro de efectivo de cualquier cuenta 
            // adecuada vinculada al documento de identidad, en múltiplos de $50000. Se 
            // debe obtener la aprobación del banco antes de entregar efectivo.
            // • Un cliente debe poder realizar un depósito en cualquier cuenta vinculada al 
            // documento de identidad, consistente en efectivo y/o cheques. El cliente 
            // ingresará el monto del depósito en el cajero automático e indicar si es 
            // efectivo o cheque.
            // • Un cliente debe poder realizar una transferencia de dinero entre dos 
            // cuentas cualesquiera vinculadas a al documento de identidad. 
            // • Un cliente debe poder realizar una consulta de saldo de cualquier cuenta 
            // vinculada al documento de identidad
            // • El cajero automático comunicará al cliente los resultados de cada 
            // transacción dependiendo de su tipo. Ejemplo “retiro exitoso, puede tomar x 
            // dinero de la bandeja principal”
            // • Si el banco determina que el PIN del cliente no es válido, se le pedirá al 
            // cliente que vuelva a ingresar el PIN antes de que se pueda continuar con la 
            // transacción. Si el cliente no puede ingresar correctamente el PIN después 
            // de tres intentos saldrá de la aplicación. 
            // • El cajero automático tendrá un panel de operador con un interruptor que 
            // permitirá apagar o encender el cajero.

            // Datos de prueba
            const cuentas = [
                { id: "123456", saldo: 500000 },
                { id: "789012", saldo: 1000000 },
                { id: "345678", saldo: 250000 },
                { id: "901234", saldo: 750000 }
            ];

            let pedirUsuario = prompt("Ingrese su cedula");

            function validarPin() {
                let intentos = 0;
                while (intentos < 3) {
                    const pin = prompt("Ingrese su PIN de 4 dígitos:");
                    if (pin === "1234") {
                        return true;
                    }
                    intentos++;
                    console.log("PIN incorrecto. Intente de nuevo.");
                }
                console.log("Se han realizado 3 intentos fallidos. La sesión se cerrará.");
                return false;
            }

            function consultarCuenta(pedirUsuario) {
                return cuentas.filter(val => val.id === pedirUsuario);
            }

            validarPin();
        }
    }
}