//
function componenteInicialBaseFormacionLaboral(j) {
    return `<div class="container" id="showinfoFormacionLaboral">
    <div class="formacionFormacionLaboral">
        <div class="card  card-formacion-academica card-formacion-FormacionLaboral" id="card-formacion-FormacionLaboral">
            <div class="card-header">

                <div class="container-skeleton-FormacionLaboral-BodyCard" hidden>
                    <span class="skeleton-loader"></span>
                </div>

                <div id="values" hidden>
                    <input type="text" name="valueIDCF" id="valueIDCF" hidden disabled value="">
                    <input type="text" name="valueIDoc" id="valueIDoc" hidden disabled value="">

                </div>

                <div class="card-buttons">
                    ${btnsComponentGuardarFirstFormacionLaboral()}
                </div>
            </div>

            <div class="card-body card-body-back" id="card-componentBody" >

                <div class="container-skeleton-FormacionLaboral-BodyCard" hidden>
                    <div class="skeleton-section-content">
                        <span class="teasting2">
                        </span>
                    </div>
                </div>

                <div class="container-form">

                    <form action="" name="formacion-FormacionLaboral-form${j}" id="formacion-FormacionLaboral-form${j}">

                                <!--Formulario/Info-->
                        ${formularioNuevoFormacionLaboral(j)}

                    </form>

                    <div class="container-form-docs" id="container-form-docs${j}">

                    </div>
                </div>
            </div>
        </div>
    </div>

</div>`;
}

//****************INICIA BOTONES DE ACCIONES FormacionLaboral ********************/

//Guarda cambios de formaulario Inicial
function btnsComponentGuardarFirstFormacionLaboral(params) {


    let j = Math.floor(Math.random() * 100000);
    return `
        <div id="guardarFormacionLaboral${j}" class="guardarFormacionLaboral">
            <button type="button" class="btn btn-outline-secondary btn-sm btns-components-action" id="btn-doc-delete${j}" onclick="guardarFormularioFormacionLaboral(this)"><i class="fas fa-save"></i> Guardar</button>
            <button type="button" class="btn btn-outline-secondary btn-sm btns-components-action" id="btn-doc-delete${j}" onclick="eliminarFormularioFormacionLaboral(this)"><i class="fas fa-times-circle"></i> Eliminar</button>
        </div>
    `;
}


//Edita cambios de formulario Satisfactorio
function btnsComponentEditaFirstFormacionLaboral(params) {

    let j = Math.floor(Math.random() * 100000);
    return `
    <div id="EditarFormacionLaboral${j}" class="ocultarMostrarTitle">
        <button type="button" class="btn btn-outline-secondary btn-sm btns-components-action" id="btn-doc-delete${j}" onclick="editarFormularioFormacionLaboral(this)"><i class="fas fa-save"></i> Editar</button>
    </div>
    `;
}


//Edita cambios de formulario Satisfactorio
function btnsComponentEditaFirstFormacionLaboralMOSTRAR(params) {

    let j = Math.floor(Math.random() * 100000);
    return `
    <div id="EditarFormacionLaboral${j}" class="ocultarMostrarTitle">
        <button type="button" class="btn btn-outline-secondary btn-sm btns-components-action" id="btn-doc-delete${j}" onclick="editarFormularioFormacionLaboral(this)"><i class="fas fa-save"></i> Editar</button>

    </div>
    `;


    /*return `
    <div id="EditarFormacionLaboral${j}" class="ocultarMostrarTitle">

        <button type="button" class="btn btn-outline-secondary btn-sm btns-components-action" id="btn-doc-delete${j}" onclick="ocultarComponentesLABORALCardBody(this)"><i class="fas fa-eye"></i> Mostrar</button>
        <button type="button" class="btn btn-outline-secondary btn-sm btns-components-action" id="btn-doc-delete${j}" onclick="ocultarComponentesLABORALCardBody(this)"><i class="fas fa-eye"></i> Mostrar</button>
    </div>
    `;*/
}



const ocultarComponentesLABORALCardBody = (element) => {
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
function btnsComponentEditaCancelaFirstFormacionLaboral(params) {

    let j = Math.floor(Math.random() * 100000);
    return `
    <div id="EditarCancelarFormacionLaboral${j}" class="EditarCancelarFormacionLaboral">
        <button type="button" class="btn btn-outline-secondary btn-sm btns-components-action" id="btn-doc-delete${j}" onclick="guardarEdicionFormacionLaboral(this)"><i class="fas fa-save"></i> Guardar</button>
        <button type="button" class="btn btn-outline-secondary btn-sm btns-components-action" id="btn-doc-delete${j}" onclick="cancelarEditarFormularioFormacionLaboral(this)"><i class="fas fa-save"></i> Cancelar</button>
    </div>
    `;
}


//
function btnsComponentCancelaFirstFormacionLaboral(params) {

    let j = Math.floor(Math.random() * 100000);
    return `

    <div id="CancelarFormacionLaboral${j}" class="EditarCancelarFormacionLaboral">
        <button type="button" class="btn btn-outline-secondary btn-sm btns-components-action" id="btn-doc-delete${j}" ><i class="fas fa-save"></i> Guardar</button>
        <button type="button" class="btn btn-outline-secondary btn-sm btns-components-action" id="btn-doc-delete${j}" ><i class="fas fa-save"></i> Cancelar</button>
    </div>
    `;
}


//****************TERMINA BOTONES DE ACCIONES FormacionLaboral ********************/

/*
1,Candidato a Investigador Nacional
2,Investigador Nacional Nivel I
3,Investigador Nacional Nivel II
4,Investigador Nacional Nivel III*/

//Formulario inicial de FormacionLaboralo ///Tener en cuenta de que se tiene que editar deacuerdo al formulario....
function formularioNuevoFormacionLaboral(j) {

    return `
    <div>

        <div class="form-row">

             <div class="form-group col-md-4">
                <h6>Institución/Empresa:</h6>
                <input type="text" class="form-control" name="nombreInstitucion" id="nombreInstitucion"   autocomplete="off" oninput="eliminarEspacios(this)" placeholder="Nombre de empresa">
            </div>
             <div class="form-group col-md-4">
                <h6>Pais:</h6>
                <select class="browser-default custom-select" name="paisExperiencia" id="paisExperiencia">
                <option selected disabled>Seleccione una opción</option>
                    ${generateSelectCountry()}
                </select>
            </div>

            <div class="form-group col-md-4">
                <h6>Nombre de puesto:</h6>
                <input type="text" class="form-control" name="nombrePuesto" id="nombrePuesto"  autocomplete="off" oninput="eliminarEspacios(this)" placeholder="Puesto">
            </div>
        </div>
        <div class="form-row">

            <div class="form-group col-md-4">
                <h6>Fecha de inicio</h6>
                <input type="text" class="form-control" name="fechaInicioLaboral" id="fechaInicioLaboral"   autocomplete="off" oninput="eliminarEspacios(this)" readonly>
            </div>

            <div class="form-group col-md-4">

                ${FechaTermino()}
            </div>

            <div class="form-group col-md-4">
                <div class="form-check" >
                    <input class="form-check-input" type="checkbox" name="chkInstitucion" id="chkInstitucion${j}"  onchange="verificadorFechaTermino(this)">
                    <label class="form-check-label${j}" for="chkInstitucion${j}">
                        * Marque esta casilla si aún permanece en la institución/empresa.
                    </label>
                </div>
            </div>

        </div>

        <div class="form-row">

            <div class="form-group col-md-4">
                ${DocumentoProbatorio()}
            </div>

            <div class="form-group col-md-4">

                ${AvisoDocumentoProbatorio()}

            </div>

            <div class="form-group col-md-4">

                 <div class="form-check" >
                    <input class="form-check-input" type="checkbox" name="chkCartadeReferencia" id="chkCartadeReferencia${j}"  onchange="verificadorDocumentoProbatorio(this)">
                    <label class="form-check-label${j}" for="chkCartadeReferencia${j}">
                        * Marque esta casilla si no tiene ninguna carta de referencia.
                    </label>
                </div>

            </div>


        </div>

        <div class="form-row">

        <div class="form-group col-md-12">
                <h6>Actividades realizadas:</h6>
                <div id="actividadesRealizadasComponente${j}">

                </div>
            </div>
        </div>
    </div>
    `
}


function FechaTermino (){

    let j = Math.floor(Math.random() * 100000);
    return `<div>
        <h6>Fecha de término:</h6>
        <input type="text" maxlength="200" class="form-control" name="fechaTerminoLaboral" id="fechaTerminoLaboral"  autocomplete="off" oninput="eliminarEspacios(this)" readonly>
</div>` ;
}


function DocumentoProbatorio (){

    let j = Math.floor(Math.random() * 100000);

    return `
        <h6>Carta de referencia personal:</h6>

        <div class="input-group">
            <div class="input-group-prepend">
                <span class="input-group-text" id="inputFileAgregarDOCPERSONAL${j}" name="inputFileAgregarDOCPERSONAL"><i class="fa fa-file"></i></span>
            </div>
            <div class="custom-file">
                <input type="file" class="custom-file-input" id="inputFileDOCPERSONAL${j}" name="inputFile" aria-describedby="inputGroupFileAddon01" lang="es" accept=".pdf" requiered="">
                <label class="custom-file-label" for="inputFileDOCPERSONAL${j}" id="nombreArchivoCargarDOCPERSONAL" name="nombreArchivoCargarDOCPERSONAL">Buscar documento</label>
            </div>
        </div>`

}


function AvisoDocumentoProbatorio(){
    return `<small>
                *Si tiene mas de una carta de referencia personal, agreguelas en un solo documento .pdf.
            </small>`;
}


function verificadorFechaTermino(element){
    let origen = element.parentNode.parentNode.parentNode.children[1];
    if (element.checked){
        origen.innerHTML = ""
    }else{
        origen.innerHTML=FechaTermino();
        agregarDatePicker('fechaTerminoLaboral')
    }
}


function verificadorDocumentoProbatorio(element){

    let containerInput = element.parentNode.parentNode.parentNode.children[0];
    let containerAviso = element.parentNode.parentNode.parentNode.children[1];


    if (element.checked){
        containerInput.innerHTML = "";
        containerAviso.innerHTML = "";
    }else{
        containerInput.innerHTML = DocumentoProbatorio();
        containerAviso.innerHTML = AvisoDocumentoProbatorio();

    }
}





function agregarComponenteTumbowyg(j){

    $(`#actividadesRealizadasComponente${j}`).trumbowyg({
        langs: {
            en: {
                strong:         "Fuerte",
                em:             "Énfasis",
                unorderedList:  "Lista desordenada",
                orderedList:    "Lista ordenada",
            }
        },
        autogrow: true,
        btns: [
            ['undo', 'redo'],
            ['unorderedList', 'orderedList'],
        ],
        removeformatPasted: true

    });
}


function visualizadorDatosFormacionLaboral(params) {

    return `
    <div>
        <div class="form-row text-center">
            <div class="form-group col-md-4">
                <h6>Institución/Empresa:</h6>
                <p>${params.institucion}</p>
            </div>

            <div class="form-group col-md-4">
                <h6>País:</h6>
                <p>${retornaPaisNombre(params.idPais)}</p>
            </div>

            <div class="form-group col-md-4">
                <h6>Nombre de puesto:</h6>
                <p>${params.puesto}</p>
            </div>

        </div>

        <div class="form-row text-center">
            <div class="form-group col-md-4">
                <h6>Fecha de inicio:</h6>
                <p>${timeChangeToLocal(params.fechaInicio)}</p>

            </div>

            <div class="form-group col-md-4">
                <h6>Fecha de término:</h6>
                <p>${ params.fechaTermino === null ?  '---': timeChangeToLocal(params.fechaTermino)}</p>
            </div>
        </div>


        <div class="form-row text-center">

            ${obtenerTipoDocumentoLABORAL(params)}

        </div>

        <hr>

        <div class="form-row ">
            <div class="form-group col-md-12">
                <h6>Actividades realizadas:</h6>
                <div>
                    ${devolverActividadesRealizadas(this,params )}
                </div>
            </div>
        </div>
    </div>
    `
}




const devolverActividadesRealizadas = (element, params) => {
    return params.actividades
}



const obtenerTipoDocumentoLABORAL = (item)=>{

    let idCurriculumDocs  = item.idCurriculumFormacion
    let objROUTES = ROUTES_OBJ.getITEMSROUTE();

    let documento = dataDocumentosFormaciones.findItemByIdCurriculum(idCurriculumDocs)
    console.log(documento)


    try {
        let documentoIndividual = documento[0];


        return `
            <div class="form-group col-md-4">
                <h6>Tipo de documento:</h6>
                <div>
                    <p>${documentoIndividual.tipoDocumento}</p>
                </div>
            </div>

            <div class="form-group col-md-4">
                <h6>Evidencia:</h6>
                <div>
                    <a target="_blank" href="${objROUTES.itemRouteDocFormacionGral}/${documentoIndividual.idDocumento}">${documentoIndividual.archivo}</a>
                </div>
            </div>`;
    }catch (e){

        return `<div class="form-group col-md-4">
                <h6></h6>
                <div>

                </div>
            </div>`;

    }
}

const obtenerEnlaceDocumentoLABORAL = (item) =>{
    //obtener datsode idCurriculumFormacion....

    let idCurriculumDocs  = item.idCurriculumFormacion

    let documento = dataDocumentosFormaciones.findItemByIdCurriculum(idCurriculumDocs)

    let objROUTES = ROUTES_OBJ.getITEMSROUTE();

    try {
        let documentoIndividual = documento[0];

        //Buscar en respositorioDocumento

        //return `<a target="_blank" href="/prospectoAdmin/documentoFormacionObtener/${documentoIndividual.idDocumento}">${documentoIndividual.archivo}</a>`;
        return `<a target="_blank" href="${objROUTES.itemRouteDocFormacionGral}/${documentoIndividual.idDocumento}">${documentoIndividual.archivo}</a>`;
    }catch (e){


        return `<p>SIN DOCUMENTO</p>`
    }


}

//************TERMINA COMPONENTES DE FormacionLaboral

//************Inicia Actions de FormacionLaboral


const mandarDocumentoFormacionLaboral = async (idCurriculumFormacion, item, valueIDDocumento)=>{

    let form_data = $('#' + item.id).serializeJSON();
    console.log(form_data);
    let error = [];

    let chckDocumento = form_data.chkCartadeReferencia;


    if (chckDocumento!== 'on'){
        let itemInputDocu = item.children[0].children[2].children[0].children[1].children[1].children[0];
        let formData = new FormData();
        formData.append('file',itemInputDocu.files[0]);
        formData.append('file',itemInputDocu.files[0]);
        formData.append('inputname',itemInputDocu.value);
        formData.append('idCurriculumFormacion',idCurriculumFormacion);
        let dataa = await sendFilePDFFREE(formData,'setArchivoFormacionLaboral')

        valueIDDocumento.value = dataa.idDocumento;


        let dataDocumento = await getDocumentacioActual(idCurriculumFormacion)

        dataDocumento.forEach((itemDocumentos)=>{
            dataDocumentosFormaciones.addNewItem(itemDocumentos);
        })

        return true;


    }else {

        //No manda nada
        return false;
    }


}


const actualizarDocumentoFormacionLaboral = async (idCurriculumFormacion, item, valueIDDocumento)=>{

    let form_data = $('#' + item.id).serializeJSON();
    console.log(form_data);

    let chckDocumento = form_data.chkCartadeReferencia;


    if (chckDocumento!== 'on'){
        let itemInputDocu = item.children[0].children[2].children[0].children[1].children[1].children[0];

        let idDocs = valueIDDocumento.value;

        let formData = new FormData();
        formData.append('file',itemInputDocu.files[0]);
        formData.append('file',itemInputDocu.files[0]);
        formData.append('inputname',itemInputDocu.value);
        formData.append('idCurriculumFormacion',idCurriculumFormacion);
        formData.append('idDocumento',idDocs);


        let updateDocumento = await sendFilePDFFREE(formData,'updateArchivoFormacionLaboral')
        console.log("------Update doc")
        console.log(updateDocumento)

        console.log(dataDocumentosFormaciones.findItemByIdDocument(idDocs))

        let documentoFormacionActual = await getDocumentacioActual(idCurriculumFormacion)
        let newItem = documentoFormacionActual[0]
        console.log("********")
        console.log(newItem)//Nuevo item
        console.log("********")
        dataDocumentosFormaciones.replaceItemByIdDocument(idDocs,newItem)

        console.log(dataDocumentosFormaciones.findItemByIdDocument(idDocs))



        return true;


    }else {

        //No manda nada
        return false;
    }

}



const getFormacionLaboral =async (item) =>{
    let dataa = await getDataFromServerHidden(`getFormacionLaboralIndividual/${item}`,'POST')
    return dataa[0];
}


const getObtenerIdentificadorDocumentoActualLaboral = (item) =>{

    let form_data = $('#' + item.id).serializeJSON();
    return form_data.tipoDocumento;
}

async function guardarFormularioFormacionLaboral(params) {
    console.log("Guardando datos");

    //Contenedor de botones
    let containerButtons = params.parentNode.parentNode;

    //SkeletondeHeader (Contenedor)
    let skeletonHeader = params.parentNode.parentNode.parentNode.parentNode.children[0].children[0]
    //SkeletonBody (Contenedor)
    let skeletonBody = params.parentNode.parentNode.parentNode.parentNode.children[1].children[0]

    //input para valor de FormacionLaboral
    let inputValueFormacionLaboral = params.parentNode.parentNode.parentNode.children[1].children[0].value

    //input para documento de FormacionLaboral
    let inputValueDocumentFormacionLaboral = params.parentNode.parentNode.parentNode.children[1].children[1].value

    //Contenedor card-body
    let cardBody = params.parentNode.parentNode.parentNode.parentNode.children[1];

    //console.log(cardBody)

    //Contenedor principal1 (container-form)
    let containerForm = params.parentNode.parentNode.parentNode.parentNode.children[1].children[1];

    //ContenedorFormularioParent (form-action) //Se realiza Escritura de componente visualizador
    let containerFormShowFormacionLaboral = params.parentNode.parentNode.parentNode.parentNode.children[1].children[1].children[0]


    //validando datos para formulario....
    let formValidacion = await validacionFormularioFormLABORAL(containerFormShowFormacionLaboral);
    let validacionDocs = await validacionDocumentoFormularioLABORAL(containerFormShowFormacionLaboral);

    if (formValidacion||validacionDocs){
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



        let response = await generacionObjetoLABORAL(containerFormShowFormacionLaboral);



        if (response.noError === "0"){


            inputValueFormacionLaboral = response.idCurriculumFormacion; // valor de idCurriculumFormacion

            params.parentNode.parentNode.parentNode.children[1].children[0].value = response.idCurriculumFormacion;

            //Valor donde esta guardando el ite idDocumento
            let inputValueDocumentFormacionAdicionalSecond = params.parentNode.parentNode.parentNode.children[1].children[1]

            let itemFormacionLaboral = await getFormacionLaboral(inputValueFormacionLaboral);

            dataFormacionLaboral.addNewItem(itemFormacionLaboral);


            //Mandar documento
            let idDocumento = await mandarDocumentoFormacionLaboral(inputValueFormacionLaboral,containerFormShowFormacionLaboral,inputValueDocumentFormacionAdicionalSecond)
             idDocumento === true ? console.warn("Existe documento y ya se mando"):console.warn("No existe nada, puede continuar");

            swal({
                title: "Atención",
                text: "Campos guardados correctamente",
                type: "success",
            });

            let formacionActual = dataFormacionLaboral.findItemByIdCurriculum(inputValueFormacionLaboral)

            console.log(inputValueFormacionLaboral)
            console.log(formacionActual)


            containerFormShowFormacionLaboral.innerHTML =  visualizadorDatosFormacionLaboral(formacionActual)//Componente de Visualizacion

            skeletonHeader.hidden = true
            skeletonBody.hidden = true;
            containerButtons.hidden = false;
            containerForm.hidden = false;

            containerButtons.innerHTML = btnsComponentEditaFirstFormacionLaboral();

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



const eliminarFormularioFormacionLaboral = (params)=>{
    console.log("Eliminando formularios");
    let containerGeneralFormacionLaboral = params.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode

    //console.log(containerGeneralFormacionLaboral)
    containerGeneralFormacionLaboral.remove();
    /*//Contenedor de botones
    let containerButtons = params.parentNode.parentNode;

    //SkeletondeHeader (Contenedor)
    let skeletonHeader = params.parentNode.parentNode.parentNode.parentNode.children[0].children[0]
    //SkeletonBody (Contenedor)
    let skeletonBody = params.parentNode.parentNode.parentNode.parentNode.children[1].children[0]

    //input para valor de FormacionLaboral
    let inputValueFormacionLaboral = params.parentNode.parentNode.parentNode.children[1].children[0].value

    //input para documento de FormacionLaboral
    let inputValueDocumentFormacionLaboral = params.parentNode.parentNode.parentNode.children[1].children[1].value

    //Contenedor card-body
    let cardBody = params.parentNode.parentNode.parentNode.parentNode.children[1];

    //Contenedor principal1 (container-form)
    let containerForm = params.parentNode.parentNode.parentNode.parentNode.children[1].children[1];

    //ContenedorFormularioParent (form-action) //Se realiza Escritura de componente visualizador
    let containerFormShowFormacionLaboral = params.parentNode.parentNode.parentNode.parentNode.children[1].children[1].children[0]*/

}




const validacionFormularioFormLABORAL = async(item)=>{


    let form_data = $('#' + item.id).serializeJSON();
    let nombreComponenteDoc =  item.children[0].children[3].children[0].children[1].children[1].name;

    let infoComponente = $(`#${nombreComponenteDoc}`).trumbowyg('html') === '';

    console.log(form_data)

    if (form_data.chkInstitucion === 'on'){
        //Si esta marcado...

        return form_data.fechaInicioLaboral.trim() === ''
            ||form_data.nombreInstitucion.trim() === ''
            ||form_data.nombrePuesto.trim() === ''
            ||form_data.paisExperiencia === undefined
            ||infoComponente

        //console.log("Esta checado... no se tiene que mostrar el Termino")

    }else {

        return form_data.fechaInicioLaboral.trim() === ''
            ||form_data.fechaTerminoLaboral.trim() === ''
            ||form_data.nombreInstitucion.trim() === ''
            ||form_data.nombrePuesto.trim() === ''
            ||form_data.paisExperiencia === undefined
            ||infoComponente

        //Si esta marcado.... (Solo algunos campos)

    }



}


const validacionDocumentoFormularioLABORAL = async(item) => {

    let form_data = $('#' + item.id).serializeJSON();
    console.log(form_data);
    let error = [];

    let chckDocumento = form_data.chkCartadeReferencia;


    if (chckDocumento!== 'on'){
        let itemInputDocu = item.children[0].children[2].children[0].children[1].children[1].children[0]


        if (itemInputDocu===''){

            error.push(true);
        }else{
            error.push(false);
        }

        let dataValidator = validacionComprobacionDocumentos(itemInputDocu);
        error.push(dataValidator);

    }else {

        error.push(false);

    }

    return error.includes(true);

}


const generacionObjetoLABORAL= async(item)=>{

    let form_data = $('#' + item.id).serializeJSON();
    let nombreComponenteDoc =  item.children[0].children[3].children[0].children[1].children[1].name;
    //let infoComponente = $(`#${nombreComponenteDoc}`).trumbowyg('html') === '';
    //let textoActividades = $(`#${nombreComponenteDoc}`).trumbowyg('html') === '';

    let array = [];

    if (form_data.chkInstitucion === 'on'){

        //Si esta marcado.... (Solo algunos campos)
        let fechaInicioLaboral= form_data.fechaInicioLaboral.trim();

        let nombreInstitucion = form_data.nombreInstitucion.trim();
        let nombrePuesto = form_data.nombrePuesto.trim();
        let paisExperiencia = form_data.paisExperiencia;

        //let textoActividades = $(`#${nombreComponenteDoc}`).trumbowyg('html') // Obteniendo texto HTML DE LA MANERA NATIVA
        let textoActividades = $(`#${nombreComponenteDoc}`).html(); // Obteniendo texto HTML
        let cleanTextActividades = textoActividades.replace(/(\r\\n|\\n|\\r|\\")/gm, "");

        let object = {

             fechaInicioLaboral: fechaInicioLaboral
            ,nombreInstitucion:nombreInstitucion
            ,nombrePuesto:nombrePuesto
            ,paisExperiencia:paisExperiencia
            ,textoActividades:cleanTextActividades.trim()
        };
        array.push(object);

        let data = JSON.stringify(array);

        return await getDataFromServerHidden('definirFormacionLaboral2','POST',data)


    }else {

        //Si no esta marcado (Entonces se muestran todos los campos)
            let fechaInicioLaboral= form_data.fechaInicioLaboral.trim();
            let fechaTerminoLaboral = form_data.fechaTerminoLaboral.trim();
            let nombreInstitucion = form_data.nombreInstitucion.trim();
            let nombrePuesto = form_data.nombrePuesto.trim();
            let paisExperiencia = form_data.paisExperiencia;

            //let textoActividades = $(`#${nombreComponenteDoc}`).trumbowyg('html') // Obteniendo texto HTML DE LA MANERA NATIVA
            let textoActividades = $(`#${nombreComponenteDoc}`).html(); // Obteniendo texto HTML

            //let cleanTextActividades  = let someText = data.replace(/(\r\\n|\\n|\\r)/gm, "");
            let cleanTextActividades = textoActividades.replace(/(\r\\n|\\n|\\r)/gm, "");
        let object = {

             fechaInicioLaboral: fechaInicioLaboral
            ,fechaTerminoLaboral:fechaTerminoLaboral
            ,nombreInstitucion:nombreInstitucion
            ,nombrePuesto:nombrePuesto
            ,paisExperiencia:paisExperiencia
            ,textoActividades:cleanTextActividades.trim()
        };

        array.push(object);
        let data = JSON.stringify(array);
        return await getDataFromServerHidden('definirFormacionLaboral','POST',data)

    }

}


const generacionObjetoLABORALUpdate= async(item, idCurriculumFo)=>{

    //,idCurriculumFormacion: idCurriculumFo recordar el idFormacion
    let form_data = $('#' + item.id).serializeJSON();
    let nombreComponenteDoc =  item.children[0].children[3].children[0].children[1].children[1].name;
    //let infoComponente = $(`#${nombreComponenteDoc}`).trumbowyg('html') === '';
    //let textoActividades = $(`#${nombreComponenteDoc}`).trumbowyg('html') === '';

    let array = [];

    if (form_data.chkInstitucion === 'on'){

        //Si esta marcado.... (Solo algunos campos)
        let fechaInicioLaboral= form_data.fechaInicioLaboral.trim();

        let nombreInstitucion = form_data.nombreInstitucion.trim();
        let nombrePuesto = form_data.nombrePuesto.trim();
        let paisExperiencia = form_data.paisExperiencia;

        //let textoActividades = $(`#${nombreComponenteDoc}`).trumbowyg('html') // Obteniendo texto HTML DE LA MANERA NATIVA
        let textoActividades = $(`#${nombreComponenteDoc}`).html(); // Obteniendo texto HTML
        let cleanTextActividades = textoActividades.replace(/(\r\\n|\\n|\\r|\\")/gm, "");

        let object = {

            fechaInicioLaboral: fechaInicioLaboral
            ,nombreInstitucion:nombreInstitucion
            ,nombrePuesto:nombrePuesto
            ,paisExperiencia:paisExperiencia
            ,textoActividades:cleanTextActividades.trim()
            ,idCurriculumFormacion: idCurriculumFo
        };
        array.push(object);

        let data = JSON.stringify(array);

        return await getDataFromServerHidden('actualizarFormacionLaboral2','POST',data)


    }else {

        //Si no esta marcado (Entonces se muestran todos los campos)
        let fechaInicioLaboral= form_data.fechaInicioLaboral.trim();
        let fechaTerminoLaboral = form_data.fechaTerminoLaboral.trim();
        let nombreInstitucion = form_data.nombreInstitucion.trim();
        let nombrePuesto = form_data.nombrePuesto.trim();
        let paisExperiencia = form_data.paisExperiencia;

        //let textoActividades = $(`#${nombreComponenteDoc}`).trumbowyg('html') // Obteniendo texto HTML DE LA MANERA NATIVA
        let textoActividades = $(`#${nombreComponenteDoc}`).html(); // Obteniendo texto HTML

        //let cleanTextActividades  = let someText = data.replace(/(\r\\n|\\n|\\r)/gm, "");
        let cleanTextActividades = textoActividades.replace(/(\r\\n|\\n|\\r)/gm, "");
        let object = {

            fechaInicioLaboral: fechaInicioLaboral
            ,fechaTerminoLaboral:fechaTerminoLaboral
            ,nombreInstitucion:nombreInstitucion
            ,nombrePuesto:nombrePuesto
            ,paisExperiencia:paisExperiencia
            ,textoActividades:cleanTextActividades.trim()
            ,idCurriculumFormacion: idCurriculumFo
        };

        array.push(object);
        let data = JSON.stringify(array);
        return await getDataFromServerHidden('actualizarFormacionLaboral','POST',data)

    }


}


function editarFormularioFormacionLaboral(params) {

    console.log("Editando datos");

    //Contenedor de botones
    let containerButtons = params.parentNode.parentNode;


    //SkeletondeHeader (Contenedor)
    let skeletonHeader = params.parentNode.parentNode.parentNode.parentNode.children[0].children[0]
    //SkeletonBody (Contenedor)
    let skeletonBody = params.parentNode.parentNode.parentNode.parentNode.children[1].children[0]

    //input para valor de FormacionLaboral
    let inputValueFormacionLaboral = params.parentNode.parentNode.parentNode.children[1].children[0].value

    console.log(inputValueFormacionLaboral)

    //input para documento de FormacionLaboral
    let inputValueDocumentFormacionLaboral = params.parentNode.parentNode.parentNode.children[1].children[1].value

    //console.log(inputValueDocumentFormacionLaboral)

    //Contenedor card-body
    let cardBody = params.parentNode.parentNode.parentNode.parentNode.children[1];

    //Contenedor principal1 (container-form)
    let containerForm = params.parentNode.parentNode.parentNode.parentNode.children[1].children[1];

    //ContenedorFormularioParent (form-action) //Se realiza Escritura de componente visualizador

    let containerFormShowFormacionLaboral = params.parentNode.parentNode.parentNode.parentNode.children[1].children[1].children[0]


    let j = Math.floor(Math.random() * 100000);
    containerFormShowFormacionLaboral.innerHTML =  formularioNuevoFormacionLaboral(j)//Componente de Visualizacion
    agregarDatePicker('fechaInicioLaboral')
    agregarDatePicker('fechaTerminoLaboral')
    agregarComponenteTumbowyg(j);
    //Agrega el generar componente....



    //agregando Botones para editar
    containerButtons.innerHTML = btnsComponentEditaCancelaFirstFormacionLaboral();
    agregarDatePicker('fechaInicioLaboral')
    agregarDatePicker('fechaTerminoLaboral')


}

async function guardarEdicionFormacionLaboral(params) {

    console.log("Guardando datos en edicion");

    //Contenedor de botones
    let containerButtons = params.parentNode.parentNode;


    //SkeletondeHeader (Contenedor)
    let skeletonHeader = params.parentNode.parentNode.parentNode.parentNode.children[0].children[0]
    //SkeletonBody (Contenedor)
    let skeletonBody = params.parentNode.parentNode.parentNode.parentNode.children[1].children[0]

    //input para valor de FormacionLaboral
    let inputValueFormacionLaboral = params.parentNode.parentNode.parentNode.children[1].children[0].value

    //input para documento de FormacionLaboral
    let inputValueDocumentFormacionLaboral = params.parentNode.parentNode.parentNode.children[1].children[1].value

    //Contenedor card-body
    let cardBody = params.parentNode.parentNode.parentNode.parentNode.children[1];

    //Contenedor principal1 (container-form)
    let containerForm = params.parentNode.parentNode.parentNode.parentNode.children[1].children[1];

    //ContenedorFormularioParent (form-action) //Se realiza Escritura de componente visualizador

    let containerFormShowFormacionLaboral = params.parentNode.parentNode.parentNode.parentNode.children[1].children[1].children[0]


    //En esta parte va la edicion

    let formValidacion = await validacionFormularioFormLABORAL(containerFormShowFormacionLaboral);
    let validacionDocs = await validacionDocumentoFormularioLABORAL(containerFormShowFormacionLaboral);

    //Realizando modificacion para esto..
    if (formValidacion||validacionDocs){
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

        let idCurriculumFo = params.parentNode.parentNode.parentNode.children[1].children[0].value

        console.log("El id es "+idCurriculumFo);
        let response = await generacionObjetoLABORALUpdate(containerFormShowFormacionLaboral,idCurriculumFo)
        console.log(response)
        if (response.noError === "0"){







            let itemFormacionLaboral = await getFormacionLaboral(idCurriculumFo);

            dataFormacionLaboral.replaceItemByIdCurriculumFormacion(idCurriculumFo,itemFormacionLaboral);

            //console.log(dataDocumentosFormaciones.findItemByIdDocument(idDocument))

            let inputValueDocumentFormacionAdicionalSecond = params.parentNode.parentNode.parentNode.children[1].children[1]

            //SI no existe un documento, entonces tiene que agregarse el documento
            if (inputValueDocumentFormacionAdicionalSecond.value===''){

                let idDocumento1 = await mandarDocumentoFormacionLaboral(inputValueFormacionLaboral,containerFormShowFormacionLaboral,inputValueDocumentFormacionAdicionalSecond)
                idDocumento1 === true ? console.warn("Existe documento y ya se mando"):console.warn("No existe nada, puede continuar");


            }else{
                let idDocumento2 = await actualizarDocumentoFormacionLaboral(inputValueFormacionLaboral,containerFormShowFormacionLaboral,inputValueDocumentFormacionAdicionalSecond)
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

            let formacionActual = dataFormacionLaboral.findItemByIdCurriculum(inputValueFormacionLaboral)

            containerFormShowFormacionLaboral.innerHTML =  visualizadorDatosFormacionLaboral(formacionActual)//Componente de Visualizacion
            containerButtons.innerHTML = btnsComponentEditaFirstFormacionLaboral();




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


function cancelarEditarFormularioFormacionLaboral(params) {

    console.log("Cancelando edicion de datos");
    //Contenedor de botones
    let containerButtons = params.parentNode.parentNode;


    //SkeletondeHeader (Contenedor)
    let skeletonHeader = params.parentNode.parentNode.parentNode.parentNode.children[0].children[0]
    //SkeletonBody (Contenedor)
    let skeletonBody = params.parentNode.parentNode.parentNode.parentNode.children[1].children[0]

    //input para valor de FormacionLaboral
    let inputValueFormacionLaboral = params.parentNode.parentNode.parentNode.children[1].children[0].value

    //input para documento de FormacionLaboral
    let inputValueDocumentFormacionLaboral = params.parentNode.parentNode.parentNode.children[1].children[1].value

    //Contenedor card-body
    let cardBody = params.parentNode.parentNode.parentNode.parentNode.children[1];

    //Contenedor principal1 (container-form)
    let containerForm = params.parentNode.parentNode.parentNode.parentNode.children[1].children[1];

    //ContenedorFormularioParent (form-action) //Se realiza Escritura de componente visualizador

    let containerFormShowFormacionLaboral = params.parentNode.parentNode.parentNode.parentNode.children[1].children[1].children[0]

    let formacionActual = dataFormacionLaboral.findItemByIdCurriculum(inputValueFormacionLaboral)

    containerFormShowFormacionLaboral.innerHTML =  visualizadorDatosFormacionLaboral(formacionActual)//Componente de Visualizacion

    //agregando Botones para editar
    containerButtons.innerHTML = btnsComponentEditaFirstFormacionLaboral();
}



//Acciones para escribir o sobresscribir en componente dado......



function obtenerFormacionLaboral(itemFormacion) {

    let j = Math.floor(Math.random() * 100000);

    let documento = dataDocumentosFormaciones.findItemByIdCurriculum(itemFormacion.idCurriculumFormacion)
    let currentDocument = documento[0];



    return `<div class="container" id="showinfoFormacionLaboral">
    <div class="formacionFormacionLaboral">
        <div class="card  card-formacion-academica card-formacion-FormacionLaboral" id="card-formacion-FormacionLaboral">
            <div class="card-header">

                <div class="container-skeleton-FormacionLaboral-BodyCard" hidden>
                    <span class="skeleton-loader"></span>
                </div>

                <div id="values" hidden>
                    <input type="text" name="valueIDCF" id="valueIDCF" hidden disabled value="${itemFormacion.idCurriculumFormacion}">
                    <input type="text" name="valueIDoc" id="valueIDoc" hidden disabled value="${currentDocument === undefined ? "": currentDocument.idDocumento}">
                </div>

                <div class="card-buttons">




                </div>
            </div>

            <div class="card-body card-body-back" id="card-componentBody"  >

                <div class="container-skeleton-FormacionLaboral-BodyCard" hidden>
                    <div class="skeleton-section-content">
                        <span class="teasting2">
                        </span>
                    </div>
                </div>

                <div class="container-form">

                    <form action="" name="formacion-FormacionLaboral-form${j}" id="formacion-FormacionLaboral-form${j}">

                            <!--Formulario/Info-->
                        ${visualizadorDatosFormacionLaboral(itemFormacion)}

                    </form>

                    <div class="container-form-docs" id="container-form-docs${j}">

                    </div>
                </div>
            </div>
        </div>
    </div>
</div>`;
}





async function mostrarFormulariosFormacionLaboral(){

    let idUser = document.getElementById('_idUnique').value;

    let data = await getDataFromServerHidden(`getListadoFormacionLaboral/${idUser}`,'GET');
    //registrando todos los items
    data.forEach((item)=>{
        dataFormacionLaboral.addNewItem(item);
    })

    let dataLABORALHTML = "";
    data.forEach((items)=>{
        dataLABORALHTML += obtenerFormacionLaboral(items);

    })
    if(data.length>0){

        $("#FormacionLaboralContainer").prepend(dataLABORALHTML);

    }else{
        let dataSN = `<div class="text-center">
                        <h5 style="font-weight: 310">Datos no disponibles.</h5>
                    </div>`

        $("#FormacionLaboralContainer").prepend(dataSN);
    }


    let ifnro = `<br>

                        <hr>
                        <h6 class="text-black-50 text-center">Documentación:</h6>
                        ${obtenerDocumentoCorrespondiente("16")}
                        `

    $("#FormacionLaboralContainer").append(ifnro)



}


const showFormacionesLABORALes = async ()=>{

    await mostrarFormulariosFormacionLaboral();

    visibilityComponent('contenedorSkeletonFrmLaboral', true)
    visibilityComponent('titlegralOptionsFormacionLaboral', false)
    visibilityComponent('containerFormacionLaboral', false)
    visibilityComponent('FormacionLaboralContainer', false)
}
