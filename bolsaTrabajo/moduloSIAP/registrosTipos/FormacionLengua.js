





//////////!************************INICIA FORMACION

function componenteInicialBaseFormacionLengua(params) {

    let j = Math.floor(Math.random() * 100000);

    return `<div class="container" id="showinfoFormacionLengua">
    <div class="formacionFormacionLengua">
        <div class="card  card-formacion-academica card-formacion-FormacionLengua" id="card-formacion-FormacionLengua">
            <div class="card-header">

                <div class="container-skeleton-FormacionLengua-BodyCard" hidden>
                    <span class="skeleton-loader"></span>
                </div>

                <div id="values" hidden>
                    <input type="text" name="valueIDCF" id="valueIDCF" hidden disabled value="">
                    <input type="text" name="valueIDoc" id="valueIDoc" hidden disabled value="">

                </div>

                <div class="card-buttons">
                    ${btnsComponentGuardarFirstFormacionLengua()}
                </div>


            </div>

            <div class="card-body card-body-back" id="card-componentBody" >

                <div class="container-skeleton-FormacionLengua-BodyCard" hidden>
                    <div class="skeleton-section-content">
                        <span class="teasting2">
                        </span>
                    </div>
                </div>

                <div class="container-form">

                    <form action="" name="formacion-FormacionLengua-form${j}" id="formacion-FormacionLengua-form${j}">

                            <!--Formulario/Info-->
                        ${formularioNuevoFormacionLengua()}

                    </form>

                    <div class="container-form-docs" id="container-form-docs${j}">

                    </div>
                </div>
            </div>
        </div>
    </div>

</div>`;
}

//!****************INICIA BOTONES DE ACCIONES FormacionLengua ********************!/


function eliminarFormularioFormacionLengua(element) {
    let iitem = element.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode;
    iitem.remove();

}

//Guarda cambios de formaulario Inicial
function btnsComponentGuardarFirstFormacionLengua(params) {


    let j = Math.floor(Math.random() * 100000);
    return `
        <div id="guardarFormacionLengua${j}" class="guardarFormacionLengua">
            <button type="button" class="btn btn-outline-secondary btn-sm btns-components-action" id="btn-doc-delete${j}" onclick="guardarFormularioFormacionLengua(this)"><i class="fas fa-save"></i> Guardar</button>
            <button type="button" class="btn btn-outline-secondary btn-sm btns-components-action" id="btn-doc-delete${j}" onclick="eliminarFormularioFormacionLengua(this)"><i class="fas fa-trash"></i> Eliminar</button>
        </div>
    `;
}

//Edita cambios de formulario Satisfactorio
function btnsComponentEditaFirstFormacionLengua(params) {

    let j = Math.floor(Math.random() * 100000);
    return `
    <div id="EditarFormacionLengua${j}" class="EditarFormacionLengua">
        <button type="button" class="btn btn-outline-secondary btn-sm btns-components-action" id="btn-doc-delete${j}" onclick="editarFormularioFormacionLengua(this)"><i class="fas fa-edit"></i> Editar</button>
    </div>

    `;
}

//Edita cambios de formulario Satisfactorio
function btnsComponentEditaCancelaFirstFormacionLengua(params) {

    let j = Math.floor(Math.random() * 100000);
    return `
    <div id="EditarCancelarFormacionLengua${j}" class="EditarCancelarFormacionLengua">
        <button type="button" class="btn btn-outline-secondary btn-sm btns-components-action" id="btn-doc-delete${j}" onclick="guardarEdicionFormacionLengua(this)"><i class="fas fa-save"></i> Guardar</button>
        <button type="button" class="btn btn-outline-secondary btn-sm btns-components-action" id="btn-doc-delete${j}" onclick="cancelarEditarFormularioFormacionLengua(this)"><i class="fas fa-times-circle"></i> Cancelar</button>
    </div>
    `;
}

//!****************TERMINA BOTONES DE ACCIONES FormacionLengua ********************!/


//Formulario inicial de FormacionLenguao ///Tener en cuenta de que se tiene que editar deacuerdo al formulario....
function formularioNuevoFormacionLengua(params) {

    return `
    <div>
        <div class="form-row">
            <div class="form-group col-md-4">
                <h6>Idioma:</h6>
                <select class="browser-default custom-select" name="idioma" id="idioma" onchange="generarTipoIdioma(this)">
                    <option selected="" disabled="">Seleccione</option>
                    <option value="1">Inglés</option>
                    <option value="2">Francés</option>
                    <option value="3">Alemán</option>
                    <option value="4">Chino</option>
                    <option value="5">Japonés</option>
                    <option value="6">Italiano</option>
                    <option value="7">Español</option>
                    <option value="8">Portugués</option>
                </select>


            </div>
            <div class="form-group col-md-4">

                <h6>Tipo de certificación:</h6>
                <select class="browser-default custom-select" name="tipoIdioma" id="tipoIdioma">
                    <option selected="" disabled="">Seleccione una opción</option>
                </select>

            </div>
            <div class="form-group col-md-4">
                <h6>Nivel:</h6>
                <input type="text" class="form-control" name="nivelIdioma" id="nivelIdioma" oninput="eliminarEspacios(this)" autocomplete="off" >
            </div>

        </div>
        <div class="form-row">
            <div class="form-group col-md-4">
                <h6>Nombre de institución:</h6>
                <input type="text"  class="form-control" name="nombreDeInstitucion" id="nombreDeInstitucion" oninput="eliminarEspacios(this)" autocomplete="off" >

            </div>

            <div class="form-group col-md-4">
                <h6>Fecha:</h6>
                <input type="text"  class="form-control" name="fechaLenguaObtencion" id="fechaLenguaObtencion" oninput="eliminarEspacios(this)" autocomplete="off" readonly="">
            </div>

            <div class="form-group col-md-4">

                <h6>Evidencia:</h6>
                <div class="input-group">
                    <div class="input-group-prepend">
                        <span class="input-group-text" id="inputFileAgregar" name="inputFileAgregar"><i class="fa fa-file"></i></span>
                    </div>
                    <div class="custom-file">
                        <input type="file" class="custom-file-input" id="inputFileIdioma" name="inputFileIdioma" aria-describedby="inputGroupFileAddon01" lang="es" accept=".pdf" required="">
                        <label class="custom-file-label" for="inputFileIdioma" id="nombreArchivoCargar" name="nombreArchivoCargar">Buscar documento</label>
                    </div>
                </div>
            </div>
        </div>
    </div>
    `
}

function visualizadorDatosFormacionLengua(params) {


    return `
    <div>
        <div class="form-row text-center">
            <div class="form-group col-md-4">
                <h6>Idioma:</h6>
                <p>${params.idioma}</p>
            </div>

            <div class="form-group col-md-4">
                <h6>Tipo de certificación:</h6>
                <p>${params.tipoCertificacion}</p>
            </div>

            <div class="form-group col-md-4">
                <h6>Nivel:</h6>
                <p>${params.nivel}</p>
            </div>
        </div>

        <div class="form-row text-center">
            <div class="form-group col-md-4">
                <h6>Nombre de institución:</h6>
                <p>${params.institucion}</p>
            </div>

            <div class="form-group col-md-4">
                <h6>Fecha:</h6>
                <p>${timeChangeToLocal(params.fecha)}</p>
            </div>


            <div class="form-group col-md-4">
                <h6>Evidencia:</h6>
                <p>${obtenerEnlaceDocumentoLENGUA(params)}</p>
            </div>
        </div>
    </div>
    `
}

const obtenerEnlaceDocumentoLENGUA = (item) => {

    let idCurriculumDocs  = item.idCurriculumFormacion
    let documento = dataDocumentosFormaciones.findItemByIdCurriculum(idCurriculumDocs)
    let objROUTES = ROUTES_OBJ.getITEMSROUTE();

    try {
        let documentoIndividual = documento[0];
        //return `<a target="_blank" href="/prospectoAdmin/documentoFormacionObtener/${documentoIndividual.idDocumento}">${documentoIndividual.archivo}</a>`;
        return `<a target="_blank" href="${objROUTES.itemRouteDocFormacionGral}/${documentoIndividual.idDocumento}">${documentoIndividual.archivo}</a>`;
    }catch (e){

        return `<p>SIN DOCUMENTO</p>`
    }
}


//!************TERMINA COMPONENTES DE FormacionLengua

//!************Inicia Actions de FormacionLengua
const mandarDocumentoFormacion = async (idCurriculumFormacion, contenedorForm)=>{

    let itemInputDocu = contenedorForm.children[0].children[1].children[2].children[1].children[1].children[0]
    let formData = new FormData();

    formData.append('file',itemInputDocu.files[0]);
    formData.append('inputname',itemInputDocu.value);
    formData.append('idCurriculumFormacion',idCurriculumFormacion);

    return await sendFilePDFFREE(formData,'setDocumentoFormacionLenguas');
}

const actualizarDocumentoFormacion = async (idCurriculumFormacion,idDocumento, contenedorForm)=>{

    let itemInputDocu = contenedorForm.children[0].children[1].children[2].children[1].children[1].children[0]
    let formData = new FormData();

    formData.append('file',itemInputDocu.files[0]);
    formData.append('inputname',itemInputDocu.value);
    formData.append('idCurriculumFormacion',idCurriculumFormacion);
    formData.append('idDocumento',idDocumento);

    return await sendFilePDFFREE(formData,'actualizarDocumentoFormacionLENGUA');
}

const getFormacionLengua =async (item) =>{
    let dataa = await getDataFromServerHidden(`getFormacionLenguaIndividual/${item}`,'POST')
    return dataa[0];
}

async function guardarFormularioFormacionLengua(params) {
    console.log("Guardando datos");

    //Contenedor de botones
    let containerButtons = params.parentNode.parentNode;

    //SkeletondeHeader (Contenedor)
    let skeletonHeader = params.parentNode.parentNode.parentNode.parentNode.children[0].children[0]
    //SkeletonBody (Contenedor)
    let skeletonBody = params.parentNode.parentNode.parentNode.parentNode.children[1].children[0]

    //input para valor de FormacionLengua
    let inputValueFormacionLengua = params.parentNode.parentNode.parentNode.children[1].children[0].value

    //input para documento de FormacionLengua
    let inputValueDocumentFormacionLengua = params.parentNode.parentNode.parentNode.children[1].children[1].value

    //Contenedor card-body
    let cardBody = params.parentNode.parentNode.parentNode.parentNode.children[1];

    //console.log(cardBody)

    //Contenedor principal1 (container-form)
    let containerForm = params.parentNode.parentNode.parentNode.parentNode.children[1].children[1];

    //ContenedorFormularioParent (form-action) //Se realiza Escritura de componente visualizador
    let containerFormShowFormacionLengua = params.parentNode.parentNode.parentNode.parentNode.children[1].children[1].children[0]


    //validando datos para formulario....
    let formValidacion = await validacionFormularioForm(containerFormShowFormacionLengua);
    let validacionDocs = await validacionDocumentoFormulario(containerFormShowFormacionLengua);
    //console.log(validacionDocs)
    //let validacionDocs = await validacionDocumentoFormulario(containerFormShowFormacionLengua);


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



        let response = await generacionObjeto(containerFormShowFormacionLengua);
        console.log(response)

        if (response.noError === "0"){


            let inputValueFormacionLenguaSEcond = params.parentNode.parentNode.parentNode.children[1].children[0]

            //input para documento de FormacionLengua
            let inputValueDocumentFormacionLenguaSecond = params.parentNode.parentNode.parentNode.children[1].children[1]


            inputValueFormacionLengua = response.idCurriculumFormacion; // valor de idCurriculumFormacion
            inputValueFormacionLenguaSEcond.value = response.idCurriculumFormacion;

            let itemformacion = await getFormacionLengua(inputValueFormacionLengua);

            //console.log(itemformacion);
            dataFormacionLengua.addNewItem(itemformacion);

            let idDocumentoFormacion = await mandarDocumentoFormacion(inputValueFormacionLengua,containerFormShowFormacionLengua)

            inputValueDocumentFormacionLengua = idDocumentoFormacion.idDocumento // Valor de FormacionDocumento....
            inputValueDocumentFormacionLenguaSecond.value = idDocumentoFormacion.idDocumento // Valor de FormacionDocumento....


            let dataDocuments = await getDocumentacioActual(inputValueFormacionLengua);
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

            let formacionActual = dataFormacionLengua.findItemByIdCurriculum(inputValueFormacionLengua)

            containerFormShowFormacionLengua.innerHTML =  visualizadorDatosFormacionLengua(formacionActual)//Componente de Visualizacion

            skeletonHeader.hidden = true
            skeletonBody.hidden = true;

            containerButtons.hidden = false;
            containerForm.hidden = false;

            containerButtons.innerHTML = btnsComponentEditaFirstFormacionLengua();

            //console.log(inputValueFormacionLenguaSEcond)
            //console.log(inputValueFormacionLenguaSEcond.value)


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

//validacion de formulario, el cual incluye fichero...

const validacionFormularioForm = async(item)=>{

    let form_data = $('#' + item.id).serializeJSON();
    //console.log(form_data)
    //return form_data.tipo=== undefined || form_data.inicioVigencia=== ''|| form_data.terminoVigencia=== '';

    return form_data.idioma === undefined
        || form_data.tipoIdioma === undefined
        || form_data.nivelIdioma === ''
        || form_data.nombreDeInstitucion === ''
        || form_data.fechaLenguaObtencion === ''
}

const validacionDocumentoFormulario = async(item) => {

    //let itemInputDocu = item.children[0].children[0].children[3].children[1].children[1].children[0];
    let itemInputDocu = item.children[0].children[1].children[2].children[1].children[1].children[0]


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

const generacionObjeto= async(item)=>{

    let form_data = $('#' + item.id).serializeJSON();

    let idioma = form_data.idioma
    let tipoidioma = form_data.tipoIdioma
    let nivelidioma = form_data.nivelIdioma.trim();
    let nombreInstitucion = form_data.nombreDeInstitucion.trim()
    let fechaObtencion = form_data.fechaLenguaObtencion.trim()

    //let itemInputDocu = item.children[0].children[0].children[3].children[1].children[1].children[0];

    let array = [];
    let object = {
         idIdioma: idioma
        ,idTipoIdioma : tipoidioma
        ,nivelIdiomaa : nivelidioma
        ,nombreInstitucion : nombreInstitucion
        ,fechaObtencion : fechaObtencion
    };


    array.push(object);
    let data = JSON.stringify(array);


    return await getDataFromServerHidden('definirFormacionLenguas','POST',data)

}

const generacionObjetoUpdate= async(item, idCurriculumFo)=>{

    let form_data = $('#' + item.id).serializeJSON();

    let idioma = form_data.idioma
    let tipoidioma = form_data.tipoIdioma
    let nivelidioma = form_data.nivelIdioma.trim();
    let nombreInstitucion = form_data.nombreDeInstitucion.trim()
    let fechaObtencion = form_data.fechaLenguaObtencion.trim()

    //let itemInputDocu = item.children[0].children[0].children[3].children[1].children[1].children[0];

    let array = [];
    let object = {
         idIdioma: idioma
        ,idTipoIdioma : tipoidioma
        ,nivelIdiomaa : nivelidioma
        ,nombreInstitucion : nombreInstitucion
        ,fechaObtencion : fechaObtencion
        ,idCurriculumFormacion: idCurriculumFo
    };


    array.push(object);
    let data = JSON.stringify(array);


    return await getDataFromServerHidden('actualizarFormacionLenguas','POST',data)

}

function editarFormularioFormacionLengua(params) {

    console.log("Editando datos");

    //Contenedor de botones
    let containerButtons = params.parentNode.parentNode;


    //SkeletondeHeader (Contenedor)
    let skeletonHeader = params.parentNode.parentNode.parentNode.parentNode.children[0].children[0]
    //SkeletonBody (Contenedor)
    let skeletonBody = params.parentNode.parentNode.parentNode.parentNode.children[1].children[0]

    //input para valor de FormacionLengua
    let inputValueFormacionLengua = params.parentNode.parentNode.parentNode.children[1].children[0].value

    //console.log(inputValueFormacionLengua)

    //input para documento de FormacionLengua
    let inputValueDocumentFormacionLengua = params.parentNode.parentNode.parentNode.children[1].children[1].value

    //console.log(inputValueDocumentFormacionLengua)

    //Contenedor card-body
    let cardBody = params.parentNode.parentNode.parentNode.parentNode.children[1];

    //Contenedor principal1 (container-form)
    let containerForm = params.parentNode.parentNode.parentNode.parentNode.children[1].children[1];

    //ContenedorFormularioParent (form-action) //Se realiza Escritura de componente visualizador

    let containerFormShowFormacionLengua = params.parentNode.parentNode.parentNode.parentNode.children[1].children[1].children[0]


    containerFormShowFormacionLengua.innerHTML =  formularioNuevoFormacionLengua()//Componente de Visualizacion

    //agregando Botones para editar
    containerButtons.innerHTML = btnsComponentEditaCancelaFirstFormacionLengua();
    agregarDatePicker('fechaLenguaObtencion')


}

async function guardarEdicionFormacionLengua(params) {

    console.log("Guardando datos en edicion");

    //Contenedor de botones
    let containerButtons = params.parentNode.parentNode;


    //SkeletondeHeader (Contenedor)
    let skeletonHeader = params.parentNode.parentNode.parentNode.parentNode.children[0].children[0]
    //SkeletonBody (Contenedor)
    let skeletonBody = params.parentNode.parentNode.parentNode.parentNode.children[1].children[0]

    //input para valor de FormacionLengua
    let inputValueFormacionLengua = params.parentNode.parentNode.parentNode.children[1].children[0].value

    //input para documento de FormacionLengua
    let inputValueDocumentFormacionLengua = params.parentNode.parentNode.parentNode.children[1].children[1].value

    //Contenedor card-body
    let cardBody = params.parentNode.parentNode.parentNode.parentNode.children[1];

    //Contenedor principal1 (container-form)
    let containerForm = params.parentNode.parentNode.parentNode.parentNode.children[1].children[1];

    //ContenedorFormularioParent (form-action) //Se realiza Escritura de componente visualizador

    let containerFormShowFormacionLengua = params.parentNode.parentNode.parentNode.parentNode.children[1].children[1].children[0]


    //En esta parte va la edicion

    let formValidacion = await validacionFormularioForm(containerFormShowFormacionLengua);
    let validacionDocs = await validacionDocumentoFormulario(containerFormShowFormacionLengua);


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

        let response = await generacionObjetoUpdate(containerFormShowFormacionLengua,idCurriculumFo)
        //console.log(response)
        if (response.noError === "0"){




            let itemformacion = await getFormacionLengua(idCurriculumFo);

            //console.log(itemformacion);

            //console.log(dataFormacionLengua.findItemByIdCurriculum(idCurriculumFo))

            dataFormacionLengua.replaceItemByIdCurriculumFormacion(idCurriculumFo,itemformacion);
            let updateDocumento = await actualizarDocumentoFormacion(idCurriculumFo,idDocument,containerFormShowFormacionLengua)
            console.log("------Update doc")
            //console.log(updateDocumento)



            //DOcumento actual

            //console.log(dataDocumentosFormaciones.findItemByIdDocument(idDocument))


            let documentoFormacionActual = await getDocumentacioActual(idCurriculumFo)
            let newItem = documentoFormacionActual[0]
            //dataDocumentosFormaciones.replaceItemByIdDocument(idDocument,newItem)
            console.log("********")
            console.log(newItem)//Nuevo item
            console.log("********")
            //dataDocumentosFormaciones.addNewItem(newItem);
            dataDocumentosFormaciones.replaceItemByIdDocument(idDocument,newItem)

            //console.log(dataDocumentosFormaciones.findItemByIdDocument(idDocument))

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

            let formacionActual = dataFormacionLengua.findItemByIdCurriculum(inputValueFormacionLengua)

            containerFormShowFormacionLengua.innerHTML =  visualizadorDatosFormacionLengua(formacionActual)//Componente de Visualizacion
            containerButtons.innerHTML = btnsComponentEditaFirstFormacionLengua();

            let contenedorPreginta = document.getElementById('FormacionLenguaCHK');


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


async function generarTipoIdioma(element){

    //Number from current item
    let itemSelected = element.options[element.selectedIndex].value;
    let itemSelect = element.parentNode.parentNode.children[1].children[1];
    let data = await obtenerTipodeIdioma(itemSelected)
    let stringData = "";
    stringData+= `<option selected disabled>Seleccione una opción</option>`;
    data.forEach((item)=>{
        stringData+= `<option value="${item.idIdiomaTipoCertificacion}">${item.tipoCertificacion}</option>`
    })
    itemSelect.innerHTML = stringData;

}


async function obtenerTipodeIdioma(numeroTipoIdioma) {

    return await getDataFromServerHidden(`obtenerTipoIdiomas/${numeroTipoIdioma}`, 'POST');
}

function cancelarEditarFormularioFormacionLengua(params) {

    console.log("Cancelando edicion de datos");
    //Contenedor de botones
    let containerButtons = params.parentNode.parentNode;


    //SkeletondeHeader (Contenedor)
    let skeletonHeader = params.parentNode.parentNode.parentNode.parentNode.children[0].children[0]
    //SkeletonBody (Contenedor)
    let skeletonBody = params.parentNode.parentNode.parentNode.parentNode.children[1].children[0]

    //input para valor de FormacionLengua
    let inputValueFormacionLengua = params.parentNode.parentNode.parentNode.children[1].children[0].value

    //input para documento de FormacionLengua
    let inputValueDocumentFormacionLengua = params.parentNode.parentNode.parentNode.children[1].children[1].value

    //Contenedor card-body
    let cardBody = params.parentNode.parentNode.parentNode.parentNode.children[1];

    //Contenedor principal1 (container-form)
    let containerForm = params.parentNode.parentNode.parentNode.parentNode.children[1].children[1];

    //ContenedorFormularioParent (form-action) //Se realiza Escritura de componente visualizador

    let containerFormShowFormacionLengua = params.parentNode.parentNode.parentNode.parentNode.children[1].children[1].children[0]

    let formacionActual = dataFormacionLengua.findItemByIdCurriculum(inputValueFormacionLengua)

    containerFormShowFormacionLengua.innerHTML =  visualizadorDatosFormacionLengua(formacionActual)//Componente de Visualizacion

    //agregando Botones para editar
    containerButtons.innerHTML = btnsComponentEditaFirstFormacionLengua();
}

//Acciones para escribir o sobresscribir en componente dado......


function obtenerFormacionLengua(itemFormacion) {

    let j = Math.floor(Math.random() * 100000);

    let obtenerDocumentacion = dataDocumentosFormaciones.findItemByIdCurriculum(itemFormacion.idCurriculumFormacion)
    let itemDoc = obtenerDocumentacion[0];



    return `<div class="container" id="showinfoFormacionLengua">
    <div class="formacionFormacionLengua">
        <div class="card  card-formacion-academica card-formacion-FormacionLengua" id="card-formacion-FormacionLengua">
            <div class="card-header">

                <div class="container-skeleton-FormacionLengua-BodyCard" hidden>
                    <span class="skeleton-loader"></span>
                </div>

                <div id="values" hidden>
                    <input type="text" name="valueIDCF" id="valueIDCF" hidden disabled value="${itemFormacion.idCurriculumFormacion}">
                    <input type="text" name="valueIDoc" id="valueIDoc" hidden disabled value="${itemDoc === undefined ? '0000': itemDoc.idDocumento}">
                </div>

                <div class="card-buttons">


                </div>
            </div>

            <div class="card-body card-body-back" id="card-componentBody" >

                <div class="container-skeleton-FormacionLengua-BodyCard" hidden>
                    <div class="skeleton-section-content">
                        <span class="teasting2">
                        </span>
                    </div>
                </div>

                <div class="container-form">

                    <form action="" name="formacion-FormacionLengua-form${j}" id="formacion-FormacionLengua-form${j}">
                            <!--Formulario/Info-->
                        ${visualizadorDatosFormacionLengua(itemFormacion)}

                    </form>

                    <div class="container-form-docs" id="container-form-docs${j}">

                    </div>
                </div>
            </div>
        </div>
    </div>
</div>`;

}


function agregarNuevoLengua() {

    $("#FormacionLenguaContainer").prepend(componenteInicialBaseFormacionLengua())
    agregarDatePicker('fechaLenguaObtencion');

}


const mostrarFormularioFormacionIdioma = async () => {

    let idUser = document.getElementById('_idUnique').value;
    let data = await getDataFromServerHidden(`getListadoFormacionLenguas/${idUser}`,'GET')

    let dataFormacionIdiomaHTML = "";
    data.forEach((item)=>{
        dataFormacionLengua.addNewItem(item);
        dataFormacionIdiomaHTML+= obtenerFormacionLengua(item);
    });


    if (data.length>0){

        $("#FormacionLenguaContainer").append(dataFormacionIdiomaHTML);

    }else{
        let dataSN = `<div class="text-center">
                        <h5 style="font-weight: 310">Datos no disponibles.</h5>
                    </div>`

        $("#FormacionLenguaContainer").prepend(dataSN);
    }

}


const showFormacionesLinguisticas = async() =>{

    await mostrarFormularioFormacionIdioma() // Se realiza escritura de componentes en destino


    visibilityComponent('contenedorSkeletonFrmLengua', true)
    visibilityComponent('titlegralOptionsFormacionLengua', false)
    visibilityComponent('containerFormacionLengua', false)
    visibilityComponent('FormacionLenguaContainer', false)

}







