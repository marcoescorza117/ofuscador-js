//--------------DATOS GENERALES --- EDICION, CANCELAR Y GUARDAR-----

//Edita informacion de datos generales
function editarInformacionDG() {
    if (editarInformacion('gral-options-button', 'gral-options-title', 'section-dataInformacion')) {
        formDatosGenerales();
        statusDatosGenerales.setEstadoEdicion();
    } else {
        swal({
            icon: "warning",
            title: "Atención",
            text: "• No se puede cambiar la edicion de esta sección, intente mas tarde o comuniquese a la DAP- depto. de Planeacion",
        });
    }
}

//Cancela cambios de datos generales
function cancelarCambiosDG() {
    let state = statusDatosGenerales;
    cancelChanges('section-data-form', 'gral-options-button', 'gral-options-title', state);
}

//Guarda los cambios en servidor
const saveDataChanges = async () => {
    await sendServerDatosGenerales();
}



//--------------DATOS de NACIMIENTO --- EDICION, CANCELAR Y GUARDAR-----
/****
 * Recordar que todo el contenido de estas funciones van dentro de buttons behaviour
 */

function editarInformacionNacionalidad ( ){

    //1.- Eliminar componente inicial
    visibilityComponent("gral-options-Nacimiento", true) // Ocultando valores
    visibilityComponent("gral-options-titleNacimiento", false) // ocultando valores
    removeItemComponent("section-nacimiento-info", true) // removiendo el de informacion

    formDatosNacimientoNacional();
    formNacionesMultiples();
}

/*
    1-mostrar elementos...
    2.-llamar a funciones para cargar paises y estados....
    3.-
 */
//Esto tiene que registrarse en observer......
async function showInfoNacimiento(){

    //let datosPrincipales = await setStorageData(); // Obtiene datos de catalogos como paises....
    //Se movio esta funcion a datos principales
    try {
        let datosPrincipales = await setStorageData(); // Obtiene datos de catalogos como paises....
        await getDatosNacimiento();

        visibilityComponent("buttons-data-nacimiento", false); // se muestra titulo y boton....
        visibilityComponent('skeleton-loader-Nacimiento', true)


    }catch (e){

        swal({
            title: "Atención",
            text: "Parece que algo fallo, intente recargar la pagina ",
            type: "error",
        });
    }

}

async function cancelEditNacimiento(){
    //remover componente formulario....
    removeItemComponent('datos-Nacimiento-form'); // Removiendo componente principal
    removeItemComponent('nacionesMultiples'); // removiendo componente secundario
    removeItemComponent('btnNacimiento-edit-cancel');
    visibilityComponent('skeleton-loader-Nacimiento', false);
    visibilityComponent("buttons-data-nacimiento", true);
    await getDatosNacimiento(); //Retrae info
    visibilityComponent("gral-options-titleNacimiento", false)
    visibilityComponent("buttons-data-nacimiento", false);
    visibilityComponent('skeleton-loader-Nacimiento', true);
    visibilityComponent("gral-options-Nacimiento", false);
}

const saveNacimientoInfo = async ()=>{
    //Obtener construcion de utils....
    await  validateAlertDatosNacimiento();
}

function afterValidacion(){
    visibilityComponent('datos-Nacimiento-form',true)
    visibilityComponent('nacionesMultiples',true)
    visibilityComponent('skeleton-loader-Nacimiento', false);
    visibilityComponent("buttons-data-nacimiento", true);
    visibilityComponent('btnNacimiento-edit-cancel', true);
}

///DATOS SEGURIDAD SOCIAL

async function showInfoSegSocial (){
    let datosdeInicio = await getDatosSeguridadSocial(); // Se obtienen datos principales...

    //
    if (datosdeInicio){
        //
        visibilityComponent("buttons-data-SegSocial", false)
        visibilityComponent("skeleton-loader-Social", true)
    }else{

        swal({
            title: "Atención",
            text: "Parece que algo fallo, intente recargar la pagina ",
            type: "error",
        }),function (){
            window.location.reload();
        };

    }
}

async function showInfoComunicacion(){
    let datosdeInicio = await getDatosComunicacionInitial()
    if (datosdeInicio){

        visibilityComponent("buttons-data-Comunicacion", false)
        visibilityComponent("skeleton-loader-Comunicacion", true)
        visibilityComponent("section-Comunicacion-form", false)

    }else{
        swal({
            title: "Atención",
            text: "Parece que algo fallo, intente recargar la pagina ",
            type: "error",
        }),function (){
            window.location.reload();
        };
    }
}

function editarInformacionSegSocia(){
    visibilityComponent("gral-options-seguridadSocial", true)
    visibilityComponent("gral-options-titleSegSocial", false)
    removeItemComponent("section-seguridadSocial-info") // removiendo informacion componente

    setFormSegSocial();

}
function guardarInformacionSS(){
    console.log("validando")
    validateSectionSS();
}
function cancelarInformacionSegSocial(){

    visibilityComponent("gral-options-seguridadSocial", false)
    visibilityComponent("gral-options-titleSegSocial", false)
    visibilityComponent("buttons-data-SegSocial", false) //Se ocultan botones
    //visibilityComponent("skeleton-loader-Social", false) // se muestra skeleton // no es tan necesario...

    //se remueve elemento form
    removeItemComponent("section-seguridadSocial-form")
    //se muestra botones para editar y skeleton
    //visibilityComponent("skeleton-loader-Social", true) // no necesario
    //se muestra informacion

    setdatosSegSocial(dataSeguridadSocial.getData())

}

///DATOS DE COMUNICACION


//Trae la informacion y la guarda en el componente individual
const getDatosComunicacionInitial = async () => {

    let dataTelefono = await getDatosComunicacion(); // trayendo informacion de telefono
    let dataCorreo = await  getDatosComunicacionCorreo(); // Trayendo informacion de correo electronico

    //Guardando informacion en repositorio de telefono
    dataComTelefono.clearDataTel();
    dataComTelefono.setData(dataTelefono);

    //Guardando informacion en repositorio de correo electronico

    dataComCorreo.clearDataMail();
    dataComCorreo.setData(dataCorreo);

    //mostrando items para correo electronico
    showDataComunicacionCorreo(dataCorreo)
    //mostrando items para telefono
    showDataComunicacionInicial(dataTelefono);

    return true;
}

//remueve telefono
const removeItemPhone = (item) => {
    let padre = item.parentNode.parentNode.parentNode.parentNode
    padre.remove();
}

/**
 * Valida el numero de telefono
 * @returns {Promise<void>}
 */

const validaNuevoTelefono = async (item) =>{

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
        await saveDataNewTelefono(item);
    }
}

const saveDataNewTelefono = async (item)  =>{
    //Acuerdate de validar los correpsondentes campos
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

    await createNewObjectsItemPhone(divPadre, formulario, divInputs, divButtons, divInformacion, divFormualarioPadre);
    //console.log(divPadre.children[1].children[0].children[1]) // Componente en donde se tiene que agregar el elemmento informacion....

}

//crea objeto para telefono
const createNewObjectsItemPhone = async (divPadre, formulario, divInputs, divButtons, divInformacion, divFormularioPadre)=>{

    let form_data = $(`#${formulario.name}`).serializeJSON();

    //Creacion de objeto sender.....
    let array = [];
    let object = {
        telefono: form_data.telefono,
        tipoTelefono : form_data.tipoTelefono
    }

    array.push(object);

    let dataaa = JSON.stringify(array)
    let response = await getDataFromServerHidden('guardarNumTelefono','POST',dataaa);

    //console.log(response)
    if (response.noError === "0"){
        dataComTelefono.addNewSingleElement(response) // se agrega en nuevo catalogo // Register

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
            text: `Datos guardados satisfactoriamente`,
            type: "success",
        });
    }
    else{
        console.log(response)
        divPadre.children[0].children[1].hidden = true // ocultando skeletons header
        divButtons.hidden = false;
        formulario.hidden = false;
        divPadre.children[1].children[0].children[0].hidden = true // mostrando skeleton body



        if (response.errors){
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

        }else{
            swal({
                title: "Atención",
                text: `${response.mensaje}`,
                type: "warning",
            });
        }
    }
}

//remueve correo
const removeItemCorreo = (item) =>{

    let  padre = item.parentNode.parentNode.parentNode.parentNode;
    padre.remove();
}

const validaCamposCorreoElectronico = async (item) =>{

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
        await saveDataNewCorreo(item);
    }
}

//guarda correo electronico

const saveDataNewCorreo = async (item) =>{
    let divPadre = item.parentNode.parentNode.parentNode.parentNode

    let divInputs = divPadre.children[0].children[0]
    let divSkeletonHead = divPadre.children[0].children[1]
    let divButtonsPadre = divPadre.children[0].children[2]

    let divInFormacion = divPadre.children[1].children[1]
    let divSkeletonBody = divPadre.children[1].children[0]
    let formularioPadre = divPadre.children[1].children[2]
    let formularioHijo = formularioPadre.children[0];


    //mostrando skeletons
    divSkeletonHead.hidden = false;
    divSkeletonBody.hidden = false

    //Ocultando elementos
    divButtonsPadre.children[0].hidden = true;
    formularioHijo.hidden = true;


    divButtonsPadre.children[0].hidden = true;

    //console.log(divButtonsPadre)
    /*divButtonsPadre.innerHTML = "<h6>Aqui van los nuevos botones</h6>";*/

    await createNewObjectsItemCorreo(divPadre,formularioHijo,divInputs,divButtonsPadre,divInFormacion, divSkeletonHead, divSkeletonBody)

}

/**
 * //crea objeto para correo electronico
 * @param divPadre
 * @param formularioHijo
 * @param divInputs
 * @param divButtonsPadre
 * @param divInFormacion
 * @param divSkeletonHead
 * @param divSkeletonBody
 * @returns {Promise<void>}
 */
const createNewObjectsItemCorreo = async (divPadre,formularioHijo,divInputs,divButtonsPadre,divInFormacion,divSkeletonHead, divSkeletonBody)=>{
    let form_data = $(`#${formularioHijo.name}`).serializeJSON();
    console.log(form_data)

    //Creacion de objetoSender....

    let array = [];

    let object = {
        correoContacto: form_data.correoContacto,
        tipoCorreo: form_data.tipoCorreo,
    };

    array.push(object);

    let dataaa = JSON.stringify(array);

    let response = await getDataFromServerHidden('guardarComunicacionCorreo', 'POST', dataaa)

    if (response.noError === "0"){
        console.log(response)
        dataComCorreo.addNewSingleElement(response);

        //Agrega valores a campos
        divInputs.children[0].value = response.idPersonaCorreoElectronico
        divInputs.children[1].value = response.idCorreoElectronico;

        //Eliminando y agregando componentes
        divButtonsPadre.children[0].remove() // remueve elementos botones
        divButtonsPadre.innerHTML = buttonEditComponentCorreo();
        divInFormacion.innerHTML = sectionShowDataCurrentMail(response);
        formularioHijo.remove();

        //mostrando elementos
        divSkeletonHead.hidden = true;
        divSkeletonBody.hidden = true
        formularioHijo.hidden = true

        //mostrando mensaje
        swal({
            title: "Atención",
            text: `• Datos guardados satisfactoriamente`,
            type: "success",
        });


    }else
    {
        console.log(response)
        //Mostrando elementos
        divSkeletonHead.hidden = true;
        divSkeletonBody.hidden = true
        divButtonsPadre.children[0].hidden = false;
        formularioHijo.hidden = false;

        if (response.errors){

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
        }else{
            swal({
                title: "Atención",
                text: `• ${response.mensaje}`,
                type: "warning",
            });
        }
    }

}

/***
 * muestra numero de telefono iniciale
 * @param telefonos
 */
const showDataComunicacionInicial = (telefonos) =>{
    let dataFormPresentatio = "";
    telefonos.forEach((item)=>{
        dataFormPresentatio += retornaNumTelefonosIniciales(item);
    });

    $('#comunicacionComponente').append(dataFormPresentatio)
}

/***
 *Muestra correos reguistrados o cargados
 */
const showDataComunicacionCorreo = (correos) =>{
    let dataFormPresentation = ``;
    correos.forEach((item)=>{
        dataFormPresentation += retornaCorreoElectronicoInicial(item)
    })
    $('#comunicacionComponenteCorreo').append(dataFormPresentation);

}


/////////////DATOS DE DOMICILIO///////////////

async function showDatosDomicilio(){

    let datosdeInicio = await generarRepositorioDomicilios();
    visibilityComponent('contenedorSkeletonDomicilio', true);
    visibilityComponent("contenedorPadreDomicilio", false);

}

///Datos formacion Academica catalogos.....

async function obtenerCatalogoDatosCurriculares() {

    /*let data = await obtenerCatalogosDatosCurriculares();

    console.log(data);

    //Se definen los datos de los correspondientes catalogos
    dataInstitucion.setData(data.instituciones);

    dataAreaConocimiento.setData(data.areasConocimiento);

    dataFormacionEstudio.setData(data.formacionEstudios);

    dataNivelEducativo.setData(data.nivel);*/

    //Oculta skeleton
    visibilityComponent("skeleton-loader-general-Curriculares", true)

    //Mustra pestañas
    visibilityComponent("myTabContents-datosCurriculares", false);
}



