/**
 * Miscelaneous functions
 */

//Define la imagen dentro del contenedor
const setStyleImagen = () => {
    let imageInput = document.getElementById('imageUpload');
    if (imageInput.files && imageInput.files[0]) {

        if (imageSizeValidation(imageInput) || processFile(imageInput)) {

            swal({
                title: "Atención",
                text: " • Por favor, revise que la imagen sea menor a 3 mb y que sea un fichero de tipo .jpg o .png",
                type: "warning"
            })
            imageInput.value = "";

        } else {

            let reader = new FileReader();
            reader.onload = function (e) {
                $('#imagePreview').css('background-image', 'url(' + e.target.result + ')');
                $('#imagePreview').hide();
                $('#imagePreview').fadeIn(650);
            }
            reader.readAsDataURL(imageInput.files[0]);
        }
    }
}

//Validar tamaño de imagen
const imageSizeValidation = (imgElement) => {
    let sizeImageBytes = imgElement.files[0].size;
    let sizeImageKb = Math.round(parseInt(sizeImageBytes / 1024));

    return sizeImageKb >= 3000;

}
//validar tipo de imagen
const processFile = (imgElement) => {

    let imageMetadata = imgElement.files[0];
    let imageType = imageMetadata.type;
    let pattern = /image-*/

    return !imageType.match(pattern);

}

//Validar tamaño de ArchivoPDF
const fileSizeValidation = (imgElement) => {

    if (imgElement.files.length>0){
        let sizeImageBytes = imgElement.files[0].size;
        let sizeImageKb = Math.round(parseInt(sizeImageBytes / 1024));

        return sizeImageKb >= 3000;

    }else{
        //NO hay archivos
        return true
    }


}
//validar tipo de ARCHIVO PDF
const processFilePDF = (imgElement) => {

    if (imgElement.files.length>0){

        let imageMetadata = imgElement.files[0];
        let imageType = imageMetadata.type;
        //let pattern = /application-pdf/
        imageType.toString()

        let typeDOc = 'application/pdf';



        let comp = imageType === typeDOc
        return comp === false;

    }else{

        return true;

    }


}

const cleanInputRFC = (value) => {

    if (value.includes("-")) {
        return value.split("-").join("");
    }
    return value;
}
//verifica el valor del input
const checkValues = (value) => {

    if (value === null || value.trim() === '') {
        return "Datos  no disponibles.";
    }
    return value;
}

const checkInitialvalues = (value) => {
    if (value === null || value === undefined) {
        return "Datos  no disponibles.";
    }
    return value.toString();

}

//genera el catalogo correspondiente
const genderCatalog = (value) => {
    let gender;
    switch (value) {
        case 'M':
            gender = "Femenino"
            break;
        case 'H':
            gender = "Masculino"
            break;

        default:
            gender = value;
            break;
    }
    return gender
}

//genera input si no existe valor
const setInputForm = (value, AttrName) => {


    if (value === null || value.trim() === '') {
        return `
            <label for="${AttrName}" class="label">${AttrName.toUpperCase()}: </label>
            <input type="text" class="form-control " name="${AttrName}" id="${AttrName}" placeholder="Ingrese el dato correspondiente" autocomplete="off" oninput="addFieldCharacter(this);"  maxlength="13">
            `;
    } else {
        /*return  `
        <h6>${AttrName.toUpperCase()}: </h6>
        <p className="text-black-50" id="${AttrName}">${checkValues(value)}</p>`;
        */
        return `
            <label for="${AttrName}" class="label">${AttrName.toUpperCase()}: </label>
            <input type="text" class="form-control " name="${AttrName}" id="${AttrName}" placeholder="Ingrese el dato correspondiente" autocomplete="off" oninput="addFieldCharacter(this)" value="${cleanInputRFC(checkValues(value))}" maxlength="13">
        `;
    }
}

//genera catalogo de estado civil
const setSelectCivil = (value, valueName) => {
    let optionsItems = ``;
    const obje = [
        { valueSelect: 1, description: "Soltero" },
        { valueSelect: 2, description: "Casado" },
        { valueSelect: 3, description: "Union Libre" },
        { valueSelect: 4, description: "Divorciado" },
        { valueSelect: 5, description: "Viudo" }
    ]

    if (value === null || value === '') {
        optionsItems += `<option value="" selected disabled>Selecccione una opción</option>`;
        obje.forEach((item) => {
            optionsItems += `<option value="${item.valueSelect}">${item.description}</option>`;
        });

        return optionsItems;

    } else {

        obje.forEach((item) => {
            if (value === item.valueSelect) {
                optionsItems += `<option value="${item.valueSelect}" selected>${item.description}</option>`;
            }
            else {
                optionsItems += `<option value="${item.valueSelect}">${item.description}</option>`;
            }
        });
        return optionsItems;
    }

}

//Modifica visibilidad del componente
const visibilityComponent = (ComponentName, value) => {
    let component = document.getElementById(ComponentName);
    component.hidden = value;
}

//remueve componente del arbol DOM
const removeItemComponent = (element, itemName = null) => {
    let itemToDelete = document.getElementById(element);
    itemToDelete.remove();
}

//Imprime informacion principal y oculta sketon
const showDatos = (idButtons, idSkeleton) => {
    let btnsoptions = document.getElementById(idButtons);
    let skeletonVisible = document.getElementById(idSkeleton);
    skeletonVisible.hidden = true;
    btnsoptions.hidden = false;

}

//Constructor de elementos del formulario
function datosGeneneralesCons(estadoCivil, rfc) {
    this.estadoCivil = estadoCivil;
    this.rfc = rfc;
}

//generacion de elementos de datos generales a traves del constructor
const datosGeneralesGenerator = () => {
    let estadoCivil = document.getElementById('estado_civil').value;
    let rfc = document.getElementById('rfc').value;
    let datosGeneralesCon = new datosGeneneralesCons(estadoCivil, rfc)
    const obj = JSON.stringify(datosGeneralesCon);
    return obj;
}

//valida campos de la primera seccion (Datos generales)
const validateFieldsDatosGenerales = () => {
    //getDataForm
    let form_data = $("#datos-generales-form").serializeJSON();
    if (form_data.rfc.trim() === '' || form_data.estado_civil === undefined) {
        return true
    }
    return false;
}
//fin validator

//valida que el campo de rfc sea valido (Valida que sea valido, pero no que exista)

const validateRFC = () => {
    let rfc = document.getElementById('rfc').value;
    let rfcCorrecto = rfcValidados(rfc);
    if (rfcCorrecto) {
        return false;
    }
    return true;
}

//Listener oninput con para validacion en input
const addFieldCharacter = (input) => {
    eliminarEspacios(input);
    cancelCopyPaste(input.id);
    Inputmayusculas(input);
    let rfc = input.value.trim().toUpperCase();
    let divCorrecto = document.getElementById('rfcValido')
    let divincorrecto = document.getElementById('rfcinValido')
    let rfcCorrecto = rfcValidados(rfc);   // ⬅️ Acá se comprueba
    if (rfcCorrecto) {
        $('#rfcValido').css('display', '');
        divincorrecto.setAttribute('hidden', true);
        divCorrecto.removeAttribute('hidden');
        divCorrecto.innerText = "RFC válido";
    } else {
        divCorrecto.setAttribute('hidden', true);
        divincorrecto.removeAttribute('hidden')
        divincorrecto.innerText = "RFC Inválido";
    }


}

//Convierte textoIngresado en mayusculas
function Inputmayusculas(element) {
    element.value = element.value.toUpperCase();
}

/**
 * //ELimina solo doble espacios en blanco
 * @param item item objectivo para quitar esas propiedades
 */
const eliminarEspacios = (item) =>{

    let expresion = /^\s+|\s+$|\s+(?=\s)/g;
    item.value = item.value.replace(expresion," ");
}

/**
 * Cancela la acciones copiar y pegar...
 * @param idItem el idItem del
 */
const cancelCopyPaste = (idItem) =>{
    $('#'+idItem).bind('copy paste', function (e) {
        e.preventDefault();
        return false;
    });
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

//obtiene datos del servidor  --- se debe de generar un overwrite
const getDataFromServer = async (url, type, formData = null) => {
    let id = await $.ajax({
        type: type,
        url: '/prospectoHonorario/' + url,
        data: {

            '_token': $('meta[name="csrf-token"]').attr('content'),
            data: formData
        }, success: (data) => {
            return data;
        }
    }).fail(function (jqXHR, textStatus, errorThrown) {
        swal({
            title: "Atención",
            text: textStatus,
            type: "warning"
        });
    });

    return id;
}

function showResponse(data, fun, state, formInitial) {

    if (data.errors) {
        let arry = data.errors
            .map((item) => {
                return "• " + item + ".<br>";
            })
            .join("");
        swal({
            html: true,
            title: "Atención",
            text: arry,
            type: "warning"
        }, function () {
            //fun();
            visibilityComponent('section-skeleton_datos-grales', true)
            formInitial();
            state.setEstadoEdicion();
        });
    }
    if (data.noError == 1) {
        //console.log(data.mensaje);
        swal({
            html: true,
            title: "Atención",
            text: data.mensaje,
            type: "warning"
        }, function () {
            //fun();
            visibilityComponent('section-skeleton_datos-grales', true)
            formInitial();
            state.setEstadoEdicion();
        });
    }
    if (data.noError == 0) {
        swal(
            {
                title: "Atención",
                text: "Campos actualizados correctamente",
                type: "success",
            },
            function () {
                //fun();
                console.log("llamando a funcion");
                state.setEstadoEdicionFinal();

            }
        );
    }
}

const showResponseEnc = (data, functionN = null) => {
    if (data.errors) {
        let arry = data.errors
            .map((item) => {
                return "• " + item + ".<br>";
            })
            .join("");
        swal({
            html: true,
            title: "Atención",
            text: arry,
            type: "warning",
        });
        return false;
    }
    if (data.noError == 1) {

        swal({
            html: true,
            title: "Atención",
            text: data.mensaje,
            type: "warning",
        });
        return false;
    }
    if (data.noError == 0) {
        return true;
    }
}

//verifica si alguna imagen existe
function getItemImage() {
    let image = document.getElementById('imageUpload')
    if (image.files[0] === undefined) {
        return false;
    }
    return true;
}

//valida la imagen definida en contenedor
function imageValidate() {
    let image = document.getElementById('imageUpload');

    if (imageSizeValidation(image) || processFile(image)) {
        return true;
    }
    return false;
}

//Ajax para envio de ficheros
//obtener del fomulario el item
const sendFilePhoto = async (url, item) => {

    let formData = new FormData();
    let d = document.getElementById(item);
    formData.append('file', d.files[0]);
    formData.append('inputname', d.value);

    let id = await $.ajax({
        headers: {
            'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
        },
        type: "POST",
        url: '/prospectoHonorario/' + url,
        data: formData,
        cache: false,
        contentType: false,
        processData: false,
        success: (data) => { return data },
    }).fail(function (jqXHR, textStatus, errorThrown) {
        swal({
            title: "Atención",
            text: textStatus,
            type: "warning"
        });
    });

    return id;
}


/***
 * * ** PARA AMBOS DOCUMENTOS SE ACCEDE AL DOM, TENER CUIDADO CON RESPECTO A ESTO
 * @param itemSelectDoc //en donde esta alojado el docummento...
 * @param idDocType // tipo de documento a guardar
 * @param idCurriculumFormacion // Es el tipo de idCurriculumFormacion
 * @returns {Promise<*>}
 */
const sendFilePDF = async (itemSelectDoc, idDocType, idCurriculumFormacion) => {

    let formData = new FormData();
    formData.append('file', itemSelectDoc.files[0]);
    formData.append('inputname', itemSelectDoc.value);
    formData.append('idTipoDocumento',idDocType)
    formData.append('idCurriculumFormacion',idCurriculumFormacion)


    let id = await $.ajax({
        headers: {
            'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
        },
        type: "POST",
        url: '/prospectoHonorario/setDocumentacion',
        data: formData,
        cache: false,
        contentType: false,
        processData: false,
        success: (data) => {
            console.log(data)

            return data },
    }).fail(function (jqXHR, textStatus, errorThrown) {
        swal({
            title: "Atención",
            text: textStatus,
            type: "warning"
        });
    });

    return id;
}


/**
 * let formData = new FormData();
 *     formData.append('file', itemSelectDoc.files[0]);
 *     formData.append('inputname', itemSelectDoc.value);
 *     formData.append('idTipoDocumento',idDocType)
 *     formData.append('idCurriculumFormacion',idCurriculumFormacion)
 *     formData.append('idCurriculumFormacion',idCurriculumFormacion)
 * @param idCurriculumFormacion
 * @param url
 * @returns {Promise<*>}
 */
const sendFilePDFFREE = async (formData, url) => {

    let id = await $.ajax({
        headers: {
            'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
        },
        type: "POST",
        url: '/prospectoHonorario/'+url,
        data: formData,
        cache: false,
        contentType: false,
        processData: false,
        success: (data) => {
            console.log(data)

            return data },
    }).fail(function (jqXHR, textStatus, errorThrown) {
        swal({
            title: "Atención",
            text: textStatus,
            type: "warning"
        });
    });

    return id;
}





//define la imagen en el elemento preview
const setImage = () => {
    var num = Math.random();
    let route = document.getElementById('route-foto').value;
    //let itembackground = document.getElementsByClassName('sectionFotoDatos');

    //let item = itembackground[0];
    //item.style.backgroundImage =`url(${route}${"?v="+num})`;
    let url = `url(${route}${"?v=" + num})`;

    $(".sectionFotoDatos").css('background-image', url);
    $(".sectionFotoDatos").hide();
    $(".sectionFotoDatos").fadeIn(650);
}

//Metodo para obtener datos de servidor... npi porque lo hice (copie y pegue)
const getDataFromServerHidden = async (url, type, formData = null) => {
    let id = await $.ajax({
        type: type,
        url: '/prospectoHonorario/' + url,
        data: {
            '_token': $('meta[name="csrf-token"]').attr('content'),
            data: formData
        }, success: (data) => {
            return data;
        }
    }).fail(function (jqXHR, textStatus, errorThrown) {
        swal({
            title: "Atención",
            text: "Lamentablemente sucedio un error al obtener los datos, intente recargar la pagina o intente más tarde.",
            type: "error"
        });

    });
    return id;
}

//Agrega el componente datetimepicker al componente seleccionado
const agregarDatePicker = (elementID) => {
    $('#' + elementID).datepicker({
        uiLibrary: 'bootstrap4',
        iconsLibrary: 'fontawesome',
        // minDate: new Date( new Date().setDate(fecha + 0)),
        dateFormat: "mm-dd-yy"

    });
}

const agregarDatePickerNoMayor = (elementID) => {
    var fecha = new Date().getDate();
    $('#' + elementID).datepicker({
        uiLibrary: 'bootstrap4',
        iconsLibrary: 'fontawesome',
        minDate: new Date( new Date().setDate(fecha + 0)),
        dateFormat: "mm-dd-yy"

    });
}


const agregarDatePickerMenor = (elementID) => {
    var fecha = new Date().getDate();
    $('#' + elementID).datepicker({
        uiLibrary: 'bootstrap4',
        iconsLibrary: 'fontawesome',
        maxDate: new Date( new Date().setDate(fecha + 0)),
        dateFormat: "mm-dd-yy"

    });
}


//genera select de pais especifico
const generateCountrySelectS = (element) => {

    let nacion = dataNacion.getDataCountry()
    $('#' + element).empty().append('<option selected="selected" disabled>Seleccione una opción</option>');
    let itemsNacion = nacion[0];
    let selectItem = '';
    itemsNacion.forEach((item) => {
        selectItem += `<option value="${item.idPais}">${item.pais}</option>`;
    });
    //return selectItem;
    $("#" + element).append(selectItem);
}

//genera el select de estado
const generateSelectState = () => {
    let estado = dataNacion.getDataState();
    let itemsEstado = estado[0];
    let selectItem = '';
    itemsEstado.forEach((item) => {
        selectItem += `<option value="${item.idEntidadfederativa}">${item.entidadFederativa}</option>`;
    });
    return selectItem;
}


//Genera el select de municipio
const generateSelectTown = async (itemSelected, element) => {
    let getMunicipiosEstado = await getDataFromServerHidden('obtenerNacimientoMunicipio', 'POST', itemSelected);
    $('#' + element).empty().append('<option selected="selected" disabled>Seleccione una opción</option>');

    let selectItem = '';
    if (getMunicipiosEstado.length > 2) {
        getMunicipiosEstado.forEach((item) => {
            selectItem += `<option value="${item.idMunicipio}">${item.municipio}</option>`;
        })
    } else {
        selectItem += `<option  disabled selected >No hay datos, algo fallo... :X </option>`;
    }

    //return selectItem;
    $("#" + element).append(selectItem);
}

const showForeignInputs = (value) => {
    if (value) {
        $("#EstadoDIV").hide('fast');
        $("#ProvinciaDIV").hide('fast');

        $("#municipio-federal").show('fast');
        $("#entidad-federal").show('fast');

        unlockItems("entidadSelect", false)
        unlockItems("municipioSelect", false)


    } else {

        $("#EstadoDIV").show('fast');
        $("#ProvinciaDIV").show('fast');

        $("#municipio-federal").hide('fast');
        $("#entidad-federal").hide('fast');

        unlockItems("entidadSelect", true)
        unlockItems("municipioSelect", true)
    }
}


const setItemsState = (element) => {
    let destinityItem = document.getElementById(element);

    $('#' + element).empty().append('<option selected="selected" disabled>Seleccione una opción</option>');

    let items = dataNacion.getDataState();
    items[0].forEach((item) => {
        let option = document.createElement('option');
        option.value = item.idEntidadfederativa;
        option.text = item.entidadFederativa;
        destinityItem.appendChild(option);
    })


}

const unlockItems = (item, value) => {
    let items = document.getElementById(item);
    items.disabled = value;
}

const clearItemInputs = (element) => {
    let item = document.getElementById(element);
    item.value = '';
}

const onShowCountry = (element) => {
    let item = element.options[element.selectedIndex].value;
    if (item === "1") {
        console.log("Mexico");
        showForeignInputs(true);
        setItemsState("entidadSelect");
        $('#municipioSelect').empty().append('<option selected="selected" disabled>Seleccione una opción</option>');
        clearItemInputs('Estado');
        clearItemInputs('Provincia');
        clearItemInputs('lugarActa');
    } else {
        console.log("Extranjero");
        showForeignInputs(false);
        $('#municipioSelect').empty().append('<option selected="selected" disabled>Seleccione una opción</option>');
        clearItemInputs('Estado');
        clearItemInputs('Provincia');
        clearItemInputs('lugarActa');
    }
}

//dependiendo del la entidad federativa.. se tiene que obtener el elemento especifo,,,, si se declara tendra que elegirse elemento
const onShowState = async (element, element2 = null) => {
    let valueSelect = element.options[element.selectedIndex].value;
    if (element2 == null) {
        await generateSelectTown(valueSelect, "municipioSelect");
        console.log("Success OBJECT!");
    } else {
        await generateSelectTown(valueSelect, element2);
        console.log("Success!");
    }
}

//dependiendo de la nacionalidad o el elemento que se seleccione, se modificara el item
const sectionsNations = (element) => {
    let idElement = element.id;
    if (idElement === "nacionalidadRadioNo") {
        $("#bodyNacionalidades").hide("fast");
        generateCountrySelectS('paisSelect');
    } else {
        $("#bodyNacionalidades").show("fast");
        generateCountrySelectS('paisSelect');
    }
}

//validacion con respecto a primervalor

const validateAlertDatosNacimiento = async () => {

    if (vNacimientoGral()) {
        swal({
            title: "Atención",
            text: "• Revise los campos correspondientes.",
            type: "warning"
        })
    } else {

        //ocultar formulario
        //mostrar sketletons
        //after await--- usar true :   false:
        afterValidacion();


        let data = constructornacimiento()
        let id = await getDataFromServerHidden('guardarNacimientoUsuario', 'POST', data);

        console.log(id);
        if (id) {
            //console.log(id)
            //showResponseEnc(id);
            if (showResponseEnc(id)) {
                await cancelEditNacimiento();
                swal({
                    title: 'Atención',
                    text: ' Datos guardados con éxito.',
                    type: "success",

                }, function () {


                })
            }
        } else {
            swal({
                title: 'Atención',
                text: ' Algo fallo, intente recargar la pagina e intente nuevamente.',
                type: "error",

            }), function () {
                //debe de regresar....al comportamiento inicial --- no se debe de recargar
                window.location.reload();
            };
        }
    }
}


function timeChangeToLocal(dateString) {
    dateString.toString();
    let a = moment(dateString).locale('es');
    let time = a.format('DD MMMM YYYY');
    return time.split(" ").join(' de ');
}


const vNacimientoGral = () => {
    return validateDatosNacimiento()
        || validateNacimiento4();
}

const validateDatosNacimiento = () => {

    let pais = document.getElementById('paisOrigen');
    let paisValue = pais.options[pais.selectedIndex].value;
    if (validateNacimientoSectionGral()) {
        return true;
    } else {
        return paisValue === "1" ?
            validateNacimiento1() || validateNacimiento3() :
            validateNacimiento2() || validateNacimiento3();
    }
}

//validacion estado inincial
const validateNacimientoSectionGral = () => {
    let form_data = $('#datos-Nacimiento-form').serializeJSON();
    let fechaNacimiento = form_data.fechaNacimiento.trim();
    let lugarActa = form_data.lugarActa.trim();
    let paisS = form_data.paisOrigen;

    if (fechaNacimiento === '' || paisS === undefined || lugarActa === '') {
        return true;
    }
    return false;

}

//validacion datos nacional
const validateNacimiento1 = () => {

    let form_data = $('#datos-Nacimiento-form').serializeJSON();
    let fechaNacimiento = form_data.fechaNacimiento.trim();
    let paisS = form_data.paisOrigen;
    let entidadS = form_data.entidad;
    let municipio = form_data.municipio;
    if (fechaNacimiento === '' || paisS === undefined || entidadS === undefined || municipio === undefined) {
        return true;
    }
    return false;

}

//validacion datos extranjero
const validateNacimiento2 = () => {
    let form_data = $('#datos-Nacimiento-form').serializeJSON();
    let fechaNacimiento = form_data.fechaNacimiento.trim();
    let paisS = form_data.paisOrigen;
    let estadoIn = form_data.Estado;
    let provinciaIn = form_data.Provincia;
    if (fechaNacimiento === '' || paisS === undefined || estadoIn === '' || provinciaIn === '') {
        return true;
    }
    return false;
}

//validacion lugar de nacimiento....
const validateNacimiento3 = () => {

    let form_data = $('#datos-Nacimiento-form').serializeJSON();
    let lugarN = form_data.lugarActa;
    if (lugarN === '') {
        return true;
    }
    return false;
}

//validacion otraNacion....
const validateNacimiento4 = () => {

    let itemForm = document.getElementById('nacionalidadRadioSi');
    let form_Data = $('#naciones-multiform1').serializeJSON();
    if (itemForm.checked) {
        if (form_Data.paisSelectMultiform === undefined) {
            return true;
        } else {
            return false;
        }
    }
    return false;
}

//CONSTRUCTOR GRAL
function constructornacimiento() {
    //Teoricamente aqui se tiene que agregar la referencia al elemento padre (id)
    let request = [];
    let form_data = $('#datos-Nacimiento-form').serializeJSON();
    request.push(form_data);
    let form_data2 = $("#naciones-multiform1").serializeJSON();
    request.push(form_data2);
    //request.push({idPadre: "valor"})
    return JSON.stringify(request);
}


function retornaPais(value) {

}


//funciones para retornar valor
function retornaEstado(value, data3 = null) {
    //return value;
    if (value === "0" || value === '') {
        //console.log("Es cero")

        return `<h6>Estado:</h6>
            <p class="text-black-50">${checkInitialvalues(data3.estado)}</p>`;
    } else {
        return `
            <h6>Entidad Federativa:</h6>
            <p class="text-black-50">${retornaEstadoNombre(checkInitialvalues(value))}</p>
        `;
    }
}


async function retornaProvincia(value, data3 = null) {

    //console.log(value)
    if (value === "0" || value === '') {
        return `<h6>Provincia:</h6>
            <p class="text-black-50">${checkInitialvalues(data3.provincia)}</p>`;
    } else {
        return `
            <h6>Municipio:</h6>
            <p class="text-black-50">${value === "0" || value === '' ? checkInitialvalues(value) : await retornaNombreMunicipio(value)}</p>
        `;
    }
}


function retornaPaisNacionalidad(value) {
    //console.log(value)

    try {
        if (value == undefined) {

            return `<h6>Cuenta con otra nacionalidad de otro país:</h6>
                <p class="text-black-50">No</p>`;
        } else {

            return `<h6>Cuenta con otra nacionalidad:</h6>
            <p class="text-black-50">${retornaPaisNombre(value.idPais)}</p>`
        }

    } catch (error) {

        return `<h6>Cuenta con otra nacionalidad de otro país:</h6>
                <p class="text-black-50">No</p>`;
    }

}




function retornaPaisNombre(identificador) {

    let paises = dataNacion.getDataCountry()[0];

    let filter = paises.filter(item => item.idPais === identificador);
    let pais = filter[0];

    return `${pais.pais}`;
}


function retornaEstadoNombre(identificador) {
    let estados = dataNacion.getDataState()[0];

    let filter = estados.filter(item => item.idEntidadfederativa === identificador);
    let estado = filter[0];

    return `${estado.entidadFederativa}`


}

//retorna el nombre del
async function retornaNombreMunicipio(value) {
    let idName = await getDataFromServerHidden(`obtenerMunicipio/${value}`, 'POST')

    if (idName.errors) {
        console.log(idName.errors)
        return `Municipio no identificado`;

    } else {
        console.log("Hola, este es mi id ");
        return `${idName}`
    }
}







//retorna la descripcion del valor de FactorRH
function retornaTipoFactor(value) {
    if (value === '+') {
        return `(Positivo) +`;
    } else {
        return `(Negativo) -`;
    }
}

//Presenta el nss sin el guion
function splitNSS(value) {
    return value.split('-').join('');
}

//retorna el componente select dependiendo del elemento dado
function compruebaInfonavit(value) {

    if (value === null || value === undefined) {
        return `<div class="form-group col-md-3">
                <p><b>¿Cuenta con crédito infonavit?:</b></p>
                <div>
                    <div class="form-check form-check-inline">
                        <input class="form-check-input" type="radio" name="creditoInfona" onclick="btnInfonavit1(this)" id="creditoInfonaSI" value="si">
                        <label class="form-check-label" for="creditoInfonaSI">Si</label>
                    </div>
                    <div class="form-check form-check-inline">
                        <input class="form-check-input" type="radio" name="creditoInfona"  id="creditoInfonaNO" onclick="btnInfonavit2(this)" value="no" checked>
                        <label class="form-check-label" for="creditoInfonaNO">No</label>
                    </div>
                </div>
            </div>

            <div class="form-group col-md-3">
                <div id="numCreditoDIV" style="display: none">
                    <label for="numCredito" class="label">Número de crédito: </label>
                    <input type="text" class="form-control" name="creditoNumero" id="creditoNumero" placeholder="" oninput="eliminarEspacios(this)" autocomplete="off" >
                </div>

            </div>`;
    } else {

        return `
            <div class="form-group col-md-3">
                <p><b>¿Cuenta con crédito infonavit?:</b></p>
                <div>
                    <div class="form-check form-check-inline">
                        <input class="form-check-input" type="radio" name="creditoInfona" onclick="btnInfonavit1(this)" id="creditoInfonaSI" value="si" checked>
                        <label class="form-check-label" for="creditoInfonaSI">Si</label>
                    </div>
                    <div class="form-check form-check-inline">
                        <input class="form-check-input" type="radio" name="creditoInfona" id="creditoInfonaNO" onclick="btnInfonavit2(this)" value="no">
                        <label class="form-check-label" for="creditoInfonaNO">No</label>
                    </div>
                </div>
            </div>

            <div class="form-group col-md-3">
                <div id="numCreditoDIV">
                    <label for="numCredito" class="label">Número de crédito: </label>
                    <input type="text" class="form-control" name="creditoNumero" id="creditoNumero" placeholder="" oninput="" autocomplete="off" value="${value.creditoNumero}">
                </div>

            </div>`
    }

}

//retorna el componente select dependiendo del elemento dado
function compruebaAfore(value) {

    if (value === null || value === undefined) {

        return `
        <div class="form-group col-md-3">
        <p><b>¿Cuenta con AFORE?:</b></p>
            <div class="form-check form-check-inline">
                <input class="form-check-input" type="radio" name="aforeRadio"  onclick="btnAfore1(this)" id="aforeSi" value="si">
                <label class="form-check-label" for="aforeSi">Si</label>
            </div>
            <div class="form-check form-check-inline">
                <input class="form-check-input" type="radio" name="aforeRadio" onclick="btnAfore2(this)" id="aforeNo" value="no" checked>
                <label class="form-check-label" for="aforeNo">No</label>
            </div>

        </div>

        <div class="form-group col-md-3">
            <div id="catalogoAforeDIV" style="display: none">
                <label for="idInstitucionAfore" class="label">Seleccione:</label>
                <select class="browser-default custom-select" name="idInstitucionAfore" id="idInstitucionAfore">
                ${value === null ? setSelectAforeCatalogo(null) : setSelectAforeCatalogo(value.idInstitucionAfore)}
                </select>
            </div>
        </div>
        `;



    } else {
        // SI el valor es == 0 // Significa que no tiene afore... por defecto al seleccionar el "no"
        //Se tiene que poner el elemento select en value = 0 => Sin afore
        if (value.idInstitucionAfore === "0") {
            return `

        <div class="form-group col-md-3">
        <p><b>¿Cuenta con AFORE?:</b></p>
            <div class="form-check form-check-inline">
                <input class="form-check-input" type="radio" name="aforeRadio"  onclick="btnAfore1(this)" id="aforeSi" value="si">
                <label class="form-check-label" for="aforeSi">Si</label>
            </div>
            <div class="form-check form-check-inline">
                <input class="form-check-input" type="radio" name="aforeRadio" onclick="btnAfore2(this)" id="aforeNo" value="no" checked>
                <label class="form-check-label" for="aforeNo">No</label>
            </div>

        </div>

        <div class="form-group col-md-3">
            <div id="catalogoAforeDIV" style="display: none">
                <label for="idInstitucionAfore" class="label">Seleccione:</label>
                <select class="browser-default custom-select" name="idInstitucionAfore" id="idInstitucionAfore">
                ${setSelectAforeCatalogo(value.idInstitucionAfore)}
                </select>
                <h1>${value.idInstitucionAfore}</h1>
            </div>
        </div>
        `;
        } else {


            return `
            <div class="form-group col-md-3">
            <p><b>¿Cuenta con AFORE?:</b></p>
                <div class="form-check form-check-inline">
                    <input class="form-check-input" type="radio" name="aforeRadio"  onclick="btnAfore1(this)" id="aforeSi" value="si" checked>
                    <label class="form-check-label" for="aforeSi">Si</label>
                </div>
                <div class="form-check form-check-inline">
                    <input class="form-check-input" type="radio" name="aforeRadio" onclick="" id="aforeNo" value="no" disabled>
                    <label class="form-check-label" for="aforeNo">No</label>
                </div>

            </div>

            <div class="form-group col-md-3">
                <div id="catalogoAforeDIV">
                    <label for="idInstitucionAfore" class="label">Seleccione:</label>
                    <select class="browser-default custom-select" name="idInstitucionAfore" id="idInstitucionAfore">
                        ${setSelectAforeCatalogo(value.idInstitucionAfore)}
                    </select>
                </div>
            </div>
        `;
        }

    }

    //desabiitar el ultimo valor ???
}

//retorna informacion de afore con sus respectivos datos
function returnInfoAfore(value) {

    if (value === null || value === undefined) {
        return `
            <div class="form-group col-md-4">
                <h6>Cuenta con AFORE:</h6>
                    <p class="text-black-50">No.</p>
            </div>`;
    } else {
        //Si ya llenaron datos...
        if (value.idInstitucionAfore == "0") {

            return `
            <div class="form-group col-md-4">
                <h6>Cuenta con AFORE:</h6>
                    <p class="text-black-50">No.</p>
            </div>`;

        } else {
            return `
            <div class="form-group col-md-4">
                <h6>Cuenta con AFORE:</h6>
                    <p class="text-black-50">Si.</p>
            </div>
            <div class="form-group col-md-4">
                <h6>Nombre de afore:</h6>
                <p class="text-black-50">${retornaInstitucionAfore(value.idInstitucionAfore)}</p>
            </div>`;
        }
    }
}

//Retorna el valor del afore dado el idInstitucionAfore (Catalogo)
function retornaInstitucionAfore(identificador) {
    let instituciones = dataAforesCatalogo.getDataAfore()[0];
    let filter = instituciones.filter(item => item.idInstitucionAfore == identificador)
    let institucion = filter[0]
    return `${institucion.institucionAfore}`
}

function setSelectFactorRH(value) {

    let optionsItems;
    const obje = [
        { valueSelect: "+", description: "Positivo (+)" },
        { valueSelect: "-", description: "Negativo (-)" }
    ]
    if (value === null || value === '') {
        optionsItems += `<option value="" selected disabled>Selecccione una opción</option>`;
        obje.forEach((item) => {
            optionsItems += `<option value="${item.valueSelect}">${item.description}</option>`;
        });
        return optionsItems;
    } else {

        obje.forEach((item) => {
            if (value == item.valueSelect) {
                optionsItems += `<option value="${item.valueSelect}" selected>${item.description}</option>`;
            }
            else {
                optionsItems += `<option value="${item.valueSelect}">${item.description}</option>`;
            }
        });
        return optionsItems;
    }

}

//define comportamiento del radioButton infonavit
function btnAfore1(element) {

    //console.log("Has presionado el boton si")
    $('#catalogoAforeDIV').show("fast")

    let info = dataSeguridadSocial.getData();
    let datos = info[0]
    let valueInd = 0;
    let select = document.getElementById('idInstitucionAfore');
    datos.personaAfore === null ? valueInd = "0" : valueInd = datos.personaAfore.idInstitucionAfore

    //select.options[select.selectedIndex].value = valueInd;
    select.value = valueInd;
}

function btnAfore2(element) {
    //console.log("Has presionado el boton NO")
    //se tiene que ocultar el elemento
    let select = document.getElementById('idInstitucionAfore');
    //datos.personaAfore === null ? valueInd = "0": valueInd = datos.personaAfore.idInstitucionAfore

    //select.options[select.selectedIndex].value = valueInd;
    select.value = 0;
    $('#catalogoAforeDIV').hide("fast")

}

function btnInfonavit1(element) {

    //console.log("Has presionado el boton si")

    let inputCredito = document.getElementById('creditoNumero')

    //verificar si existe informacion en state con respecto al afore
    let info = dataSeguridadSocial.getData()
    let datos = info[0];
    datos.infonavit === null ? inputCredito.value = '' : inputCredito.value = datos.infonavit.creditoNumero
    $('#numCreditoDIV').show("fast");

}


function btnInfonavit2(element) {
    //console.log("Has presionado el boton NO")
    $('#numCreditoDIV').hide("fast");
    //Define valor de input (Clean)
    let inputCredito = document.getElementById('creditoNumero')
    inputCredito.value = '';
}


//Define el select de grupoSanguineo
function setSelectSanguineo(value) {

    let optionsItems;
    const obje = [
        { valueSelect: "A", description: "A" },
        { valueSelect: "AB", description: "AB" },
        { valueSelect: "B", description: "B" },
        { valueSelect: "O", description: "O" }

    ]
    if (value === null || value === '') {
        optionsItems += `<option value="" selected disabled>Selecccione una opción</option>`;
        obje.forEach((item) => {
            optionsItems += `<option value="${item.valueSelect}">${item.description}</option>`;
        });
        return optionsItems;
    } else {

        obje.forEach((item) => {
            if (value == item.valueSelect) {
                optionsItems += `<option value="${item.valueSelect}" selected>${item.description}</option>`;
            }
            else {
                optionsItems += `<option value="${item.valueSelect}">${item.description}</option>`;
            }
        });
        return optionsItems;
    }

}

function setSelectAforeCatalogo(value) {


    let instituciones = dataAforesCatalogo.getDataAfore()[0];

    //Convertir array para no mostrar valores
    //Desabilitar item 0 para evitar

    let optionsItems;
    if (value === null) {
        optionsItems += `<option value="" selected disabled>Selecccione una opción</option>`;
        instituciones.forEach((item) => {
            optionsItems += `<option value="${item.idInstitucionAfore}">${item.institucionAfore}</option>`;
        });
        return optionsItems;
    } else {

        optionsItems += `<option value="" disabled>Selecccione una opción</option>`;
        instituciones.forEach((item) => {
            if (value == item.idInstitucionAfore) {
                optionsItems += `<option value="${item.idInstitucionAfore}" selected>${item.institucionAfore}</option>`;
            }
            else {
                optionsItems += `<option value="${item.idInstitucionAfore}">${item.institucionAfore}</option>`;
            }
        });
        return optionsItems;

        /*if(value.idInstitucionAfore === '0'){
            optionsItems+= `<option value="" selected disabled>Selecccione una opción</option>`;
            instituciones.forEach((item)=>{
                optionsItems+= `<option value="${item.idInstitucionAfore}">${item.institucionAfore}</option>`;
            });
            return optionsItems;

        }else{
            optionsItems+= `<option value=""  disabled>Selecccione una opción</option>`;
            instituciones.forEach((item)=>{
                if(value == item.idInstitucionAfore){
                    optionsItems+= `<option value="${item.idInstitucionAfore}" selected>${item.institucionAfore}</option>`;
                }
                else{
                    optionsItems+= `<option value="${item.idInstitucionAfore}">${item.institucionAfore}</option>`;
                }
            });
            return optionsItems;
        }*/

        //return optionsItems;
    }
}


function validateSectionSegSocial() {

    let form_data = $("#seguridad-social").serializeJSON();

    //let nssValid = nssValido(form_data.numeroSeguridadSocial.trim())


    //console.log(form_data)
    //Validando primera seccion
    if (form_data.factorRH === undefined ||
        form_data.grupoSanguineo === undefined ||
        form_data.numeroSeguridadSocial.trim() === '' ||
        validateNSSS(form_data.numeroSeguridadSocial.trim())) {

        return true;
    }


    return false;

}

function validateSectionAfore() {
    let aforeBtnFalse = document.getElementById('aforeNo');
    if (aforeBtnFalse.checked === true) {
        return false;
    }
    if (aforeBtnFalse.checked === false) {

        let form_data = $("#seguridad-social").serializeJSON();
        if (form_data.idInstitucionAfore === undefined) {
            return true;
        } else {
            return false;
        }
    }
}


function validateSectionInfonavit() {

    let creditoInfobtnFalse = document.getElementById('creditoInfonaNO');

    if (creditoInfobtnFalse.checked === true) {
        return false;
    }
    if (creditoInfobtnFalse.checked === false) {
        let increditoNumero = document.getElementById('creditoNumero').value;
        if (increditoNumero.trim() === '') {
            return true;
        } else {
            return false;
        }
    }
}


function validateNSSS(value) {
    let flag = false;
    if (nssValido(value)) {
        flag = false;
    } else {
        flag = true;
    }
    return flag;

}



async function validateSectionSS() {
    let sectionBloodNSS = validateSectionSegSocial();

    let sectionAfore = validateSectionAfore();

    let sectionInfonavit = validateSectionInfonavit();


    if (sectionBloodNSS || sectionAfore || sectionInfonavit) {

        swal({
            title: "Atención",
            text: "• Revise los campos correspondientes.",
            type: "error"
        });

    } else {

        //ocultar formulario
        //ocultar botones
        //ocultar titulo

        //mostrar skeleton
        //referencia a skeleton --- afterValidacion
        visibilityComponent('section-seguridadSocial-form', true) // Componente formulario
        visibilityComponent('skeleton-loader-Social', false);  // componente skeleton
        visibilityComponent("buttons-data-SegSocial", true); // Compoentes botons

        await sendDataSS();






    }
}






const sendDataSS = async () => {
    let data = consFactorySS();
    let id = await getDataFromServerHidden('guardarSeguSocialUsuario', 'POST', data);
    //console.warn(data)
    //console.table(id)
    let idd = showResponseEnc(id)


    if (idd) {
        removeItemComponent('section-seguridadSocial-form')
        await showInfoSegSocial();
        visibilityComponent('skeleton-loader-Social', true);  // componente skeleton
        visibilityComponent("buttons-data-SegSocial", false); // Compoentes botons
        visibilityComponent("gral-options-seguridadSocial", false)
        swal({
            title: 'Atención',
            text: ' Datos guardados con éxito.',
            type: "success",

        }, function () {

            //window.location.reload(); //-- aqui no tengo que recargar nada... se tiene que regresar al comportamiento inicial
            //cancelEditNacimiento();


            //visibilityComponent('section-seguridadSocial-form',true) // Componente formulario



            //manda llamar al showInfoSegSocial



        })
    } else {

        visibilityComponent('section-seguridadSocial-form', false) // Componente formulario
        visibilityComponent('skeleton-loader-Social', true);  // componente skeleton
        visibilityComponent("buttons-data-SegSocial", false); // Compoentes botons


    }
}


//Si todo es satisfactorio aplicar la siguiente funcion
async function updateContenidoSS() {

    removeItemComponent('datos-Nacimiento-form'); // Removiendo componente principal
    removeItemComponent('nacionesMultiples'); // removiendo componente secundario
    removeItemComponent('btnNacimiento-edit-cancel');
    visibilityComponent('skeleton-loader-Nacimiento', false);
    visibilityComponent("buttons-data-nacimiento", true);
    //await getDatosNacimiento(); //Retrae info
    visibilityComponent("gral-options-titleNacimiento", false)
    visibilityComponent("buttons-data-nacimiento", false);
    visibilityComponent('skeleton-loader-Nacimiento', true);
    visibilityComponent("gral-options-Nacimiento", false);

}


function cancelContenido() {
    //

}

function consFactorySS() {
    let data = [];
    data.push(factorySS(), factorySSoptions())
    return JSON.stringify(data);
}



function factorySS() {
    let arraySeccion1 = [];
    //generar los objetos para mandarlos
    let form_data = $("#seguridad-social").serializeJSON();
    let valueRH = form_data.factorRH;
    let valueGrupoSanguineo = form_data.grupoSanguineo;
    let valueNumSeguridad = form_data.numeroSeguridadSocial.trim();

    let dataSangre = {
        grupoSanguineo: valueGrupoSanguineo,
        factorRH: valueRH
    }
    let dataNSS = {
        numeroNSS: valueNumSeguridad
    }
    arraySeccion1.push(dataSangre, dataNSS);
    return arraySeccion1;
}


function factorySSoptions() {
    let arraySeccion2 = [];

    let sectAfore = factorySSAfore();
    let sectInfonavit = factorySSInfonavit();


    let dataAfore = {
        idInstitucionAfore: sectAfore
    }

    let dataInfonavit = {
        creditoNumero: sectInfonavit
    }

    arraySeccion2.push(dataAfore, dataInfonavit)

    return arraySeccion2;
}

function factorySSInfonavit() {
    let creditoInfobtnFalse = document.getElementById('creditoInfonaNO');

    if (creditoInfobtnFalse.checked === true) {
        return "rkRM46hDZ6yM";
    } else {
        let increditoNumero = document.getElementById('creditoNumero').value;
        return increditoNumero;
    }



}


function factorySSAfore() {

    let aforeBtnFalse = document.getElementById('aforeNo');
    if (aforeBtnFalse.checked === true) {
        return "rkRM46hDZ6yM";
    } else {

        let form_data = $("#seguridad-social").serializeJSON();
        return form_data.idInstitucionAfore;
    }
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
        divCorrecto.innerText = "Número de seguridad social válido";

    } else {

        divCorrecto.setAttribute('hidden', true);
        divincorrecto.removeAttribute('hidden')
        divincorrecto.innerText = "Número de seguridad social inválido";

    }
}



const setSelectTipoTelefono = (value) => {
    let optionsItems = ``;
    const obje = [
        { valueSelect: "Móvil", description: "Móvil" },
        { valueSelect: "Privado", description: "Privado" },
        { valueSelect: "Trabajo", description: "Trabajo" }
    ]

    if (value === null || value === '') {
        optionsItems += `<option value="" selected disabled>Selecccione una opción</option>`;
        obje.forEach((item) => {
            optionsItems += `<option value="${item.valueSelect}">${item.description}</option>`;
        });

        return optionsItems;

    } else {

        optionsItems += `<option value="" selected disabled>Selecccione una opción</option>`;
        obje.forEach((item) => {
            if (value == item.valueSelect) {
                optionsItems += `<option value="${item.valueSelect}" selected>${item.description}</option>`;
            }
            else {
                optionsItems += `<option value="${item.valueSelect}">${item.description}</option>`;
            }
        });
        return optionsItems;
    }
}

//PAra tipo de correo
const setSelectTipoCorreo = (value) => {
    let optionsItems = ``;

    const obje = [
        { valueSelect: "Institucional", description: "Institucional" },
        { valueSelect: "Privado", description: "Personal" },
        { valueSelect: "Trabajo", description: "Trabajo" }
    ]

    if (value === null || value === '') {
        optionsItems += `<option value="" selected disabled>Selecccione una opción</option>`;
        obje.forEach((item) => {
            optionsItems += `<option value="${item.valueSelect}">${item.description}</option>`;
        });

        return optionsItems;

    } else {

        optionsItems += `<option value="" selected disabled>Selecccione una opción</option>`;
        obje.forEach((item) => {
            if (value == item.valueSelect) {
                optionsItems += `<option value="${item.valueSelect}" selected>${item.description}</option>`;
            }
            else {
                optionsItems += `<option value="${item.valueSelect}">${item.description}</option>`;
            }
        });
        return optionsItems;
    }
}

/**
 * valida el numero del input
 * @param element Item de elemento
 */
const validarNUM = (element) => {
    let reg = /[^0-9.]/g;
    element.value = element.value.replace(reg, "");
    $('#' + element.id).bind('copy paste', (e) => {
        e.preventDefault();
        return false;
    });
}

//Agregr nuevo correo lee
/**
 * Longitud de correo electronico
 */
function checkLengthComponentMail() {
    let item = document.getElementById('comunicacionComponenteCorreo');
    //console.log(item.children.length);
    let size = item.children.length;
    if (size >= 2) {
        swal({
            title: "Atención",
            text: " • Solo se permiten agregar 2 correos electrónicos",
            type: "warning"
        })
    } else {
        nuevoCorreoElectronicoInicial()
    }
}

/**
 * Verifica longitud de componente...
 */
function clDocFormacionAcademica(element){

    //1.- Primero obtener los dos elementos padre ( de informacion y de documentos)
    //2.- Llamar a funcion para devolver elemento...
    //Dentro de la primera funcion... tener que acceder a los elementos mediante el doom para poder agregar los eventos



}




/**
 *
 * @param componenteInput Componente para borrar su respectivo children
 */
function deleteComponenteChildren(componenteInput){
    if (componenteInput.children.length>0){
        componenteInput.children[0].remove();
    }
}

function deleteComponenteChildrenFor(componenteInput){
    if (componenteInput.children.length>0){
        for (let i = 0; i < componenteInput.children.length-1; i++) {
            componenteInput.children[i].remove();
        }
    }
}


/**
 *
 * @param elementoPadre elemento padre destino para agregar componente
 * @param componente elemento componente para  agregar en elemento padre
 */
function containerAppend(elementoPadre, componente){
    if (elementoPadre.children.length >0){
        elementoPadre.innerHTML = componente();
    }
    elementoPadre.innerHTML = componente();
}



/**
 *
 * @param Elimina el elemento segun sea requerido por el parametro....
 */
function EliminarNuevoDocumentoFormAcademica(element){
    let componentePadre = element.parentNode.parentNode.parentNode.parentNode
    componentePadre.remove();

    //Agregar validacion de componente....
}

//Funcion para ocultar o mostrar el input o select de la seecion institucion....
async function hideShowInfoInstitucion(element) {
    let chkInstitucion = element;
    let containerInstitucionAbierto = element.parentNode.parentNode.parentNode.children[0].children[0];
    let containerInstitucionSelect = element.parentNode.parentNode.parentNode.children[0].children[1]

    let itemSelectPais = element.parentNode.parentNode.parentNode.parentNode.parentNode.children[1].children[0].children[0].children[1]


    let itemValueSelectPais = parseInt(itemSelectPais[itemSelectPais.selectedIndex].value);

    if (chkInstitucion.checked){
        containerInstitucionAbierto.innerHTML = itemInputInstitucion()
        containerInstitucionSelect.innerHTML = "";

    }else{

        containerInstitucionAbierto.innerHTML = "";
        containerInstitucionSelect.innerHTML = itemSelectFormacionInstitucion();
    }




}

/**
 * Oculta o mustra informaicon de nombre de estudios....
 * @param element
 */
function hideShowInfoNombreEstudiosPlan(element) {
    let chkEstudios = element;
    let containerEstudiosRealizadosAbierto = element.parentNode.parentNode.parentNode.children[0].children[0];

    let containerEstudiosRealizadosSelect = element.parentNode.parentNode.parentNode.children[0].children[1];

    if(chkEstudios.checked){
        containerEstudiosRealizadosSelect.innerHTML = ""
        containerEstudiosRealizadosAbierto.innerHTML = itemInputEstudiosRealizados();

    }else{
        containerEstudiosRealizadosAbierto.innerHTML = ""
        containerEstudiosRealizadosSelect.innerHTML = itemSelectEstudiosRealizados();
    }
}



/**
 * Agrega el listener onclick async al elemento indicado
 * dentro de la arrow function, se agrega "element"
 * Esto funciona cuando la funcion este dentro del scope, es decir
 * agregar un "This"
 * @param itemName nombre del elemento
 * @param funName nombre de la funcion dada....
 */
const AgregarListener = (itemName, funName) => {
    let item = document.getElementById(itemName);
    item.onclick = ()=>{
        funName(item);
    }

}

const AgregarListenerAsync = (itemName, funName) => {
    let item = document.getElementById(itemName);
    item.onclick = async ()=>{
        await funName(item);
    }
}

/**
 * verifica la longitud del componente, realiza la validacion y
 * agrega los elementos segun la condicion dada (n>2)
 */
function checkLengthComponent() {
    let item = document.getElementById('comunicacionComponente');

    let size = item.children.length;

    if (size >= 2) {
        swal({
            title: "Atención",
            text: " • Solo se permiten agregar 2 números de teléfono",
            type: "warning"
        })
    } else {

        //Agrega el nuevo componente a la seccion...
        nuevoComponentetelefonoInicial();
    }

}


///////////////////

///Obtiene los elementos del backend....
//TESTING.......solo para telefono
async function getDatosComunicacion() {

    let idUser = document.getElementById('_idUnique').value;
    let info = await getDataFromServerHidden(`obtenerDatosComunicacion/${idUser}`, 'GET');
    //console.log(info)
    return info;

}

//Obtiene datos de backend.... solo correo
async function getDatosComunicacionCorreo() {
    let idUser = document.getElementById('_idUnique').value;
    let info = await getDataFromServerHidden(`obtenerDatosComunicacionCorreo/${idUser}`, 'GET');
    //console.log(info)
    return info;
}

function editarCorreoActual(item) {

    let divPadre = item.parentNode.parentNode.parentNode.parentNode

    let divInputs = divPadre.children[0].children[0]
    let divSkeletonHead = divPadre.children[0].children[1]
    let divButtonsPadre = divPadre.children[0].children[2]

    let divInFormacion = divPadre.children[1].children[1]
    let divSkeletonBody = divPadre.children[1].children[0]
    let formularioPadre = divPadre.children[1].children[2]

    //se agrega componente
    let idPersonaCorreo = divInputs.children[0].value;
    let idd = dataComCorreo.findItemData(idPersonaCorreo);

    formularioPadre.innerHTML = sectionFormComponenteFormulario333(idd);
    divButtonsPadre.children[0].remove() //Remu
    divButtonsPadre.innerHTML = butttonEditCurrentCorreo();

    divInFormacion.children[0].remove();




}

function editarNumTelefonoActual(item) {

    let divPadre = item.parentNode.parentNode.parentNode.parentNode;
    let formulario = divPadre.children[1].children[1];
    let divInputs = item.parentNode.parentNode.parentNode.children[0]

    let divButtons = item.parentNode.parentNode //elemento contenedor de elementos (remover hijo)
    let divInformacion = divPadre.children[1].children[0].children[1]; // elementos padre de informacion (remover 0 y 1)

    //En formulario agregar componente
    let idPersonaTelefono = divInputs.children[0].value;
    let iddd = dataComTelefono.findItemData(idPersonaTelefono)
    formulario.innerHTML = sectionFormComponenteFormulario22(iddd)
    divButtons.children[0].remove() // removiendo botones
    divButtons.innerHTML = butttonEditCurrentTelefono() // Escribiendo en contenendor botones

    divInformacion.children[1].remove()
    divInformacion.children[0].remove()

}

///cancelar cambios....(Regresa al item original)
function cancelarCambiosEdit(item) {
    //regresar al dom a los valores "iniciales...."

    let divPadre = item.parentNode.parentNode.parentNode.parentNode;
    let formulario = divPadre.children[1].children[1].children[0];
    let divInputs = item.parentNode.parentNode.parentNode.children[0]

    let divButtons = item.parentNode.parentNode //elemento contenedor de elementos (remover hijo)

    let divInformacion = divPadre.children[1].children[0].children[1];


    divButtons.children[0].remove()
    divButtons.innerHTML = buttonEditComponent()

    let idPersonaTelefono = divInputs.children[0].value;
    let iddd = dataComTelefono.findItemData(idPersonaTelefono)
    divInformacion.innerHTML = sectionShowDataCurrent(iddd);

    formulario.remove();
}

//cancelarcambios de correo electronico
function cancelarCambiosEditC(item) {

    let divPadre = item.parentNode.parentNode.parentNode.parentNode

    let divInputs = divPadre.children[0].children[0]
    let divSkeletonHead = divPadre.children[0].children[1]
    let divButtonsPadre = divPadre.children[0].children[2]

    let divInFormacion = divPadre.children[1].children[1]
    let divSkeletonBody = divPadre.children[1].children[0]
    let formularioPadre = divPadre.children[1].children[2]

    //se agrega componente
    let idPersonaCorreo = divInputs.children[0].value;
    let idd = dataComCorreo.findItemData(idPersonaCorreo);


    divButtonsPadre.children[0].remove(); // Remueve botoenes
    divButtonsPadre.innerHTML = buttonEditComponentCorreo(); // Agrega componentes botoenes edicion
    divInFormacion.innerHTML = sectionShowDataCurrentMail(idd);

    formularioPadre.children[0].remove();

}

//Actualizar elemmento actual (Correo)

const validaActualizaCamposCorreoElectronico = async (item) =>{
    let divPadre = item.parentNode.parentNode.parentNode.parentNode
    let formularioPadre = divPadre.children[1].children[2]
    let formularioHijo = formularioPadre.children[0];

    let form_data = $("#"+formularioHijo.id).serializeJSON();
    let correoElec = form_data.correoContacto;
    let selectTipo = form_data.tipoCorreo;

    if (correoElec.trim() === '' || selectTipo === undefined){

        swal({
            title: "Atención",
            text: `• Revise los campos correspondientes.`,
            type: "warning",
        });
    }else{
        await actualizarCamposEditC(item);
    }




}


async function actualizarCamposEditC(item) {
    let divPadre = item.parentNode.parentNode.parentNode.parentNode

    let divInputs = divPadre.children[0].children[0]
    let divSkeletonHead = divPadre.children[0].children[1]
    let divButtonsPadre = divPadre.children[0].children[2]

    let divInFormacion = divPadre.children[1].children[1]
    let divSkeletonBody = divPadre.children[1].children[0]
    let formularioPadre = divPadre.children[1].children[2]


    //Ocultando elementos de diseño
    divSkeletonHead.hidden = false;
    divSkeletonBody.hidden = false;
    divButtonsPadre.hidden = true;
    formularioPadre.hidden = true;

    await updateNewObjectsItemMail(item);


}

//llamado a funcion para actualizar
const updateNewObjectsItemMail = async (item) => {


    let divPadre = item.parentNode.parentNode.parentNode.parentNode

    let divInputs = divPadre.children[0].children[0]
    let divSkeletonHead = divPadre.children[0].children[1]
    let divButtonsPadre = divPadre.children[0].children[2]

    let divInFormacion = divPadre.children[1].children[1]
    let divSkeletonBody = divPadre.children[1].children[0]
    let formularioPadre = divPadre.children[1].children[2]
    let formularioHijo = formularioPadre.children[0];


    console.log(formularioHijo)

    let form_data = $(`#${formularioHijo.name}`).serializeJSON();

    console.log(form_data)
    //Creacion de objeto sender.....
    let array = [];
    let object = {
        correoContacto: form_data.correoContacto,
        tipoCorreo: form_data.tipoCorreo,
        idPersonaCorreoElectronico: divInputs.children[0].value
    }

    array.push(object);
    let dataaa = JSON.stringify(array)


    let response = await getDataFromServerHidden('editarCorreoElectronico', 'POST', dataaa);

    if (response.noError === "0") {
        dataComCorreo.replaceItem(response.idPersonaCorreoElectronico, response)

        //asignando valores
        divInputs.children[0].value = response.idPersonaCorreoElectronico
        divInputs.children[1].value = response.idCorreoElectronico

        //Eliminando y agregando componentes
        divButtonsPadre.children[0].remove() // remueve elementos botones
        divButtonsPadre.innerHTML = buttonEditComponentCorreo();
        divInFormacion.innerHTML = sectionShowDataCurrentMail(response);
        formularioHijo.remove();

        divButtonsPadre.hidden = false;
        divSkeletonHead.hidden = true;
        divSkeletonBody.hidden = true
        formularioPadre.hidden = false


        swal({
            title: "Atención",
            text: `Datos actualizados satisfactoriamente`,
            type: "success",
        });
    } else {

        console.log(response)

        divSkeletonHead.hidden = true;
        divSkeletonBody.hidden = true;
        divButtonsPadre.hidden = false;
        formularioPadre.hidden = false;

        if (response.errors) {
            let arry = response.errors
                .map((item) => {
                    return "• " + item + ".<br>";
                })
                .join("");

            swal({
                html: true,
                title: "Atención",
                text: arry,
                type: "warning",
            });

        } else {
            swal({
                title: "Atención",
                text: `${response.mensaje}`,
                type: "warning",
            });
        }

    }

}


async function borrarDatosCamposCallC(item) {

    let divPadre = item.parentNode.parentNode.parentNode.parentNode;

    let divInputs = divPadre.children[0].children[0]
    let divSkeletonHead = divPadre.children[0].children[1]
    let divButtonsPadre = divPadre.children[0].children[2]

    let divInFormacion = divPadre.children[1].children[1]
    let divSkeletonBody = divPadre.children[1].children[0]
    let formularioPadre = divPadre.children[1].children[2]
    let formularioHijo = formularioPadre.children[0];


    divSkeletonHead.hidden = false;
    divSkeletonBody.hidden = false;


    divButtonsPadre.hidden = true;
    formularioHijo.hidden = true;



    await delNewObjectsItemMail(item)

    /*let divPadre = item.parentNode.parentNode.parentNode.parentNode;
    let formulario = divPadre.children[1].children[1].children[0];
    let divInputs = item.parentNode.parentNode.parentNode.children[0]

    let divButtons = item.parentNode.parentNode
    let divInformacion = divPadre.children[1].children[0].children[1];

    let divFormualarioPadre = formulario.parentNode;


    //Ocultando elementos de diseño
    divPadre.children[0].children[1].hidden = false // mostrando skeletons header
    divButtons.hidden = true;
    formulario.hidden = true;
    divPadre.children[1].children[0].children[0].hidden = false // mostrando skeleton body

    //await updateNewObjectsItemPhone(divPadre, formulario, divInputs, divButtons, divInformacion, divFormualarioPadre);
    await delNewObjectsItemMail(item)*/
}


const delNewObjectsItemMail = async (item) => {

    let divPadre = item.parentNode.parentNode.parentNode.parentNode;

    let divInputs = divPadre.children[0].children[0]
    let divSkeletonHead = divPadre.children[0].children[1]
    let divButtonsPadre = divPadre.children[0].children[2]

    let divInFormacion = divPadre.children[1].children[1]
    let divSkeletonBody = divPadre.children[1].children[0]
    let formularioPadre = divPadre.children[1].children[2]
    let formularioHijo = formularioPadre.children[0];





    //Creacion del objeto
    let array = [];
    let object = {
        idCorreoElectronico: divInputs.children[1].value
    }

    array.push(object);

    let dataaa = JSON.stringify(array)
    let response = await getDataFromServerHidden('eliminarCorreoElectronico', 'POST', dataaa);

    if (response.noError === "0") {
        //dataComCorreo.replaceItem(response.idPersonaCorreoElectronico, response)
        divPadre.remove(); // Remueve



        swal({
            title: "Atención",
            text: `Datos eliminados satisfactoriamente`,
            type: "success",
        });
    } else {

        console.log(response)



        divSkeletonHead.hidden = true;
        divSkeletonBody.hidden = true;


        divButtonsPadre.hidden = false;
        formularioHijo.hidden = false;

        if (response.errors) {
            swal({
                title: "Atención",
                text: `${response.errors}`,
                type: "warning",
            });
        } else {
            swal({
                title: "Atención",
                text: `${response.mensaje}`,
                type: "warning",
            });
        }

    }

}

const validarActualizarCamposEdit = async (item) =>{

    let divPadre = item.parentNode.parentNode.parentNode.parentNode;
    let formulario = divPadre.children[1].children[1].children[0];

    let form_data = $("#"+formulario.id).serializeJSON(); // Obtiendo los datos para validar

    let telefono = form_data.telefono;
    let tipotelefono = form_data.tipoTelefono;

    if (telefono.trim() === '' || tipotelefono === undefined){
        swal({
            title: "Atención",
            text: `• Revise los campos correspondientes.`,
            type: "warning",
        });

    }else{
        await actualizarCamposEdit(item);
    }

}


//actualizar elemento actual....
async function actualizarCamposEdit(item) {
    let divPadre = item.parentNode.parentNode.parentNode.parentNode;
    let formulario = divPadre.children[1].children[1].children[0];
    let divInputs = item.parentNode.parentNode.parentNode.children[0]

    let divButtons = item.parentNode.parentNode
    let divInformacion = divPadre.children[1].children[0].children[1];

    let divFormualarioPadre = formulario.parentNode;


    //Ocultando elementos de diseño
    divPadre.children[0].children[1].hidden = false // mostrando skeletons header
    divButtons.hidden = true;
    formulario.hidden = true;
    divPadre.children[1].children[0].children[0].hidden = false // mostrando skeleton body

    await updateNewObjectsItemPhone(divPadre, formulario, divInputs, divButtons, divInformacion, divFormualarioPadre);
}


const updateNewObjectsItemPhone = async (divPadre, formulario, divInputs, divButtons, divInformacion, divFormularioPadre) => {

    let form_data = $(`#${formulario.name}`).serializeJSON();

    //Creacion de objeto sender.....
    let array = [];
    let object = {
        telefono: form_data.telefono,
        tipoTelefono: form_data.tipoTelefono,
        idPersonaTelefono: divInputs.children[0].value
    }

    array.push(object);

    let dataaa = JSON.stringify(array)
    let response = await getDataFromServerHidden('editarNumTelefono', 'POST', dataaa);

    //console.log(response)
    if (response.noError === "0") {

        //dataComTelefono.addNewSingleElement(response) // se agrega en nuevo catalogo // Register
        dataComTelefono.replaceItem(response.idPersonaTelefono, response)

        //asignando valores
        divInputs.children[0].value = response.idPersonaTelefono
        divInputs.children[1].value = response.idTelefono

        //eliminando componentes y agregando a ruta
        divButtons.children[0].remove() // Eliminando componente botones ....
        divButtons.innerHTML = buttonEditComponent() // Escribiendo en contenendor botones
        divInformacion.innerHTML = sectionShowDataCurrent(response);
        formulario.remove(); // remueve formulario

        //mostrando elementos
        divPadre.children[0].children[1].hidden = true // ocultando skeletons header
        divButtons.hidden = false;
        formulario.hidden = false;
        divPadre.children[1].children[0].children[0].hidden = true // mostrando skeleton body

        swal({
            title: "Atención",
            text: `Datos actualizados satisfactoriamente`,
            type: "success",
        });
    }
    else {
        console.log(response)
        divPadre.children[0].children[1].hidden = true // ocultando skeletons header
        divButtons.hidden = false;
        formulario.hidden = false;
        divPadre.children[1].children[0].children[0].hidden = true // mostrando skeleton body
        //algo salio Mal :(

        //reparar esta cosa
        if (response.errors) {
            let arry = response.errors
                .map((item) => {
                    return "• " + item + ".<br>";
                })
                .join("");

            swal({
                html: true,
                title: "Atención",
                text: arry,
                type: "warning",
            });
        } else {
            swal({
                title: "Atención",
                text: `${response.mensaje}`,
                type: "warning",
            });
        }
    }
}


//borrar elememento actual
/*async function borrarDatosCampos(item){

    swal({
            title: "Atención",
            text: "Esta a punto de eliminar el registro. ¿Desea continuar?",
            type: "warning",
            showCancelButton: true,
            confirmButtonColor: '#DD6B55',
            confirmButtonText: 'Si, deseo eliminar',
            cancelButtonText: "No, cancelar.",
            closeOnConfirm: false,
            closeOnCancel: false
        },
        async function(isConfirm){

            if (isConfirm){
                swal("Atencion!", "Registro eliminado satisfactoriamente.", "success");
                console.log(item)
                await borrarDatosCamposCall(item);

            } else {
                swal("Atencion", "No se realizaron cambios", "error");

            }
        });

}*/

const borrarDatosCamposCall = async (item) => {
    //here we going again
    let divPadre = item.parentNode.parentNode.parentNode.parentNode;
    let formulario = divPadre.children[1].children[1].children[0];
    let divInputs = item.parentNode.parentNode.parentNode.children[0]

    let divButtons = item.parentNode.parentNode
    let divInformacion = divPadre.children[1].children[0].children[1];

    let divFormualarioPadre = formulario.parentNode;


    //Ocultando elementos de diseño
    divPadre.children[0].children[1].hidden = false // mostrando skeletons header
    divButtons.hidden = true;
    formulario.hidden = true;
    divPadre.children[1].children[0].children[0].hidden = false // mostrando skeleton body

    await delNewObjectsItemPhone(divPadre, formulario, divInputs, divButtons, divInformacion, divFormualarioPadre);

}
const delNewObjectsItemPhone = async (divPadre, formulario, divInputs, divButtons, divInformacion, divFormularioPadre) => {

    let form_data = $(`#${formulario.name}`).serializeJSON();


    //Creacion de objeto sender.....
    let array = [];
    let object = {
        idTelefono: divInputs.children[1].value
    }


    array.push(object);

    let dataaa = JSON.stringify(array)
    let response = await getDataFromServerHidden('eliminaNumTelefono', 'POST', dataaa);


    if (response.noError === "0") {

        divPadre.remove(); // removiendooooo
        swal({
            title: "Atención",
            text: `Datos eliminados satisfactoriamente`,
            type: "success",
        });

    } else {

        divPadre.children[0].children[1].hidden = true // ocultando skeletons header
        divButtons.hidden = false;
        formulario.hidden = false;
        divPadre.children[1].children[0].children[0].hidden = true // mostrando skeleton body
        //algo salio Mal :

        //reparar esta funcion en technical debt
        if (response.errors) {
            swal({
                title: "Atención",
                text: `${response.errors}`,
                type: "warning",
            });
        } else {
            swal({
                title: "Atención",
                text: `${response.mensaje}`,
                type: "warning",
            });
        }
    }
}




//---------------------CASO DOMICILIO
async function getCurrentAddress() {
    let idUser = document.getElementById('_idUnique').value;
    let info = await getDataFromServerHidden(`obtenerDatosDomicilio/${idUser}`, 'get');
    console.log(info)
    return info;
}

//1.- Primer caso, se agregan datos de domicilio principal, nacional
//FuncionAgregar




/**
 * Esto tendria que ser como observable... el cual tendria que realizarse obteniendo el catalogo de todo
 *
 */

///Se tienen que realizar l
const generarRepositorioDomicilios = async () => {

    console.log("Llamando a catalogos...")

    await setStorageNacionesEstados(); // Llamadas a catalogos de estados...

    let data = await getCurrentAddress();  // llamando a datos

    console.log("Obteniendo valores para domicilio...");

    //let data = devolverHorario();
    dataDomicilio.clearDataDomicilio();
    dataDomicilio.setData(data);

    devolverComponenteDomPrincipal('S')///hardcodeado
    devolverComponenteDomAlterno('N');


}

//En cada item... de be de verificar si es valido o n
const devolverComponenteDomPrincipal = (typeN) => {

    let data = "";
    let type = typeN;

    let infoDom = dataDomicilio.getData();
    console.log(infoDom)
    if (dataDomicilio.searchByType(type) !== false) {
        console.log("Si existe, procedo a escribir componente DomPrincipal para edicion")
        data += componenteDomicilioPrincipalDATA(dataDomicilio.searchByType(type))
    } else {
        console.log("NO existe, procedo a escribir componente DomPrincipal inicial")
        let item = "null"
        data += componenteDomicilioPrincipal(item);
    }
    $('#contenedorDomicilioPrincipal').append(data); // Escribe el componente con formulario.
}

///Para editar un valor.....
async function domicilioPrincipalEditarInicial(item) {

    //Contenedor general
    let parentgral = item.parentNode.parentNode.parentNode.parentNode.parentNode;

    //Contenedores de header
    let parentHeader = item.parentNode.parentNode.parentNode.parentNode;
    let parentTitulos = item.parentNode.parentNode.parentNode
    let parentBotones = item.parentNode.parentNode;

    let parentInputs = item.parentNode.parentNode.parentNode.parentNode.children[0]
    let parentSkelet = item.parentNode.parentNode.parentNode.parentNode.children[1]

    //seccion para body
    let parentbodySkeleton = item.parentNode.parentNode.parentNode.parentNode.parentNode.children[1].children[0];
    let parentbodyInformacion = item.parentNode.parentNode.parentNode.parentNode.parentNode.children[1].children[1];

    let parentbodyFormulario = item.parentNode.parentNode.parentNode.parentNode.parentNode.children[1].children[2];

    //remueve botones
    parentBotones.children[0].remove();

    //Agrega nuevos botones
    parentBotones.innerHTML = btnsGuardarCancelarDomPrincipalExistent();

    //remueve informacion
    parentbodyInformacion.children[0].remove();

    //Agrega nuevo formulario (Esto dependenra tambien del repositorio de estados....)
    //
    //Obteniendo
    let idPersonaDomicilio = parentInputs.children[0].value;

    let objeto = dataDomicilio.findItemData(idPersonaDomicilio);

    parentbodyFormulario.innerHTML = await componenteDomicilioFormularioWITHDATA(objeto);

}


//Para cancelar un valor en edicion....
async function validarEdicionPrincipal(item) {
    let parentbodyFormulario = item.parentNode.parentNode.parentNode.parentNode.parentNode.children[1].children[2];
    let form_data = parentbodyFormulario.children[0];
    //
    await validarDomicilioPrincipalExistente(form_data, item);

}


async function validarDomicilioPrincipalExistente(form, item) {

    let form_data = $('#' + form.id).serializeJSON();

    let tipoDom = form_data.domicilioTipoResidencia;
    let entidadF = form_data.estadoResidencia;
    let municipio = form_data.municipioResidencia;
    let codigoPostal = form_data.codigopostalResidencia;
    let coloniaa = form_data.coloniaResidencia;
    let callee = form_data.calleResidencia
    let numExterior = form_data.numExt;
    let numInterior = form_data.numInteriorResidencia;


    if (tipoDom === undefined || entidadF === undefined || municipio === undefined ||
        codigoPostal === '' || numExterior === '' || numInterior === '' ||
        coloniaa === '' || callee === ''
    ) {

        swal({
            title: "Atención",
            text: "• Por favor, revise los campos correspondientes",
            type: "warning"
        })

    } else {

        let parentTitulos = item.parentNode.parentNode.parentNode
        let parentSkelet = item.parentNode.parentNode.parentNode.parentNode.children[1]
        //seccion para body
        let parentbodySkeleton = item.parentNode.parentNode.parentNode.parentNode.parentNode.children[1].children[0];
        let parentbodyFormulario = item.parentNode.parentNode.parentNode.parentNode.parentNode.children[1].children[2];


        //OCultando elementos
        parentTitulos.hidden = true;
        parentSkelet.hidden = false
        parentbodySkeleton.hidden = false;
        parentbodyFormulario.hidden = true;

        //Llamada a edicion de archivo...
        await editarNuevoDomicilioPrincipal(form_data, item);
    }

}

async function editarNuevoDomicilioPrincipal(form_data, item) {

    let parentgral = item.parentNode.parentNode.parentNode.parentNode.parentNode;

    //Contenedores de header
    let parentHeader = item.parentNode.parentNode.parentNode.parentNode;
    let parentTitulos = item.parentNode.parentNode.parentNode
    let parentBotones = item.parentNode.parentNode;

    let parentInputs = item.parentNode.parentNode.parentNode.parentNode.children[0]
    let parentSkelet = item.parentNode.parentNode.parentNode.parentNode.children[1]

    //seccion para body
    let parentbodySkeleton = item.parentNode.parentNode.parentNode.parentNode.parentNode.children[1].children[0];
    let parentbodyInformacion = item.parentNode.parentNode.parentNode.parentNode.parentNode.children[1].children[1];


    let tipoDom = form_data.domicilioTipoResidencia;
    let entidadF = form_data.estadoResidencia;
    let municipio = form_data.municipioResidencia;
    let codigoPostal = form_data.codigopostalResidencia;
    let coloniaa = form_data.coloniaResidencia;
    let callee = form_data.calleResidencia
    let numExterior = form_data.numExt;
    let numInterior = form_data.numInteriorResidencia;


    //Accediendo al formulario.....
    let parentbodyFormulario = item.parentNode.parentNode.parentNode.parentNode.parentNode.children[1].children[2];

    //acceder al elememento formualrio
    let formularioPrincip = parentbodyFormulario.children[0].children[0].children[2].children[1];

    //se accede al elemento select para obtener su correspondiente texto
    let formSelectCiudad = formularioPrincip.options[formularioPrincip.selectedIndex].text;

    //console.log(valueSelect)// se acceden a  texto del elemento

    let array = [];

    let idPersonaDom = parentInputs.children[0].value;
    let object = {

        idPersonaDomicilio: idPersonaDom,
        tipoDomicilio: tipoDom,
        idEntidadFederativa: entidadF,
        idMunicipio: municipio,
        ciudad: formSelectCiudad,
        asentamiento: coloniaa,
        codigoPostal: codigoPostal,
        calle: callee,
        numeroExterior: numExterior,
        numeroInterior: numInterior
    }
    array.push(object);

    let data = JSON.stringify(array);


    /*'editarDomicilioResidenciaN'*/
    let response = await getDataFromServerHidden('editarDomicilioResidenciaN', 'POST', data);
    console.log(response)
    if (response.noError === "0") {

        //dataComTelefono.addNewSingleElement(response) // se agrega en nuevo catalogo // Register
        dataDomicilio.addNewSingleElement(response);
        dataDomicilio.deleteItem(idPersonaDom);

        //dataDomicilio.replaceItem(idPersonaDom, response);

        parentInputs.children[0].value = '';
        parentInputs.children[0].value = response.idPersonaDomicilio;


        //asignando valores (Cuando es edicion no es correcto reasignar)
        //parentInputs.children[0].value = response.idPersonaDomicilio;

        //eliminando componente y agregando botones de edicion

        parentBotones.children[0].remove();
        parentBotones.innerHTML = btnsEditarDomPrincipalExistente();
        parentbodyInformacion.innerHTML = componenteInformacionDomicilio(response)
        parentbodyFormulario.children[0].remove();


        //OCultando elementos
        parentTitulos.hidden = false;
        parentSkelet.hidden = true;
        parentbodySkeleton.hidden = true;
        parentbodyFormulario.hidden = false;



        /**
         * ${btnsEditarDomPrincipalExistente()} bototnes para agregar....
         * ${componenteInformacionDomicilio(item)} este es el item para poder editar,
         * pero antes de eso tienes que buuscar el componente en el respositorio...
         */

        swal({
            title: "Atención",
            text: `Datos actualizados satisfactoriamente`,
            type: "success",
        });
    }
    else {
        //Mostrando elementos...
        parentTitulos.hidden = false;
        parentSkelet.hidden = true;
        parentbodySkeleton.hidden = true;
        parentbodyFormulario.hidden = false;

        //reparar esta cosa
        if (response.errors) {
            swal({
                title: "Atención",
                text: `${response.errors}`,
                type: "warning",
            });
        } else {
            swal({
                title: "Atención",
                text: `${response.mensaje}`,
                type: "warning",
            });
        }
    }

}


function cancelarEdicionPrincipal(item) {
    //Contenedor general
    let parentgral = item.parentNode.parentNode.parentNode.parentNode.parentNode;

    //Contenedores de header
    let parentHeader = item.parentNode.parentNode.parentNode.parentNode;
    let parentTitulos = item.parentNode.parentNode.parentNode
    let parentBotones = item.parentNode.parentNode;

    let parentInputs = item.parentNode.parentNode.parentNode.parentNode.children[0]
    let parentSkelet = item.parentNode.parentNode.parentNode.parentNode.children[1]

    //seccion para body
    let parentbodySkeleton = item.parentNode.parentNode.parentNode.parentNode.parentNode.children[1].children[0];
    let parentbodyInformacion = item.parentNode.parentNode.parentNode.parentNode.parentNode.children[1].children[1];

    let parentbodyFormulario = item.parentNode.parentNode.parentNode.parentNode.parentNode.children[1].children[2];


    //remueve botoones

    parentBotones.children[0].remove();

    //agrega nuevos botones
    parentBotones.innerHTML = btnsEditarDomPrincipalExistente();

    //remueve formulario....
    parentbodyFormulario.children[0].remove();

    //Obteniendo idPersona domiciliodasdsadsad
    let idPersonaDomicilio = parentInputs.children[0].value;

    let objeto = dataDomicilio.findItemData(idPersonaDomicilio);

    //escribiendo en componente informacion
    parentbodyInformacion.innerHTML = componenteInformacionDomicilio(objeto)

}

const setSelectTipoDomicilio = (value) => {
    let optionsItems = ``;

    const obje = [
        { valueSelect: "Fiscal", description: "Fiscal" },
        { valueSelect: "Privado", description: "Residencial" },
        { valueSelect: "Trabajo", description: "Trabajo" }
    ]

    if (value === null || value === '') {
        optionsItems += `<option value="" selected disabled>Selecccione una opción</option>`;
        obje.forEach((item) => {
            optionsItems += `<option value="${item.valueSelect}">${item.description}</option>`;
        });


        return optionsItems;

    } else {

        optionsItems += `<option value="" selected disabled>Selecccione una opción</option>`;
        obje.forEach((item) => {
            if (value == item.valueSelect) {
                optionsItems += `<option value="${item.valueSelect}" selected>${item.description}</option>`;
            }
            else {
                optionsItems += `<option value="${item.valueSelect}">${item.description}</option>`;
            }
        });
        return optionsItems;
    }
}


//Una vez teniendo el cataglo de los estados... es necesario construirloss...

/**
 *
 * @param value el valor del idEstado idEntidadFederativa
 * @returns {string}  el listado del select a construir
 */
const setSelectEstadosDomicilio = (value) => {

    let optionsItems = ``;
    let dataCatalago = dataNacionDomicilio.getDataState();

    if (value === null || value === '') {
        optionsItems += `<option value="" selected disabled>Selecccione una opción</option>`;
        dataCatalago[0].forEach((item) => {
            optionsItems += `<option value="${item.idEntidadfederativa}">${item.entidadFederativa}</option>`;
        });
        return optionsItems;
    } else {

        optionsItems += `<option value="" selected disabled>Selecccione una opción</option>`;
        dataCatalago[0].forEach((item) => {
            if (value === item.idEntidadfederativa) {
                optionsItems += `<option value="${item.idEntidadfederativa}" selected>${item.entidadFederativa}</option>`;
            }
            else {
                optionsItems += `<option value="${item.idEntidadfederativa}">${item.entidadFederativa}</option>`;
            }
        });
        return optionsItems;
    }
}

//No se debe de hacer un acoplamiento
/**
 *
 * @param idEstado idEstado
 * @param idMunicipio
 * @returns {Promise<void>} generacion de catalogo de selects....
 */
const setSelectMunicipiosEstado = async (idEstado = null, idMunicipio = null) => {

    //Esto tiene que pasar el id de entidad federativa
    let getMunicipiosEstadoMunicipio = await getDataFromServerHidden('obtenerNacimientoMunicipio', 'POST', idEstado);

    //Al obtener el listado de municipios.... se tiene que generar el correspondiente select....
    let optionsItems = ``; // Aqui se guarda

    if (idMunicipio === null || idMunicipio === '') {
        optionsItems += `<option value="" selected disabled>Selecccione una opción</option>`;
        getMunicipiosEstadoMunicipio.forEach((item) => {
            optionsItems += `<option value="${item.idMunicipio}">${item.municipio}</option>`;
        });
        return optionsItems;
    } else {

        optionsItems += `<option value="" selected disabled>Selecccione una opción</option>`;
        getMunicipiosEstadoMunicipio.forEach((item) => {
            if (item.idMunicipio === idMunicipio) {
                optionsItems += `<option value="${item.idMunicipio}" selected>${item.municipio}</option>`;
            }
            else {
                optionsItems += `<option value="${item.idMunicipio}">${item.municipio}</option>`;
            }
        });
        return optionsItems;
    }
}

const setSelectMunicipiosOnchg = async (item) => {

    let valueSelect = item.options[item.selectedIndex].value; // valor del select actual

    let selectDestino = item.parentNode.parentNode.children[2].children[1].id; // select destino....

    let getMunicipios = await getDataFromServerHidden('obtenerNacimientoMunicipio', 'POST', valueSelect);

    $('#' + selectDestino).empty().append('<option selected="selected" disabled>Seleccione una opción</option>');

    let selectItem = '';
    if (getMunicipios.length > 2) {
        getMunicipios.forEach((item) => {
            selectItem += `<option value="${item.idMunicipio}">${item.municipio}</option>`;
        })
    } else {
        selectItem += `<option  disabled selected >No hay datos, algo fallo... :X </option>`;
    }
    //return selectItem;
    $("#" + selectDestino).append(selectItem);
}



//Para nuevo domicilio de residencia
//Funcion para agregar el formulario en limpio....
const nuevoDomicilioPrincipalEdicion = (item) => {

    let parentgral = item.parentNode.parentNode.parentNode.parentNode.parentNode;

    //Contenedores de header
    let parentHeader = item.parentNode.parentNode.parentNode.parentNode;
    let parentTitulos = item.parentNode.parentNode.parentNode
    let parentBotones = item.parentNode.parentNode;

    let parentInputs = item.parentNode.parentNode.parentNode.parentNode.children[0]
    let parentSkelet = item.parentNode.parentNode.parentNode.parentNode.children[1]

    //seccion para body
    let parentbodySkeleton = item.parentNode.parentNode.parentNode.parentNode.parentNode.children[1].children[0];
    let parentbodyInformacion = item.parentNode.parentNode.parentNode.parentNode.parentNode.children[1].children[1];

    let parentbodyFormulario = item.parentNode.parentNode.parentNode.parentNode.parentNode.children[1].children[2];


    //remover este componente... agregar los botones para nuevoDOmi
    //console.log(parentBotones.children[0]) // en este caso se tienen que agregar los botones para edicion


    parentBotones.children[0].remove(); // REmoviendo botones
    parentBotones.innerHTML = btnsGuardarCancelarDomPrincipalNuevo()//btnsEditarDomPrincipalNuevo(); //Agregando nuevos botones


    parentbodyInformacion.children[0].remove() // removinedo informacion

    parentbodyFormulario.innerHTML = componenteDomicilioFormulario()//componenteInformacionDomicilioNOVALUE(null)

}


//cancela la edicion de algo nuevo sin agregar datos // Volve a la primera seccion
const cancelarNuevoElementoDom = (item) => {
    let parentgral = item.parentNode.parentNode.parentNode.parentNode.parentNode;

    //Contenedores de header
    let parentHeader = item.parentNode.parentNode.parentNode.parentNode;
    let parentTitulos = item.parentNode.parentNode.parentNode
    let parentBotones = item.parentNode.parentNode;

    let parentInputs = item.parentNode.parentNode.parentNode.parentNode.children[0]
    let parentSkelet = item.parentNode.parentNode.parentNode.parentNode.children[1]

    //seccion para body
    let parentbodySkeleton = item.parentNode.parentNode.parentNode.parentNode.parentNode.children[1].children[0];
    let parentbodyInformacion = item.parentNode.parentNode.parentNode.parentNode.parentNode.children[1].children[1];

    let parentbodyFormulario = item.parentNode.parentNode.parentNode.parentNode.parentNode.children[1].children[2];

    //Eliminar boton --- agregar boton de inicio o inexistente---

    parentBotones.children[0].remove();
    parentBotones.innerHTML = btnsEditarDomPrincipalNuevo();

    //Eliminar formulario....
    parentbodyFormulario.children[0].remove()

    //Agregar informacion
    parentbodyInformacion.innerHTML = componenteInformacionDomicilioNOVALUE();
}




async function validaDomicilioCampos(item) {

    let parentbodyFormulario = item.parentNode.parentNode.parentNode.parentNode.parentNode.children[1].children[2];

    let form_data = parentbodyFormulario.children[0];
    await validarDomicilioPrincipal(form_data, item);

}


async function validarDomicilioPrincipal(form, item) {
    let form_data = $('#' + form.id).serializeJSON();

    console.log(form_data)

    let tipoDom = form_data.domicilioTipoResidencia;
    let entidadF = form_data.estadoResidencia;
    let municipio = form_data.municipioResidencia;
    let codigoPostal = form_data.codigopostalResidencia;
    let coloniaa = form_data.coloniaResidencia;
    let callee = form_data.calleResidencia
    let numExterior = form_data.numExt;
    let numInterior = form_data.numInteriorResidencia;


    if (tipoDom === undefined || entidadF === undefined || municipio === undefined ||
        codigoPostal === '' || numExterior === '' || numInterior === '' ||
        coloniaa === '' || callee === ''
    ) {

        swal({
            title: "Atención",
            text: "• Por favor, revise los campos correspondientes",
            type: "warning"
        })

    } else {
        //console.log("Campos llenados correctamente...");



        //Contenedores de header

        let parentTitulos = item.parentNode.parentNode.parentNode
        let parentSkelet = item.parentNode.parentNode.parentNode.parentNode.children[1]
        //seccion para body
        let parentbodySkeleton = item.parentNode.parentNode.parentNode.parentNode.parentNode.children[1].children[0];
        let parentbodyFormulario = item.parentNode.parentNode.parentNode.parentNode.parentNode.children[1].children[2];


        //OCultando elementos
        parentTitulos.hidden = true;
        parentSkelet.hidden = false
        parentbodySkeleton.hidden = false;
        parentbodyFormulario.hidden = true;


        await agregarNuevoDomicilioPrincipal(form_data, item);
    }

}


async function agregarNuevoDomicilioPrincipal(form_data, item) {

    let parentgral = item.parentNode.parentNode.parentNode.parentNode.parentNode;

    //Contenedores de header
    let parentHeader = item.parentNode.parentNode.parentNode.parentNode;
    let parentTitulos = item.parentNode.parentNode.parentNode
    let parentBotones = item.parentNode.parentNode;

    let parentInputs = item.parentNode.parentNode.parentNode.parentNode.children[0]
    let parentSkelet = item.parentNode.parentNode.parentNode.parentNode.children[1]

    //seccion para body
    let parentbodySkeleton = item.parentNode.parentNode.parentNode.parentNode.parentNode.children[1].children[0];
    let parentbodyInformacion = item.parentNode.parentNode.parentNode.parentNode.parentNode.children[1].children[1];




    let tipoDom = form_data.domicilioTipoResidencia;
    let entidadF = form_data.estadoResidencia;
    let municipio = form_data.municipioResidencia;
    let codigoPostal = form_data.codigopostalResidencia;
    let coloniaa = form_data.coloniaResidencia;
    let callee = form_data.calleResidencia
    let numExterior = form_data.numExt;
    let numInterior = form_data.numInteriorResidencia;


    //Accediendo al formulario.....
    let parentbodyFormulario = item.parentNode.parentNode.parentNode.parentNode.parentNode.children[1].children[2];

    //acceder al elememento formualrio
    let formularioPrincip = parentbodyFormulario.children[0].children[0].children[2].children[1];

    //se accede al elemento select para obtener su correspondiente texto
    let formSelectCiudad = formularioPrincip.options[formularioPrincip.selectedIndex].text;

    //console.log(valueSelect)// se acceden a  texto del elemento

    let array = [];

    let object = {

        tipoDomicilio: tipoDom,
        idEntidadFederativa: entidadF,
        idMunicipio: municipio,
        ciudad: formSelectCiudad,
        asentamiento: coloniaa,
        codigoPostal: codigoPostal,
        calle: callee,
        numeroExterior: numExterior,
        numeroInterior: numInterior
    }
    array.push(object);

    let data = JSON.stringify(array);

    let response = await getDataFromServerHidden('guardarDomicilioResidenciaN', 'POST', data);
    console.log(response)

    if (response.noError === "0") {

        //dataComTelefono.addNewSingleElement(response) // se agrega en nuevo catalogo // Register
        dataDomicilio.addNewSingleElement(response);

        //asignando valores
        parentInputs.children[0].value = response.idPersonaDomicilio;

        //eliminando componente y agregando botones de edicion

        parentBotones.children[0].remove();
        parentBotones.innerHTML = btnsEditarDomPrincipalExistente();
        parentbodyInformacion.innerHTML = componenteInformacionDomicilio(response)
        parentbodyFormulario.children[0].remove();


        //OCultando elementos
        parentTitulos.hidden = false;
        parentSkelet.hidden = true;
        parentbodySkeleton.hidden = true;
        parentbodyFormulario.hidden = false;



        /**
         * ${btnsEditarDomPrincipalExistente()} bototnes para agregar....
         * ${componenteInformacionDomicilio(item)} este es el item para poder editar,
         * pero antes de eso tienes que buuscar el componente en el respositorio...
         */

        swal({
            title: "Atención",
            text: `Datos agregados satisfactoriamente`,
            type: "warning",
        });

    }
    else {

        //Mostrando elementos...
        parentTitulos.hidden = false;
        parentSkelet.hidden = true;
        parentbodySkeleton.hidden = true;
        parentbodyFormulario.hidden = false;


        //reparar esta cosa
        if (response.errors) {
            swal({
                title: "Atención",
                text: `${response.errors}`,
                type: "warning",
            });
        } else {
            swal({
                title: "Atención",
                text: `${response.mensaje}`,
                type: "warning",
            });
        }
    }
}


/***
 * Datos de domicilio referencia
 *
 *
 */
const devolverComponenteDomAlterno = (typeN) =>{

    let data = "";
    let type = typeN;

    let infoDom = dataDomicilio.getData();
    console.log(infoDom)
    if (dataDomicilio.searchByType(type) !== false){
        console.log("Si existe, procedo a escribir componente DomAlterno para edicion")
        data += componenteDomicilioAlternoDATA(dataDomicilio.searchByType(type))
    }else{
        console.log("NO existe, procedo a escribir componente DomAlterno inicial")
        let item = "null"
        data += componenteDomicilioAlterno(item);
    }
    $('#contenedorDomicilioAlterno').append(data); // Escribe el componente con formulario.
}


const componenteDomicilioAlterno = (item) =>{
    let data = `<div class="card card-domicilio">
                    <div class="card-header">

                        <div class="header-inputs" hidden>
                            <input type="text" value="" name="value1">
                            <input type="text" value="" name="value2">
                        </div>

                        <div class="card-body-skeleton" hidden>
                            <div>
                                <span class="skeleton-loader"></span>
                            </div>
                        </div>

                        <div class="card-header-titles  card-header-sectionTitle" >
                            <div class="card-header-title">
                                <h6 style="font-weight: 300" onmouseover="">
                                    <span><i class="fas fa-home"></i></span>
                                      Domicilio alterno
                                </h6>
                            </div>
                            <div class="card-header-buttons">

                            </div>
                        </div>
                    </div>

                    <div class="card-body card-body-back">
                        <div class="card-body-skeleton" hidden>
                            <div class="skeleton-section-content">
                                <span class="teasting2"></span>
                            </div>
                        </div>

                        <div class="body-contenedor-domicilio">
                            ${componenteInformacionDomicilio(item)}
                        </div>

                        <div class="body-contenedor-domicilioForm">

                        </div>


                    </div>
                </div>`;
    return data;
}




//Cuando no existan elementos... agregar este boton para editar un nuevo elemento ...
const btnsEditarDomAlternoNuevo = () =>{
    let data = `
        <div>
            <button type="button" id="gral-options-agregar" class="btn btn-outline-secondary btn-sm" onclick="nuevoDomicilioAlternoEdicion(this)"><i class="fas fa-edit"></i> Editar.</button>
        </div>
    `;
    return data;
}


const nuevoDomicilioAlternoEdicion = (item)=>{

    let parentgral   =  item.parentNode.parentNode.parentNode.parentNode.parentNode;

    //Contenedores de header
    let parentHeader =  item.parentNode.parentNode.parentNode.parentNode;
    let parentTitulos = item.parentNode.parentNode.parentNode
    let parentBotones = item.parentNode.parentNode;

    let parentInputs =  item.parentNode.parentNode.parentNode.parentNode.children[0]
    let parentSkelet =  item.parentNode.parentNode.parentNode.parentNode.children[1]

    //seccion para body
    let parentbodySkeleton = item.parentNode.parentNode.parentNode.parentNode.parentNode.children[1].children[0];
    let parentbodyInformacion = item.parentNode.parentNode.parentNode.parentNode.parentNode.children[1].children[1];

    let parentbodyFormulario = item.parentNode.parentNode.parentNode.parentNode.parentNode.children[1].children[2];


    //remover este componente... agregar los botones para nuevoDOmi
    //console.log(parentBotones.children[0]) // en este caso se tienen que agregar los botones para edicion


    parentBotones.children[0].remove(); // REmoviendo botones
    parentBotones.innerHTML = btnsGuardarCancelarDomAlternoNuevo()//btnsEditarDomAlternoNuevo(); //Agregando nuevos botones


    parentbodyInformacion.children[0].remove() // removinedo informacion

    parentbodyFormulario.innerHTML = componenteDomicilioFormulario()//componenteInformacionDomicilioNOVALUE(null)

}



//Agregar nuevo domicilio domicilio de residencia...
const btnsGuardarCancelarDomAlternoNuevo = () =>{
    let data = `
        <div>
            <button type="button" id="gral-options-agregar" class="btn btn-outline-secondary btn-sm" onclick="validaDomicilioCamposAlternos(this)"><i class="fas fa-save"></i> Guardar</button>
            <button type="button" id="gral-options-agregar" class="btn btn-outline-secondary btn-sm" onclick="cancelarNuevoElementoDom(this)"><i class="fas fa-times-circle"></i> Cancelar</button>
        </div>
    `;
    return data;
}


async function validaDomicilioCamposAlternos(item) {

    let parentbodyFormulario = item.parentNode.parentNode.parentNode.parentNode.parentNode.children[1].children[2];

    let form_data = parentbodyFormulario.children[0];
    await validarDomicilioAlterno(form_data, item);

}


async function validarDomicilioAlterno(form, item){
    let form_data = $('#'+form.id).serializeJSON();

    console.log(form_data)

    let tipoDom = form_data.domicilioTipoResidencia;
    let entidadF = form_data.estadoResidencia;
    let municipio = form_data.municipioResidencia;
    let codigoPostal = form_data.codigopostalResidencia;
    let coloniaa = form_data.coloniaResidencia;
    let callee = form_data.calleResidencia
    let numExterior = form_data.numExt;
    let numInterior = form_data.numInteriorResidencia;


    if (tipoDom===undefined || entidadF === undefined || municipio===undefined ||
        codigoPostal === '' || numExterior === '' || numInterior === '' ||
        coloniaa === '' || callee === ''
    ){

        swal({
            title:"Atención",
            text: "• Por favor, revise los campos correspondientes",
            type: "warning"
        })

    }else{
        //console.log("Campos llenados correctamente...");

        //Contenedores de header

        let parentTitulos = item.parentNode.parentNode.parentNode
        let parentSkelet =  item.parentNode.parentNode.parentNode.parentNode.children[1]
        //seccion para body
        let parentbodySkeleton = item.parentNode.parentNode.parentNode.parentNode.parentNode.children[1].children[0];
        let parentbodyFormulario = item.parentNode.parentNode.parentNode.parentNode.parentNode.children[1].children[2];


        //OCultando elementos
        parentTitulos.hidden = true;
        parentSkelet.hidden = false
        parentbodySkeleton.hidden = false;
        parentbodyFormulario.hidden = true;


        await agregarNuevoDomicilioAlterno(form_data, item);
    }

}

//Agregar un nuevo componente o nuevo domilio segun la estructura html (Verificar antes de modificar)
async function agregarNuevoDomicilioAlterno(form_data, item) {

    let parentgral   =  item.parentNode.parentNode.parentNode.parentNode.parentNode;

    //Contenedores de header
    let parentHeader =  item.parentNode.parentNode.parentNode.parentNode;
    let parentTitulos = item.parentNode.parentNode.parentNode
    let parentBotones = item.parentNode.parentNode;

    let parentInputs =  item.parentNode.parentNode.parentNode.parentNode.children[0]
    let parentSkelet =  item.parentNode.parentNode.parentNode.parentNode.children[1]

    //seccion para body
    let parentbodySkeleton = item.parentNode.parentNode.parentNode.parentNode.parentNode.children[1].children[0];
    let parentbodyInformacion = item.parentNode.parentNode.parentNode.parentNode.parentNode.children[1].children[1];




    let tipoDom = form_data.domicilioTipoResidencia;
    let entidadF = form_data.estadoResidencia;
    let municipio = form_data.municipioResidencia;
    let codigoPostal = form_data.codigopostalResidencia;
    let coloniaa = form_data.coloniaResidencia;
    let callee = form_data.calleResidencia
    let numExterior = form_data.numExt;
    let numInterior = form_data.numInteriorResidencia;


    //Accediendo al formulario.....
    let parentbodyFormulario = item.parentNode.parentNode.parentNode.parentNode.parentNode.children[1].children[2];

    //acceder al elememento formualrio
    let formularioPrincip = parentbodyFormulario.children[0].children[0].children[2].children[1];

    //se accede al elemento select para obtener su correspondiente texto
    let formSelectCiudad = formularioPrincip.options[formularioPrincip.selectedIndex].text;

    //console.log(valueSelect)// se acceden a  texto del elemento

    let array = [];

    let object = {

        tipoDomicilio: tipoDom,
        idEntidadFederativa: entidadF,
        idMunicipio:municipio,
        ciudad: formSelectCiudad,
        asentamiento: coloniaa,
        codigoPostal:codigoPostal,
        calle: callee,
        numeroExterior: numExterior,
        numeroInterior:numInterior
    }
    array.push(object);

    let data = JSON.stringify(array);

    //NUEVO
    let response = await getDataFromServerHidden('guardarDomicilioAlter','POST',data);
    console.log(response)

    if (response.noError === "0"){

        //dataComTelefono.addNewSingleElement(response) // se agrega en nuevo catalogo // Register
        dataDomicilio.addNewSingleElement(response);

        //asignando valores
        parentInputs.children[0].value = response.idPersonaDomicilio;

        //eliminando componente y agregando botones de edicion

        parentBotones.children[0].remove();
        parentBotones.innerHTML = btnsEditarDomAlternoExistente();
        parentbodyInformacion.innerHTML = componenteInformacionDomicilio(response)
        parentbodyFormulario.children[0].remove();


        //OCultando elementos
        parentTitulos.hidden = false;
        parentSkelet.hidden = true;
        parentbodySkeleton.hidden = true;
        parentbodyFormulario.hidden = false;



        /**
         * ${btnsEditarDomAlternoExistente()} bototnes para agregar....
         * ${componenteInformacionDomicilio(item)} este es el item para poder editar,
         * pero antes de eso tienes que buuscar el componente en el respositorio...
         */

        swal({
            title: "Atención",
            text: `Datos agregados satisfactoriamente`,
            type: "success",
        });

    }
    else{

        //Mostrando elementos...
        parentTitulos.hidden = false;
        parentSkelet.hidden = true;
        parentbodySkeleton.hidden = true;
        parentbodyFormulario.hidden = false;


        //reparar esta cosa
        if (response.errors){
            swal({
                title: "Atención",
                text: `${response.errors}`,
                type: "warning",
            });
        }else{
            swal({
                title: "Atención",
                text: `${response.mensaje}`,
                type: "warning",
            });
        }
    }
}

//componente para domiclio alterno data
const componenteDomicilioAlternoDATA = (item) =>{

    let data = `<div class="card card-domicilio">
                    <div class="card-header">

                        <div class="header-inputs" hidden>
                            <input type="text" value="${item.idPersonaDomicilio}" name="value1">
                            <input type="text" value="" name="value2">
                        </div>

                        <div class="card-body-skeleton" hidden >
                            <div>
                                <span class="skeleton-loader"></span>
                            </div>
                        </div>

                        <div class="card-header-titles  card-header-sectionTitle" >
                            <div class="card-header-title">
                                <h6 style="font-weight: 300" onmouseover="">
                                    <span><i class="fas fa-home"></i></span>
                                      Domicilio alterno
                                </h6>
                            </div>
                            <div class="card-header-buttons">

                            </div>
                        </div>
                    </div>

                    <div class="card-body card-body-back">

                        <div class="card-body-skeleton" hidden>
                            <div class="skeleton-section-content">
                                <span class="teasting2"></span>
                            </div>
                        </div>

                        <div class="body-contenedor-domicilio">
                            ${componenteInformacionDomicilio(item)}
                        </div>

                        <div class="body-contenedor-domicilioForm">

                        </div>


                    </div>
                </div>`;
    return data;
}

const btnsEditarDomAlternoExistente = () =>{
    return `
        <div>
            <button type="button" id="gral-options-agregar" class="btn btn-outline-secondary btn-sm" onclick="domicilioAlternoEditarInicial(this)"><i class="fas fa-edit"></i> Editar </button>
        </div>
    `;
}

//Edicion para domicilio alterno inicial...
async function domicilioAlternoEditarInicial(item){

    //Contenedor general
    let parentgral   =  item.parentNode.parentNode.parentNode.parentNode.parentNode;

    //Contenedores de header
    let parentHeader =  item.parentNode.parentNode.parentNode.parentNode;
    let parentTitulos = item.parentNode.parentNode.parentNode;
    let parentBotones = item.parentNode.parentNode;

    let parentInputs =  item.parentNode.parentNode.parentNode.parentNode.children[0];
    let parentSkelet =  item.parentNode.parentNode.parentNode.parentNode.children[1];

    //seccion para body
    let parentbodySkeleton = item.parentNode.parentNode.parentNode.parentNode.parentNode.children[1].children[0];
    let parentbodyInformacion = item.parentNode.parentNode.parentNode.parentNode.parentNode.children[1].children[1];

    let parentbodyFormulario = item.parentNode.parentNode.parentNode.parentNode.parentNode.children[1].children[2];

    //remueve botones
    parentBotones.children[0].remove();

    //Agrega nuevos botones
    parentBotones.innerHTML = btnsGuardarCancelarDomAlternoExistent();

    //remueve informacion
    parentbodyInformacion.children[0].remove();

    //Agrega nuevo formulario (Esto dependenra tambien del repositorio de estados....)
    //
    //Obteniendo
    let idPersonaDomicilio = parentInputs.children[0].value;

    let objeto = dataDomicilio.findItemData(idPersonaDomicilio);

    parentbodyFormulario.innerHTML = await componenteDomicilioFormularioWITHDATA(objeto);

}

//Bototnes para guardar cancelar un nuevo valor.... (Domicilio nuevo)
const btnsGuardarCancelarDomAlternoExistent = () =>{
    let data = `
        <div>
            <button type="button" id="gral-options-agregar" class="btn btn-outline-secondary btn-sm" onclick="validarEdicionAlterno(this)"><i class="fas fa-save"></i> Guardar</button>
            <button type="button" id="gral-options-agregar" class="btn btn-outline-secondary btn-sm" onclick="cancelarEdicionAlterno(this)"><i class="fas fa-times-circle"></i> Cancelar</button>
        </div>
    `;
    return data;
}

//cancela un estado en edicion... lo devuelve al estado anterior
async function validarEdicionAlterno(item){
    let parentbodyFormulario = item.parentNode.parentNode.parentNode.parentNode.parentNode.children[1].children[2];
    let form_data = parentbodyFormulario.children[0];
    //
    await validarDomicilioAlternoExistente(form_data, item);

}

//Realiza las correspondientes validaciones de campos segun sea el caso....
async function validarDomicilioAlternoExistente(form, item) {

    let form_data = $('#'+form.id).serializeJSON();
    let tipoDom = form_data.domicilioTipoResidencia;
    let entidadF = form_data.estadoResidencia;
    let municipio = form_data.municipioResidencia;
    let codigoPostal = form_data.codigopostalResidencia;
    let coloniaa = form_data.coloniaResidencia;
    let callee = form_data.calleResidencia
    let numExterior = form_data.numExt;
    let numInterior = form_data.numInteriorResidencia;


    if(tipoDom===undefined || entidadF === undefined || municipio===undefined ||
        codigoPostal === '' || numExterior === '' || numInterior === '' ||
        coloniaa === '' || callee === ''
    ){

        swal({
            title:"Atención",
            text: "• Por favor, revise los campos correspondientes",
            type: "warning"
        })

    }else{

        let parentTitulos = item.parentNode.parentNode.parentNode
        let parentSkelet =  item.parentNode.parentNode.parentNode.parentNode.children[1]
        //seccion para body
        let parentbodySkeleton = item.parentNode.parentNode.parentNode.parentNode.parentNode.children[1].children[0];
        let parentbodyFormulario = item.parentNode.parentNode.parentNode.parentNode.parentNode.children[1].children[2];


        //OCultando elementos
        parentTitulos.hidden = true;
        parentSkelet.hidden = false
        parentbodySkeleton.hidden = false;
        parentbodyFormulario.hidden = true;

        //Llamada a edicion de archivo...
        await editarNuevoDomicilioAlterno(form_data, item);
    }

}

//Edita un nuevo domiclio, es decir, ya debe de existir un objeto previo (Estado edicion)
async function editarNuevoDomicilioAlterno(form_data, item) {

    let parentgral   =  item.parentNode.parentNode.parentNode.parentNode.parentNode;

    //Contenedores de header
    let parentHeader =  item.parentNode.parentNode.parentNode.parentNode;
    let parentTitulos = item.parentNode.parentNode.parentNode
    let parentBotones = item.parentNode.parentNode;

    let parentInputs =  item.parentNode.parentNode.parentNode.parentNode.children[0]
    let parentSkelet =  item.parentNode.parentNode.parentNode.parentNode.children[1]

    //seccion para body
    let parentbodySkeleton = item.parentNode.parentNode.parentNode.parentNode.parentNode.children[1].children[0];
    let parentbodyInformacion = item.parentNode.parentNode.parentNode.parentNode.parentNode.children[1].children[1];


    let tipoDom = form_data.domicilioTipoResidencia;
    let entidadF = form_data.estadoResidencia;
    let municipio = form_data.municipioResidencia;
    let codigoPostal = form_data.codigopostalResidencia;
    let coloniaa = form_data.coloniaResidencia;
    let callee = form_data.calleResidencia
    let numExterior = form_data.numExt;
    let numInterior = form_data.numInteriorResidencia;


    //Accediendo al formulario.....
    let parentbodyFormulario = item.parentNode.parentNode.parentNode.parentNode.parentNode.children[1].children[2];

    //acceder al elememento formualrio
    let formularioPrincip = parentbodyFormulario.children[0].children[0].children[2].children[1];

    //se accede al elemento select para obtener su correspondiente texto
    let formSelectCiudad = formularioPrincip.options[formularioPrincip.selectedIndex].text;

    //console.log(valueSelect)// se acceden a  texto del elemento

    let array = [];

    let idPersonaDom = parentInputs.children[0].value;
    let object = {

        idPersonaDomicilio: idPersonaDom,
        tipoDomicilio: tipoDom,
        idEntidadFederativa: entidadF,
        idMunicipio:municipio,
        ciudad: formSelectCiudad,
        asentamiento: coloniaa,
        codigoPostal:codigoPostal,
        calle: callee,
        numeroExterior: numExterior,
        numeroInterior:numInterior
    }
    array.push(object);

    let data = JSON.stringify(array);


    /*'editarDomicilioResidenciaN'*/
    let response = await getDataFromServerHidden('editarDomicilioAlterN','POST',data);
    console.log(response)
    if (response.noError === "0"){

        //dataComTelefono.addNewSingleElement(response) // se agrega en nuevo catalogo // Register
        dataDomicilio.addNewSingleElement(response);
        dataDomicilio.deleteItem(idPersonaDom);

        //dataDomicilio.replaceItem(idPersonaDom, response);

        parentInputs.children[0].value = '';
        parentInputs.children[0].value = response.idPersonaDomicilio;


        //asignando valores (Cuando es edicion no es correcto reasignar)
        //parentInputs.children[0].value = response.idPersonaDomicilio;

        //eliminando componente y agregando botones de edicion

        parentBotones.children[0].remove();
        parentBotones.innerHTML = btnsEditarDomAlternoExistente();
        parentbodyInformacion.innerHTML = componenteInformacionDomicilio(response)
        parentbodyFormulario.children[0].remove();


        //OCultando elementos
        parentTitulos.hidden = false;
        parentSkelet.hidden = true;
        parentbodySkeleton.hidden = true;
        parentbodyFormulario.hidden = false;



        /**
         * ${btnsEditarDomAlternoExistente()} bototnes para agregar....
         * ${componenteInformacionDomicilio(item)} este es el item para poder editar,
         * pero antes de eso tienes que buuscar el componente en el respositorio...
         */

        swal({
            title: "Atención",
            text: `Datos actualizados satisfactoriamente`,
            type: "success",
        });
    }
    else{
        //Mostrando elementos...
        parentTitulos.hidden = false;
        parentSkelet.hidden = true;
        parentbodySkeleton.hidden = true;
        parentbodyFormulario.hidden = false;

        //reparar esta cosa
        if (response.errors){
            swal({
                title: "Atención",
                text: `${response.errors}`,
                type: "warning",
            });
        }else{
            swal({
                title: "Atención",
                text: `${response.mensaje}`,
                type: "warning",
            });
        }
    }

}

//Cancela una edicion de domicilio alterno
function cancelarEdicionAlterno(item){
    //Contenedor general
    let parentgral   =  item.parentNode.parentNode.parentNode.parentNode.parentNode;

    //Contenedores de header
    let parentHeader =  item.parentNode.parentNode.parentNode.parentNode;
    let parentTitulos = item.parentNode.parentNode.parentNode
    let parentBotones = item.parentNode.parentNode;

    let parentInputs =  item.parentNode.parentNode.parentNode.parentNode.children[0]
    let parentSkelet =  item.parentNode.parentNode.parentNode.parentNode.children[1]

    //seccion para body
    let parentbodySkeleton = item.parentNode.parentNode.parentNode.parentNode.parentNode.children[1].children[0];
    let parentbodyInformacion = item.parentNode.parentNode.parentNode.parentNode.parentNode.children[1].children[1];

    let parentbodyFormulario = item.parentNode.parentNode.parentNode.parentNode.parentNode.children[1].children[2];


    //remueve botoones

    parentBotones.children[0].remove();

    //agrega nuevos botones
    parentBotones.innerHTML = btnsEditarDomAlternoExistente();

    //remueve formulario....
    parentbodyFormulario.children[0].remove();

    //Obteniendo idPersona domiciliodasdsadsad
    let idPersonaDomicilio = parentInputs.children[0].value;

    let objeto = dataDomicilio.findItemData(idPersonaDomicilio);

    //escribiendo en componente informacion
    parentbodyInformacion.innerHTML = componenteInformacionDomicilio(objeto)

}

//Convertir select y componentes para mostrar informacion...



//Obtener datos para repositorios....
const obtenerCatalogosDatosCurriculares = async () => {
    return await getDataFromServerHidden('getCatalogosCurriculares', 'GET');
}


const obtenerProgramasEducativos = async (nombre, identidicador=null ) => {
    let item = await getDataFromServerHidden(`getProgramasEducativos${nombre}`, 'GET')
    return item;
}


const obtenerInstitucionesPaises = async (valueID) => {
    let item = await getDataFromServerHidden(`getInstitucionesAcademicas/${valueID}`, 'GET')
    return item;
}


