//
function componenteInicialBaseEntrevista(params) {

    let j = Math.floor(Math.random() * 100000);

    return `<div class="container" id="showinfoEntrevista">
    <div class="formacionEntrevista">
        <div class="card  card-formacion-academica card-formacion-Entrevista" id="card-formacion-Entrevista" ">
            <div class="card-header">

                <div class="container-skeleton-Entrevista-BodyCard" hidden>
                    <span class="skeleton-loader"></span>
                </div>

                <div id="values" hidden>
                    <input type="text" name="valueIDCF" id="valueIDCF" hidden disabled value="">
                    <input type="text" name="valueIDoc" id="valueIDoc" hidden disabled value="">

                </div>

                <div class="card-buttons">
                    ${btnsComponentGuardarFirstEntrevista()}
                </div>


            </div>

            <div class="card-body card-body-back" id="card-componentBody" >

                <div class="container-skeleton-Entrevista-BodyCard" hidden>
                    <div class="skeleton-section-content">
                        <span class="teasting2">
                        </span>
                    </div>
                </div>

                <div class="container-form">

                    <form action="" name="formacion-Entrevista-form${j}" id="formacion-Entrevista-form${j}">

                            <!--Formulario/Info-->
                        ${formularioNuevoEntrevista()}

                    </form>

                    <div class="container-form-docs" id="container-form-docs${j}">

                    </div>
                </div>
            </div>
        </div>
    </div>

</div>`;
}

//****************INICIA BOTONES DE ACCIONES Entrevista ********************/

//Guarda cambios de formaulario Inicial
function btnsComponentGuardarFirstEntrevista(params) {


    let j = Math.floor(Math.random() * 100000);
    return `
        <div id="guardarEntrevista${j}" class="guardarEntrevista">
            <button type="button" class="btn btn-outline-secondary btn-sm btns-components-action" id="btn-doc-delete${j}" onclick="guardarFormularioEntrevista(this)"><i class="fas fa-save"></i> Guardar</button>
        </div>
    `;
}


function eliminarFormularioEntrevista(params){
    console.log("Eliminando formularios");
    let containerGeneralFormacionLaboral = params.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode
    containerGeneralFormacionLaboral.remove();
}





//Edita cambios de formulario Satisfactorio
function btnsComponentEditaFirstEntrevista(params) {

    let j = Math.floor(Math.random() * 100000);
    return `
    <div id="EditarEntrevista${j}" class="EditarEntrevista">
        <button type="button" class="btn btn-outline-secondary btn-sm btns-components-action" id="btn-doc-delete${j}" onclick="editarFormularioEntrevista(this)"><i class="fas fa-save"></i> Editar</button>
    </div>`;
}

function btnsComponentEditaFirstEntrevistaINICIAL(params) {

    let j = Math.floor(Math.random() * 100000);
    return `
    <div id="EditarEntrevista${j}" class="EditarEntrevista">
        <button type="button" class="btn btn-outline-secondary btn-sm btns-components-action" id="btn-doc-delete${j}" onclick="editarFormularioEntrevistaInicial(this)"><i class="fas fa-save"></i> Editar</button>
    </div>`;
}



//Edita cambios de formulario Satisfactorio
function btnsComponentEditaCancelaFirstEntrevista(params) {

    let j = Math.floor(Math.random() * 100000);
    return `
    <div id="EditarCancelarEntrevista${j}" class="EditarCancelarEntrevista">
        <button type="button" class="btn btn-outline-secondary btn-sm btns-components-action" id="btn-doc-delete${j}" onclick="guardarEdicionEntrevista(this)"><i class="fas fa-save"></i> Guardar</button>
        <button type="button" class="btn btn-outline-secondary btn-sm btns-components-action" id="btn-doc-delete${j}" onclick="cancelarEditarFormularioEntrevista(this)"><i class="fas fa-save"></i> Cancelar</button>
    </div>
    `;
}


//Edita cambios de formulario Satisfactorio INICIAL
function btnsComponentEditaCancelaFirstEntrevistaINICIAL(params) {

    let j = Math.floor(Math.random() * 100000);
    return `
    <div id="EditarCancelarEntrevista${j}" class="EditarCancelarEntrevista">
        <button type="button" class="btn btn-outline-secondary btn-sm btns-components-action" id="btn-doc-delete${j}" onclick="guardarFormularioEntrevista(this)"><i class="fas fa-save"></i> Guardar</button>
        <button type="button" class="btn btn-outline-secondary btn-sm btns-components-action" id="btn-doc-delete${j}" onclick="cancelarEditarFormularioEntrevistaINICIAL(this)"><i class="fas fa-save"></i> Cancelar</button>
    </div>
    `;
}



function btnsComponentEditaGuardarInicial(params) {

    let j = Math.floor(Math.random() * 100000);
    return `
    <div id="EditarCancelarEntrevista${j}" class="EditarCancelarEntrevista">
        <button type="button" class="btn btn-outline-secondary btn-sm btns-components-action" id="btn-doc-delete${j}" onclick="editarFormularioEntrevista(this)"><i class="fas fa-save"></i> Editar</button>
    </div>
    `;
}



//****************TERMINA BOTONES DE ACCIONES Entrevista ********************/

/*
1,Candidato a Investigador Nacional
2,Investigador Nacional Nivel I
3,Investigador Nacional Nivel II
4,Investigador Nacional Nivel III*/

//Formulario inicial de Entrevistao ///Tener en cuenta de que se tiene que editar deacuerdo al formulario....
function formularioNuevoEntrevista(params) {

    return `
    <div>
        <div class="form-row justify-content-center">

            <div class="form-group col-md-12">
                <h6>¿Cómo se entero de esta oportunidad de empleo?</h6>
                <input type="text" class="form-control" name="oportunidad" id="oportunidad" placeholder="Redes sociales, familiares, amigos " autocomplete="off" >
            </div>


        </div>

        <div class="row justify-content-center">

            <div class="form-group col-md-12">
                <h6>¿Quién le invito a laborar en la Universidad Autónoma del Estado de Hidalgo?</h6>
                <input type="text" class="form-control" name="quieninvito" id="quien-invito" placeholder="Familiares, amigos, iniciativa propia" autocomplete="off" >
            </div>

        </div>

        <div class="form-row justify-content-center">

            <div class="form-group col-md-12">
                <h6>¿Por qué le interesa trabajar en la Universidad Autónoma del Estado de Hidalgo?</h6>
                <input type="text" class="form-control" name="interes" id="interes" placeholder="Motivos de interés"  autocomplete="off" >
            </div>

        </div>

        <div class="form-row justify-content-center">
            <div class="form-group col-md-12">

                <h6>¿Tiene familiares laborando en la UAEH?:</h6>
                <div>
                    <div class="form-check form-check-inline">
                        <input class="form-check-input" type="radio" name="familiaresLaborando" id="familiaresLaborandoSI" value="S">
                        <label class="form-check-label" for="familiaresLaborandoSI">Si</label>
                    </div>
                    <div class="form-check form-check-inline">
                        <input class="form-check-input" type="radio" name="familiaresLaborando" id="familiaresLaborandoNO" value="N">
                        <label class="form-check-label" for="familiaresLaborandoNO">No</label>
                    </div>
                </div>
            </div>
        </div>
    </div>
    `;
}



function visualizadorDatosEntrevista(params) {

    return `
    <div>
        <div class="form-row justify-content-center">

            <div class="form-group col-md-12">
                <h6>¿Cómo se entero de esta oportunidad de empleo?</h6>
                <p>${params.formaEntero}</p>
            </div>

        </div>

        <div class="row justify-content-center">

            <div class="form-group col-md-12">
                <h6>¿Quién le invito a laborar en la Universidad Autónoma del Estado de Hidalgo?</h6>
                <p>${params.personaInvito}</p>
            </div>

        </div>

        <div class="form-row justify-content-center">

            <div class="form-group col-md-12">
                <h6>¿Por qué le interesa trabajar en la Universidad Autónoma del Estado de Hidalgo?</h6>
                <p>${params.motivoTrabajarInstitucion}</p>
            </div>

        </div>

        <div class="form-row justify-content-center">
            <div class="form-group col-md-12">

                <h6>¿Tiene familiares laborando en la UAEH?:</h6>
                <div>
                      <p>${resolveFamiliares(params.familiaresLaborandoInstitucion)}</p>
                </div>
            </div>
        </div>
    </div>
    `
}

function resolveFamiliares(item) {
    return item === 'S' ? 'Si' : 'No';
}


function visualizadorDatosEntrevistaInicial(params) {

    return `
    <div>
        <div class="form-row justify-content-center">

            <div class="form-group col-md-12">
                <h6>¿Cómo se entero de esta oportunidad de empleo?</h6>
                <p>Por favor, agregue los datos correspondientes</p>
            </div>

        </div>

        <div class="row justify-content-center">

            <div class="form-group col-md-12">
                <h6>¿Quién le invito a laborar en la Universidad Autónoma del Estado de Hidalgo?</h6>
                <p>Por favor, agregue los datos correspondientes</p>
            </div>

        </div>

        <div class="form-row justify-content-center">

            <div class="form-group col-md-12">
                <h6>¿Por qué le interesa trabajar en la Universidad Autónoma del Estado de Hidalgo?</h6>
                <p>Por favor, agregue los datos correspondientes</p>
            </div>

        </div>

        <div class="form-row justify-content-center">
            <div class="form-group col-md-12">

                <h6>¿Tiene familiares laborando en la UAEH?:</h6>
                <div>
                      <p>Por favor, agregue los datos correspondientes</p>
                </div>
            </div>
        </div>
    </div>
    `
}


const obtenerEnlaceDocumentoENT = (item) =>{
    //obtener datsode idEntrevista....

    let idCurriculumDocs  = item.idEntrevista

    let documento = dataDocumentosFormaciones.findItemByIdCurriculum(idCurriculumDocs)


    try {
        let documentoIndividual = documento[0];

        //Buscar en respositorioDocumento

        return `<a target="_blank" href="/prospecto/documentoFormacionObtener/${documentoIndividual.idDocumento}">${documentoIndividual.archivo}</a>`;
    }catch (e){


        return `<p>SIN DOCUMENTO</p>`
    }


}

//************TERMINA COMPONENTES DE Entrevista

//************Inicia Actions de Entrevista

const getEntrevista =async (item) =>{
    let dataa = await getDataFromServerHidden(`getEntrevistaIndividual/${item}`,'POST')
    return dataa[0];
}


async function guardarFormularioEntrevista(params) {
    console.log("Guardando datos");

    //Contenedor de botones
    let containerButtons = params.parentNode.parentNode;

    //SkeletondeHeader (Contenedor)
    let skeletonHeader = params.parentNode.parentNode.parentNode.parentNode.children[0].children[0]
    //SkeletonBody (Contenedor)
    let skeletonBody = params.parentNode.parentNode.parentNode.parentNode.children[1].children[0]

    //input para valor de Entrevista
    let inputValueEntrevista = params.parentNode.parentNode.parentNode.children[1].children[0].value

    //input para documento de Entrevista
    let inputValueDocumentEntrevista = params.parentNode.parentNode.parentNode.children[1].children[1].value

    //Contenedor card-body
    let cardBody = params.parentNode.parentNode.parentNode.parentNode.children[1];

    console.log(cardBody)

    //Contenedor principal1 (container-form)
    let containerForm = params.parentNode.parentNode.parentNode.parentNode.children[1].children[1];

    //ContenedorFormularioParent (form-action) //Se realiza Escritura de componente visualizador
    let containerFormShowEntrevista = params.parentNode.parentNode.parentNode.parentNode.children[1].children[1].children[0]


    //validando datos para formulario....
    let formValidacion = await validacionFormularioFormENT(containerFormShowEntrevista);


    //let validacionDocs = await validacionDocumentoFormularioENT(containerFormShowEntrevista);

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


        let response = await generacionObjetoENT(containerFormShowEntrevista);
        console.log(response)

        if (response.noError === "0"){

            let inputValueEntrevistaSEcond = params.parentNode.parentNode.parentNode.children[1].children[0]

            //input para documento de Entrevista
            let inputValueDocumentEntrevistaSecond = params.parentNode.parentNode.parentNode.children[1].children[1]


            inputValueEntrevista = response.idEntrevista; // valor de idEntrevista
            inputValueEntrevistaSEcond.value = response.idEntrevista;

            let itemEntrevista = await getEntrevista(inputValueEntrevista); // formacion de actual

            console.log(itemEntrevista);
            dataFormacionEntrevista.addNewItem(itemEntrevista);

            swal({
                title: "Atención",
                text: "Campos guardados correctamente",
                type: "success",
            });

            let formacionActual = dataFormacionEntrevista.findItemByIdCurriculum(inputValueEntrevista)

            containerFormShowEntrevista.innerHTML =  visualizadorDatosEntrevista(formacionActual)//Componente de Visualizacion

            skeletonHeader.hidden = true
            skeletonBody.hidden = true;

            containerButtons.hidden = false;
            containerForm.hidden = false;

            containerButtons.innerHTML = btnsComponentEditaFirstEntrevista();

            //console.log(inputValueEntrevistaSEcond)
            //console.log(inputValueEntrevistaSEcond.value)

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



    //containerFormShowEntrevista.innerHTML =  visualizadorDatosEntrevista()//Componente de Visualizacion

    //agregando Botones para editar
    //containerButtons.innerHTML = btnsComponentEditaFirstEntrevista();
}


//validacion de formulario, el cual incluye fichero...


const validacionFormularioFormENT = async(item)=>{

    let form_data = $('#' + item.id).serializeJSON();

    return form_data.oportunidad=== ''
        || form_data.quieninvito=== ''
        || form_data.interes=== ''
        || form_data.familiaresLaborando===undefined
    //return form_data.nombreEntrevista === '' ||form_data.paternoEntrevista === '' ||form_data.maternoEntrevista === '' ||form_data.parentesco === undefined ||form_data.adscription === ''
    //return form_data.tipo=== undefined || form_data.inicioVigencia=== ''|| form_data.terminoVigencia=== '';
}


const validacionDocumentoFormularioENT = async(item) => {

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


const generacionObjetoENT= async(item)=>{

    let form_data = $('#' + item.id).serializeJSON();
    let oportunidad = form_data.oportunidad
    let quieninvito = form_data.quieninvito
    let interes = form_data.interes
    let familiaresLaborando = form_data.familiaresLaborando

    //let itemInputDocu = item.children[0].children[0].children[3].children[1].children[1].children[0];

    let array = [];
    let object = {

         formaEntero :oportunidad
        ,personaInvito:quieninvito
        ,motivoTrabajarInstitucion:interes
        ,familiaresLaborandoInstitucion:familiaresLaborando

    };


    array.push(object);
    let data = JSON.stringify(array);


    return await getDataFromServerHidden('definirEntrevista','POST',data)

}


const generacionObjetoENTUpdate= async(item, idCurriculumFo)=>{

    let form_data = $('#' + item.id).serializeJSON();

    let oportunidad = form_data.oportunidad
    let quieninvito = form_data.quieninvito
    let interes = form_data.interes
    let familiaresLaborando = form_data.familiaresLaborando

    //let itemInputDocu = item.children[0].children[0].children[3].children[1].children[1].children[0];

    let array = [];
    let object = {

         formaEntero :oportunidad
        ,personaInvito:quieninvito
        ,motivoTrabajarInstitucion:interes
        ,familiaresLaborandoInstitucion:familiaresLaborando
        ,idEntrevista: idCurriculumFo

    };


    array.push(object);
    let data = JSON.stringify(array);


    return await getDataFromServerHidden('actualizarEntrevista','POST',data)

}


function editarFormularioEntrevista(params) {

    console.log("Editando datos");

    //Contenedor de botones
    let containerButtons = params.parentNode.parentNode;


    //SkeletondeHeader (Contenedor)
    let skeletonHeader = params.parentNode.parentNode.parentNode.parentNode.children[0].children[0]
    //SkeletonBody (Contenedor)
    let skeletonBody = params.parentNode.parentNode.parentNode.parentNode.children[1].children[0]

    //input para valor de Entrevista
    let inputValueEntrevista = params.parentNode.parentNode.parentNode.children[1].children[0].value

    console.log(inputValueEntrevista)

    //input para documento de Entrevista
    let inputValueDocumentEntrevista = params.parentNode.parentNode.parentNode.children[1].children[1].value

    console.log(inputValueDocumentEntrevista)

    //Contenedor card-body
    let cardBody = params.parentNode.parentNode.parentNode.parentNode.children[1];

    //Contenedor principal1 (container-form)
    let containerForm = params.parentNode.parentNode.parentNode.parentNode.children[1].children[1];

    //ContenedorFormularioParent (form-action) //Se realiza Escritura de componente visualizador

    let containerFormShowEntrevista = params.parentNode.parentNode.parentNode.parentNode.children[1].children[1].children[0]


    containerFormShowEntrevista.innerHTML =  formularioNuevoEntrevista()//Componente de Visualizacion

    //agregando Botones para editar
    containerButtons.innerHTML = btnsComponentEditaCancelaFirstEntrevista();

}


function editarFormularioEntrevistaInicial(params) {

    console.log("Editando datos INICIALES :)");

    //Contenedor de botones
    let containerButtons = params.parentNode.parentNode;


    //SkeletondeHeader (Contenedor)
    let skeletonHeader = params.parentNode.parentNode.parentNode.parentNode.children[0].children[0]
    //SkeletonBody (Contenedor)
    let skeletonBody = params.parentNode.parentNode.parentNode.parentNode.children[1].children[0]

    //input para valor de Entrevista
    let inputValueEntrevista = params.parentNode.parentNode.parentNode.children[1].children[0].value

    console.log(inputValueEntrevista)

    //input para documento de Entrevista
    let inputValueDocumentEntrevista = params.parentNode.parentNode.parentNode.children[1].children[1].value

    console.log(inputValueDocumentEntrevista)

    //Contenedor card-body
    let cardBody = params.parentNode.parentNode.parentNode.parentNode.children[1];

    //Contenedor principal1 (container-form)
    let containerForm = params.parentNode.parentNode.parentNode.parentNode.children[1].children[1];

    //ContenedorFormularioParent (form-action) //Se realiza Escritura de componente visualizador

    let containerFormShowEntrevista = params.parentNode.parentNode.parentNode.parentNode.children[1].children[1].children[0]


    containerFormShowEntrevista.innerHTML =  formularioNuevoEntrevista()//Componente de Visualizacion

    //agregando Botones para editar
    containerButtons.innerHTML = btnsComponentEditaCancelaFirstEntrevistaINICIAL();

}

async function guardarEdicionEntrevista(params) {

    console.log("Guardando datos en edicion");

    //Contenedor de botones
    let containerButtons = params.parentNode.parentNode;


    //SkeletondeHeader (Contenedor)
    let skeletonHeader = params.parentNode.parentNode.parentNode.parentNode.children[0].children[0]
    //SkeletonBody (Contenedor)
    let skeletonBody = params.parentNode.parentNode.parentNode.parentNode.children[1].children[0]

    //input para valor de Entrevista
    let inputValueEntrevista = params.parentNode.parentNode.parentNode.children[1].children[0].value

    //input para documento de Entrevista
    let inputValueDocumentEntrevista = params.parentNode.parentNode.parentNode.children[1].children[1].value

    //Contenedor card-body
    let cardBody = params.parentNode.parentNode.parentNode.parentNode.children[1];

    //Contenedor principal1 (container-form)
    let containerForm = params.parentNode.parentNode.parentNode.parentNode.children[1].children[1];

    //ContenedorFormularioParent (form-action) //Se realiza Escritura de componente visualizador

    let containerFormShowEntrevista = params.parentNode.parentNode.parentNode.parentNode.children[1].children[1].children[0]


    //En esta parte va la edicion

    let formValidacion = await validacionFormularioFormENT(containerFormShowEntrevista);



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

        let response = await generacionObjetoENTUpdate(containerFormShowEntrevista,idCurriculumFo)
        console.log(response)
        if (response.noError === "0"){


            let itemEntrevista = await getEntrevista(idCurriculumFo);

            //console.log(itemEntrevista);

            //console.log(dataFormacionEntrevista.findItemByIdCurriculum(idCurriculumFo))

            dataFormacionEntrevista.replaceItemByIdCurriculumFormacion(idCurriculumFo,itemEntrevista);


            swal({
                title: "Atención",
                text: "Campos actualizados correctamente",
                type: "success",
            });


            skeletonHeader.hidden = true
            skeletonBody.hidden = true;

            containerButtons.hidden = false;
            containerForm.hidden = false;

            let formacionActual = dataFormacionEntrevista.findItemByIdCurriculum(inputValueEntrevista)

            containerFormShowEntrevista.innerHTML =  visualizadorDatosEntrevista(formacionActual)//Componente de Visualizacion
            containerButtons.innerHTML = btnsComponentEditaFirstEntrevista();




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


function cancelarEditarFormularioEntrevista(params) {

    console.log("Cancelando edicion de datos");
    //Contenedor de botones
    let containerButtons = params.parentNode.parentNode;


    //SkeletondeHeader (Contenedor)
    let skeletonHeader = params.parentNode.parentNode.parentNode.parentNode.children[0].children[0]
    //SkeletonBody (Contenedor)
    let skeletonBody = params.parentNode.parentNode.parentNode.parentNode.children[1].children[0]

    //input para valor de Entrevista
    let inputValueEntrevista = params.parentNode.parentNode.parentNode.children[1].children[0].value

    //input para documento de Entrevista
    let inputValueDocumentEntrevista = params.parentNode.parentNode.parentNode.children[1].children[1].value

    //Contenedor card-body
    let cardBody = params.parentNode.parentNode.parentNode.parentNode.children[1];

    //Contenedor principal1 (container-form)
    let containerForm = params.parentNode.parentNode.parentNode.parentNode.children[1].children[1];

    //ContenedorFormularioParent (form-action) //Se realiza Escritura de componente visualizador

    let containerFormShowEntrevista = params.parentNode.parentNode.parentNode.parentNode.children[1].children[1].children[0]

    let formacionActual = dataFormacionEntrevista.findItemByIdCurriculum(inputValueEntrevista)

    containerFormShowEntrevista.innerHTML =  visualizadorDatosEntrevista(formacionActual)//Componente de Visualizacion

    //agregando Botones para editar
    containerButtons.innerHTML = btnsComponentEditaFirstEntrevista();
}

function cancelarEditarFormularioEntrevistaINICIAL(params) {

    console.log("Cancelando edicion de datos INICIAL");
    //Contenedor de botones
    let containerButtons = params.parentNode.parentNode;


    //SkeletondeHeader (Contenedor)
    let skeletonHeader = params.parentNode.parentNode.parentNode.parentNode.children[0].children[0]
    //SkeletonBody (Contenedor)
    let skeletonBody = params.parentNode.parentNode.parentNode.parentNode.children[1].children[0]

    //input para valor de Entrevista
    let inputValueEntrevista = params.parentNode.parentNode.parentNode.children[1].children[0].value

    //input para documento de Entrevista
    let inputValueDocumentEntrevista = params.parentNode.parentNode.parentNode.children[1].children[1].value

    //Contenedor card-body
    let cardBody = params.parentNode.parentNode.parentNode.parentNode.children[1];

    //Contenedor principal1 (container-form)
    let containerForm = params.parentNode.parentNode.parentNode.parentNode.children[1].children[1];

    //ContenedorFormularioParent (form-action) //Se realiza Escritura de componente visualizador

    let containerFormShowEntrevista = params.parentNode.parentNode.parentNode.parentNode.children[1].children[1].children[0]

    //let formacionActual = dataFormacionEntrevista.findItemByIdCurriculum(inputValueEntrevista)

    containerFormShowEntrevista.innerHTML =  visualizadorDatosEntrevistaInicial()//Componente de Visualizacion

    //agregando Botones para editar
    containerButtons.innerHTML = btnsComponentEditaFirstEntrevistaINICIAL();
}




function obtenerEntrevista(itemFormacion) {

    let j = Math.floor(Math.random() * 100000);

    return `<div class="container" id="showinfoEntrevista">
    <div class="formacionEntrevista">
        <div class="card  card-formacion-academica card-formacion-Entrevista" id="card-formacion-Entrevista" >
            <div class="card-header">

                <div class="container-skeleton-Entrevista-BodyCard" hidden>
                    <span class="skeleton-loader"></span>
                </div>

                <div id="values" hidden>
                    <input type="text" name="valueIDCF" id="valueIDCF" hidden disabled value="${itemFormacion.idEntrevista}">
                    <input type="text" name="valueIDoc" id="valueIDoc" hidden disabled value="">
                </div>

                <div class="card-buttons">

                        ${btnsComponentEditaFirstEntrevista()}
                </div>
            </div>

            <div class="card-body card-body-back" id="card-componentBody" >

                <div class="container-skeleton-Entrevista-BodyCard" hidden>
                    <div class="skeleton-section-content">
                        <span class="teasting2">
                        </span>
                    </div>
                </div>

                <div class="container-form">

                    <form action="" name="formacion-Entrevista-form${j}" id="formacion-Entrevista-form${j}">

                            <!--Formulario/Info-->
                        ${visualizadorDatosEntrevista(itemFormacion)}

                    </form>

                    <div class="container-form-docs" id="container-form-docs${j}">

                    </div>
                </div>
            </div>
        </div>
    </div>
</div>`;

}


function obtenerEntrevistaInicial(itemFormacion) {

    let j = Math.floor(Math.random() * 100000);

    return `<div class="container" id="showinfoEntrevista">
    <div class="formacionEntrevista">
        <div class="card  card-formacion-academica card-formacion-Entrevista" id="card-formacion-Entrevista" >
            <div class="card-header">

                <div class="container-skeleton-Entrevista-BodyCard" hidden>
                    <span class="skeleton-loader"></span>
                </div>

                <div id="values" hidden>
                    <input type="text" name="valueIDCF" id="valueIDCF" hidden disabled value="">
                    <input type="text" name="valueIDoc" id="valueIDoc" hidden disabled value="">
                </div>

                <div class="card-buttons">

                        ${btnsComponentEditaFirstEntrevistaINICIAL()}
                </div>
            </div>

            <div class="card-body card-body-back" id="card-componentBody" >

                <div class="container-skeleton-Entrevista-BodyCard" hidden>
                    <div class="skeleton-section-content">
                        <span class="teasting2">
                        </span>
                    </div>
                </div>

                <div class="container-form">

                    <form action="" name="formacion-Entrevista-form${j}" id="formacion-Entrevista-form${j}">

                            <!--Formulario/Info-->
                        ${visualizadorDatosEntrevistaInicial()}

                    </form>

                    <div class="container-form-docs" id="container-form-docs${j}">

                    </div>
                </div>
            </div>
        </div>
    </div>
</div>`;

}


const agregarFormacionEntrevistaInicial = () =>{
    $("#formacionEntrevista-elementos").append(obtenerEntrevistaInicial())
}



const mostrarFormulariosEntrevista = async () => {

    let data = await getDataFromServerHidden('getEntrevistasActuales','GET');
    console.log(data)

    if (data.length>0){

        let dataFormacionEntrevistaHTML = "";

        data.forEach((item)=>{
            dataFormacionEntrevista.addNewItem(item);
            dataFormacionEntrevistaHTML+= obtenerEntrevista(item)
        })
        $("#formacionEntrevista-elementos").append(dataFormacionEntrevistaHTML);


    }else{
        $("#formacionEntrevista-elementos").append(obtenerEntrevistaInicial())
    }

}


const showMostrarEntrevista = async ()=>{
    await mostrarFormulariosEntrevista();

    visibilityComponent('contenedorSkeletonEntrevista', true) //skeleton

    visibilityComponent('opttionesTitleEntrevista', false)
    visibilityComponent('contenedor-formacionEntrevista-agregarNuevos', false)
    visibilityComponent('formacionEntrevista-elementos', false)
}
