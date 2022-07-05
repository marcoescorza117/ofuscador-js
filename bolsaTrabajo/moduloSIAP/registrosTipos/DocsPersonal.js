//
function componenteInicialBaseDocumentacionPersonal(params) {

    let j = Math.floor(Math.random() * 100000);

    return `<div class="container" id="showinfoDocumentacionPersonal">
    <div class="formacionDocumentacionPersonal">
        <div class="card  card-formacion-academica card-formacion-DocumentacionPersonal" id="card-formacion-DocumentacionPersonal">
            <div class="card-header">

                <div class="container-skeleton-DocumentacionPersonal-BodyCard" hidden>
                    <span class="skeleton-loader"></span>
                </div>

                <div id="values" hidden>
                    <input type="text" name="valueIDCF" id="valueIDCF" hidden disabled value="">
                    <input type="text" name="valueIDoc" id="valueIDoc" hidden disabled value="">
                    <input type="text" name="valueDOCType" id="valueDOCType" hidden disabled value="">

                </div>

                <div class="card-buttons">
                    ${btnsComponentGuardarFirstDocumentacionPersonal()}
                </div>


            </div>

            <div class="card-body card-body-back" id="card-componentBody" >

                <div class="container-skeleton-DocumentacionPersonal-BodyCard" hidden>
                    <div class="skeleton-section-content">
                        <span class="teasting2">
                        </span>
                    </div>
                </div>

                <div class="container-form">

                    <form action="" name="formacion-DocumentacionPersonal-form${j}" id="formacion-DocumentacionPersonal-form${j}">

                            <!--Formulario/Info-->
                        ${formularioNuevoDocumentacionPersonal()}

                    </form>

                    <div class="container-form-docs" id="container-form-docs${j}">

                    </div>
                </div>
            </div>
        </div>
    </div>

</div>`;
}

//****************INICIA BOTONES DE ACCIONES DocumentacionPersonal ********************/

//Guarda cambios de formaulario Inicial
function btnsComponentGuardarFirstDocumentacionPersonal(params) {


    let j = Math.floor(Math.random() * 100000);
    return `
        <div id="guardarDocumentacionPersonal${j}" class="guardarDocumentacionPersonal">
            <button type="button" class="btn btn-outline-secondary btn-sm btns-components-action" id="btn-doc-delete${j}" onclick="guardarFormularioDocumentacionPersonal(this)"><i class="fas fa-save"></i> Guardar</button>
            <button type="button" class="btn btn-outline-secondary btn-sm btns-components-action" id="btn-doc-delete${j}" onclick="eliminarFormularioDocumentacionPersonal(this)"><i class="fas fa-times-circle"></i> Eliminar</button>
        </div>
    `;
}


//Edita cambios de formulario Satisfactorio
function btnsComponentEditaFirstDocumentacionPersonal(params) {

    let j = Math.floor(Math.random() * 100000);
    return `
    <div id="EditarDocumentacionPersonal${j}" class="ocultarMostrarTitle">
        <button type="button" class="btn btn-outline-secondary btn-sm btns-components-action" id="btn-doc-delete${j}" onclick="editarFormularioDocumentacionPersonal(this)"><i class="fas fa-save"></i> Editar</button>
    </div>
    `;
}


//Edita cambios de formulario Satisfactorio
function btnsComponentEditaFirstDocumentacionPersonalMOSTRAR(params) {

    let j = Math.floor(Math.random() * 100000);
    return `
    <div id="EditarDocumentacionPersonal${j}" class="ocultarMostrarTitle">
        <button type="button" class="btn btn-outline-secondary btn-sm btns-components-action" id="btn-doc-delete${j}" onclick="editarFormularioDocumentacionPersonal(this)"><i class="fas fa-save"></i> Editar</button>

    </div>
    `;


    /*return `
    <div id="EditarDocumentacionPersonal${j}" class="ocultarMostrarTitle">

        <button type="button" class="btn btn-outline-secondary btn-sm btns-components-action" id="btn-doc-delete${j}" onclick="ocultarComponentesAdicionalCardBody(this)"><i class="fas fa-eye"></i> Mostrar</button>
        <button type="button" class="btn btn-outline-secondary btn-sm btns-components-action" id="btn-doc-delete${j}" onclick="ocultarComponentesAdicionalCardBody(this)"><i class="fas fa-eye"></i> Mostrar</button>
    </div>
    `;*/
}



/*const ocultarComponentesAdicionalCardBody = (element) => {
    console.log(element);
    let containerDestino =  element.parentNode.parentNode;




    let componenteOcultar = element.parentNode.parentNode.parentNode.parentNode.children[1]

    if(componenteOcultar.hidden === true){

        //Ocultar nombre de formacion
        componenteOcultar.hidden = false;
        element.innerHTML = `<i class="fas fa-eye-slash"></i> Ocultar`
    }else{

        //Agregar nombre de formacion
        componenteOcultar.hidden = true;
        element.innerHTML = `<i class="fas fa-eye"></i> Mostrar`
    }
}*/


//Edita cambios de formulario Satisfactorio
function btnsComponentEditaCancelaFirstDocumentacionPersonal(params) {

    let j = Math.floor(Math.random() * 100000);
    return `
    <div id="EditarCancelarDocumentacionPersonal${j}" class="EditarCancelarDocumentacionPersonal">
        <button type="button" class="btn btn-outline-secondary btn-sm btns-components-action" id="btn-doc-delete${j}" onclick="guardarEdicionDocumentacionPersonal(this)"><i class="fas fa-save"></i> Guardar</button>
        <button type="button" class="btn btn-outline-secondary btn-sm btns-components-action" id="btn-doc-delete${j}" onclick="cancelarEditarFormularioDocumentacionPersonal(this)"><i class="fas fa-save"></i> Cancelar</button>
    </div>
    `;
}


//
function btnsComponentCancelaFirstDocumentacionPersonal(params) {

    let j = Math.floor(Math.random() * 100000);
    return `

    <div id="CancelarDocumentacionPersonal${j}" class="EditarCancelarDocumentacionPersonal">
        <button type="button" class="btn btn-outline-secondary btn-sm btns-components-action" id="btn-doc-delete${j}" ><i class="fas fa-save"></i> Guardar</button>
        <button type="button" class="btn btn-outline-secondary btn-sm btns-components-action" id="btn-doc-delete${j}" ><i class="fas fa-save"></i> Cancelar</button>
    </div>
    `;
}



function formularioNuevoDocumentacionPersonal(params) {

    let j = Math.floor(Math.random() * 100000);
    return `
    <div>
        <div class="form-row">

            <div class="form-group col-md-6">
            <h6>Tipo de documento:</h6>
                <select class="browser-default custom-select" name="tipoDocumento" id="tipoDocumento${j}">
                    <option selected="" disabled="">Seleccione</option>
                    <option value="2">Acta de nacimiento</option>
                    <option value="6">Comprobante de afiliación al IMSS</option>
                    <option value="7">Comprobante de domicilio</option>
                    <option value="9">Credencial de elector INE</option>
                    <option value="10">Clave Única de Registro de Población (C.U.R.P.)</option>
                    <option value="12">Tarjeta migratoria/Documento migratorio</option>
                    <option value="14">Pasaporte</option>
                    <option value="15">Constancia de Situación Fiscal (R.F.C.)</option>
                    <option value="16">Curriculum vitae</option>
                    <option value="21">Certificado de Nacimiento</option>
                    <option value="23">Carta de referencia</option>

                </select>

            </div>

            <div class="form-group col-md-6">

                <h6>Evidencia:</h6>
                <div class="input-group">
                    <div class="input-group-prepend">
                        <span class="input-group-text" id="inputFileAgregarDOCPERSONAL" name="inputFileAgregarDOCPERSONAL"><i class="fa fa-file"></i></span>
                    </div>
                    <div class="custom-file">
                        <input type="file" class="custom-file-input" id="inputFileDOCPERSONAL" name="inputFile" aria-describedby="inputGroupFileAddon01" lang="es" accept=".pdf" requiered="">
                        <label class="custom-file-label" for="inputFileDOCPERSONAL" id="nombreArchivoCargarDOCPERSONAL" name="nombreArchivoCargarDOCPERSONAL">Buscar documento</label>
                    </div>
                </div>
            </div>

        </div>

    </div>
    `
}


function setSelectedDocument(value){

    let optionsItems;
    const obje = [
        {valueSelect:"2", description:"Acta de nacimiento"},
        {valueSelect:"6", description:"Comprobante de afiliación al IMSS"},
        {valueSelect:"7", description:"Comprobante de domicilio"},
        {valueSelect:"9", description:"Credencial de elector INE"},
        {valueSelect:"10",description:"Clave Única de Registro de Población (C.U.R.P.)"},
        {valueSelect:"12",description:"Tarjeta migratoria/Documento migratorio"},
        {valueSelect:"14",description:"Pasaporte"},
        {valueSelect:"15",description:"Constancia de Situación Fiscal (R.F.C.)"},
        {valueSelect:"16",description:"Curriculum vitae"},
        {valueSelect:"21",description:"Certificado de Nacimiento"},
        {valueSelect:"23",description:"Carta de referencia"}
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


function formularioNuevoDocumentacionPersonalBLOCK(params) {

    let j = Math.floor(Math.random() * 100000);
    return `
    <div>
        <div class="form-row justify-content-center">

            <div class="form-group col-md-6">
            <h6>Tipo de documento:</h6>
            <select class="browser-default custom-select" name="tipoDocumento" id="tipoDocumento${j}">
                    ${setSelectedDocument(params.idTipoDocumento)}
                </select>

            </div>

            <div class="form-group col-md-6">

                <h6>Evidencia:</h6>
                <div class="input-group">
                    <div class="input-group-prepend">
                        <span class="input-group-text" id="inputFileAgregarDOCPERSONAL" name="inputFileAgregarDOCPERSONAL"><i class="fa fa-file"></i></span>
                    </div>
                    <div class="custom-file">
                        <input type="file" class="custom-file-input" id="inputFileDOCPERSONAL" name="inputFile" aria-describedby="inputGroupFileAddon01" lang="es" accept=".pdf" requiered="">
                        <label class="custom-file-label" for="inputFileDOCPERSONAL" id="nombreArchivoCargarDOCPERSONAL" name="nombreArchivoCargarDOCPERSONAL">Buscar documento</label>
                    </div>
                </div>
            </div>

        </div>

    </div>
    `
}



function visualizadorDatosDocumentacionPersonal(params) {

    return `
    <div class="text-center">

        <div class="form-row justify-content-center">
            <div class="form-group col-md-6">
                <h6>Tipo de documento:</h6>
                   <p>${params.tipoDocumento}</p>
            </div>

            <div class="form-group col-md-6">
                <h6>Evidencia:</h6>
                ${obtenerEnlaceDocumentoDOCPERSONAL(params)}
            </div>
        </div>
    </div>
    `
}


const obtenerTipoDocumentoAdicionalDOCS = (item)=>{

    let idCurriculumDocs  = item.idPersonaDocumento

    //let documento = dataDocumentoPersona.findItemByidDocumento(idCurriculumDocs)

    try {
        let documentoIndividual = documento[0];

        //Buscar en respositorioDocumento

        return `<p>${documentoIndividual.tipoDocumento}</p>`;
    }catch (e){


        return `<p>SIN DOCUMENTO</p>`
    }

}

const obtenerEnlaceDocumentoDOCPERSONAL = (item) =>{
    //obtener datsode idPersonaDocumento....

    let objROUTES = ROUTES_OBJ.getITEMSROUTE();
    console.log("*******")
    //console.log(item);

    let idCurriculumDocs  = item.idDocumento


    //let documento = dataDocumentoPersona.findItemByidDocumento(idCurriculumDocs)
    let formacionActual = dataDocumentoPersona.findItemByidDocumento(item.idDocumento);
    //console.log(formacionActual)

    try {
        //let documentoIndividual = documento[0];

        //Buscar en respositorioDocumento

        //return `<a target="_blank" href="/prospectoAdmin/documentoPersonalObtener/${formacionActual.idDocumento}">${formacionActual.archivo}</a>`;

        return `<a target="_blank" href="${objROUTES.itemRouteDocPersonalesGral}/${formacionActual.idDocumento}">${formacionActual.archivo}</a>`;
    }catch (e){
        return `<p>SIN DOCUMENTO</p>`
    }
}

//************TERMINA COMPONENTES DE DocumentacionPersonal

//************Inicia Actions de DocumentacionPersonal


const mandarDocumentoFormacionDOCPERSONAL = async (idPersonaDocumento, contenedorForm, documentoIDActual)=>{

    //let itemInputDocu = contenedorForm.children[0].children[0].children[3].children[1].children[1].children[0];
    let itemInputDocu = contenedorForm.children[0].children[3].children[1].children[1].children[1].children[0]
    let formData = new FormData();

    formData.append('file',itemInputDocu.files[0]);
    formData.append('inputname',itemInputDocu.value);
    formData.append('idPersonaDocumento',idPersonaDocumento);
    formData.append('idTipoDocumento',documentoIDActual);

    return await sendFilePDFFREE(formData,'setDocumentoDocumentacionPersonal');
}


const actualizarDocumentoFormacionDOCPERSONAL = async (idPersonaDocumento,idDocumento, contenedorForm, idTipoDocumetnoBefore,documentoActualTIPO)=>{

    //let itemInputDocu = contenedorForm.children[0].children[0].children[3].children[1].children[1].children[0];
    let itemInputDocu = contenedorForm.children[0].children[3].children[1].children[1].children[1].children[0];

    let formData = new FormData();

    formData.append('file',itemInputDocu.files[0]);
    formData.append('inputname',itemInputDocu.value);
    formData.append('idPersonaDocumento',idPersonaDocumento);
    formData.append('idDocumento',idDocumento);
    formData.append('idTipoDocumentoAnterior',idTipoDocumetnoBefore);
    formData.append('idTipoDocumento',documentoActualTIPO);

    return await sendFilePDFFREE(formData,'actualizarDocumentoFormacionDOCPERSONAL');
}



const getDocumentacionPersonal =async (item) =>{
    let dataa = await getDataFromServerHidden(`getDocumentacionPersonalIndividual/${item}`,'POST')
    return dataa[0];
}


const getObtenerIdentificadorDocumentoActualDOCS = (item) =>{

    let form_data = $('#' + item.id).serializeJSON();
    return form_data.tipoDocumento;
}



const obtenerPersonaDocumentoActual = async (item) =>{

    console.log(item)
    let data = await getDataFromServerHidden(`getPersonaDocumentoTEST/${item}`,'GET')
    return data[0];
}

async function guardarFormularioDocumentacionPersonal(params) {
    console.log("Guardando datos");

    //Contenedor de botones
    let containerButtons = params.parentNode.parentNode;

    //SkeletondeHeader (Contenedor)
    let skeletonHeader = params.parentNode.parentNode.parentNode.parentNode.children[0].children[0]
    //SkeletonBody (Contenedor)
    let skeletonBody = params.parentNode.parentNode.parentNode.parentNode.children[1].children[0]

    //input para valor de DocumentacionPersonal
    let inputValueDocumentacionPersonal = params.parentNode.parentNode.parentNode.children[1].children[0].value

    //input para documento de DocumentacionPersonal
    let inputValueDocumentDocumentacionPersonal = params.parentNode.parentNode.parentNode.children[1].children[1].value


    //input para documento de DocumentacionPersonal
    let inputValueDocumentTIPO = params.parentNode.parentNode.parentNode.children[1].children[2].value




    //Contenedor card-body
    let cardBody = params.parentNode.parentNode.parentNode.parentNode.children[1];

    console.log(cardBody)

    //Contenedor principal1 (container-form)
    let containerForm = params.parentNode.parentNode.parentNode.parentNode.children[1].children[1];

    //ContenedorFormularioParent (form-action) //Se realiza Escritura de componente visualizador
    let containerFormShowDocumentacionPersonal = params.parentNode.parentNode.parentNode.parentNode.children[1].children[1].children[0]


    //validando datos para formulario....
    let formValidacion = await validacionFormularioFormDOCPERSONAL(containerFormShowDocumentacionPersonal);
    let validacionDocs = await validacionDocumentoFormularioDOCPERSONAL(containerFormShowDocumentacionPersonal);



    if (formValidacion||validacionDocs){
        console.log("Hay error... ")

        swal({
            title:"Atención",
            text: "• Por favor, revise los campos correspondientes del formulario,recuerde que el documento debe de ser en formato .pdf y este debe de no sobrepasar el tamaño permitido (1mb)",
            type: "warning"
        });




    }else{

        //Comportamiento de skeletons....

        skeletonHeader.hidden = false
        skeletonBody.hidden = false;

        containerButtons.hidden = true;
        containerForm.hidden = true;



        let response = await generacionObjetoDOCPERSONAL(containerFormShowDocumentacionPersonal);
        console.log(response)

        if (response.noError === "0"){


            let inputValueDocumentacionPersonalSEcond = params.parentNode.parentNode.parentNode.children[1].children[0]
            let inputValueDocumentDocumentacionPersonalSecond = params.parentNode.parentNode.parentNode.children[1].children[1]
            let DocumentoTIpoDocumentoHTML =  params.parentNode.parentNode.parentNode.children[1].children[2];



            //Ahora bien.... obtener el correspondiente documento

            //console.log(response.)
            let dataItemDOcumento = await obtenerPersonaDocumentoActual(response.idDocumento);
            console.log(dataItemDOcumento)


            dataDocumentoPersona.addNewItem(dataItemDOcumento)
            inputValueDocumentacionPersonalSEcond.value = dataItemDOcumento.idPersonaDocumento;
            inputValueDocumentDocumentacionPersonalSecond.value = dataItemDOcumento.idDocumento;
            DocumentoTIpoDocumentoHTML.value = dataItemDOcumento.idTipoDocumento;

            swal({
                title: "Atención",
                text: "Campos guardados correctamente",
                type: "success",
            });

            let idDocumento = inputValueDocumentDocumentacionPersonalSecond.value;
            let formacionActual = dataDocumentoPersona.findItemByidDocumento(idDocumento)

            containerFormShowDocumentacionPersonal.innerHTML =  visualizadorDatosDocumentacionPersonal(formacionActual)//Componente de Visualizacion

            skeletonHeader.hidden = true
            skeletonBody.hidden = true;

            containerButtons.hidden = false;
            containerForm.hidden = false;

            containerButtons.innerHTML = btnsComponentEditaFirstDocumentacionPersonal();

        }else{

            skeletonHeader.hidden = true
            skeletonBody.hidden = true;

            containerButtons.hidden = false;
            containerForm.hidden = false;
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


}



const eliminarFormularioDocumentacionPersonal = (params)=>{
    console.log("Eliminando formularios");
    let containerGeneralDocumentacionPersonal = params.parentNode.parentNode.parentNode.parentNode.parentNode

    containerGeneralDocumentacionPersonal.remove();
    /*//Contenedor de botones
    let containerButtons = params.parentNode.parentNode;

    //SkeletondeHeader (Contenedor)
    let skeletonHeader = params.parentNode.parentNode.parentNode.parentNode.children[0].children[0]
    //SkeletonBody (Contenedor)
    let skeletonBody = params.parentNode.parentNode.parentNode.parentNode.children[1].children[0]

    //input para valor de DocumentacionPersonal
    let inputValueDocumentacionPersonal = params.parentNode.parentNode.parentNode.children[1].children[0].value

    //input para documento de DocumentacionPersonal
    let inputValueDocumentDocumentacionPersonal = params.parentNode.parentNode.parentNode.children[1].children[1].value

    //input para documento de DocumentacionPersonal
    let inputValueDocumentTIPO = params.parentNode.parentNode.parentNode.children[1].children[2].value

    //Contenedor card-body
    let cardBody = params.parentNode.parentNode.parentNode.parentNode.children[1];

    //Contenedor principal1 (container-form)
    let containerForm = params.parentNode.parentNode.parentNode.parentNode.children[1].children[1];

    //ContenedorFormularioParent (form-action) //Se realiza Escritura de componente visualizador
    let containerFormShowDocumentacionPersonal = params.parentNode.parentNode.parentNode.parentNode.children[1].children[1].children[0]*/

}




const validacionFormularioFormDOCPERSONAL = async(item)=>{

    let form_data = $('#' + item.id).serializeJSON();

    return form_data.tipoDocumento === undefined

}


const validacionDocumentoFormularioDOCPERSONAL = async(item) => {

    //let itemInputDocu = item.children[0].children[0].children[3].children[1].children[1].children[0];

    //let itemInputDocu = item.children[0].children[3].children[1].children[1].children[1].children[0]
    let itemInputDocu =  item.children[0].children[0].children[1].children[1].children[1].children[0]


    let error = [];

    if (itemInputDocu===''){

        error.push(true);
    }else{
        error.push(false);
    }


    let dataValidator = validacionComprobacionDocumentos(itemInputDocu);
    error.push(dataValidator);


    return error.includes(true);

}


const generacionObjetoDOCPERSONAL= async(item)=>{

    let itemInputDocu =  item.children[0].children[0].children[1].children[1].children[1].children[0]

    let form_data = $('#' + item.id).serializeJSON();

    let tipoDocumento =  form_data.tipoDocumento



/*
    array.push(object);
    let data = JSON.stringify(array);*/



    let formData = new FormData();

    formData.append('file',itemInputDocu.files[0]);
    formData.append('inputname',itemInputDocu.value);
    formData.append('idTipoDocumento',tipoDocumento);

    //console.log(data)
    //
    //return await getDataFromServerHidden('definirDocumentoPersonal','POST',data)
    return await sendFilePDFFREE(formData,'definirDocumentoPersonal');


}


const generacionObjetoDOCPERSONALUpdate= async(item, idCurriculumFo,idDocumentTipo)=>{

    let itemInputDocu =  item.children[0].children[0].children[1].children[1].children[1].children[0]


    let formData = new FormData();

    formData.append('file',itemInputDocu.files[0]);
    formData.append('inputname',itemInputDocu.value);
    formData.append('idTipoDocumento',idDocumentTipo);
    formData.append('idDocumento',idCurriculumFo);
    formData.append('idTipoDocumentoAnterior',idDocumentTipo);

    //console.log(data)

    return await sendFilePDFFREE(formData,'actualizarDocumentacionPersonal');

}


function editarFormularioDocumentacionPersonal(params) {

    console.log("Editando datos");

    //Contenedor de botones
    let containerButtons = params.parentNode.parentNode;


    //SkeletondeHeader (Contenedor)
    let skeletonHeader = params.parentNode.parentNode.parentNode.parentNode.children[0].children[0]
    //SkeletonBody (Contenedor)
    let skeletonBody = params.parentNode.parentNode.parentNode.parentNode.children[1].children[0]

    //input para valor de DocumentacionPersonal
    let inputValueDocumentacionPersonal = params.parentNode.parentNode.parentNode.children[1].children[0].value

    console.log(inputValueDocumentacionPersonal)

    //input para documento de DocumentacionPersonal
    let inputValueDocumentDocumentacionPersonal = params.parentNode.parentNode.parentNode.children[1].children[1].value

    console.log(inputValueDocumentDocumentacionPersonal)

    //input para documento de DocumentacionPersonal
    let inputValueDocumentTIPO = params.parentNode.parentNode.parentNode.children[1].children[2].value

    //Contenedor card-body
    let cardBody = params.parentNode.parentNode.parentNode.parentNode.children[1];

    //Contenedor principal1 (container-form)
    let containerForm = params.parentNode.parentNode.parentNode.parentNode.children[1].children[1];

    //ContenedorFormularioParent (form-action) //Se realiza Escritura de componente visualizador

    let containerFormShowDocumentacionPersonal = params.parentNode.parentNode.parentNode.parentNode.children[1].children[1].children[0]

    let inputValueDocumentDocumentacionPersonalSecond = params.parentNode.parentNode.parentNode.children[1].children[1]
    let idDocumento = inputValueDocumentDocumentacionPersonalSecond.value;
    let formacionActual = dataDocumentoPersona.findItemByidDocumento(idDocumento)


    containerFormShowDocumentacionPersonal.innerHTML =  formularioNuevoDocumentacionPersonalBLOCK(formacionActual)//Componente de Visualizacion

    //agregando Botones para editar
    containerButtons.innerHTML = btnsComponentEditaCancelaFirstDocumentacionPersonal();
    //agregarDatePickerNoMayor('fechaFormacion')

}

async function guardarEdicionDocumentacionPersonal(params) {

    console.log("Guardando datos en edicion");

    //Contenedor de botones
    let containerButtons = params.parentNode.parentNode;


    //SkeletondeHeader (Contenedor)
    let skeletonHeader = params.parentNode.parentNode.parentNode.parentNode.children[0].children[0]
    //SkeletonBody (Contenedor)
    let skeletonBody = params.parentNode.parentNode.parentNode.parentNode.children[1].children[0]

    //input para valor de DocumentacionPersonal
    let inputValueDocumentacionPersonal = params.parentNode.parentNode.parentNode.children[1].children[0].value

    //input para documento de DocumentacionPersonal
    let inputValueDocumentDocumentacionPersonal = params.parentNode.parentNode.parentNode.children[1].children[1].value

    //input para documento de DocumentacionPersonal
    let inputValueDocumentTIPO = params.parentNode.parentNode.parentNode.children[1].children[2].value

    //Contenedor card-body
    let cardBody = params.parentNode.parentNode.parentNode.parentNode.children[1];

    //Contenedor principal1 (container-form)
    let containerForm = params.parentNode.parentNode.parentNode.parentNode.children[1].children[1];

    //ContenedorFormularioParent (form-action) //Se realiza Escritura de componente visualizador

    let containerFormShowDocumentacionPersonal = params.parentNode.parentNode.parentNode.parentNode.children[1].children[1].children[0]


    //En esta parte va la edicion

    let formValidacion = await validacionFormularioFormDOCPERSONAL(containerFormShowDocumentacionPersonal);
    let validacionDocs = await validacionDocumentoFormularioDOCPERSONAL(containerFormShowDocumentacionPersonal);



    //Realizando modificacion para esto..
    if (formValidacion||validacionDocs){
        swal({
            title:"Atención",
            text: "• Por favor, revise los campos correspondientes del formulario,recuerde que el documento debe de ser en formato .pdf y este debe de no sobrepasar el tamaño permitido (1mb)",
            type: "warning"
        });

    }else{

        skeletonHeader.hidden = false
        skeletonBody.hidden = false;

        containerButtons.hidden = true;
        containerForm.hidden = true;


        let idCurriculumFo = params.parentNode.parentNode.parentNode.children[1].children[0].value
        let idDocument = params.parentNode.parentNode.parentNode.children[1].children[1].value;
        let idDocumentTipo = params.parentNode.parentNode.parentNode.children[1].children[2].value;

        let response = await generacionObjetoDOCPERSONALUpdate(containerFormShowDocumentacionPersonal,idDocument,idDocumentTipo)
        console.log(response)
        if (response.noError === "0"){


            let dataItemDOcumento = await obtenerPersonaDocumentoActual(idDocument);

            dataDocumentoPersona.replaceItemByididDocumento(idDocument,dataItemDOcumento);


            let inputValueDocumentDocumentacionPersonalSecond = params.parentNode.parentNode.parentNode.children[1].children[1]


            swal({
                title: "Atención",
                text: "Campos guardados correctamente",
                type: "success",
            });


            skeletonHeader.hidden = true
            skeletonBody.hidden = true;

            containerButtons.hidden = false;
            containerForm.hidden = false;


            let idDocumento = inputValueDocumentDocumentacionPersonalSecond.value;
            let formacionActual = dataDocumentoPersona.findItemByidDocumento(idDocumento)

            containerFormShowDocumentacionPersonal.innerHTML =  visualizadorDatosDocumentacionPersonal(formacionActual)//Componente de Visualizacion
            containerButtons.innerHTML = btnsComponentEditaFirstDocumentacionPersonal();




        }else{

            skeletonHeader.hidden = true
            skeletonBody.hidden = true;

            containerButtons.hidden = false;
            containerForm.hidden = false;

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


}


function cancelarEditarFormularioDocumentacionPersonal(params) {

    console.log("Cancelando edicion de datos");
    //Contenedor de botones
    let containerButtons = params.parentNode.parentNode;


    //SkeletondeHeader (Contenedor)
    let skeletonHeader = params.parentNode.parentNode.parentNode.parentNode.children[0].children[0]
    //SkeletonBody (Contenedor)
    let skeletonBody = params.parentNode.parentNode.parentNode.parentNode.children[1].children[0]

    //input para valor de DocumentacionPersonal
    let inputValueDocumentacionPersonal = params.parentNode.parentNode.parentNode.children[1].children[0].value

    //input para documento de DocumentacionPersonal
    let inputValueDocumentDocumentacionPersonal = params.parentNode.parentNode.parentNode.children[1].children[1].value

    //input para documento de DocumentacionPersonal
    let inputValueDocumentTIPO = params.parentNode.parentNode.parentNode.children[1].children[2].value

    //Contenedor card-body
    let cardBody = params.parentNode.parentNode.parentNode.parentNode.children[1];

    //Contenedor principal1 (container-form)
    let containerForm = params.parentNode.parentNode.parentNode.parentNode.children[1].children[1];

    //ContenedorFormularioParent (form-action) //Se realiza Escritura de componente visualizador


    let inputValueDocumentacionPersonalSEcond = params.parentNode.parentNode.parentNode.children[1].children[0]
    let inputValueDocumentDocumentacionPersonalSecond = params.parentNode.parentNode.parentNode.children[1].children[1]
    let DocumentoTIpoDocumentoHTML =  params.parentNode.parentNode.parentNode.children[1].children[2];




    let idDocumento = inputValueDocumentDocumentacionPersonalSecond.value;
    let containerFormShowDocumentacionPersonal = params.parentNode.parentNode.parentNode.parentNode.children[1].children[1].children[0]

    //let formacionActual = dataDocumentoPersona.findItemByidDocumento(inputValueDocumentacionPersonal)
    let formacionActual = dataDocumentoPersona.findItemByidDocumento(idDocumento)

    containerFormShowDocumentacionPersonal.innerHTML =  visualizadorDatosDocumentacionPersonal(formacionActual)//Componente de Visualizacion

    //agregando Botones para editar
    containerButtons.innerHTML = btnsComponentEditaFirstDocumentacionPersonal();
}



//Acciones para escribir o sobresscribir en componente dado......
const agregarNuevoElementoDocumentacionPersonal = (params) => {

    //Buscando elemento origen....

    $("#formacionDocumentacionContainer").prepend(componenteInicialBaseDocumentacionPersonal())

    //agregarDatePickerNoMayor('fechaFormacion')
}




/*
function verificadorFormacionCientificaDocumentacionPersonal(perfilChkDOCPERSONAL) {

    let origin = document.getElementById('DocumentacionPersonal');

    if(perfilChkDOCPERSONAL.checked){
        origin.innerHTML = componenteInicialBaseDocumentacionPersonal();
        agregarDatePicker('inicioVigenciaDOCPERSONAL')
        agregarDatePickerNoMayor('terminoVigenciaDOCPERSONAL')
    }else{
        origin.innerHTML = "";
    }
}
*/



function obtenerDocumentacionPersonal(itemFormacion) {

    let j = Math.floor(Math.random() * 100000);


    return `

<div class="container" id="showinfoDocumentacionPersonal">
    <div class="formacionDocumentacionPersonal">
        <div class="card  card-formacion-academica card-formacion-DocumentacionPersonal" id="card-formacion-DocumentacionPersonal">
            <div class="card-header">

                <div class="container-skeleton-DocumentacionPersonal-BodyCard" hidden>
                    <span class="skeleton-loader"></span>
                </div>

                <div id="values" hidden>
                    <input type="text" name="valueIDCF" id="valueIDCF" hidden disabled value="${itemFormacion.idPersonaDocumento}">
                    <input type="text" name="valueIDoc" id="valueIDoc" hidden disabled value="${itemFormacion.idDocumento}">
                    <input type="text" name="valueDOCType" id="valueDOCType" hidden disabled value="${itemFormacion.idTipoDocumento}">
                </div>

                <div class="card-buttons">


                </div>
            </div>

            <div class="card-body card-body-back" id="card-componentBody"  >

                <div class="container-skeleton-DocumentacionPersonal-BodyCard" hidden>
                    <div class="skeleton-section-content">
                        <span class="teasting2">
                        </span>
                    </div>
                </div>

                <div class="container-form">

                    <form action="" name="formacion-DocumentacionPersonal-form${j}" id="formacion-DocumentacionPersonal-form${j}">

                            <!--Formulario/Info-->
                        ${visualizadorDatosDocumentacionPersonal(itemFormacion)}

                    </form>

                    <div class="container-form-docs" id="container-form-docs${j}">

                    </div>
                </div>
            </div>
        </div>
    </div>
</div>`;
}
//Formacion



async function mostrarFormulariosDocumentacionPersonal(){

    let idUser = document.getElementById('_idUnique').value;
    let data = await getDataFromServerHidden(`getDocumentacionPersonaGeneral/${idUser}`,'GET');

    //registrando todos los items
    data.forEach((item)=>{
        dataDocumentoPersona.addNewItem(item);
    })

/*
    let dataAdicionalHTML = "";
    data.forEach((items)=>{
        dataAdicionalHTML += obtenerDocumentacionPersonal(items);

    })

    $("#formacionDocumentacionContainer").prepend(dataAdicionalHTML);*/

}


const showDocumentacionPersonal = async ()=>{
    console.log("Ejecutando")
    await mostrarFormulariosDocumentacionPersonal();

    /*visibilityComponent('contenedorSkeletonDocumentosPersona', true)

    visibilityComponent('optionsTitleDocumentosPersona', false)
    visibilityComponent('containerDocumentosPersona', false)
    visibilityComponent('contenedor-containerDocumentosPersona-agregarNuevos', false)*/
}

showDocumentacionPersonal().then(r => console.log("OBTENIENDO DOCUMENTACION DESDE EL INICIO DE LOS TIEMPOS"));

/**
 *
 * @param params IdTIpoelementodeDocumento
 */
const obtenerDocumentoCorrespondiente = (params)=>{

    let documentoActualContext = dataDocumentoPersona.getAllData();
    let itemActual = documentoActualContext.find(item =>item.idTipoDocumento === params );
    if (itemActual!==undefined){
        return obtenerDocumentacionPersonal(itemActual)
    }else{
        return ``;
    }
}
