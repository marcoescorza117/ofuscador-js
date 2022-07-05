//
function componenteInicialBaseLenguaIndigena(params) {

    let j = Math.floor(Math.random() * 100000);

    return `<div class="container" id="showinfoLenguaIndigena">
    <div class="formacionLenguaIndigena">
        <div class="card card-formacion-academica card-formacion-LenguaIndigena" id="card-formacion-LenguaIndigena" ">
            <div class="card-header">

                <div class="container-skeleton-LenguaIndigena-BodyCard" hidden>
                    <span class="skeleton-loader"></span>
                </div>

                <div id="values" hidden>
                    <input type="text" name="valueIDCF" id="valueIDCF" hidden disabled value="">
                    <input type="text" name="valueIDoc" id="valueIDoc" hidden disabled value="">

                </div>

                <div class="card-buttons">
                    ${btnsComponentGuardarFirstLenguaIndigena()}
                </div>


            </div>

            <div class="card-body card-body-back" id="card-componentBody" >

                <div class="container-skeleton-LenguaIndigena-BodyCard" hidden>
                    <div class="skeleton-section-content">
                        <span class="teasting2">
                        </span>
                    </div>
                </div>

                <div class="container-form">

                    <form action="" name="formacion-LenguaIndigena-form${j}" id="formacion-LenguaIndigena-form${j}">

                            <!--Formulario/Info-->
                        ${formularioNuevoLenguaIndigena()}

                    </form>

                    <div class="container-form-docs" id="container-form-docs${j}">

                    </div>
                </div>
            </div>
        </div>
    </div>

</div>`;
}

//****************INICIA BOTONES DE ACCIONES LenguaIndigena ********************/

//Guarda cambios de formaulario Inicial
function btnsComponentGuardarFirstLenguaIndigena(params) {


    let j = Math.floor(Math.random() * 100000);
    return `
        <div id="guardarLenguaIndigena${j}" class="guardarLenguaIndigena">
            <button type="button" class="btn btn-outline-secondary btn-sm btns-components-action" id="btn-doc-delete${j}" onclick="guardarFormularioLenguaIndigena(this)"><i class="fas fa-save"></i> Guardar</button>
        </div>
    `;
}


function eliminarFormularioLenguaIndigena(params){
    console.log("Eliminando formularios");
    let containerGeneralFormacionLaboral = params.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode
    containerGeneralFormacionLaboral.remove();
}





//Edita cambios de formulario Satisfactorio
function btnsComponentEditaFirstLenguaIndigena(params) {

    let j = Math.floor(Math.random() * 100000);
    return `
    <div id="EditarLenguaIndigena${j}" class="EditarLenguaIndigena">
        <button type="button" class="btn btn-outline-secondary btn-sm btns-components-action" id="btn-doc-delete${j}" onclick="editarFormularioLenguaIndigena(this)"><i class="fas fa-save"></i> Editar</button>
    </div>`;
}

function btnsComponentEditaFirstLenguaIndigenaINICIAL(params) {

    let j = Math.floor(Math.random() * 100000);
    return `
    <div id="EditarLenguaIndigena${j}" class="EditarLenguaIndigena">
        <button type="button" class="btn btn-outline-secondary btn-sm btns-components-action" id="btn-doc-delete${j}" onclick="editarFormularioLenguaIndigenaInicial(this)"><i class="fas fa-save"></i> Editar</button>
    </div>`;
}



//Edita cambios de formulario Satisfactorio
function btnsComponentEditaCancelaFirstLenguaIndigena(params) {

    let j = Math.floor(Math.random() * 100000);
    return `
    <div id="EditarCancelarLenguaIndigena${j}" class="EditarCancelarLenguaIndigena">
        <button type="button" class="btn btn-outline-secondary btn-sm btns-components-action" id="btn-doc-delete${j}" onclick="guardarEdicionLenguaIndigena(this)"><i class="fas fa-save"></i> Guardar</button>
        <button type="button" class="btn btn-outline-secondary btn-sm btns-components-action" id="btn-doc-delete${j}" onclick="cancelarEditarFormularioLenguaIndigena(this)"><i class="fas fa-save"></i> Cancelar</button>
    </div>
    `;
}


//Edita cambios de formulario Satisfactorio INICIAL
function btnsComponentEditaCancelaFirstLenguaIndigenaINICIAL(params) {

    let j = Math.floor(Math.random() * 100000);
    return `
    <div id="EditarCancelarLenguaIndigena${j}" class="EditarCancelarLenguaIndigena">
        <button type="button" class="btn btn-outline-secondary btn-sm btns-components-action" id="btn-doc-delete${j}" onclick="guardarFormularioLenguaIndigena(this)"><i class="fas fa-save"></i> Guardar</button>
        <button type="button" class="btn btn-outline-secondary btn-sm btns-components-action" id="btn-doc-delete${j}" onclick="cancelarEditarFormularioLenguaIndigenaINICIAL(this)"><i class="fas fa-save"></i> Cancelar</button>
    </div>
    `;
}



function btnsComponentEditaGuardarInicial(params) {

    let j = Math.floor(Math.random() * 100000);
    return `
    <div id="EditarCancelarLenguaIndigena${j}" class="EditarCancelarLenguaIndigena">
        <button type="button" class="btn btn-outline-secondary btn-sm btns-components-action" id="btn-doc-delete${j}" onclick="editarFormularioLenguaIndigena(this)"><i class="fas fa-save"></i> Editar</button>
    </div>
    `;
}



//****************TERMINA BOTONES DE ACCIONES LenguaIndigena ********************/

/*
1,Candidato a Investigador Nacional
2,Investigador Nacional Nivel I
3,Investigador Nacional Nivel II
4,Investigador Nacional Nivel III*/

//Formulario inicial de LenguaIndigenao ///Tener en cuenta de que se tiene que editar deacuerdo al formulario....
function formularioNuevoLenguaIndigena(params) {

    return `
    <div>
        <div class="form-row justify-content-center">

            <div class="form-group col-md-8">
                ${componentSelectLenguaIndigena()}
            </div>
        </div>
    </div>
    `;
}


function componentSelectLenguaIndigena(){
    return `
        <h6>Lengua indigena:</h6>
        <select class="browser-default custom-select" name="nombreLengua" id="nombreLengua" ">
            <option selected disabled>Seleccione una opción</option>
            ${generateSelectLenguaIndigena()}
        </select>`;
}


const generateSelectLenguaIndigena = ()=>{

    let lenguaIndigena = dataCatalogoLenguaIndigena.getAllData();

    let selectItem = '';
    lenguaIndigena.forEach((item) => {
        selectItem += `<option value="${item.idLenguaIndigena}">${item.lenguaIndigena}</option>`;
    });
    return selectItem;
}



function visualizadorDatosLenguaIndigena(params) {

    return `
    <div>
        <div class="form-row ">
            <div class="form-group col-md-6">
                <h6>¿Habla alguna lengua indigena?:</h6>
                <p>Si</p>
            </div>

            <div class="form-group col-md-6">
                <h6>Nombre de lengua indigena:</h6>
                <p>${params.lenguaIndigena}</p>
            </div>
        </div>
    </div>
    `
}



function visualizadorDatosLenguaIndigenaInicial(params) {

    return `
    <div>
        <div class="form-row ">
            <div class="form-group col-md-6">
                <h6>¿Habla alguna lengua indigena?:</h6>
                <p>No</p>
            </div>

            <div class="form-group col-md-6">
                <h6>Nombre de lengua indigena:</h6>
                <p>*Seleccione lengua indigena..</p>
            </div>
        </div>
    </div>
    `
}


const obtenerEnlaceDocumentoLANG = (item) =>{
    //obtener datsode idPersonaLenguaIndigena....

    let idCurriculumDocs  = item.idPersonaLenguaIndigena

    let documento = dataDocumentosFormaciones.findItemByIdCurriculum(idCurriculumDocs)


    try {
        let documentoIndividual = documento[0];

        //Buscar en respositorioDocumento

        return `<a target="_blank" href="/prospecto/documentoFormacionObtener/${documentoIndividual.idDocumento}">${documentoIndividual.archivo}</a>`;
    }catch (e){


        return `<p>SIN DOCUMLANGO</p>`
    }


}

//************TERMINA COMPONLANGES DE LenguaIndigena

//************Inicia Actions de LenguaIndigena

const getLenguaIndigena =async (item) =>{
    let dataa = await getDataFromServerHidden(`getLenguaIndigenaIndividual/${item}`,'POST')
    return dataa[0];
}


async function guardarFormularioLenguaIndigena(params) {
    console.log("Guardando datos");

    //Contenedor de botones
    let containerButtons = params.parentNode.parentNode;

    //SkeletondeHeader (Contenedor)
    let skeletonHeader = params.parentNode.parentNode.parentNode.parentNode.children[0].children[0]
    //SkeletonBody (Contenedor)
    let skeletonBody = params.parentNode.parentNode.parentNode.parentNode.children[1].children[0]

    //input para valor de LenguaIndigena
    let inputValueLenguaIndigena = params.parentNode.parentNode.parentNode.children[1].children[0].value

    //input para documento de LenguaIndigena
    let inputValueDocumentLenguaIndigena = params.parentNode.parentNode.parentNode.children[1].children[1].value

    //Contenedor card-body
    let cardBody = params.parentNode.parentNode.parentNode.parentNode.children[1];

    console.log(cardBody)

    //Contenedor principal1 (container-form)
    let containerForm = params.parentNode.parentNode.parentNode.parentNode.children[1].children[1];

    //ContenedorFormularioParent (form-action) //Se realiza Escritura de componente visualizador
    let containerFormShowLenguaIndigena = params.parentNode.parentNode.parentNode.parentNode.children[1].children[1].children[0]


    //validando datos para formulario....
    let formValidacion = await validacionFormularioFormLANG(containerFormShowLenguaIndigena);


    //let validacionDocs = await validacionDocumentoFormularioLANG(containerFormShowLenguaIndigena);

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


        let response = await generacionObjetoLANG(containerFormShowLenguaIndigena);
        console.log(response)

        if (response.noError === "0"){

            let inputValueLenguaIndigenaSEcond = params.parentNode.parentNode.parentNode.children[1].children[0]

            //input para documento de LenguaIndigena
            let inputValueDocumentLenguaIndigenaSecond = params.parentNode.parentNode.parentNode.children[1].children[1]


            inputValueLenguaIndigena = response.idPersonaLenguaIndigena; // valor de idPersonaLenguaIndigena
            inputValueLenguaIndigenaSEcond.value = response.idPersonaLenguaIndigena;

            let itemLenguaIndigena = await getLenguaIndigena(inputValueLenguaIndigena); // formacion de actual

            console.log(itemLenguaIndigena);
            dataFormacionLenguaIndigena.addNewItem(itemLenguaIndigena);

            swal({
                title: "Atención",
                text: "Campos guardados correctamente",
                type: "success",
            });

            let formacionActual = dataFormacionLenguaIndigena.findItemByIdCurriculum(inputValueLenguaIndigena)

            containerFormShowLenguaIndigena.innerHTML =  visualizadorDatosLenguaIndigena(formacionActual)//Componente de Visualizacion

            skeletonHeader.hidden = true
            skeletonBody.hidden = true;

            containerButtons.hidden = false;
            containerForm.hidden = false;

            containerButtons.innerHTML = btnsComponentEditaFirstLenguaIndigena();

            //console.log(inputValueLenguaIndigenaSEcond)
            //console.log(inputValueLenguaIndigenaSEcond.value)

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



    //containerFormShowLenguaIndigena.innerHTML =  visualizadorDatosLenguaIndigena()//Componente de Visualizacion

    //agregando Botones para editar
    //containerButtons.innerHTML = btnsComponentEditaFirstLenguaIndigena();
}


//validacion de formulario, el cual incluye fichero...


const validacionFormularioFormLANG = async(item)=>{

    let form_data = $('#' + item.id).serializeJSON();

    return form_data.nombreLengua === undefined;
}


const validacionDocumentoFormularioLANG = async(item) => {

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


const generacionObjetoLANG= async(item)=>{

    let form_data = $('#' + item.id).serializeJSON();
    let idLenguaIndigenaa = form_data.nombreLengua;
    //let itemInputDocu = item.children[0].children[0].children[3].children[1].children[1].children[0];

    let array = [];
    let object = {

        LenguaIndigenaa: idLenguaIndigenaa
    };


    array.push(object);
    let data = JSON.stringify(array);


    return await getDataFromServerHidden('definirLenguaIndigena','POST',data)

}


const generacionObjetoLANGUpdate= async(item, idCurriculumFo)=>{

    let form_data = $('#' + item.id).serializeJSON();


    let idLenguaIndigenaa = form_data.nombreLengua;

    //let itemInputDocu = item.children[0].children[0].children[3].children[1].children[1].children[0];

    let array = [];
    let object = {

         LenguaIndigenaa: idLenguaIndigenaa
        ,idPersonaLenguaIndigena: idCurriculumFo
    };


    array.push(object);
    let data = JSON.stringify(array);

    return await getDataFromServerHidden('actualizarLenguaIndigena','POST',data)

}


function editarFormularioLenguaIndigena(params) {

    console.log("Editando datos");

    //Contenedor de botones
    let containerButtons = params.parentNode.parentNode;


    //SkeletondeHeader (Contenedor)
    let skeletonHeader = params.parentNode.parentNode.parentNode.parentNode.children[0].children[0]
    //SkeletonBody (Contenedor)
    let skeletonBody = params.parentNode.parentNode.parentNode.parentNode.children[1].children[0]

    //input para valor de LenguaIndigena
    let inputValueLenguaIndigena = params.parentNode.parentNode.parentNode.children[1].children[0].value

    console.log(inputValueLenguaIndigena)

    //input para documento de LenguaIndigena
    let inputValueDocumentLenguaIndigena = params.parentNode.parentNode.parentNode.children[1].children[1].value

    console.log(inputValueDocumentLenguaIndigena)

    //Contenedor card-body
    let cardBody = params.parentNode.parentNode.parentNode.parentNode.children[1];

    //Contenedor principal1 (container-form)
    let containerForm = params.parentNode.parentNode.parentNode.parentNode.children[1].children[1];

    //ContenedorFormularioParent (form-action) //Se realiza Escritura de componente visualizador

    let containerFormShowLenguaIndigena = params.parentNode.parentNode.parentNode.parentNode.children[1].children[1].children[0]


    containerFormShowLenguaIndigena.innerHTML =  formularioNuevoLenguaIndigena()//Componente de Visualizacion

    //agregando Botones para editar
    containerButtons.innerHTML = btnsComponentEditaCancelaFirstLenguaIndigena();

}


function editarFormularioLenguaIndigenaInicial(params) {

    console.log("Editando datos INICIALES :)");

    //Contenedor de botones
    let containerButtons = params.parentNode.parentNode;


    //SkeletondeHeader (Contenedor)
    let skeletonHeader = params.parentNode.parentNode.parentNode.parentNode.children[0].children[0]
    //SkeletonBody (Contenedor)
    let skeletonBody = params.parentNode.parentNode.parentNode.parentNode.children[1].children[0]

    //input para valor de LenguaIndigena
    let inputValueLenguaIndigena = params.parentNode.parentNode.parentNode.children[1].children[0].value

    console.log(inputValueLenguaIndigena)

    //input para documento de LenguaIndigena
    let inputValueDocumentLenguaIndigena = params.parentNode.parentNode.parentNode.children[1].children[1].value

    console.log(inputValueDocumentLenguaIndigena)

    //Contenedor card-body
    let cardBody = params.parentNode.parentNode.parentNode.parentNode.children[1];

    //Contenedor principal1 (container-form)
    let containerForm = params.parentNode.parentNode.parentNode.parentNode.children[1].children[1];

    //ContenedorFormularioParent (form-action) //Se realiza Escritura de componente visualizador

    let containerFormShowLenguaIndigena = params.parentNode.parentNode.parentNode.parentNode.children[1].children[1].children[0]


    containerFormShowLenguaIndigena.innerHTML =  formularioNuevoLenguaIndigena()//Componente de Visualizacion

    //agregando Botones para editar
    containerButtons.innerHTML = btnsComponentEditaCancelaFirstLenguaIndigenaINICIAL();

}

async function guardarEdicionLenguaIndigena(params) {

    console.log("Guardando datos en edicion");

    //Contenedor de botones
    let containerButtons = params.parentNode.parentNode;


    //SkeletondeHeader (Contenedor)
    let skeletonHeader = params.parentNode.parentNode.parentNode.parentNode.children[0].children[0]
    //SkeletonBody (Contenedor)
    let skeletonBody = params.parentNode.parentNode.parentNode.parentNode.children[1].children[0]

    //input para valor de LenguaIndigena
    let inputValueLenguaIndigena = params.parentNode.parentNode.parentNode.children[1].children[0].value

    //input para documento de LenguaIndigena
    let inputValueDocumentLenguaIndigena = params.parentNode.parentNode.parentNode.children[1].children[1].value

    //Contenedor card-body
    let cardBody = params.parentNode.parentNode.parentNode.parentNode.children[1];

    //Contenedor principal1 (container-form)
    let containerForm = params.parentNode.parentNode.parentNode.parentNode.children[1].children[1];

    //ContenedorFormularioParent (form-action) //Se realiza Escritura de componente visualizador

    let containerFormShowLenguaIndigena = params.parentNode.parentNode.parentNode.parentNode.children[1].children[1].children[0]


    //En esta parte va la edicion

    let formValidacion = await validacionFormularioFormLANG(containerFormShowLenguaIndigena);



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

        let response = await generacionObjetoLANGUpdate(containerFormShowLenguaIndigena,idCurriculumFo)
        console.log(response)
        if (response.noError === "0"){


            let itemLenguaIndigena = await getLenguaIndigena(idCurriculumFo);

            //console.log(itemLenguaIndigena);

            //console.log(dataFormacionLenguaIndigena.findItemByIdCurriculum(idCurriculumFo))

            dataFormacionLenguaIndigena.replaceItemByIdCurriculumFormacion(idCurriculumFo,itemLenguaIndigena);


            swal({
                title: "Atención",
                text: "Campos actualizados correctamente",
                type: "success",
            });


            skeletonHeader.hidden = true
            skeletonBody.hidden = true;

            containerButtons.hidden = false;
            containerForm.hidden = false;

            let formacionActual = dataFormacionLenguaIndigena.findItemByIdCurriculum(inputValueLenguaIndigena)

            containerFormShowLenguaIndigena.innerHTML =  visualizadorDatosLenguaIndigena(formacionActual)//Componente de Visualizacion
            containerButtons.innerHTML = btnsComponentEditaFirstLenguaIndigena();




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


function cancelarEditarFormularioLenguaIndigena(params) {

    console.log("Cancelando edicion de datos");
    //Contenedor de botones
    let containerButtons = params.parentNode.parentNode;


    //SkeletondeHeader (Contenedor)
    let skeletonHeader = params.parentNode.parentNode.parentNode.parentNode.children[0].children[0]
    //SkeletonBody (Contenedor)
    let skeletonBody = params.parentNode.parentNode.parentNode.parentNode.children[1].children[0]

    //input para valor de LenguaIndigena
    let inputValueLenguaIndigena = params.parentNode.parentNode.parentNode.children[1].children[0].value

    //input para documento de LenguaIndigena
    let inputValueDocumentLenguaIndigena = params.parentNode.parentNode.parentNode.children[1].children[1].value

    //Contenedor card-body
    let cardBody = params.parentNode.parentNode.parentNode.parentNode.children[1];

    //Contenedor principal1 (container-form)
    let containerForm = params.parentNode.parentNode.parentNode.parentNode.children[1].children[1];

    //ContenedorFormularioParent (form-action) //Se realiza Escritura de componente visualizador

    let containerFormShowLenguaIndigena = params.parentNode.parentNode.parentNode.parentNode.children[1].children[1].children[0]

    let formacionActual = dataFormacionLenguaIndigena.findItemByIdCurriculum(inputValueLenguaIndigena)

    containerFormShowLenguaIndigena.innerHTML =  visualizadorDatosLenguaIndigena(formacionActual)//Componente de Visualizacion

    //agregando Botones para editar
    containerButtons.innerHTML = btnsComponentEditaFirstLenguaIndigena();
}

function cancelarEditarFormularioLenguaIndigenaINICIAL(params) {

    console.log("Cancelando edicion de datos INICIAL");
    //Contenedor de botones
    let containerButtons = params.parentNode.parentNode;


    //SkeletondeHeader (Contenedor)
    let skeletonHeader = params.parentNode.parentNode.parentNode.parentNode.children[0].children[0]
    //SkeletonBody (Contenedor)
    let skeletonBody = params.parentNode.parentNode.parentNode.parentNode.children[1].children[0]

    //input para valor de LenguaIndigena
    let inputValueLenguaIndigena = params.parentNode.parentNode.parentNode.children[1].children[0].value

    //input para documento de LenguaIndigena
    let inputValueDocumentLenguaIndigena = params.parentNode.parentNode.parentNode.children[1].children[1].value

    //Contenedor card-body
    let cardBody = params.parentNode.parentNode.parentNode.parentNode.children[1];

    //Contenedor principal1 (container-form)
    let containerForm = params.parentNode.parentNode.parentNode.parentNode.children[1].children[1];

    //ContenedorFormularioParent (form-action) //Se realiza Escritura de componente visualizador

    let containerFormShowLenguaIndigena = params.parentNode.parentNode.parentNode.parentNode.children[1].children[1].children[0]

    //let formacionActual = dataFormacionLenguaIndigena.findItemByIdCurriculum(inputValueLenguaIndigena)

    containerFormShowLenguaIndigena.innerHTML =  visualizadorDatosLenguaIndigenaInicial()//Componente de Visualizacion

    //agregando Botones para editar
    containerButtons.innerHTML = btnsComponentEditaFirstLenguaIndigenaINICIAL();
}




function obtenerLenguaIndigena(itemFormacion) {

    let j = Math.floor(Math.random() * 100000);

    return `<div class="container" id="showinfoLenguaIndigena">
    <div class="formacionLenguaIndigena">
        <div class="card  card-formacion-academica card-formacion-LenguaIndigena" id="card-formacion-LenguaIndigena" >
            <div class="card-header">

                <div class="container-skeleton-LenguaIndigena-BodyCard" hidden>
                    <span class="skeleton-loader"></span>
                </div>

                <div id="values" hidden>
                    <input type="text" name="valueIDCF" id="valueIDCF" hidden disabled value="${itemFormacion.idPersonaLenguaIndigena}">
                    <input type="text" name="valueIDoc" id="valueIDoc" hidden disabled value="">
                </div>

                <div class="card-buttons">

                        ${btnsComponentEditaFirstLenguaIndigena()}
                </div>
            </div>

            <div class="card-body card-body-back" id="card-componentBody" >

                <div class="container-skeleton-LenguaIndigena-BodyCard" hidden>
                    <div class="skeleton-section-content">
                        <span class="teasting2">
                        </span>
                    </div>
                </div>

                <div class="container-form">

                    <form action="" name="formacion-LenguaIndigena-form${j}" id="formacion-LenguaIndigena-form${j}">

                            <!--Formulario/Info-->
                        ${visualizadorDatosLenguaIndigena(itemFormacion)}

                    </form>

                    <div class="container-form-docs" id="container-form-docs${j}">

                    </div>
                </div>
            </div>
        </div>
    </div>
</div>`;

}


function obtenerLenguaIndigenaInicial(itemFormacion) {

    let j = Math.floor(Math.random() * 100000);

    return `<div class="container" id="showinfoLenguaIndigena">
    <div class="formacionLenguaIndigena">
        <div class="card  card-formacion-academica card-formacion-LenguaIndigena" id="card-formacion-LenguaIndigena" >
            <div class="card-header">

                <div class="container-skeleton-LenguaIndigena-BodyCard" hidden>
                    <span class="skeleton-loader"></span>
                </div>

                <div id="values" hidden>
                    <input type="text" name="valueIDCF" id="valueIDCF" hidden disabled value="">
                    <input type="text" name="valueIDoc" id="valueIDoc" hidden disabled value="">
                </div>

                <div class="card-buttons">

                        ${btnsComponentEditaFirstLenguaIndigenaINICIAL()}
                </div>
            </div>

            <div class="card-body card-body-back" id="card-componentBody" >

                <div class="container-skeleton-LenguaIndigena-BodyCard" hidden>
                    <div class="skeleton-section-content">
                        <span class="teasting2">
                        </span>
                    </div>
                </div>

                <div class="container-form">

                    <form action="" name="formacion-LenguaIndigena-form${j}" id="formacion-LenguaIndigena-form${j}">

                            <!--Formulario/Info-->
                        ${visualizadorDatosLenguaIndigenaInicial()}

                    </form>

                    <div class="container-form-docs" id="container-form-docs${j}">

                    </div>
                </div>
            </div>
        </div>
    </div>
</div>`;

}


const agregarFormacionLenguaIndigenaInicial = () =>{
    $("#formacionLenguaIndigena-elementos").append(obtenerLenguaIndigenaInicial())
}



const mostrarFormulariosLenguaIndigena = async () => {

    let data = await getDataFromServerHidden('getLenguaIndigenasActuales','GET');
    console.log(data)

    if (data.length>0){

        let dataFormacionLenguaIndigenaHTML = "";

        data.forEach((item)=>{
            dataFormacionLenguaIndigena.addNewItem(item);
            dataFormacionLenguaIndigenaHTML+= obtenerLenguaIndigena(item)
            //dataFormacionLenguaIndigenaHTML+= `<h1>HI</h1>`
        })
        $("#formacionLenguaIndigena-elementos").append(dataFormacionLenguaIndigenaHTML);


    }else{
        $("#formacionLenguaIndigena-elementos").append(obtenerLenguaIndigenaInicial())
    }




}

//Catalogo de lenguas indigenas....Esto servira para select
const obtenerCatalogosLenguaIndigena = async () =>{

    let data  = await getDataFromServerHidden('getLenguaIndigenasCatalogo','GET');
    dataCatalogoLenguaIndigena.setInitialData(data)
    //console.log(data);
}

const showMostrarAdicionales = async ()=>{


    await  obtenerCatalogosLenguaIndigena();
    await mostrarFormulariosLenguaIndigena();
    await mostrarFormulariosDiscapacidad();

    visibilityComponent('contenedorSkeletonAdicional', true) //skeleton.

    visibilityComponent('opttionesTitleAdicionales', false)
    visibilityComponent('contenedor-formacionAdicional-agregarNuevos', false)
    //visibilityComponent('contenedor-formacionLenguaIndigena-agregarNuevos', false)
    //visibilityComponent('formacionLenguaIndigena-elementos', false)
}
