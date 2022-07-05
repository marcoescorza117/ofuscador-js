//
function componenteInicialBaseFormacionAdicional(params) {

    let j = Math.floor(Math.random() * 100000);

    return `<div class="container" id="showinfoFormacionAdicional">
    <div class="formacionFormacionAdicional">
        <div class="card  card-formacion-academica card-formacion-FormacionAdicional" id="card-formacion-FormacionAdicional">
            <div class="card-header">

                <div class="container-skeleton-FormacionAdicional-BodyCard" hidden>
                    <span class="skeleton-loader"></span>
                </div>

                <div id="values" hidden>
                    <input type="text" name="valueIDCF" id="valueIDCF" hidden disabled value="">
                    <input type="text" name="valueIDoc" id="valueIDoc" hidden disabled value="">

                </div>

                <div class="card-buttons">
                    ${btnsComponentGuardarFirstFormacionAdicional()}
                </div>


            </div>

            <div class="card-body card-body-back" id="card-componentBody" >

                <div class="container-skeleton-FormacionAdicional-BodyCard" hidden>
                    <div class="skeleton-section-content">
                        <span class="teasting2">
                        </span>
                    </div>
                </div>

                <div class="container-form">

                    <form action="" name="formacion-FormacionAdicional-form${j}" id="formacion-FormacionAdicional-form${j}">

                            <!--Formulario/Info-->
                        ${formularioNuevoFormacionAdicional()}

                    </form>

                    <div class="container-form-docs" id="container-form-docs${j}">

                    </div>
                </div>
            </div>
        </div>
    </div>

</div>`;
}

//****************INICIA BOTONES DE ACCIONES FormacionAdicional ********************/

//Guarda cambios de formaulario Inicial
function btnsComponentGuardarFirstFormacionAdicional(params) {


    let j = Math.floor(Math.random() * 100000);
    return `
        <div id="guardarFormacionAdicional${j}" class="guardarFormacionAdicional">
            <button type="button" class="btn btn-outline-secondary btn-sm btns-components-action" id="btn-doc-delete${j}" onclick="guardarFormularioFormacionAdicional(this)"><i class="fas fa-save"></i> Guardar</button>
            <button type="button" class="btn btn-outline-secondary btn-sm btns-components-action" id="btn-doc-delete${j}" onclick="eliminarFormularioFormacionAdicional(this)"><i class="fas fa-times-circle"></i> Eliminar</button>
        </div>
    `;
}


//Edita cambios de formulario Satisfactorio
function btnsComponentEditaFirstFormacionAdicional(params) {

    let j = Math.floor(Math.random() * 100000);
    return `
    <div id="EditarFormacionAdicional${j}" class="ocultarMostrarTitle">
        <button type="button" class="btn btn-outline-secondary btn-sm btns-components-action" id="btn-doc-delete${j}" onclick="editarFormularioFormacionAdicional(this)"><i class="fas fa-save"></i> Editar</button>
    </div>
    `;
}


//Edita cambios de formulario Satisfactorio
function btnsComponentEditaFirstFormacionAdicionalMOSTRAR(params) {

    let j = Math.floor(Math.random() * 100000);
    return `
    <div id="EditarFormacionAdicional${j}" class="ocultarMostrarTitle">
        <button type="button" class="btn btn-outline-secondary btn-sm btns-components-action" id="btn-doc-delete${j}" onclick="editarFormularioFormacionAdicional(this)"><i class="fas fa-save"></i> Editar</button>

    </div>
    `;


    /*return `
    <div id="EditarFormacionAdicional${j}" class="ocultarMostrarTitle">

        <button type="button" class="btn btn-outline-secondary btn-sm btns-components-action" id="btn-doc-delete${j}" onclick="ocultarComponentesAdicionalCardBody(this)"><i class="fas fa-eye"></i> Mostrar</button>
        <button type="button" class="btn btn-outline-secondary btn-sm btns-components-action" id="btn-doc-delete${j}" onclick="ocultarComponentesAdicionalCardBody(this)"><i class="fas fa-eye"></i> Mostrar</button>
    </div>
    `;*/
}



const ocultarComponentesAdicionalCardBody = (element) => {
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
}


//Edita cambios de formulario Satisfactorio
function btnsComponentEditaCancelaFirstFormacionAdicional(params) {

    let j = Math.floor(Math.random() * 100000);
    return `
    <div id="EditarCancelarFormacionAdicional${j}" class="EditarCancelarFormacionAdicional">
        <button type="button" class="btn btn-outline-secondary btn-sm btns-components-action" id="btn-doc-delete${j}" onclick="guardarEdicionFormacionAdicional(this)"><i class="fas fa-save"></i> Guardar</button>
        <button type="button" class="btn btn-outline-secondary btn-sm btns-components-action" id="btn-doc-delete${j}" onclick="cancelarEditarFormularioFormacionAdicional(this)"><i class="fas fa-save"></i> Cancelar</button>
    </div>
    `;
}


//
function btnsComponentCancelaFirstFormacionAdicional(params) {

    let j = Math.floor(Math.random() * 100000);
    return `

    <div id="CancelarFormacionAdicional${j}" class="EditarCancelarFormacionAdicional">
        <button type="button" class="btn btn-outline-secondary btn-sm btns-components-action" id="btn-doc-delete${j}" ><i class="fas fa-save"></i> Guardar</button>
        <button type="button" class="btn btn-outline-secondary btn-sm btns-components-action" id="btn-doc-delete${j}" ><i class="fas fa-save"></i> Cancelar</button>
    </div>
    `;
}


//****************TERMINA BOTONES DE ACCIONES FormacionAdicional ********************/

/*
1,Candidato a Investigador Nacional
2,Investigador Nacional Nivel I
3,Investigador Nacional Nivel II
4,Investigador Nacional Nivel III*/

//Formulario inicial de FormacionAdicionalo ///Tener en cuenta de que se tiene que editar deacuerdo al formulario....
function formularioNuevoFormacionAdicional(params) {

    return `
    <div>

        <div class="form-row">

             <div class="form-group col-md-4">
                <h6>Tipo de capacitacion:</h6>
                <select class="browser-default custom-select" name="tipoCapacitacion" id="tipoCapacitacion">
                    <option selected="" disabled="">Seleccione</option>
                    <option value="1">Conferencia</option>
                    <option value="2">Congreso</option>
                    <option value="3">Curso</option>
                    <option value="4">Diplomado</option>
                    <option value="5">Exposiciones</option>
                    <option value="6">Foro</option>
                    <option value="7">Ponencia</option>
                    <option value="8">Seminario</option>
                    <option value="9">Simposium</option>
                    <option value="10">Taller</option>
                </select>
            </div>
        </div>
        <div class="form-row">


            <div class="form-group col-md-8">
                <h6>Nombre de capacitación:</h6>
                <input type="text" class="form-control" name="nombreCapacitacion" id="nombreCapacitacion" placeholder="Ingrese nombre de capacitación"   autocomplete="off" oninput="eliminarEspacios(this)">
            </div>

            <div class="form-group col-md-4">
                <h6>Duración:</h6>
                <input type="text" maxlength="200" class="form-control" name="duracionVigencia" id="duracionVigencia"  autocomplete="off"  placeholder="1 mes, 2 meses, 3 horas" oninput="eliminarEspacios(this)">
            </div>

        </div>

        <div class="form-row">

            <div class="form-group col-md-8">
                <h6>Institución:</h6>
                <input type="text" maxlength="200" class="form-control" name="institucionFormacion" id="institucionFormacion" autocomplete="off" placeholder="Nombre de institución" oninput="eliminarEspacios(this)">
            </div>


            <div class="form-group col-md-4">
                <h6>Fecha de obtención:</h6>
                <input type="text" maxlength="14" class="form-control" name="fechaFormacion" id="fechaFormacion" autocomplete="off" oninput="espaciosEnBlanco(this)" readonly>
            </div>



        </div>


        <div class="form-row">

            <div class="form-group col-md-4">
            <h6>Tipo de documento:</h6>
                <select class="browser-default custom-select" name="tipoDocumento" id="tipoDocumento">
                    <option selected="" disabled="">Seleccione</option>
                    <option value="11">Diploma</option>
                    <option value="25">Constancia</option>
                    <option value="28">Certificación</option>
                    <option value="29">Reconocimiento</option>
                    <option value="30">Acreditación</option>

                </select>

            </div>

            <div class="form-group col-md-4">

                <h6>Evidencia:</h6>
                <div class="input-group">
                    <div class="input-group-prepend">
                        <span class="input-group-text" id="inputFileAgregarADICIONAL" name="inputFileAgregarADICIONAL"><i class="fa fa-file"></i></span>
                    </div>
                    <div class="custom-file">
                        <input type="file" class="custom-file-input" id="inputFileADICIONAL" name="inputFile" aria-describedby="inputGroupFileAddon01" lang="es" accept=".pdf" requiered="">
                        <label class="custom-file-label" for="inputFileADICIONAL" id="nombreArchivoCargarADICIONAL" name="nombreArchivoCargarADICIONAL">Buscar documento</label>
                    </div>
                </div>
            </div>

        </div>


    </div>
    `
}



function visualizadorDatosFormacionAdicional(params) {

    return `
    <div>
        <div class="form-row">
            <div class="form-group col-md-4">
                <h6>Tipo de capacitación:</h6>
                <p>${params.tipoFormacionAdicional}</p>
            </div>

            <div class="form-group col-md-4">
                <h6>Nombre de capacitación:</h6>
                <p>${params.estudio}</p>
            </div>

            <div class="form-group col-md-4">
                <h6>Duración:</h6>
                <p>${params.duracion}</p>
            </div>

        </div>

        <div class="form-row">
            <div class="form-group col-md-4">
                <h6>Institución:</h6>
                <p>${params.institucion}</p>
            </div>

            <div class="form-group col-md-4">
                <h6>Fecha de realización:</h6>
                <p>${timeChangeToLocal(params.fecha)}</p>
            </div>

        </div>


        <div class="form-row">
            <div class="form-group col-md-4">
                <h6>Tipo de documento:</h6>
                ${obtenerTipoDocumentoAdicional(params)}
            </div>

            <div class="form-group col-md-4">
                <h6>Evidencia:</h6>
                <p>${obtenerEnlaceDocumentoADICIONAL(params)}</p>
            </div>
        </div>
    </div>
    `
}


const obtenerTipoDocumentoAdicional = (item)=>{

    let idCurriculumDocs  = item.idCurriculumFormacion

    let documento = dataDocumentosFormaciones.findItemByIdCurriculum(idCurriculumDocs)

    try {
        let documentoIndividual = documento[0];

        //Buscar en respositorioDocumento

        return `<p>${documentoIndividual.tipoDocumento}</p>`;
    }catch (e){


        return `<p>SIN DOCUMENTO</p>`
    }

}

const obtenerEnlaceDocumentoADICIONAL = (item) =>{
    //obtener datsode idCurriculumFormacion....

    let idCurriculumDocs  = item.idCurriculumFormacion

    let documento = dataDocumentosFormaciones.findItemByIdCurriculum(idCurriculumDocs)

    try {
        let documentoIndividual = documento[0];

        //Buscar en respositorioDocumento

        return `<a target="_blank" href="/prospecto/documentoFormacionObtener/${documentoIndividual.idDocumento}">${documentoIndividual.archivo}</a>`;
    }catch (e){


        return `<p>SIN DOCUMENTO</p>`
    }


}

//************TERMINA COMPONENTES DE FormacionAdicional

//************Inicia Actions de FormacionAdicional


const mandarDocumentoFormacionADICIONAL = async (idCurriculumFormacion, contenedorForm, documentoIDActual)=>{

    //let itemInputDocu = contenedorForm.children[0].children[0].children[3].children[1].children[1].children[0];
    let itemInputDocu = contenedorForm.children[0].children[3].children[1].children[1].children[1].children[0]
    let formData = new FormData();

    formData.append('file',itemInputDocu.files[0]);
    formData.append('inputname',itemInputDocu.value);
    formData.append('idCurriculumFormacion',idCurriculumFormacion);
    formData.append('idTipoDocumento',documentoIDActual);

    return await sendFilePDFFREE(formData,'setDocumentoFormacionAdicional');
}


const actualizarDocumentoFormacionADICIONAL = async (idCurriculumFormacion,idDocumento, contenedorForm, idTipoDocumetnoBefore,documentoActualTIPO)=>{

    //let itemInputDocu = contenedorForm.children[0].children[0].children[3].children[1].children[1].children[0];
    let itemInputDocu = contenedorForm.children[0].children[3].children[1].children[1].children[1].children[0];

    let formData = new FormData();

    formData.append('file',itemInputDocu.files[0]);
    formData.append('inputname',itemInputDocu.value);
    formData.append('idCurriculumFormacion',idCurriculumFormacion);
    formData.append('idDocumento',idDocumento);
    formData.append('idTipoDocumentoAnterior',idTipoDocumetnoBefore);
    formData.append('idTipoDocumento',documentoActualTIPO);

    return await sendFilePDFFREE(formData,'actualizarDocumentoFormacionADICIONAL');
}



const getFormacionAdicional =async (item) =>{
    let dataa = await getDataFromServerHidden(`getFormacionAdicionalIndividual/${item}`,'POST')
    return dataa[0];
}


const getObtenerIdentificadorDocumentoActual = (item) =>{

    let form_data = $('#' + item.id).serializeJSON();
    return form_data.tipoDocumento;
}

async function guardarFormularioFormacionAdicional(params) {
    console.log("Guardando datos");

    //Contenedor de botones
    let containerButtons = params.parentNode.parentNode;

    //SkeletondeHeader (Contenedor)
    let skeletonHeader = params.parentNode.parentNode.parentNode.parentNode.children[0].children[0]
    //SkeletonBody (Contenedor)
    let skeletonBody = params.parentNode.parentNode.parentNode.parentNode.children[1].children[0]

    //input para valor de FormacionAdicional
    let inputValueFormacionAdicional = params.parentNode.parentNode.parentNode.children[1].children[0].value

    //input para documento de FormacionAdicional
    let inputValueDocumentFormacionAdicional = params.parentNode.parentNode.parentNode.children[1].children[1].value

    //Contenedor card-body
    let cardBody = params.parentNode.parentNode.parentNode.parentNode.children[1];

    console.log(cardBody)

    //Contenedor principal1 (container-form)
    let containerForm = params.parentNode.parentNode.parentNode.parentNode.children[1].children[1];

    //ContenedorFormularioParent (form-action) //Se realiza Escritura de componente visualizador
    let containerFormShowFormacionAdicional = params.parentNode.parentNode.parentNode.parentNode.children[1].children[1].children[0]


    //validando datos para formulario....
    let formValidacion = await validacionFormularioFormADICIONAL(containerFormShowFormacionAdicional);
    let validacionDocs = await validacionDocumentoFormularioADICIONAL(containerFormShowFormacionAdicional);



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



        let response = await generacionObjetoADICIONAL(containerFormShowFormacionAdicional);
        //console.log(response)

        if (response.noError === "0"){


            let inputValueFormacionAdicionalSEcond = params.parentNode.parentNode.parentNode.children[1].children[0]

            //input para documento de FormacionAdicional
            let inputValueDocumentFormacionAdicionalSecond = params.parentNode.parentNode.parentNode.children[1].children[1]


            inputValueFormacionAdicional = response.idCurriculumFormacion; // valor de idCurriculumFormacion
            inputValueFormacionAdicionalSEcond.value = response.idCurriculumFormacion;

            let itemformacionADICIONAL = await getFormacionAdicional(inputValueFormacionAdicional);

            //console.log(itemformacionADICIONAL);
            dataFormacionAdicional.addNewItem(itemformacionADICIONAL);

            //obtener identificar de documento....

            let documentoIDActual = getObtenerIdentificadorDocumentoActual(containerFormShowFormacionAdicional);

            let idDocumentoFormacion = await mandarDocumentoFormacionADICIONAL(inputValueFormacionAdicional,containerFormShowFormacionAdicional, documentoIDActual)

            inputValueDocumentFormacionAdicional = idDocumentoFormacion.idDocumento // Valor de FormacionDocumento....
            inputValueDocumentFormacionAdicionalSecond.value = idDocumentoFormacion.idDocumento // Valor de FormacionDocumento....


            let dataDocuments = await getDocumentacioActual(inputValueFormacionAdicional);
            //console.log(dataDocuments)

            //Agregando elementos
            dataDocuments.forEach((itemDocumentos)=>{
                dataDocumentosFormaciones.addNewItem(itemDocumentos);
            })

            swal({
                title: "Atención",
                text: "Campos guardados correctamente",
                type: "success",
            });

            let formacionActual = dataFormacionAdicional.findItemByIdCurriculum(inputValueFormacionAdicional)

            containerFormShowFormacionAdicional.innerHTML =  visualizadorDatosFormacionAdicional(formacionActual)//Componente de Visualizacion

            skeletonHeader.hidden = true
            skeletonBody.hidden = true;

            containerButtons.hidden = false;
            containerForm.hidden = false;

            containerButtons.innerHTML = btnsComponentEditaFirstFormacionAdicional();

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



const eliminarFormularioFormacionAdicional = (params)=>{
    console.log("Eliminando formularios");
    let containerGeneralFormacionAdicional = params.parentNode.parentNode.parentNode.parentNode.parentNode

    containerGeneralFormacionAdicional.remove();
    /*//Contenedor de botones
    let containerButtons = params.parentNode.parentNode;

    //SkeletondeHeader (Contenedor)
    let skeletonHeader = params.parentNode.parentNode.parentNode.parentNode.children[0].children[0]
    //SkeletonBody (Contenedor)
    let skeletonBody = params.parentNode.parentNode.parentNode.parentNode.children[1].children[0]

    //input para valor de FormacionAdicional
    let inputValueFormacionAdicional = params.parentNode.parentNode.parentNode.children[1].children[0].value

    //input para documento de FormacionAdicional
    let inputValueDocumentFormacionAdicional = params.parentNode.parentNode.parentNode.children[1].children[1].value

    //Contenedor card-body
    let cardBody = params.parentNode.parentNode.parentNode.parentNode.children[1];

    //Contenedor principal1 (container-form)
    let containerForm = params.parentNode.parentNode.parentNode.parentNode.children[1].children[1];

    //ContenedorFormularioParent (form-action) //Se realiza Escritura de componente visualizador
    let containerFormShowFormacionAdicional = params.parentNode.parentNode.parentNode.parentNode.children[1].children[1].children[0]*/

}




const validacionFormularioFormADICIONAL = async(item)=>{

    let form_data = $('#' + item.id).serializeJSON();
    //console.log(form_data);

    return form_data.tipoCapacitacion === undefined
        ||form_data.duracionVigencia.trim() === ''
        ||form_data.fechaFormacion.trim() === ''
        ||form_data.institucionFormacion.trim() === ''
        ||form_data.nombreCapacitacion.trim() === ''
        ||form_data.tipoDocumento === undefined

    //return form_data.tipo=== undefined || form_data.inicioVigencia=== ''|| form_data.terminoVigencia=== '';
}


const validacionDocumentoFormularioADICIONAL = async(item) => {

    //let itemInputDocu = item.children[0].children[0].children[3].children[1].children[1].children[0];

    let itemInputDocu = item.children[0].children[3].children[1].children[1].children[1].children[0]

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


const generacionObjetoADICIONAL= async(item)=>{

    let form_data = $('#' + item.id).serializeJSON();


    let tipoCapacitacion = form_data.tipoCapacitacion
    let duracionVigencia = form_data.duracionVigencia
    let fechaFormacion = form_data.fechaFormacion
    let institucionFormacion =  form_data.institucionFormacion
    let nombreCapacitacion =  form_data.nombreCapacitacion
    let tipoDocumento =  form_data.tipoDocumento

    let array = [];
    let object = {
         tipoCapacitacion: tipoCapacitacion
        ,duracionVigencia:duracionVigencia
        ,fechaFormacion:fechaFormacion
        ,institucionFormacion:institucionFormacion
        ,nombreCapacitacion:nombreCapacitacion
        ,tipoDocumento:tipoDocumento

    };


    array.push(object);
    let data = JSON.stringify(array);

    //console.log(data)
    return await getDataFromServerHidden('definirFormacionAdicional','POST',data)


}


const generacionObjetoADICIONALUpdate= async(item, idCurriculumFo)=>{

    let form_data = $('#' + item.id).serializeJSON();


    let tipoCapacitacion = form_data.tipoCapacitacion
    let duracionVigencia = form_data.duracionVigencia
    let fechaFormacion = form_data.fechaFormacion
    let institucionFormacion =  form_data.institucionFormacion
    let nombreCapacitacion =  form_data.nombreCapacitacion
    let tipoDocumento =  form_data.tipoDocumento

    let array = [];
    let object = {
        tipoCapacitacion: tipoCapacitacion
        ,duracionVigencia:duracionVigencia
        ,fechaFormacion:fechaFormacion
        ,institucionFormacion:institucionFormacion
        ,nombreCapacitacion:nombreCapacitacion
        ,tipoDocumento:tipoDocumento
        ,idCurriculumFormacion: idCurriculumFo
    };

    array.push(object);
    let data = JSON.stringify(array);


    return await getDataFromServerHidden('actualizarFormacionAdicional','POST',data)

}


function editarFormularioFormacionAdicional(params) {

    console.log("Editando datos");

    //Contenedor de botones
    let containerButtons = params.parentNode.parentNode;


    //SkeletondeHeader (Contenedor)
    let skeletonHeader = params.parentNode.parentNode.parentNode.parentNode.children[0].children[0]
    //SkeletonBody (Contenedor)
    let skeletonBody = params.parentNode.parentNode.parentNode.parentNode.children[1].children[0]

    //input para valor de FormacionAdicional
    let inputValueFormacionAdicional = params.parentNode.parentNode.parentNode.children[1].children[0].value

    console.log(inputValueFormacionAdicional)

    //input para documento de FormacionAdicional
    let inputValueDocumentFormacionAdicional = params.parentNode.parentNode.parentNode.children[1].children[1].value

    console.log(inputValueDocumentFormacionAdicional)

    //Contenedor card-body
    let cardBody = params.parentNode.parentNode.parentNode.parentNode.children[1];

    //Contenedor principal1 (container-form)
    let containerForm = params.parentNode.parentNode.parentNode.parentNode.children[1].children[1];

    //ContenedorFormularioParent (form-action) //Se realiza Escritura de componente visualizador

    let containerFormShowFormacionAdicional = params.parentNode.parentNode.parentNode.parentNode.children[1].children[1].children[0]


    containerFormShowFormacionAdicional.innerHTML =  formularioNuevoFormacionAdicional()//Componente de Visualizacion

    //agregando Botones para editar
    containerButtons.innerHTML = btnsComponentEditaCancelaFirstFormacionAdicional();
    //agregarDatePickerNoMayor('fechaFormacion')
    //agregarDatePicker('fechaFormacion')
    agregarDatePickerFormacionAdicional('fechaFormacion')

}

async function guardarEdicionFormacionAdicional(params) {

    console.log("Guardando datos en edicion");

    //Contenedor de botones
    let containerButtons = params.parentNode.parentNode;


    //SkeletondeHeader (Contenedor)
    let skeletonHeader = params.parentNode.parentNode.parentNode.parentNode.children[0].children[0]
    //SkeletonBody (Contenedor)
    let skeletonBody = params.parentNode.parentNode.parentNode.parentNode.children[1].children[0]

    //input para valor de FormacionAdicional
    let inputValueFormacionAdicional = params.parentNode.parentNode.parentNode.children[1].children[0].value

    //input para documento de FormacionAdicional
    let inputValueDocumentFormacionAdicional = params.parentNode.parentNode.parentNode.children[1].children[1].value

    //Contenedor card-body
    let cardBody = params.parentNode.parentNode.parentNode.parentNode.children[1];

    //Contenedor principal1 (container-form)
    let containerForm = params.parentNode.parentNode.parentNode.parentNode.children[1].children[1];

    //ContenedorFormularioParent (form-action) //Se realiza Escritura de componente visualizador

    let containerFormShowFormacionAdicional = params.parentNode.parentNode.parentNode.parentNode.children[1].children[1].children[0]


    //En esta parte va la edicion

    let formValidacion = await validacionFormularioFormADICIONAL(containerFormShowFormacionAdicional);
    let validacionDocs = await validacionDocumentoFormularioADICIONAL(containerFormShowFormacionAdicional);



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

        let response = await generacionObjetoADICIONALUpdate(containerFormShowFormacionAdicional,idCurriculumFo)
        console.log(response)
        if (response.noError === "0"){




            let itemformacionADICIONAL = await getFormacionAdicional(idCurriculumFo);

            //console.log(itemformacionADICIONAL);

            //console.log(dataFormacionAdicional.findItemByIdCurriculum(idCurriculumFo))

            dataFormacionAdicional.replaceItemByIdCurriculumFormacion(idCurriculumFo,itemformacionADICIONAL);

            console.log("------Documentos antes de actualizar")

            let idTipoDocumentoAnterior = dataDocumentosFormaciones.findItemByIdDocument(idDocument)


            let idTipoDocumetnoBefore = idTipoDocumentoAnterior.idTipoDocumento;

            let documentoActualTIPO = getObtenerIdentificadorDocumentoActual(containerFormShowFormacionAdicional)



            let updateDocumento = await actualizarDocumentoFormacionADICIONAL(idCurriculumFo,idDocument,containerFormShowFormacionAdicional, idTipoDocumetnoBefore, documentoActualTIPO)
            console.log("------Update doc")
            console.log(updateDocumento)



            //DOcumento actual

            console.log(dataDocumentosFormaciones.findItemByIdDocument(idDocument))


            let documentoFormacionActual = await getDocumentacioActual(idCurriculumFo)
            let newItem = documentoFormacionActual[0]
            //dataDocumentosFormaciones.replaceItemByIdDocument(idDocument,newItem)
            console.log("********")
            console.log(newItem)//Nuevo item
            console.log("********")
            //dataDocumentosFormaciones.addNewItem(newItem);
            dataDocumentosFormaciones.replaceItemByIdDocument(idDocument,newItem)

            console.log(dataDocumentosFormaciones.findItemByIdDocument(idDocument))

            //console.log(dataDocumentosFormaciones.findItemByIdDocument(idDocument))

            swal({
                title: "Atención",
                text: "Campos guardados correctamente",
                type: "success",
            });


            skeletonHeader.hidden = true
            skeletonBody.hidden = true;

            containerButtons.hidden = false;
            containerForm.hidden = false;

            let formacionActual = dataFormacionAdicional.findItemByIdCurriculum(inputValueFormacionAdicional)

            containerFormShowFormacionAdicional.innerHTML =  visualizadorDatosFormacionAdicional(formacionActual)//Componente de Visualizacion
            containerButtons.innerHTML = btnsComponentEditaFirstFormacionAdicional();




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


function cancelarEditarFormularioFormacionAdicional(params) {

    console.log("Cancelando edicion de datos");
    //Contenedor de botones
    let containerButtons = params.parentNode.parentNode;


    //SkeletondeHeader (Contenedor)
    let skeletonHeader = params.parentNode.parentNode.parentNode.parentNode.children[0].children[0]
    //SkeletonBody (Contenedor)
    let skeletonBody = params.parentNode.parentNode.parentNode.parentNode.children[1].children[0]

    //input para valor de FormacionAdicional
    let inputValueFormacionAdicional = params.parentNode.parentNode.parentNode.children[1].children[0].value

    //input para documento de FormacionAdicional
    let inputValueDocumentFormacionAdicional = params.parentNode.parentNode.parentNode.children[1].children[1].value

    //Contenedor card-body
    let cardBody = params.parentNode.parentNode.parentNode.parentNode.children[1];

    //Contenedor principal1 (container-form)
    let containerForm = params.parentNode.parentNode.parentNode.parentNode.children[1].children[1];

    //ContenedorFormularioParent (form-action) //Se realiza Escritura de componente visualizador

    let containerFormShowFormacionAdicional = params.parentNode.parentNode.parentNode.parentNode.children[1].children[1].children[0]

    let formacionActual = dataFormacionAdicional.findItemByIdCurriculum(inputValueFormacionAdicional)

    containerFormShowFormacionAdicional.innerHTML =  visualizadorDatosFormacionAdicional(formacionActual)//Componente de Visualizacion

    //agregando Botones para editar
    containerButtons.innerHTML = btnsComponentEditaFirstFormacionAdicional();
}



//Acciones para escribir o sobresscribir en componente dado......
const agregarNuevoElementoFormacionAdicional = (params) => {

    //Buscando elemento origen....

    $("#formacionAdicionalContainer").prepend(componenteInicialBaseFormacionAdicional())

    //agregarDatePickerNoMayor('fechaFormacion')
    //agregarDatePicker('fechaFormacion')
    agregarDatePickerFormacionAdicional('fechaFormacion')
}




/*
function verificadorFormacionCientificaFormacionAdicional(perfilChkADICIONAL) {

    let origin = document.getElementById('FormacionAdicional');

    if(perfilChkADICIONAL.checked){
        origin.innerHTML = componenteInicialBaseFormacionAdicional();
        agregarDatePicker('inicioVigenciaADICIONAL')
        agregarDatePickerNoMayor('terminoVigenciaADICIONAL')
    }else{
        origin.innerHTML = "";
    }
}
*/



function obtenerFormacionAdicional(itemFormacion) {

    let j = Math.floor(Math.random() * 100000);

    let obtenerDocumentacion = dataDocumentosFormaciones.findItemByIdCurriculum(itemFormacion.idCurriculumFormacion)
    let itemDoc = obtenerDocumentacion[0];



    return `<div class="container" id="showinfoFormacionAdicional">
    <div class="formacionFormacionAdicional">
        <div class="card  card-formacion-academica card-formacion-FormacionAdicional" id="card-formacion-FormacionAdicional">
            <div class="card-header">

                <div class="container-skeleton-FormacionAdicional-BodyCard" hidden>
                    <span class="skeleton-loader"></span>
                </div>

                <div id="values" hidden>
                    <input type="text" name="valueIDCF" id="valueIDCF" hidden disabled value="${itemFormacion.idCurriculumFormacion}">
                    <input type="text" name="valueIDoc" id="valueIDoc" hidden disabled value="${itemDoc === undefined ? '0000': itemDoc.idDocumento}">
                </div>

                <div class="card-buttons">

                        ${itemDoc === undefined ? '' : btnsComponentEditaFirstFormacionAdicionalMOSTRAR(itemFormacion)}


                </div>
            </div>

            <div class="card-body card-body-back" id="card-componentBody"  >

                <div class="container-skeleton-FormacionAdicional-BodyCard" hidden>
                    <div class="skeleton-section-content">
                        <span class="teasting2">
                        </span>
                    </div>
                </div>

                <div class="container-form">

                    <form action="" name="formacion-FormacionAdicional-form${j}" id="formacion-FormacionAdicional-form${j}">

                            <!--Formulario/Info-->
                        ${visualizadorDatosFormacionAdicional(itemFormacion)}

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



async function mostrarFormulariosFormacionAdicional(){

    let data = await getDataFromServerHidden('getListadoFormacionAdicional','GET');
    //registrando todos los items
    data.forEach((item)=>{
        dataFormacionAdicional.addNewItem(item);
    })

    let dataAdicionalHTML = "";
    data.forEach((items)=>{
        dataAdicionalHTML += obtenerFormacionAdicional(items);

    })

    $("#formacionAdicionalContainer").prepend(dataAdicionalHTML);

}


const showFormacionesAdicionales = async ()=>{

    await mostrarFormulariosFormacionAdicional();

    visibilityComponent('contenedorSkeletonFrmAdicional', true)


    visibilityComponent('titlegralOptionsFormacionAdicional', false)
    visibilityComponent('containerFormacionAdicional', false)
    visibilityComponent('formacionAdicionalContainer', false)
}
