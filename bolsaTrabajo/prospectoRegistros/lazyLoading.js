//______________________COMPORTAMEINTO DE DATOS GENERALES


////////////////////////////////DATOS DE NACIMIENTO
//Se definen datos para segunda seccion......
//Repository Central....
let statusNacimiento = stateComponent(1); // Se define variable global

//Repository Naciones
let dataNacion = saveDataState() // SE GENERA COMPONENTE GLOBAL PARA NACIONES (Catalogos)
let dataNacionDomicilio = saveDataState() // SE GENERA COMPONENTE GLOBAL PARA NACIONES (Catalogos)

//Repository Afores
let dataAforesCatalogo = saveDataAforeCatalog(1); // GENERANDO COMPONENTE GLOBAL PARA CATALOGOS

//Repository Seg Social
let dataSeguridadSocial = saveDataSection(1) ;

//Repository telefono
let dataComTelefono = saveDataCatalogo(1);

//Repository Correo
let dataComCorreo = saveDataCatalogoCorreo(1);

//Repository domicilio
let dataDomicilio = saveDataCatalogoDomicilio();


//catalogos para secciones...

let dataFormacionAcademica = saveDataFormacionAcademica();

let dataFormacionCientifica = saveDataFormacionCientifica();

let dataFormacionAdicional = saveDataFormacionAdicional();

let dataFormacionLaboral = saveDataFormacionAdicional();

let dataFormacionTICS = saveDataFormacionTICS();

let dataFormacionLengua = saveDataFormacionLengua();

let dataDocumentosFormaciones = saveDataDocumentacion();


let dataFormacionFamiliares =saveDataFormacionFamiliares();

let dataFormacionEntrevista = saveDataFormacionEntrevista();

//catalgo de lenguaIndigena
let dataCatalogoLenguaIndigena = saveDataFormacionCatalogoLenguaIndigena()

let dataFormacionLenguaIndigena = saveDataFormacionLenguaIndigena();


let dataFormacionDiscapacidad = saveDataFormacionDiscapacidad();

let dataDocumentoPersona = saveDataDocumentosPersona();

//let dataDocumentosParientes = saveDataDocumentacionFamiliares();
let dataDocumentosParientes = saveDataDocumentacionFamiliares();

//Repositorios para datos curriculares....


//Repositorios para datos curriculares....

//Obtiene data de datos generales y realiza ocultamiento de pantallas
const servicesDatosGenerales = async (url, typeUrl)=>{
    let dataServer = await getDataFromServer(url, typeUrl)
    return dataServer;
}

//construccion de estado para componente "datos genereales"
const datosRequest  = async (url, type, idButtons, idSkeleton, state) =>{

    let datosPrincipales = await setStorageData(); // Obtiene datos de catalogos como paises....

    let dataServer = await servicesDatosGenerales(url, type);
    showDatos(idButtons,idSkeleton);

    //define estado de status en true
    state.setStatusRequest()

    //Ingresa estado a setStateGral -- (recibe request de peticion)

    state.cleanStateGral();
    state.setStateGral(dataServer)

    //Define el estado de edicion en false
    state.setEstadoEdicionFinal();

    //Manda a llamar plantilla de datos generales
    setdatosGenerales(dataServer);
    //
    //define imagen de perfil

}

//llama a funcion principal---- es el estado inicial de la aplicacion
//recordar que este paso es unico, por lo que en cada llamada a backend es necesario sino obligatorio usar el API observer de js
let statusDatosGenerales = stateComponent(1);
datosRequest('obtenerinfoUsuario' , 'GET', 'buttons-data-gral','section-skeleton_datos-grales', statusDatosGenerales); /// -----> se comento la linea anterior para evitar primera seccion

//envio de form para edicion de datos (GRAL)
const servicesEditarDatosGenerales = async (url, typeUrl, data) =>{
    let updateData = await getDataFromServer(url, typeUrl, data);
    return updateData;
}




/*let dataAforeCatalogo = saveDataAforeCatalog(); //Para catalogo en especifico.........
dataAforeCatalogo.getDataAfore();*/




//async function
//FUncion para
async function setStorageNacionesEstados(){
    dataNacionDomicilio.clearDataState();
    let getEstados = await getDataFromServerHidden('obtenerNacimientoEntidadF','POST')
    //Guardando datos en state...
    dataNacionDomicilio.setDataState(getEstados);

    //console.table(getEstados);
}

//Esta funcion se comento... al inicio.....
async function setStorageData(){
    dataNacion.clearDataCountry();
    dataNacion.clearDataState();
    let getPaises = await getDataFromServerHidden('obtenerNacimientoPais','POST')
    if (getPaises.length > 200){

        let getEstados = await getDataFromServerHidden('obtenerNacimientoEntidadF','POST')
        //Guardando datos en state...
        dataNacion.setDataCountry(getPaises);
        dataNacion.setDataState(getEstados);
    }
    return true;
}


//setStorageData(); /// ESTO SIENTO QUE LO DEJARE OPCIONAL o bajo una condicional

//2 Obtener datos de nacimiento de persona
async function getDatosNacimiento(){
    let getEstadoNacimiento = await getDataFromServerHidden('obtenerNacimientoUsuario','GET')

    console.log(getEstadoNacimiento)

    try {

        let firstForm = getEstadoNacimiento[0][0]; // //Datos nacimiento primeros
        let secondForm = getEstadoNacimiento[1][0] // detalleActa
        let thirdForm = getEstadoNacimiento[2][0] // detalle extrnajero si existriera
        let fourthForm = getEstadoNacimiento[3][0] // nacionalidad si existiera

        await setDatosNacimientoFilled(firstForm, secondForm, thirdForm, fourthForm)
        //se tiene que remover el componente "Botoenes"

        //removeItemComponent("gral-options-Nacimiento") // se remueve item;
        //Verificar lo del boton.....


        let setData = document.getElementById("gral-options-Nacimiento")
        setData.disabled = true;
        //$("#gral-options-Nacimiento").prop('onclick', null);
        setData.title = "Ya se cuenta con información, no puede editar";
        $("#gral-options-Nacimiento").removeAttr("onclick");

    }catch (error){
        console.log(error)
        console.log("No hay datos...")
        //setDatosNacimiento();
        setDatosNacimiento(getEstadoNacimiento);
    }

}

//funcion para obtener elementos (institucion_Afore (Catalogo))
//Despues traer informacion de persona
/*async function getAforeCatalogo() {

    let catalogo = await getDataFromServerHidden('obtenerInstitucion','GET')
    //console.table(catalogo);
    //esto tengo que guardarlo

    //dataAforesCatalogo.
}*/


/*
//funcion para obtener los datos de la persona.....si existe agregarla en setData principal...
async function getPersonaSS(){
    let info = await getDataFromServerHidden('obtenerSegSocialPersona', 'GET');
    console.log(info)
}
*/


async function getDatosSeguridadSocial(){
    let catalogo = await getDataFromServerHidden('obtenerInstitucion','GET');
    //console.log(catalogo) // Registar informacion en objeto global
    dataAforesCatalogo.clearDataAfore();
    dataAforesCatalogo.setDataAfore(catalogo);

    let info = await getDataFromServerHidden('obtenerSegSocialPersona', 'GET');
    //console.log(info) //Registrar informacion en objeto global
    dataSeguridadSocial.clearData();
    dataSeguridadSocial.setData(info)


    //console.log(catalogo)

    console.log(info)

    //primero
    //1.- Ocultar skeleton
    //2.- Mostrar componente info -> hacer los componentes si existe o no existe
    //3.- Botones editar
    //4.- Botones guardar y cancelar
    setdatosSegSocial(dataSeguridadSocial.getData())
    return true
}
