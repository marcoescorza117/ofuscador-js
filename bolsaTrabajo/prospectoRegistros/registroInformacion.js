
/**
 * se registra el estado de los componentes
 */
//increase: define el valor de la solicitud como valido

function stateComponent (n){
    let status = [];
    let statusEdit =[];
    let statusRequest =[];
    let stateGral = [];
    let CurrentState;

    return{
        setStatusEdit : ()=>{
            statusEdit.push(true)
        },

        setStatusEditFalse : ()=>{
            statusEdit.push(false)
        },
        getStatusEdit: ()=>{
            return statusEdit;
        },


        setStatusRequest : ()=>{
            statusRequest.push(true)
        },

        setStatusRequestFalse : ()=>{
            statusRequest.push(false)
        },
        getStatusRequest: ()=>{
            return statusRequest;
        },


        getStatus: ()=>{
            return status;
        },

        increase : ()=>{
            status.push(true)
        },

        setStateGral :(state)=>{
            stateGral.push(state);
        },

        cleanStateGral: ()=>{
          stateGral = [];
        },

        getStateGral :()=>{
            return stateGral;
        },

        //Define el estado de edicion en verdadero
        setEstadoEdicion : ()=>{
          CurrentState  = true
        },
        //Define el estado de edicion en falso
        setEstadoEdicionFinal : ()=>{
            CurrentState  = false
        },

        //Retorna el estado de edicion
        getEstadoEdicion : ()=>{
            return CurrentState;
        }






    }
}

function saveDataState (n){

    let dataCountry = [];
    let dataState = [];
    let dataTown = [];

    return{

        getDataCountry:()=>{
            return dataCountry;
        },
        setDataCountry: (Receivedata)=>{
            dataCountry.push(Receivedata);
        },
        clearDataCountry: ()=>{
            dataCountry= [];
        },

        getDataState: ( )=>{
            return dataState;
        },
        setDataState: (Receivedata)=>{
            dataState.push(Receivedata);
        },
        clearDataState: ()=>{
            dataState= [];
        }

        ,searchById:(idPaisValue)=>{
            let dataPais = dataCountry[0].filter(item=>item.idPais === idPaisValue)
            return dataPais[0].pais
        }

    }
}

//SeguridadSocial - Solo catalogos
function saveDataAforeCatalog (n){

    let dataAfores = [];

    return{

        getDataAfore: ( )=>{
            return dataAfores;
        },
        setDataAfore: (Receivedata)=>{
            dataAfores.push(Receivedata);
        },
        clearDataAfore: ()=>{
            dataAfores= [];
        },

    }
}

//Seccion dedicada para evitar recarga / doble peticiones
function saveDataSection(n){
    let data = [];

    return {
        getData: ()=>{
            return data;
        },
        setData: (receive) =>{
            data.push(receive)
        },
        clearData:() =>{
            data = [];
        }
    }
}




//Seccion dedicada al manejo de informacion por parte de componentes internos (En este caso se maneja la informacion de telefonos)
function saveDataCatalogo (){
    let dataCatalogo = [];

    return{
        getData: ()=>{

            return dataCatalogo;

        },
        setData:(receive)=>{
            dataCatalogo = receive;
        },
        clearDataTel:()=>{

            dataCatalogo = [];
        },

        findItemData:(value)=>{
            let filters = dataCatalogo.filter(item => item.idPersonaTelefono === value)
            let itemF = filters[0];
            return itemF;
        },

        deleteItem:(value)=>{

            let filter = dataCatalogo.filter(item => item.idPersonaTelefono !== value)
            dataCatalogo = filter;

        },
        replaceItem:(value, obj)=>{
            //Aqui seria la edicion
            //first search and after replace
            let filter = dataCatalogo.filter(item => item.idPersonaTelefono !== value)
            dataCatalogo = filter;
            dataCatalogo.push(obj) // Inserta the new object


        }
        ,addNewSingleElement: (item) =>{
            dataCatalogo.push(item) // remeber...here add the single item
        }
    }
}

function saveDataCatalogoCorreo (){
    let dataCatalogo = [];

    return{
        getData: ()=>{

            return dataCatalogo;

        },
        setData:(receive)=>{
            dataCatalogo = receive;
        },
        clearDataMail:()=>{

            dataCatalogo = [];
        },

        findItemData:(value)=>{
            let filters = dataCatalogo.filter(item => item.idPersonaCorreoElectronico === value)
            let itemF = filters[0];
            return itemF;
        },

        deleteItem:(value)=>{

            let filter = dataCatalogo.filter(item => item.idPersonaCorreoElectronico !== value)
            dataCatalogo = filter;

        },
        replaceItem:(value, obj)=>{
            //Aqui seria la edicion
            //first search and after replace
            let filter = dataCatalogo.filter(item => item.idPersonaCorreoElectronico !== value)
            dataCatalogo = filter;
            dataCatalogo.push(obj) // Inserta the new object


        }
        ,addNewSingleElement: (item) =>{
            dataCatalogo.push(item) // remeber...here add the single item
        }
    }
}

function saveDataCatalogoDomicilio (){
    let dataCatalogo = [];

    return{
        getData: ()=>{

            return dataCatalogo;

        },
        setData:(receive)=>{
            dataCatalogo = receive;
        },
        clearDataDomicilio:()=>{

            dataCatalogo = [];
        },

        findItemData:(value)=>{
            let filters = dataCatalogo.filter(item => item.idPersonaDomicilio === value)
            let itemF = filters[0];
            return itemF;
        },

        deleteItem:(value)=>{

            let filter = dataCatalogo.filter(item => item.idPersonaDomicilio !== value)
            dataCatalogo = filter;

        },
        replaceItem:(value, obj)=>{
            //Aqui seria la edicion
            //first search and after replace

            let filter = dataCatalogo.filter(item => item.idPersonaDomicilio !== value)
            dataCatalogo = filter;
            dataCatalogo.push(obj) // Inserta the new object
        }
        ,addNewSingleElement: (item) =>{
            dataCatalogo.push(item) // remeber...here add the single item
        }
        ,searchByType:(itemType)=>{
            let filters = dataCatalogo.filter(item => item.idPrincipal === itemType)
            let itemF = filters[0];

            return itemF || itemF === false ;
        }
    }
}

//**************Funciones para guardar los catalogo de las secciones Datos curriculares




//Respositorio para formaciones academicas
function saveDataFormacionAcademica (){
    let dataCatalogo = [];

    return {

        getAllData: ()=>{
            return dataCatalogo;
        },
        setInitialData : (values) =>{
            dataCatalogo = values;
        }
        ,
        addNewItem: (value) =>{
            dataCatalogo.push(value)
        },
        findItemByIdCurriculum: (value) =>{
            let filters = dataCatalogo.filter(item => item.idCurriculumFormacion === value)
            return filters[0];
        }
    }
}

function saveDataFormacionLengua (){
    let dataCatalogo = [];

    return {

        getAllData: ()=>{
            return dataCatalogo;
        },
        setInitialData : (values) =>{
            dataCatalogo = values;
        }
        ,
        addNewItem: (value) =>{
            dataCatalogo.push(value)
        },
        findItemByIdCurriculum: (value) =>{
            let filters = dataCatalogo.filter(item => item.idCurriculumFormacion === value)
            return filters[0];
        },
        replaceItemByIdCurriculumFormacion:(value, obj)=>{
            let filter = dataCatalogo.filter(item => item.idCurriculumFormacion !== value)
            dataCatalogo = filter;
            dataCatalogo.push(obj) // Inserta the new object
        },
    }
}

//Respositorio para formaciones academicas
function saveDataFormacionCientifica (){
    let dataCatalogo = [];

    return {

        getAllData: ()=>{
            return dataCatalogo;
        },
        setInitialData : (values) =>{
            dataCatalogo = values;
        }
        ,
        addNewItem: (value) =>{
            dataCatalogo.push(value)
        },
        findItemByIdCurriculum: (value) =>{
            let filters = dataCatalogo.filter(item => item.idCurriculumFormacion === value)
            return filters[0];
        },
        replaceItemByIdCurriculumFormacion:(value, obj)=>{
            let filter = dataCatalogo.filter(item => item.idCurriculumFormacion !== value)
            dataCatalogo = filter;
            dataCatalogo.push(obj) // Inserta the new object
        },
    }
}


function saveDataFormacionAdicional (){
    let dataCatalogo = [];

    return {

        getAllData: ()=>{
            return dataCatalogo;
        },
        setInitialData : (values) =>{
            dataCatalogo = values;
        }
        ,
        addNewItem: (value) =>{
            dataCatalogo.push(value)
        },
        findItemByIdCurriculum: (value) =>{
            let filters = dataCatalogo.filter(item => item.idCurriculumFormacion === value)
            return filters[0];
        },
        replaceItemByIdCurriculumFormacion:(value, obj)=>{
            let filter = dataCatalogo.filter(item => item.idCurriculumFormacion !== value)
            dataCatalogo = filter;
            dataCatalogo.push(obj) // Inserta the new object
        },
    }
}

function saveDataFormacionTICS (){
    let dataCatalogo = [];

    return {
        getAllData: ()=>{
            return dataCatalogo;
        },
        setInitialData : (values) =>{
            dataCatalogo = values;
        },
        addNewItem: (value) =>{
            dataCatalogo.push(value)
        },
        findItemByIdCurriculum: (value) =>{
            let filters = dataCatalogo.filter(item => item.idTipoTICS === value)
            return filters[0];
        }
    }
}


function saveDataFormacionLaboral (){
    let dataCatalogo = [];

    return {

        getAllData: ()=>{
            return dataCatalogo;
        },
        setInitialData : (values) =>{
            dataCatalogo = values;
        }
        ,
        addNewItem: (value) =>{
            dataCatalogo.push(value)
        },
        findItemByIdCurriculum: (value) =>{
            let filters = dataCatalogo.filter(item => item.idCurriculumFormacion === value)
            return filters[0];
        },
        replaceItemByIdCurriculumFormacion:(value, obj)=>{
            let filter = dataCatalogo.filter(item => item.idCurriculumFormacion !== value)
            dataCatalogo = filter;
            dataCatalogo.push(obj) // Inserta the new object
        },
    }
}


function saveDataFormacionFamiliares (){
    let dataCatalogo = [];

    return {

        getAllData: ()=>{
            return dataCatalogo;
        },
        setInitialData : (values) =>{
            dataCatalogo = values;
        }
        ,
        addNewItem: (value) =>{
            dataCatalogo.push(value)
        },
        findItemByIdCurriculum: (value) =>{
            let filters = dataCatalogo.filter(item => item.idPersonaPariente === value)
            return filters[0];
        },
        replaceItemByIdCurriculumFormacion:(value, obj)=>{
            let filter = dataCatalogo.filter(item => item.idPersonaPariente !== value)
            dataCatalogo = filter;
            dataCatalogo.push(obj) // Inserta the new object
        },
    }
}


//ATENCION: Register para formacion entrevista // solo debe de existir una entrevista x persona
function saveDataFormacionEntrevista (){
    let dataCatalogo = [];

    return {

        getAllData: ()=>{
            return dataCatalogo;
        },
        setInitialData : (values) =>{
            dataCatalogo = values;
        }
        ,
        addNewItem: (value) =>{
            dataCatalogo.push(value)
        },
        findItemByIdCurriculum: (value) =>{
            let filters = dataCatalogo.filter(item => item.idEntrevista === value)
            return filters[0];
        },
        replaceItemByIdCurriculumFormacion:(value, obj)=>{
            //Esto lo puedes mejorar, puedes hacerlo con map, pero feel free to improve it...!
            let filter = dataCatalogo.filter(item => item.idEntrevista !== value)
            dataCatalogo = filter;
            dataCatalogo.push(obj) // Inserta the new object
        },
    }
}



function saveDataFormacionCatalogoLenguaIndigena (){
    let dataCatalogo = [];

    return {

        getAllData: ()=>{
            return dataCatalogo;
        },
        setInitialData : (values) =>{
            dataCatalogo = values;
        }
        ,
        /*addNewItem: (value) =>{
            dataCatalogo.push(value)
        }*//*,
        findItemByIdCurriculum: (value) =>{
            let filters = dataCatalogo.filter(item => item.idPersonaLenguaIndigena === value)
            return filters[0];
        },
        replaceItemByIdCurriculumFormacion:(value, obj)=>{
            //Esto lo puedes mejorar, puedes hacerlo con map, pero feel free to improve it...!
            let filter = dataCatalogo.filter(item => item.idPersonaLenguaIndigena !== value)
            dataCatalogo = filter;
            dataCatalogo.push(obj) // Inserta the new object
        },*/
    }
}

function saveDataFormacionLenguaIndigena (){
    let dataCatalogo = [];

    return {

        getAllData: ()=>{
            return dataCatalogo;
        },
        setInitialData : (values) =>{
            dataCatalogo = values;
        }
        ,
        addNewItem: (value) =>{
            dataCatalogo.push(value)
        },
        findItemByIdCurriculum: (value) =>{
            let filters = dataCatalogo.filter(item => item.idPersonaLenguaIndigena === value)
            return filters[0];
        },
        replaceItemByIdCurriculumFormacion:(value, obj)=>{
            //Esto lo puedes mejorar, puedes hacerlo con map, pero feel free to improve it...!
            let filter = dataCatalogo.filter(item => item.idPersonaLenguaIndigena !== value)
            dataCatalogo = filter;
            dataCatalogo.push(obj) // Inserta the new object
        },
    }
}


function saveDataFormacionDiscapacidad (){
    let dataCatalogo = [];

    return {

        getAllData: ()=>{
            return dataCatalogo;
        },
        setInitialData : (values) =>{
            dataCatalogo = values;
        },
        addNewItem: (value) =>{
            dataCatalogo.push(value)
        },
        findItemByIdCurriculum: (value) =>{
            let filters = dataCatalogo.filter(item => item.idPersonaTipoDiscapacidad === value)
            return filters[0];
        },
        replaceItemByIdCurriculumFormacion:(value, obj)=>{
            //Esto lo puedes mejorar, puedes hacerlo con map, pero feel free to improve it...!
            let filter = dataCatalogo.filter(item => item.idPersonaTipoDiscapacidad !== value)
            dataCatalogo = filter;
            dataCatalogo.push(obj) // Inserta the new object
        },
    }
}


function saveDataDocumentosPersona (){
    let dataCatalogo = [];

    return {

        getAllData: ()=>{
            return dataCatalogo;
        },
        setInitialData : (values) =>{
            dataCatalogo = values;
        },
        addNewItem: (value) =>{
            dataCatalogo.push(value)
        },
        findItemByidDocumento: (value) =>{
            let filters = dataCatalogo.filter(item => item.idDocumento === value)
            return filters[0];
        },
        replaceItemByididDocumento:(value, obj)=>{
            //Esto lo puedes mejorar, puedes hacerlo con map, pero feel free to improve it...!
            let filter = dataCatalogo.filter(item => item.idDocumento !== value)
            dataCatalogo = filter;
            dataCatalogo.push(obj) // Inserta the new object
        },
    }
}


//repositorio para documentos...
function saveDataDocumentacion(){

    let dataCatalogo = [
    ];

    return {

        clearAllData:()=>{

        },

        getAllData: ()=>{
            return dataCatalogo;
        },
        setInitialData : (values) =>{
            dataCatalogo = values;
        }
        ,
        addNewItem: (value) =>{
            dataCatalogo.push(value)
        },
        findItemByIdCurriculum: (value) =>{
            let filters = dataCatalogo.filter(item => item.idCurriculumFormacion === value)
            return filters;
        },
        /**
         *
         * @param idCurriculumFormacionValue
         * @param idTipoDocumentovalue
         * @param obj Recordar que se apunta a la iteracion... no al array
         */
        replaceItem:(idCurriculumFormacionValue, idTipoDocumentovalue, obj)=>{
            //Aqui seria la edicion
            //first search and after replace
            let filter1 = dataCatalogo.filter(item => item.idCurriculumFormacion !== idCurriculumFormacionValue)
            let filter2 = filter1.filter(item => item.idTipoDocumento !== idTipoDocumentovalue);

            let filter3 = dataCatalogo.filter(item => item.idCurriculumFormacion === idCurriculumFormacionValue)
            let filter4 = filter3.filter(item => item.idTipoDocumento !== idTipoDocumentovalue);

            let datatTest = [...filter2,...filter4]
            datatTest.push(obj)
            dataCatalogo = datatTest;

        },
        findItemByIdDocument: (value) =>{
            let filters = dataCatalogo.filter(item => item.idDocumento === value)
            return filters[0];
        },

        replaceItemByIdDocument:(value, obj)=>{

            let filter = dataCatalogo.filter(item => item.idDocumento !== value)
            dataCatalogo = filter;
            dataCatalogo.push(obj) // Inserta the new object
        },

        findItemByidTipoDocAndidCurriculumFormacion: (idCurriculumFormacionValue, idTipoDoc) =>{
            let filters = dataCatalogo.filter(item => item.idCurriculumFormacion === idCurriculumFormacionValue)
            //return filters[0];
            let file2 = filters.filter(item => item.idTipoDocumento === idTipoDoc)
            return file2[0];

        },
        deleteItem:(value)=>{

            let filter = dataCatalogo.filter(item => item.idCurriculumFormacion !== value)
            dataCatalogo = filter;
        },





    }

}


function saveDataDocumentacionFamiliares(){

    let dataCatalogo = [
    ];

    return {

        clearAllData:()=>{

        },

        getAllData: ()=>{
            return dataCatalogo;
        },
        setInitialData : (values) =>{
            dataCatalogo = values;
        }
        ,
        addNewItem: (value) =>{
            dataCatalogo.push(value)
        },
        findItemByIdPariente: (value) =>{
            let filters = dataCatalogo.filter(item => item.idPersonaPariente === value)
            return filters;
        },
        /**
         *
         * @param idCurriculumFormacionValue
         * @param idTipoDocumentovalue
         * @param obj Recordar que se apunta a la iteracion... no al array
         */
        replaceItem:(idCurriculumFormacionValue, idTipoDocumentovalue, obj)=>{
            //Aqui seria la edicion
            //first search and after replace
            let filter1 = dataCatalogo.filter(item => item.idCurriculumFormacion !== idCurriculumFormacionValue)
            let filter2 = filter1.filter(item => item.idTipoDocumento !== idTipoDocumentovalue);

            let filter3 = dataCatalogo.filter(item => item.idCurriculumFormacion === idCurriculumFormacionValue)
            let filter4 = filter3.filter(item => item.idTipoDocumento !== idTipoDocumentovalue);

            let datatTest = [...filter2,...filter4]
            datatTest.push(obj)
            dataCatalogo = datatTest;

        },

        findItemByIdDocument: (value) =>{
            let filters = dataCatalogo.filter(item => item.idDocumento === value)
            return filters[0];
        },

        replaceItemByIdDocument:(value, obj)=>{

            let filter = dataCatalogo.filter(item => item.idDocumento !== value)
            dataCatalogo = filter;
            dataCatalogo.push(obj) // Inserta the new object
        },

        findItemByidTipoDocAndidCurriculumFormacion: (idPersonaPariente, idTipoDoc) =>{
            let filters = dataCatalogo.filter(item => item.idPersonaPariente === idPersonaPariente)
            //return filters[0];
            let file2 = filters.filter(item => item.idTipoDocumento === idTipoDoc)
            return file2[0];

        },
        deleteItem:(value)=>{

            let filter = dataCatalogo.filter(item => item.idPersonaPariente !== value)
            dataCatalogo = filter;
        },

    }

}
