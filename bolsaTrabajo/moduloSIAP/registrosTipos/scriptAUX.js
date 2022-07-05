
//Componente para select area de conocimiento
const componentSelectAreaConocimiento=()=>{

    //Lo ideal seria obtener datos del repositorio de datos para poder manipularlos...
    //Pero realmente seria cuestion de buscar la mejor manera para buscar los vigentes....
    return `
        <div class="form-areaConocimiento" >
            <h6>Area del conocimiento:</h6>
            <select class="browser-default custom-select" name="areaConocimiento" id="areaConocimiento">
                <option selected disabled>Seleccione una opción</option>
                <option value="1">Ciencias Naturales</option>
                <option value="2">Ingeniería y Tecnología</option>
                <option value="3">Ciencias Médicas</option>
                <option value="4">Ciencias Agrícolas</option>
                <option value="5">Ciencias Sociales</option>
                <option value="6">Humanidades</option>
            </select>
        </div>`;
}

//componente para select paios
const componenteSelectPaisFormacion = () =>{
    return `
        <h6>País:</h6>
        <select class="browser-default custom-select" name="PaisEstudio" id="PaisEstudio" onchange="obtenerDatosPaisFormacion(this)">
            <option selected disabled>Seleccione una opción</option>
            ${generateSelectCountry()}
        </select>`;
}

//genera select de pais
const generateSelectCountry = () => {
    let nacion = dataNacion.getDataCountry()
    let itemsNacion = nacion[0];
    let selectItem = '';
    itemsNacion.forEach((item) => {
        selectItem += `<option value="${item.idPais}">${item.pais}</option>`;
    });
    return selectItem;
}


//componente para mostrar sleect de estado
const componenteSelectEstadoFormacion  = () =>{

    return `
    <div>
        <h6>Entidad federativa:</h6>
            <select class="browser-default custom-select" name="entidadFederativa" id="entidadFederativa" onchange="obtenerUniversidad(this)">
            <option selected disabled>Seleccione una opción</option>
            ${generateSelectState()}
        </select>
    </div>`;
}


//Select para nivel de estudios
const selectNivelEstudios = () =>{

    //necesario obtener catalogos para mostrar el select...
    //esto se tiene que mostrar o mostrar la data desde el repositorio...
    return `
    <select class="browser-default custom-select" name="nivelEstudios" id="nivelEstudios" onchange="selectItemsEstudiosCasos(this)">
        <option value="0" selected disabled>Seleccione una opción</option>
        <option value="1">Inicial</option>
        <option value="2">Inicial No Escolarizada</option>
        <option value="3">Preescolar</option>
        <option value="4">Primaria</option>
        <option value="5">Secundaria</option>
        <option value="6">Técnico Medio</option>
        <option value="7">Bachillerato</option>
        <option value="8">Técnico Superior Universitario</option>
        <option value="9">Licenciatura</option>
        <option value="10">Especialidad</option>
        <option value="11">Maestría</option>
        <option value="12">Doctorado</option>
    </select>`;
}


//select para institucion
const itemSelectFormacionInstitucion = (values= null) => {
    //Aqui seria conveniente obtener los datos del repositorio
    return `
        <div>
            <h6>Nombre de institucion:</h6>
            <select class="browser-default custom-select" name="institucionNombreId" id="institucionNombreId">


            </select>
        </div>
    `;
}

//componente para input institucion
const itemInputInstitucion = () => {
    //Aqui seria conveniente obtener los datos del repositorio
    return `
        <div>
            <h6>Nombre de institucion:</h6>
            <input type="text" class="form-control"  name="nombreInstitucion" id="nombreInstitucion" placeholder="Ingrese nombre de la institución" autocomplete="off" oninput="eliminarEspacios(this)">
        </div>
    `;
}

const itemCheckInstitucion = () =>{
    return `<div class="form-check" >
            <input class="form-check-input" type="checkbox" name="chkInstitucion" id="chkInstitucion"  onchange="hideShowInfoInstitucion(this)">
            <label class="form-check-label" for="chkInstitucion">

            </label>
            <label class="form-check-label" for="chkInstitucion">
                * Marque esta casilla si no se muestra el nombre de la institución.
            </label>
        </div>`;
}


//compoennte para estudios realizadosa (Input)
const itemInputEstudiosRealizados = () =>{
    //seria conveniten obtener los datos del repositorio
    return `
    <div>
        <h6>Nombre de estudios realizados:</h6>
        <input type="text" class="form-control"  name="nombreEstudiosRealizados" id="nombreEstudiosRealizados" placeholder="Ingrese nombre de estudios" autocomplete="off" oninput="eliminarEspacios(this)">
    </div>`;
}

//Componente para estudios realizados(Select)
const itemSelectEstudiosRealizados = () =>{
    return `
        <div>
            <h6>Nombre de estudios Realizados:</h6>
            <select class="browser-default custom-select" name="nombreEstudiosRealizadosID" id="nombreEstudiosRealizadosID">

            </select>
        </div>
    `;
}

//compoente paara estudios realizados (chk)
const itemCheckEstudiosRealizados = ()=> {
    return `<div class="form-check">
                <input class="form-check-input" type="checkbox" name="chkEstudios" id="chkEstudios" onchange="hideShowInfoNombreEstudiosPlan(this)">
                <label class="form-check-label" for="chkEstudios">

                </label>
                <label class="form-check-label" for="chkEstudios">
                    * Marque esta casilla si no se muestra el nombre de sus estudios realizados.
                </label>
            </div>`;
}


const newFormacionAcademica = () =>{

    let j = Math.floor(Math.random() * 100000);

    let data = `
   <div class="card card-formacion-academica" id="card-formacionAcademica${j}">
        <div class="card-header">

            <div hidden>
                <span class="skeleton-loader"></span>
            </div>

            <div id="values" hidden>
                <input type="text" name="valueIDCF" id="valueIDCF" hidden disabled>
                <input type="text" name="valueIDoc" id="valueIDoc" hidden disabled>
                <input type="text" name="valueIDFormacionDOC" id="valueIDFormacionDOC" hidden disabled>
            </div>

            <div class="card-buttons">

                <div>
                    <button type="button" class="btn btn-outline-secondary btn-sm btns-components-action" id="button-component-Guardar${j}"><i class="fas fa-save"></i> Guardar</button>
                    <button type="button" class="btn btn-outline-secondary btn-sm btns-components-action" id="button-component-Eliminar${j}"><i class="fas fa-trash-alt"></i> Eliminar</button>
                </div>
            </div>


        </div>

        <div class="card-body card-body-back" id="card-componentBody${j}">

            <div class="container-skeleton-ItemFA" hidden>
                <div class="skeleton-section-content">
                        <span class="teasting2">
                        </span>
                </div>
            </div>

            <div class="container-form">

                <form action="" name="formcion-academica-form${j}" id="formcion-academica-form${j}">

                    <div class="form-row">

                        <!--Input para nivel de estudios-->

                        <div class="form-group col-md-6" id="selectNivelEstudio">
                            <h6>Nivel de estudios:</h6>
                            ${selectNivelEstudios()}
                        </div>

                    </div>

                    <div class="container-ubicacionPais">


                    </div>

                    <div class="container-NombreInstitucion">


                    </div>


                    <div class="container-NombreEstudios">

                        <!--Aqui va el componente row para mostrar ocultar NombreEstudios-->




                    </div>


                    <div class="container-AreaConociento">
                        <!--Aqui va el componente row para mostrar ocultar Area conocimiento-->


                    </div>


                    <hr>


                    <div class="form-row">

                        <div class="form-group col-md-12 text-center">
                            <div>
                                <h6 class="" style="font-weight: 300">*Por favor, agregue los documentos obtenidos. (Máximo 2 documentos por formación).</h6>
                                <small id="" class="text-muted" >
                                    *Estos deberán estar en formato .pdf y ser menores a 1mb.
                                </small>
                            </div>

                            <div>
                                <div id="container-title-btn" class="container-mainly-btn">
                                    <button type="button" class="btn btn-outline-secondary btn-sm btns-components-action-lx" id="button-component-AgregarDoc${j}" ><i class="fas fa-plus"></i> Agregar archivos</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </form>


                <div class="container-form-docs" id="container-form-docs${j}">

                </div>

            </div>

        </div>
    </div>`


    //Append the data to formacionAcademica-elementos item
    //$('#formacionAcademica-elementos').append(data)
    $('#formacionAcademica-elementos').prepend(data)


    AgregarListener(`button-component-Guardar${j}`,formAcademicaGuardarInicial); //agrega evento para guardar...
    AgregarListener(`button-component-Eliminar${j}`,formAcademicaEliminarInicial); // Agrega evento para elimnar
    AgregarListener(`button-component-AgregarDoc${j}`,AgregarNuevoDocumentoFormAcademica); // Agrega evento para agregar nuevos elementos al formulario...

}

const showFormacionAcademicaIndividual = (formacion) =>{

    let j = Math.floor(Math.random() * 100000);

    //Append the data to formacionAcademica-elementos item
    //$('#formacionAcademica-elementos').append(data)


    /*AgregarListener(`button-component-Guardar${j}`,formAcademicaGuardarInicial); //agrega evento para guardar...
    AgregarListener(`button-component-Eliminar${j}`,formAcademicaEliminarInicial); // Agrega evento para elimnar
    AgregarListener(`button-component-AgregarDoc${j}`,AgregarNuevoDocumentoFormAcademica); // Agrega evento para agregar nuevos elementos al formulario...*/

    return `
   <div class="card card-formacion-academica" id="card-formacionAcademica${j}">
        <div class="card-header">

            <div hidden>
                <span class="skeleton-loader"></span>
            </div>

            <div id="values" hidden>
                <input type="text" name="valueIDCF" id="valueIDCF" hidden disabled value="${formacion.idCurriculumFormacion}">
                <input type="text" name="valueIDoc" id="valueIDoc" hidden disabled>
                <input type="text" name="valueIDFormacionDOC" id="valueIDFormacionDOC" hidden disabled>
            </div>

            <div class="card-buttons">

                ${mostrarOcultarComponenteInicial(formacion)}
            </div>


        </div>

        <div class="card-body card-body-back" id="card-componentBody${j}" hidden>

            <div class="container-skeleton-ItemFA" hidden>
                <div class="skeleton-section-content">
                        <span class="teasting2">
                        </span>
                </div>
            </div>

            <div class="container-form">

                <form action="" name="formcion-academica-form${j}" id="formcion-academica-form${j}">

                    ${showCasosdeUso(formacion)}

                </form>


                <div class="container-form-docs" id="container-form-docs${j}">
                    ${mostrarItemsDocumentos(formacion)}
                </div>

            </div>

        </div>
    </div>`;
}


const mostrarItemsDocumentos = (item)=>{

    let idCurriculumFormacion2 = item.idCurriculumFormacion;
    let documentosRepository = dataDocumentosFormaciones.findItemByIdCurriculum(idCurriculumFormacion2)
    let dataOrigin = ``;
    documentosRepository.forEach((itemDoc)=>{
        dataOrigin += componenteDocsFormacionAcademicaAfter(itemDoc)
    })

    return dataOrigin;


}


//Componente para formacion doccumento....
const componenteDocsFormacionAcademica = (j) =>{

    return `
    <div class="card card-formacion-academica" id="card-formacion-academica${j}">

        <div class="card-header">
            <div class="card-buttons">

                <div>
                    <button type="button" class="btn btn-outline-secondary btn-sm btns-components-action" id="btn-doc-delete${j}" onclick="EliminarNuevoDocumentoFormAcademica(this)"><i class="fas fa-trash"></i> Eliminar</button>
                </div>
            </div>
        </div>

        <div class="card-body">
            <form  name="formacion-Documento${j}" id="formacion-Documento${j}" enctype="multipart/form-data">
                <div class="form-row">
                    <div class="form-group col-md-6">
                        <h6>Documento obtenido: </h6>
                        <select class="browser-default custom-select" name="documentoObtenido" id="documentoObtenido">
                            <option selected disabled>Seleccione una opción</option>
                            <option value="4">Cédula profesional</option>
                            <option value="5">Certificado de Estudios</option>
                            <option value="8">Constancia de estudios</option>
                            <option value="19">Título/Grado/Diploma</option>
                        </select>
                    </div>

                    <div class="form-group col-md-6">
                        <div id="documentB1">
                            <h6>Adjuntar archivo: </h6>
                            <div class="input-group">
                                <div class="input-group-prepend">
                                    <span class="input-group-text" id="inputFileAgregarFormAcademica${j}" name="inputFileAgregarFormAcademica${j}"><i class="fa fa-file-pdf"></i></span>
                                </div>
                                <div class="custom-file">
                                    <input type="file" class="custom-file-input" id="inputFileFormAcademica${j}" name="inputFileFormAcademica1${j}" aria-describedby="inputGroupFileAddon01${j}" lang="es" accept=".pdf">
                                    <label class="custom-file-label" for="inputFileFormAcademica${j}" id="nombreArchivoFormAcademica${j}" name="nombreArchivoFormAcademica${j}">Buscar documento</label>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>

            </form>
        </div>
    </div>`;
}


/**
 * Habra 4 casos para la manipulacion del DOM
 * Analizando
 *
 */


const selectItemsEstudiosCasos = (item ) =>{

    //let itemText = item[item.selectedIndex].text;
    let itemValue = parseInt(item[item.selectedIndex].value);

    let containerUbicacion = item.parentNode.parentNode.parentNode.children[1];
    let containerNombreInstitucion = item.parentNode.parentNode.parentNode.children[2];
    let containerNombreEstudio = item.parentNode.parentNode.parentNode.children[3];
    let containerAreaConocimiento = item.parentNode.parentNode.parentNode.children[4];

    //Borrando elementos children
    deleteComponenteChildren(containerUbicacion)
    deleteComponenteChildren(containerNombreInstitucion)
    deleteComponenteChildren(containerNombreEstudio)
    deleteComponenteChildren(containerAreaConocimiento)

    //escribiendo en contenedores
    containerUbicacion.innerHTML = rowUbicacionPais(itemValue)
    containerNombreInstitucion.innerHTML = rowNombreInstitucion(itemValue)
    containerNombreEstudio.innerHTML = rowNombreEstudios(itemValue)
    containerAreaConocimiento.innerHTML = rowAreaConocimiento(itemValue)

}





const rowUbicacionPais = (n) =>{

    //Primer caso: menor o igual a 7
    //Segundo caso: igual a 6 igual a 8
    //Tercer caso:
    return `<div class="form-row">
                <!--Aqui va el componente para mostrar ocultar select-->
                <div class="form-group col-md-6" id="ubicacion-pais">
                    ${componenteSelectPaisFormacion()}
                </div>

                <div class="form-group col-md-6" id="ubicacion-estado">

                </div>
            </div>`;

    //${n>=9 ? componenteSelectEstadoFormacion(): ""}
}




const rowNombreInstitucion = (n) =>{
    return `<div class="form-row">
                    <div class="form-group col-md-6">

                        <!--Aqui va el componente para mostrar ocultar select-->
                        <div class="form-institucion-Abierto">
                            ${n===7 || n<=6 ? itemInputInstitucion(): ""}
                        </div>

                        <div class="form-institucion-Select">
                        <!--Aqui va el componente para mostrar ocultar select-->
                            ${n>=8 ? itemSelectFormacionInstitucion(): ""}
                        </div>

                    </div>
                     <div class="form-group col-md-6 text-center">
                        <!--Aqui va el componente para ocultar mostrar el input o select-->
                            ${n>=8 ? itemCheckInstitucion(): ""}
                    </div>
                </div>`;

}



const rowNombreEstudios = (n) => {

    //${itemInputEstudiosRealizados()}
    return `
            <div class="form-row">
                    <div class="form-group col-md-6">
                        <!--Aqui va el componente para mostrar ocultar select-->
                        <div class="form-NombreEstudios-Abierto">

                        </div>


                        <div class="form-NombreEstudios-Select">
                        <!--Aqui va el componente para mostrar ocultar select-->
                            ${n>=8 || n===6 ?itemSelectEstudiosRealizados(): ""}
                        </div>

                    </div>


                     <div class="form-group col-md-6 text-center">
                        <!--Aqui va el componente para ocultar mostrar el input o select-->
                        ${n>=8 || n===6 ? itemCheckEstudiosRealizados():""}
                    </div>

            </div>`;

}

const rowAreaConocimiento = (n) =>{
    return `<div class="form-row">
                <div class="form-group col-md-6">
                    ${n>=9 ?componentSelectAreaConocimiento(): ""}
                </div>
            </div>`;
}



//Obtiene de select el nivel educativo/estudios ... Pais  y dependiendo del nivel segun las condiciiones, se debera de sobreescribir el valor...
//6
//9 con area de conocimiento
// x > 9 agrega el item..."Estado"....

async function obtenerDatosPaisFormacion(item) {

    let itemSelectNivel = item.parentNode.parentNode.parentNode.parentNode.children[0].children[0].children[1];
    let valueSelectLevel = parseInt(itemSelectNivel.options[itemSelectNivel.selectedIndex].value);

    let containerNombresInstituciones = item.parentNode.parentNode.parentNode.parentNode.children[2]

    deleteComponenteChildren(containerNombresInstituciones);
    containerNombresInstituciones.innerHTML = rowNombreInstitucion(valueSelectLevel);

    let itemSelectPaisValue = parseInt(item.options[item.selectedIndex].value);
    let containerUbicacion = item.parentNode.parentNode.parentNode.children[0].children[1]

    hideShowState(containerUbicacion,itemSelectPaisValue, valueSelectLevel); // Oculta contenedor de select

    //Si el nivel es matyor a 9 ... (Licenciatura) y es ogial a incial

    if (valueSelectLevel===6){

        let containerNombrePogramadaEducativo = item.parentNode.parentNode.parentNode.parentNode.children[3];
        deleteComponenteChildren(containerNombrePogramadaEducativo)
        containerNombrePogramadaEducativo.innerHTML = rowNombreEstudios(valueSelectLevel);

        let selectNombreProgramaEducativo = containerNombrePogramadaEducativo.children[0].children[0].children[1].children[0].children[1];

        let data = await obtenerProgramasEducativos(`Externos`)
        let strings = "";
        strings+= `<option selected disabled>Seleccione una opción</option>`;
        data.forEach((item)=>{
            strings+=  `<option value="${item.idProgramaEducativo}">${item.programaEducativo}</option>`
        })

        selectNombreProgramaEducativo.innerHTML = strings;

    }

    if (valueSelectLevel===8){

        console.log("Caso tecnico, superior")
        //Select de institucion
        let cSelectInstitucion = item.parentNode.parentNode.parentNode.parentNode.children[2].children[0].children[0].children[1].children[0].children[1];
        cSelectInstitucion.innerHTML = ""

        let containerNombrePogramadaEducativo = item.parentNode.parentNode.parentNode.parentNode.children[3];
        deleteComponenteChildren(containerNombrePogramadaEducativo)
        containerNombrePogramadaEducativo.innerHTML = rowNombreEstudios(valueSelectLevel);

        let selectNombreProgramaEducativo = containerNombrePogramadaEducativo.children[0].children[0].children[1].children[0].children[1];

        let data = await obtenerProgramasEducativos(`Externos`)
        let strings = "";
        strings+= `<option selected disabled>Seleccione una opción</option>`;
        data.forEach((item)=>{
            strings+=  `<option value="${item.idProgramaEducativo}">${item.programaEducativo}</option>`
        })

        selectNombreProgramaEducativo.innerHTML = strings;
    }

    if (valueSelectLevel>=9 && itemSelectPaisValue === 1){

        console.log("Caso 1")
        //Select de institucion
        let cSelectInstitucion = item.parentNode.parentNode.parentNode.parentNode.children[2].children[0].children[0].children[1].children[0].children[1];
        cSelectInstitucion.innerHTML = ""

        let containerNombrePogramadaEducativo = item.parentNode.parentNode.parentNode.parentNode.children[3];
        deleteComponenteChildren(containerNombrePogramadaEducativo)
        containerNombrePogramadaEducativo.innerHTML = rowNombreEstudios(valueSelectLevel);
    }

    if (valueSelectLevel>=8 && itemSelectPaisValue !== 1){
        //Select de institucion
        let cSelectInstitucion = item.parentNode.parentNode.parentNode.parentNode.children[2].children[0].children[0].children[1].children[0].children[1];
        cSelectInstitucion.innerHTML = ""
        console.log("Caso 2")

        //Eliminar el container del componente de nombre de programas educativos...
        await escribirSelectNombreInstitucion(item,itemSelectPaisValue);



        let containerNombrePogramadaEducativo = item.parentNode.parentNode.parentNode.parentNode.children[3];
        deleteComponenteChildren(containerNombrePogramadaEducativo)
        containerNombrePogramadaEducativo.innerHTML = rowNombreEstudios(valueSelectLevel);

        let selectNombreProgramaEducativo = containerNombrePogramadaEducativo.children[0].children[0].children[1].children[0].children[1];

        let data = await obtenerProgramasEducativos(`Externos`)
        let strings = "";
        strings+= `<option selected disabled>Seleccione una opción</option>`;
        data.forEach((item)=>{
            strings+=  `<option value="${item.idProgramaEducativo}">${item.programaEducativo}</option>`
        })

        selectNombreProgramaEducativo.innerHTML = strings;

    }

}


async function escribirSelectNombreInstitucion(item,itemSelectPaisValue) {

    try {

        let cSelectInstitucion = item.parentNode.parentNode.parentNode.parentNode.children[2].children[0].children[0].children[1].children[0].children[1];

        cSelectInstitucion.innerHTML = ""

        let data = await obtenerInstitucionesPaises(itemSelectPaisValue)
        let strings = ""
        strings+= `<option selected disabled>Seleccione una opción</option>`;
        data.forEach((item)=>{

            strings+=  `<option value="${item.idInstitucion}">${item.institucion}</option>`

        })
        cSelectInstitucion.innerHTML = strings;
    }catch (e){
        swal({
            title: "Atencion",
            text:"Desmarque la casilla para poder mostrar la informacion de catalogos!, vuelva a seleccionar el elemento.",
            type: "warning"
        })
    }

}

//funcion para mostrar campo abierto de estado /Escribe la informacion en contenedor que se agrega al parametro
function hideShowState(container, countryValue, studyLevel) {

    if (studyLevel>=9 && countryValue === 1){

        container.innerHTML = componenteSelectEstadoFormacion();

    }else{
        //deleteComponenteChildren()

        deleteComponenteChildren(container);
    }
}

//retona la primera palabra de un string para usarla en api....
function firstWord(string){
    let firstWord = string.split(' ')
    return firstWord[0];

}



const obtenerUniversidad = async (element) => {

    let selectNivelAcademico = element.parentNode.parentNode.parentNode.parentNode.parentNode.children[0].children[0].children[1]

    let valueSelectAcademico = parseInt(selectNivelAcademico.options[selectNivelAcademico.selectedIndex].value);

    let valueSelectEstado = parseInt(element.options[element.selectedIndex].value)
    let estadoContainer = element.parentNode.parentNode.parentNode.parentNode.parentNode.children[2]

    deleteComponenteChildren(estadoContainer)
    estadoContainer.innerHTML = rowNombreInstitucion(valueSelectAcademico);



    //Tener que hacer referencia a container para estudios realizados....
    let containerNombreEstudios = element.parentNode.parentNode.parentNode.parentNode.parentNode.children[3];
    deleteComponenteChildren(containerNombreEstudios);
    containerNombreEstudios.innerHTML = rowNombreEstudios(valueSelectAcademico);


    let selectInstitucion = element.parentNode.parentNode.parentNode.parentNode.parentNode.children[2].children[0].children[0].children[1].children[0].children[1];

    try {
        selectInstitucion.innerHTML = ""
        let data = await obtenerInstitucionesPaises(`1/${valueSelectEstado}`)
        let strings = ""
        strings+= `<option selected disabled>Seleccione una opción</option>`;
        data.forEach((item)=>{
            strings+=  `<option value="${item.idInstitucion}">${item.institucion}</option>`
        })
        selectInstitucion.innerHTML = strings;
    }catch (e){
        //console.log(e)
    }


    //Agregando listener para hacer cambios de instutciones
    selectInstitucion.onchange = async () =>{
        await listenerInstutucion(selectInstitucion)
    }

}


//Cuando se sleecione la
async function listenerInstutucion (element){
    let valorSelect = parseInt(element.options[element.selectedIndex].value);


    let selectEstudios = element.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.children[0].children[0].children[1]

    let valorSelectNivel = parseInt(selectEstudios.options[selectEstudios.selectedIndex].value);
    let textoSelectNivel = selectEstudios.options[selectEstudios.selectedIndex].text;


    //Obtener container de nombbre de estudios realizados y reescribir data en select
    let containerNombreEstudios = element.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.children[3];
    deleteComponenteChildren(containerNombreEstudios)
    containerNombreEstudios.innerHTML = rowNombreEstudios(valorSelectNivel) //Reescribiendo en row

    //console.log(containerNombreEstudios);
    let selectNombreEstudiosRealizados = element.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.children[3].children[0].children[0].children[1].children[0].children[1];


    if (valorSelect===1350){


        let nombreCarrera = firstWord(textoSelectNivel);


        //Obtiene los nombres de los programas educativos de UAEH
        let data = await obtenerProgramasEducativos(`UAEH/${nombreCarrera}`)
        let strings = "";
        strings+= `<option selected disabled>Seleccione una opción</option>`;
        data.forEach((item)=>{
            strings+=  `<option value="${item.idProgramaEducativo}">${item.programaEducativo}</option>`
        })

        selectNombreEstudiosRealizados.innerHTML = strings;

    }else{
        let data = await obtenerProgramasEducativos(`Externos`)
        let strings = "";
        strings+= `<option selected disabled>Seleccione una opción</option>`;
        data.forEach((item)=>{
            strings+=  `<option value="${item.idProgramaEducativo}">${item.programaEducativo}</option>`
        })
        selectNombreEstudiosRealizados.innerHTML = strings;
    }
}

//EMpiezan las validaciones con respecto al primer componente inicial....
//Primero se tiene que realizar la validacion del componente inicial... es decir, del nivel de estudios....


//aCCIONES PARA COMPOENTE DE FORMACIAON ACADEMICA
//BOTONES PARA COMPONENTE DE FORMACION ACADEMICA
//botones para componente inicial--- guardar, y eliminar....
async function formAcademicaGuardarInicial(element){

    //Aqui se agrega la valicacion de elemento
    await validacionNivelStudio(element);

}

//Se elimina el componente inicial....
function formAcademicaEliminarInicial(element){
    let componenteInicialPadre = element.parentNode.parentNode.parentNode.parentNode
    componenteInicialPadre.remove();
}



/**
 * Agrega los componentes para agregar los documentos a formacion academica
 * @param element
 */
function AgregarNuevoDocumentoFormAcademica(element){

    let contenedorPadre = element.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.children[1];
    let j = Math.floor(Math.random() * 100000);


    //console.log(contenedorPadre)


    if (contenedorPadre.children.length < 2){
        //contenedorPadre.append(componenteDocsFormacionAcademica(j));
        $("#"+contenedorPadre.id).append(componenteDocsFormacionAcademica(j))
        //contenedorPadre.innerHTML += componenteDocsFormacionAcademica(j);
    }else{
        swal({
            title : 'Atención',
            text: 'Solo se permiten máximo 2 documentos por formación.',
            type: 'warning'
        });
    }
}


function AgregarNuevoDocumentoFormAcademicaAfter(element){

    let contenedorPadre = element.parentNode.parentNode.parentNode

    console.log(contenedorPadre)

    /*let contenedorPadre = element.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.children[1];
    let j = Math.floor(Math.random() * 100000);


    //console.log(contenedorPadre)


    if (contenedorPadre.children.length < 2){
        //contenedorPadre.append(componenteDocsFormacionAcademica(j));
        $("#"+contenedorPadre.id).append(componenteDocsFormacionAcademica(j))
        //contenedorPadre.innerHTML += componenteDocsFormacionAcademica(j);
    }else{
        swal({
            title : 'Atención',
            text: 'Solo se permiten máximo 2 documentos por formación.',
            type: 'warning'
        });
    }*/


}
//Terminan acciones de formacion Academica
//TERMINAN ACCIONES PARA COMPOENTE DE FORMACIAON ACADEMICA

async function validacionNivelStudio(element) {
    let contenedorCardPrincipal = element.parentNode.parentNode.parentNode.parentNode;
    let contenedorFormPrincipal = element.parentNode.parentNode.parentNode.parentNode.children[1].children[1].children[0]

    //element.parentNode.parentNode.parentNode.parentNode.children[0].children[0] // contenedor de header children...
    //element.parentNode.parentNode.parentNode.parentNode.children[0].children[1] // contenedor de valores ocultos...
    //element.parentNode.parentNode.parentNode.parentNode.children[0].children[1] // contenedor de cotenendor card-button...

    //Con cada uno de los elemento, sera necesario
    //Hacer un recorrido por el DOM para poder acceder e
    //Ingresar a cada uno de los elementos dentro del DOM
    //No debe de hacerse ningun cambio en el DOM, ya que se podrian
    //Generar errores en cuanto al recorrido previo
    //Antes de hacer un cambio, considerar que todos los elementos


    let itemSelectNivel = contenedorFormPrincipal.children[0].children[0].children[1];
    //console.log(itemSelectNivel);

    let valorSelect = parseInt(itemSelectNivel.options[itemSelectNivel.selectedIndex].value);

    /*console.log(valorSelect)*/

    //Todos los formularios iniciales estan
    //Unidos

    //Primera verificacion...
    if (valorSelect === 0){
        swal({
            title: "Atención",
            text: 'Debe de seleccionar el nivel de estudio.',
            type: "warning",
        })
    }else{

        //Pasa a las demas verificaciones del valor correspondiente del caso 1, 2, 3
        await comprobacionCasos(valorSelect, contenedorFormPrincipal, element , contenedorCardPrincipal);

    }

}


//funcion que recibe el numero para poder realizar las correspondientes casos y tomas de formularios.....
//esn esta parte se tiene que validar y repetir para funcion....
const comprobacionCasos = async (value, contenedorFormPrincipal, element, contenedorCardPrincipal) => {
        let data1 = []; //Caso 1
        let data2 = []; //Caso 2
        let data3 = []; //Caso 3

        //ESTA SECCION YA ESTA LISTA
        if (value<=5 || value === 7){
            /*console.error("Inicial, Incial No escolarizada, Preescolar, Primaria, Secyundaria, Bachillerato...")
            console.log("Primera API...")*/
            let form1 = await casoEscolarizada(contenedorFormPrincipal,contenedorCardPrincipal,  element)
            //await validarFormularioPrincipalFormacion(contenedorCardPrincipal)
            let dataFormsDOcs = await validarDocumentacion(contenedorCardPrincipal)
            console.log(dataFormsDOcs);

            if (dataFormsDOcs || form1){
                swal({
                    title:"Atención",
                    text: "• Por favor, revise los campos correspondientes del formulario,recuerde que el documento debe de ser en formato .pdf y este debe de no sobrepasar el tamaño permitido (1mb)",
                    type: "warning"
                });
                console.log(contenedorCardPrincipal.children[1].children[1].children[0]) // Es todo el formulario...
            }
            else{

                contenedorCardPrincipal.children[0].children[0].hidden = false; // Skeleton Head
                contenedorCardPrincipal.children[0].children[2].hidden = true; // Botones

                contenedorCardPrincipal.children[1].children[0].hidden = false; //Skeleton
                contenedorCardPrincipal.children[1].children[1].hidden= true; // Contenedor Formularios

                let response = await generacionObjetoPrimerCaso(contenedorFormPrincipal); // Agrega formacion de Nivel...

                console.log(response)

                if (response.noError === "0"){

                    let idCurriculumFormacion = response.idCurriculumFormacion;
                    let itemCurriculum = await getFormacionAcademicaActual(idCurriculumFormacion)
                    console.log(itemCurriculum)
                    dataFormacionAcademica.addNewItem(itemCurriculum); // Agregando datos a repositiorio

                    let dataDocs = await generacionObjetoDocumentacion(contenedorCardPrincipal, idCurriculumFormacion);
                    if (dataDocs){

                        let dataDocuments = await getDocumentacioActual(idCurriculumFormacion);

                        //Agregando elementos
                        dataDocuments.forEach((itemDocumentos)=>{
                            dataDocumentosFormaciones.addNewItem(itemDocumentos);
                        })

                        swal({
                            title: "Atención",
                            text: "Campos actualizados correctamente",
                            type: "success",
                        });

                        console.error("Aqui se definen inputs para agregar")
                        console.log(contenedorCardPrincipal)

                        //Se escribe componente para mostrar datos de primer caso

                        let seccionFormaulario = contenedorCardPrincipal.children[1].children[1].children[0].innerHTML = primerCasoComponente(itemCurriculum);


                        //OCultando contenedores....
                        let contenedorSkeleton =  contenedorCardPrincipal.children[0].children[0]; // Skeleton Head
                        let contenedorBttoenes =  contenedorCardPrincipal.children[0].children[2]; // Botones
                        let contenedorSkeleton1 =  contenedorCardPrincipal.children[1].children[0];
                        let contenedorContainer =  contenedorCardPrincipal.children[1].children[1];


                        contenedorSkeleton.hidden = true
                        contenedorBttoenes.hidden = false
                        contenedorSkeleton1.hidden = true
                        contenedorContainer.hidden = false;

                        //Borra los botones de la parete superior
                        //deleteComponenteChildren(contenedorBttoenes); // EN ESTA PARTE NO TENDRIA QUE AGREGARLO.... Es decir, tnedira que eliminar
                        contenedorBttoenes.innerHTML = mostrarOcultarComponente(itemCurriculum);
                        // Y o agregar el correspodneietne items....

                        let contenderItemsDocs = contenedorContainer.children[1];
                        contenderItemsDocs.innerHTML = ""; //Eliminando residuos de dicumentos (Error de efinid)

                        let itemsButtonAgregar = contenedorContainer.children[0].children[2];
                        let documentosRepository = dataDocumentosFormaciones.findItemByIdCurriculum(idCurriculumFormacion)
                        let dataOrigin = ``;
                        documentosRepository.forEach((item)=>{
                            dataOrigin += componenteDocsFormacionAcademicaAfter(item)
                        })
                        $("#"+contenderItemsDocs.id).append(dataOrigin);
                    }

                }else{

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

        if(value === 6){

            let form1 = await casoEscolarizada2(contenedorFormPrincipal);
            let dataFormsDOcs = await validarDocumentacion(contenedorCardPrincipal)

            if (dataFormsDOcs || form1){
            //if (form1){
                swal({
                    title:"Atención",
                    text: "• Por favor, revise los campos correspondientes del formulario,recuerde que el documento debe de ser en formato .pdf y este debe de no sobrepasar el tamaño permitido (1mb)",
                    type: "warning"
                });

            }else {

                contenedorCardPrincipal.children[0].children[0].hidden = false; // Skeleton Head
                contenedorCardPrincipal.children[0].children[2].hidden = true; // Botones

                contenedorCardPrincipal.children[1].children[0].hidden = false; //Skeleton
                contenedorCardPrincipal.children[1].children[1].hidden= true; // Contenedor Formularios

                let response = await generacionObjetoSegundoCaso(contenedorFormPrincipal); // Agrega formacion de Nivel...
                console.log(response);


                if (response.noError === "0"){

                    let idCurriculumFormacion = response.idCurriculumFormacion;
                    let itemCurriculum = await getFormacionAcademicaActual(idCurriculumFormacion)
                    console.log(itemCurriculum)
                    dataFormacionAcademica.addNewItem(itemCurriculum); // Agregando datos a repositiorio

                    let dataDocs = await generacionObjetoDocumentacion(contenedorCardPrincipal, idCurriculumFormacion);
                    if (dataDocs){

                        let dataDocuments = await getDocumentacioActual(idCurriculumFormacion);

                        //Agregando elementos
                        dataDocuments.forEach((itemDocumentos)=>{
                            dataDocumentosFormaciones.addNewItem(itemDocumentos);
                        })

                        swal({
                            title: "Atención",
                            text: "Campos actualizados correctamente",
                            type: "success",
                        });

                        console.error("Aqui se definen inputs para agregar")
                        console.log(contenedorCardPrincipal)

                        //Se escribe componente para mostrar datos de primer caso


                        console.log(itemCurriculum)
                        let seccionFormaulario = contenedorCardPrincipal.children[1].children[1].children[0].innerHTML = segundoCasoComponente(itemCurriculum);


                        //OCultando contenedores....
                        let contenedorSkeleton =  contenedorCardPrincipal.children[0].children[0]; // Skeleton Head
                        let contenedorBttoenes =  contenedorCardPrincipal.children[0].children[2]; // Botones
                        let contenedorSkeleton1 =  contenedorCardPrincipal.children[1].children[0];
                        let contenedorContainer =  contenedorCardPrincipal.children[1].children[1];


                        contenedorSkeleton.hidden = true
                        contenedorBttoenes.hidden = false
                        contenedorSkeleton1.hidden = true
                        contenedorContainer.hidden = false;

                        //Borra los botones de la parete superior
                        //deleteComponenteChildren(contenedorBttoenes); // EN ESTA PARTE NO TENDRIA QUE AGREGARLO.... Es decir, tnedira que eliminar
                        contenedorBttoenes.innerHTML = mostrarOcultarComponente(itemCurriculum);
                        // Y o agregar el correspodneietne items....

                        let contenderItemsDocs = contenedorContainer.children[1];
                        contenderItemsDocs.innerHTML = ""; //Eliminando residuos de dicumentos (Error de efinid)

                        let itemsButtonAgregar = contenedorContainer.children[0].children[2];
                        let documentosRepository = dataDocumentosFormaciones.findItemByIdCurriculum(idCurriculumFormacion)
                        let dataOrigin = ``;
                        documentosRepository.forEach((item)=>{
                            dataOrigin += componenteDocsFormacionAcademicaAfter(item)
                        })
                        $("#"+contenderItemsDocs.id).append(dataOrigin);
                    }

                }else{

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
        //
        if (value === 8){
            /*console.error("Tecnico superior Universitario")
            console.log("Segunda API...")*/

            let form1 = await casoEscolarizada3(contenedorFormPrincipal);
            let dataFormsDOcs = await validarDocumentacion(contenedorCardPrincipal)



            //if (dataFormsDOcs || form1){
            if (form1 || dataFormsDOcs){

                swal({
                    title:"Atención",
                    text: "• Por favor, revise los campos correspondientes del formulario,recuerde que el documento debe de ser en formato .pdf y este debe de no sobrepasar el tamaño permitido (1mb)",
                    type: "warning"
                });


            }else{


                contenedorCardPrincipal.children[0].children[0].hidden = false; // Skeleton Head
                contenedorCardPrincipal.children[0].children[2].hidden = true; // Botones

                contenedorCardPrincipal.children[1].children[0].hidden = false; //Skeleton
                contenedorCardPrincipal.children[1].children[1].hidden= true; // Contenedor Formularios

                let response = await generacionObjetoTercerCaso(contenedorFormPrincipal); // Agrega formacion de Nivel...
                console.log(response);

                if (response.noError === "0"){

                    let idCurriculumFormacion = response.idCurriculumFormacion;
                    let itemCurriculum = await getFormacionAcademicaActual(idCurriculumFormacion)
                    console.log(itemCurriculum)
                    dataFormacionAcademica.addNewItem(itemCurriculum); // Agregando datos a repositiorio

                    let dataDocs = await generacionObjetoDocumentacion(contenedorCardPrincipal, idCurriculumFormacion);
                    if (dataDocs){

                        let dataDocuments = await getDocumentacioActual(idCurriculumFormacion);

                        //Agregando elementos
                        dataDocuments.forEach((itemDocumentos)=>{
                            dataDocumentosFormaciones.addNewItem(itemDocumentos);
                        })

                        swal({
                            title: "Atención",
                            text: "Campos actualizados correctamente",
                            type: "success",
                        });

                        console.error("Aqui se definen inputs para agregar")
                        console.log(contenedorCardPrincipal)

                        //Se escribe componente para mostrar datos de primer caso


                        console.log(itemCurriculum)
                        let seccionFormaulario = contenedorCardPrincipal.children[1].children[1].children[0].innerHTML = tercerCasoComponente(itemCurriculum);


                        //OCultando contenedores....
                        let contenedorSkeleton =  contenedorCardPrincipal.children[0].children[0]; // Skeleton Head
                        let contenedorBttoenes =  contenedorCardPrincipal.children[0].children[2]; // Botones
                        let contenedorSkeleton1 =  contenedorCardPrincipal.children[1].children[0];
                        let contenedorContainer =  contenedorCardPrincipal.children[1].children[1];


                        contenedorSkeleton.hidden = true
                        contenedorBttoenes.hidden = false
                        contenedorSkeleton1.hidden = true
                        contenedorContainer.hidden = false;

                        //Borra los botones de la parete superior
                        //deleteComponenteChildren(contenedorBttoenes); // EN ESTA PARTE NO TENDRIA QUE AGREGARLO.... Es decir, tnedira que eliminar
                        contenedorBttoenes.innerHTML = mostrarOcultarComponente(itemCurriculum);
                        // Y o agregar el correspodneietne items....

                        let contenderItemsDocs = contenedorContainer.children[1];
                        contenderItemsDocs.innerHTML = ""; //Eliminando residuos de dicumentos (Error de efinid)

                        let itemsButtonAgregar = contenedorContainer.children[0].children[2];
                        let documentosRepository = dataDocumentosFormaciones.findItemByIdCurriculum(idCurriculumFormacion)
                        let dataOrigin = ``;
                        documentosRepository.forEach((item)=>{
                            dataOrigin += componenteDocsFormacionAcademicaAfter(item)
                        })
                        $("#"+contenderItemsDocs.id).append(dataOrigin);
                    }

                }else{

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

        if (value>=9){
            /*console.error("Licenciatura, Especialidad, maestria, Doctorado")
            console.log("Tercera APi")*/ // Es complicado pero no imposible... :)

            let form1 = await casoEscolarizada4(contenedorFormPrincipal);
            let dataFormsDOcs = await validarDocumentacion(contenedorCardPrincipal);

            if(form1||dataFormsDOcs){

                swal({
                    title:"Atención",
                    text: "• Por favor, revise los campos correspondientes del formulario,recuerde que el documento debe de ser en formato .pdf y este debe de no sobrepasar el tamaño permitido (1mb)",
                    type: "warning"
                });

            }else{


                contenedorCardPrincipal.children[0].children[0].hidden = false; // Skeleton Head
                contenedorCardPrincipal.children[0].children[2].hidden = true; // Botones

                contenedorCardPrincipal.children[1].children[0].hidden = false; //Skeleton
                contenedorCardPrincipal.children[1].children[1].hidden= true; // Contenedor Formularios

                let response = await generacionObjetoCuartoCaso(contenedorFormPrincipal); // Agrega formacion de Nivel...

                console.log(response);

                if (response.noError === "0"){

                    let idCurriculumFormacion = response.idCurriculumFormacion;
                    let itemCurriculum = await getFormacionAcademicaActual(idCurriculumFormacion)
                    console.log(itemCurriculum)
                    dataFormacionAcademica.addNewItem(itemCurriculum); // Agregando datos a repositiorio

                    let dataDocs = await generacionObjetoDocumentacion(contenedorCardPrincipal, idCurriculumFormacion);
                    if (dataDocs){

                        let dataDocuments = await getDocumentacioActual(idCurriculumFormacion);

                        //Agregando elementos
                        dataDocuments.forEach((itemDocumentos)=>{
                            dataDocumentosFormaciones.addNewItem(itemDocumentos);
                        })

                        swal({
                            title: "Atención",
                            text: "Campos actualizados correctamente",
                            type: "success",
                        });

                        console.error("Aqui se definen inputs para agregar")
                        console.log(contenedorCardPrincipal)

                        //Se escribe componente para mostrar datos de primer caso


                        console.log(itemCurriculum)
                        //Tener en consideracion los documentos.....

                        let seccionFormaulario = contenedorCardPrincipal.children[1].children[1].children[0].innerHTML = cuartoCasoComponente(itemCurriculum);


                        //OCultando contenedores....
                        let contenedorSkeleton =  contenedorCardPrincipal.children[0].children[0]; // Skeleton Head
                        let contenedorBttoenes =  contenedorCardPrincipal.children[0].children[2]; // Botones
                        let contenedorSkeleton1 =  contenedorCardPrincipal.children[1].children[0];
                        let contenedorContainer =  contenedorCardPrincipal.children[1].children[1];


                        contenedorSkeleton.hidden = true
                        contenedorBttoenes.hidden = false
                        contenedorSkeleton1.hidden = true
                        contenedorContainer.hidden = false;

                        //Borra los botones de la parete superior
                        //deleteComponenteChildren(contenedorBttoenes); // EN ESTA PARTE NO TENDRIA QUE AGREGARLO.... Es decir, tnedira que eliminar
                        contenedorBttoenes.innerHTML = mostrarOcultarComponente(itemCurriculum);
                        // Y o agregar el correspodneietne items....

                        let contenderItemsDocs = contenedorContainer.children[1];
                        contenderItemsDocs.innerHTML = ""; //Eliminando residuos de dicumentos (Error de efinid)

                        let itemsButtonAgregar = contenedorContainer.children[0].children[2];
                        let documentosRepository = dataDocumentosFormaciones.findItemByIdCurriculum(idCurriculumFormacion)
                        let dataOrigin = ``;
                        documentosRepository.forEach((item)=>{
                            dataOrigin += componenteDocsFormacionAcademicaAfter(item)
                        })
                        $("#"+contenderItemsDocs.id).append(dataOrigin);
                    }

                }else{

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


const casoEscolarizada = async (contenedorFormPrincipal,contenedorCardPrincipal, element) => {
    let form_data = $('#' + contenedorFormPrincipal.id).serializeJSON();
    let nivelEst = form_data.nivelEstudios;
    let paisFormacion = form_data.PaisEstudio;
    let nombreInst = form_data.nombreInstitucion.trim();

    return nivelEst === undefined || paisFormacion === undefined || nombreInst === '';

}


const casoEscolarizada2 = async (contenedorFormPrincipal) => {

    //console.log(contenedorFormPrincipal);
    let form_data = $('#' + contenedorFormPrincipal.id).serializeJSON();


    let nivelEst = form_data.nivelEstudios;
    let paisFormacion = form_data.PaisEstudio;
    let nombreInst = form_data.nombreInstitucion.trim();

    //esta seccion es aparte, ua wqure se genera Nombre de estudios...


    if (form_data.chkEstudios === undefined){
        //console.log(form_data)
        let nombreEstudiosRealizadosSelector = form_data.nombreEstudiosRealizadosID;
        console.log(nivelEst === undefined || paisFormacion === undefined || nombreInst === '' || nombreEstudiosRealizadosSelector === undefined)
        return  nivelEst === undefined || paisFormacion === undefined || nombreInst === '' || nombreEstudiosRealizadosSelector === undefined;
    }else{

        //console.log(form_data)
        let nombreEstudiosRealizadosInput = form_data.nombreEstudiosRealizados.trim();
        console.log(nivelEst === undefined || paisFormacion === undefined || nombreInst === '' || nombreEstudiosRealizadosInput === '')
        return nivelEst === undefined || paisFormacion === undefined || nombreInst === '' || nombreEstudiosRealizadosInput === '';
    }

}


const casoEscolarizada4 = async (contenedorFormPrincipal) => {

    //console.log(contenedorFormPrincipal);
    let form_data = $('#' + contenedorFormPrincipal.id).serializeJSON();
    let nivelEst = form_data.nivelEstudios;
    let paisFormacion = form_data.PaisEstudio;
    let arrayErrors = [];

    //console.log(form_data);
    //Primera validacion
    let data1 = nivelEst === undefined || paisFormacion === undefined

    arrayErrors.push(data1) // Insertando error....
//    console.log(data1) // Esto por la formacion academica....

    let data000;
    if (paisFormacion === '1'){

        data000 = form_data.entidadFederativa === undefined;
    }else{
        data000 = false;
    }

    arrayErrors.push(data000)


    //Institucion
    let data2Institucion;
    if (form_data.chkInstitucion === undefined){
        let selectFormInstitucion = form_data.institucionNombreId;
        data2Institucion = selectFormInstitucion === undefined;
    }
    else{

        let inputInstitucion = form_data.nombreInstitucion;
        data2Institucion = inputInstitucion === '';
    }

    arrayErrors.push(data2Institucion) // Insertando error....

    //Nombre de estudios....
    let data3NombreEstudios;
    if (form_data.chkEstudios === undefined){

        let selectnombreEstudiosRealizadosID = form_data.nombreEstudiosRealizadosID;
        data3NombreEstudios = selectnombreEstudiosRealizadosID === undefined;
    }
    else{
        let inputnombreEstudiosRealizados = form_data.nombreEstudiosRealizados;
        data3NombreEstudios = inputnombreEstudiosRealizados === '';
    }

    arrayErrors.push(data3NombreEstudios) // Insertando error....
    //console.log(arrayErrors.includes(true))

    //Aqui tiene que ir area de conocimicent
    let data4 = form_data.areaConocimiento === undefined

    arrayErrors.push(data4)

    return arrayErrors.includes(true);
}


const casoEscolarizada3 = async (contenedorFormPrincipal) => {

    //console.log(contenedorFormPrincipal);
    let form_data = $('#' + contenedorFormPrincipal.id).serializeJSON();
    let nivelEst = form_data.nivelEstudios;
    let paisFormacion = form_data.PaisEstudio;
    let arrayErrors = [];

    //console.log(form_data);
    //Primera validacion
    let data1 = nivelEst === undefined || paisFormacion === undefined

    arrayErrors.push(data1) // Insertando error....

    let data2Institucion;
    if (form_data.chkInstitucion === undefined){
        let selectFormInstitucion = form_data.institucionNombreId;
        data2Institucion = selectFormInstitucion === undefined;
    }
    else{

        let inputInstitucion = form_data.nombreInstitucion;
        data2Institucion = inputInstitucion === '';
    }

    arrayErrors.push(data2Institucion) // Insertando error....

    let data3NombreEstudios;
    if (form_data.chkEstudios === undefined){

        let selectnombreEstudiosRealizadosID = form_data.nombreEstudiosRealizadosID;
        data3NombreEstudios = selectnombreEstudiosRealizadosID === undefined;
    }
    else{
        let inputnombreEstudiosRealizados = form_data.nombreEstudiosRealizados;
        data3NombreEstudios = inputnombreEstudiosRealizados === '';
    }

    arrayErrors.push(data3NombreEstudios) // Insertando error....

    //console.log(arrayErrors.includes(true))

    return arrayErrors.includes(true);

}

const validarDocumentacion = async (contenedorCardPrincipal) => {

    let contenedorDocumentos = contenedorCardPrincipal.children[1].children[1].children[1]
    console.log(contenedorDocumentos)


    //Comprobar longitud de componente....

    if (contenedorDocumentos.children.length === 0){
        console.log("Debe de haber documentos...")
        return true;
    }else{

        console.log("Si hay varios documentos...")

        let documentos = contenedorDocumentos.querySelectorAll('form')

        let data = [...documentos];

        let verificadorFormulario1 = []; // es donde se aguarda la info

        data.forEach((item)=>{
            verificador = [];

            let itemInputFile = item.children[0].children[1].children[0].children[1].children[1].children[0];

            let form_data = $('#' + item.id).serializeJSON();
            let dataForm = comprobacionInputsFormularios(form_data);
            let dataFormDocus = validacionComprobacionDocumentos(itemInputFile);
            verificadorFormulario1.push(dataForm);
            verificadorFormulario1.push(dataFormDocus);
            console.log(verificadorFormulario1)
        })


        return verificadorFormulario1.includes(true);

    }

}


//Comporbacion de documentos de formuuñario... es decir el select
const comprobacionInputsFormularios = (item) =>{
    return item.documentoObtenido === undefined;

}


const validacionComprobacionDocumentos = (item) => {

    let tamanioArchivo = fileSizeValidation(item);
    let fileType = processFilePDF(item);

    return tamanioArchivo || fileType;
}


//Primera generacion del objeto caso 1
const generacionObjetoPrimerCaso  = async (contenedorFormPrincipal) => {

    let form_data = $('#' + contenedorFormPrincipal.id).serializeJSON();
    let nivelEst = form_data.nivelEstudios;
    let paisFormacion = form_data.PaisEstudio;
    let nombreInst = form_data.nombreInstitucion.trim();

    let selectNivelEstudios = contenedorFormPrincipal.children[0].children[0].children[1];
    let textSelectNivelEstudiios = selectNivelEstudios.options[selectNivelEstudios.selectedIndex].text;

    let array = [];
    let object = {

         idNivelEducativo: nivelEst
        ,idPais: paisFormacion
       // ,idInstitucion: "0"
        ,institucion: nombreInst
        //,idProgramaEducativo: "0"
        ,estudio: textSelectNivelEstudiios // En este caso es necesario copiar el texto del nivel educativo


    };

    array.push(object); // Agregado objeto para anevia

    let data = JSON.stringify(array);

    //hacer referencia a nuevo Doc, es decir, se tiene que enviar el idpara referencia de documento....
    let info = await getDataFromServerHidden('setPogramaEducativoCaso1', 'POST', data);

    return info;
}

const generacionObjetoSegundoCaso  = async (contenedorFormPrincipal) => {

    let form_data = $('#' + contenedorFormPrincipal.id).serializeJSON();


    let nivelEst = form_data.nivelEstudios;
    let paisFormacion = form_data.PaisEstudio;
    let nombreInst = form_data.nombreInstitucion.trim();

    let select
    if (form_data.chkEstudios === undefined){

        let nombreEstudiosRealizadosSelector = form_data.nombreEstudiosRealizadosID;

        let selectNombreProgramaEducatuvo = contenedorFormPrincipal.children[3].children[0].children[0].children[1].children[0].children[1]
        let textSelect = selectNombreProgramaEducatuvo.options[selectNombreProgramaEducatuvo.selectedIndex].text;

        let array1 = [];
        let object1 ={

             idNivelEducativo: nivelEst
            ,idPais: paisFormacion

            ,idInstitucion: "0"
            ,institucion: nombreInst

            ,idProgramaEducativo: nombreEstudiosRealizadosSelector
            ,estudio: textSelect // En este caso es necesario copiar el texto del nivel educativo
        };

        array1.push(object1); // Agregado objeto para anevia

        let data = JSON.stringify(array1);

        let info1 = await getDataFromServerHidden('setPogramaEducativoCaso2', 'POST', data);
        return info1;

    }else{

        let nombreEstudiosRealizadosInput = form_data.nombreEstudiosRealizados.trim();

        let array2 = [];
        let object2 ={

            idNivelEducativo: nivelEst
            ,idPais: paisFormacion

            ,idInstitucion: "0"
            ,institucion: nombreInst

            ,idProgramaEducativo: "0"
            ,estudio: nombreEstudiosRealizadosInput // En este caso es necesario copiar el texto del nivel educativo
        };

        array2.push(object2); // Agregado objeto para anevia

        let data = JSON.stringify(array2);

        let info2 = await getDataFromServerHidden('setPogramaEducativoCaso2', 'POST', data);
        return info2;
    }

}


const generacionObjetoTercerCaso  = async (contenedorFormPrincipal) => {

    let form_data = $('#' + contenedorFormPrincipal.id).serializeJSON();

    let nivelEst = form_data.nivelEstudios;
    let paisFormacion = form_data.PaisEstudio;

    let array2 = [];
    let object1 ={

        idNivelEducativo: nivelEst
        ,idPais: paisFormacion

        ,idInstitucion: ""
        ,institucion: ""

        ,idProgramaEducativo: ""
        ,estudio: ""
    };

    if (form_data.chkInstitucion === undefined){
        let selectFormInstitucion = form_data.institucionNombreId;

        let selectTextinstitucionText = contenedorFormPrincipal.children[2].children[0].children[0].children[1].children[0].children[1]
        let textSelectInstitucion = selectTextinstitucionText.options[selectTextinstitucionText.selectedIndex].text;

        object1.idInstitucion = selectFormInstitucion;
        object1.institucion = textSelectInstitucion
    }
    else{

        let inputInstitucion = form_data.nombreInstitucion;
        object1.idInstitucion = '0';
        object1.institucion = inputInstitucion
    }


    //SegundaCOndicion....
    if (form_data.chkEstudios === undefined){

        let selectnombreEstudiosRealizadosID = form_data.nombreEstudiosRealizadosID;

        let estudiosRealizadosSelect = contenedorFormPrincipal.children[3].children[0].children[0].children[1].children[0].children[1]
        let textSelecEstudiosRealizados = estudiosRealizadosSelect.options[estudiosRealizadosSelect.selectedIndex].text;

        object1.idProgramaEducativo = selectnombreEstudiosRealizadosID
        object1.estudio = textSelecEstudiosRealizados;

    }
    else{
        let inputnombreEstudiosRealizados = form_data.nombreEstudiosRealizados;
        object1.idProgramaEducativo = "0"
        object1.estudio = inputnombreEstudiosRealizados;
    }


    array2.push(object1); // Agregado objeto para anevia
    let data = JSON.stringify(array2);

    return await getDataFromServerHidden('setPogramaEducativoCaso2', 'POST', data);

}



const generacionObjetoCuartoCaso  = async (contenedorFormPrincipal) => {

    let form_data = $('#' + contenedorFormPrincipal.id).serializeJSON();

    let nivelEst = form_data.nivelEstudios;
    let paisFormacion = form_data.PaisEstudio;

    let array2 = [];
    let object1 ={

        idNivelEducativo: nivelEst
        ,idPais: paisFormacion

        ,idInstitucion: ""
        ,institucion: ""

        ,idProgramaEducativo: ""
        ,estudio: ""
        ,areaConocimiento: ""
    };

    if (form_data.chkInstitucion === undefined){
        let selectFormInstitucion = form_data.institucionNombreId;

        let selectTextinstitucionText = contenedorFormPrincipal.children[2].children[0].children[0].children[1].children[0].children[1]
        let textSelectInstitucion = selectTextinstitucionText.options[selectTextinstitucionText.selectedIndex].text;

        object1.idInstitucion = selectFormInstitucion;
        object1.institucion = textSelectInstitucion
    }
    else{

        let inputInstitucion = form_data.nombreInstitucion;
        object1.idInstitucion = '0';
        object1.institucion = inputInstitucion
    }


    //SegundaCOndicion....
    if (form_data.chkEstudios === undefined){

        let selectnombreEstudiosRealizadosID = form_data.nombreEstudiosRealizadosID;

        let estudiosRealizadosSelect = contenedorFormPrincipal.children[3].children[0].children[0].children[1].children[0].children[1]
        let textSelecEstudiosRealizados = estudiosRealizadosSelect.options[estudiosRealizadosSelect.selectedIndex].text;

        object1.idProgramaEducativo = selectnombreEstudiosRealizadosID
        object1.estudio = textSelecEstudiosRealizados;

    }
    else{
        let inputnombreEstudiosRealizados = form_data.nombreEstudiosRealizados;
        object1.idProgramaEducativo = "0"
        object1.estudio = inputnombreEstudiosRealizados;
    }


    object1.areaConocimiento = form_data.areaConocimiento;


    //console.table(object1)


    array2.push(object1); // Agregado objeto para anevia
    let data = JSON.stringify(array2);

    return await getDataFromServerHidden('setPogramaEducativoCASO3', 'POST', data);
}


const generacionObjetoDocumentacion  = async (contenedorCardPrincipal, idCurriculumFormacion) =>{


    let contenedorDocumentos = contenedorCardPrincipal.children[1].children[1].children[1]
    console.log(contenedorDocumentos)

    let counter = 0;

    //Comprobar longitud de componente....

    if (contenedorDocumentos.children.length === 0){
        console.log("Debe de haber documentos...")
        return true;
    }else{

        console.log("Si hay varios documentos...")

        let documentos = contenedorDocumentos.querySelectorAll('form')

        let data = [...documentos];


        for (const item of data) {


            let itemInputFile = item.children[0].children[1].children[0].children[1].children[1].children[0];
            let form_data = $('#' + item.id).serializeJSON();

            let docObtenido = form_data.documentoObtenido;

            let dataReques =  await sendFilePDF(itemInputFile,docObtenido,idCurriculumFormacion)

            counter+= parseInt(dataReques.ResultFile);
        }

        return true;

    }

}

/**
 *
 * @param formacion dentro de cada formcaion existe un idTipoFormacion... decidir por criterio cual es el mejore
 */
const showCasosdeUso = (formacion) => {
    //return formacion.idNivelEducativo;

    /*if (formacion.idNivelEducativo === 8){
        return tercerCasoComponente(formacion)
    }

    /!*!/!*if (value<=5 || value === 7){
        return primerCasoComponente(formacion);
    }*!/

    if (value === 6){
        return segundoCasoComponente(formacion);
    }
    if (value === 8){
        return tercerCasoComponente(formacion)
    }
    /!*if (value>=9){
        return cuartoCasoComponente(formacion)
    }*!/!*!/*/

    let nivel = parseInt(formacion.idNivelEducativo);


    if (nivel<=5 || nivel === 7){
        return primerCasoComponente(formacion);
    }

    //tecnico medio
    if (nivel === 6){
        return segundoCasoComponente(formacion)

    }

    //tecnico superior universitario
    if (nivel === 8){

        return tercerCasoComponente(formacion)

    }

    //Licenciatura
    if (nivel >=9){

        return cuartoCasoComponente(formacion)
    }

}


//Contedeor que devuelve la data de este formaulario
const primerCasoComponente = (item)=>{
    //recordar de volver pais
    //
    // language=HTML

    let pais = dataNacion.searchById(item.idPais);
    let j = Math.floor(Math.random() * 100000);

    let idCurriculumFormacion = String(item.idCurriculumFormacion);

    let data = `<div>
                    <div class="form-row text-center">
                        <div class="form-group col-md-4">
                            <h6>Nivel de estudios:</h6>
                            <p>${item.estudio}</p>
                        </div>
                        <div class="form-group col-md-4">
                            <h6>País:</h6>
                            <p>${pais}</p>
                        </div>
                        <div class="form-group col-md-4">
                            <h6>Nombre de institución:</h6>
                            <p>${item.institucion}</p>
                        </div>
                    </div>


                </div>
        <hr>
    `;



    return data;

}


const segundoCasoComponente = (item)=>{
    //recordar de volver pais
    //
    // language=HTML

    let pais = dataNacion.searchById(item.idPais);
    let j = Math.floor(Math.random() * 100000);

    let idCurriculumFormacion = String(item.idCurriculumFormacion);

    let data = `<div>
                    <div class="form-row text-center">
                        <div class="form-group col-md-4">
                            <h6>Nivel de estudios:</h6>
                            <p>${item.nivelEducativo}</p>
                        </div>
                        <div class="form-group col-md-4">
                            <h6>País:</h6>
                            <p>${pais}</p>
                        </div>
                        <div class="form-group col-md-4">
                            <h6>Nombre de institución:</h6>
                            <p>${item.institucion}</p>
                        </div>
                    </div>

                    <div class="form-row text-center">

                        <div class="form-group col-md-4">
                            <h6>Nombre de estudios realizados:</h6>
                            <p>${item.estudio}</p>
                        </div>

                    </div>



                </div>
        <hr>
    `;



    return data;

}



const tercerCasoComponente = (item)=>{
    //recordar de volver pais
    //
    // language=HTML

    let pais = dataNacion.searchById(item.idPais);
    let j = Math.floor(Math.random() * 100000);

    let idCurriculumFormacion = String(item.idCurriculumFormacion);

    let data = `<div>
                    <div class="form-row text-center">
                        <div class="form-group col-md-4">
                            <h6>Nivel de estudios:</h6>
                            <p>${item.nivelEducativo}</p>
                        </div>
                        <div class="form-group col-md-4">
                            <h6>País:</h6>
                            <p>${pais}</p>
                        </div>
                        <div class="form-group col-md-4">
                            <h6>Nombre de institución:</h6>
                            <p>${item.institucion}</p>
                        </div>
                    </div>

                    <div class="form-row text-center">

                        <div class="form-group col-md-4">
                            <h6>Nombre de estudios realizados:</h6>
                            <p>${item.estudio}</p>
                        </div>

                    </div>



                </div>
        <hr>
    `;



    return data;

}


const cuartoCasoComponente = (item)=>{
    //recordar de volver pais
    //
    // language=HTML

    let pais = dataNacion.searchById(item.idPais);
    let j = Math.floor(Math.random() * 100000);

    let idCurriculumFormacion = String(item.idCurriculumFormacion);

    let data = `<div>
                    <div class="form-row text-center">
                        <div class="form-group col-md-4">
                            <h6>Nivel de estudios:</h6>
                            <p>${item.nivelEducativo}</p>
                        </div>
                        <div class="form-group col-md-4">
                            <h6>País:</h6>
                            <p>${pais}</p>
                        </div>
                        <div class="form-group col-md-4">
                            <h6>Nombre de institución:</h6>
                            <p>${item.institucion}</p>
                        </div>
                    </div>

                    <div class="form-row text-center">

                        <div class="form-group col-md-4">
                            <h6>Nombre de estudios realizados:</h6>
                            <p>${item.estudio}</p>
                        </div>

                        <div class="form-group col-md-4">
                            <h6>Área de conocimiento:</h6>
                            <p>${item.areaConocimiento}</p>
                        </div>
                    </div>

                </div>
        <hr>
    `;



    return data;

}



const getFormacionAcademicaActual =async (item) =>{
    let dataa = await getDataFromServerHidden(`getFormacionAcademicaIndividual/${item}`,'POST')
    return dataa[0];
}


const getDocumentacioActual = async (item) => {
    let dataa = await getDataFromServerHidden(`getFormacionDocumentoIndividual/${item}`, 'POST');
    /*
        dataa.forEach((item)=>{
            console.log(item)
        })*/
    return dataa;

}

const getDocumentacioActual2 = async (item) => {
    let dataa = await getDataFromServerHidden(`getFormacionDocumentoIndividual2/${item}`, 'POST');
    /*
        dataa.forEach((item)=>{
            console.log(item)
        })*/
    return dataa;
}


const botonesEdicionDOCSDespues = () =>{
    let j = Math.floor(Math.random() * 100000);
    let data = `<div>
                    <button type="button" class="btn btn-outline-secondary btn-sm btns-components-action" id="btn-doc-delete${j}" onclick="editarFormularioDocumentoActual(this)"><i class="fas fa-edit"></i> Editar</button>
                </div>`
    return data;
}

const botonesGuardarCancelarDOCS = () =>{
    let j = Math.floor(Math.random() * 100000);
    let data = `<div>
                    <button type="button" class="btn btn-outline-secondary btn-sm btns-components-action" id="btn-doc-delete${j}" onclick="guardarEdicionActual(this)"><i class="fas fa-edit"></i> Guardar</button>
                    <button type="button" class="btn btn-outline-secondary btn-sm btns-components-action" id="btn-doc-delete${j}" onclick="cancelarEdicionActual(this)"><i class="fas fa-edit"></i> Cancelar</button>
                </div>`
    return data;
}


//Cotendeor para formuñario
const componenteDocsFormacionAcademicaAfter = (item) => {

    let j = Math.floor(Math.random() * 100000);

    return `
    <div class="card card-formacion-academica" id="card-formacion-academica${j}">

        <div class="card-header">
            <div class="card-buttons">

            </div>

            <div class="card-itemsFormacion" hidden>
                <input type="text" name="idCurriculumFormacion" id="idCurriculumFormacion" disabled hidden value="${item.idCurriculumFormacion}">
                <input type="text" name="idDocumento" id="idDocumento" disabled hidden value="${item.idDocumento}">
            </div>
        </div>

        <div class="card-body" id="cardBody-Animation${j}">
            <div id="form-setINfo${j}">

            </div>

            <div id="after-showInfo${j}">
                ${showInfoafterEdicion(item)}
            </div>
        </div>
    </div>`;

}

//Funcion para agregar nuevos compoenntes cuando ya exista una formacion y esta pase a estar en edicion....

const agregarFormularioExistente = async (element, idCurriculumFormacion) => {

    let idCurri = String(idCurriculumFormacion)




    console.log(element.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode) // se accde a compoennte para alojar forms de documentos
    let componentePadreDOcs = element.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.children[1];

    if (componentePadreDOcs.children.length<2){
        $("#"+componentePadreDOcs.id).append(componenteFormularioDocumentos(idCurri))

    }else{
        swal({
            title : 'Atención',
            text: 'Solo se permiten máximo 2 documentos por formación.',
            type: 'warning'
        });
    }
}


//componente formulario invidivual
const componenteFormularioDocumentos = (idCurri) => {

    let j = Math.floor(Math.random() * 100000);

    return `
    <div class="card card-formacion-academica" id="card-formacion-academica${j}">

        <div class="card-header">
            <div class="card-buttons">
                <div>
                    <button type="button" class="btn btn-outline-secondary btn-sm btns-components-action" id="btn-doc-delete${j}" onclick="guardarEdicionActualNuevo(this)"><i class="fas fa-edit"></i> Guardar</button>
                    <button type="button" class="btn btn-outline-secondary btn-sm btns-components-action" id="btn-doc-delete${j}" onclick="formAcademicaEliminarInicial(this)"><i class="fas fa-times-circle"></i> Eliminar</button>
                </div>
            </div>

            <div class="card-itemsFormacion">
                <input type="text" name="idCurriculumFormacion" id="idCurriculumFormacion" disabled hidden value=${idCurri}>
                <input type="text" name="idDocumento" id="idDocumento" disabled hidden value="">
            </div>
        </div>

        <div class="card-body">
            <div id="form-setINfo${j}">
                ${formularioInicialDocumentos()}
            </div>

            <div id="after-showInfo${j}">

            </div>
        </div>
    </div>`;
}



const formularioInicialDocumentos = () => {
    let j = Math.floor(Math.random() * 100000);
    return `<form name="formacion-Documento${j}" id="formacion-Documento${j}" enctype="multipart/form-data">
                <div class="form-row">
                    <div class="form-group col-md-6">
                        <h6>Documento obtenido: </h6>
                        <select class="browser-default custom-select" name="documentoObtenido" id="documentoObtenido">
                            <option selected disabled>Seleccione una opción</option>
                            <option value="4">Cédula profesional</option>
                            <option value="5">Certificado de Estudios</option>
                            <option value="8">Constancia de estudios</option>
                            <option value="19">Título/Grado/Diploma</option>
                        </select>
                    </div>

                    <div class="form-group col-md-6">
                        <div id="documentB1">
                            <h6>Adjuntar archivo: </h6>
                            <div class="input-group">
                                <div class="input-group-prepend">
                                    <span class="input-group-text" id="inputFileAgregarFormAcademica${j}" name="inputFileAgregarFormAcademica${j}"><i class="fa fa-file-pdf"></i></span>
                                </div>
                                <div class="custom-file">
                                    <input type="file" class="custom-file-input" id="inputFileFormAcademica${j}" name="inputFileFormAcademica1${j}" aria-describedby="inputGroupFileAddon01${j}" lang="es" accept=".pdf">
                                    <label class="custom-file-label" for="inputFileFormAcademica${j}" id="nombreArchivoFormAcademica${j}" name="nombreArchivoFormAcademica${j}">Buscar documento</label>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </form>`;
}



//Se muestra informacion de edicion de formulario
const showInfoafterEdicion = (item)=>{

    let objROUTES = ROUTES_OBJ.getITEMSROUTE();
    return `<div class="form-row text-center">
                        <div class="form-group col-md-6">
                            <h6>Documento obtenido: </h6>
                            <p>${item.tipoDocumento}</p>
                        </div>
                        <div class="form-group col-md-6">
                            <h6>Nombre de Documento</h6>
                            <a target="_blank" href="${objROUTES.itemRouteDocFormacionGral}/${item.idDocumento}">${item.archivo}</a>
                        </div>
                </div>`;
}



const editarFormularioDocumentoActual= (element) => {

    let componentePadre = element.parentNode.parentNode

    //En esta parte tener que mostrar formulario inicial

    console.log(element.parentNode.parentNode.parentNode.parentNode.children[0].children[1].children[0].value) // valor de idCurriculumFormacion
    console.log(element.parentNode.parentNode.parentNode.parentNode.children[0].children[1].children[1].value) // valor de idDocumento

    console.log(element.parentNode.parentNode.parentNode.parentNode.children[1].children[0]) // Componente formulario set info
    console.log(element.parentNode.parentNode.parentNode.parentNode.children[1].children[1]) // Componente mostrarInfo XD


    element.parentNode.parentNode.parentNode.parentNode.children[1].children[0].innerHTML = formularioInicialDocumentos()
    element.parentNode.parentNode.parentNode.parentNode.children[1].children[1].innerHTML = "";


    componentePadre.innerHTML = botonesGuardarCancelarDOCS();



}


const guardarEdicionActual = async (element) => {

    let componentePadre = element.parentNode.parentNode
    //En esta parte hay que accder al dom para poder eliminar formaulario...
    //Y agregar el componente principal
    //buscar

    console.log(element.parentNode.parentNode.parentNode.parentNode.children[0].children[1].children[0].value) // valor de idCurriculumFormacion
    console.log(element.parentNode.parentNode.parentNode.parentNode.children[0].children[1].children[1].value) // valor de idDocumento
    console.log(element.parentNode.parentNode.parentNode.parentNode.children[1].children[0]) // Componente formulario
    console.log(element.parentNode.parentNode.parentNode.parentNode.children[1].children[1]) // Componente mostrarInfo XD


    let idCuriculumFOrmacionValue = element.parentNode.parentNode.parentNode.parentNode.children[0].children[1].children[0].value;
    let idDocumentoValue = element.parentNode.parentNode.parentNode.parentNode.children[0].children[1].children[1].value;

    //componentePadre.innerHTML = botonesEdicionDOCSDespues();
    //realizar las correspondientes validaciones.... es decir se tiene que hacer individual para cada elemento....


    //console.log() // Elemento formulario....

    let formularyComponents =element.parentNode.parentNode.parentNode.parentNode.children[1].children[0].children[0];

    let validacionFormulario = await validacionFormularioIndividual(formularyComponents);

    //console.log(validacionFormulario);
    if (validacionFormulario){
        swal({
            title:"Atención",
            text: "• Por favor, revise los campos correspondientes del formulario,recuerde que el documento debe de ser en formato .pdf y este debe de no sobrepasar el tamaño permitido (1mb)",
            type: "warning"
        });
    }else{
        console.log("Inserta datos");
        let itemInputFile = formularyComponents.children[0].children[1].children[0].children[1].children[1].children[0];
        let form_data = $('#' + formularyComponents.id).serializeJSON();
        let docAnterior = dataDocumentosFormaciones.findItemByIdDocument(idDocumentoValue)

        let idTipoDocumento = form_data.documentoObtenido;
        let idTipoDocAnterior = docAnterior.idTipoDocumento

        let formData = new FormData();
        formData.append('file',itemInputFile.files[0]);
        formData.append('inputname',itemInputFile.value);
        formData.append('idCurriculumFormacion',idCuriculumFOrmacionValue)
        formData.append('idDocumento',idDocumentoValue)
        formData.append('idTipoDocumento',idTipoDocumento)
        formData.append('idTipoDocumentoAnterior',idTipoDocAnterior);

        let dataFREE = await sendFilePDFFREE(formData,'updateDocumentacion');

        //console.log(dataFREE);

        console.warn("en esta parte tener que revisar")


        // en esta parte, tener que eliminar el registro por idDocumento y agregar uno nuevo...
        let dataDocuments = await getDocumentacioActual2(idDocumentoValue);
        let itemDocumento = dataDocuments[0];

        dataDocumentosFormaciones.replaceItemByIdDocument(idDocumentoValue,itemDocumento)


        //Tendria que agregar skeleton... pero me da flojeraa...
        //asi que mejor solo hago el cambio indidivual...
        //seria agregar botones....

        let setInfo = element.parentNode.parentNode.parentNode.parentNode.children[1].children[0];
        let setForm = element.parentNode.parentNode.parentNode.parentNode.children[1].children[1];


        setForm.innerHTML = ""

        let item = dataDocumentosFormaciones.findItemByIdDocument(idDocumentoValue);
        setInfo.innerHTML = showInfoafterEdicion(item)

        componentePadre.innerHTML = botonesEdicionDOCSDespues();

    }
}


const guardarEdicionActualNuevo = async (element) => {


    let componentePadre = element.parentNode.parentNode
    //En esta parte hay que accder al dom para poder eliminar formaulario...
    //Y agregar el componente principal
    //buscar

    console.log(element.parentNode.parentNode.parentNode.parentNode.children[0].children[1].children[0].value) // valor de idCurriculumFormacion
    //console.log(element.parentNode.parentNode.parentNode.parentNode.children[0].children[1].children[1].value) // valor de idDocumento
    console.log(element.parentNode.parentNode.parentNode.parentNode.children[1].children[0]) // Componente formulario
    console.log(element.parentNode.parentNode.parentNode.parentNode.children[1].children[1]) // Componente mostrarInfo XD


    let idCuriculumFOrmacionValue = element.parentNode.parentNode.parentNode.parentNode.children[0].children[1].children[0].value;


    let formularyComponents =element.parentNode.parentNode.parentNode.parentNode.children[1].children[0].children[0];

    let validacionFormulario = await validacionFormularioIndividual(formularyComponents);

    //console.log(validacionFormulario);
    if (validacionFormulario){
        swal({
            title:"Atención",
            text: "• Por favor, revise los campos correspondientes del formulario,recuerde que el documento debe de ser en formato .pdf y este debe de no sobrepasar el tamaño permitido (1mb)",
            type: "warning"
        });
    }else{
        console.log("Inserta datos NUEVOS");
        let itemInputFile = formularyComponents.children[0].children[1].children[0].children[1].children[1].children[0];
        let form_data = $('#' + formularyComponents.id).serializeJSON();
        //let docAnterior = dataDocumentosFormaciones.findItemByIdDocument(idDocumentoValue)

        let idTipoDocumento = form_data.documentoObtenido;


        let formData = new FormData();
        formData.append('file',itemInputFile.files[0]);
        formData.append('inputname',itemInputFile.value);
        formData.append('idCurriculumFormacion',idCuriculumFOrmacionValue)
        //formData.append('idDocumento',idDocumentoValue)
        formData.append('idTipoDocumento',idTipoDocumento)
        //formData.append('idTipoDocumentoAnterior',idTipoDocAnterior);


        let dataFREE = await sendFilePDFFREE(formData,'updateDocumentacionIndividual'); // SOlo uno, debe de devolver1

        console.log(dataFREE);

        //Definir en contenedor idDocumento El archivo valor...
        let idDocumento =  element.parentNode.parentNode.parentNode.parentNode.children[0].children[1].children[1]
        idDocumento.value = dataFREE.idDocumento;


        let dataDocuments = await getDocumentacioActual2(dataFREE.idDocumento);
        let itemDocumento = dataDocuments[0];

        dataDocumentosFormaciones.addNewItem(itemDocumento);


        //Tener en cuenta de que se tiene que generar el correspondiente skeleleton en la carga de coumentos para su correscta visualizacion

        let setInfo = element.parentNode.parentNode.parentNode.parentNode.children[1].children[0];
        let setForm = element.parentNode.parentNode.parentNode.parentNode.children[1].children[1];

        setForm.innerHTML = ""
        let item = dataDocumentosFormaciones.findItemByIdDocument(dataFREE.idDocumento);
        setInfo.innerHTML = showInfoafterEdicion(item)
        componentePadre.innerHTML = botonesEdicionDOCSDespues();

    }
}






const validacionFormularioIndividual = async (element) => {
    console.log(element)

    let itemInputFile = element.children[0].children[1].children[0].children[1].children[1].children[0];
    console.log(itemInputFile)
    let form_data = $('#' + element.id).serializeJSON();

    let verificadorFormulario1 = [];
    let dataForm = comprobacionInputsFormularios(form_data);
    let dataFormDocus = validacionComprobacionDocumentos(itemInputFile);

    verificadorFormulario1.push(dataForm);
    verificadorFormulario1.push(dataFormDocus);

    return verificadorFormulario1.includes(true);



}


const cancelarEdicionActual = (element) =>{

    let componentePadre = element.parentNode.parentNode
    //En esta parte hay que accder al dom para poder eliminar formaulario...
    //Y agregar el componente principal
    //buscar

    let valoriDCurriculumFormacion =element.parentNode.parentNode.parentNode.parentNode.children[0].children[1].children[0].value;
    let valoridDocument =element.parentNode.parentNode.parentNode.parentNode.children[0].children[1].children[1].value;
    //console.log(element.parentNode.parentNode.parentNode.parentNode.children[0].children[1].children[0].value) // valor de idCurriculumFormacion
    //console.log(element.parentNode.parentNode.parentNode.parentNode.children[0].children[1].children[1].value) // valor de idDocumento
    console.log(element.parentNode.parentNode.parentNode.parentNode.children[1].children[0]) // Componente formulario
    console.log(element.parentNode.parentNode.parentNode.parentNode.children[1].children[1]) // Componente mostrarInfo XD


    element.parentNode.parentNode.parentNode.parentNode.children[1].children[0].innerHTML = ""

    //aqui buscar elemento formulario para agregarlo... de busca desde componente....

    let item = dataDocumentosFormaciones.findItemByIdDocument(valoridDocument);
    element.parentNode.parentNode.parentNode.parentNode.children[1].children[1].innerHTML = showInfoafterEdicion(item)

    componentePadre.innerHTML = botonesEdicionDOCSDespues();

}


const mostrarOcultarComponente = (item)=>{
    let j = Math.floor(Math.random() * 100000);
    let data = `<div id="ocultarMostrar${j}" class="ocultarMostrarTitle">
                    <h6><i class="fas fa-university"></i><strong> Nivel de estudios: </strong>${item.nivelEducativo}</h6>
                    <button type="button" class="btn btn-outline-secondary btn-sm btns-components-action" id="btn-doc-delete${j}" onclick="ocultarComponentesCardBody(this)"><i class="fas fa-eye-slash"></i> Ocultar</button>
                </div>`
    return data;
}


const mostrarOcultarComponenteInicial = (item)=>{
    let j = Math.floor(Math.random() * 100000);
    let data = `<div id="ocultarMostrar${j}" class="ocultarMostrarTitle">
                    <h6><i class="fas fa-university"></i><strong> Nivel de estudios: </strong>${item.nivelEducativo}</h6>
                    <button type="button" class="btn btn-outline-secondary btn-sm btns-components-action" id="btn-doc-delete${j}" onclick="ocultarComponentesCardBody(this)"><i class="fas fa-eye"></i> Mostrar</button>
                </div>`
    return data;
}


const ocultarComponentesCardBody = (element) => {
    //console.log(element);

    let componenteOcultar = element.parentNode.parentNode.parentNode.parentNode.children[1]

    if(componenteOcultar.hidden === true){
        componenteOcultar.hidden = false;
        element.innerHTML = `<i class="fas fa-eye-slash"></i> Ocultar`
    }else{
        componenteOcultar.hidden = true;
        element.innerHTML = `<i class="fas fa-eye"></i> Mostrar`
    }
}



//Entonces...
//Tengo que construir la misma intenrfaz dque la anterior....pero tengo que hacer llamado de
const showcargaFormacionAcademicaDOCS = async () => {

    let idUser = document.getElementById('_idUnique').value;
    console.log(idUser);
    let datosDeInicio = await  getDataFromServerHidden(`documentosObtenidosGral/${idUser}`,'GET');
    //console.log(datosDeInicio)
    await datosDeInicio.forEach((item)=>{
        //Llenandolo de esta manera porque me da amsieda
        dataDocumentosFormaciones.addNewItem(item);
    })


    visibilityComponent('skeleton-loader-general-Curriculares', true)
    visibilityComponent('myTabContents-datosCurriculares',false)
    console.log("PRIMER LLAMADO")
}


//const cargaY muestra informacion de compoente

const showFormacionAcademicaFormacion = async () =>{

    /*
    visibilityComponent('contenedorSkeletonFrmAcademica', true)
    visibilityComponent('opttionesTitleFormAcademica1', false)
    visibilityComponent('contenedor-formacionAcademica-agregarNuevos', false)
*/
    let idUser = document.getElementById('_idUnique').value;
    let datosFormaciones = await getDataFromServerHidden(`formacionAcademica/${idUser}`,'GET',);
    //console.log(datosFormaciones)
    await datosFormaciones.forEach((item)=>{
        //console.log(item);
        dataFormacionAcademica.addNewItem(item);
    })

    visibilityComponent('contenedorSkeletonFrmAcademica',true)

    //En esta parte llamar a la funcion para construir el front
    await cruzarFormacionDATA()
    visibilityComponent('opttionesTitleFormAcademica1', false)
    visibilityComponent('contenedor-formacionAcademica-agregarNuevos', false)
    console.log("SEGUNDO LLAMADO-Formaciones academicas")

}

//Esta parte es la que cruza todo el contenido de formaciones Academica...
const cruzarFormacionDATA = async () => {

    let formaciones = dataFormacionAcademica.getAllData();

    let data ="";

    console.log(formaciones.length)

    if (formaciones.length === 0){

        let dataSN = `<div class="text-center">
                        <h5 style="font-weight: 310">Datos no disponibles.</h5>
                    </div>`

        $('#formacionAcademica-elementos').append(dataSN);

    }else{
        await formaciones.forEach((itemsFormacion)=>{
            data += showFormacionAcademicaIndividual(itemsFormacion);
        })

        $('#formacionAcademica-elementos').append(data);
    }



    /*let data = showFormacionAcademicaIndividual()

    //Agrega la informacion para mostrar

    $('#formacionAcademica-elementos').append(data);*/
}



const showFormacionesCientificas = async () => {


    await mostrarFormulariosFormacionCientificaSNIPRODEP(); // Se realiza escritura de componentes...

    visibilityComponent('contenedorSkeletonFrmCientifica', true) // Ocultando Skeleton

    visibilityComponent('opttionesTitleFormCiencitifica1', false);
    visibilityComponent('showinfoCientifica', false);
    console.log("SEGUNDO LLAMADO-Formaciones cientificas")



}
