//
function componenteInicialBaseFormacionTICS(params) {

    let j = Math.floor(Math.random() * 100000);

    return `<div class="container" id="showinfoFormacionTICS">
    <div class="formacionFormacionTICS">
        <div class="card  card-formacion-academica card-formacion-FormacionTICS" id="card-formacion-FormacionTICS">
            <div class="card-header">

                <div class="container-skeleton-FormacionTICS-BodyCard" hidden>
                    <span class="skeleton-loader"></span>
                </div>

                <div id="values" hidden>
                    <input type="text" name="valueIDCF" id="valueIDCF" hidden disabled value="">
                    <input type="text" name="valueIDoc" id="valueIDoc" hidden disabled value="">

                </div>

                <div class="card-buttons">
                    ${btnsComponentGuardarFirstFormacionTICS()}
                </div>


            </div>

            <div class="card-body card-body-back" id="card-componentBody" >

                <div class="container-skeleton-FormacionTICS-BodyCard" hidden>
                    <div class="skeleton-section-content">
                        <span class="teasting2">
                        </span>
                    </div>
                </div>

                <div class="container-form">

                    <form action="" name="formacion-FormacionTICS-form${j}" id="formacion-FormacionTICS-form${j}">
                            <!--Formulario/Info-->
                        ${formularioNuevoFormacionTICS()}
                    </form>

                    <div class="container-form-docs" id="container-form-docs${j}">

                    </div>
                </div>
            </div>
        </div>
    </div>

</div>`;
}


function componenteInicialBaseFormacionTICSONEdit(params) {

    let j = Math.floor(Math.random() * 100000);

    return `<div class="container" id="showinfoFormacionTICS">
    <div class="formacionFormacionTICS">
        <div class="card  card-formacion-academica card-formacion-FormacionTICS" id="card-formacion-FormacionTICS">
            <div class="card-header">

                <div class="container-skeleton-FormacionTICS-BodyCard" hidden>
                    <span class="skeleton-loader"></span>
                </div>

                <div id="values" hidden>
                    <input type="text" name="valueIDCF" id="valueIDCF" hidden disabled value="">
                    <input type="text" name="valueIDoc" id="valueIDoc" hidden disabled value="">

                </div>

                <div class="card-buttons">

                </div>


            </div>

            <div class="card-body card-body-back" id="card-componentBody" >

                <div class="container-skeleton-FormacionTICS-BodyCard" hidden>
                    <div class="skeleton-section-content">
                        <span class="teasting2">
                        </span>
                    </div>
                </div>

                <div class="container-form">

                    <form action="" name="formacion-FormacionTICS-form${j}" id="formacion-FormacionTICS-form${j}">
                            <!--Formulario/Info-->
                        ${visualizadorDatosFormacionTICS()}
                    </form>

                    <div class="container-form-docs" id="container-form-docs${j}">

                    </div>
                </div>
            </div>
        </div>
    </div>

</div>`;
}

//****************INICIA BOTONES DE ACCIONES FormacionTICS ********************/

//Guarda cambios de formaulario Inicial
function btnsComponentGuardarFirstFormacionTICS(params) {


    let j = Math.floor(Math.random() * 100000);
    return `
        <div id="guardarFormacionTICS${j}" class="guardarFormacionTICS">
            <button type="button" class="btn btn-outline-secondary btn-sm btns-components-action" id="btn-doc-delete${j}" onclick="guardarFormularioFormacionTICS(this)"><i class="fas fa-save"></i> Guardar</button>
        </div>
    `;
}


//Edita cambios de formulario Satisfactorio
function btnsComponentEditaFirstFormacionTICS(params) {

    let j = Math.floor(Math.random() * 100000);
    return `
    <div id="EditarFormacionTICS${j}" class="EditarFormacionTICS">
        <button type="button" class="btn btn-outline-secondary btn-sm btns-components-action" id="btn-doc-delete${j}" onclick="editarFormularioFormacionTICS(this)"><i class="fas fa-save"></i> Editar</button>
    </div>

    `;
}



//Edita cambios de formulario Satisfactorio
function btnsComponentEditaCancelaFirstFormacionTICS(params) {

    let j = Math.floor(Math.random() * 100000);
    return `
    <div id="EditarCancelarFormacionTICS${j}" class="EditarCancelarFormacionTICS">
        <button type="button" class="btn btn-outline-secondary btn-sm btns-components-action" id="btn-doc-delete${j}" onclick="guardarEdicionFormacionTICS(this)"><i class="fas fa-save"></i> Guardar</button>
        <button type="button" class="btn btn-outline-secondary btn-sm btns-components-action" id="btn-doc-delete${j}" onclick="cancelarEditarFormularioFormacionTICS(this)"><i class="fas fa-save"></i> Cancelar</button>
    </div>
    `;
}


//
function btnsComponentCancelaFirstFormacionTICS(params) {

    let j = Math.floor(Math.random() * 100000);
    return `

    <div id="CancelarFormacionTICS${j}" class="EditarCancelarFormacionTICS">
        <button type="button" class="btn btn-outline-secondary btn-sm btns-components-action" id="btn-doc-delete${j}" ><i class="fas fa-save"></i> Guardar</button>
        <button type="button" class="btn btn-outline-secondary btn-sm btns-components-action" id="btn-doc-delete${j}" ><i class="fas fa-save"></i> Cancelar</button>
    </div>
    `;
}


//****************TERMINA BOTONES DE ACCIONES FormacionTICS ********************/

/*
1,Candidato a Investigador Nacional
2,Investigador Nacional Nivel I
3,Investigador Nacional Nivel II
4,Investigador Nacional Nivel III*/


function enableInput(element) {

    let chkOk = element.checked;
    let clasePadre = element.parentNode.parentNode.parentNode;
    let input = clasePadre.children[1].children[0];

    if (chkOk) {
        input.disabled = false;
    } else {
        input.disabled = true;
        input.value = "";
    }
}

//Formulario inicial de FormacionTICSo ///Tener en cuenta de que se tiene que editar deacuerdo al formulario....
function formularioNuevoFormacionTICS(params) {

    return `
    <div>
        <div class="form-row justify-content-center">

            <div class="form-group col-md-3">

                <div class="form-check form-check-inline">
                    <input class="form-check-input" type="checkbox" name="chkProcesadorTexto" onclick="enableInput(this)" id="chkProcesadorTexto">
                    <label class="form-check-label " for="chkProcesadorTexto">
                        Procesador de textos:
                    </label>
                </div>
            </div>

            <div class="form-group col-md-8">
                <input type="text" class="form-control" name="procesadorTexto" id="procesadorTexto" oninput="eliminarEspacios(this)" placeholder="Ingrese nombres de herramientas" autocomplete="off" disabled>
                <input type="text" class="form-control" name="procesadorTextoID" id="procesadorTextoID" disabled hidden value="1">
            </div>

        </div>

        <div class="form-row justify-content-center">

            <div class="form-group col-md-3">

                <div class="form-check form-check-inline">
                    <input class="form-check-input" type="checkbox"  name="chkHojaCalculo"  onclick="enableInput(this)" id="chkHojaCalculo">
                    <label class="form-check-label" for="chkHojaCalculo">
                        Hojas de cálculo:
                    </label>
                </div>

            </div>

            <div class="form-group col-md-8">

                <input type="text" class="form-control" name="hojaCalculo" id="hojaCalculo" oninput="eliminarEspacios(this)" placeholder="Ingrese nombres de herramientas" autocomplete="off" disabled>
                <input type="text" class="form-control" name="hojaCalculoID" id="hojaCalculoID" disabled hidden value="2">
            </div>

        </div>

        <div class="form-row justify-content-center">

            <div class="form-group col-md-3">

                <div class="form-check form-check-inline">
                    <input class="form-check-input" type="checkbox" name="chkPresentaciones" onclick="enableInput(this)" id="chkPresentaciones">
                    <label class="form-check-label" for="chkPresentaciones">
                        Presentaciones electrónicas:
                    </label>
                </div>

            </div>

            <div class="form-group col-md-8">
                <input type="text" class="form-control" name="presentaciones" id="presentaciones" oninput="eliminarEspacios(this)" placeholder="Ingrese nombres de herramientas" autocomplete="off" disabled>
                <input type="text" class="form-control" name="presentacionesID" id="presentacionesID" disabled hidden value="3">
            </div>

        </div>

        <div class="form-row justify-content-center">

            <div class="form-group col-md-3">

                <div class="form-check form-check-inline">
                    <input class="form-check-input" type="checkbox" name="chkMapasMentales" onclick="enableInput(this)" id="chkMapasMentales">
                    <label class="form-check-label" for="chkMapasMentales">
                        Mapa mental:
                    </label>
                </div>

            </div>

            <div class="form-group col-md-8">
                <input type="text" class="form-control" name="mapasMentales" id="mapasMentales"  oninput="eliminarEspacios(this)" placeholder="Ingrese nombres de herramientas" autocomplete="off" disabled>
                <input type="text" class="form-control" name="mapasMentalesID" id="mapasMentalesID" disabled hidden value="4">
            </div>

        </div>

        <div class="form-row justify-content-center">

            <div class="form-group col-md-3">

                <div class="form-check form-check-inline">
                    <input class="form-check-input" type="checkbox" name="chkInfografias" onclick="enableInput(this)"id="chkInfografias">
                    <label class="form-check-label" for="chkInfografias">
                        Infografias:
                    </label>
                </div>

            </div>

            <div class="form-group col-md-8">

                <input type="text" class="form-control" name="infografias" id="infografias"   oninput="eliminarEspacios(this)" placeholder="Ingrese nombres de herramientas" autocomplete="off" disabled>
                <input type="text" class="form-control" name="infografiasID" id="infografiasID" disabled hidden value="5">
            </div>

        </div>

        <div class="form-row justify-content-center">

            <div class="form-group col-md-3">

                <div class="form-check form-check-inline">
                    <input class="form-check-input" type="checkbox" name="chkAudio" onclick="enableInput(this)" id="chkAudio">
                    <label class="form-check-label" for="chkAudio">
                        Edición audio:
                    </label>
                </div>

            </div>

            <div class="form-group col-md-8">

                <input type="text" class="form-control" name="audioHerramienta" id="audioHerramienta" oninput="eliminarEspacios(this)" placeholder="Ingrese nombres de herramientas" autocomplete="off" disabled>
                <input type="text" class="form-control" name="audioHerramientaID" id="audioHerramientaID" disabled hidden value="6">
            </div>

        </div>

        <div class="form-row justify-content-center">

            <div class="form-group col-md-3">

                <div class="form-check form-check-inline">
                    <input class="form-check-input" type="checkbox" name="chkVideo" onclick="enableInput(this)" id="chkVideo">
                    <label class="form-check-label" for="chkVideo">
                        Edición video:
                    </label>
                </div>

            </div>

            <div class="form-group col-md-8">

                <input type="text" class="form-control" name="videoHerramienta" id="videoHerramienta"   oninput="eliminarEspacios(this)" placeholder="Ingrese nombres de herramientas" autocomplete="off" disabled >
                <input type="text" class="form-control" name="videoHerramientaID" id="videoHerramientaID" disabled hidden value="7">
            </div>

        </div>

        <div class="form-row justify-content-center">

            <div class="form-group col-md-3">

                 <div class="form-check form-check-inline">
                    <input class="form-check-input" type="checkbox" name="chkImagen" onclick="enableInput(this)" id="chkImagen">
                    <label class="form-check-label" for="chkImagen">
                        Edición imágenes
                    </label>
                </div>

            </div>

            <div class="form-group col-md-8">

                <input type="text" class="form-control" name="imagenesHerramienta" id="imagenesHerramienta"  oninput="eliminarEspacios(this)"  placeholder="Ingrese nombres de herramientas" autocomplete="off" disabled >
                <input type="text" class="form-control" name="imagenesHerramientaID" id="imagenesHerramientaID" disabled hidden value="8">
            </div>

        </div>

        <div class="form-row justify-content-center">

            <div class="form-group col-md-3">

                <div class="form-check form-check-inline">
                    <input class="form-check-input" type="checkbox" name="chkOtros" onclick="enableInput(this)" id="chkOtros">
                    <label class="form-check-label" for="chkOtros">
                        Otros...:
                    </label>
                </div>

            </div>

            <div class="form-group col-md-8">
                <input type="text" class="form-control" name="otrosHerramientas" id="otrosHerramientas"  oninput="eliminarEspacios(this)" placeholder="Ingrese nombres de herramientas" autocomplete="off" disabled>
                <input type="text" class="form-control" name="otrosHerramientasID" id="otrosHerramientasID" disabled hidden value="9">
            </div>
        </div>
    </div>
    `
}



function visualizadorDatosFormacionTICS(params) {

    let procesadorText = dataFormacionTICS.findItemByIdCurriculum("1")
    let hojaCalculo = dataFormacionTICS.findItemByIdCurriculum("2")
    let presentacion = dataFormacionTICS.findItemByIdCurriculum("3")
    let mapaMental = dataFormacionTICS.findItemByIdCurriculum("4")
    let infografias = dataFormacionTICS.findItemByIdCurriculum("5")
    let edicionAudio = dataFormacionTICS.findItemByIdCurriculum("6")
    let edicionVideo = dataFormacionTICS.findItemByIdCurriculum("7")
    let edicionImagenes = dataFormacionTICS.findItemByIdCurriculum("8")
    let otros = dataFormacionTICS.findItemByIdCurriculum("9");


    let defaultString = "Dato no disponible."

    return `
    <div>
        <div class="form-row text-center">
            <div class="form-group col-md-4 text-center">
                <h6>Procesador de textos:</h6>
            </div>

            <div class="form-group col-md-8">
                <p>${procesadorText === undefined ? defaultString: procesadorText.herramientas}</p>
            </div>
        </div>

        <div class="form-row text-center">
            <div class="form-group col-md-4 text-center">
                <h6>Hojas de cálculo:</h6>
            </div>

            <div class="form-group col-md-8">
                <p>${hojaCalculo === undefined ? defaultString: hojaCalculo.herramientas}</p>
            </div>
        </div>


        <div class="form-row text-center">
            <div class="form-group col-md-4 text-center">
                <h6>Presentaciones electrónicas:</h6>
            </div>

            <div class="form-group col-md-8">
                <p>${presentacion === undefined ? defaultString: presentacion.herramientas}</p>
            </div>
        </div>


        <div class="form-row text-center">
            <div class="form-group col-md-4 text-center">
                <h6>Mapa mental:</h6>
            </div>

            <div class="form-group col-md-8">
                <p>${mapaMental === undefined ? defaultString: mapaMental.herramientas}</p>
            </div>
        </div>


        <div class="form-row text-center">
            <div class="form-group col-md-4 text-center">
                <h6>Infografias</h6>
            </div>

            <div class="form-group col-md-8">
                <p>${infografias === undefined ? defaultString: infografias.herramientas}</p>
            </div>
        </div>


        <div class="form-row text-center">
            <div class="form-group col-md-4 text-center">
                <h6>Edición audio</h6>
            </div>

            <div class="form-group col-md-8">
                <p>${edicionAudio === undefined ? defaultString: edicionAudio.herramientas}</p>
            </div>
        </div>


        <div class="form-row text-center">
            <div class="form-group col-md-4 text-center">
                <h6>Edición video:</h6>
            </div>

            <div class="form-group col-md-8">
                <p>${edicionVideo === undefined ? defaultString: edicionVideo.herramientas}</p>
            </div>
        </div>

        <div class="form-row text-center">
            <div class="form-group col-md-4 text-center">
                <h6>Edición imágenes</h6>
            </div>

            <div class="form-group col-md-8">
                <p>${edicionImagenes === undefined ? defaultString: edicionImagenes.herramientas}</p>
            </div>
        </div>

        <div class="form-row text-center">
            <div class="form-group col-md-4 text-center">
                <h6>Otros...:</h6>
            </div>

            <div class="form-group col-md-8">
                <p>${otros === undefined ? defaultString: otros.herramientas}</p>
            </div>
        </div>
    </div>
    `
}


const obtenerEnlaceDocumentoTICS = (item) =>{
    //obtener datsode idCurriculumFormacion....

    let idCurriculumDocs  = item.idCurriculumFormacion
    let objROUTES = ROUTES_OBJ.getITEMSROUTE();
    let documento = dataDocumentosFormaciones.findItemByIdCurriculum(idCurriculumDocs)


    try {
        let documentoIndividual = documento[0];

        //Buscar en respositorioDocumento

        //return `<a target="_blank" href="/prospecto/documentoFormacionObtener/${documentoIndividual.idDocumento}">${documentoIndividual.archivo}</a>`;
        return `<a target="_blank" href="${objROUTES.itemRouteDocFormacionGral}/${documentoIndividual.idDocumento}">${documentoIndividual.archivo}</a>`;
    }catch (e){


        return `<p>SIN DOCUMENTO</p>`
    }


}

//************TERMINA COMPONENTES DE FormacionTICS

//************Inicia Actions de FormacionTICS


const mandarDocumentoFormacionTICS = async (idCurriculumFormacion, contenedorForm)=>{

    let itemInputDocu = contenedorForm.children[0].children[0].children[3].children[1].children[1].children[0];
    let formData = new FormData();

    formData.append('file',itemInputDocu.files[0]);
    formData.append('inputname',itemInputDocu.value);
    formData.append('idCurriculumFormacion',idCurriculumFormacion);

    return await sendFilePDFFREE(formData,'setDocumentoFormacionTICS');
}


const actualizarDocumentoFormacionTICS = async (idCurriculumFormacion,idDocumento, contenedorForm)=>{

    let itemInputDocu = contenedorForm.children[0].children[0].children[3].children[1].children[1].children[0];
    let formData = new FormData();

    formData.append('file',itemInputDocu.files[0]);
    formData.append('inputname',itemInputDocu.value);
    formData.append('idCurriculumFormacion',idCurriculumFormacion);
    formData.append('idDocumento',idDocumento);

    return await sendFilePDFFREE(formData,'actualizarDocumentoFormacionTICS');
}



const getFormacionTICS =async (item) =>{
    let dataa = await getDataFromServerHidden(`getFormacionTICSIndividual/${item}`,'POST')
    return dataa[0];
}


async function guardarFormularioFormacionTICS(params) {
    console.log("Guardando datos");

    //Contenedor de botones
    let containerButtons = params.parentNode.parentNode;

    //SkeletondeHeader (Contenedor)
    let skeletonHeader = params.parentNode.parentNode.parentNode.parentNode.children[0].children[0]
    //SkeletonBody (Contenedor)
    let skeletonBody = params.parentNode.parentNode.parentNode.parentNode.children[1].children[0]

    //input para valor de FormacionTICS
    let inputValueFormacionTICS = params.parentNode.parentNode.parentNode.children[1].children[0].value

    //input para documento de FormacionTICS
    let inputValueDocumentFormacionTICS = params.parentNode.parentNode.parentNode.children[1].children[1].value

    //Contenedor card-body
    let cardBody = params.parentNode.parentNode.parentNode.parentNode.children[1];

    console.log(cardBody)

    //Contenedor principal1 (container-form)
    let containerForm = params.parentNode.parentNode.parentNode.parentNode.children[1].children[1];

    //ContenedorFormularioParent (form-action) //Se realiza Escritura de componente visualizador
    let containerFormShowFormacionTICS = params.parentNode.parentNode.parentNode.parentNode.children[1].children[1].children[0]


    //validando datos para formulario....
    let formValidacion = await validacionFormularioFormTICS(containerFormShowFormacionTICS);
    //let validacionDocs = await validacionDocumentoFormularioTICS(containerFormShowFormacionTICS);

    //console.log(formValidacion);

    if (formValidacion){
        console.log("Hay error... ")

        swal({
            title:"Atención",
            text: "• Por favor, revise los campos correspondientes del formulario",
            type: "warning"
        });



    }else{

        //Comportamiento de skeletons....

        skeletonHeader.hidden = false
        skeletonBody.hidden = false;

        containerButtons.hidden = true;
        containerForm.hidden = true;



        let response = await generacionObjetoTICS(containerFormShowFormacionTICS);
        console.log(response)

        if (response.noError === "0"){

            //Obtener informacion de
            let formacionesTIcs = await getDataFromServerHidden('getformacionestics','GET');
            dataFormacionTICS.setInitialData(formacionesTIcs);


            swal({
                title: "Atención",
                text: "Campos guardados correctamente",
                type: "success",
            });



            containerFormShowFormacionTICS.innerHTML =  visualizadorDatosFormacionTICS()//Componente de Visualizacion
            skeletonHeader.hidden = true
            skeletonBody.hidden = true;
            containerButtons.hidden = false;
            containerForm.hidden = false;
            containerButtons.innerHTML = btnsComponentEditaFirstFormacionTICS();

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



    //containerFormShowFormacionTICS.innerHTML =  visualizadorDatosFormacionTICS()//Componente de Visualizacion

    //agregando Botones para editar
    //containerButtons.innerHTML = btnsComponentEditaFirstFormacionTICS();
}


//validacion de formulario, el cual incluye fichero...


const validacionFormularioFormTICS = async(item)=>{

    let form_data = $('#' + item.id).serializeJSON();

    let sizeObject = Object.keys(form_data).length;
    //console.log(form_data)
    //console.log(sizeObject)
    //return form_data.tipo=== undefined || form_data.inicioVigencia=== ''|| form_data.terminoVigencia=== '';

    let errors = [];

    if (sizeObject === 0){
        errors.push(true);
    }

    if (form_data.chkProcesadorTexto === "on"){
        errors.push(form_data.procesadorTexto==='');
    }

    if (form_data.chkHojaCalculo === "on"){
        errors.push(form_data.hojaCalculo==='')
    }

    if (form_data.chkPresentaciones === "on"){
        errors.push(form_data.presentaciones==='')
    }

    if (form_data.chkMapasMentales === "on"){
        errors.push(form_data.mapasMentales==='')
    }

    if (form_data.chkInfografias === "on"){
        errors.push(form_data.infografias==='')
    }

    if (form_data.chkAudio === "on"){
        errors.push(form_data.audioHerramienta==='')
    }

    if (form_data.chkVideo === "on"){
        errors.push(form_data.videoHerramienta==='')
    }

    if (form_data.chkImagen === "on"){
        errors.push(form_data.imagenesHerramienta==='')
    }

    if (form_data.chkOtros === "on"){

        errors.push(form_data.otrosHerramientas==='')
    }


    return errors.includes(true);

}


const validacionDocumentoFormularioTICS = async(item) => {

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


const generacionObjetoTICS= async(item)=>{

    let form_data = $('#' + item.id).serializeJSON();

    let array = [];



    if (form_data.chkProcesadorTexto === "on"){
        //errors.push(form_data.procesadorTexto==='');
        let ob1 = {
             idTipo:"1"
            ,herramienta:form_data.procesadorTexto.trim()
        }
        array.push(JSON.stringify([ob1]))
    }

    if (form_data.chkHojaCalculo === "on"){
        //errors.push(form_data.hojaCalculo==='')
        let ob1 = {
             idTipo:"2"
            ,herramienta:form_data.hojaCalculo.trim()
        }
        array.push(JSON.stringify([ob1]))
    }

    if (form_data.chkPresentaciones === "on"){
        //errors.push(form_data.presentaciones==='')
        let ob1 = {
             idTipo:"3"
            ,herramienta:form_data.presentaciones
        }
        array.push(JSON.stringify([ob1]))
    }

    if (form_data.chkMapasMentales === "on"){
        //errors.push(form_data.mapasMentales==='')
        let ob1 = {
             idTipo:"4"
            ,herramienta:form_data.mapasMentales.trim()
        }
        array.push(JSON.stringify([ob1]))
    }

    if (form_data.chkInfografias === "on"){
        //errors.push(form_data.infografias==='')
        let ob1 = {
             idTipo:"5"
            ,herramienta:form_data.infografias.trim()
        }
        array.push(JSON.stringify([ob1]))
    }

    if (form_data.chkAudio === "on"){
        //errors.push(form_data.audioHerramienta==='')
        let ob1 = {
            idTipo:"6"
            ,herramienta:form_data.audioHerramienta.trim()
        }
        array.push(JSON.stringify([ob1]))
    }

    if (form_data.chkVideo === "on"){
        //errors.push(form_data.videoHerramienta==='')
        let ob1 = {
            idTipo:"7"
            ,herramienta:form_data.videoHerramienta.trim()
        }
        array.push(JSON.stringify([ob1]))
    }

    if (form_data.chkImagen === "on"){
        //errors.push(form_data.imagenesHerramienta==='')
        let ob1 = {
            idTipo:"8"
            ,herramienta:form_data.imagenesHerramienta.trim()
        }
        array.push(JSON.stringify([ob1]))
    }

    if (form_data.chkOtros === "on"){

        //errors.push(form_data.otrosHerramientas==='')
        let ob1 = {
            idTipo:"9"
            ,herramienta:form_data.otrosHerramientas.trim()
        }
        array.push(JSON.stringify([ob1]))

    }


    //console.log(array.length)

    let contadorOKs = 0;
    let contadorFails = 0;

    for (const item1 of array) {
        let [data] = await Promise.all([getDataFromServerHidden('setFormacionesTICS', 'POST', item1)])
        //console.log(data)
        data.mensaje === 'OK' ? contadorOKs++ : contadorFails++;
    }

    //console.log(`Contador de ok's: ${contadorOKs}`)
    //console.log(`Contador de fail's: ${contadorFails}`)
    //console.log(`TODO SALIO BIEN ??? ${array.length === contadorOKs}`);

    if (array.length === contadorOKs){

        return {
             mensaje:"Cambios guardados!"
            ,noError:"0"
        }

    }else{

        return {
             mensaje:"Algunas formaciones no fueron posible guardarlas, intente mas tarde"
            ,noError:"1"
        }
    }


    /*let tipoTICS = form_data.tipo;
    let inicioVigencia = form_data.inicioVigencia;
    let TerminoVigencia = form_data.terminoVigencia;

    //let itemInputDocu = item.children[0].children[0].children[3].children[1].children[1].children[0];

    let array = [];
    let object = {
        tipoTICS: tipoTICS
        ,inicioVigencia: inicioVigencia
        ,TerminoVigencia: TerminoVigencia
    };


    array.push(object);
    let data = JSON.stringify(array);*/


    //return await getDataFromServerHidden('definirFormacionTICS','POST',data)

}


const generacionObjetoTICSUpdate= async(item, idCurriculumFo)=>{

    let form_data = $('#' + item.id).serializeJSON();

    let tipoTICS = form_data.tipo;
    let inicioVigencia = form_data.inicioVigencia;
    let TerminoVigencia = form_data.terminoVigencia;

    //let itemInputDocu = item.children[0].children[0].children[3].children[1].children[1].children[0];

    let array = [];
    let object = {
        tipoTICS: tipoTICS
        ,inicioVigencia: inicioVigencia
        ,TerminoVigencia: TerminoVigencia
        ,idCurriculumFormacion: idCurriculumFo
    };


    array.push(object);
    let data = JSON.stringify(array);


    return await getDataFromServerHidden('actualizarFormacionTICS','POST',data)

}


function editarFormularioFormacionTICS(params) {

    console.log("Editando datos");

    //Contenedor de botones
    let containerButtons = params.parentNode.parentNode;


    //SkeletondeHeader (Contenedor)
    let skeletonHeader = params.parentNode.parentNode.parentNode.parentNode.children[0].children[0]
    //SkeletonBody (Contenedor)
    let skeletonBody = params.parentNode.parentNode.parentNode.parentNode.children[1].children[0]

    //input para valor de FormacionTICS
    let inputValueFormacionTICS = params.parentNode.parentNode.parentNode.children[1].children[0].value

    console.log(inputValueFormacionTICS)

    //input para documento de FormacionTICS
    let inputValueDocumentFormacionTICS = params.parentNode.parentNode.parentNode.children[1].children[1].value

    console.log(inputValueDocumentFormacionTICS)

    //Contenedor card-body
    let cardBody = params.parentNode.parentNode.parentNode.parentNode.children[1];

    //Contenedor principal1 (container-form)
    let containerForm = params.parentNode.parentNode.parentNode.parentNode.children[1].children[1];

    //ContenedorFormularioParent (form-action) //Se realiza Escritura de componente visualizador

    let containerFormShowFormacionTICS = params.parentNode.parentNode.parentNode.parentNode.children[1].children[1].children[0]


    containerFormShowFormacionTICS.innerHTML =  formularioNuevoFormacionTICS()//Componente de Visualizacion

    //agregando Botones para editar
    containerButtons.innerHTML = btnsComponentEditaCancelaFirstFormacionTICS();

}

async function guardarEdicionFormacionTICS(params) {

    console.log("Guardando datos en edicion");

    //Contenedor de botones
    let containerButtons = params.parentNode.parentNode;


    //SkeletondeHeader (Contenedor)
    let skeletonHeader = params.parentNode.parentNode.parentNode.parentNode.children[0].children[0]
    //SkeletonBody (Contenedor)
    let skeletonBody = params.parentNode.parentNode.parentNode.parentNode.children[1].children[0]

    //input para valor de FormacionTICS
    let inputValueFormacionTICS = params.parentNode.parentNode.parentNode.children[1].children[0].value

    //input para documento de FormacionTICS
    let inputValueDocumentFormacionTICS = params.parentNode.parentNode.parentNode.children[1].children[1].value

    //Contenedor card-body
    let cardBody = params.parentNode.parentNode.parentNode.parentNode.children[1];

    //Contenedor principal1 (container-form)
    let containerForm = params.parentNode.parentNode.parentNode.parentNode.children[1].children[1];

    //ContenedorFormularioParent (form-action) //Se realiza Escritura de componente visualizador

    let containerFormShowFormacionTICS = params.parentNode.parentNode.parentNode.parentNode.children[1].children[1].children[0]


    //En esta parte va la edicion

    let formValidacion = await validacionFormularioFormTICS(containerFormShowFormacionTICS);


    if (formValidacion){
        console.log("Hay error... ")

        swal({
            title:"Atención",
            text: "• Por favor, revise los campos correspondientes del formulario",
            type: "warning"
        });

    }else{

        skeletonHeader.hidden = false
        skeletonBody.hidden = false;

        containerButtons.hidden = true;
        containerForm.hidden = true;


        let response = await generacionObjetoTICS(containerFormShowFormacionTICS);
        console.log(response)

        if (response.noError === "0"){


            let formacionesTIcs = await  getDataFromServerHidden('getformacionestics','GET');
            dataFormacionTICS.setInitialData(formacionesTIcs);


            swal({
                title: "Atención",
                text: "Campos guardados correctamente",
                type: "success",
            });


            skeletonHeader.hidden = true
            skeletonBody.hidden = true;
            containerButtons.hidden = false;
            containerForm.hidden = false;



            containerFormShowFormacionTICS.innerHTML =  visualizadorDatosFormacionTICS()//Componente de Visualizacion
            containerButtons.innerHTML = btnsComponentEditaFirstFormacionTICS();




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



    //containerFormShowFormacionTICS.innerHTML =  visualizadorDatosFormacionTICS()//Componente de Visualizacion

    //agregando Botones para editar
    //containerButtons.innerHTML = btnsComponentEditaFirstFormacionTICS();



}


function cancelarEditarFormularioFormacionTICS(params) {

    console.log("Cancelando edicion de datos");
    //Contenedor de botones
    let containerButtons = params.parentNode.parentNode;


    //SkeletondeHeader (Contenedor)
    let skeletonHeader = params.parentNode.parentNode.parentNode.parentNode.children[0].children[0]
    //SkeletonBody (Contenedor)
    let skeletonBody = params.parentNode.parentNode.parentNode.parentNode.children[1].children[0]

    //input para valor de FormacionTICS
    let inputValueFormacionTICS = params.parentNode.parentNode.parentNode.children[1].children[0].value

    //input para documento de FormacionTICS
    let inputValueDocumentFormacionTICS = params.parentNode.parentNode.parentNode.children[1].children[1].value

    //Contenedor card-body
    let cardBody = params.parentNode.parentNode.parentNode.parentNode.children[1];

    //Contenedor principal1 (container-form)
    let containerForm = params.parentNode.parentNode.parentNode.parentNode.children[1].children[1];

    //ContenedorFormularioParent (form-action) //Se realiza Escritura de componente visualizador

    let containerFormShowFormacionTICS = params.parentNode.parentNode.parentNode.parentNode.children[1].children[1].children[0]

    let formacionActual = dataFormacionCientifica.findItemByIdCurriculum(inputValueFormacionTICS)

    containerFormShowFormacionTICS.innerHTML =  visualizadorDatosFormacionTICS(formacionActual)//Componente de Visualizacion

    //agregando Botones para editar
    containerButtons.innerHTML = btnsComponentEditaFirstFormacionTICS();
}



//Acciones para escribir o sobresscribir en componente dado......

function verificadorFormacionCientificaFormacionTICS(perfilChkTICS) {

    let origin = document.getElementById('FormacionTICS');

    if(perfilChkTICS.checked){
        origin.innerHTML = componenteInicialBaseFormacionTICS();
        agregarDatePicker('inicioVigenciaTICS')
        agregarDatePickerNoMayor('terminoVigenciaTICS')
    }else{
        origin.innerHTML = "";
    }
}



function obtenerFormacionTICS(itemFormacion) {

    let j = Math.floor(Math.random() * 100000);

    let obtenerDocumentacion = dataDocumentosFormaciones.findItemByIdCurriculum(itemFormacion.idCurriculumFormacion)
    let itemDoc = obtenerDocumentacion[0];



    return `<div class="container" id="showinfoFormacionTICS">
    <div class="formacionFormacionTICS">
        <div class="card  card-formacion-academica card-formacion-FormacionTICS" id="card-formacion-FormacionTICS">
            <div class="card-header">

                <div class="container-skeleton-FormacionTICS-BodyCard" hidden>
                    <span class="skeleton-loader"></span>
                </div>

                <div id="values" hidden>
                    <input type="text" name="valueIDCF" id="valueIDCF" hidden disabled value="${itemFormacion.idCurriculumFormacion}">
                    <input type="text" name="valueIDoc" id="valueIDoc" hidden disabled value="${itemDoc === undefined ? '0000': itemDoc.idDocumento}">
                </div>

                <div class="card-buttons">

                        ${itemDoc === undefined ? '' : btnsComponentEditaFirstFormacionTICS()}


                </div>
            </div>

            <div class="card-body card-body-back" id="card-componentBody" >

                <div class="container-skeleton-FormacionTICS-BodyCard" hidden>
                    <div class="skeleton-section-content">
                        <span class="teasting2">
                        </span>
                    </div>
                </div>

                <div class="container-form">

                    <form action="" name="formacion-FormacionTICS-form${j}" id="formacion-FormacionTICS-form${j}">

                            <!--Formulario/Info-->
                        ${visualizadorDatosFormacionTICS(itemFormacion)}

                    </form>

                    <div class="container-form-docs" id="container-form-docs${j}">

                    </div>
                </div>
            </div>
        </div>
    </div>
</div>`;

}



/*

const agregarNuevoElementoFormacionTICS = () => {
    //BUSCAR ORIGEN
    $("#formacionTICSContainer").append(componenteInicialBaseFormacionTICS())
}
*/

const agregarElementosFormacionesTICSEdit = () => {

    $("#formacionTICSContainer").append(componenteInicialBaseFormacionTICSONEdit())
}


const mostrarFormacionesTIC =async () =>{

    //agregando formacion a repositorio
    let idUser = document.getElementById('_idUnique').value;
    let formacionesTIcs = await getDataFromServerHidden(`getformacionestics/${idUser}`,'GET');
    dataFormacionTICS.setInitialData(formacionesTIcs);
}

const showFormacionTICS = async () => {

    await mostrarFormacionesTIC() // Se muestra ifnoramcion
    await agregarElementosFormacionesTICSEdit() // Se escribe informacion

    visibilityComponent('contenedorSkeletonFrmTICS', true)
    visibilityComponent('titlecontainerFormacionTICS', false);
    visibilityComponent('formacionTICSContainer', false);

}


