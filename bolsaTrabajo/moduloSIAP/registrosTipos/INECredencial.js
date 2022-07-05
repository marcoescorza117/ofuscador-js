//
function componenteInicialBaseCredencials(params) {

    let j = Math.floor(Math.random() * 100000);

    return `<div class="container" id="showinfoCredencials">
    <div class="CredencialElector">
        <div class="card  card-formacion-academica card-formacion-CredencialElector" id="card-formacion-CredencialElector">
            <div class="card-header">

                <div class="container-skeleton-CredencialElector-BodyCard" hidden>
                    <span class="skeleton-loader"></span>
                </div>

                <div id="values" hidden>
                    <input type="text" name="valueIDCF" id="valueIDCF" hidden disabled value="">
                    <input type="text" name="valueIDoc" id="valueIDoc" hidden disabled value="">

                </div>

                <div class="card-buttons">
                    ${btnsComponentGuardarFirstCredencials()}
                </div>


            </div>

            <div class="card-body card-body-back" id="card-componentBody" >

                <div class="container-skeleton-CredencialElector-BodyCard" hidden>
                    <div class="skeleton-section-content">
                        <span class="teasting2">
                        </span>
                    </div>
                </div>

                <div class="container-form">

                    <form action="" name="formacion-CredencialElector-form${j}" id="formacion-CredencialElector-form${j}">

                            <!--Formulario/Info-->
                        ${formularioNuevoCredencials()}

                    </form>

                    <div class="container-form-docs" id="container-form-docs${j}">

                    </div>
                </div>
            </div>
        </div>
    </div>

</div>`;
}

//****************INICIA BOTONES DE ACCIONES CredencialElector ********************/

//Guarda cambios de formaulario Inicial
function btnsComponentGuardarFirstCredencials(params) {
    //<button type="button" class="btn btn-outline-secondary btn-sm btns-components-action" id="btn-doc-delete${j}" onclick="eliminarFormularioCredencial(this)"><i class="fas fa-times-circle"></i> Eliminar</button>

    let j = Math.floor(Math.random() * 100000);
    return `
        <div id="guardarCredencials${j}" class="guardarCredencials">
            <button type="button" class="btn btn-outline-secondary btn-sm btns-components-action" id="btn-doc-delete${j}" onclick="guardarFormularioCredencials(this)"><i class="fas fa-save"></i> Guardar</button>

        </div>
    `;
}


function eliminarFormularioCredencial(params){
    console.log("Eliminando formularios");
    let containerGeneralFormacionLaboral = params.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode
    containerGeneralFormacionLaboral.remove();

}





//Edita cambios de formulario Satisfactorio
function btnsComponentEditaFirstCredencials(params) {

    let j = Math.floor(Math.random() * 100000);
    return `
    <div id="EditarCredencials${j}" class="EditarCredencials">
        <button type="button" class="btn btn-outline-secondary btn-sm btns-components-action" id="btn-doc-delete${j}" onclick="editarFormularioCredencials(this)"><i class="fas fa-save"></i> Editar</button>
    </div>`;
}



//Edita cambios de formulario Satisfactorio
function btnsComponentEditaCancelaFirstCredencials(params) {

    let j = Math.floor(Math.random() * 100000);
    return `
    <div id="EditarCancelarCredencials${j}" class="EditarCancelarCredencials">
        <button type="button" class="btn btn-outline-secondary btn-sm btns-components-action" id="btn-doc-delete${j}" onclick="guardarEdicionCredencials(this)"><i class="fas fa-save"></i> Guardar</button>
        <button type="button" class="btn btn-outline-secondary btn-sm btns-components-action" id="btn-doc-delete${j}" onclick="cancelarEditarFormularioCredencials(this)"><i class="fas fa-save"></i> Cancelar</button>
    </div>
    `;
}


//
function btnsComponentCancelaFirstCredencials(params) {

    let j = Math.floor(Math.random() * 100000);
    return `

    <div id="CancelarCredencials${j}" class="EditarCancelarCredencials">
        <button type="button" class="btn btn-outline-secondary btn-sm btns-components-action" id="btn-doc-delete${j}" ><i class="fas fa-save"></i> Guardar</button>
        <button type="button" class="btn btn-outline-secondary btn-sm btns-components-action" id="btn-doc-delete${j}" ><i class="fas fa-save"></i> Cancelar</button>
    </div>
    `;
}


//****************TERMINA BOTONES DE ACCIONES CredencialElector ********************/
//@overwrite
const generateSelectStateINE = () => {
    let estado = dataNacion2.getDataState();
    let itemsEstado = estado[0];
    let selectItem = '';
    itemsEstado.forEach((item) => {
        selectItem += `<option value="${item.idEntidadfederativa}-${item.clave}">${item.entidadFederativa}</option>`;
    });
    return selectItem;
}

//Formulario inicial de Credencialso ///Tener en cuenta de que se tiene que editar deacuerdo al formulario....
function formularioNuevoCredencials(params) {

    return `
    <div>
        <div class="form-row" >
            <div class="form-group col-md-3">
                <h6>Clave de elector:</h6>
                <input type="text" maxlength="20" class="form-control" name="electorClave" id="electorClave" oninput="eliminarEspacios(this)" autocomplete="off" placeholder="Clave">
            </div>

            <div class="form-group col-md-3">
                <h6>Folio:</h6>
                <input type="text" maxlength="18" class="form-control" name="folioNumero" id="folioNumero" oninput="eliminarEspacios(this)" autocomplete="off" placeholder="Folio">
            </div>

            <div class="form-group col-md-3">
                <h6>Número de credencial:</h6>
                <input type="text" maxlength="18" class="form-control" name="credencialNumero" id="credencialNumero" oninput="eliminarEspacios(this)" autocomplete="off" placeholder="Número de credencial">
            </div>

            <div class="form-group col-md-3">
                <h6>Fecha de vigencia:</h6>
                <input type="text" maxlength="18" class="form-control" name="vigenciaAnio" id="vigenciaAnio" oninput="eliminarEspacios(this)" autocomplete="off" placeholder="Año">
            </div>
        </div>

        <hr>
        <div class="form-row">

            <div class="form-group col-md-3">
                <h6>Entidad federativa:</h6>
                <select class="browser-default custom-select" name="entidadFederativaClave" id="entidadFederativaClave" onchange="onShowEstado(this)">
                    <option selected disabled="">Seleccione</option>
                    ${generateSelectStateINE()}
                </select>

            </div>

            <div class="form-group col-md-3">
                <h6>Municipio:</h6>
                <select class="browser-default custom-select" name="municipioClave" id="municipioClave">
                    <option selected="" disabled="">Seleccione</option>
                </select>
            </div>

            <div class="form-group col-md-3">
                <h6>Localidad:</h6>
                <input type="text" class="form-control" name="localidadClave" id="localidadClave" oninput="eliminarEspacios(this)" autocomplete="off" placeholder="Localidad">
            </div>
            <div class="form-group col-md-3">
                <h6>Seccion:</h6>
                <input type="text" class="form-control" name="seccionClave" id="seccionClave" oninput="eliminarEspacios(this)" autocomplete="off" placeholder="Localidad">
            </div>
        </div>
    </div>
    `;
}



function visualizadorDatosCredencials(params) {

    return `
    <div>
        <div class="form-row">

            <div class="form-group col-md-3">
                <h6>Clave de elector:</h6>
                <p>${params.electorClave}</p>
            </div>

            <div class="form-group col-md-3">
                <h6>Folio:</h6>
                <p>${params.folioNumero}</p>
            </div>

            <div class="form-group col-md-3">
                <h6>Número de credencial (OCR):</h6>
                <p>${params.credencialNumero}</p>
            </div>

            <div class="form-group col-md-3">
                <h6>Fecha de vigencia:</h6>
                <p>${params.vigenciaAnio}</p>
            </div>
        </div>

        <hr>

        <div class="form-row">

            <div class="form-group col-md-3">
                <h6>Entidad federativa (clave): </h6>
                <p>${params.entidadFederativaClave}</p>
            </div>

            <div class="form-group col-md-3">
                <h6>Municipio: </h6>
                <p>${params.municipioClave}</p>
            </div>

            <div class="form-group col-md-3">
                <h6>Localidad: </h6>
                <p>${params.localidadClave}</p>
            </div>

            <div class="form-group col-md-3">
                <h6>Sección: </h6>
                <p>${params.seccionClave}</p>
            </div>

        </div>
    </div>
    `
}


//Esto no deberia de estar.....pero solo es fines de prueba XD



//************TERMINA COMPONENTES DE CredencialElector

//************Inicia Actions de CredencialElector

const getCredencials =async (item) =>{

    let idUser = document.getElementById('_idUnique').value;
    return await getDataFromServerHidden(`obtenerDatosCredencial/${idUser}`, 'GET');
}


async function guardarFormularioCredencials(params) {
    console.log("Guardando datos");

    //Contenedor de botones
    let containerButtons = params.parentNode.parentNode;

    //SkeletondeHeader (Contenedor)
    let skeletonHeader = params.parentNode.parentNode.parentNode.parentNode.children[0].children[0]
    //SkeletonBody (Contenedor)
    let skeletonBody = params.parentNode.parentNode.parentNode.parentNode.children[1].children[0]

    //input para valor de CredencialElector
    let inputValueCredencials = params.parentNode.parentNode.parentNode.children[1].children[0].value

    //input para documento de CredencialElector
    let inputValueDocumentCredencials = params.parentNode.parentNode.parentNode.children[1].children[1].value

    //Contenedor card-body
    let cardBody = params.parentNode.parentNode.parentNode.parentNode.children[1];

    console.log(cardBody)

    //Contenedor principal1 (container-form)
    let containerForm = params.parentNode.parentNode.parentNode.parentNode.children[1].children[1];

    //ContenedorFormularioParent (form-action) //Se realiza Escritura de componente visualizador
    let containerFormShowCredencials = params.parentNode.parentNode.parentNode.parentNode.children[1].children[1].children[0]


    //validando datos para formulario....
    let formValidacion = await validacionFormularioFormCredencial(containerFormShowCredencials);

    //let validacionDocs = await validacionDocumentoFormularioFAM(containerFormShowCredencials);


    if (formValidacion){
        console.log("Hay error... ")

        swal({
            title:"Atención",
            text: "° Por favor, revise los campos correspondientes del formulario.",
            type: "warning"
        });
    }else{

        //Comportamiento de skeletons....
        skeletonHeader.hidden = false
        skeletonBody.hidden = false;

        containerButtons.hidden = true;
        containerForm.hidden = true;


        /*let response = await generacionObjetoCred(containerFormShowCredencials);
        console.log(response)*/
        //es aqui donde se guarda el idPersona
        let idCurriculumFo = params.parentNode.parentNode.parentNode.children[1].children[0].value
        let idDocument = params.parentNode.parentNode.parentNode.children[1].children[1].value;

        let response = await generacionObjetoCredUpdate(containerFormShowCredencials,idCurriculumFo)



        if (response.noError === "0"){


            let itemCredencials = await getCredencials(idCurriculumFo);

            itemCredencials.forEach(item => dataFormacionCredencials.setDataRequest(item))
            swal({
                title: "Atención",
                text: "Campos actualizados correctamente",
                type: "success",
            });



            /*let inputValueCredencialsSEcond = params.parentNode.parentNode.parentNode.children[1].children[0]

            //input para documento de CredencialElector
            let inputValueDocumentCredencialsSecond = params.parentNode.parentNode.parentNode.children[1].children[1]


            inputValueCredencials = response.idPersona; // valor de idPersona
            inputValueCredencialsSEcond.value = response.idPersona;

            let itemCredencials = await getCredencials(inputValueCredencials); // formacion de actual

            console.log(itemCredencials);
            dataFormacionCredencials.setDataRequest(itemCredencials);

            swal({
                title: "Atención",
                text: "Campos guardados correctamente",
                type: "success",
            });

            let formacionActual = dataFormacionCredencials.getDataRequest()

            containerFormShowCredencials.innerHTML =  visualizadorDatosCredencials(formacionActual[0])//Componente de Visualizacion*/

            skeletonHeader.hidden = true
            skeletonBody.hidden = true;

            containerButtons.hidden = false;
            containerForm.hidden = false;

            let formacionActual = dataFormacionCredencials.getDataRequest()

            console.log("Despues de editar")

            console.log(formacionActual)
            containerFormShowCredencials.innerHTML =  visualizadorDatosCredencials(formacionActual[0])//Componente de Visualizacion

            containerButtons.innerHTML = btnsComponentEditaFirstCredencials();

            //console.log(inputValueCredencialsSEcond)
            //console.log(inputValueCredencialsSEcond.value)

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



    //containerFormShowCredencials.innerHTML =  visualizadorDatosCredencials()//Componente de Visualizacion

    //agregando Botones para editar
    //containerButtons.innerHTML = btnsComponentEditaFirstCredencials();
}


//validacion de formulario, el cual incluye fichero...


const validacionFormularioFormCredencial = async(item)=>{

    let form_data = $('#' + item.id).serializeJSON();
    //return form_data.nombreCredencial === '' ||form_data.paternoCredencial === '' ||form_data.maternoCredencial === '' ||form_data.parentesco === undefined ||form_data.adscription === ''
    //return form_data.tipo=== undefined || form_data.inicioVigencia=== ''|| form_data.terminoVigencia=== '';

    return form_data.electorClave === ''
        || form_data.folioNumero === ''
        || form_data.credencialNumero === ''
        || form_data.vigenciaAnio === ''
        || form_data.entidadFederativaClave === undefined
        || form_data.municipioClave === undefined
        || form_data.localidadClave === ''
        || form_data.seccionClave === ''
}

const generacionObjetoCred= async(item)=>{

    /*let form_data = $('#' + item.id).serializeJSON();


    let nombrefamiliar = form_data.nombreCredencial;
    let apPaterno = form_data.paternoCredencial;
    let apMaterno = form_data.maternoCredencial;

    let parestnesco = form_data.parentesco;
    let adscripcion = form_data.adscription;

    //let itemInputDocu = item.children[0].children[0].children[3].children[1].children[1].children[0];

    let array = [];
    let object = {
        nombre: nombrefamiliar
        ,apellidoPaterno: apPaterno
        ,apellidoMaterno: apMaterno
        ,parentesco: parestnesco
        ,adscripcion : adscripcion
    };


    array.push(object);
    let data = JSON.stringify(array);


    //return await getDataFromServerHidden('definirCredencials','POST',data)*/


    let idUser = document.getElementById('_idUnique').value;

    let form_data = $('#' + item.id).serializeJSON();

    let electorClave = form_data.electorClave
    let folioNumero = form_data.folioNumero
    let credencialNumero = form_data.credencialNumero
    let vigenciaAnio = form_data.vigenciaAnio
    let entidadFederativaClave = form_data.entidadFederativaClave
    let municipioClave = form_data.municipioClave
    let localidadClave = form_data.localidadClave
    let seccionClave = form_data.seccionClave


    let array = [];
    let object = {

        electorClave:electorClave
        ,folioNumero:folioNumero
        ,credencialNumero:credencialNumero
        ,vigenciaAnio:vigenciaAnio
        ,entidadFederativaClave:entidadFederativaClave
        ,municipioClave:municipioClave
        ,localidadClave:localidadClave
        ,seccionClave:seccionClave
        ,idPersona: idUser
    };

    array.push(object);
    let data = JSON.stringify(array);

    return await getDataFromServerHidden('actualizarCredencials','POST',data)

}


const generacionObjetoCredUpdate= async(item, idCurriculumFo)=>{

    let idUser = document.getElementById('_idUnique').value;

    let form_data = $('#' + item.id).serializeJSON();

    let electorClave = form_data.electorClave
    let folioNumero = form_data.folioNumero
    let credencialNumero = form_data.credencialNumero
    let vigenciaAnio = form_data.vigenciaAnio
    let entidadFederativaClave = form_data.entidadFederativaClave

    let estadoClave = entidadFederativaClave.split('-')[0];
    let estadoClaveIne = entidadFederativaClave.split('-')[1];



    let municipioClave = form_data.municipioClave

    let MunicipioClave = municipioClave.split('-')[0];
    let MunicipioClaveIne = municipioClave.split('-')[1];



    let localidadClave = form_data.localidadClave
    let seccionClave = form_data.seccionClave


    let array = [];
    let object = {

         electorClave:electorClave
        ,folioNumero:folioNumero
        ,credencialNumero:credencialNumero
        ,vigenciaAnio:vigenciaAnio
        ,entidadFederativaClave:estadoClaveIne
        ,municipioClave:MunicipioClaveIne
        ,localidadClave:localidadClave
        ,seccionClave:seccionClave
        ,idPersona: idUser
    };

    array.push(object);
    let data = JSON.stringify(array);

    return await getDataFromServerHidden('actualizarCredencials','POST',data)

}


function editarFormularioCredencials(params) {

    console.log("Editando datos");

    //Contenedor de botones
    let containerButtons = params.parentNode.parentNode;


    //SkeletondeHeader (Contenedor)
    let skeletonHeader = params.parentNode.parentNode.parentNode.parentNode.children[0].children[0]
    //SkeletonBody (Contenedor)
    let skeletonBody = params.parentNode.parentNode.parentNode.parentNode.children[1].children[0]

    //input para valor de CredencialElector
    let inputValueCredencials = params.parentNode.parentNode.parentNode.children[1].children[0].value

    console.log(inputValueCredencials)

    //input para documento de CredencialElector
    let inputValueDocumentCredencials = params.parentNode.parentNode.parentNode.children[1].children[1].value

    console.log(inputValueDocumentCredencials)

    //Contenedor card-body
    let cardBody = params.parentNode.parentNode.parentNode.parentNode.children[1];

    //Contenedor principal1 (container-form)
    let containerForm = params.parentNode.parentNode.parentNode.parentNode.children[1].children[1];

    //ContenedorFormularioParent (form-action) //Se realiza Escritura de componente visualizador

    let containerFormShowCredencials = params.parentNode.parentNode.parentNode.parentNode.children[1].children[1].children[0]


    containerFormShowCredencials.innerHTML =  formularioNuevoCredencials()//Componente de Visualizacion

    //agregando Botones para editar
    containerButtons.innerHTML = btnsComponentEditaCancelaFirstCredencials();

}

async function guardarEdicionCredencials(params) {

    console.log("Guardando datos en edicion");

    //Contenedor de botones
    let containerButtons = params.parentNode.parentNode;


    //SkeletondeHeader (Contenedor)
    let skeletonHeader = params.parentNode.parentNode.parentNode.parentNode.children[0].children[0]
    //SkeletonBody (Contenedor)
    let skeletonBody = params.parentNode.parentNode.parentNode.parentNode.children[1].children[0]

    //input para valor de CredencialElector
    let inputValueCredencials = params.parentNode.parentNode.parentNode.children[1].children[0].value

    //input para documento de CredencialElector
    let inputValueDocumentCredencials = params.parentNode.parentNode.parentNode.children[1].children[1].value

    //Contenedor card-body
    let cardBody = params.parentNode.parentNode.parentNode.parentNode.children[1];

    //Contenedor principal1 (container-form)
    let containerForm = params.parentNode.parentNode.parentNode.parentNode.children[1].children[1];

    //ContenedorFormularioParent (form-action) //Se realiza Escritura de componente visualizador

    let containerFormShowCredencials = params.parentNode.parentNode.parentNode.parentNode.children[1].children[1].children[0]


    //En esta parte va la edicion

    let formValidacion = await validacionFormularioFormCredencial(containerFormShowCredencials);



    if (formValidacion){
        swal({
            title:"Atención",
            text: "° Por favor, revise los campos correspondientes del formulario.",
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

        let response = await generacionObjetoCredUpdate(containerFormShowCredencials,idCurriculumFo)
        console.log(response)
        if (response.noError === "0"){

            let itemCredencials = await getCredencials(idCurriculumFo);

            itemCredencials.forEach(item => dataFormacionCredencials.setDataRequest(item))
            swal({
                title: "Atención",
                text: "Campos actualizados correctamente",
                type: "success",
            });


            skeletonHeader.hidden = true
            skeletonBody.hidden = true;

            containerButtons.hidden = false;
            containerForm.hidden = false;

            let formacionActual = dataFormacionCredencials.getDataRequest()

            console.log("Despues de editar")

            console.log(formacionActual)
            containerFormShowCredencials.innerHTML =  visualizadorDatosCredencials(formacionActual[0])//Componente de Visualizacion
            containerButtons.innerHTML = btnsComponentEditaFirstCredencials();

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


function cancelarEditarFormularioCredencials(params) {

    console.log("Cancelando edicion de datos");
    //Contenedor de botones
    let containerButtons = params.parentNode.parentNode;


    //SkeletondeHeader (Contenedor)
    let skeletonHeader = params.parentNode.parentNode.parentNode.parentNode.children[0].children[0]
    //SkeletonBody (Contenedor)
    let skeletonBody = params.parentNode.parentNode.parentNode.parentNode.children[1].children[0]

    //input para valor de CredencialElector
    let inputValueCredencials = params.parentNode.parentNode.parentNode.children[1].children[0].value

    //input para documento de CredencialElector
    let inputValueDocumentCredencials = params.parentNode.parentNode.parentNode.children[1].children[1].value

    //Contenedor card-body
    let cardBody = params.parentNode.parentNode.parentNode.parentNode.children[1];

    //Contenedor principal1 (container-form)
    let containerForm = params.parentNode.parentNode.parentNode.parentNode.children[1].children[1];

    //ContenedorFormularioParent (form-action) //Se realiza Escritura de componente visualizador

    let containerFormShowCredencials = params.parentNode.parentNode.parentNode.parentNode.children[1].children[1].children[0]

    let formacionActual = dataFormacionCredencials.getDataRequest()

    containerFormShowCredencials.innerHTML =  visualizadorDatosCredencials(formacionActual[0])//Componente de Visualizacion

    //agregando Botones para editar
    containerButtons.innerHTML = btnsComponentEditaFirstCredencials();
}



//Acciones para escribir o sobresscribir en componente dado......

function verificadorFormacionCientificaCredencials(perfilChkFAM) {

    let origin = document.getElementById('CredencialElector');

    if(perfilChkFAM.checked){
        origin.innerHTML = componenteInicialBaseCredencials();


    }else{
        origin.innerHTML = "";
    }
}



function obtenerCredencials(itemFormacion) {

    let j = Math.floor(Math.random() * 100000);

    return `<div class="container" id="showinfoCredencials">
    <div class="CredencialElector">
        <div class="card  card-formacion-academica card-formacion-CredencialElector" id="card-formacion-CredencialElector">
            <div class="card-header">

                <div class="container-skeleton-CredencialElector-BodyCard" hidden>
                    <span class="skeleton-loader"></span>
                </div>

                <div id="values" hidden>
                    <input type="text" name="valueIDCF" id="valueIDCF" hidden disabled value="${itemFormacion.idPersona}">
                    <input type="text" name="valueIDoc" id="valueIDoc" hidden disabled value="">
                </div>

                <div class="card-buttons">

                        ${btnsComponentEditaFirstCredencials()}
                </div>
            </div>

            <div class="card-body card-body-back" id="card-componentBody" >

                <div class="container-skeleton-CredencialElector-BodyCard" hidden>
                    <div class="skeleton-section-content">
                        <span class="teasting2">
                        </span>
                    </div>
                </div>

                <div class="container-form">

                    <form action="" name="formacion-CredencialElector-form${j}" id="formacion-CredencialElector-form${j}">

                            <!--Formulario/Info-->
                        ${visualizadorDatosCredencials(itemFormacion)}

                    </form>

                    <div class="container-form-docs" id="container-form-docs${j}">

                    </div>
                </div>
            </div>
        </div>
    </div>
</div>`;

}




const agregarFormacionCredencials = () =>{
    $("#section-dataCredencial-info").prepend(componenteInicialBaseCredencials())
}





function registerElections(){

    let data = [];
    return{
        getDataRequest: ()=>{
            return data;
        },
        setDataRequest: (value)=>{
            data=[];
            data.push(value)
        },

    }
}

let dataFormacionCredencials = registerElections();

const mostrarFormulariosCredencials = async () => {

    //let data = await getDataFromServerHidden('getfamiliaresActuales','GET');
    let idUser = document.getElementById('_idUnique').value;
    let data = await getDataFromServerHidden(`obtenerDatosCredencial/${idUser}`,'GET');
    //agregarFormacionCredencials();
    //console.log(data.length)


    if (data.length === 0 ){

        console.warn("No existe")
        //Es porqueno existe ningun registro...
        agregarFormacionCredencials();

    }else{
        let dataFormacionCredencialHTML = "";
        data.forEach((item)=>{
            dataFormacionCredencials.setDataRequest(item)
            dataFormacionCredencialHTML += obtenerCredencials(item)

        })
        $("#section-dataCredencial-info").append(dataFormacionCredencialHTML);


        let dataDocumento = `<hr>
                        <h6 class="text-black-50 text-center">Documentación:</h6>
                        ${obtenerDocumentoCorrespondiente("9")}
                `;
        $("#section-dataCredencial-info").append(dataDocumento);


    }

   /* console.log(data);
    let dataFormacionCredencialHTML = "";

    data.forEach((item)=>{
        dataFormacionCredencials.addNewItem(item);
        dataFormacionCredencialHTML+= obtenerCredencials(item)
    })

    $("#CredencialElector-elementos").append(dataFormacionCredencialHTML);*/

}


//Necesarios para obtener municipios de acuerdo al  a sleeccion del items

const splitString = (item) => item.split('-')[0]


const onShowEstado = async (element) =>{
    let valueSelect = element.options[element.selectedIndex].value;
    console.log(valueSelect);

    let estadoClave = valueSelect.split('-')[0];
    let estadoClaveIne = valueSelect.split('-')[1];
    await generateSelectTownINE(estadoClave,"municipioClave");

}

const generateSelectTownINE = async (itemSelected, element) => {
    let getMunicipiosEstado = await getDataFromServerHidden('obtenerClavesINE', 'POST', itemSelected);
    console.log(getMunicipiosEstado);
    $('#' + element).empty().append('<option selected="selected" disabled>Seleccione una opción</option>');

    let selectItem = '';
    if (getMunicipiosEstado.length > 2) {
        getMunicipiosEstado.forEach((item) => {
            selectItem += `<option value="${item.idMunicipio}-${item.clave_INE}">${item.municipio}</option>`;
        })
    } else {
        selectItem += `<option  disabled selected >No hay datos, algo fallo... :X </option>`;
    }

    //return selectItem;
    $("#" + element).append(selectItem);
}



const showMostrarCredencials = async ()=>{
    await setStorageData2(); // Obtiene datos de catalogos como paises....

    await mostrarFormulariosCredencials();

    visibilityComponent('contenedorSkeletonCredencials', true) //skeleton

    visibilityComponent('buttons-data-credencial', false) // section button
    visibilityComponent('section-dataCredencial-info', false)
    //visibilityComponent('contenedor-CredencialElector-agregarNuevos', false)
    //visibilityComponent('CredencialElector-elementos', false)
}
