//Fecha re realizacion: 17 - 11 - 2020
//Elaborò: Marco Antonio Castillo Escorza

//Siempre que se presione el boton siguiente / anterior manda al TOP de la pagina
const scrollFunction = () => {

    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;

}
//Agregar y modifica el target del boton siguiente en funcion de la pestaña activa
const listenerNext = () => {

    //Se agren listener para mandar al top
    let botonNext = document.getElementById('btnNext').addEventListener("click", () => {
        scrollFunction();
    });

    let botonBack = document.getElementById('btnBack').addEventListener("click", () => {
        scrollFunction();
    });

    const estiloDerecho = (element) => {

        let estilo = "-webkit-animation: scale-in-hor-right 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;\n" +
            "\t        animation: scale-in-hor-right 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;";

        let setEstilo = document.getElementById(element);
        setEstilo.style = estilo;
    }

    const estiloIzquierdo = (element) => {
        let estilo = " -webkit-animation: scale-in-hor-left 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;\n" +
            "\t        animation: scale-in-hor-left 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;";

        let setEstilo = document.getElementById(element);
        setEstilo.style = estilo;

    }

    let btnNext = document.getElementById('btnNext').addEventListener("click", () => {
        let active = $("a.active").prop("name");
        //1era
        if (active == "datos-generales-tab") {

            $('#myTab a[href="#datos-Nacimiento-tab"]').tab('show');
            //estiloDerecho('datos-Nacimiento-tab');

            checkBack();

        }
        //2da
        if (active == "datos-Nacimiento-tab") {
            $('#myTab a[href="#datos-seguridad-social-tab"]').tab('show');
            //estiloDerecho('datos-seguridad-social-tab');
            checkBack();
        }
        //3era
        if (active == "datos-seguridad-social-tab") {
            $('#myTab a[href="#datos-Comunicacion-tab"]').tab('show');
            //estiloDerecho('datos-Comunicacion-tab');
            checkBack();
        }
        //4ta
        if (active == "datos-Comunicacion-tab") {
            $('#myTab a[href="#datos-domicilio-tab"]').tab('show');
            checkBack();
        }
        //5ta
        if (active == "datos-domicilio-tab") {
            $('#myTab a[href="#datos-curriculares-tab"]').tab('show');
            checkBack();
        }
        //6ta
        if (active == "datos-curriculares-tab") {
            //$('#myTab a[href="#docente-tab"]').tab('show');
            checkBack();
            $("a.active").each(function () {
                let id = this.name;
                //console.log(id);
                if (id == "formacion-academica1-tab") {

                    $('#myTab2 a[href="#formacion-adicional1-tab"]').tab('show');
                    //checkBack();

                }
                if (id == "formacion-adicional1-tab") {

                    //console.log("cambiando boton 2");
                    $('#myTab2 a[href="#formacion-Experiencia1-tab"]').tab('show');
                }

                if (id == "formacion-Experiencia1-tab") {
                    //console.log("cambiando boton 1");
                    $('#myTab2 a[href="#docente-tics-tab"]').tab('show');
                }

                if (id == "docente-tics-tab") {
                    //console.log("cambiando boton 1");
                    $('#myTab2 a[href="#docente-lang-tab"]').tab('show');
                }

                if (id == "docente-lang-tab") {
                    //console.log("cambiando boton 1");
                    $('#myTab a[href="#info-tab"]').tab('show');
                }
            });

        }
        //7ma

        //8va
        if (active == "info-tab") {
            //$('#myTab a[href="#archivos-tab"]').tab('show');
            checkBack();
            $("a.active").each(function () {
                let id = this.name;
                //console.log(id);
                if (id == "info-Entrevista-tab") {
                    $('#MyTabs4 a[href="#info-familiares-tab"]').tab('show');
                }

                if (id == "info-familiares-tab") {
                    $('#MyTabs4 a[href="#info-adicional-tab"]').tab('show');
                }

                if (id == "info-adicional-tab") {
                    $('#myTab a[href="#archivos-tab"]').tab('show');
                }
            });
        }
        //9na
        if (active == "archivos-tab"){

            //console.log("Para lllet");
            //Aqui va el modal
            validateSections();

        }
    });


    let btnBack = document.getElementById('btnBack').addEventListener("click", () => {

        let active = $("a.active").prop("name");
        //1eram
        if (active == "datos-generales-tab") {
            //$('#myTab a[href="#datos-Nacimiento-tab"]').tab('show');
            checkBack();
        }
        //2da
        if (active == "datos-Nacimiento-tab") {
            $('#myTab a[href="#datos-generales-tab"]').tab('show');
            checkBack();

        }
        //3era
        if (active == "datos-seguridad-social-tab") {
            $('#myTab a[href="#datos-Nacimiento-tab"]').tab('show');
            checkBack();
        }
        //4ta
        if (active == "datos-Comunicacion-tab") {
            $('#myTab a[href="#datos-seguridad-social-tab"]').tab('show');
            checkBack();
        }
        //5ta
        if (active == "datos-domicilio-tab") {
            $('#myTab a[href="#datos-Comunicacion-tab"]').tab('show');
            checkBack();
        }
        //6ta
        if (active == "datos-curriculares-tab") {
            //$('#myTab a[href="#datos-domicilio-tab"]').tab('show');
            checkBack();

            $("a.active").each(function () {
                let id = this.name;
                //console.log(id);
                if (id == "formacion-academica1-tab") {

                    $('#myTab a[href="#datos-domicilio-tab"]').tab('show');
                    //checkBack();

                }
                if (id == "formacion-adicional1-tab") {

                    //console.log("cambiando boton 2");
                    $('#myTab2 a[href="#formacion-academica1-tab"]').tab('show');
                }

                if (id == "formacion-Experiencia1-tab") {
                    //console.log("cambiando boton 1");
                    $('#myTab2 a[href="#formacion-adicional1-tab"]').tab('show');
                }


                if (id == "docente-tics-tab") {
                    //console.log("cambiando boton 1");
                    $('#myTab2 a[href="#formacion-Experiencia1-tab"]').tab('show');
                }

                if (id == "docente-lang-tab") {
                    //console.log("cambiando boton 1");
                    $('#myTab2 a[href="#docente-tics-tab"]').tab('show');
                }



            });

        }
        //7ma // AQUI HABRA PROBLEMAS :C
        /*        if (active == "docente-tab") {
                    //$('#myTab a[href="#datos-curriculares-tab"]').tab('show');
                    checkBack();
                    $("a.active").each(function () {
                        let id = this.name;
                        if (id == "docente-tics-tab") {

                            //$('#MyTab3 a[href="#docente-lang-tab"]').tab('show');
                            $('#myTab a[href="#datos-curriculares-tab"]').tab('show');
                        }

                        if (id == "docente-lang-tab") {
                            //$('#myTab a[href="#info-tab"]').tab('show');
                            $('#MyTab3 a[href="#docente-tics-tab"]').tab('show');
                        }
                    });
                }

         */
        //8va
        if (active == "info-tab") {
            //$('#myTab a[href="#docente-tab"]').tab('show');
            checkBack();
            $("a.active").each(function () {
                let id = this.name;
                //console.log(id);

                if (id == "info-Entrevista-tab") {
                    //$('#MyTabs4 a[href="#info-familiares-tab"]').tab('show');
                    //$('#myTab a[href="#docente-tab"]').tab('show');
                    $('#myTab a[href="#datos-curriculares-tab"]').tab('show');
                }

                if (id == "info-familiares-tab") {
                    $('#MyTabs4 a[href="#info-Entrevista-tab"]').tab('show');
                }

                if (id == "info-adicional-tab") {
                    $('#MyTabs4 a[href="#info-familiares-tab"]').tab('show');
                }
            });
        }
        //9na
        if (active == "archivos-tab") {
            $('#myTab a[href="#info-tab"]').tab('show');
            checkBack();
        }
    });
}

//Verifica si la pestaña inicial esta en datos-generales
//oculta el boton anterior
//Esto solo funciona para pestañas generales, no subpestanas
const checkBack = () => {
    let boton = document.getElementById('btnBack');
    let active = $("a.active").prop("name");
    if (active == "datos-generales-tab") {
        boton.hidden = true;
    } else {
        boton.hidden = false;
    }
}

//Lo mismo que la function listenerNext, solo que verifica desde la pestaña
function checkBack2(elem) {

    let boton = document.getElementById('btnBack');
    let tabs = elem.name;
    if (tabs !== "datos-generales-tab") {
        //console.log("Distinto");
        boton.hidden = false;
    } else {
        //console.log("igual");
        boton.hidden = true;
    }
}

//Valida el RFC, mas no verifica si existe o no existe
function rfcValidados(rfc, aceptarGenerico = true) {

    const patron = /^([A-ZÑ&]{3,4}) ?(?:- ?)?(\d{2}(?:0[1-9]|1[0-2])(?:0[1-9]|[12]\d|3[01])) ?(?:- ?)?([A-Z\d]{2})([A\d])$/;
    let validado = rfc.match(patron);

    if (!validado) {
        return false;
    }

    const digitoVerificador = validado.pop();
    const rfcSinDigito = validado.slice(1).join('');
    const len = rfcSinDigito.length;

    const diccionario = "0123456789ABCDEFGHIJKLMN&OPQRSTUVWXYZ Ñ";
    const indice = len + 1;
    let suma;
    let digitoEsperado;

    if (len == 12) {
        suma = 0;
    } else {
        suma = 481;
    }

    for (let i = 0; i < len; i++)
        suma += diccionario.indexOf(rfcSinDigito.charAt(i)) * (indice - i);
    digitoEsperado = 11 - suma % 11;
    if (digitoEsperado == 11) digitoEsperado = 0;
    else if (digitoEsperado == 10) digitoEsperado = "A";

    //El dígito verificador coincide con el esperado?
    // o es un RFC Genérico (ventas a público general)?
    if ((digitoVerificador != digitoEsperado)
        && (!aceptarGenerico || rfcSinDigito + digitoVerificador != "XAXX010101000"))
        return false;
    else if (!aceptarGenerico && rfcSinDigito + digitoVerificador == "XEXX010101000")
        return false;
    return rfcSinDigito + digitoVerificador;

}


//Handler para el evento cuando cambia el input
// -Lleva la RFC a mayúsculas para validarlo (Solo aqui, se tiene que implementar cuando el usuario escriba)
// -Elimina los espacios que pueda tener antes o después
//http://mariano.freelet.com/rfc/Algoritmo-RFC.odt LEAN ANTES DE MODIFICAR
const validarInputRFC = (input) => {
    mayus(input);

    let rfc = input.value.trim().toUpperCase();
    let divCorrecto = document.getElementById('rfcValido')
    let divincorrecto = document.getElementById('rfcinValido')

    let rfcCorrecto = rfcValidados(rfc);   // ⬅️ Acá se comprueba

    if (rfcCorrecto) {
        //console.log("correcto");
        $('#rfcValido').css('display', '');
        divincorrecto.setAttribute('hidden', true);
        divCorrecto.removeAttribute('hidden');
        divCorrecto.innerText = "NSS válido";
        //$('#rfcValido').hide(5000);


    } else {
        //console.log("incorrecto");
        divCorrecto.setAttribute('hidden', true);
        divincorrecto.removeAttribute('hidden')
        divincorrecto.innerText = "NSS Inválido";
    }
}


//valida el curp dado
const validarCURP = (curp) => {

    // function regex para validar
    let reg = /^([A-Z][AEIOUX][A-Z]{2}\d{2}(?:0[1-9]|1[0-2])(?:0[1-9]|[12]\d|3[01])[HM](?:AS|B[CS]|C[CLMSH]|D[FG]|G[TR]|HG|JC|M[CNS]|N[ETL]|OC|PL|Q[TR]|S[PLR]|T[CSL]|VZ|YN|ZS)[B-DF-HJ-NP-TV-Z]{3}[A-Z\d])(\d)$/;
    let validado = curp.match(reg);

    if (!validado) {
        return false;
    }

    //funcion interna que valida y hacer coincidir el digito verificador
    function digitoVerificador(curp17) {

        let diccionario = "0123456789ABCDEFGHIJKLMNÑOPQRSTUVWXYZ";
        let lngSuma = 0.0;
        let lngDigito = 0.0;
        for (let i = 0; i < 17; i++)
            lngSuma = lngSuma + diccionario.indexOf(curp17.charAt(i)) * (18 - i);
        lngDigito = 10 - lngSuma % 10;
        if (lngDigito == 10) return 0;
        return lngDigito;
    }

    if (validado[2] != digitoVerificador(validado[1]))
        return false;
    return true;
}

//Valida el CURP dado del input señalado
const validarInputCURP = (input) => {
    mayus(input);
    let curp = input.value.toUpperCase();
    let divCorrecto = document.getElementById('curpValido');
    let divincorrecto = document.getElementById('curpinValido');

    if (validarCURP(curp)) {
        //console.log("valido");

        $('#curpValido').css('display', '');
        divincorrecto.setAttribute('hidden', true);
        divCorrecto.removeAttribute('hidden');
        divCorrecto.innerText = "CURP válido";
        //$('#curpValido').hide(5000);
    } else {
        //console.log('invalido');
        divCorrecto.setAttribute('hidden', true);
        divincorrecto.removeAttribute('hidden')
        divincorrecto.innerText = "CURP Inválido";

    }
}

//valida que no hagan doble espacios NI COPIEN NI PEGUEN
//In section called "Datos generales"
//This is a valid function, its works!
const validarInput = () => {

    //Elimina espacios en blanco y permite caracteres especiales
    //Lo recomencable es usarlos para tipo nombre etc...
    let reg = /^\s+|\s+$|\s+(?=\s)|[^[a-zA-ZáéíóúÁÉÍÓÚñÑ]/g;
    //let reg2 = /^[a-zA-ZáéíóúÁÉÍÓÚñÑ]+(?: [a-zA-ZáéíóúÁÉÍÓÚñÑ]+)*$/;};


    //elimina los espacios en blanco...
    let expresion = /^\s+|\s+$|\s+(?=\s)/g;

    //elementosGrales de seccion Datos generales..
    //Accedemos a los elemmentos del formulario
    let nombre = document.getElementById('nombres');
    let apmaterno = document.getElementById('paterno');
    let apPaterno = document.getElementById('materno');
    let curP = document.getElementById('curp');
    let rfc = document.getElementById('RFC');

    //Agregamos listeners de tipo "onimput", elimina la posibilidad de copiar o pegar
    nombre.addEventListener('input', () => {
        nombre.value = nombre.value.replace(reg, " ");
    });
    $('#nombres').bind('copy paste', function (e) {
        e.preventDefault();
        return false;
    });

    apPaterno.addEventListener('input', () => {
        apPaterno.value = apPaterno.value.replace(reg, " ");
    });
    $('#paterno').bind('copy paste', function (e) {
        e.preventDefault();
        return false;
    });


    apmaterno.addEventListener('input', () => {
        apmaterno.value = apmaterno.value.replace(reg, " ");
    });
    $('#materno').bind('copy paste', function (e) {
        e.preventDefault();
        return false;
    });


    ///////////////CASO ESPECIAL//////////////////
    //Verificar si se le permite a -u 777 o 755
    curP.addEventListener('input', () => {
        curP.value = curP.value.replace(expresion, " ");
    });

    rfc.addEventListener('input', () => {
        rfc.value = rfc.value.replace(expresion, " ");
    });
}

//pone en mayusculas los inputs requeridos (SOLO CURP Y RFC)
function mayus(elemet) {
    elemet.value = elemet.value.toUpperCase();
}

const valorDobleNacionadlida1 = (elemento) => {
    const valor = elemento.checked;
    let item = document.getElementById('body-nacionalidades');

    if (valor) {
        $('#bodyNacionalidades').show("fast");
        item.removeAttribute("data-new");
    }
}


const valorDobleNacionadlida2 = (elemento) => {
    const valor = elemento.checked;
    let item = document.getElementById('body-nacionalidades');
    let body = document.getElementById('contenidoNaciones');
    let size = body.children.length;

    let form = document.getElementById('naciones-multiform2');
    let select = form.children[0].children[0].children[0];
    console.log(select)


    if (valor) {
        $('#bodyNacionalidades').hide("fast");
        item.setAttribute("data-new", "true");
        if (size >= 1) {
            //Aqui tiene que remover dependiendo de la cantidad
            $("#contenidoNaciones").empty();

            select.selectedIndex = "-1";
            $("#contenidoNaciones").append(form);
        }

    }
}

//elementos que por defecto estaran ocultos
const elementosHidden = () => {
    $('#bodyNacionalidadess').hide();
    $('#numCreditoDIV').hide();
    $('#catalogoAforeDIV').hide();
    $('#divLengua').hide();
    $('#divDiscapacidad').hide();

    //Desabilita todo el formulario de herramientas
    $("#docente-tics-form :input[class='form-control']").prop("disabled", true);
}

//Agrega y elimina funcion

function agregarNacion(element) {
    let j = Math.floor(Math.random() * 10000000000000000);
    let form = document.getElementById('naciones-multiform2');
    let clone = form.cloneNode(true);
    clone.id = "naciones-multform2" + j;
    clone.name = "naciones-multform2" + j;
    let destino = document.getElementById('contenidoNaciones');
    let long = element.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode;
    let longitud = long.children.length;
    if (longitud >= 5) {

        swal("Tienes muchas nacionalidades");

    } else {
        destino.appendChild(clone);
    }
}

function eliminarNacion(element) {

    let original = element.parentNode.parentNode.parentNode.parentNode.parentNode;
    //console.log(original)
    let long = element.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode;
    let longitud = long.children.length;
    if (longitud <= 1) {

        swal("Debe existir al menos un idioma");

    } else {
        original.remove();
    }
}


//en esta parte se trabajara la seccion seguridad social
//primero ocultar infona... y aforore
const infonavitValor1 = (element) => {
    let valor = element.checked;
    if (valor) {
        $("#numCreditoDIV").show("fast");
    }
}

const infonavitValor2 = (element) => {
    let valor = element.checked;
    let numeroCredito = document.getElementById('numCredito');
    if (valor) {
        $("#numCreditoDIV").hide("fast");
    }
    numeroCredito.value = "";
}

const aforeValor1 = (element) => {
    let valor = element.checked;

    if (valor) {
        getListaAfore();
        $("#catalogoAforeDIV").show("fast");
    }


}

const aforeValor2 = (element) => {
    let valor = element.checked;
    let select = document.getElementById('catalogoAfore');
    if (valor) {
        $("#catalogoAforeDIV").hide("fast");

    }
    select.selectedIndex = "-1";
}

const validarInfonavit = (element) => {
    espaciosEnBlanco(element);

}

//valida el dia, mes anio de campo fecha de nacimiento en seccion datos de nacimiento
function validacionNacimiento() {

    let inputNacimiento = document.getElementById('fechaNacimiento');

    inputNacimiento.addEventListener('input', () => {

        let format = '00 / 00 / 0000';
        let formatted = inputNacimiento.value;
        let numeric = inputNacimiento.value.replace(/\D/g, '');

        function hasErrors(val) {
            let month = val.slice(0, 2);
            let day = val.slice(2, 4);
            let year = val.slice(4);
            if (!month.length) {
                return false;
            }
            if (month.length === 1) {
                month += month === '0' ? '1' : '0';
            }
            if (+month > 12 || +month <= 0) {
                return true;
            }
            if (!day.length) {
                return false;
            }
            if (day.length === 1) {
                day += day === '0' ? '1' : '0';
            }
            if (+day > 31 || +day <= 0) {
                return true;
            }
            if (year.length < 4) {
                // First year with a 29 Feb after 1970
                year = '1972';
            }
            let sourceStr = [year, month, day].join('-');
            let date = new Date(sourceStr);
            // Cases like 02/31/2019
            if (!+date || date.toISOString().slice(0, 10) !== sourceStr) {
                return true;
            }
            return false;
        }

        function checkDateErrors(val) {
            if (hasErrors(val || numeric)) {
                //inputNacimiento.classList.add('error');
                console.log("ERRRROR");
            } else {
                //input.classList.remove('error');
                console.log("pass");
            }
        }


        let val = inputNacimiento.value || '';
        let numVal = val.replace(/\D/g, '');

        // Keep cursor position
        let sourcePos = inputNacimiento.selectionStart;
        if (sourcePos === undefined) sourcePos = val.length;
        let pos = sourcePos;
        let numPos = val.slice(0, pos).replace(/\D/g, '').length;

        if (val.length === formatted.length - 1 && numVal === numeric && numPos > 0) {
            numVal = numVal.slice(0, numPos - 1) + numVal.slice(numPos);
            numPos--;
        }
        // Remove undesired characters
        let currentPos = 0;
        let formattedPos = 0;
        let newFormatted = format.replace(/\d(\D*)/g, (match, capture) => {
            if (currentPos < numPos) {
                formattedPos += capture.length + 1;
            }
            return currentPos < numVal.length ? numVal[currentPos++] + capture : '';
        });
        let newNumeric = newFormatted.replace(/\D/g, '');

        // checkDateErrors(newNumeric);
        if (hasErrors(newNumeric)) {
            newFormatted = formatted;
            newNumeric = numeric;
            formattedPos = sourcePos;
        }

        formatted = newFormatted;
        numeric = newNumeric;
        inputNacimiento.value = formatted;
        inputNacimiento.setSelectionRange(formattedPos, formattedPos)
    })
}

//Elimina los dobles espacios en input
const espaciosEnBlanco = (element) => {

    let reg = /^\s+|\s+$|\s+(?=\s)|[^[0-9]/g;
    element.value = element.value.replace(reg, "");
    let item = element.id;

    $('#' + item).bind('copy paste', (e) => {
        e.preventDefault();
        return false;
    });

}

//leer sobre algoritmo de luhn si se desea dessarrollar o modificar esta parte
function validarNSS(element) {

    espaciosEnBlanco(element);

    let nss = element.value.replace(/\D+/g, "");
    let divCorrecto = document.getElementById('NSSValido')
    let divincorrecto = document.getElementById('NSSinValido')

    if (nssValido(nss)) { // ️ Acá se comprueba

        //console.log("valido");
        $('#NSSValido').css('display', '');
        divincorrecto.setAttribute('hidden', true);
        divCorrecto.removeAttribute('hidden');
        divCorrecto.innerText = "RFC válido";

    } else {

        divCorrecto.setAttribute('hidden', true);
        divincorrecto.removeAttribute('hidden')
        divincorrecto.innerText = "RFC Inválido";

    }
}


//devuelve booleano si es un nss válido
function nssValido(nss) {
    const re = /^(\d{2})(\d{2})(\d{2})\d{5}$/,
        validado = nss.match(re);

    if (!validado)  // 11 dígitos y subdelegación válida?
        return false;

    const subDeleg = parseInt(validado[1], 10),
        anno = new Date().getFullYear() % 100;
    let annoAlta = parseInt(validado[2], 10),
        annoNac = parseInt(validado[3], 10);

    //Comparar años (excepto que no tenga año de nacimiento)
    /*
        Luego de validar que son 11 dígitos y haber separado los 3 primeros campos,
        se compara que el año de nacimiento sea previo al de inscripción.
        Como sólo contamos con los últimos dígitos del año,
        se agrega 100 al número si es menor al año actual
        (así '05 será mayor a '99 por ejemplo).
     */
    if (subDeleg != 97) {
        if (annoAlta <= anno) annoAlta += 100;
        if (annoNac <= anno) annoNac += 100;
        if (annoNac > annoAlta)
            return false; // Err: se dio de alta antes de nacer!
    }

    return luhn(nss);
}

// Algoritmo de Luhn
/*
    la principal validación es por el algoritmo de Luhn, que consta en tomar
    los dígitos en posiciones impares, y los dígitos en posiciones pares multiplicados
    por 2. Se suman todos los dígitos (si alguno de estos fuese mayor o
    igual a 10 se toma la suma de cada dígito).
 */
function luhn(nss) {
    let suma = 0,
        par = false,
        digito;

    for (let i = nss.length - 1; i >= 0; i--) {
        let digito = parseInt(nss.charAt(i), 10);
        if (par)
            if ((digito *= 2) > 9)
                digito -= 9;

        par = !par;
        suma += digito;
    }
    return (suma % 10) == 0;
}

// Se obtiene un origen, se clona y se agrega en destino
function agregarTel(element) {
    let j = Math.floor(Math.random() * 10000000000000000);
    let original = document.getElementById('datos-telefonos2');
    let clone = original.cloneNode(true);
    clone.id = "datos-telefono2" + j;
    clone.name = "datos-telefono2" + j;
    let destino = element.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode;
    let longitud = destino.children.length;

    if (longitud >= 2) {
        swal("Solo se tienen que agregar 2 números de teléfono")

    } else {
        destino.appendChild(clone);
    }

}

function removerTelefono(element) {
    let original = element.parentNode.parentNode.parentNode.parentNode.parentNode;
    let destino = element.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode;
    let longitud = destino.children.length;

    if (longitud <= 1) {
        swal("Debe de haber al menos un número de telefono");
    } else {
        original.remove();
    }
}

function agregarCorreo(element) {
    let j = Math.floor(Math.random() * 10000000000000000);
    let original = document.getElementById('datos-correos2');
    let clone = original.cloneNode(true);
    clone.id = "datos-correos2" + j;
    clone.name = "datos-correos2" + j;
    let destino = element.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode;
    let longitud = destino.children.length;

    if (longitud >= 2) {
        swal("Solo se tienen que agregar 2 correos");

    } else {
        destino.appendChild(clone);
    }
}

function removerCorreo(element) {
    let original = element.parentNode.parentNode.parentNode.parentNode.parentNode;
    let destino = element.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode;
    let longitud = destino.children.length;

    if (longitud <= 1) {
        swal("Debe de haber al menos un correo electronico de contacto");
    } else {
        original.remove();
    }
}

function agregarFormAcademica(element) {
    let j = Math.floor(Math.random() * 10000000000000000);
    let origen = document.getElementById('formacion-academica-form12');
    let clone = origen.cloneNode(true);

    clone.id = "formacion-academica-form12" + j;
    clone.name = "formacion-academica-form12" + j;
    //console.log(clone);

    let destino = element.parentNode.parentNode.parentNode.parentNode.parentNode;

    let longitud = destino.children.length;

    //Hay limite???
    //destino.appendChild(clone);

    let doc1 = clone.children[2].children[1].children[0];
    doc1.id = "documentB1" + j;
    let doc2 = clone.children[2].children[2].children[0];
    doc2.id = "documentB2" + j;

    let areasCon = clone.children[1].children[0];
    areasCon.id = "areaConDIV" + j;

    destino.appendChild(clone);


}

function removerFormAcademica(element) {
    let original = element.parentNode.parentNode.parentNode.parentNode.parentNode;
    //console.log(original);
    let longitud = original.children.length;
    //console.log(longitud)

    let destino = element.parentNode.parentNode.parentNode.parentNode;
    //console.log(destino)

    if (longitud <= 1) {
        swal("Debe de haber al menos un nivel de estudio");
    } else {
        destino.remove();
    }
}


function agregarFormAdicional(element) {

    let j = Math.floor(Math.random() * 10000000000000000);
    let origen = document.getElementById('formacion-adicional-form2');
    let clone = origen.cloneNode(true)
    clone.id = "formacion-adicional-form2" + j;
    clone.name = "formacion-adicional-form2" + j;

    let destino = document.getElementById('formacionAdicional1');

    //Se busca el elemento para asignalo a datepicker
    let inputID = clone.children[1].children[1].children[1];
    inputID.id = "anioCapacitacion" + j;

    //Obtenemos el id Generado
    let idInput = clone.children[1].children[1].children[1].id;

    //Cambiar nombre a los divs del documento
    let doc1 = clone.children[3].children[1];
    doc1.id = "habilidaDC3" + j;

    let doc2 = clone.children[4].children[1];
    doc2.id = "competenciaDC3" + j;

    //Ocupo el elemento obtenido y aplico datepicker
    destino.appendChild(clone);
    agregarDatePicker(idInput);

}


function removerFormAdicional(element) {

    let origen = element.parentNode.parentNode.parentNode.parentNode.parentNode;
    let origen2 = element.parentNode.parentNode.parentNode.parentNode;
    let longitud = origen.children.length;

    if (longitud <= 1) {

        swal("Debe de al menos contar con alguna capacitacion");

    } else {

        origen2.remove();
    }
}


//Rama testing


function agregarFormExperiencia(element) {

    //Recuerda que cada qwue se clonen los elemeentos
    //Tienes que seleecionar datepicker en fechassss
    let j = Math.floor(Math.random() * 10000000000000000);
    let origin = document.getElementById('formacion-experiencia22');
    let clone = origin.cloneNode(true);
    let destino = document.getElementById('formacion-experiencia1');

    clone.id = "formacion-experiencia22" + j;
    clone.name = "formacion-experiencia22" + j;

    //Obtener id de inicio y termino :)
    let idInputTermino = clone.children[1].children[1].children[1];
    let idInputInicio = clone.children[1].children[0].children[1];

    idInputInicio.id = "fechaInicioActividades" + j;
    idInputTermino.id = "fechaTerminoActividades" + j;

    let inicio = idInputTermino.id;
    let fin = idInputInicio.id;

    destino.appendChild(clone);

    agregarDatePicker(inicio)
    agregarDatePicker(fin)

}

function removerFormExperiencia(element) {

    let origen = element.parentNode.parentNode.parentNode.parentNode;


    let origenPadre = element.parentNode.parentNode.parentNode.parentNode.parentNode;
    let longitud = origenPadre.children.length;


    if (longitud <= 1) {
        swal("Debera de agregar al menos contar con un elemento");
    } else {

        origen.remove();
    }
}

function agregarFormIdioma(element) {
    let j = Math.floor(Math.random() * 10000000000000000);
    let origen = document.getElementById('docente-idiomas-form2');
    let clone = origen.cloneNode(true);
    clone.id = 'docente-idiomas-form2' + j;
    clone.name = 'docente-idiomas-form2' + j;
    let destino = element.parentNode.parentNode.parentNode.parentNode.parentNode;

    let input = clone.children[1].children[1].children[1];
    input.id = 'anioIdioma' + j;

    let anioIdioma = input.id;

    //console.log(input);
    destino.appendChild(clone);
    agregarDatePicker(anioIdioma);

}

function removerFormIdioma(element) {

    let destino = element.parentNode.parentNode.parentNode.parentNode.parentNode;
    let origen = element.parentNode.parentNode.parentNode.parentNode;
    let longitud = destino.children.length;

    if (longitud <= 1) {
        swal("Debe de existir al menos una certificacion de idioma");
    } else {
        origen.remove();
    }
}

//Solicitar Elemennto a Miguel para establecerlos en Vista- Seccion Datos Curriculares->Formacion Adicional
function valorConstanciaHabilidades1(element) {

    let valor = element.checked;
    let elementoPadre = element.parentNode.parentNode.parentNode.children[1];
    let idElemento = elementoPadre.id;

    if (valor) {
        $("#" + idElemento).show("fast");
    }
}

function valorConstanciaHabilidades2(element) {

    let valor = element.checked;
    let elementoPadre = element.parentNode.parentNode.parentNode.children[1];
    let idElemento = elementoPadre.id;
    //Igualar valor de input y "Buscar elemento"
    let input = elementoPadre.children[1].children[1].children[0];
    let textinput = elementoPadre.children[1].children[1].children[1];

    if (valor) {
        $("#" + idElemento).hide("fast");
        input.value = '';
        textinput.innerText = 'Buscar documento';
    }
}

function valorAcreditacionCompetencias1(element) {
    let valor = element.checked;
    let elementoPadre = element.parentNode.parentNode.parentNode.children[1];
    let idElemento = elementoPadre.id;

    if (valor) {
        $("#" + idElemento).show("fast");
    }

}

function valorAcreditacionCompetencias2(element) {
    let valor = element.checked;
    let elementoPadre = element.parentNode.parentNode.parentNode.children[1];
    let idElemento = elementoPadre.id;
    //Igualar valor de input y "Buscar elemento"
    let input = elementoPadre.children[1].children[1].children[0];
    let textinput = elementoPadre.children[1].children[1].children[1];

    if (valor) {
        $("#" + idElemento).hide("fast");
        input.value = '';
        textinput.innerText = 'Buscar documento';
    }
}

//##################################
//Queda pendioente:
//Validaciones, restricciones,
//Pedir elementos
//Conectarlo
//Vista cronommetros
//##################################
//No tiene limite, establecer LIMITE
function agregarFormFamiliar(element) {

    let origen = document.getElementById('info-familiares-form2')
    let clone = origen.cloneNode(true);
    let destino = element.parentNode.parentNode.parentNode.parentNode.parentNode;
    destino.appendChild(clone);
}

function removerFormFamiliar(element) {
    let origen = element.parentNode.parentNode.parentNode.parentNode;
    let destino = element.parentNode.parentNode.parentNode.parentNode.parentNode;
    //console.log(origen)
    let longitud = destino.children.length;

    if (longitud <= 1) {
        swal("No puede haber campos vacios");
    } else {
        origen.remove();
    }
}

function getDataFORM() {
    let formulario = document.getElementById("datos-Nacimiento");
    let formValues = {};
    let form1Inputs = formulario.getElementsByTagName('input');
    for (let i = 0; i < form1Inputs.length; i++) {
        formValues[form1Inputs[i].name] = form1Inputs[i].value;
    }
    console.log(formValues);
}

//Changes pendient
//divLengua
//Doble funcion if checked==TRUE :C
function showLenguaIndigena1(element) {
    let valor = element.checked;

    if (valor) {
        $('#divLengua').show('fast');
    }
}

//Limpiar Input
function showLenguaIndigena2(element) {
    let valor = element.checked;
    if (valor) {
        $('#divLengua').hide('fast');
    }
}

//divDiscapacidad
function showDiscapacidad1(element) {
    let valor = element.checked;
    if (valor) {
        $('#divDiscapacidad').show('fast');
    }
}


function showDiscapacidad2(element) {
    let valor = element.checked;
    if (valor) {
        $('#divDiscapacidad').hide('fast');
    }
}

function enableInput(element) {

    let chkOk = element.checked;
//    console.log(chkOk);

    let clasePadre = element.parentNode.parentNode.parentNode;
    let input = clasePadre.children[1].children[0];
    //console.log(input)

    if (chkOk) {
        input.disabled = false;
    } else {
        input.disabled = true;
        input.value = "";
    }
}

//valida campo de lugar de nacimiento
//Seccion Datos Nacimiento
const validacionLugar = (element) => {

    let reg = /^\s+|\s+$|\s+(?=\s)|[^[a-zA-ZáéíóúÁÉÍÓÚñÑ]/g;
    element.value = element.value.replace(reg, " ");
    $('#' + element.id).bind('copy paste', (e) => {
        e.preventDefault();
        return false;
    });

}


//VALIDA LADA (es decir, solo permite 3 valores)
const validarLADA = (element) => {
    let reg = /[^0-9.]/g;
    element.value = element.value.replace(reg, "");
    $('#' + element.id).bind('copy paste', (e) => {
        e.preventDefault();
        return false;
    });
}


//valida numero de telefono (No permite pegar en el segundo)
//Se debe considerar una SOLA funcion para englobe TODO la validacion
const validarNUM = (element) => {
    let reg = /[^0-9.]/g;
    element.value = element.value.replace(reg, "");
    $('#' + element.id).bind('copy paste', (e) => {
        e.preventDefault();
        return false;
    });
}
//Carga los Datepicker en el input determinado
//esto se puede mejorar MUCHO MEJOR
//carga el componente datepicker en componente indicado
const agregarDatePicker = (elementID) => {
    $('#' + elementID).datepicker({
        uiLibrary: 'bootstrap4',
        iconsLibrary: 'fontawesome',
        // minDate: new Date( new Date().setDate(fecha + 0)),
        dateFormat: "mm-dd-yy"

    });
}

//CORREO VALIDACION CORREO CORRECTO
const mailAutoCompletado = () => {

}

const validarCalle = () => {


    let street = document.getElementById('calleResidencia');
    let numbers = document.getElementById('numExt');
    let numbers2 = document.getElementById('numInteriorResidencia');
    let PostalCode1 = document.getElementById('codigopostalResidencia');

    let streetAlt = document.getElementById('calleAlt');
    let numbersAlt = document.getElementById('numExtAlt');
    let numbers2Alt = document.getElementById('numInteriorAlt');
    let PostalCode2 = document.getElementById('codigopostalAlt');

    //no es lo correcto, pero no encuenbtro otra manera
    agregarListener(street);
    agregarListener(numbers);
    agregarListener(numbers2);
    agregarListenerNumeros(PostalCode1);

    //Esto es para campos alternativos
    agregarListener(streetAlt);
    agregarListener(numbersAlt);
    agregarListener(numbers2Alt);
    agregarListenerNumeros(PostalCode2);
}

//Elimina doble espacios y permite caracteres espaciles - si se modifica verificar a que input van relacionados
//permite numero
const agregarListener = (element) => {

    let reg = /^\s+|\s+$|\s+(?=\s)|[^[0-9a-zA-ZáéíóúÁÉÍÓÚñÑ]/g;
    element.addEventListener('input', () => {
        element.value = element.value.replace(reg, " ");
    });

    //Tampoco permitir copiar pegar
    let test = element.id;
    $('#' + test).bind('copy paste', function (e) {
        e.preventDefault();
        return false;
    });
}
//Con puntos y comas
const agregarListener2 = (element) => {

    let reg = /^\s+|\s+$|\s+(?=\s)|[^[0-9a-zA-ZáéíóúÁÉÍÓÚñÑ_\.,-]/g;
    element.addEventListener('input', () => {
        element.value = element.value.replace(reg, " ");
    });

    //Tampoco permitir copiar pegar
    let test = element.id;
    $('#' + test).bind('copy paste', function (e) {
        e.preventDefault();
        return false;
    });
}

//Lo mismo que la anterior, solo que aqui no permite NUMERO
const agregarListenerNoN = (element) => {

    let reg = /^\s+|\s+$|\s+(?=\s)|[^[a-zA-ZáéíóúÁÉÍÓÚñÑ]/g;
    element.addEventListener('input', () => {
        element.value = element.value.replace(reg, " ");
    });

    //Tampoco permitir copiar pegar
    let test = element.id;
    $('#' + test).bind('copy paste', function (e) {
        e.preventDefault();
        return false;
    });
}
//Elimina doble espacios y permite caracteres espaciles
const agregarListenerNumeros = (element) => {

    let reg = /^\s+|\s+$|\s+(?=\s)|[^[0-9]/g;
    element.addEventListener('input', () => {
        element.value = element.value.replace(reg, "");
    });

    //Tampoco permitir copiar pegar
    let test = element.id;
    $('#' + test).bind('copy paste', function (e) {
        e.preventDefault();
        return false;
    });
}


const valorFamiliares1 = (element) => {

    let valor = element.checked;
    let itemDivFamilia = document.getElementById('sectionFamilia');
    if (valor) {
        itemDivFamilia.style = "opacity:1; opacity 0.5 linear;"
    }

}

const valorFamiliares2 = (element) => {
    let valor = element.checked;
    let itemDivFamilia = document.getElementById('sectionFamilia');
    if (valor) {
        itemDivFamilia.style = "opacity: 0;";
    }

}

//Obtiene lista de afores desde controlador
const getListaAfore = () => {

    $.ajax({
        type: 'POST',
        url: '/getAfores',
        data: {
            '_token': $('meta[name="csrf-token"]').attr('content'),
        }, success: function (data) {
            //console.table(data);
            //Eliminando opciones y agregandolas a elementos
            let catalogo = document.getElementById('catalogoAfore');

            //eliminadno elemento con index 11 id:0 y descriocion "Sin afore"
            let itemBorrar = 0;
            let index = data.indexOf(itemBorrar);
            data.splice(index, 1)
            //remover opciones y agregando opcion
            eliminarCatalogoOcultar('catalogoAfore')
            data.forEach((item) => {
                let option = document.createElement('option')
                option.value = item.idInstitucionAfore;
                //option.value = item.institucionAfore;
                option.text = item.institucionAfore;
                catalogo.add(option);
            });
        }
    });
}

const obtenerEstado = (element) => {
    //console.log(element.value);
    let idPais = element.value;
    let valorEstado = document.getElementById('Estado');
    let valorProvincia = document.getElementById('Provincia');
    valorEstado.value = "";
    valorProvincia.value = "";

    if (idPais === "1") {
        $('#form-files1').show("fast");
        $('#form-files2').hide("fast");

        console.log("Es mejico");
        $('#EstadoDIV').hide("fast");
        $('#ProvinciaDIV').hide("fast");

        eliminarCatalogoOcultar('entidad');
        eliminarCatalogoOcultar('municipio');


        $('#entidad-federal').show("fast");
        $('#municipio-federal').show("fast");

        //Obtener Estados de la misma manera
        getEstados();


    } else {

        console.log("No es mexico")
        $('#form-files1').hide("fast");
        $('#form-files2').show("fast");

        $('#EstadoDIV').show("fast");
        $('#ProvinciaDIV').show("fast");

        $('#entidad-federal').hide("fast");
        $('#municipio-federal').hide("fast");

        //Agregar funcion eliminar catalogoOcultar
        eliminarCatalogoOcultar('entidad');
        eliminarCatalogoOcultar('municipio');
    }
}


const getEstados = () => {

    $.ajax({
        type: 'GET',
        url: '/getEstados',
        data: {
            '_token': $('meta[name="csrf-token"]').attr('content'),
        }, success: (data) => {
            let catalogo = document.getElementById('entidad');
            //Eliminando elemento 0
            data.splice(0, 1);
            //remover opciones y agregando opcion
            eliminarCatalogoOcultar('entidad');
            data.forEach((item) => {
                let option = document.createElement('option')
                option.value = item.idEntidadFederativa;
                //option.value = item.institucionAfore;
                option.text = item.entidadFederativa;
                catalogo.add(option);
            });

        }
    });
}


const obtenerMunicipio = (element) => {

    //valor select actual
    let valor = element.value;
    $.ajax({
        type: 'GET',
        url: '/getMunicipios/' + valor,
        data: {
            '_token': $('meta[name="csrf-token"]').attr('content'),
        }, success: (data) => {

            console.table(data);
            let catalogo = document.getElementById('municipio');

            eliminarCatalogoOcultar('municipio');

            data.forEach((item) => {
                let option = document.createElement('option')
                option.value = item.idMunicipio;
                //option.value = item.institucionAfore;
                option.text = item.municipio;
                catalogo.add(option);
            });
        }
    });


}

const eliminarCatalogoOcultar = (item) => {

    //Remueve elementos para no sobreescribir
    let catalogo = document.getElementById(item)
    for (let i = catalogo.length; i > 0; i--)
        catalogo.remove(i - 1);

    //Agregando opcion 1
    let optionDisable = document.createElement('option');
    optionDisable.selected = true;
    optionDisable.text = "...";
    optionDisable.disabled = true;
    catalogo.add(optionDisable);

}


//####################################
//#####Empieza la validacion##########
//#####15 de diciembre de 2020########
//####################################

/*
  /}_{\           /.-'
 ( a a )-.___...-'/
 ==._.==         ;
      \ i _..._ /,
      {_;/   {_//  o
 */

//Primera validacion de seccion dae datos generales


const validacionDatosGral = () => {
    //const formulario = document.getElementsByName('datosgral-form');
    let flag = false;
    let form_data = $('#datosgral-form').serializeJSON();

    //validando cada campo
    if (form_data.nombres.trim() === '' || form_data.paterno.trim() === '' ||
        form_data.materno.trim() === '' || form_data.genero === undefined ||
        form_data.estadoCivil === undefined || form_data.curp.trim() === '' ||
        form_data.rfc.trim() === '') {
        flag = true
    }
    //tambien se tiene que validar el RFC Y CURP
    return flag;
}


const validacionDatosGralCR = () => {
    let flag = false;
    let curp1 = document.getElementById('curp').value;
    let rfc = document.getElementById('RFC').value;
    if (validarCURP(curp1) && rfcValidados(rfc)) {
        flag = false;
    } else {
        console.log("invalidos")
        flag = true;
    }
    return flag;
}


//Segunda validacion de seccion de datos de nacimiento
//tener en cuenta ambos formularios (Gral y nacionalidad)
//Se tiene que crear una funcion que valide fecha de nacimiento, curp, rfc y NSS
// No pueden ser mayores a fecha actual o menor a 18 años, pero ya que se tengan estos detalles
//se tiene que solventar a consideración


////////////////////////SEGUNDA VALIDACION/////////////////////////////
//Las validacion van a depender del pais
//Son 2 validaciones, para extranjeros y para nacionales....aqui vamos :)
//esta es general
const validacionDatosBirth = () => {
    let flag = false;
    //Obteniendo datos de formulario general
    let form_data = $('#datos-Nacimiento').serializeJSON();

    if (form_data.paisOrigen === '1') {
        //console.log("Es mexicano");
        if (form_data.fechaNacimiento.trim() === '' || form_data.entidad === undefined ||
            form_data.municipio === undefined || form_data.lugarActa.trim() === '') {
            flag = true
        }
    } else {
        //console.log("extranjero o no ha seleccionado nada");
        if (form_data.fechaNacimiento.trim() === '' || form_data.Estado.trim() === '' ||
            form_data.Provincia.trim() === '' || form_data.lugarActa.trim() === '') {

            flag = true
        }
    }
    return flag;
}

//Esta va junto con validacionDatosBirth o podria ser independiente
const validacionNacion = () => {
    let flag = false;
    let value1 = document.getElementById('nacionalidadRadioSi');
    let value2 = document.getElementById('nacionalidadRadioNo');
    if (value1.checked || value2.checked) {

        if (value2.checked) {
            flag = false;
        } else {
            //console.log("Si es extranjero")
            //flag = false;
            flag = validacionNacionValores();
        }

    } else {
        //console.log("No estan checados");
        flag = true;
    }
    return flag;
}

//Function secondary
const validacionNacionValores = () => {

    let flag = false;
    let contenedor = document.getElementById('contenidoNaciones');
    Array.from(contenedor.children).forEach((form) => {

        //console.log(form.id);
        let contenido = $('#' + form.id).serializeJSON();
        //console.log(contenido.pais);
        if (contenido.pais === undefined) {
            flag = true;
        }
    });
    return flag;
}
////


////////////////////////TERCERA VALIDACION/////////////////////////////
//funcion primaria
const validacionSeguridadSocial = () => {
    let flag = false;
    let form_data = $('#seguridad-social').serializeJSON();
    console.log(form_data);

    if (form_data.factorRH === undefined || form_data.grupoSanguineo === undefined ||
        form_data.numeroSS === '' || form_data.numCredito === '') {
        flag = true;
    }
    return flag;
}

//Funcion secundaria para validar NSS
const validateNSS = () => {
    let flag = false;
    let form_data = $('#seguridad-social').serializeJSON();

    if (nssValido(form_data.numeroSS)) {
        flag = false;
    } else {
        flag = true;
    }

    return flag;
}

const validaInfonavit = () => {

    let flag = false;
    //botones (Se les asigna el valor por el orden del dom)
    let valor1 = document.getElementById('creditoInfonaSI');
    let valor2 = document.getElementById('creditoInfonaNO');

    if (valor1.checked || valor2.checked) {
        if (valor2.checked) {
            flag = false;
        } else {
            //validar campo de credito infonavit
            //flag = aqui el input
            flag = validacionInfonavit();
        }
    } else {
        //Ninguno checado
        flag = true;
    }
    return flag;
}

const validacionInfonavit = () => {

    let flag = false;
    let form_data = $('#seguridad-social').serializeJSON();
    if (form_data.numCredito === '') {
        flag = true;
    }
    return flag;
}

const validaAforeList = () => {

    let flag = false
    //botones (Se les asigna el valor por el orden del dom)
    let valor3 = document.getElementById('aforeSi');
    let valor4 = document.getElementById('aforeNo');

    if (valor3.checked || valor4.checked) {
        if (valor4.checked) {
            flag = false;
        } else {
            //validar campo de AFORE
            //flag = aqui el input
            flag = validacionAfore();
        }
    } else {
        //Ninguno checado
        flag = true;
    }
    return flag;
}

const validacionAfore = () => {
    let flag = false;
    let form_data = $('#seguridad-social').serializeJSON();

    //console.log(form_data.catalogoAfore);
    if (form_data.catalogoAfore === undefined) {
        flag = true;
    }

    return flag;
}


////////////////////////CUARTA VALIDACION/////////////////////////////
////////////////////////SECCION COMUNICACION//////////////////////////

//Valida el formulario dato
//PD recordar la validacion de 3+7 y 2+8
const validarTelefonos = () => {

    let flag = false;
    let form_dataContenedor = document.getElementById('datos-comunicacionIDTEL');
    let longitud = form_dataContenedor.children.length;

    Array.from(form_dataContenedor.children).forEach((form) => {
        let contenido = $("#" + form.id).serializeJSON();
        //console.log(contenido);
        if (contenido.telefonolada.trim() === '' || contenido.telefono.trim() === '' ||
            contenido.tipoTelefono === undefined || longitud > 2) {
            flag = true;
        }
    });
    return flag;
}

///Segunda validacion con respecto al correo
const validarCorreos = () => {

    let flag = false;
    let form_dataContenedor = document.getElementById('datos-comunicacionIDCORREO');
    let longitud = form_dataContenedor.children.length;

    Array.from(form_dataContenedor.children).forEach((form) => {
        let contenido = $("#" + form.id).serializeJSON();

        if (contenido.correoContacto.trim() === '' || contenido.tipoCorreo === undefined || longitud < 2) {
            flag = true;
        }
    });
    return flag;
}


////////////////////////QUINTA VALIDACION/////////////////////////////
//////////////////////////////////////////////////////////////////////
//////////////Queda pendiente la 'api' de direcciones/////////////////
//////////////////////////////////////////////////////////////////////

const validacionDomicilio = () => {

    let flag = false;
    let contenido = $('#datos-domicilio').serializeJSON();

    // si tienes una mejor manera hazlo :)
    if (contenido.domicilioTipoResidencia === undefined || contenido.calleResidencia.trim() === '' ||
        contenido.numExt.trim() === '' || contenido.numInteriorResidencia.trim() === '' ||
        contenido.codigopostalResidencia.trim() === '' || contenido.coloniaResidencia === undefined ||
        contenido.localidadResidencia === undefined || contenido.municipioResidencia === undefined ||
        contenido.estadoResidencia === undefined || contenido.paisResidencia === undefined ||

        contenido.domicilioTipoAlt === undefined || contenido.calleAlt.trim() === '' ||
        contenido.numExtAlt.trim() === '' || contenido.numInteriorAlt.trim() === '' ||
        contenido.codigopostalAlt.trim() === '' || contenido.coloniaAlt === undefined ||
        contenido.localidadAlt === undefined || contenido.municipioAlt === undefined ||
        contenido.estadoAlt === undefined || contenido.paisAlt === undefined

    ) {
        flag = true;
    }
    return flag;
}


////////////////////////SEXTA VALIDACION/////////////////////////////
/////////////////////////////////////////////////////////////////////
///////DATOS CURRICULARES- formacion adicional///////////////////////
///Definir regla de documentos--- AGREGAR NUEVO ID
//Esa funcion va mas para el font, no es validacion
const validarGrado = (element) => {

    let doc1Parent = element.parentNode.parentNode.parentNode;

    let nombreEstudios = doc1Parent.children[0].children[1].children[1];
    let areaConocimiento = doc1Parent.children[1].children[0].children[1];
    let paisS = doc1Parent.children[1].children[1].children[1];
    let institucion = doc1Parent.children[1].children[2].children[1];
    let docObtenido = doc1Parent.children[2].children[0].children[1];
    let doc1PDF = doc1Parent.children[2].children[1].children[0].children[1].children[1].children[0];
    let doc2PDF = doc1Parent.children[2].children[2].children[0].children[1].children[1].children[0];

    let doc1PDFLabel = doc1Parent.children[2].children[1].children[0].children[1].children[1].children[1];
    let doc2PDFLabel = doc1Parent.children[2].children[2].children[0].children[1].children[1].children[1];

    nombreEstudios.value = "";
    areaConocimiento.selectedIndex = '-1';
    paisS.selectedIndex = '-1';
    institucion.selectedIndex = '-1';
    docObtenido.selectedIndex = '-1';
    doc1PDF.value = '';
    doc2PDF.value = '';

    //texto de label interno
    doc1PDFLabel.innerText = '';
    doc1PDFLabel.innerText = 'Buscar documento';

    doc2PDFLabel.innerText = '';
    doc2PDFLabel.innerText = 'Buscar documento';


    //Esto es para mostrar
    let areaCon = doc1Parent.children[1].children[0];
    let doc1 = doc1Parent.children[2].children[1].children[0];
    let doc2 = doc1Parent.children[2].children[2].children[0];


    if (element.value === '9' || element.value === '10' || element.value === '11') {
        $('#' + doc1.id).show("fast");
        $('#' + doc2.id).show("fast");
        $('#' + areaCon.id).show("fast");

    } else if (element.value === '1' || element.value === '2' ||
        element.value === '3' || element.value === '4' ||
        element.value === '5') {

        $('#' + doc1.id).hide("fast");
        $('#' + doc2.id).hide("fast");
        $('#' + areaCon.id).hide("fast");
    } else if (element.value === '7') {

        $('#' + doc1.id).show("fast");
        $('#' + doc2.id).hide("fast");
        $('#' + areaCon.id).hide("fast");
    }
}

////////////////######
//Preguntar 2 cosas:
//Es necesrio los nivles amnteriuiores a bachillerato, asi como tambien adjuntar sus archivis

//Elimnar area de conocimiento
//Esta seria principal, y englobaria a todas
//Acceder a cada campo de archivo indivualmente
//SERIA ACCEDER AL DOM
const validacionFormAcademica = () => {

    let flag = false;
    let contenedor = document.getElementById('formacionAcademicaDiv');

    Array.from(contenedor.children).forEach((form) => {


        let form_data = $("#" + form.id).serializeJSON();
        //console.log(form.children[2].children[1].children[0].children[1].children[1].children[0].value)
        //console.log(form.children[2].children[2].children[0].children[1].children[1].children[0].value)
        //console.log(form_data);

        let documento1 = form.children[2].children[1].children[0].children[1].children[1].children[0];
        let documento2 = form.children[2].children[2].children[0].children[1].children[1].children[0];

        if (form_data.nivelEstudios === undefined) {
            if (form_data.nombreEstudios.trim() === '' || form_data.areaConocimiento === undefined ||
                form_data.PaisEstudio === undefined || form_data.institucionEstudio == undefined ||
                form_data.documentoObtenido === undefined) {

                flag = true

            }

        } else if (form_data.nivelEstudios === '9' || form_data.nivelEstudios === '10' || form_data.nivelEstudios === '11') {

            if (form_data.nombreEstudios.trim() === '' || form_data.areaConocimiento === undefined ||
                form_data.PaisEstudio === undefined || form_data.institucionEstudio == undefined ||
                form_data.documentoObtenido === undefined || documento1.value === '' || documento2.value === '') {

                flag = true

            }

        } else if (form_data.nivelEstudios === '1' || form_data.nivelEstudios === '2' ||
            form_data.nivelEstudios === '3' || form_data.nivelEstudios === '4' ||
            form_data.nivelEstudios === '5') {

            if (form_data.nombreEstudios.trim() === '' ||// form_data.areaConocimiento === undefined ||
                form_data.PaisEstudio === undefined || form_data.institucionEstudio == undefined ||
                form_data.documentoObtenido === undefined) {

                flag = true;
            }

        } else if (form_data.nivelEstudios === '7') {

            if (form_data.nombreEstudios.trim() === '' || //form_data.areaConocimiento === undefined ||
                form_data.PaisEstudio === undefined || form_data.institucionEstudio == undefined ||
                form_data.documentoObtenido === undefined || documento1.value === '') {

                flag = true;

            }
        }
    });

    return flag;
}


//////////////SEPTIMA VALIDACION CON RESPESTO A FORMACION ADICIONAL
//Agregar validacion de archivos o ficheros pdf
///validarformacionAdicionalF
const validarFormAdicional = () => {

    let flag = false;

    let contenedor = document.getElementById('formacionAdicional1');

    Array.from(contenedor.children).forEach((form) => {
        let form_data = $("#" + form.id).serializeJSON();

        if (form_data.tipoCapacitacion === undefined || form_data.nombreCapacitacion.trim() === '' ||
            form_data.duracionCapacitacion.trim() === '' || form_data.institucionCapacitacion.trim() === '' ||
            form_data.anioCapacitacion.trim() === '') {
            flag = true;
        }
    });

    return flag;
}

///Este seria el principal :)
const validarformacionAdicionalF = () => {

    let flag = false;

    let arrayError = [];
    /*console.log(validarFormAdicional())
    console.log(validarFormConstancia())
    console.log(validarFormAcreditacion())

     */
    arrayError.push(validarFormAdicional());
    arrayError.push(validarFormConstancia());
    arrayError.push(validarFormAcreditacion());

    if (arrayError.includes(true)) {

        flag = true;

    }
    return flag;


}
//Estas tendran que ser indepentenidntes, se obtendran de un metodo con arrays y devolvera el valor general

const validarFormConstancia = () => {
    let flag = false;
    let contenedor = document.getElementById('formacionAdicional1');

    Array.from(contenedor.children).forEach((form) => {

        let constancia1S = form.children[3].children[0].children[1].children[0];
        let constancia2N = form.children[3].children[0].children[2].children[0];

        if (constancia1S.checked || constancia2N.checked) {
            console.log("Al menos esta checado uno");
            //flag = false;
            if (constancia2N.checked) {
                flag = false;
            } else {
                flag = validarConstancia(form);
            }
        } else {
            flag = true;
        }
    });

    return flag;
}

const validarConstancia = (form) => {

    let flag = false;
    let archivo1Constancia = form.children[3].children[1].children[1].children[1].children[0];
    console.log(archivo1Constancia.value);
    if (archivo1Constancia.value === '') {
        flag = true;
    }
    return flag;
}

//Pincipal 2
const validarFormAcreditacion = () => {
    let flag = false;
    let contenedor = document.getElementById('formacionAdicional1');

    Array.from(contenedor.children).forEach((form) => {

        let acreditacion1S = form.children[4].children[0].children[1].children[0];
        let acreditacion2N = form.children[4].children[0].children[2].children[0];

        if (acreditacion1S.checked || acreditacion2N.checked) {

            if (acreditacion2N.checked) {
                flag = false;
            } else {
                flag = validarAcreditacion(form);

            }
        } else {
            flag = true;
        }
    });

    return flag;

}

const validarAcreditacion = (form) => {

    let flag = false;
    let archivoAcreditacion = form.children[4].children[1].children[1].children[1].children[0];
    console.log(archivoAcreditacion.value);
    if (archivoAcreditacion.value === '') {
        flag = true;
    }
    return flag;
}

///////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////
//////////////OCTAVA VALIDACION CON RESPESTO A EXPERIENCIA LABORAL/////////////////////
///////////////////////////////////////////////////////////////////////////////////////
////////////////////////Agregar TRIM a todos los campos    ////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////

const validarExpLaboral = () => {

    let flag = false;
    let contenedor = document.getElementById('formacion-experiencia1');

    Array.from(contenedor.children).forEach((form) => {

        let form_data = $('#' + form.id).serializeJSON();
        //console.log(form_data);
        let actividades = form_data.actividadesRealizadas;
        let actividades2 = actividades.trim();

        if (form_data.institucionLaboral.trim() === '' || form_data.paisEmpleo === undefined ||
            form_data.nombresPuestoAnt.trim() === '' || form_data.fechaInicioActividades.trim() === '' ||
            form_data.fechaTerminoActividades.trim() === '' || actividades2 === '') {

            flag = true;
        }
    });

    return flag;
}


///////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////
//////////////Novena VALIDACION CON RESPESTO A DOCENTE _ CON Y TICS/////////////////////
///////////////////////////////////////////////////////////////////////////////////////
////////////////////////Agregar TRIM a todos los campos    ////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////

//Solo se tiene que contar la opcion valida
const validarFormTics = () => {

    let flag = false
    let form_data = $('#docente-tics-form').serializeJSON();

    //Deolver solo los elementos NO DESABILITADOS

    let arreglito = [];

    let arregloError = [];
    let arrayListElement = [];
    let chkProcesador = document.getElementById('chkProcesadorTexto');
    let chkHojaCalculo = document.getElementById('chkHojaCalculo');
    let chkPresentaciones = document.getElementById('chkPresentaciones');
    let chkMapasMentales = document.getElementById('chkMapasMentales');
    let chkInfografias = document.getElementById('chkInfografias');
    let chkAudio = document.getElementById('chkAudio');
    let chkVideo = document.getElementById('chkVideo');
    let chkImages = document.getElementById('chkImagenes');
    let chkOtros = document.getElementById('chkOtros');


    if (chkProcesador.checked) {

        let Procesador = form_data.procesadorTexto;

        if (Procesador.trim() === '') {
            //Meter en arreglos de errores
            arregloError.push(true);
        } else {
            arreglito.push({Procesador: Procesador});
        }

    }
    if (chkHojaCalculo.checked) {
        let HojaCalculo = form_data.hojaCalculo;

        if (HojaCalculo.trim() === '') {
            arregloError.push(true);
        } else {
            arreglito.push({HojaCalculo: HojaCalculo});
        }
    }
    if (chkPresentaciones.checked) {
        let Presentaciones = form_data.presentaciones;

        if (Presentaciones.trim() === '') {
            arregloError.push(true);
        } else {
            arreglito.push({Presentaciones: Presentaciones});
        }

    }
    if (chkMapasMentales.checked) {

        let MapasMent = form_data.mapasMentales;

        if (MapasMent.trim() === '') {
            arregloError.push(true);
        } else {
            arreglito.push({MapasMent: MapasMent});
        }
    }

    if (chkInfografias.checked) {

        let Infografias = form_data.infografias;

        if (Infografias.trim() === '') {
            arregloError.push(true);
        } else {
            arreglito.push({Infografias: Infografias});
        }
    }

    if (chkAudio.checked) {
        let audioVal = form_data.audioF;

        if (audioVal.trim() === '') {
            arregloError.push(true);
        } else {
            arreglito.push({Audio: audioVal});
        }

    }

    if (chkVideo.checked) {

        let videoVal = form_data.videoF;

        if (videoVal.trim() === '') {
            arregloError.push(true);
        } else {
            arreglito.push({Video: videoVal});
        }
    }

    if (chkImages.checked) {
        let imagenesVal = form_data.imagenes;

        if (imagenesVal.trim() === '') {
            arregloError.push(true);
        } else {
            arreglito.push({Imagenes: imagenesVal});
        }
    }

    if (chkOtros.checked) {
        let otrosVal = form_data.otrosS;

        if (otrosVal.trim() === '') {
            arregloError.push(true);
        } else {
            arreglito.push({Otros: otrosVal});
        }
    }

    //console.log(arregloError);

    if (arregloError.includes(true)) {
        flag = true;
    }

    //console.table(arreglito);
    //console.log(arreglito.length);
    return flag;
}

//Queda pendiente la seccion de idiomas, ya que primero se tiene que desarrollar
// y esstructurar este proyecto con los de sistemas y centro de lenguas


const validarComplementaria = () => {

    let flag = false;

    let form_data = $('#info-entrevista').serializeJSON();
    let oportunidad = form_data.oportunidad.trim();
    let quienInvito = form_data.quieninvito.trim();
    let porqueLeInteresa = form_data.interes.trim();

    if (oportunidad === '' || quienInvito === '' || porqueLeInteresa === '') {
        flag = true;
    }

    return flag;
}

const validarComplementariaFamiliares = () => {

    let value1 = document.getElementById('familiaresLaborandoSI');
    let value2 = document.getElementById('familiaresLaborandoNO');

    if (value1.checked || value2.checked) {
        if (value2.checked) {
            flag = false;

        } else {
            //flag = (Depende de la funcion)
            //Aqui va la funcion que valida a cada uno de los familiares
            //NO importa en donde se valide, siempre estara conectados
            flag = validarFormFamiliares();
        }

    } else {
        flag = true;
    }
}


const validarFormFamiliares = () => {

    let flag = false;
    let contenedor = $('#').serializeJSON();

    Array.from(contenedor.children).forEach((form) => {

        let nombreF = form.nombresFamiliar.trim();
        let paternoF = form.paternoFamiliar.trim();
        let maternoF = form.maternoFamiliar.trim();
        let parentescoF = form.parentesco.trim();

        if (nombreF === '' || paternoF === '' ||
            maternoF === '' || parentescoF === undefined) {

            flag = true;
        }
    });

    return flag;
}

///Validacion a info adcicional

const validarFormAdicionalLengua = () => {

    let flag = false;
    let form_data = $('#datos-estadisticos-form').serializeJSON();

    let chklenguaSI = document.getElementById('lenguaIndigenaSI');
    let chklenguaNO = document.getElementById('lenguaIndigenaNO');
    let campoLEngua = document.getElementById('lenguaIndigenaS').value;


    if (chklenguaNO.checked || chklenguaSI.checked) {
        if (chklenguaNO.checked) {
            flag = false;
        } else {
            //Verifica que este rellenado el campo

            if (campoLEngua.trim() === '') {

                flag = true;
            }//Aqio falta el else

        }
    } else {
        flag = true;
    }
    return flag;
}

//es lo mismo, pero mas barato
const validarFormAdicionalDiscapacidad= () => {

    let flag = false;
    let form_data = $('#datos-estadisticos-form').serializeJSON();

    let chkDiscapacidadSI = document.getElementById('discapacidadSI');
    let chkDiscapacidadNO = document.getElementById('discapacidadNO');
    let selectDiscapacidad = document.getElementById('nombreDiscapacidad');

    if (chkDiscapacidadNO.checked || chkDiscapacidadSI.checked) {
        if (chkDiscapacidadNO.checked) {
            flag = false;
        } else {
            //Verifica que este rellenado el campo
            if (selectDiscapacidad === undefined) {
                flag = true;
            }
        }
    } else {
        flag = true;
    }
    return flag;
}


//////////////////////////////////////////Validacion por grupos/////////////////////

//Validacion de seccion datos generales
//Devolvera true si existe error
const seccionValidaGenerales = ()=>{
    let array = [];
    let flag = false;
    array.push(validacionDatosGral());
    array.push(validacionDatosGralCR());
    console.log(array);
    if (array.includes(true)){
        flag = true;
    }
    return flag;
}

//Validacion seccion Datos Nacimiento
//Devolvera true si existe error
const seccionvalidaNacimiento =()=>{

    let array = [];
    let flag = false;
    array.push(validacionDatosBirth());
    array.push(validacionNacion());
    console.log(array);
    if (array.includes(true)){
        flag = true;
    }
    return flag;
}


//Validacion seccion seguridad social
//Devolvera true si existe error
const seccionValidaSeguridadSocial = ()=>{

    let array = [];
    let flag = false;

    array.push(validacionSeguridadSocial());
    array.push(validateNSS());
    array.push(validaInfonavit());
    array.push(validaAforeList());

    console.log(array);
    if (array.includes(true)){
        flag = true;
    }
    return flag;
}

//Validacion seccion comunicacion
//Devolvera true si existe error
//Verificar longitud
const seccionValidaComunicacion =()=>{

    let array = [];
    let flag = false;
    array.push(validarTelefonos());
    array.push(validarCorreos());
    console.log(array);
    if (array.includes(true)){
        flag = true;
    }
    return flag;
}

//Validacion seccionDomicilio
//Devolvera true si existe error
const secccionValidaDomicilio = ()=>{

    let array = [];
    let flag = false;
    array.push(validacionDomicilio());
    console.log(array);
    if (array.includes(true)){
        flag = true;
    }
    return flag;
}

//Validacion seccion Datos curriculares- formacion academica
//Devolvera true si existe error
const seccionValidaAcademica = ()=>{

    let array = [];
    let flag = false;
    array.push(validacionFormAcademica());
    console.log(array);
    if (array.includes(true)){
        flag = true;
    }
    return flag;

}

//Validacion seccion Datos curriculares- formacion adicional
//Devolvera true si existe error

const seccionValidaAdicional = ()=>{

    let array = [];
    let flag = false;
    array.push(validarformacionAdicionalF());
    console.log(array);
    if (array.includes(true)){
        flag = true;
    }
    return flag;

}


//Validacion seccion Datos curriculares- Experiencia laboral
//Devolvera true si existe error

const seccionValidaLaboral = ()=>{

    let array = [];
    let flag = false;
    array.push(validarExpLaboral());
    console.log(array);
    if (array.includes(true)){
        flag = true;
    }
    return flag;

}

//Validacion seccion Docente- uso de tics
//Devolvera true si existe error

const seccionValidaTics = ()=>{

    let array = [];
    let flag = false;
    array.push(validarFormTics());
    console.log(array);
    if (array.includes(true)){
        flag = true;
    }
    return flag;
}

////////////queda pendiente validacion de idiomas

//Validacion seccion Informacion complementaria
//Devolvera true si existe error
const seccionValidaComplementaria = ()=>{

    let array = [];
    let flag = false;
    array.push(validarComplementaria());
    //array.push(validarComplementariaFamiliares());
    console.log(array);
    if (array.includes(true)){
        flag = true;
    }
    return flag;
}


//vvalidacion seccion informacion familiares
//Devolvera true si existe error
//queda pendiente aplicar esta regla, depepnde de funcion anterior
const seccionValidafamiliares = () =>{
    let array = [];
    let flag = false;
    //array.push(validarComplementaria());
    array.push(validarComplementariaFamiliares());
    console.log(array);
    if (array.includes(true)){
        flag = true;
    }
    return flag;

}

//Validacion seccion Informacion complementaria---- adicional
//Devolvera true si existe error
const seccionValidaComplementariaAdicional = ()=>{

    let array = [];
    let flag = false;
    array.push(validarFormAdicionalLengua());
    array.push(validarFormAdicionalDiscapacidad());
    console.log(array);
    if (array.includes(true)){
        flag = true;
    }
    return flag;
}


/////////////////////////////
/////////////////////////////
/////////////////////////////
//Constructores objetos
//Debera de construirse de acuerdo a los formularios
function datosGeneralesConstructor(nombre, apellidop, apellidom, genero, estadoCivil, curp, rfc){

    this.nombre = nombre;
    this.apellidop = apellidop;
    this.apellidom = apellidom;
    this.genero = genero;
    this.estadoCivil = estadoCivil;
    this.curp = curp;
    this.rfc = rfc;

}

//constructor de nacimiento (extranjeros)
function datosNacimientoConstructorV1(fechaN, pais, estado, provincia, lugarNacimiento){
    this.fechaN = fechaN;
    this.pais = pais;
    this.estado = estado;
    this.provincia = provincia;
    this.lugarNacimiento = lugarNacimiento;

}

//Funcion constructura para nacion, tendra que enlazarse a funcion primaria
function datosNacimientoConstructorNacion (nacion){
    this.nacion = nacion;
}

//constructor de nacimiento (nacionales)
function datosNacimientoConstructorV2(fechaN, pais, entidadFederativa, municipio, lugarNacimiento){

    this.fechaN = fechaN;
    this.pais = pais;
    this.entidadFederativa = entidadFederativa;
    this.municipio = municipio;
    this.lugarNacimiento = lugarNacimiento;
}

//funciones clones para extraer info
function datosGeneralesClone (){
    let form_data = $('#datosgral-form').serializeJSON();
    let nombres = form_data.nombres.trim();
    let apellidop = form_data.paterno.trim();
    let apellidom = form_data.materno.trim();
    let genero = form_data.genero;
    let estadoCivil = form_data.estadoCivil;
    let curp = document.getElementById('curp').value;
    let rfc = document.getElementById('RFC').value;

    let data = new datosGeneralesConstructor(nombres,apellidop,apellidom,genero,estadoCivil,curp,rfc);
    //console.log(data)
    return data;
}

//Devuelve el objeto dato
function datosNacimientoV1Clone(){

    let form_data = $('#datos-Nacimiento').serializeJSON();
    let fechaNacimiento = form_data.fechaNacimiento.trim();
    let paisOrigen = form_data.paisOrigen;
    let estado = form_data.Estado.trim();
    let provincia = form_data.Provincia.trim();
    let lugarActa = form_data.lugarActa.trim();

    let data = new datosNacimientoConstructorV1(fechaNacimiento,paisOrigen, estado,provincia,lugarActa);
    return data;
}

//esta funcion depende de la seleccion de DOM (Cuenta con otra nacionalidad)- extranjeros
function datosNacimientoNacionClone(){
    let contenedor = document.getElementById('contenidoNaciones');
    let objeto = [];
    Array.from(contenedor.children).forEach((form) => {
        let contenido = $('#' + form.id).serializeJSON();
        let data = new datosNacimientoConstructorNacion(contenido.pais);
        objeto.push({nacion: data.nacion});
    });
    return objeto;
}

//Obtiene datos de formulario y lo pasa al constructor
function datosNacimientoV2Clone(){

    let form_data = $('#datos-Nacimiento').serializeJSON();
    let fechaNacimiento = form_data.fechaNacimiento.trim();
    let paisOrigen = form_data.paisOrigen;
    let entidad = form_data.entidad;
    let municipio = form_data.municipio;
    let lugarActa = form_data.lugarActa.trim();

    let data = new datosNacimientoConstructorV2(fechaNacimiento,paisOrigen,entidad,municipio,lugarActa);
    return data;

}





/////validaciones//////////////
///////////////////////////////
//////////////////////////////
//validacion general de todoas las secciones ///Construccion de elementos
const validateSections = ()=>{

    let alert='';
    let error = false;

    /*if (seccionValidaGenerales()){
        error = true;
        //alerta1 = '• Verifique campos en <a onclick="swal.close()" data-toggle="tab" href="#datos-generales-tab" role="tab" aria-controls="datosgrales">datos generales</a> <br>';
        alerta1 = '• Verifique informacion en datos generales<br>';
        alert+=alerta1;
    }*/

    if(seccionvalidaNacimiento()){
        error = true;
        //alerta2 = '• Verifique campos en <a onclick="swal.close()" data-toggle="tab" href="#datos-Nacimiento-tab" role="tab" aria-controls="datosNacimiento">datos de nacimiento</a> <br>';
        alerta2 = '• Verifique informacion en datos de nacimiento<br>';
        alert+=alerta2;

    }


    /*

    if(seccionValidaSeguridadSocial()){
        error = true;
        //alerta3 = '• Verifique campos en <a onclick="swal.close()" data-toggle="tab" href="#datos-seguridad-social-tab" role="tab" aria-controls="datosSeguridad">seguridad social</a> <br>';
        alerta3 = '• Verifique informacion en seguridad social<br>';
        alert+=alerta3;
    }

    if(seccionValidaComunicacion()){
        error = true;
        //alerta4 = '• Verifique campos en <a onclick="swal.close()" data-toggle="tab" href="#datos-Comunicacion-tab" role="tab" aria-controls="datosComunicacion" >comunicación</a> <br>';
        alerta4 = '• Verifique información en comunicación<br>';
        alert+=alerta4;
    }

    if(secccionValidaDomicilio()){
        error = true;
        //alerta5 = '• Verifique campos en <a onclick="swal.close()" data-toggle="tab" href="#datos-domicilio-tab" role="tab" aria-controls="datosDomicilio">domicilio</a> <br>';
        alerta5 = '• Verifique información en domicilio<br>';
        alert+=alerta5;
    }


    //Subsecciones

    if (seccionValidaAcademica()){
        error = true;
        //alerta6 = '• Verifique campos en datos curriculares - formación académica<br>';
        //alert.push(alerta6);
        alerta6 = '• Verifique información en datos curriculares - formación académica<br>';
        alert+=alerta6;
    }

    if (seccionValidaAdicional()){
        error = true;
        alerta7 = '• Verifique campos en datos curriculares - formación adicional<br>';
        alert+=alerta7;
    }


    if (seccionValidaLaboral()){
        error = true;
        alerta8 = '• Verifique campos en datos curriculares - experiencia laboral<br>';
        alert+=alerta8;
    }

    if (seccionValidaTics()){
        error = true;
        alerta9 = '• Verifique campos en datos curriculares - formación adicional<br>';
        alert+=alerta9;
    }
    */

    ///queda pendiente agregar lo de lengua extranjeras




    //queda pendiente lo de datos de familiares en la institucion (Depende de informacion adicional)
    // ver linea 2473 y 2488
    //Dependera de lo de seleccionado en seccion anterior

    /*if (seccionValidaComplementariaAdicional()){
        error = true;
        alerta10 = '• Verifique campos en Informacion complementaria - Información <br>';

    }*/

    //queda pendiente informacion idiomas y de documentos





    if (error){
        swal(
            {
                html: true,
                title: 'Atención',
                text: alert

            }
        );

    }else{


        //Aqui mismo se mandaria
        console.log("Construccion de objetos1 here")
        //console.log(datosGeneralesClone())
        //enviarDatosGrales(datosGeneralesClone()); //envia seccion datos generales - CHECK

        //enviarDatosGrales(datosNacimientoV1Clone()) //esto envia la info de extranjeros, va unida con segunda funcion
        //console.log(datosNacimientoV1Clone()); //Extranjeros, si contiene otra nacionalidad new function
        //console.log(datosNacimientoV2Clone()) // Nacionales
        defineNacionEnviar();
    }

}

/////////////////////////////funciones async para envio de informacion a controller
////////

///Envio de informacion a controller
async function enviarDatosGrales (element){

    let id = await $.ajax({

        type:'POST',
        url: '/enviarDatosGrales',
        data:{
            '_token': $('meta[name="csrf-token"]').attr('content'),
            'nombre': element.nombre,
            'apellidop':element.apellidop,
            'apellidom':element.apellidom,
            'genero':element.genero,
            'estadoCivil': element.estadoCivil,
            'curp': element.curp,
            'rcf':element.rfc
        },
        success: (data)=>{

            console.log(data);
        }

    }).fail(function (jqXHR, textStatus, errorThrown) {

        console.log("Error. " + errorThrown);
        return "Error al guardar esto" + errorThrown;
    });
}

//envio de informacion a controller (extranjeros)
async function enviarDatosNacimientov1 (element){

    let id = await $.ajax({

        type:'POST',
        url: '/enviarDatosGrales',
        data:{
            '_token': $('meta[name="csrf-token"]').attr('content'),
            'nombre': element.nombre,
            'apellidop':element.apellidop,
            'apellidom':element.apellidom,
            'genero':element.genero,
            'estadoCivil': element.estadoCivil,
            'curp': element.curp,
            'rcf':element.rfc
        },
        success: (data)=>{

            console.log(data);
        }

    }).fail(function (jqXHR, textStatus, errorThrown) {

        console.log("Error. " + errorThrown);
        return "Error al guardar esto" + errorThrown;
    });
}

//Envio de informacion a controller (nacionales)
async function enviarDatosNacimientov2 (element){

    let id = await $.ajax({

        type:'POST',
        url: '/enviarDatosGrales',
        data:{
            '_token': $('meta[name="csrf-token"]').attr('content'),
            'nombre': element.nombre,
            'apellidop':element.apellidop,
            'apellidom':element.apellidom,
            'genero':element.genero,
            'estadoCivil': element.estadoCivil,
            'curp': element.curp,
            'rcf':element.rfc
        },
        success: (data)=>{

            console.log(data);
        }

    }).fail(function (jqXHR, textStatus, errorThrown) {

        console.log("Error. " + errorThrown);
        return "Error al guardar esto" + errorThrown;
    });
}




///functions to set simple functions
const defineNacionEnviar = ()=>{
    let value1 = document.getElementById('nacionalidadRadioSi');
    let value2 = document.getElementById('nacionalidadRadioNo');
    let form_data = $('#datos-Nacimiento').serializeJSON();

    if(form_data.paisOrigen === '1'){
        if(value1.checked){
            //aqui hacer ... en arrayObjeto wit nations

            let datosNacimiento2 = datosNacimientoV2Clone();
            let datosN2 = datosNacimientoNacionClone();

            console.log(datosNacimiento2);
            datosN2.forEach(item => console.log(item));

        }

        if(value2.checked){
            //Solo mandar valores de v1
            console.log(datosNacimientoV2Clone());
        }

    }else{

        if(value1.checked){
            //aqui hacer ... en arrayObjeto wit nations

            let datosNacimiento1 = datosNacimientoV1Clone();
            let datosN1 = datosNacimientoNacionClone();

            console.log(datosNacimiento1);
            datosN1.forEach(item => console.log(item));

        }

        if(value2.checked){
            //Solo mandar valores de v1
            console.log(datosNacimientoV1Clone());
        }
    }
}

//////////////////Estilos para pruebas

///Seccion estilos para pruebas
function showEdit(elemento){
    elemento.parentNode.style="display:none"
    let showInfo = document.getElementById('containerShowInfo');
    let editInfo = document.getElementById('containerGrales');
    let footer = document.getElementById('cardFooter');
    footer.style="display:none"


    showInfo.style="display:none";
    editInfo.style ="-webkit-animation:scale-in-ver-top .5s cubic-bezier(.25,.46,.45,.94) both;animation:scale-in-ver-top .5s cubic-bezier(.25,.46,.45,.94) both";
    setTimeout(()=>{
        let resetStyle = editInfo.style ="";
    },1000)
}

function cancelEdit(element){
    let buttonEdit = document.getElementById('optionsEdit');
    buttonEdit.style="-webkit-animation:swing-in-top-fwd .5s cubic-bezier(.175,.885,.32,1.275) both;animation:swing-in-top-fwd .5s cubic-bezier(.175,.885,.32,1.275) both";
    let showInfo = document.getElementById('containerShowInfo');
    let editInfo = document.getElementById('containerGrales');
    let footer = document.getElementById('cardFooter');
    footer.style = "";

    editInfo.style ="display:none";
    showInfo.style = "-webkit-animation:scale-in-ver-top .5s cubic-bezier(.25,.46,.45,.94) both;animation:scale-in-ver-top .5s cubic-bezier(.25,.46,.45,.94) both";
    setTimeout(()=>{
        let resetStyle = showInfo.style = "";
        buttonEdit.style="";
    },1000);
}


const mensajeConfirmacion = ()=>{
    swal(
        {
            html: true,
            title: 'Atención',
            text: 'Informacion registrada'

        }
    );
    cancelEdit();
}


const mensajeConfirmacion2 = (btn, showinfoID, showForm)=>{
    swal(
        {
            html: true,
            title: 'Atención',
            text: 'Informacion registrada'

        }
    );
    cancelEdit12(btn, showinfoID, showForm);
}

function showEdit12(btnContainer, showinfo, showForm){
    let buttonEdit = document.getElementById(btnContainer);
    buttonEdit.style="display:none";
    let showInfo = document.getElementById(showinfo);
    let editInfo = document.getElementById(showForm);
    let footer = document.getElementById('cardFooter');
    footer.style="display:none"

    showInfo.style="display:none";
    editInfo.style ="-webkit-animation:scale-in-ver-top .5s cubic-bezier(.25,.46,.45,.94) both;animation:scale-in-ver-top .5s cubic-bezier(.25,.46,.45,.94) both";
    setTimeout(()=>{
        let resetStyle = editInfo.style ="";
    },1000)
}

function cancelEdit12(btn, showinfoID, showForm){

    let buttonEdit = document.getElementById(btn);
    buttonEdit.style="-webkit-animation:swing-in-top-fwd .5s cubic-bezier(.175,.885,.32,1.275) both;animation:swing-in-top-fwd .5s cubic-bezier(.175,.885,.32,1.275) both";
    let showInfo = document.getElementById(showinfoID);
    let editInfo = document.getElementById(showForm);
    let footer = document.getElementById('cardFooter');
    footer.style = "";
    editInfo.style ="display:none";
    showInfo.style = "-webkit-animation:scale-in-ver-top .5s cubic-bezier(.25,.46,.45,.94) both;animation:scale-in-ver-top .5s cubic-bezier(.25,.46,.45,.94) both";
    setTimeout(()=>{
        let resetStyle = showInfo.style = "";
        buttonEdit.style="";
    },1000);
}

function mostrarInformacionFoto(){

    swal({
        title: "Acerca de fotografia",
        text: "Se debera de subir una fotografia no mayor a 1 mb, deberá de estar de frente y sin anteojos"
        //imageUrl: 'thumbs-up.jpg'
    });
}
