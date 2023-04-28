function jobs() {
    return {
        p1: () => {
            // Destructuracion
            let eModulo, ePersona, eTransferencia;
            // Usuarios totales inicia en 0
            const usuarios = [];
            // 1-Oficina 2-Telefono
            const modulos = [1, 2, 99];
            // 1-Docente 2-Estudiante
            const tipoPersonas = [1, 2];
               
            function filtrar(modulo, tipo) {
                return usuarios.filter(val => val.modulo === modulo && val.tipoPersonas === tipo).length;
            };

            do {
                console.clear();

                console.log(`Usuarios atendidos ${usuarios.length}`);

                console.log(`Oficina:\nEstudiantes: ${filtrar(1, 2)} - Docentes ${filtrar(1, 1)}\nTelefono:\nEstudiantes: ${filtrar(2, 2)} - Docentes ${filtrar(2, 1)}`);

                const modulo = parseInt((eModulo = prompt("Seleccione modulo a usar: \n1: Oficina \n2: Telefono")) !== null && eModulo !== void 0 ? eModulo : '0');

                if (modulo === 99)
                    break;

                const tipoPersona = parseInt((ePersona = prompt("Usted es: \n1: Docente \n2: Estudiante")) !== null && ePersona !== void 0 ? ePersona : '0');

                if (!modulos.includes(modulo) || !tipoPersonas.includes(tipoPersona)) {
                    alert("Opcion invalida");
                    continue;
                }

                let transferencia = false;

                if (modulo === 1) {
                    const transferir = parseInt((eTransferencia = prompt("¿Transferir a telefono? \n1: Si \n2: No")) !== null && eTransferencia !== void 0 ? eTransferencia : '0');
                    if (transferir === 1)
                        transferencia = true;
                }

                usuarios.push(modulo, tipoPersona, transferencia);
            } while (true);
            console.log(usuarios);
            return true;
        }
    }
}