//
function componenteInicialBaseFormacionCientificaSNI(params) {

    let j = Math.floor(Math.random() * 100000);

    return `<div class="container" id="showinfoFormacionCientificaSNI">
    <div class="formacionFormacionCientificaSNI">
        <div class="card  card-formacion-academica card-formacion-FormacionCientificaSNI" id="card-formacion-FormacionCientificaSNI">
            <div class="card-header">

                <div class="container-skeleton-FormacionCientificaSNI-BodyCard" hidden>
                    <span class="skeleton-loader"></span>
                </div>

                <div id="values" hidden>
                    <input type="text" name="valueIDCF" id="valueIDCF" hidden disabled value="">
                    <input type="text" name="valueIDoc" id="valueIDoc" hidden disabled value="">

                </div>

                <div class="card-buttons">
                    ${btnsComponentGuardarFirstFormacionCientificaSNI()}
                </div>


            </div>

            <div class="card-body card-body-back" id="card-componentBody" >

                <div class="container-skeleton-FormacionCientificaSNI-BodyCard" hidden>
                    <div class="skeleton-section-content">
                        <span class="teasting2">
                        </span>
                    </div>
                </div>

                <div class="container-form">

                    <form action="" name="formacion-FormacionCientificaSNI-form${j}" id="formacion-FormacionCientificaSNI-form${j}">

                            <!--Formulario/Info-->
                        ${formularioNuevoFormacionCientificaSNI()}

                    </form>

                    <div class="container-form-docs" id="container-form-docs${j}">

                    </div>
                </div>
            </div>
        </div>
    </div>

</div>`;
}

//****************INICIA BOTONES DE ACCIONES FormacionCientificaSNI ********************/

//Guarda cambios de formaulario Inicial
function btnsComponentGuardarFirstFormacionCientificaSNI(params) {


    let j = Math.floor(Math.random() * 100000);
    return `
        <div id="guardarFormacionCientificaSNI${j}" class="guardarFormacionCientificaSNI">
            <button type="button" class="btn btn-outline-secondary btn-sm btns-components-action" id="btn-doc-delete${j}" onclick="guardarFormularioFormacionCientificaSNI(this)"><i class="fas fa-save"></i> Guardar</button>
        </div>
    `;
}

//Edita cambios de formulario Satisfactorio
function btnsComponentEditaFirstFormacionCientificaSNI(params) {

    let j = Math.floor(Math.random() * 100000);
    return `
    <div id="EditarFormacionCientificaSNI${j}" class="EditarFormacionCientificaSNI">
        <button type="button" class="btn btn-outline-secondary btn-sm btns-components-action" id="btn-doc-delete${j}" onclick="editarFormularioFormacionCientificaSNI(this)"><i class="fas fa-edit"></i> Editar</button>
    </div>

    `;
}

//Edita cambios de formulario Satisfactorio
function btnsComponentEditaCancelaFirstFormacionCientificaSNI(params) {

    let j = Math.floor(Math.random() * 100000);
    return `
    <div id="EditarCancelarFormacionCientificaSNI${j}" class="EditarCancelarFormacionCientificaSNI">
        <button type="button" class="btn btn-outline-secondary btn-sm btns-components-action" id="btn-doc-delete${j}" onclick="guardarEdicionFormacionCientificaSNI(this)"><i class="fas fa-save"></i> Guardar</button>
        <button type="button" class="btn btn-outline-secondary btn-sm btns-components-action" id="btn-doc-delete${j}" onclick="cancelarEditarFormularioFormacionCientificaSNI(this)"><i class="fas fa-times-circle"></i> Cancelar</button>
    </div>
    `;
}

//****************TERMINA BOTONES DE ACCIONES FormacionCientificaSNI ********************/

/*
1,Candidato a Investigador Nacional
2,Investigador Nacional Nivel I
3,Investigador Nacional Nivel II
4,Investigador Nacional Nivel III*/

//Formulario inicial de FormacionCientificaSNIo ///Tener en cuenta de que se tiene que editar deacuerdo al formulario....
function formularioNuevoFormacionCientificaSNI(params) {

    return `
    <div>
        <div class="form-row">
            <div class="form-group col-md-3">
                <h6>Tipo:</h6>
                <select class="browser-default custom-select" name="tipo" id="tipo">
                    <option selected="" disabled="">Seleccione</option>
                    <option value="1">Candidato a Investigador Nacional</option>
                    <option value="2">Investigador Nacional Nivel I</option>
                    <option value="3">Investigador Nacional Nivel II</option>
                    <option value="4">Investigador Nacional Nivel III</option>
                </select>

            </div>

            <div class="form-group col-md-3">
                <h6>Inicio de vigencia:</h6>
                <input type="text" maxlength="14" class="form-control" name="inicioVigencia" id="inicioVigenciaSNI" oninput="espaciosEnBlanco(this)" autocomplete="off" readonly="">
            </div>

            <div class="form-group col-md-3">
                <h6>Término de vigencia:</h6>
                <input type="text" maxlength="14" class="form-control" name="terminoVigencia" id="terminoVigenciaSNI" oninput="espaciosEnBlanco(this)" autocomplete="off" readonly="">
            </div>

            <div class="form-group col-md-3">

                <h6>Evidencia:</h6>
                <div class="input-group">
                    <div class="input-group-prepend">
                        <span class="input-group-text" id="inputFileAgregarSNI" name="inputFileAgregarSNI"><i class="fa fa-file"></i></span>
                    </div>
                    <div class="custom-file">
                        <input type="file" class="custom-file-input" id="inputFileSNI" name="inputFile" aria-describedby="inputGroupFileAddon01" lang="es" accept=".pdf" requiered="">
                        <label class="custom-file-label" for="inputFileSNI" id="nombreArchivoCargarSNI" name="nombreArchivoCargarSNI">Buscar documento</label>
                    </div>
                </div>
            </div>
        </div>
    </div>
    `
}

function visualizadorDatosFormacionCientificaSNI(params) {

    return `
    <div class="text-center">
        <div class="form-row">
            <div class="form-group col-md-3">
                <h6>Tipo:</h6>
                <p>${params.tipoPerfilCientificoDocente}</p>

            </div>

            <div class="form-group col-md-3">
                <h6>Inicio de vigencia:</h6>
                <p>${timeChangeToLocal(params.fechaInicio)}</p>
            </div>

            <div class="form-group col-md-3">
                <h6>Término de vigencia:</h6>
                <p>${timeChangeToLocal(params.fechaTermino)}</p>
            </div>

            <div class="form-group col-md-3">
                <h6>Evidencia:</h6>
                ${obtenerEnlaceDocumentoSNI(params)}
            </div>
        </div>
    </div>
    `
}

const obtenerEnlaceDocumentoSNI = (item) =>{
    //obtener datsode idCurriculumFormacion....
    let objROUTES = ROUTES_OBJ.getITEMSROUTE();

    let idCurriculumDocs  = item.idCurriculumFormacion

    let documento = dataDocumentosFormaciones.findItemByIdCurriculum(idCurriculumDocs)


    try {
        let documentoIndividual = documento[0];

        //Buscar en respositorioDocumento

        //return `<a target="_blank" href="/prospectoAdmin/documentoFormacionObtener/${documentoIndividual.idDocumento}">${documentoIndividual.archivo}</a>`;
        return `<a target="_blank" href="${objROUTES.itemRouteDocFormacionGral}/${documentoIndividual.idDocumento}">${documentoIndividual.archivo}</a>`;
    }catch (e){


        return `<p>SIN DOCUMENTO</p>`
    }


}

//************TERMINA COMPONENTES DE FormacionCientificaSNI

//************Inicia Actions de FormacionCientificaSNI

const mandarDocumentoFormacionSNI = async (idCurriculumFormacion, contenedorForm)=>{

    let itemInputDocu = contenedorForm.children[0].children[0].children[3].children[1].children[1].children[0];
    let formData = new FormData();

    formData.append('file',itemInputDocu.files[0]);
    formData.append('inputname',itemInputDocu.value);
    formData.append('idCurriculumFormacion',idCurriculumFormacion);

    return await sendFilePDFFREE(formData,'setDocumentoFormacionCientificaSNI');
}

const actualizarDocumentoFormacionSNI = async (idCurriculumFormacion,idDocumento, contenedorForm)=>{

    let itemInputDocu = contenedorForm.children[0].children[0].children[3].children[1].children[1].children[0];
    let formData = new FormData();

    formData.append('file',itemInputDocu.files[0]);
    formData.append('inputname',itemInputDocu.value);
    formData.append('idCurriculumFormacion',idCurriculumFormacion);
    formData.append('idDocumento',idDocumento);

    return await sendFilePDFFREE(formData,'actualizarDocumentoFormacionSNI');
}

const getFormacionCientificaSNI =async (item) =>{
    let dataa = await getDataFromServerHidden(`getFormacionCientificaSNIIndividual/${item}`,'POST')
    return dataa[0];
}

async function guardarFormularioFormacionCientificaSNI(params) {
    console.log("Guardando datos");

    //Contenedor de botones
    let containerButtons = params.parentNode.parentNode;

    //SkeletondeHeader (Contenedor)
    let skeletonHeader = params.parentNode.parentNode.parentNode.parentNode.children[0].children[0]
    //SkeletonBody (Contenedor)
    let skeletonBody = params.parentNode.parentNode.parentNode.parentNode.children[1].children[0]

    //input para valor de FormacionCientificaSNI
    let inputValueFormacionCientificaSNI = params.parentNode.parentNode.parentNode.children[1].children[0].value

    //input para documento de FormacionCientificaSNI
    let inputValueDocumentFormacionCientificaSNI = params.parentNode.parentNode.parentNode.children[1].children[1].value

    //Contenedor card-body
    let cardBody = params.parentNode.parentNode.parentNode.parentNode.children[1];

    console.log(cardBody)

    //Contenedor principal1 (container-form)
    let containerForm = params.parentNode.parentNode.parentNode.parentNode.children[1].children[1];

    //ContenedorFormularioParent (form-action) //Se realiza Escritura de componente visualizador
    let containerFormShowFormacionCientificaSNI = params.parentNode.parentNode.parentNode.parentNode.children[1].children[1].children[0]


    //validando datos para formulario....
    let formValidacion = await validacionFormularioFormSNI(containerFormShowFormacionCientificaSNI);
    let validacionDocs = await validacionDocumentoFormularioSNI(containerFormShowFormacionCientificaSNI);


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



        let response = await generacionObjetoSNI(containerFormShowFormacionCientificaSNI);
        console.log(response)

        if (response.noError === "0"){


            let inputValueFormacionCientificaSNISEcond = params.parentNode.parentNode.parentNode.children[1].children[0]

            //input para documento de FormacionCientificaSNI
            let inputValueDocumentFormacionCientificaSNISecond = params.parentNode.parentNode.parentNode.children[1].children[1]


            inputValueFormacionCientificaSNI = response.idCurriculumFormacion; // valor de idCurriculumFormacion
            inputValueFormacionCientificaSNISEcond.value = response.idCurriculumFormacion;

            let itemformacionSNI = await getFormacionCientificaSNI(inputValueFormacionCientificaSNI);

            console.log(itemformacionSNI);
            dataFormacionCientifica.addNewItem(itemformacionSNI);

            let idDocumentoFormacion = await mandarDocumentoFormacionSNI(inputValueFormacionCientificaSNI,containerFormShowFormacionCientificaSNI)

            inputValueDocumentFormacionCientificaSNI = idDocumentoFormacion.idDocumento // Valor de FormacionDocumento....
            inputValueDocumentFormacionCientificaSNISecond.value = idDocumentoFormacion.idDocumento // Valor de FormacionDocumento....


            let dataDocuments = await getDocumentacioActual(inputValueFormacionCientificaSNI);
            console.log(dataDocuments)

            //Agregando elementos
            dataDocuments.forEach((itemDocumentos)=>{
                dataDocumentosFormaciones.addNewItem(itemDocumentos);
            })

            swal({
                title: "Atención",
                text: "Campos guardados correctamente",
                type: "success",
            });

            let formacionActual = dataFormacionCientifica.findItemByIdCurriculum(inputValueFormacionCientificaSNI)

            containerFormShowFormacionCientificaSNI.innerHTML =  visualizadorDatosFormacionCientificaSNI(formacionActual)//Componente de Visualizacion

            skeletonHeader.hidden = true
            skeletonBody.hidden = true;

            containerButtons.hidden = false;
            containerForm.hidden = false;

            containerButtons.innerHTML = btnsComponentEditaFirstFormacionCientificaSNI();

            //console.log(inputValueFormacionCientificaSNISEcond)
            //console.log(inputValueFormacionCientificaSNISEcond.value)

            let contenedorPreginta = document.getElementById('formacionCientificaCHKSNI');
            contenedorPreginta.hidden = true;


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



    //containerFormShowFormacionCientificaSNI.innerHTML =  visualizadorDatosFormacionCientificaSNI()//Componente de Visualizacion

    //agregando Botones para editar
    //containerButtons.innerHTML = btnsComponentEditaFirstFormacionCientificaSNI();
}

//validacion de formulario, el cual incluye fichero...

const validacionFormularioFormSNI = async(item)=>{

    let form_data = $('#' + item.id).serializeJSON();
    return form_data.tipo=== undefined || form_data.inicioVigencia=== ''|| form_data.terminoVigencia=== '';
}

const validacionDocumentoFormularioSNI = async(item) => {

    let itemInputDocu = item.children[0].children[0].children[3].children[1].children[1].children[0];

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

const generacionObjetoSNI= async(item)=>{

    let form_data = $('#' + item.id).serializeJSON();

    let tipoSNI = form_data.tipo;
    let inicioVigencia = form_data.inicioVigencia;
    let TerminoVigencia = form_data.terminoVigencia;

    //let itemInputDocu = item.children[0].children[0].children[3].children[1].children[1].children[0];

    let array = [];
    let object = {
         tipoSNI: tipoSNI
        ,inicioVigencia: inicioVigencia
        ,TerminoVigencia: TerminoVigencia
    };


    array.push(object);
    let data = JSON.stringify(array);


    /* let formData = new FormData();
     formData.append('file',itemInputDocu.files[0]);
     formData.append('inputname',itemInputDocu.value);
     formData.append('tipoSNI',tipoSNI)
     formData.append('inicioVigencia',inicioVigencia)
     formData.append('TerminoVigencia',TerminoVigencia)
 */


    //let dataFree = await sendFilePDFFREE(formData,'definirFormacionCientificaSNI')

    //return form_data.tipo=== undefined || form_data.inicioVigencia=== ''|| form_data.terminoVigencia=== '';

    return await getDataFromServerHidden('definirFormacionCientificaSNI','POST',data)

}

const generacionObjetoSNIUpdate= async(item, idCurriculumFo)=>{

    let form_data = $('#' + item.id).serializeJSON();

    let tipoSNI = form_data.tipo;
    let inicioVigencia = form_data.inicioVigencia;
    let TerminoVigencia = form_data.terminoVigencia;

    let array = [];
    let object = {
        tipoSNI: tipoSNI
        ,inicioVigencia: inicioVigencia
        ,TerminoVigencia: TerminoVigencia
        ,idCurriculumFormacion: idCurriculumFo
    };


    array.push(object);
    let data = JSON.stringify(array);

    return await getDataFromServerHidden('actualizarFormacionCientificaSNI','POST',data)

}

function editarFormularioFormacionCientificaSNI(params) {

    console.log("Editando datos");

    //Contenedor de botones
    let containerButtons = params.parentNode.parentNode;


    //SkeletondeHeader (Contenedor)
    let skeletonHeader = params.parentNode.parentNode.parentNode.parentNode.children[0].children[0]
    //SkeletonBody (Contenedor)
    let skeletonBody = params.parentNode.parentNode.parentNode.parentNode.children[1].children[0]

    //input para valor de FormacionCientificaSNI
    let inputValueFormacionCientificaSNI = params.parentNode.parentNode.parentNode.children[1].children[0].value

    //console.log(inputValueFormacionCientificaSNI)

    //input para documento de FormacionCientificaSNI
    let inputValueDocumentFormacionCientificaSNI = params.parentNode.parentNode.parentNode.children[1].children[1].value

    //console.log(inputValueDocumentFormacionCientificaSNI)

    //Contenedor card-body
    let cardBody = params.parentNode.parentNode.parentNode.parentNode.children[1];

    //Contenedor principal1 (container-form)
    let containerForm = params.parentNode.parentNode.parentNode.parentNode.children[1].children[1];

    //ContenedorFormularioParent (form-action) //Se realiza Escritura de componente visualizador

    let containerFormShowFormacionCientificaSNI = params.parentNode.parentNode.parentNode.parentNode.children[1].children[1].children[0]


    containerFormShowFormacionCientificaSNI.innerHTML =  formularioNuevoFormacionCientificaSNI()//Componente de Visualizacion

    //agregando Botones para editar
    containerButtons.innerHTML = btnsComponentEditaCancelaFirstFormacionCientificaSNI();
    agregarDatePicker('inicioVigenciaSNI')
    agregarDatePickerNoMayor('terminoVigenciaSNI')

}

async function guardarEdicionFormacionCientificaSNI(params) {

    console.log("Guardando datos en edicion");

    //Contenedor de botones
    let containerButtons = params.parentNode.parentNode;


    //SkeletondeHeader (Contenedor)
    let skeletonHeader = params.parentNode.parentNode.parentNode.parentNode.children[0].children[0]
    //SkeletonBody (Contenedor)
    let skeletonBody = params.parentNode.parentNode.parentNode.parentNode.children[1].children[0]

    //input para valor de FormacionCientificaSNI
    let inputValueFormacionCientificaSNI = params.parentNode.parentNode.parentNode.children[1].children[0].value

    //input para documento de FormacionCientificaSNI
    let inputValueDocumentFormacionCientificaSNI = params.parentNode.parentNode.parentNode.children[1].children[1].value

    //Contenedor card-body
    let cardBody = params.parentNode.parentNode.parentNode.parentNode.children[1];

    //Contenedor principal1 (container-form)
    let containerForm = params.parentNode.parentNode.parentNode.parentNode.children[1].children[1];

    //ContenedorFormularioParent (form-action) //Se realiza Escritura de componente visualizador

    let containerFormShowFormacionCientificaSNI = params.parentNode.parentNode.parentNode.parentNode.children[1].children[1].children[0]


    //En esta parte va la edicion

    let formValidacion = await validacionFormularioFormSNI(containerFormShowFormacionCientificaSNI);
    let validacionDocs = await validacionDocumentoFormularioSNI(containerFormShowFormacionCientificaSNI);


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

        let response = await generacionObjetoSNIUpdate(containerFormShowFormacionCientificaSNI,idCurriculumFo)
        console.log(response)
        if (response.noError === "0"){




            let itemformacionSNI = await getFormacionCientificaSNI(idCurriculumFo);

            //console.log(itemformacionSNI);

            //console.log(dataFormacionCientifica.findItemByIdCurriculum(idCurriculumFo))

            dataFormacionCientifica.replaceItemByIdCurriculumFormacion(idCurriculumFo,itemformacionSNI);
            let updateDocumento = await actualizarDocumentoFormacionSNI(idCurriculumFo,idDocument,containerFormShowFormacionCientificaSNI)
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

            let formacionActual = dataFormacionCientifica.findItemByIdCurriculum(inputValueFormacionCientificaSNI)

            containerFormShowFormacionCientificaSNI.innerHTML =  visualizadorDatosFormacionCientificaSNI(formacionActual)//Componente de Visualizacion
            containerButtons.innerHTML = btnsComponentEditaFirstFormacionCientificaSNI();

            let contenedorPreginta = document.getElementById('formacionCientificaCHKSNI');


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



    //containerFormShowFormacionCientificaSNI.innerHTML =  visualizadorDatosFormacionCientificaSNI()//Componente de Visualizacion

    //agregando Botones para editar
    //containerButtons.innerHTML = btnsComponentEditaFirstFormacionCientificaSNI();
}

function cancelarEditarFormularioFormacionCientificaSNI(params) {

    console.log("Cancelando edicion de datos");
    //Contenedor de botones
    let containerButtons = params.parentNode.parentNode;


    //SkeletondeHeader (Contenedor)
    let skeletonHeader = params.parentNode.parentNode.parentNode.parentNode.children[0].children[0]
    //SkeletonBody (Contenedor)
    let skeletonBody = params.parentNode.parentNode.parentNode.parentNode.children[1].children[0]

    //input para valor de FormacionCientificaSNI
    let inputValueFormacionCientificaSNI = params.parentNode.parentNode.parentNode.children[1].children[0].value

    //input para documento de FormacionCientificaSNI
    let inputValueDocumentFormacionCientificaSNI = params.parentNode.parentNode.parentNode.children[1].children[1].value

    //Contenedor card-body
    let cardBody = params.parentNode.parentNode.parentNode.parentNode.children[1];

    //Contenedor principal1 (container-form)
    let containerForm = params.parentNode.parentNode.parentNode.parentNode.children[1].children[1];

    //ContenedorFormularioParent (form-action) //Se realiza Escritura de componente visualizador

    let containerFormShowFormacionCientificaSNI = params.parentNode.parentNode.parentNode.parentNode.children[1].children[1].children[0]

    let formacionActual = dataFormacionCientifica.findItemByIdCurriculum(inputValueFormacionCientificaSNI)

    containerFormShowFormacionCientificaSNI.innerHTML =  visualizadorDatosFormacionCientificaSNI(formacionActual)//Componente de Visualizacion

    //agregando Botones para editar
    containerButtons.innerHTML = btnsComponentEditaFirstFormacionCientificaSNI();
}

//Acciones para escribir o sobresscribir en componente dado......
function verificadorFormacionCientificaFormacionCientificaSNI(perfilChkSNI) {

    let origin = document.getElementById('formacionCientificaSNI');

    if(perfilChkSNI.checked){
        origin.innerHTML = componenteInicialBaseFormacionCientificaSNI();
        agregarDatePicker('inicioVigenciaSNI')
        agregarDatePickerNoMayor('terminoVigenciaSNI')
    }else{
        origin.innerHTML = "";
    }
}

function obtenerFormacionCientificaSNI(itemFormacion) {

    let j = Math.floor(Math.random() * 100000);

    let obtenerDocumentacion = dataDocumentosFormaciones.findItemByIdCurriculum(itemFormacion.idCurriculumFormacion)
    let itemDoc = obtenerDocumentacion[0];



    return `<div class="container" id="showinfoFormacionCientificaSNI">
    <div class="formacionFormacionCientificaSNI">
        <div class="card  card-formacion-academica card-formacion-FormacionCientificaSNI" id="card-formacion-FormacionCientificaSNI">
            <div class="card-header">

                <div class="container-skeleton-FormacionCientificaSNI-BodyCard" hidden>
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

                <div class="container-skeleton-FormacionCientificaSNI-BodyCard" hidden>
                    <div class="skeleton-section-content">
                        <span class="teasting2">
                        </span>
                    </div>
                </div>

                <div class="container-form">

                    <form action="" name="formacion-FormacionCientificaSNI-form${j}" id="formacion-FormacionCientificaSNI-form${j}">

                            <!--Formulario/Info-->
                        ${visualizadorDatosFormacionCientificaSNI(itemFormacion)}

                    </form>

                    <div class="container-form-docs" id="container-form-docs${j}">

                    </div>
                </div>
            </div>
        </div>
    </div>

</div>`;

}

//////////************************INICIA FORMACION PRODEP

function componenteInicialBaseFormacionCientificaPRODEP(params) {

    let j = Math.floor(Math.random() * 100000);

    return `<div class="container" id="showinfoFormacionCientificaPRODEP">
    <div class="formacionFormacionCientificaPRODEP">
        <div class="card  card-formacion-academica card-formacion-FormacionCientificaPRODEP" id="card-formacion-FormacionCientificaPRODEP">
            <div class="card-header">

                <div class="container-skeleton-FormacionCientificaPRODEP-BodyCard" hidden>
                    <span class="skeleton-loader"></span>
                </div>

                <div id="values" hidden>
                    <input type="text" name="valueIDCF" id="valueIDCF" hidden disabled value="">
                    <input type="text" name="valueIDoc" id="valueIDoc" hidden disabled value="">

                </div>

                <div class="card-buttons">
                    ${btnsComponentGuardarFirstFormacionCientificaPRODEP()}
                </div>


            </div>

            <div class="card-body card-body-back" id="card-componentBody" >

                <div class="container-skeleton-FormacionCientificaPRODEP-BodyCard" hidden>
                    <div class="skeleton-section-content">
                        <span class="teasting2">
                        </span>
                    </div>
                </div>

                <div class="container-form">

                    <form action="" name="formacion-FormacionCientificaPRODEP-form${j}" id="formacion-FormacionCientificaPRODEP-form${j}">

                            <!--Formulario/Info-->
                        ${formularioNuevoFormacionCientificaPRODEP()}

                    </form>

                    <div class="container-form-docs" id="container-form-docs${j}">

                    </div>
                </div>
            </div>
        </div>
    </div>

</div>`;
}

//****************INICIA BOTONES DE ACCIONES FormacionCientificaPRODEP ********************/

//Guarda cambios de formaulario Inicial
function btnsComponentGuardarFirstFormacionCientificaPRODEP(params) {


    let j = Math.floor(Math.random() * 100000);
    return `
        <div id="guardarFormacionCientificaPRODEP${j}" class="guardarFormacionCientificaPRODEP">
            <button type="button" class="btn btn-outline-secondary btn-sm btns-components-action" id="btn-doc-delete${j}" onclick="guardarFormularioFormacionCientificaPRODEP(this)"><i class="fas fa-save"></i> Guardar</button>
        </div>
    `;
}

//Edita cambios de formulario Satisfactorio
function btnsComponentEditaFirstFormacionCientificaPRODEP(params) {

    let j = Math.floor(Math.random() * 100000);
    return `
    <div id="EditarFormacionCientificaPRODEP${j}" class="EditarFormacionCientificaPRODEP">
        <button type="button" class="btn btn-outline-secondary btn-sm btns-components-action" id="btn-doc-delete${j}" onclick="editarFormularioFormacionCientificaPRODEP(this)"><i class="fas fa-edit"></i> Editar</button>
    </div>

    `;
}

//Edita cambios de formulario Satisfactorio
function btnsComponentEditaCancelaFirstFormacionCientificaPRODEP(params) {

    let j = Math.floor(Math.random() * 100000);
    return `
    <div id="EditarCancelarFormacionCientificaPRODEP${j}" class="EditarCancelarFormacionCientificaPRODEP">
        <button type="button" class="btn btn-outline-secondary btn-sm btns-components-action" id="btn-doc-delete${j}" onclick="guardarEdicionFormacionCientificaPRODEP(this)"><i class="fas fa-save"></i> Guardar</button>
        <button type="button" class="btn btn-outline-secondary btn-sm btns-components-action" id="btn-doc-delete${j}" onclick="cancelarEditarFormularioFormacionCientificaPRODEP(this)"><i class="fas fa-times-circle"></i> Cancelar</button>
    </div>
    `;
}

//****************TERMINA BOTONES DE ACCIONES FormacionCientificaPRODEP ********************/


//Formulario inicial de FormacionCientificaPRODEPo ///Tener en cuenta de que se tiene que editar deacuerdo al formulario....
function formularioNuevoFormacionCientificaPRODEP(params) {

    return `
    <div>
        <div class="form-row">
            <div class="form-group col-md-3">
                <h6>Tipo:</h6>
                <select class="browser-default custom-select" name="tipo" id="tipo">
                    <option selected="" disabled="">Seleccione</option>
                    <option value="5">Deseable</option>
                    <option value="6">Deseable y Apoyo</option>

                </select>

            </div>

            <div class="form-group col-md-3">
                <h6>Inicio de vigencia:</h6>
                <input type="text" maxlength="14" class="form-control" name="inicioVigencia" id="inicioVigenciaPRODEP" oninput="espaciosEnBlanco(this)" autocomplete="off" readonly="">
            </div>

            <div class="form-group col-md-3">
                <h6>Término de vigencia:</h6>
                <input type="text" maxlength="14" class="form-control" name="terminoVigencia" id="terminoVigenciaPRODEP" oninput="espaciosEnBlanco(this)" autocomplete="off" readonly="">
            </div>

            <div class="form-group col-md-3">

                <h6>Evidencia:</h6>
                <div class="input-group">
                    <div class="input-group-prepend">
                        <span class="input-group-text" id="inputFileAgregarPRODEP" name="inputFileAgregarPRODEP"><i class="fa fa-file"></i></span>
                    </div>
                    <div class="custom-file">
                        <input type="file" class="custom-file-input" id="inputFilePRODEP" name="inputFile" aria-describedby="inputGroupFileAddon01" lang="es" accept=".pdf" requiered="">
                        <label class="custom-file-label" for="inputFilePRODEP" id="nombreArchivoCargarPRODEP" name="nombreArchivoCargarPRODEP">Buscar documento</label>
                    </div>
                </div>
            </div>
        </div>
    </div>
    `
}

function visualizadorDatosFormacionCientificaPRODEP(params) {

    return `
    <div class="text-center">
        <div class="form-row">
            <div class="form-group col-md-3">
                <h6>Tipo:</h6>
                <p>${params.tipoPerfilCientificoDocente}</p>

            </div>

            <div class="form-group col-md-3">
                <h6>Inicio de vigencia:</h6>
                <p>${timeChangeToLocal(params.fechaInicio)}</p>
            </div>

            <div class="form-group col-md-3">
                <h6>Término de vigencia:</h6>
                <p>${timeChangeToLocal(params.fechaTermino)}</p>
            </div>

            <div class="form-group col-md-3">
                <h6>Evidencia:</h6>
                ${obtenerEnlaceDocumentoPRODEP(params)}
            </div>
        </div>
    </div>
    `
}

const obtenerEnlaceDocumentoPRODEP = (item) =>{
    //obtener datsode idCurriculumFormacion....
    let objROUTES = ROUTES_OBJ.getITEMSROUTE();

    let idCurriculumDocs  = item.idCurriculumFormacion

    let documento = dataDocumentosFormaciones.findItemByIdCurriculum(idCurriculumDocs)


    try {
        let documentoIndividual = documento[0];

        //Buscar en respositorioDocumento

        //return `<a target="_blank" href="/prospectoAdmin/documentoFormacionObtener/${documentoIndividual.idDocumento}">${documentoIndividual.archivo}</a>`;
        return `<a target="_blank" href="${objROUTES.itemRouteDocFormacionGral}/${documentoIndividual.idDocumento}">${documentoIndividual.archivo}</a>`;

    }catch (e){


        return `<p>SIN DOCUMENTO</p>`
    }


}

//************TERMINA COMPONENTES DE FormacionCientificaPRODEP

//************Inicia Actions de FormacionCientificaPRODEP
const mandarDocumentoFormacionPRODEP = async (idCurriculumFormacion, contenedorForm)=>{

    let itemInputDocu = contenedorForm.children[0].children[0].children[3].children[1].children[1].children[0];
    let formData = new FormData();

    formData.append('file',itemInputDocu.files[0]);
    formData.append('inputname',itemInputDocu.value);
    formData.append('idCurriculumFormacion',idCurriculumFormacion);

    return await sendFilePDFFREE(formData,'setDocumentoFormacionCientificaPRODEP');
}

const actualizarDocumentoFormacionPRODEP = async (idCurriculumFormacion,idDocumento, contenedorForm)=>{

    let itemInputDocu = contenedorForm.children[0].children[0].children[3].children[1].children[1].children[0];
    let formData = new FormData();

    formData.append('file',itemInputDocu.files[0]);
    formData.append('inputname',itemInputDocu.value);
    formData.append('idCurriculumFormacion',idCurriculumFormacion);
    formData.append('idDocumento',idDocumento);

    return await sendFilePDFFREE(formData,'actualizarDocumentoFormacionPRODEP');
}

const getFormacionCientificaPRODEP =async (item) =>{
    let dataa = await getDataFromServerHidden(`getFormacionCientificaPRODEPIndividual/${item}`,'POST')
    return dataa[0];
}

async function guardarFormularioFormacionCientificaPRODEP(params) {
    console.log("Guardando datos");

    //Contenedor de botones
    let containerButtons = params.parentNode.parentNode;

    //SkeletondeHeader (Contenedor)
    let skeletonHeader = params.parentNode.parentNode.parentNode.parentNode.children[0].children[0]
    //SkeletonBody (Contenedor)
    let skeletonBody = params.parentNode.parentNode.parentNode.parentNode.children[1].children[0]

    //input para valor de FormacionCientificaPRODEP
    let inputValueFormacionCientificaPRODEP = params.parentNode.parentNode.parentNode.children[1].children[0].value

    //input para documento de FormacionCientificaPRODEP
    let inputValueDocumentFormacionCientificaPRODEP = params.parentNode.parentNode.parentNode.children[1].children[1].value

    //Contenedor card-body
    let cardBody = params.parentNode.parentNode.parentNode.parentNode.children[1];

    console.log(cardBody)

    //Contenedor principal1 (container-form)
    let containerForm = params.parentNode.parentNode.parentNode.parentNode.children[1].children[1];

    //ContenedorFormularioParent (form-action) //Se realiza Escritura de componente visualizador
    let containerFormShowFormacionCientificaPRODEP = params.parentNode.parentNode.parentNode.parentNode.children[1].children[1].children[0]


    //validando datos para formulario....
    let formValidacion = await validacionFormularioFormPRODEP(containerFormShowFormacionCientificaPRODEP);
    let validacionDocs = await validacionDocumentoFormularioPRODEP(containerFormShowFormacionCientificaPRODEP);


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



        let response = await generacionObjetoPRODEP(containerFormShowFormacionCientificaPRODEP);
        console.log(response)

        if (response.noError === "0"){


            let inputValueFormacionCientificaPRODEPSEcond = params.parentNode.parentNode.parentNode.children[1].children[0]

            //input para documento de FormacionCientificaPRODEP
            let inputValueDocumentFormacionCientificaPRODEPSecond = params.parentNode.parentNode.parentNode.children[1].children[1]


            inputValueFormacionCientificaPRODEP = response.idCurriculumFormacion; // valor de idCurriculumFormacion
            inputValueFormacionCientificaPRODEPSEcond.value = response.idCurriculumFormacion;

            let itemformacionPRODEP = await getFormacionCientificaPRODEP(inputValueFormacionCientificaPRODEP);

            console.log(itemformacionPRODEP);
            dataFormacionCientifica.addNewItem(itemformacionPRODEP);

            let idDocumentoFormacion = await mandarDocumentoFormacionPRODEP(inputValueFormacionCientificaPRODEP,containerFormShowFormacionCientificaPRODEP)

            inputValueDocumentFormacionCientificaPRODEP = idDocumentoFormacion.idDocumento // Valor de FormacionDocumento....
            inputValueDocumentFormacionCientificaPRODEPSecond.value = idDocumentoFormacion.idDocumento // Valor de FormacionDocumento....


            let dataDocuments = await getDocumentacioActual(inputValueFormacionCientificaPRODEP);
            console.log(dataDocuments)

            //Agregando elementos
            dataDocuments.forEach((itemDocumentos)=>{
                dataDocumentosFormaciones.addNewItem(itemDocumentos);
            })

            swal({
                title: "Atención",
                text: "Campos guardados correctamente",
                type: "success",
            });

            let formacionActual = dataFormacionCientifica.findItemByIdCurriculum(inputValueFormacionCientificaPRODEP)

            containerFormShowFormacionCientificaPRODEP.innerHTML =  visualizadorDatosFormacionCientificaPRODEP(formacionActual)//Componente de Visualizacion

            skeletonHeader.hidden = true
            skeletonBody.hidden = true;

            containerButtons.hidden = false;
            containerForm.hidden = false;

            containerButtons.innerHTML = btnsComponentEditaFirstFormacionCientificaPRODEP();

            //console.log(inputValueFormacionCientificaPRODEPSEcond)
            //console.log(inputValueFormacionCientificaPRODEPSEcond.value)

            let contenedorPreginta = document.getElementById('formacionCientificaCHKPRODEP');
            contenedorPreginta.hidden = true;


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



    //containerFormShowFormacionCientificaPRODEP.innerHTML =  visualizadorDatosFormacionCientificaPRODEP()//Componente de Visualizacion

    //agregando Botones para editar
    //containerButtons.innerHTML = btnsComponentEditaFirstFormacionCientificaPRODEP();
}

//validacion de formulario, el cual incluye fichero...

const validacionFormularioFormPRODEP = async(item)=>{

    let form_data = $('#' + item.id).serializeJSON();
    return form_data.tipo=== undefined || form_data.inicioVigencia=== ''|| form_data.terminoVigencia=== '';
}

const validacionDocumentoFormularioPRODEP = async(item) => {

    let itemInputDocu = item.children[0].children[0].children[3].children[1].children[1].children[0];

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

const generacionObjetoPRODEP= async(item)=>{

    let form_data = $('#' + item.id).serializeJSON();

    let tipoPRODEP = form_data.tipo;
    let inicioVigencia = form_data.inicioVigencia;
    let TerminoVigencia = form_data.terminoVigencia;

    //let itemInputDocu = item.children[0].children[0].children[3].children[1].children[1].children[0];

    let array = [];
    let object = {
        tipoPRODEP: tipoPRODEP
        ,inicioVigencia: inicioVigencia
        ,TerminoVigencia: TerminoVigencia
    };


    array.push(object);
    let data = JSON.stringify(array);


    return await getDataFromServerHidden('definirFormacionCientificaPRODEP','POST',data)

}

const generacionObjetoPRODEPUpdate= async(item, idCurriculumFo)=>{

    let form_data = $('#' + item.id).serializeJSON();

    let tipoPRODEP = form_data.tipo;
    let inicioVigencia = form_data.inicioVigencia;
    let TerminoVigencia = form_data.terminoVigencia;

    //let itemInputDocu = item.children[0].children[0].children[3].children[1].children[1].children[0];

    let array = [];
    let object = {
        tipoPRODEP: tipoPRODEP
        ,inicioVigencia: inicioVigencia
        ,TerminoVigencia: TerminoVigencia
        ,idCurriculumFormacion: idCurriculumFo
    };


    array.push(object);
    let data = JSON.stringify(array);


    return await getDataFromServerHidden('actualizarFormacionCientificaPRODEP','POST',data)

}

function editarFormularioFormacionCientificaPRODEP(params) {

    console.log("Editando datos");

    //Contenedor de botones
    let containerButtons = params.parentNode.parentNode;


    //SkeletondeHeader (Contenedor)
    let skeletonHeader = params.parentNode.parentNode.parentNode.parentNode.children[0].children[0]
    //SkeletonBody (Contenedor)
    let skeletonBody = params.parentNode.parentNode.parentNode.parentNode.children[1].children[0]

    //input para valor de FormacionCientificaPRODEP
    let inputValueFormacionCientificaPRODEP = params.parentNode.parentNode.parentNode.children[1].children[0].value

    console.log(inputValueFormacionCientificaPRODEP)

    //input para documento de FormacionCientificaPRODEP
    let inputValueDocumentFormacionCientificaPRODEP = params.parentNode.parentNode.parentNode.children[1].children[1].value

    console.log(inputValueDocumentFormacionCientificaPRODEP)

    //Contenedor card-body
    let cardBody = params.parentNode.parentNode.parentNode.parentNode.children[1];

    //Contenedor principal1 (container-form)
    let containerForm = params.parentNode.parentNode.parentNode.parentNode.children[1].children[1];

    //ContenedorFormularioParent (form-action) //Se realiza Escritura de componente visualizador

    let containerFormShowFormacionCientificaPRODEP = params.parentNode.parentNode.parentNode.parentNode.children[1].children[1].children[0]


    containerFormShowFormacionCientificaPRODEP.innerHTML =  formularioNuevoFormacionCientificaPRODEP()//Componente de Visualizacion

    //agregando Botones para editar
    containerButtons.innerHTML = btnsComponentEditaCancelaFirstFormacionCientificaPRODEP();
    agregarDatePicker('inicioVigenciaPRODEP')
    agregarDatePickerNoMayor('terminoVigenciaPRODEP')

}

async function guardarEdicionFormacionCientificaPRODEP(params) {

    console.log("Guardando datos en edicion");

    //Contenedor de botones
    let containerButtons = params.parentNode.parentNode;


    //SkeletondeHeader (Contenedor)
    let skeletonHeader = params.parentNode.parentNode.parentNode.parentNode.children[0].children[0]
    //SkeletonBody (Contenedor)
    let skeletonBody = params.parentNode.parentNode.parentNode.parentNode.children[1].children[0]

    //input para valor de FormacionCientificaPRODEP
    let inputValueFormacionCientificaPRODEP = params.parentNode.parentNode.parentNode.children[1].children[0].value

    //input para documento de FormacionCientificaPRODEP
    let inputValueDocumentFormacionCientificaPRODEP = params.parentNode.parentNode.parentNode.children[1].children[1].value

    //Contenedor card-body
    let cardBody = params.parentNode.parentNode.parentNode.parentNode.children[1];

    //Contenedor principal1 (container-form)
    let containerForm = params.parentNode.parentNode.parentNode.parentNode.children[1].children[1];

    //ContenedorFormularioParent (form-action) //Se realiza Escritura de componente visualizador

    let containerFormShowFormacionCientificaPRODEP = params.parentNode.parentNode.parentNode.parentNode.children[1].children[1].children[0]


    //En esta parte va la edicion

    let formValidacion = await validacionFormularioFormPRODEP(containerFormShowFormacionCientificaPRODEP);
    let validacionDocs = await validacionDocumentoFormularioPRODEP(containerFormShowFormacionCientificaPRODEP);


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

        let response = await generacionObjetoPRODEPUpdate(containerFormShowFormacionCientificaPRODEP,idCurriculumFo)
        console.log(response)
        if (response.noError === "0"){




            let itemformacionPRODEP = await getFormacionCientificaPRODEP(idCurriculumFo);

            //console.log(itemformacionPRODEP);

            //console.log(dataFormacionCientifica.findItemByIdCurriculum(idCurriculumFo))

            dataFormacionCientifica.replaceItemByIdCurriculumFormacion(idCurriculumFo,itemformacionPRODEP);
            let updateDocumento = await actualizarDocumentoFormacionPRODEP(idCurriculumFo,idDocument,containerFormShowFormacionCientificaPRODEP)
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

            let formacionActual = dataFormacionCientifica.findItemByIdCurriculum(inputValueFormacionCientificaPRODEP)

            containerFormShowFormacionCientificaPRODEP.innerHTML =  visualizadorDatosFormacionCientificaPRODEP(formacionActual)//Componente de Visualizacion
            containerButtons.innerHTML = btnsComponentEditaFirstFormacionCientificaPRODEP();

            let contenedorPreginta = document.getElementById('formacionCientificaCHKPRODEP');


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



    //containerFormShowFormacionCientificaPRODEP.innerHTML =  visualizadorDatosFormacionCientificaPRODEP()//Componente de Visualizacion

    //agregando Botones para editar
    //containerButtons.innerHTML = btnsComponentEditaFirstFormacionCientificaPRODEP();



}

function cancelarEditarFormularioFormacionCientificaPRODEP(params) {

    console.log("Cancelando edicion de datos");
    //Contenedor de botones
    let containerButtons = params.parentNode.parentNode;


    //SkeletondeHeader (Contenedor)
    let skeletonHeader = params.parentNode.parentNode.parentNode.parentNode.children[0].children[0]
    //SkeletonBody (Contenedor)
    let skeletonBody = params.parentNode.parentNode.parentNode.parentNode.children[1].children[0]

    //input para valor de FormacionCientificaPRODEP
    let inputValueFormacionCientificaPRODEP = params.parentNode.parentNode.parentNode.children[1].children[0].value

    //input para documento de FormacionCientificaPRODEP
    let inputValueDocumentFormacionCientificaPRODEP = params.parentNode.parentNode.parentNode.children[1].children[1].value

    //Contenedor card-body
    let cardBody = params.parentNode.parentNode.parentNode.parentNode.children[1];

    //Contenedor principal1 (container-form)
    let containerForm = params.parentNode.parentNode.parentNode.parentNode.children[1].children[1];

    //ContenedorFormularioParent (form-action) //Se realiza Escritura de componente visualizador

    let containerFormShowFormacionCientificaPRODEP = params.parentNode.parentNode.parentNode.parentNode.children[1].children[1].children[0]

    let formacionActual = dataFormacionCientifica.findItemByIdCurriculum(inputValueFormacionCientificaPRODEP)

    containerFormShowFormacionCientificaPRODEP.innerHTML =  visualizadorDatosFormacionCientificaPRODEP(formacionActual)//Componente de Visualizacion

    //agregando Botones para editar
    containerButtons.innerHTML = btnsComponentEditaFirstFormacionCientificaPRODEP();
}

//Acciones para escribir o sobresscribir en componente dado......

function verificadorFormacionCientificaFormacionCientificaPRODEP(perfilChkPRODEP) {

    let origin = document.getElementById('FormacionCientificaPRODEP');

    if(perfilChkPRODEP.checked){
        origin.innerHTML = componenteInicialBaseFormacionCientificaPRODEP();
        agregarDatePicker('inicioVigenciaPRODEP')
        agregarDatePickerNoMayor('terminoVigenciaPRODEP')
    }else{
        origin.innerHTML = "";
    }
}

function obtenerFormacionCientificaPRODEP(itemFormacion) {

    let j = Math.floor(Math.random() * 100000);

    let obtenerDocumentacion = dataDocumentosFormaciones.findItemByIdCurriculum(itemFormacion.idCurriculumFormacion)
    let itemDoc = obtenerDocumentacion[0];



    return `<div class="container" id="showinfoFormacionCientificaPRODEP">
    <div class="formacionFormacionCientificaPRODEP">
        <div class="card  card-formacion-academica card-formacion-FormacionCientificaPRODEP" id="card-formacion-FormacionCientificaPRODEP">
            <div class="card-header">

                <div class="container-skeleton-FormacionCientificaPRODEP-BodyCard" hidden>
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

                <div class="container-skeleton-FormacionCientificaPRODEP-BodyCard" hidden>
                    <div class="skeleton-section-content">
                        <span class="teasting2">
                        </span>
                    </div>
                </div>

                <div class="container-form">

                    <form action="" name="formacion-FormacionCientificaPRODEP-form${j}" id="formacion-FormacionCientificaPRODEP-form${j}">
                            <!--Formulario/Info-->
                        ${visualizadorDatosFormacionCientificaPRODEP(itemFormacion)}

                    </form>

                    <div class="container-form-docs" id="container-form-docs${j}">

                    </div>
                </div>
            </div>
        </div>
    </div>
</div>`;

}

async function mostrarFormulariosFormacionCientificaSNIPRODEP() {

    let idUser = document.getElementById('_idUnique').value;
    let data = await getDataFromServerHidden(`getListadoFormacionCientifica/${idUser}`,'GET')

    //registrando TODOS LOS ITEMS
    data.forEach((item)=>{
        dataFormacionCientifica.addNewItem(item);
    })

    let dataSNI = data.filter(item=>item.idPerfilCientificoDocente === '1')

    if (dataSNI.length > 0){
        let dataSNIHTML = ""

        dataSNI.forEach((item)=>{
            dataSNIHTML+= obtenerFormacionCientificaSNI(item);
        })
        //$("#formacionCientificaCHKSNI").hide();
        $("#formacionCientificaSNI").append(dataSNIHTML);
    }else{

        //Agregar correspondientes datos
        let dataSN = `<div class="text-center">
                        <h5 style="font-weight: 310">Datos no disponibles.</h5>
                    </div>`

        $('#formacionCientificaSNI').append(dataSN);
    }


    let dataPRODEM = data.filter(item=>item.idPerfilCientificoDocente === '2')
    if (dataPRODEM.length > 0){

        let dataPRODEPHTML = ""
        dataPRODEM.forEach((item)=>{
            dataPRODEPHTML+= obtenerFormacionCientificaPRODEP(item);
        })
        //$("#formacionCientificaCHKPRODEP").hide();
        $("#FormacionCientificaPRODEP").append(dataPRODEPHTML);
    }else{

        let dataSN = `<div class="text-center">
                        <h5 style="font-weight: 310">Datos no disponibles.</h5>
                    </div>`

        $('#FormacionCientificaPRODEP').append(dataSN);


    }
}
