//
function componenteInicialBaseDiscapacidad(params) {

    let j = Math.floor(Math.random() * 100000);

    return `<div class="container" id="showinfoDiscapacidad">
    <div class="formacionDiscapacidad">
        <div class="card card-formacion-academica card-formacion-Discapacidad" id="card-formacion-Discapacidad" ">
            <div class="card-header">

                <div class="container-skeleton-Discapacidad-BodyCard" hidden>
                    <span class="skeleton-loader"></span>
                </div>

                <div id="values" hidden>
                    <input type="text" name="valueIDCF" id="valueIDCF" hidden disabled value="">
                    <input type="text" name="valueIDoc" id="valueIDoc" hidden disabled value="">

                </div>

                <div class="card-buttons">
                    ${btnsComponentGuardarFirstDiscapacidad()}
                </div>


            </div>

            <div class="card-body card-body-back" id="card-componentBody" >

                <div class="container-skeleton-Discapacidad-BodyCard" hidden>
                    <div class="skeleton-section-content">
                        <span class="teasting2">
                        </span>
                    </div>
                </div>

                <div class="container-form">

                    <form action="" name="formacion-Discapacidad-form${j}" id="formacion-Discapacidad-form${j}">

                            <!--Formulario/Info-->
                        ${formularioNuevoDiscapacidad()}

                    </form>

                    <div class="container-form-docs" id="container-form-docs${j}">

                    </div>
                </div>
            </div>
        </div>
    </div>

</div>`;
}

//****************INICIA BOTONES DE ACCIONES Discapacidad ********************/

//Guarda cambios de formaulario Inicial
function btnsComponentGuardarFirstDiscapacidad(params) {


    let j = Math.floor(Math.random() * 100000);
    return `
        <div id="guardarDiscapacidad${j}" class="guardarDiscapacidad">
            <button type="button" class="btn btn-outline-secondary btn-sm btns-components-action" id="btn-doc-delete${j}" onclick="guardarFormularioDiscapacidad(this)"><i class="fas fa-save"></i> Guardar</button>
        </div>
    `;
}


function eliminarFormularioDiscapacidad(params){
    console.log("Eliminando formularios");
    let containerGeneralFormacionLaboral = params.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode
    containerGeneralFormacionLaboral.remove();
}





//Edita cambios de formulario Satisfactorio
function btnsComponentEditaFirstDiscapacidad(params) {

    let j = Math.floor(Math.random() * 100000);
    return `
    <div id="EditarDiscapacidad${j}" class="EditarDiscapacidad">
        <button type="button" class="btn btn-outline-secondary btn-sm btns-components-action" id="btn-doc-delete${j}" onclick="editarFormularioDiscapacidad(this)"><i class="fas fa-save"></i> Editar</button>
    </div>`;
}

function btnsComponentEditaFirstDiscapacidadINICIAL(params) {

    let j = Math.floor(Math.random() * 100000);
    return `
    <div id="EditarDiscapacidad${j}" class="EditarDiscapacidad">
        <button type="button" class="btn btn-outline-secondary btn-sm btns-components-action" id="btn-doc-delete${j}" onclick="editarFormularioDiscapacidadInicial(this)"><i class="fas fa-save"></i> Editar</button>
    </div>`;
}



//Edita cambios de formulario Satisfactorio
function btnsComponentEditaCancelaFirstDiscapacidad(params) {

    let j = Math.floor(Math.random() * 100000);
    return `
    <div id="EditarCancelarDiscapacidad${j}" class="EditarCancelarDiscapacidad">
        <button type="button" class="btn btn-outline-secondary btn-sm btns-components-action" id="btn-doc-delete${j}" onclick="guardarEdicionDiscapacidad(this)"><i class="fas fa-save"></i> Guardar</button>
        <button type="button" class="btn btn-outline-secondary btn-sm btns-components-action" id="btn-doc-delete${j}" onclick="cancelarEditarFormularioDiscapacidad(this)"><i class="fas fa-save"></i> Cancelar</button>
    </div>
    `;
}


//Edita cambios de formulario Satisfactorio INICIAL
function btnsComponentEditaCancelaFirstDiscapacidadINICIAL(params) {

    let j = Math.floor(Math.random() * 100000);
    return `
    <div id="EditarCancelarDiscapacidad${j}" class="EditarCancelarDiscapacidad">
        <button type="button" class="btn btn-outline-secondary btn-sm btns-components-action" id="btn-doc-delete${j}" onclick="guardarFormularioDiscapacidad(this)"><i class="fas fa-save"></i> Guardar</button>
        <button type="button" class="btn btn-outline-secondary btn-sm btns-components-action" id="btn-doc-delete${j}" onclick="cancelarEditarFormularioDiscapacidadINICIAL(this)"><i class="fas fa-save"></i> Cancelar</button>
    </div>
    `;
}



function btnsComponentEditaGuardarInicial(params) {

    let j = Math.floor(Math.random() * 100000);
    return `
    <div id="EditarCancelarDiscapacidad${j}" class="EditarCancelarDiscapacidad">
        <button type="button" class="btn btn-outline-secondary btn-sm btns-components-action" id="btn-doc-delete${j}" onclick="editarFormularioDiscapacidad(this)"><i class="fas fa-save"></i> Editar</button>
    </div>
    `;
}



//****************TERMINA BOTONES DE ACCIONES Discapacidad ********************/

/*
1,Candidato a Investigador Nacional
2,Investigador Nacional Nivel I
3,Investigador Nacional Nivel II
4,Investigador Nacional Nivel III*/

//Formulario inicial de Discapacidado ///Tener en cuenta de que se tiene que editar deacuerdo al formulario....
function formularioNuevoDiscapacidad(params) {

    return `
    <div>
        <div class="form-row justify-content-center">

            <div class="form-group col-md-8">
            <select class="browser-default custom-select" name="nombreDiscapacidad" id="nombreDiscapacidad" ">
            <option selected disabled>Seleccione una opción</option>
                <option value="1">Motriz</option>
                <option value="2">Auditiva</option>
                <option value="3">Visual</option>
                <option value="4">Monoplejia</option>
                <option value="5">Hemiplejia</option>
                <option value="6">Diplejia</option>
                <option value="7">Paraplejia</option>
                <option value="8">Cuadraplejia</option>
                <option value="9">Falta de extremidad</option>
                <option value="10">Deficiencia total o profunda</option>
                <option value="11">Deficiencia parcial</option>
                <option value="12">Perdida total de la vision</option>
                <option value="13">Disminucion parcial de la vision</option>
            </select>
            </div>
        </div>
    </div>
    `;
}




const generateSelectDiscapacidad = ()=>{

    let lenguaIndigena = dataCatalogoDiscapacidad.getAllData();

    let selectItem = '';
    lenguaIndigena.forEach((item) => {
        selectItem += `<option value="${item.idDiscapacidad}">${item.lenguaIndigena}</option>`;
    });
    return selectItem;
}



function visualizadorDatosDiscapacidad(params) {

    return `
    <div>
        <div class="form-row ">
            <div class="form-group col-md-6">
                <h6>¿Cuenta con algún tipo de discapacidad?:</h6>
                <p>Si</p>
            </div>

            <div class="form-group col-md-6">
                <h6>Tipo de discapacidad:</h6>
                <p>${params.tipoDiscapacidad}</p>
            </div>
        </div>
    </div>
    `
}



function visualizadorDatosDiscapacidadInicial(params) {

    return `
    <div>
        <div class="form-row ">
            <div class="form-group col-md-6">
            <h6>¿Cuenta con algún tipo de discapacidad?:</h6>
                <p>No</p>
            </div>

            <div class="form-group col-md-6">
                <h6>Tipo de discapacidad:</h6>
                <p>*Seleccione discapacidad...</p>
            </div>
        </div>
    </div>
    `
}


const obtenerEnlaceDocumentoDISC = (item) =>{
    //obtener datsode idPersonaTipoDiscapacidad....

    let idCurriculumDocs  = item.idPersonaTipoDiscapacidad

    let documento = dataDocumentosFormaciones.findItemByIdCurriculum(idCurriculumDocs)


    try {
        let documentoIndividual = documento[0];

        //Buscar en respositorioDocumento

        return `<a target="_blank" href="/prospecto/documentoFormacionObtener/${documentoIndividual.idDocumento}">${documentoIndividual.archivo}</a>`;
    }catch (e){


        return `<p>SIN DOCUMDISCO</p>`
    }


}

//************TERMINA COMPONDISCES DE Discapacidad

//************Inicia Actions de Discapacidad

const getDiscapacidad =async (item) =>{
    let dataa = await getDataFromServerHidden(`getDiscapacidadIndividual/${item}`,'POST')
    return dataa[0];
}


async function guardarFormularioDiscapacidad(params) {
    console.log("Guardando datos");

    //Contenedor de botones
    let containerButtons = params.parentNode.parentNode;

    //SkeletondeHeader (Contenedor)
    let skeletonHeader = params.parentNode.parentNode.parentNode.parentNode.children[0].children[0]
    //SkeletonBody (Contenedor)
    let skeletonBody = params.parentNode.parentNode.parentNode.parentNode.children[1].children[0]

    //input para valor de Discapacidad
    let inputValueDiscapacidad = params.parentNode.parentNode.parentNode.children[1].children[0].value

    //input para documento de Discapacidad
    let inputValueDocumentDiscapacidad = params.parentNode.parentNode.parentNode.children[1].children[1].value

    //Contenedor card-body
    let cardBody = params.parentNode.parentNode.parentNode.parentNode.children[1];

    console.log(cardBody)

    //Contenedor principal1 (container-form)
    let containerForm = params.parentNode.parentNode.parentNode.parentNode.children[1].children[1];

    //ContenedorFormularioParent (form-action) //Se realiza Escritura de componente visualizador
    let containerFormShowDiscapacidad = params.parentNode.parentNode.parentNode.parentNode.children[1].children[1].children[0]


    //validando datos para formulario....
    let formValidacion = await validacionFormularioFormDISC(containerFormShowDiscapacidad);


    //let validacionDocs = await validacionDocumentoFormularioDISC(containerFormShowDiscapacidad);

    if (formValidacion){
        console.log("Hay error... ")

        swal({
            title:"Atención",
            text: "• Por favor, revise los campos correspondientes del formulario.",
            type: "warning"
        });


    }else{

        //Comportamiento de skeletons....
        skeletonHeader.hidden = false
        skeletonBody.hidden = false;

        containerButtons.hidden = true;
        containerForm.hidden = true;


        let response = await generacionObjetoDISC(containerFormShowDiscapacidad);
        console.log(response)

        if (response.noError === "0"){

            let inputValueDiscapacidadSEcond = params.parentNode.parentNode.parentNode.children[1].children[0]

            //input para documento de Discapacidad
            let inputValueDocumentDiscapacidadSecond = params.parentNode.parentNode.parentNode.children[1].children[1]


            inputValueDiscapacidad = response.idPersonaTipoDiscapacidad; // valor de idPersonaTipoDiscapacidad
            inputValueDiscapacidadSEcond.value = response.idPersonaTipoDiscapacidad;

            let itemDiscapacidad = await getDiscapacidad(inputValueDiscapacidad); // formacion de actual

            console.log(itemDiscapacidad);
            dataFormacionDiscapacidad.addNewItem(itemDiscapacidad);

            swal({
                title: "Atención",
                text: "Campos guardados correctamente",
                type: "success",
            });

            let formacionActual = dataFormacionDiscapacidad.findItemByIdCurriculum(inputValueDiscapacidad)

            containerFormShowDiscapacidad.innerHTML =  visualizadorDatosDiscapacidad(formacionActual)//Componente de Visualizacion

            skeletonHeader.hidden = true
            skeletonBody.hidden = true;

            containerButtons.hidden = false;
            containerForm.hidden = false;

            containerButtons.innerHTML = btnsComponentEditaFirstDiscapacidad();

            //console.log(inputValueDiscapacidadSEcond)
            //console.log(inputValueDiscapacidadSEcond.value)

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



    //containerFormShowDiscapacidad.innerHTML =  visualizadorDatosDiscapacidad()//Componente de Visualizacion

    //agregando Botones para editar
    //containerButtons.innerHTML = btnsComponentEditaFirstDiscapacidad();
}


//validacion de formulario, el cual incluye fichero...


const validacionFormularioFormDISC = async(item)=>{

    let form_data = $('#' + item.id).serializeJSON();

    return form_data.nombreDiscapacidad === undefined;
}


const validacionDocumentoFormularioDISC = async(item) => {

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


const generacionObjetoDISC= async(item)=>{

    let form_data = $('#' + item.id).serializeJSON();
    let idDiscapacidada = form_data.nombreDiscapacidad;
    //let itemInputDocu = item.children[0].children[0].children[3].children[1].children[1].children[0];

    let array = [];
    let object = {

        Discapacidad: idDiscapacidada
    };


    array.push(object);
    let data = JSON.stringify(array);


    return await getDataFromServerHidden('definirDiscapacidad','POST',data)

}


const generacionObjetoDISCUpdate= async(item, idCurriculumFo)=>{

    let form_data = $('#' + item.id).serializeJSON();


    let idDiscapacidada = form_data.nombreDiscapacidad;

    //let itemInputDocu = item.children[0].children[0].children[3].children[1].children[1].children[0];

    let array = [];
    let object = {

        Discapacidad: idDiscapacidada
        ,idPersonaTipoDiscapacidad: idCurriculumFo
    };


    array.push(object);
    let data = JSON.stringify(array);

    return await getDataFromServerHidden('actualizarDiscapacidad','POST',data)

}


function editarFormularioDiscapacidad(params) {

    console.log("Editando datos");

    //Contenedor de botones
    let containerButtons = params.parentNode.parentNode;


    //SkeletondeHeader (Contenedor)
    let skeletonHeader = params.parentNode.parentNode.parentNode.parentNode.children[0].children[0]
    //SkeletonBody (Contenedor)
    let skeletonBody = params.parentNode.parentNode.parentNode.parentNode.children[1].children[0]

    //input para valor de Discapacidad
    let inputValueDiscapacidad = params.parentNode.parentNode.parentNode.children[1].children[0].value

    console.log(inputValueDiscapacidad)

    //input para documento de Discapacidad
    let inputValueDocumentDiscapacidad = params.parentNode.parentNode.parentNode.children[1].children[1].value

    console.log(inputValueDocumentDiscapacidad)

    //Contenedor card-body
    let cardBody = params.parentNode.parentNode.parentNode.parentNode.children[1];

    //Contenedor principal1 (container-form)
    let containerForm = params.parentNode.parentNode.parentNode.parentNode.children[1].children[1];

    //ContenedorFormularioParent (form-action) //Se realiza Escritura de componente visualizador

    let containerFormShowDiscapacidad = params.parentNode.parentNode.parentNode.parentNode.children[1].children[1].children[0]


    containerFormShowDiscapacidad.innerHTML =  formularioNuevoDiscapacidad()//Componente de Visualizacion

    //agregando Botones para editar
    containerButtons.innerHTML = btnsComponentEditaCancelaFirstDiscapacidad();

}


function editarFormularioDiscapacidadInicial(params) {

    console.log("Editando datos INICIALES :)");

    //Contenedor de botones
    let containerButtons = params.parentNode.parentNode;


    //SkeletondeHeader (Contenedor)
    let skeletonHeader = params.parentNode.parentNode.parentNode.parentNode.children[0].children[0]
    //SkeletonBody (Contenedor)
    let skeletonBody = params.parentNode.parentNode.parentNode.parentNode.children[1].children[0]

    //input para valor de Discapacidad
    let inputValueDiscapacidad = params.parentNode.parentNode.parentNode.children[1].children[0].value

    console.log(inputValueDiscapacidad)

    //input para documento de Discapacidad
    let inputValueDocumentDiscapacidad = params.parentNode.parentNode.parentNode.children[1].children[1].value

    console.log(inputValueDocumentDiscapacidad)

    //Contenedor card-body
    let cardBody = params.parentNode.parentNode.parentNode.parentNode.children[1];

    //Contenedor principal1 (container-form)
    let containerForm = params.parentNode.parentNode.parentNode.parentNode.children[1].children[1];

    //ContenedorFormularioParent (form-action) //Se realiza Escritura de componente visualizador

    let containerFormShowDiscapacidad = params.parentNode.parentNode.parentNode.parentNode.children[1].children[1].children[0]


    containerFormShowDiscapacidad.innerHTML =  formularioNuevoDiscapacidad()//Componente de Visualizacion

    //agregando Botones para editar
    containerButtons.innerHTML = btnsComponentEditaCancelaFirstDiscapacidadINICIAL();

}

async function guardarEdicionDiscapacidad(params) {

    console.log("Guardando datos en edicion");

    //Contenedor de botones
    let containerButtons = params.parentNode.parentNode;


    //SkeletondeHeader (Contenedor)
    let skeletonHeader = params.parentNode.parentNode.parentNode.parentNode.children[0].children[0]
    //SkeletonBody (Contenedor)
    let skeletonBody = params.parentNode.parentNode.parentNode.parentNode.children[1].children[0]

    //input para valor de Discapacidad
    let inputValueDiscapacidad = params.parentNode.parentNode.parentNode.children[1].children[0].value

    //input para documento de Discapacidad
    let inputValueDocumentDiscapacidad = params.parentNode.parentNode.parentNode.children[1].children[1].value

    //Contenedor card-body
    let cardBody = params.parentNode.parentNode.parentNode.parentNode.children[1];

    //Contenedor principal1 (container-form)
    let containerForm = params.parentNode.parentNode.parentNode.parentNode.children[1].children[1];

    //ContenedorFormularioParent (form-action) //Se realiza Escritura de componente visualizador

    let containerFormShowDiscapacidad = params.parentNode.parentNode.parentNode.parentNode.children[1].children[1].children[0]


    //En esta parte va la edicion

    let formValidacion = await validacionFormularioFormDISC(containerFormShowDiscapacidad);



    if (formValidacion){
        swal({
            title:"Atención",
            text: "• Por favor, revise los campos correspondientes del formulario.",
            type: "warning"
        });

    }else{

        skeletonHeader.hidden = false
        skeletonBody.hidden = false;

        containerButtons.hidden = true;
        containerForm.hidden = true;


        //es aqui donde se guarda el idPersona
        let idCurriculumFo = params.parentNode.parentNode.parentNode.children[1].children[0].value
        let idDocument = params.parentNode.parentNode.parentNode.children[1].children[1].value;

        let response = await generacionObjetoDISCUpdate(containerFormShowDiscapacidad,idCurriculumFo)
        console.log(response)
        if (response.noError === "0"){


            let itemDiscapacidad = await getDiscapacidad(idCurriculumFo);

            //console.log(itemDiscapacidad);

            //console.log(dataFormacionDiscapacidad.findItemByIdCurriculum(idCurriculumFo))

            dataFormacionDiscapacidad.replaceItemByIdCurriculumFormacion(idCurriculumFo,itemDiscapacidad);


            swal({
                title: "Atención",
                text: "Campos actualizados correctamente",
                type: "success",
            });


            skeletonHeader.hidden = true
            skeletonBody.hidden = true;

            containerButtons.hidden = false;
            containerForm.hidden = false;

            let formacionActual = dataFormacionDiscapacidad.findItemByIdCurriculum(inputValueDiscapacidad)

            containerFormShowDiscapacidad.innerHTML =  visualizadorDatosDiscapacidad(formacionActual)//Componente de Visualizacion
            containerButtons.innerHTML = btnsComponentEditaFirstDiscapacidad();




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


function cancelarEditarFormularioDiscapacidad(params) {

    console.log("Cancelando edicion de datos");
    //Contenedor de botones
    let containerButtons = params.parentNode.parentNode;


    //SkeletondeHeader (Contenedor)
    let skeletonHeader = params.parentNode.parentNode.parentNode.parentNode.children[0].children[0]
    //SkeletonBody (Contenedor)
    let skeletonBody = params.parentNode.parentNode.parentNode.parentNode.children[1].children[0]

    //input para valor de Discapacidad
    let inputValueDiscapacidad = params.parentNode.parentNode.parentNode.children[1].children[0].value

    //input para documento de Discapacidad
    let inputValueDocumentDiscapacidad = params.parentNode.parentNode.parentNode.children[1].children[1].value

    //Contenedor card-body
    let cardBody = params.parentNode.parentNode.parentNode.parentNode.children[1];

    //Contenedor principal1 (container-form)
    let containerForm = params.parentNode.parentNode.parentNode.parentNode.children[1].children[1];

    //ContenedorFormularioParent (form-action) //Se realiza Escritura de componente visualizador

    let containerFormShowDiscapacidad = params.parentNode.parentNode.parentNode.parentNode.children[1].children[1].children[0]

    let formacionActual = dataFormacionDiscapacidad.findItemByIdCurriculum(inputValueDiscapacidad)

    containerFormShowDiscapacidad.innerHTML =  visualizadorDatosDiscapacidad(formacionActual)//Componente de Visualizacion

    //agregando Botones para editar
    containerButtons.innerHTML = btnsComponentEditaFirstDiscapacidad();
}

function cancelarEditarFormularioDiscapacidadINICIAL(params) {

    console.log("Cancelando edicion de datos INICIAL");
    //Contenedor de botones
    let containerButtons = params.parentNode.parentNode;


    //SkeletondeHeader (Contenedor)
    let skeletonHeader = params.parentNode.parentNode.parentNode.parentNode.children[0].children[0]
    //SkeletonBody (Contenedor)
    let skeletonBody = params.parentNode.parentNode.parentNode.parentNode.children[1].children[0]

    //input para valor de Discapacidad
    let inputValueDiscapacidad = params.parentNode.parentNode.parentNode.children[1].children[0].value

    //input para documento de Discapacidad
    let inputValueDocumentDiscapacidad = params.parentNode.parentNode.parentNode.children[1].children[1].value

    //Contenedor card-body
    let cardBody = params.parentNode.parentNode.parentNode.parentNode.children[1];

    //Contenedor principal1 (container-form)
    let containerForm = params.parentNode.parentNode.parentNode.parentNode.children[1].children[1];

    //ContenedorFormularioParent (form-action) //Se realiza Escritura de componente visualizador

    let containerFormShowDiscapacidad = params.parentNode.parentNode.parentNode.parentNode.children[1].children[1].children[0]

    //let formacionActual = dataFormacionDiscapacidad.findItemByIdCurriculum(inputValueDiscapacidad)

    containerFormShowDiscapacidad.innerHTML =  visualizadorDatosDiscapacidadInicial()//Componente de Visualizacion

    //agregando Botones para editar
    containerButtons.innerHTML = btnsComponentEditaFirstDiscapacidadINICIAL();
}




function obtenerDiscapacidad(itemFormacion) {

    let j = Math.floor(Math.random() * 100000);

    return `<div class="container" id="showinfoDiscapacidad">
    <div class="formacionDiscapacidad">
        <div class="card  card-formacion-academica card-formacion-Discapacidad" id="card-formacion-Discapacidad" >
            <div class="card-header">

                <div class="container-skeleton-Discapacidad-BodyCard" hidden>
                    <span class="skeleton-loader"></span>
                </div>

                <div id="values" hidden>
                    <input type="text" name="valueIDCF" id="valueIDCF" hidden disabled value="${itemFormacion.idPersonaTipoDiscapacidad}">
                    <input type="text" name="valueIDoc" id="valueIDoc" hidden disabled value="">
                </div>

                <div class="card-buttons">

                        ${btnsComponentEditaFirstDiscapacidad()}
                </div>
            </div>

            <div class="card-body card-body-back" id="card-componentBody" >

                <div class="container-skeleton-Discapacidad-BodyCard" hidden>
                    <div class="skeleton-section-content">
                        <span class="teasting2">
                        </span>
                    </div>
                </div>

                <div class="container-form">

                    <form action="" name="formacion-Discapacidad-form${j}" id="formacion-Discapacidad-form${j}">

                            <!--Formulario/Info-->
                        ${visualizadorDatosDiscapacidad(itemFormacion)}

                    </form>

                    <div class="container-form-docs" id="container-form-docs${j}">

                    </div>
                </div>
            </div>
        </div>
    </div>
</div>`;

}


function obtenerDiscapacidadInicial(itemFormacion) {

    let j = Math.floor(Math.random() * 100000);

    return `<div class="container" id="showinfoDiscapacidad">
    <div class="formacionDiscapacidad">
        <div class="card  card-formacion-academica card-formacion-Discapacidad" id="card-formacion-Discapacidad" >
            <div class="card-header">

                <div class="container-skeleton-Discapacidad-BodyCard" hidden>
                    <span class="skeleton-loader"></span>
                </div>

                <div id="values" hidden>
                    <input type="text" name="valueIDCF" id="valueIDCF" hidden disabled value="">
                    <input type="text" name="valueIDoc" id="valueIDoc" hidden disabled value="">
                </div>

                <div class="card-buttons">

                        ${btnsComponentEditaFirstDiscapacidadINICIAL()}
                </div>
            </div>

            <div class="card-body card-body-back" id="card-componentBody" >

                <div class="container-skeleton-Discapacidad-BodyCard" hidden>
                    <div class="skeleton-section-content">
                        <span class="teasting2">
                        </span>
                    </div>
                </div>

                <div class="container-form">

                    <form action="" name="formacion-Discapacidad-form${j}" id="formacion-Discapacidad-form${j}">

                            <!--Formulario/Info-->
                        ${visualizadorDatosDiscapacidadInicial()}

                    </form>

                    <div class="container-form-docs" id="container-form-docs${j}">

                    </div>
                </div>
            </div>
        </div>
    </div>
</div>`;

}


const agregarFormacionDiscapacidadInicial = () =>{
    $("#formacionDiscapacidad-elementos").append(obtenerDiscapacidadInicial())
}



const mostrarFormulariosDiscapacidad = async () => {

    let data = await getDataFromServerHidden('getDiscapacidadActuales','GET');
    console.log(data)

    if (data.length>0){

        let dataFormacionDiscapacidadHTML = "";

        data.forEach((item)=>{
            dataFormacionDiscapacidad.addNewItem(item);
            dataFormacionDiscapacidadHTML+= obtenerDiscapacidad(item)
            //dataFormacionDiscapacidadHTML+= `<h1>HI</h1>`
        })
        $("#formacionDiscapacidad-elementos").append(dataFormacionDiscapacidadHTML);


    }else{
        $("#formacionDiscapacidad-elementos").append(obtenerDiscapacidadInicial())
    }




}


/*
const showMostrarAdicionales1= async ()=>{

    await mostrarFormulariosDiscapacidad();
    visibilityComponent('contenedorSkeletonAdicional', true) //skeleton.

    visibilityComponent('opttionesTitleAdicionales', false)
    visibilityComponent('contenedor-formacionAdicional-agregarNuevos', false)

}*/
