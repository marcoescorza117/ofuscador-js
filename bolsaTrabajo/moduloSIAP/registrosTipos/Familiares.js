//Practicamente es lo mismo que Formacion laboral
//



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

const formComponentAdscriptionText = () => {

    return `<h6>Adscripción:</h6> <!--depende mucho del contexto-->
                <input type="text" class="form-control" name="adscription" id="adscription"  autocomplete="off" oninput="eliminarEspacios(this)" placeholder="Adscripción actual del familiar">`;

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


        <div class="form-row text-center" >

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


        <div class="form-row text-center">
            <div class="form-group col-md-4" id="componenteFechaFamiliar">
                    ${obtenerFechaPariente(params)}
            </div>

            <div class="form-group col-md-8" id="componenteDocumentoFamiliar">

                    ${obtenerDocumentoPariente(params)}
            </div>

        </div>


        <div class="form-row text-center">
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
    let objROUTES = ROUTES_OBJ.getITEMSROUTE();

    let idTipoParentesco = params.idTipoParentesco
    let idPersonaPariente = params.idPersonaPariente
    if (idTipoParentesco === "3" || idTipoParentesco === "4"){
        let documentoPariente = dataDocumentosParientes.findItemByIdPariente(idPersonaPariente)

        if (documentoPariente.length === 0){
            return  ``
        }else{

            let itemDocumentoPariente = documentoPariente[0];
            return `<h6>${idTipoParentesco === "3" ? 'Acta de nacimiento:': 'Acta de matrimonio:'}</h6>
                <p><a target="_blank" href="${objROUTES.itemRouteDocParientesGral}/${itemDocumentoPariente.idDocumento}">${itemDocumentoPariente.archivo}</a></p>`;
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


/**
 * Alerta incluyendo el tipo de documento y la correspondiente descripcion (Tipo de documentjo y tamaño)
 */

//Acciones para escribir o sobresscribir en componente dado......

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
                    <h6><i class="fas fa-user"></i><strong> Parentesco: </strong>${retornarTipoParentescoPariente(itemFormacion.idTipoParentesco)}</h6>
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

    let idUser = document.getElementById('_idUnique').value;

    //se obtienen los personas parientes y se guardan en el repositorio...
    let data = await getDataFromServerHidden(`getFamiliaresParientes/${idUser}`,'GET');
    data.forEach((item)=>{
        dataFormacionFamiliares.addNewItem(item);
    })

    let documento = await getDataFromServerHidden(`getDocumentosFamiliaresParientes/${idUser}`,'GET')

    documento.forEach((item)=>{
        dataDocumentosParientes.addNewItem(item)
    })


    let dataFamiliarHTML = "";

    data.forEach((items)=>{

        dataFamiliarHTML+= obtenerformacionFamiliar(items)
    })

    $("#formacionFamiliares-elementos").prepend(dataFamiliarHTML);

}

const showFormacionesFAMILIARPariente = async ()=>{

    await mostrarFormulariosformacionFamiliar();

    visibilityComponent('contenedorSkeletonFamiliares', true)
    visibilityComponent('opttionesTitleFamiliares', false)
    visibilityComponent('contenedor-formacionFamiliares-agregarNuevos', false)
    visibilityComponent('formacionFamiliares-elementos', false)
}
