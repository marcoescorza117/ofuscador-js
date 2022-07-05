//Practicamente es lo mismo que Formacion laboral
//
function componenteInicialBaseformacionFamiliar(j) {
    return `<div class="container" id="showinfoformacionFamiliar">
    <div class="formacionformacionFamiliar">
        <div class="card  card-formacion-academica card-formacion-formacionFamiliar" id="card-formacion-formacionFamiliar">
            <div class="card-header">

                <div class="container-skeleton-formacionFamiliar-BodyCard" hidden>
                    <span class="skeleton-loader"></span>
                </div>

                <div id="values" hidden>
                    <input type="text" name="valueIDCF" id="valueIDCF" hidden disabled value="">
                    <input type="text" name="valueIDoc" id="valueIDoc" hidden disabled value="">
                    <input type="text" name="valueIDTypo" id="valueIDTypo" hidden disabled value="">

                </div>

                <div class="card-buttons">
                    ${btnsComponentGuardarFirstformacionFamiliar()}
                </div>
            </div>

            <div class="card-body card-body-back" id="card-componentBody" >

                <div class="container-skeleton-formacionFamiliar-BodyCard" hidden>
                    <div class="skeleton-section-content">
                        <span class="teasting2">
                        </span>
                    </div>
                </div>

                <div class="container-form">

                    <form action="" name="formacion-formacionFamiliar-form${j}" id="formacion-formacionFamiliar-form${j}">

                                <!--Formulario/Info-->
                        ${formularioNuevoformacionFamiliar(j)}

                    </form>

                    <div class="container-form-docs" id="container-form-docs${j}">

                    </div>
                </div>
            </div>
        </div>
    </div>

</div>`;
}

//****************INICIA BOTONES DE ACCIONES formacionFamiliar ********************/

//Guarda cambios de formaulario Inicial
function btnsComponentGuardarFirstformacionFamiliar(params) {


    let j = Math.floor(Math.random() * 100000);
    return `
        <div id="guardarformacionFamiliar${j}" class="guardarformacionFamiliar">
            <button type="button" class="btn btn-outline-secondary btn-sm btns-components-action" id="btn-doc-delete${j}" onclick="guardarFormularioformacionFamiliar(this)"><i class="fas fa-save"></i> Guardar</button>
            <button type="button" class="btn btn-outline-secondary btn-sm btns-components-action" id="btn-doc-delete${j}" onclick="eliminarFormularioformacionFamiliar(this)"><i class="fas fa-times-circle"></i> Eliminar</button>
        </div>
    `;
}


//Edita cambios de formulario Satisfactorio
function btnsComponentEditaFirstformacionFamiliar(params) {

    let j = Math.floor(Math.random() * 100000);
    return `
    <div id="EditarformacionFamiliar${j}" class="ocultarMostrarTitle">
        <button type="button" class="btn btn-outline-secondary btn-sm btns-components-action" id="btn-doc-delete${j}" onclick="editarFormularioformacionFamiliar(this)"><i class="fas fa-save"></i> Editar</button>
    </div>
    `;
}


//Edita cambios de formulario Satisfactorio
function btnsComponentEditaFirstformacionFamiliarMOSTRAR(params) {

    let j = Math.floor(Math.random() * 100000);
    return `
    <div id="EditarformacionFamiliar${j}" class="ocultarMostrarTitle">
        <button type="button" class="btn btn-outline-secondary btn-sm btns-components-action" id="btn-doc-delete${j}" onclick="editarFormularioformacionFamiliar(this)"><i class="fas fa-save"></i> Editar</button>

    </div>
    `;


    /*return `
    <div id="EditarformacionFamiliar${j}" class="ocultarMostrarTitle">

        <button type="button" class="btn btn-outline-secondary btn-sm btns-components-action" id="btn-doc-delete${j}" onclick="ocultarComponentesFAMILIARCardBody(this)"><i class="fas fa-eye"></i> Mostrar</button>
        <button type="button" class="btn btn-outline-secondary btn-sm btns-components-action" id="btn-doc-delete${j}" onclick="ocultarComponentesFAMILIARCardBody(this)"><i class="fas fa-eye"></i> Mostrar</button>
    </div>
    `;*/
}

//Edita cambios de formulario Satisfactorio
function btnsComponentEditaCancelaFirstformacionFamiliar(params) {

    let j = Math.floor(Math.random() * 100000);
    return `
    <div id="EditarCancelarformacionFamiliar${j}" class="EditarCancelarformacionFamiliar">
        <button type="button" class="btn btn-outline-secondary btn-sm btns-components-action" id="btn-doc-delete${j}" onclick="guardarEdicionformacionFamiliar(this)"><i class="fas fa-save"></i> Guardar</button>
        <button type="button" class="btn btn-outline-secondary btn-sm btns-components-action" id="btn-doc-delete${j}" onclick="cancelarEditarFormularioformacionFamiliar(this)"><i class="fas fa-save"></i> Cancelar</button>
    </div>
    `;
}


//
function btnsComponentCancelaFirstformacionFamiliar(params) {

    let j = Math.floor(Math.random() * 100000);
    return `

    <div id="CancelarformacionFamiliar${j}" class="EditarCancelarformacionFamiliar">
        <button type="button" class="btn btn-outline-secondary btn-sm btns-components-action" id="btn-doc-delete${j}" ><i class="fas fa-save"></i> Guardar</button>
        <button type="button" class="btn btn-outline-secondary btn-sm btns-components-action" id="btn-doc-delete${j}" ><i class="fas fa-save"></i> Cancelar</button>
    </div>
    `;
}

//****************TERMINA BOTONES DE ACCIONES formacionFamiliar ********************


//componentes para formulario
const formComponentAdscripcion = () =>{
    let j = Math.floor(Math.random() * 100000);
    return `
        <div class="form-check" >
            <input class="form-check-input" type="checkbox" name="chkfamiliarLaboral" id="chkfamiliarLaboral${j}"  onchange="verificadorFamiliarAdscription(this)">
            <label class="form-check-label${j}" for="chkfamiliarLaboral${j}">
                * Marque esta casilla si el familiar actualmente labora en la institución.
            </label>
        </div>`;

}


const formComponentAdscripcionCheck = () =>{
    let j = Math.floor(Math.random() * 100000);
    return `
        <div class="form-check" >
            <input class="form-check-input" type="checkbox" name="chkfamiliarLaboral" id="chkfamiliarLaboral${j}"  onchange="verificadorFamiliarAdscription(this)" checked disabled>
            <label class="form-check-label${j}" >
                * Marque esta casilla si el familiar actualmente labora en la institución.
            </label>
        </div>`;

}

const formComponentFechaFamiliar = (text = null) => {
    return `<h6>${text === 1 ? 'Fecha de matrimonio:' : 'Fecha de nacimiento:'}</h6><!--depende mucho del contexto-->
            <input type="text" class="form-control" name="fechaInicioFamiliar" id="fechaInicioFamiliar"   autocomplete="off" oninput="eliminarEspacios(this)" readonly>`
}


const formComponentDocumentoFamiliar = (text = null) => {

    let j = Math.floor(Math.random() * 100000);

    return `<h6>${text === 1 ? 'Acta de matrimonio:': 'Acta de nacimiento:'}</h6><!--depende mucho del contexto-->
                <div class="input-group">
                    <div class="input-group-prepend">
                        <span class="input-group-text" id="inputFileAgregarDOCPERSONALFAMILIAR${j}" name="inputFileAgregarDOCPERSONALFAMILIAR"><i class="fa fa-file"></i></span>
                    </div>
                    <div class="custom-file">
                        <input type="file" class="custom-file-input" id="inputFileAgregarDOCPERSONALFAMILIAR${j}" name="inputFile" aria-describedby="inputGroupFileAddon01" lang="es" accept=".pdf" requiered="">
                        <label class="custom-file-label" for="inputFileAgregarDOCPERSONALFAMILIAR${j}" id="nombreArchivoCargarDOCPERSONALFAMILIAR" name="nombreArchivoCargarDOCPERSONALFAMILIAR">Buscar documento</label>
                    </div>
                </div>`;
}

const formComponentAdscriptionText = () => {

    return `<h6>Adscripción:</h6> <!--depende mucho del contexto-->
                <input type="text" class="form-control" name="adscription" id="adscription"  autocomplete="off" oninput="eliminarEspacios(this)" placeholder="Adscripción actual del familiar">`;

}


const formComponentAdscriptionMessage = () => {

    return `
        <h6>Atención:</h6>
        <small class="text-muted">
            *Para el caso del parentesco "Hermano/Hermana", deberá agregar obligatoriamente la adscripción donde labora el familiar.
        </small>
    `
}



//Formulario inicial de formacionFamiliaro ///Tener en cuenta de que se tiene que editar deacuerdo al formulario....
function formularioNuevoformacionFamiliar(j) {

    return `
    <div>

        <div class="form-row">
             <div class="form-group col-md-4">
                <h6>Parentesco:</h6>
                <select class="browser-default custom-select" name="parentescoFamiliar" id="parentescoFamiliar" onchange="onChangeParentesco(this)">
                    <option selected disabled>Seleccione una opción</option>
                    <option value="1">Madre</option>
                    <option value="2">Padre</option>
                    <option value="3">Hijo/Hija</option>
                    <option value="4">Cónyuge</option>
                    <option value="5">Hermano/Hermana</option>
                </select>
            </div>


             <div class="form-group col-md-8 justify-content-center text-center" id="componenteAdscripcionChk">

            </div>
        </div>

        <div class="form-row">

            <div class="form-group col-md-4">
                <h6>Nombre(s):</h6>
                <input type="text" class="form-control" name="nombresFamiliar" id="nombresFamiliar"  autocomplete="off" oninput="eliminarEspacios(this)" placeholder="Nombres">
            </div>

            <div class="form-group col-md-4">
                <h6>Apellido paterno:</h6>
                <input type="text" class="form-control" name="paternoFamiliar" id="paternoFamiliar"  autocomplete="off" oninput="eliminarEspacios(this)" placeholder="Apellido Paterno">
            </div>

            <div class="form-group col-md-4">
                <h6>Apellido materno:</h6>
                <input type="text" class="form-control" name="maternoFamiliar" id="maternoFamiliar"  autocomplete="off" oninput="eliminarEspacios(this)" placeholder="Apellido Paterno">
            </div>
        </div>

        <div class="form-row">
            <div class="form-group col-md-4" id="componenteFechaFamiliar">

            </div>

            <div class="form-group col-md-8" id="componenteDocumentoFamiliar">

            </div>

        </div>

        <div class="form-row">
            <div class="form-group col-md-8" id="componenteAdscripcion${j}">

            </div>
        </div>

    </div>
    `
}


function formularioNuevoformacionFamiliarEDIT(j, idPersonaParienteValue) {

    let personaParienteFamiliar = dataFormacionFamiliares.findItemByIdCurriculum(idPersonaParienteValue);




    let idTipoParentesco = personaParienteFamiliar.idTipoParentesco;
    let fecha = personaParienteFamiliar.fecha;
    let adscripcion = personaParienteFamiliar.adscripcion

    return `
    <div>
        <div class="form-row">
             <div class="form-group col-md-4">
                <h6>Parentesco:</h6>
                <p>${retornarTipoParentescoPariente(idTipoParentesco)}</p>
            </div>

             <div class="form-group col-md-8 justify-content-center text-center" id="componenteAdscripcionChk">
                    ${encabezadoCheckEdicion(idTipoParentesco,adscripcion)}
            </div>
        </div>

        <div class="form-row">

            <div class="form-group col-md-4">
                <h6>Nombre(s):</h6>
                <input type="text" class="form-control" name="nombresFamiliar" id="nombresFamiliar"  autocomplete="off" oninput="eliminarEspacios(this)" placeholder="Nombres">
            </div>

            <div class="form-group col-md-4">
                <h6>Apellido paterno:</h6>
                <input type="text" class="form-control" name="paternoFamiliar" id="paternoFamiliar"  autocomplete="off" oninput="eliminarEspacios(this)" placeholder="Apellido Paterno">
            </div>

            <div class="form-group col-md-4">
                <h6>Apellido materno:</h6>
                <input type="text" class="form-control" name="maternoFamiliar" id="maternoFamiliar"  autocomplete="off" oninput="eliminarEspacios(this)" placeholder="Apellido Paterno">
            </div>
        </div>

        <div class="form-row">
            <div class="form-group col-md-4" id="componenteFechaFamiliar">
                ${encabezadoFechaFamiliar(idTipoParentesco)}
            </div>

            <div class="form-group col-md-8" id="componenteDocumentoFamiliar">
                ${encabezadoDocumentoFamiliar(idTipoParentesco)}
            </div>

        </div>

        <div class="form-row">
            <div class="form-group col-md-8" id="componenteAdscripcion${j}">
                ${sectionFormAdscripcion(idTipoParentesco, adscripcion)}
            </div>
        </div>

    </div>
    `
}


const encabezadoFechaFamiliar = (idTipoParentesco)=>{

    //
    if(idTipoParentesco === "3" || idTipoParentesco === "4"){
        //idTipoParentesco === "4"  ? return formComponentFechaFamiliar(1) : formComponentFechaFamiliar()
        if (idTipoParentesco === "4"){
            return formComponentFechaFamiliar(1)
        }else{
            return formComponentFechaFamiliar()
        }
    }else{
        return ``;
    }

}


const encabezadoDocumentoFamiliar = (idTipoParentesco) =>{

    if(idTipoParentesco === "3" || idTipoParentesco === "4"){

        if (idTipoParentesco === "4"){

            return formComponentDocumentoFamiliar(1)

        }else{
            return formComponentDocumentoFamiliar();
        }

    }else{
        return ``;
    }

}

const encabezadoCheckEdicion = (idTipoParentesco,adscripcion) =>{

    if (idTipoParentesco === "1" || idTipoParentesco === "2"){

        if (adscripcion === null){
            return formComponentAdscripcion();
        }else{
            return formComponentAdscripcionCheck();
        }
    }

    if (idTipoParentesco === "3" || idTipoParentesco === "4"){

        if (adscripcion===null){
            return formComponentAdscripcion();
        }else{
            return formComponentAdscripcionCheck();
        }
    }

    if (idTipoParentesco === "5"){
        return formComponentAdscriptionMessage();
    }

}


const sectionFormAdscripcion = (idTipoParentesco,adscripcion) =>{

    if (idTipoParentesco === "1" || idTipoParentesco === "2"){

        if (adscripcion!==null){
            return  formComponentAdscriptionText();
        }else{
            return " ";
        }
    }

    if (idTipoParentesco === "3" || idTipoParentesco === "4"){
        if (adscripcion!==null){
            return formComponentAdscriptionText();
        }else{
            return " ";
        }
    }

    if (idTipoParentesco === "5"){
        return formComponentAdscriptionText();
    }
}


function onChangeParentesco(element){
    let itemvalue = element.options[element.selectedIndex].value
    let formContainer = element.parentNode.parentNode.parentNode
    let componenteAdscripcionChk = formContainer.children[0].children[1]
    componenteAdscripcionChk.innerHTML = ""

    let componenteFechaFamiliar  = formContainer.children[2].children[0]
    componenteFechaFamiliar.innerHTML = ""

    let componenteDocumentoFamiliar = formContainer.children[2].children[1]
    componenteDocumentoFamiliar.innerHTML = ""


    let componenteAdscripcion = formContainer.children[3].children[0]
    componenteAdscripcion.innerHTML = " "

    //Padres
    if (itemvalue === "1" || itemvalue ==="2"){
        componenteAdscripcionChk.innerHTML = formComponentAdscripcion();
    }
    //hijo
    if (itemvalue === "3"){
        componenteAdscripcionChk.innerHTML = formComponentAdscripcion();
        componenteFechaFamiliar.innerHTML = formComponentFechaFamiliar();
        componenteDocumentoFamiliar.innerHTML = formComponentDocumentoFamiliar();
        agregarDatePicker('fechaInicioFamiliar');
    }

    //Cónyuge
    if (itemvalue === "4"){
        componenteAdscripcionChk.innerHTML = formComponentAdscripcion();
        componenteFechaFamiliar.innerHTML = formComponentFechaFamiliar(1);
        componenteDocumentoFamiliar.innerHTML = formComponentDocumentoFamiliar(1);
        agregarDatePicker('fechaInicioFamiliar');
    }

    //Hermanos
    if(itemvalue === "5"){
        componenteAdscripcionChk.innerHTML = formComponentAdscriptionMessage()
        componenteAdscripcion.innerHTML = formComponentAdscriptionText()
    }
}

const retornarTipoParentescoPariente = (idParentesco) => {

    if (idParentesco === "1"){
        return `Madre`;
    }
    if (idParentesco === "2"){
        return `Padre`;
    }
    if (idParentesco === "3"){
        return `Hijo/Hija`;
    }
    if (idParentesco === "4"){
        return `Cónyuge`;
    }
    if (idParentesco === "5"){
        return `Hermano/Hermana`;
    }
}

function visualizadorDatosformacionFamiliar(params) {

    let j = Math.floor(Math.random() * 100000);
    return `
    <div>
        <div class="form-row ">
            <div class="form-group col-md-4">
                <h6>Parentesco:</h6>
                <p>${retornarTipoParentescoPariente(params.idTipoParentesco)}</p>
            </div>
        </div>

        <div class="form-row">

            <div class="form-group col-md-4">
                <h6>Nombre(s):</h6>
                <p>${params.nombres}</p>
            </div>

            <div class="form-group col-md-4">
                <h6>Apellido paterno:</h6>
                <p>${params.paterno}</p>
            </div>

            <div class="form-group col-md-4">
                <h6>Apellido materno:</h6>
                <p>${params.materno}</p>
            </div>
        </div>


        <div class="form-row">
            <div class="form-group col-md-4" id="componenteFechaFamiliar">
                    ${obtenerFechaPariente(params)}
            </div>

            <div class="form-group col-md-8" id="componenteDocumentoFamiliar">

                    ${obtenerDocumentoPariente(params)}
            </div>

        </div>


        <div class="form-row">
            <div class="form-group col-md-8" id="componenteAdscripcion${j}">

                    ${obtenerAdscripcionPariente(params)}
            </div>
        </div>

    </div>
    `
}


const obtenerFechaPariente = (params)=>{

    let fecha = params.fecha;
    let idTipoParentesco = params.idTipoParentesco

    if (fecha !== null){
        return `<h6>${idTipoParentesco === "3" ? 'Fecha de nacimiento:': 'Fecha de matrimonio:'}</h6>
                <p>${timeChangeToLocal(fecha)}</p>`;
    }else{
        return ``
    }
}


const obtenerDocumentoPariente = (params) =>{

    //Aqui devolver del reposittorio el documento correspondiente....
    let idTipoParentesco = params.idTipoParentesco
    let idPersonaPariente = params.idPersonaPariente
    if (idTipoParentesco === "3" || idTipoParentesco === "4"){
        let documentoPariente = dataDocumentosParientes.findItemByIdPariente(idPersonaPariente)

        if (documentoPariente.length === 0){
            return  ``
        }else{

            let itemDocumentoPariente = documentoPariente[0];
            return `<h6>${idTipoParentesco === "3" ? 'Acta de nacimiento:': 'Acta de matrimonio:'}</h6>
                <p><a target="_blank" href="/prospecto/documentoParienteObtener/${itemDocumentoPariente.idDocumento}">${itemDocumentoPariente.archivo}</a></p>`;

        }
    }else{
        return ``
    }

}


const obtenerAdscripcionPariente = (params) =>{

    let adscripcion = params.adscripcion

    if (adscripcion !== null){

        return `<h6>Adscripción:</h6>
                <p>${adscripcion}</p>`;
    }else{
        return ``;
    }
}


async function guardarFormularioformacionFamiliar(params) {
    console.log("Guardando datos");

    //Contenedor de botones
    let containerButtons = params.parentNode.parentNode;

    //SkeletondeHeader (Contenedor)
    let skeletonHeader = params.parentNode.parentNode.parentNode.parentNode.children[0].children[0]
    //SkeletonBody (Contenedor)
    let skeletonBody = params.parentNode.parentNode.parentNode.parentNode.children[1].children[0]

    //input para valor de formacionFamiliar
    let inputValueformacionFamiliar = params.parentNode.parentNode.parentNode.children[1].children[0].value

    //input para documento de formacionFamiliar
    let inputValueDocumentformacionFamiliar = params.parentNode.parentNode.parentNode.children[1].children[1].value

    //Contenedor card-body
    let cardBody = params.parentNode.parentNode.parentNode.parentNode.children[1];

    //console.log(cardBody)

    //Contenedor principal1 (container-form)
    let containerForm = params.parentNode.parentNode.parentNode.parentNode.children[1].children[1];

    //ContenedorFormularioParent (form-action) //Se realiza Escritura de componente visualizador
    let containerFormShowformacionFamiliar = params.parentNode.parentNode.parentNode.parentNode.children[1].children[1].children[0]


    //validacion
    let primeraValidacion = validacionFormInicial(containerFormShowformacionFamiliar);

    if (primeraValidacion === undefined){
        swal({
            title:"Atención",
            text: "• Debe de seleccionar el parentesco del familiar.",
            type: "warning"
        });
    }else{

        //Behaviour de skeletons....

        skeletonHeader.hidden = false
        skeletonBody.hidden = false;

        containerButtons.hidden = true;
        containerForm.hidden = true;

        let response = "";
        //existiran 4 caminos
        //Padres 1 || 2
        if (primeraValidacion === "1" || primeraValidacion === "2"){

            let formValidacionPadre = await formValidacionPadres(containerFormShowformacionFamiliar)
            if (formValidacionPadre){
                alertaError2();
                skeletonHeader.hidden = true
                skeletonBody.hidden = true;

                containerButtons.hidden = false;
                containerForm.hidden = false;
            }else{
                console.error("Yaaaaa!")
                //Esta seria una api indepenndiente???-- R: Nel, que se haga bolas el backend
                response = await formObjectPadres(containerFormShowformacionFamiliar)
                if (response.noError === "0"){

                    let inputValorPariente = params.parentNode.parentNode.parentNode.children[1].children[0] // se asigna valor de response.idPersonaPariente
                    let inputValoridDocumento = params.parentNode.parentNode.parentNode.children[1].children[1]  //
                    let inputValoridTipoPariente  = params.parentNode.parentNode.parentNode.children[1].children[2] // en este se asigna el valor de primeraValidacion

                    inputValorPariente.value =  response.idPersonaPariente;
                    inputValoridTipoPariente.value = primeraValidacion;

                    let idPersonaParienteValue = response.idPersonaPariente;

                    //Hacer consulta a nivel de tabla a familiar....
                    let itemPariente = await getFamiliares(idPersonaParienteValue)

                    console.warn(itemPariente)

                    //Asignar a repositorio....
                    dataFormacionFamiliares.addNewItem(itemPariente)

                    //Si el valor del parametro corresponde a hijos o conyuge, hacer la consulta...
                    if (primeraValidacion === "3" || primeraValidacion === '4'){

                        let itemDocumentoPariente = await getDocumentoFamiliar(idPersonaParienteValue);

                        console.log(itemDocumentoPariente)
                        dataDocumentosParientes.addNewItem(itemDocumentoPariente)

                        inputValoridDocumento.value = itemDocumentoPariente.idDocumento;
                    }

                    let personaParienteFamiliar = dataFormacionFamiliares.findItemByIdCurriculum(idPersonaParienteValue);
                    containerFormShowformacionFamiliar.innerHTML = visualizadorDatosformacionFamiliar(personaParienteFamiliar);


                    skeletonHeader.hidden = true
                    skeletonBody.hidden = true;

                    containerButtons.hidden = false;
                    containerForm.hidden = false;

                    alertaSccues();

                    containerButtons.innerHTML = btnsComponentEditaFirstformacionFamiliar()



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
        //Hijos 3                           //conyuge
        if (primeraValidacion === "3" || primeraValidacion === "4"){

            let formValidacionGeneral = await formValidationFechas(containerFormShowformacionFamiliar)
            let formvalidacionDoc = await validacionDocumentoFormularioFAMILIAR(containerFormShowformacionFamiliar)

            if (formValidacionGeneral || formvalidacionDoc){
                alertaError();
                skeletonHeader.hidden = true
                skeletonBody.hidden = true;

                containerButtons.hidden = false;
                containerForm.hidden = false;


            }else{
                // console.error("Yaaaaa!");

                response = await formObjectFechas(containerFormShowformacionFamiliar)
                if (response.noError === "0"){

                    let inputValorPariente = params.parentNode.parentNode.parentNode.children[1].children[0] // se asigna valor de response.idPersonaPariente
                    let inputValoridDocumento = params.parentNode.parentNode.parentNode.children[1].children[1]  //
                    let inputValoridTipoPariente  = params.parentNode.parentNode.parentNode.children[1].children[2] // en este se asigna el valor de primeraValidacion

                    inputValorPariente.value =  response.idPersonaPariente;
                    inputValoridTipoPariente.value = primeraValidacion;

                    let idPersonaParienteValue = response.idPersonaPariente;

                    //Hacer consulta a nivel de tabla a familiar....
                    let itemPariente = await getFamiliares(idPersonaParienteValue)

                    // console.warn(itemPariente)

                    //Asignar a repositorio....
                    dataFormacionFamiliares.addNewItem(itemPariente)

                    //Si el valor del parametro corresponde a hijos o conyuge, hacer la consulta...
                    if (primeraValidacion === "3" || primeraValidacion === '4'){

                        let itemDocumentoPariente = await getDocumentoFamiliar(idPersonaParienteValue);

                        // console.log(itemDocumentoPariente)
                        dataDocumentosParientes.addNewItem(itemDocumentoPariente)

                        inputValoridDocumento.value = itemDocumentoPariente.idDocumento;
                    }

                    let personaParienteFamiliar = dataFormacionFamiliares.findItemByIdCurriculum(idPersonaParienteValue);
                    containerFormShowformacionFamiliar.innerHTML = visualizadorDatosformacionFamiliar(personaParienteFamiliar);


                    skeletonHeader.hidden = true
                    skeletonBody.hidden = true;

                    containerButtons.hidden = false;
                    containerForm.hidden = false;

                    containerButtons.innerHTML = btnsComponentEditaFirstformacionFamiliar()

                    alertaSccues();


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

        //hermanos 5
        if (primeraValidacion === "5"){

            let formValidacionHermano = formValidacionHermanos(containerFormShowformacionFamiliar);

            if (formValidacionHermano){
                alertaError2();
                skeletonHeader.hidden = true
                skeletonBody.hidden = true;

                containerButtons.hidden = false;
                containerForm.hidden = false;
            }else{
                //console.error("Yaaaaa!");
                response = await formObjectHermanos(containerFormShowformacionFamiliar)
                if (response.noError === "0"){

                    let inputValorPariente = params.parentNode.parentNode.parentNode.children[1].children[0] // se asigna valor de response.idPersonaPariente
                    let inputValoridDocumento = params.parentNode.parentNode.parentNode.children[1].children[1]  //
                    let inputValoridTipoPariente  = params.parentNode.parentNode.parentNode.children[1].children[2] // en este se asigna el valor de primeraValidacion

                    inputValorPariente.value =  response.idPersonaPariente;
                    inputValoridTipoPariente.value = primeraValidacion;

                    let idPersonaParienteValue = response.idPersonaPariente;

                    //Hacer consulta a nivel de tabla a familiar....
                    let itemPariente = await getFamiliares(idPersonaParienteValue)

                    console.warn(itemPariente)

                    //Asignar a repositorio....
                    dataFormacionFamiliares.addNewItem(itemPariente)

                    //Si el valor del parametro corresponde a hijos o conyuge, hacer la consulta...
                    if (primeraValidacion === "3" || primeraValidacion === '4'){

                        let itemDocumentoPariente = await getDocumentoFamiliar(idPersonaParienteValue);

                        //console.log(itemDocumentoPariente)
                        dataDocumentosParientes.addNewItem(itemDocumentoPariente)

                        inputValoridDocumento.value = itemDocumentoPariente.idDocumento;
                    }

                    let personaParienteFamiliar = dataFormacionFamiliares.findItemByIdCurriculum(idPersonaParienteValue);
                    containerFormShowformacionFamiliar.innerHTML = visualizadorDatosformacionFamiliar(personaParienteFamiliar);


                    skeletonHeader.hidden = true
                    skeletonBody.hidden = true;

                    containerButtons.hidden = false;
                    containerForm.hidden = false;


                    alertaSccues();


                    containerButtons.innerHTML = btnsComponentEditaFirstformacionFamiliar()



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

    }

}


const getFamiliares =async (item) =>{
    let dataa = await getDataFromServerHidden(`getFamiliarIndividual/${item}`,'POST')
    return dataa[0];
}

const getDocumentoFamiliar =async (item) =>{
    let dataa = await getDataFromServerHidden(`getDocumentoFamiliarIndividual/${item}`,'POST')
    return dataa[0];
}


/**
 * Alerta incluyendo el tipo de documento y la correspondiente descripcion (Tipo de documentjo y tamaño)
 */

function alertaSccues(){
    swal({
        title: "Atención",
        text: "Campos guardados correctamente",
        type: "success",
    });
}


function alertaError(){
    swal({
        title:"Atención",
        text: "• Por favor, revise los campos correspondientes del formulario,recuerde que el documento debe de ser en formato .pdf y este debe de no sobrepasar el tamaño permitido (1mb).",
        type: "warning"
    });
}

//Alerta simple (No se incluye la descripcion del documento.. solo simple)
function alertaError2(){
    swal({
        title:"Atención",
        text: "• Por favor, revise los campos correspondientes del formulario.",
        type: "warning"
    });
}



/**
 *
 * @param item contenedor de formulario
 * @returns {Promise<boolean>} Respuesta rechazada
 */
async function formValidacionPadres(item) {
    let form_data = $('#' + item.id).serializeJSON();

    let chkfamiliarLaboral = form_data.chkfamiliarLaboral;
    let maternoFamiliar = form_data.maternoFamiliar;
    let nombresFamiliar = form_data.nombresFamiliar;
    //let parentescoFamiliar = form_data.parentescoFamiliar; // QUue esto no esta explicitamente como el valor de la validacioon???'
    let paternoFamiliar = form_data.paternoFamiliar

    if (chkfamiliarLaboral === undefined){
        return paternoFamiliar.trim() === ''
            || maternoFamiliar.trim() === ''
            || nombresFamiliar.trim() === ''
    }else{
        let adscription = form_data.adscription

        return paternoFamiliar.trim() === ''
            || maternoFamiliar.trim() === ''
            || nombresFamiliar.trim() === ''
            || adscription.trim() === ''
    }

}


async function formValidacionEdicionPadres(item,valoridPariente, valorDocumento) {



    let form_data = $('#' + item.id).serializeJSON();


    let personaParienteFamiliar = dataFormacionFamiliares.findItemByIdCurriculum(valoridPariente);

    let adscripcionPersonaPariente = personaParienteFamiliar.adscripcion;

    if (adscripcionPersonaPariente === null){

        let chkfamiliarLaboral = form_data.chkfamiliarLaboral;
        let maternoFamiliar = form_data.maternoFamiliar;
        let paternoFamiliar = form_data.paternoFamiliar
        let nombresFamiliar = form_data.nombresFamiliar;


        if (chkfamiliarLaboral === undefined){
            return paternoFamiliar.trim() === ''
                || maternoFamiliar.trim() === ''
                || nombresFamiliar.trim() === ''

        }else{
            let adscription = form_data.adscription

            return paternoFamiliar.trim() === ''
                || maternoFamiliar.trim() === ''
                || nombresFamiliar.trim() === ''
                || adscription.trim() === ''
        }

    }else{

        //existe registro, por lo que se tiene que realizar la validacion...
        let adscription = form_data.adscription

        let maternoFamiliar = form_data.maternoFamiliar;
        let paternoFamiliar = form_data.paternoFamiliar
        let nombresFamiliar = form_data.nombresFamiliar;

        return maternoFamiliar.trim() === ''
            || paternoFamiliar.trim() === ''
            || nombresFamiliar.trim() === ''
            || adscription.trim() === ''
    }




}



async function formObjectPadres(item){
    let form_data = $('#' + item.id).serializeJSON();

    //console.log(form_data)

    let chkfamiliarLaboral = form_data.chkfamiliarLaboral;
    let maternoFamiliar = form_data.maternoFamiliar;
    let nombresFamiliar = form_data.nombresFamiliar;
    let parentescoFamiliar = form_data.parentescoFamiliar;

    let paternoFamiliar = form_data.paternoFamiliar

    let array = []
    //Se tiene que generar el objeto correspondiente para procesar el script
    if (chkfamiliarLaboral === undefined){


        let obj = {
            apPaterno: paternoFamiliar
            ,apMaterno: maternoFamiliar
            ,nombres: nombresFamiliar
            ,parentescoFamiliar: parentescoFamiliar

        }
        array.push(obj)

    }else{

        let adscription = form_data.adscription

        let obj = {
            apPaterno: paternoFamiliar
            ,apMaterno: maternoFamiliar
            ,nombres: nombresFamiliar
            ,adscription: adscription
            ,parentescoFamiliar: parentescoFamiliar
        }

        array.push(obj)

    }

    let data = JSON.stringify(array);

    let formData = new FormData()
    formData.append('values', data);

    return await sendFilePDFFREE(formData,'agregarNuevoFamiliar');
    //consol e.log(dataFREE)


}


async function formObjectEdicionPadres(item, valoridPariente, valorDocumento,valorParentesco){
    let form_data = $('#' + item.id).serializeJSON();

    //console.log(form_data)

    let personaParienteFamiliar = dataFormacionFamiliares.findItemByIdCurriculum(valoridPariente);
    let adscripcionPersonaPariente = personaParienteFamiliar.adscripcion;

    let cloneObj = "";


    let array = []

    if(adscripcionPersonaPariente === null){

        let chkfamiliarLaboral = form_data.chkfamiliarLaboral;
        let maternoFamiliar = form_data.maternoFamiliar;
        let nombresFamiliar = form_data.nombresFamiliar;
        let parentescoFamiliar = valorParentesco;

        let paternoFamiliar = form_data.paternoFamiliar



        if (chkfamiliarLaboral === undefined){

            let obj = {
                apPaterno: paternoFamiliar
                ,apMaterno: maternoFamiliar
                ,nombres: nombresFamiliar
                ,parentescoFamiliar: parentescoFamiliar
                ,idPersonaPariente: valoridPariente

            }
            array.push(obj)

            cloneObj = obj;

        }else{

            let adscription = form_data.adscription

            let obj = {
                apPaterno: paternoFamiliar
                ,apMaterno: maternoFamiliar
                ,nombres: nombresFamiliar
                ,adscription: adscription
                ,parentescoFamiliar: parentescoFamiliar
                ,idPersonaPariente: valoridPariente

            }

            array.push(obj)
            cloneObj = obj;
        }

    }else{

        let adscription = form_data.adscription

        let maternoFamiliar = form_data.maternoFamiliar;
        let paternoFamiliar = form_data.paternoFamiliar
        let nombresFamiliar = form_data.nombresFamiliar;

        let obj = {
            apPaterno: paternoFamiliar
            ,apMaterno: maternoFamiliar
            ,nombres: nombresFamiliar
            ,adscription: adscription
            ,parentescoFamiliar: valorParentesco
            ,idPersonaPariente: valoridPariente

        }

        array.push(obj)
        cloneObj = obj;
    }

    //Se tiene que generar el objeto correspondiente para procesar el script

    let data = JSON.stringify(array);

    let formData = new FormData()
    formData.append('values', data);

    let validatorOBJ = await validatorObjSender(personaParienteFamiliar, cloneObj)

    if (validatorOBJ){
        return await sendFilePDFFREE(formData,'editarNuevoFamiliarNoName');
    }else{
        return await sendFilePDFFREE(formData,'editarNuevoFamiliar');
    }

}

/***
 * Verifica que los campos tales como nombre, apMaterno, apPaterno sufran algun cambio...
 * @param personaParienteFamiliar
 * @param cloneObj
 * @returns {Promise<boolean>}
 */
async function validatorObjSender(personaParienteFamiliar,cloneObj) {

    //clon
    let data1 ={ ...personaParienteFamiliar};
    let data2 = {...cloneObj};

    let data3 = {
        paterno: data1.paterno
        ,materno: data1.materno
        ,nombres: data1.nombres
    }

    let data4 = {
        paterno: data2.apPaterno
        ,materno: data2.apMaterno
        ,nombres: data2.nombres
    }

    // false
    return JSON.stringify(data3) === JSON.stringify(data4);
}

/**
 * Crea el objecto a enviar a partir del formulario padre
 * @param item
 * @returns {Promise<*>}
 */
async function formObjectFechas(item){
    let form_data = $('#' + item.id).serializeJSON();

    console.log(form_data)

    let chkfamiliarLaboral = form_data.chkfamiliarLaboral;
    let maternoFamiliar = form_data.maternoFamiliar;
    let nombresFamiliar = form_data.nombresFamiliar;
    let parentescoFamiliar = form_data.parentescoFamiliar;
    let fechaInicioFamiliar = form_data.fechaInicioFamiliar;


    let paternoFamiliar = form_data.paternoFamiliar

    let array = []
    //Se tiene que generar el objeto correspondiente para procesar el script
    if (chkfamiliarLaboral === undefined){

        //Existe la posiblidad de que no laboren aqui....
        let obj = {
            apPaterno: paternoFamiliar
            ,apMaterno: maternoFamiliar
            ,nombres: nombresFamiliar
            ,parentescoFamiliar: parentescoFamiliar
            ,fechaInicioFamiliar: fechaInicioFamiliar

        }
        array.push(obj)

    }else{

        //Oh tambien existe la posibilidad de que si...
        let adscription = form_data.adscription

        let obj = {
            apPaterno: paternoFamiliar
            ,apMaterno: maternoFamiliar
            ,nombres: nombresFamiliar
            ,adscription: adscription
            ,parentescoFamiliar: parentescoFamiliar
            ,fechaInicioFamiliar: fechaInicioFamiliar
        }

        array.push(obj)

    }

    let data = JSON.stringify(array);

    let formData = new FormData()
    formData.append('values', data);

    //Contenedor del documento
    let itemInputDocu = item.children[0].children[2].children[1].children[1].children[1].children[0];

    formData.append('file',itemInputDocu.files[0]);
    formData.append('inputname',itemInputDocu.value);


    return await sendFilePDFFREE(formData,'agregarNuevoFamiliar');
    //console.log(dataFREE)

}

/**
 *
 * @param item
 * @param valoridPariente
 * @param valorDocumento
 * @returns {Promise<*>}
 */
async function formObjectEdicionFechas(item,valoridPariente, valorDocumento,valorParentesco){
    let form_data = $('#' + item.id).serializeJSON();

    //console.log(form_data)

    let personaParienteFamiliar = dataFormacionFamiliares.findItemByIdCurriculum(valoridPariente);
    let adscripcionPersonaPariente = personaParienteFamiliar.adscripcion;

    let cloneObj = "";

    let array = [];

    if (adscripcionPersonaPariente === null){

        let chkfamiliarLaboral = form_data.chkfamiliarLaboral;
        let paternoFamiliar = form_data.paternoFamiliar
        let maternoFamiliar = form_data.maternoFamiliar;
        let nombresFamiliar = form_data.nombresFamiliar;
        let parentescoFamiliar = valorParentesco;
        let fechaInicioFamiliar = form_data.fechaInicioFamiliar;

        if (chkfamiliarLaboral === undefined){

            //Existe la posiblidad de que no laburen aqui....
            let obj = {
                apPaterno: paternoFamiliar
                ,apMaterno: maternoFamiliar
                ,nombres: nombresFamiliar
                ,parentescoFamiliar: parentescoFamiliar
                ,fechaInicioFamiliar: fechaInicioFamiliar
                ,idPersonaPariente: valoridPariente
                ,idDocumento : valorDocumento

            }
            array.push(obj)
            cloneObj = obj;

        }else{

            //Oh tambien existe la posibilidad de que si...
            let adscription = form_data.adscription

            let obj = {
                apPaterno: paternoFamiliar
                ,apMaterno: maternoFamiliar
                ,nombres: nombresFamiliar
                ,adscription: adscription
                ,parentescoFamiliar: parentescoFamiliar
                ,fechaInicioFamiliar: fechaInicioFamiliar
                ,idPersonaPariente: valoridPariente
                ,idDocumento : valorDocumento
            }

            array.push(obj)
            cloneObj = obj;

        }


    }else{


        //existe registro, por lo que se tiene que realizar la validacion...
        let adscription = form_data.adscription

        let maternoFamiliar = form_data.maternoFamiliar;
        let paternoFamiliar = form_data.paternoFamiliar
        let nombresFamiliar = form_data.nombresFamiliar;
        let fechaInicioFamiliar = form_data.fechaInicioFamiliar;


        let obj = {
            apPaterno: paternoFamiliar
            ,apMaterno: maternoFamiliar
            ,nombres: nombresFamiliar
            ,adscription: adscription
            ,parentescoFamiliar: valorParentesco
            ,fechaInicioFamiliar: fechaInicioFamiliar
            ,idPersonaPariente: valoridPariente
            ,idDocumento : valorDocumento
        }

        array.push(obj)
        cloneObj = obj;
    }

    let data = JSON.stringify(array);

    let formData = new FormData()
    formData.append('values', data);


    let itemInputDocu = item.children[0].children[2].children[1].children[1].children[1].children[0];

    formData.append('file',itemInputDocu.files[0]);
    formData.append('inputname',itemInputDocu.value);
    formData.append('idPersonaPariente',valoridPariente);
    formData.append('idDocumento',valorDocumento);


    let validatorOBJ = await validatorObjSender(personaParienteFamiliar, cloneObj)

    if (validatorOBJ){
        return await sendFilePDFFREE(formData,'editarNuevoFamiliarNoName');
    }else{
        return await sendFilePDFFREE(formData,'editarNuevoFamiliar');
    }

}

async function formObjectHermanos(item){
    let form_data = $('#' + item.id).serializeJSON();

    console.log(form_data)

    let maternoFamiliar = form_data.maternoFamiliar;
    let nombresFamiliar = form_data.nombresFamiliar;
    let parentescoFamiliar = form_data.parentescoFamiliar;

    let paternoFamiliar = form_data.paternoFamiliar

    let adscription = form_data.adscription

    let array = []
    //Se tiene que generar el objeto correspondiente para procesar el script


    let obj = {
        apPaterno: paternoFamiliar
        ,apMaterno: maternoFamiliar
        ,nombres: nombresFamiliar
        ,parentescoFamiliar: parentescoFamiliar
        ,adscription: adscription
    }
    array.push(obj);

    let data = JSON.stringify(array);
    //console.warn()
    let formData = new FormData()
    formData.append('values', data);


    return await sendFilePDFFREE(formData,'agregarNuevoFamiliar');

}


async function formObjectEdicionHermanos(item, valoridPariente, valorDocumento,valorParentesco){
    let form_data = $('#' + item.id).serializeJSON();

    let personaParienteFamiliar = dataFormacionFamiliares.findItemByIdCurriculum(valoridPariente);

    let cloneObj = "";


    // console.log(form_data)

    let maternoFamiliar = form_data.maternoFamiliar;
    let nombresFamiliar = form_data.nombresFamiliar;
    let parentescoFamiliar = valorParentesco;

    let paternoFamiliar = form_data.paternoFamiliar

    let adscription = form_data.adscription

    let array = []
    //Se tiene que generar el objeto correspondiente para procesar el script


    let obj = {
        apPaterno: paternoFamiliar
        ,apMaterno: maternoFamiliar
        ,nombres: nombresFamiliar
        ,parentescoFamiliar: parentescoFamiliar
        ,adscription: adscription
        ,idPersonaPariente: valoridPariente

    }
    array.push(obj);
    cloneObj = obj;

    let data = JSON.stringify(array);
    //console.warn()
    let formData = new FormData()
    formData.append('values', data);


    let validatorOBJ = await validatorObjSender(personaParienteFamiliar, cloneObj)

    if (validatorOBJ){
        return await sendFilePDFFREE(formData,'editarNuevoFamiliarNoName');
    }else{
        return await sendFilePDFFREE(formData,'editarNuevoFamiliar');
    }

}

/**
 * Validacion de Formulario (cuando contienen fecha y adjuntar documento)
 * @param item Contenedor de formaulario
 * @returns {Promise<boolean>} Respuesta rechazada
 */
async function formValidationFechas(item) {
    //Recordar que se tiene que generar la correspondiente validacion de archivos
    //Es decirse tiene que obtener la referencia del documento directamente del DOM
    //y aplicar la validacion con los metodos...(No se debe de ocupar el metodo que usualmente envia informacion al server)
    //Sino generar una correspondiente new FormData con todos los atributos....

    let form_data = $('#' + item.id).serializeJSON();


    let chkfamiliarLaboral = form_data.chkfamiliarLaboral;
    let maternoFamiliar = form_data.maternoFamiliar;
    let nombresFamiliar = form_data.nombresFamiliar;
    //let parentescoFamiliar = form_data.parentescoFamiliar; // QUue esto no esta explicitamente como el valor de la validacioon???'
    let paternoFamiliar = form_data.paternoFamiliar
    let fechaInicioFamiliar = form_data.fechaInicioFamiliar;

    if (chkfamiliarLaboral === undefined){
        return paternoFamiliar.trim() === ''
            || maternoFamiliar.trim() === ''
            || nombresFamiliar.trim() === ''
            || fechaInicioFamiliar.trim() === ''
    }else{
        let adscription = form_data.adscription

        return paternoFamiliar.trim() === ''
            || maternoFamiliar.trim() === ''
            || nombresFamiliar.trim() === ''
            || adscription.trim() === ''
            || fechaInicioFamiliar.trim() === ''
    }
}


async function formValidationEdicionFechas(item,valoridPariente, valorDocumento)
{
    //Recordar que se tiene que generar la correspondiente validacion de archivos
    //Es decirse tiene que obtener la referencia del documento directamente del DOM
    //y aplicar la validacion con los metodos...(No se debe de ocupar el metodo que usualmente envia informacion al server)
    //Sino generar una correspondiente new FormData con todos los atributos....

    let form_data = $('#' + item.id).serializeJSON();

    let personaParienteFamiliar = dataFormacionFamiliares.findItemByIdCurriculum(valoridPariente);

    let adscripcionPersonaPariente = personaParienteFamiliar.adscripcion;

    if (adscripcionPersonaPariente === null){

        let chkfamiliarLaboral = form_data.chkfamiliarLaboral;
        let maternoFamiliar = form_data.maternoFamiliar;
        let paternoFamiliar = form_data.paternoFamiliar
        let nombresFamiliar = form_data.nombresFamiliar;
        let fechaInicioFamiliar = form_data.fechaInicioFamiliar;

        if (chkfamiliarLaboral === undefined){
            return maternoFamiliar.trim() === ''
                || paternoFamiliar.trim() === ''
                || nombresFamiliar.trim() === ''
                || fechaInicioFamiliar.trim() === ''

        }else{
            let adscription = form_data.adscription

            return maternoFamiliar.trim() === ''
                || paternoFamiliar.trim() === ''
                || nombresFamiliar.trim() === ''
                || fechaInicioFamiliar.trim() === ''
                || adscription.trim() === ''
        }

    }else{

        //existe registro, por lo que se tiene que realizar la validacion...
        let adscription = form_data.adscription

        let maternoFamiliar = form_data.maternoFamiliar;
        let paternoFamiliar = form_data.paternoFamiliar
        let nombresFamiliar = form_data.nombresFamiliar;
        let fechaInicioFamiliar = form_data.fechaInicioFamiliar;

        return maternoFamiliar.trim() === ''
            || paternoFamiliar.trim() === ''
            || nombresFamiliar.trim() === ''
            || fechaInicioFamiliar.trim() === ''
            || adscription.trim() === ''
    }

}


/**
 *
 * @param item Contendor formulario hermano
 * @returns {boolean} rechazo de formulario
 */
function formValidacionHermanos(item) {

    let form_data = $('#' + item.id).serializeJSON();

    let maternoFamiliar = form_data.maternoFamiliar;
    let nombresFamiliar = form_data.nombresFamiliar;
    //let parentescoFamiliar = form_data.parentescoFamiliar; // QUue esto no esta explicitamente como el valor de la validacioon???'
    let paternoFamiliar = form_data.paternoFamiliar
    let adscription = form_data.adscription;

    return maternoFamiliar.trim() === ''
        || nombresFamiliar.trim() === ''
        || paternoFamiliar.trim() === ''
        || adscription.trim() === ''
}

const validacionFormInicial = (item) => {
    let form_data = $('#' + item.id).serializeJSON();
    return form_data.parentescoFamiliar
}


const eliminarFormularioformacionFamiliar = (params)=>{
    console.log("Eliminando formularios");
    let containerGeneralformacionFamiliar = params.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode

    //console.log(containerGeneralformacionFamiliar)
    containerGeneralformacionFamiliar.remove();
    /*//Contenedor de botones
    let containerButtons = params.parentNode.parentNode;

    //SkeletondeHeader (Contenedor)
    let skeletonHeader = params.parentNode.parentNode.parentNode.parentNode.children[0].children[0]
    //SkeletonBody (Contenedor)
    let skeletonBody = params.parentNode.parentNode.parentNode.parentNode.children[1].children[0]

    //input para valor de formacionFamiliar
    let inputValueformacionFamiliar = params.parentNode.parentNode.parentNode.children[1].children[0].value

    //input para documento de formacionFamiliar
    let inputValueDocumentformacionFamiliar = params.parentNode.parentNode.parentNode.children[1].children[1].value

    //Contenedor card-body
    let cardBody = params.parentNode.parentNode.parentNode.parentNode.children[1];

    //Contenedor principal1 (container-form)
    let containerForm = params.parentNode.parentNode.parentNode.parentNode.children[1].children[1];

    //ContenedorFormularioParent (form-action) //Se realiza Escritura de componente visualizador
    let containerFormShowformacionFamiliar = params.parentNode.parentNode.parentNode.parentNode.children[1].children[1].children[0]*/

}


/**
 *
 * @param item formulario en general....
 * @returns {Promise<*>} Validacion de documento correspondiente
 */
const validacionDocumentoFormularioFAMILIAR = async(item) => {

    let itemInputDoc = item.children[0].children[2].children[1].children[1].children[1].children[0];

    return validacionComprobacionDocumentos(itemInputDoc)
}

function editarFormularioformacionFamiliar(params) {

    console.log("Editando datos");

    //Contenedor de botones
    let containerButtons = params.parentNode.parentNode;


    //SkeletondeHeader (Contenedor)
    let skeletonHeader = params.parentNode.parentNode.parentNode.parentNode.children[0].children[0]
    //SkeletonBody (Contenedor)
    let skeletonBody = params.parentNode.parentNode.parentNode.parentNode.children[1].children[0]

    //input para valor de formacionFamiliar
    let inputValueformacionFamiliar = params.parentNode.parentNode.parentNode.children[1].children[0].value

    console.log(inputValueformacionFamiliar)

    //input para documento de formacionFamiliar
    let inputValueDocumentformacionFamiliar = params.parentNode.parentNode.parentNode.children[1].children[1].value

    //console.log(inputValueDocumentformacionFamiliar)

    //Contenedor card-body
    let cardBody = params.parentNode.parentNode.parentNode.parentNode.children[1];

    //Contenedor principal1 (container-form)
    let containerForm = params.parentNode.parentNode.parentNode.parentNode.children[1].children[1];

    //ContenedorFormularioParent (form-action) //Se realiza Escritura de componente visualizador

    let containerFormShowformacionFamiliar = params.parentNode.parentNode.parentNode.parentNode.children[1].children[1].children[0]


    let j = Math.floor(Math.random() * 100000);  //Habra que obtener el correpondiete paraiente



    let inputValorPariente = params.parentNode.parentNode.parentNode.children[1].children[0] // se asigna valor de response.idPersonaPariente

    let idPersonaParienteValue  = inputValorPariente.value;


    containerFormShowformacionFamiliar.innerHTML =  formularioNuevoformacionFamiliarEDIT(j, idPersonaParienteValue)//Componente de Visualizacion
    //agregarDatePicker('fechaInicioFamiliar')


    //Agrega el generar componente....



    //agregando Botones para editar
    containerButtons.innerHTML = btnsComponentEditaCancelaFirstformacionFamiliar();
    //agregarDatePicker('fechaInicioFamiliar')

    agregarDatePicker('fechaInicioFamiliar')


}

async function guardarEdicionformacionFamiliar(params) {

    console.log("Guardando datos en edicion");

    //Contenedor de botones
    let containerButtons = params.parentNode.parentNode;


    //SkeletondeHeader (Contenedor)
    let skeletonHeader = params.parentNode.parentNode.parentNode.parentNode.children[0].children[0]
    //SkeletonBody (Contenedor)
    let skeletonBody = params.parentNode.parentNode.parentNode.parentNode.children[1].children[0]

    //input para valor de formacionFamiliar
    let inputValueformacionFamiliar = params.parentNode.parentNode.parentNode.children[1].children[0].value

    //input para documento de formacionFamiliar
    let inputValueDocumentformacionFamiliar = params.parentNode.parentNode.parentNode.children[1].children[1].value


    let inputValueParentescoformacionFamiliar = params.parentNode.parentNode.parentNode.children[1].children[2].value

    //Contenedor card-body
    let cardBody = params.parentNode.parentNode.parentNode.parentNode.children[1];

    //Contenedor principal1 (container-form)
    let containerForm = params.parentNode.parentNode.parentNode.parentNode.children[1].children[1];

    //ContenedorFormularioParent (form-action) //Se realiza Escritura de componente visualizador

    let containerFormShowformacionFamiliar = params.parentNode.parentNode.parentNode.parentNode.children[1].children[1].children[0]


    //En esta parte va la edicion
    /*
        let formValidacion = await validacionFormularioFormFAMILIAR(containerFormShowformacionFamiliar);
        let validacionDocs = await validacionDocumentoFormularioFAMILIAR(containerFormShowformacionFamiliar);*/

    //Realizando modificacion para esto..
    /*if (formValidacion||validacionDocs){
        swal({
            title:"Atención",
            text: "• Por favor, revise los campos correspondientes del formulario,recuerde que el documento debe de ser en formato .pdf y este debe de no sobrepasar el tamaño permitido (1mb).",
            type: "warning"
        });

    }else{

        skeletonHeader.hidden = false
        skeletonBody.hidden = false;

        containerButtons.hidden = true;
        containerForm.hidden = true;

        let idCurriculumFo = params.parentNode.parentNode.parentNode.children[1].children[0].value

        console.log("El id es "+idCurriculumFo);
        let response = await generacionObjetoFAMILIARUpdate(containerFormShowformacionFamiliar,idCurriculumFo)
        console.log(response)
        if (response.noError === "0"){







            let itemformacionFamiliar = await getformacionFamiliar(idCurriculumFo);

            dataformacionFamiliar.replaceItemByIdCurriculumFormacion(idCurriculumFo,itemformacionFamiliar);

            //console.log(dataDocumentosFormaciones.findItemByIdDocument(idDocument))

            let inputValueDocumentFormacionAdicionalSecond = params.parentNode.parentNode.parentNode.children[1].children[1]

            //SI no existe un documento, entonces tiene que agregarse el documento
            if (inputValueDocumentFormacionAdicionalSecond.value===''){

                let idDocumento1 = await mandarDocumentoformacionFamiliar(inputValueformacionFamiliar,containerFormShowformacionFamiliar,inputValueDocumentFormacionAdicionalSecond)
                idDocumento1 === true ? console.warn("Existe documento y ya se mando"):console.warn("No existe nada, puede continuar");


            }else{
                let idDocumento2 = await actualizarDocumentoformacionFamiliar(inputValueformacionFamiliar,containerFormShowformacionFamiliar,inputValueDocumentFormacionAdicionalSecond)
                idDocumento2 === true ? console.warn("Existe documento y ya se actualizo"):console.warn("No existe nada, puede continuar");
            }




            swal({
                title: "Atención",
                text: "Campos guardados correctamente",
                type: "success",
            });


            skeletonHeader.hidden = true
            skeletonBody.hidden = true;

            containerButtons.hidden = false;
            containerForm.hidden = false;

            let formacionActual = dataformacionFamiliar.findItemByIdCurriculum(inputValueformacionFamiliar)

            containerFormShowformacionFamiliar.innerHTML =  visualizadorDatosformacionFamiliar(formacionActual)//Componente de Visualizacion
            containerButtons.innerHTML = btnsComponentEditaFirstformacionFamiliar();




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

    }*/


    //Obteniendo valor

    //Obteniendo valor del parentesco

    //Behaviour de skeletons....

    skeletonHeader.hidden = false
    skeletonBody.hidden = false;

    containerButtons.hidden = true;
    containerForm.hidden = true;


    let valoridPariente = inputValueformacionFamiliar;
    let valorDocumento = inputValueDocumentformacionFamiliar;
    let valorParentesco = inputValueParentescoformacionFamiliar;

    let response = "";




    //Padres 1 ||  2
    if (valorParentesco === "1" || valorParentesco === "2"){

        //let editformValidacionPadre = await formValidacionEdicionPadres(containerFormShowformacionFamiliar);
        let editFormValidacionPare = await formValidacionEdicionPadres(containerFormShowformacionFamiliar, valoridPariente, valorDocumento,valorParentesco);
        if (editFormValidacionPare){
            alertaError2();
            skeletonHeader.hidden = true
            skeletonBody.hidden = true;

            containerButtons.hidden = false;
            containerForm.hidden = false;

        }else{

            console.error("Yaaaaa!")
            response = await formObjectEdicionPadres(containerFormShowformacionFamiliar, valoridPariente, valorDocumento,valorParentesco);

            if (response.noError === "0"){

                let itemPariente = await getFamiliares(valoridPariente)

                console.warn(itemPariente)
                dataFormacionFamiliares.replaceItemByIdCurriculumFormacion(valoridPariente,itemPariente)


                let personaParienteFamiliar = dataFormacionFamiliares.findItemByIdCurriculum(valoridPariente);
                containerFormShowformacionFamiliar.innerHTML = visualizadorDatosformacionFamiliar(personaParienteFamiliar);


                skeletonHeader.hidden = true
                skeletonBody.hidden = true;

                containerButtons.hidden = false;
                containerForm.hidden = false;

                containerButtons.innerHTML = btnsComponentEditaFirstformacionFamiliar()

                alertaSccues();


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

    //Hijos                     ||  conyuge
    if (valorParentesco === "3" || valorParentesco === "4"){

        let editFormValidacionGeneral = await formValidationEdicionFechas(containerFormShowformacionFamiliar, valoridPariente, valorDocumento)
        let formValidacionDoc = await validacionDocumentoFormularioFAMILIAR(containerFormShowformacionFamiliar)
        //fd
        if (editFormValidacionGeneral || formValidacionDoc){

            alertaError();

            skeletonHeader.hidden = true
            skeletonBody.hidden = true;

            containerButtons.hidden = false;
            containerForm.hidden = false;


        }else{
            console.error("YA, edicion!");
            response = await formObjectEdicionFechas(containerFormShowformacionFamiliar, valoridPariente, valorDocumento,valorParentesco);

            if (response.noError === "0"){

                let itemPariente = await getFamiliares(valoridPariente)

                console.warn(itemPariente)
                dataFormacionFamiliares.replaceItemByIdCurriculumFormacion(valoridPariente,itemPariente)

                if(valorParentesco === "3" || valorParentesco === "4"){

                    let itemDocumentoPariente = await getDocumentoFamiliar(valoridPariente);
                    console.log(itemDocumentoPariente);
                    dataDocumentosParientes.replaceItemByIdDocument(valorDocumento, itemDocumentoPariente)
                }

                let personaParienteFamiliar = dataFormacionFamiliares.findItemByIdCurriculum(valoridPariente);
                containerFormShowformacionFamiliar.innerHTML = visualizadorDatosformacionFamiliar(personaParienteFamiliar);


                skeletonHeader.hidden = true
                skeletonBody.hidden = true;

                containerButtons.hidden = false;
                containerForm.hidden = false;

                containerButtons.innerHTML = btnsComponentEditaFirstformacionFamiliar()

                alertaSccues();


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

    if (valorParentesco === "5"){

        let editFormValidacionHermanos = formValidacionHermanos(containerFormShowformacionFamiliar);

        if (editFormValidacionHermanos){

            alertaError2();
            skeletonHeader.hidden = true
            skeletonBody.hidden = true;

            containerButtons.hidden = false;
            containerForm.hidden = false;

        }else{
            console.error("Yaaaaa!");

            response = await formObjectEdicionHermanos(containerFormShowformacionFamiliar, valoridPariente, valorDocumento,valorParentesco)

            if (response.noError === "0"){

                let itemPariente = await getFamiliares(valoridPariente)

                console.warn(itemPariente)
                dataFormacionFamiliares.replaceItemByIdCurriculumFormacion(valoridPariente,itemPariente)


                let personaParienteFamiliar = dataFormacionFamiliares.findItemByIdCurriculum(valoridPariente);
                containerFormShowformacionFamiliar.innerHTML = visualizadorDatosformacionFamiliar(personaParienteFamiliar);


                skeletonHeader.hidden = true
                skeletonBody.hidden = true;

                containerButtons.hidden = false;
                containerForm.hidden = false;

                containerButtons.innerHTML = btnsComponentEditaFirstformacionFamiliar()

                alertaSccues();


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

}

function cancelarEditarFormularioformacionFamiliar(params) {

    console.log("Cancelando edicion de datos");
    //Contenedor de botones
    let containerButtons = params.parentNode.parentNode;


    //SkeletondeHeader (Contenedor)
    let skeletonHeader = params.parentNode.parentNode.parentNode.parentNode.children[0].children[0]
    //SkeletonBody (Contenedor)
    let skeletonBody = params.parentNode.parentNode.parentNode.parentNode.children[1].children[0]

    //input para valor de formacionFamiliar
    let inputValueformacionFamiliar = params.parentNode.parentNode.parentNode.children[1].children[0].value

    //input para documento de formacionFamiliar
    let inputValueDocumentformacionFamiliar = params.parentNode.parentNode.parentNode.children[1].children[1].value

    //Contenedor card-body
    let cardBody = params.parentNode.parentNode.parentNode.parentNode.children[1];

    //Contenedor principal1 (container-form)
    let containerForm = params.parentNode.parentNode.parentNode.parentNode.children[1].children[1];

    //ContenedorFormularioParent (form-action) //Se realiza Escritura de componente visualizador

    let containerFormShowformacionFamiliar = params.parentNode.parentNode.parentNode.parentNode.children[1].children[1].children[0]

    let formacionActual = dataFormacionFamiliares.findItemByIdCurriculum(inputValueformacionFamiliar)

    containerFormShowformacionFamiliar.innerHTML =  visualizadorDatosformacionFamiliar(formacionActual)//Componente de Visualizacion

    //agregando Botones para editar
    containerButtons.innerHTML = btnsComponentEditaFirstformacionFamiliar();
}

//Acciones para escribir o sobresscribir en componente dado......
const agregarNuevoElementoformacionFamiliar = (params) => {
    let j = Math.floor(Math.random() * 100000);
    $("#formacionFamiliares-elementos").prepend(componenteInicialBaseformacionFamiliar(j))
    agregarDatePicker('fechaInicioFamiliar')
}


function obtenerformacionFamiliar(itemFormacion) {

    let j = Math.floor(Math.random() * 100000);
    let documentoPariente = dataDocumentosParientes.findItemByIdPariente(itemFormacion.idPersonaPariente)
    let currentDocument = documentoPariente[0];

    return `<div class="container" id="showinfoformacionFamiliar">
    <div class="formacionformacionFamiliar">
        <div class="card  card-formacion-academica card-formacion-formacionFamiliar" id="card-formacion-formacionFamiliar">
            <div class="card-header">

                <div class="container-skeleton-formacionFamiliar-BodyCard" hidden>
                    <span class="skeleton-loader"></span>
                </div>

                <div id="values" hidden>
                    <input type="text" name="valueIDCF" id="valueIDCF" hidden disabled value="${itemFormacion.idPersonaPariente}">
                    <input type="text" name="valueIDoc" id="valueIDoc" hidden disabled value="${currentDocument === undefined ? "": currentDocument.idDocumento}">
                    <input type="text" name="valueIDTypo" id="valueIDTypo" hidden disabled value="${itemFormacion.idTipoParentesco}">
                </div>

                <div class="card-buttons">
                        ${btnsComponentEditaFirstformacionFamiliarMOSTRAR(itemFormacion)}
                </div>
            </div>

            <div class="card-body card-body-back" id="card-componentBody"  >

                <div class="container-skeleton-formacionFamiliar-BodyCard" hidden>
                    <div class="skeleton-section-content">
                        <span class="teasting2">
                        </span>
                    </div>
                </div>

                <div class="container-form">

                    <form action="" name="formacion-formacionFamiliar-form${j}" id="formacion-formacionFamiliar-form${j}">

                            <!--Formulario/Info-->
                        ${visualizadorDatosformacionFamiliar(itemFormacion)}

                    </form>

                    <div class="container-form-docs" id="container-form-docs${j}">

                    </div>
                </div>
            </div>
        </div>
    </div>
</div>`;
}

async function mostrarFormulariosformacionFamiliar(){

    //se obtienen los personas parientes y se guardan en el repositorio...
    let data = await getDataFromServerHidden('getFamiliaresParientes','GET');
    data.forEach((item)=>{
        dataFormacionFamiliares.addNewItem(item);
    })


    let documento = await getDataFromServerHidden('getDocumentosFamiliaresParientes','GET')

    documento.forEach((item)=>{
        dataDocumentosParientes.addNewItem(item)
    })


    let dataFamiliarHTML = "";

    data.forEach((items)=>{

        dataFamiliarHTML+= obtenerformacionFamiliar(items)
    })

    $("#formacionFamiliares-elementos").prepend(dataFamiliarHTML);

}


//No se  que hacia, pero dejalo...
//Tener en cuenta que para todos los caso es opcional este campo (A excepcion de hermanos - obligatorio)
function verificadorFamiliarAdscription(element){

    //console.log(element);// Agrega dentro de container el input para adscripcion....
    let destino = element.parentNode.parentNode.parentNode.parentNode.children[3].children[0]
    if(element.checked){

        destino.innerHTML = formComponentAdscriptionText();

    }else{
        destino.innerHTML = ""
    }

}

const showFormacionesFAMILIARPariente = async ()=>{

    await mostrarFormulariosformacionFamiliar();

    visibilityComponent('contenedorSkeletonFamiliares', true)
    visibilityComponent('opttionesTitleFamiliares', false)
    visibilityComponent('contenedor-formacionFamiliares-agregarNuevos', false)
    visibilityComponent('formacionFamiliares-elementos', false)
}
