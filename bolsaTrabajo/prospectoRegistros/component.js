/**
 * Define los componentes de toda la aplicacion (plantillas html)
 */

//Plantilla de datos generales
const setdatosGenerales = (data) =>{

    const {
        curp,
        estadoCivil,
        idEstadoCivil,
        idGenero,
        idPersona,
        materno ,
        nombreCompletoNPM,
        nombres,
        paterno,
        rfc
    } = data;

    let sectionDatos = ` <div class="section-dataInformacion" id="section-dataInformacion">
                            <div class="container1">
                                <div class="avatar-upload">
                                    <div class="avatar-preview">
                                        <div id="imagePreview" class="sectionFotoDatos">
                                        </div>
                                    </div>
                                </div>

                            </div>
                            <div class="container2">
                                <div class="form-row text-center">
                                    <div class="form-group col-md-4 ">
                                        <h6>Nombre(s):</h6>
                                        <p class="text-black-50" id="data-nombres">${checkValues(nombres)}</p>
                                    </div>

                                    <div class="form-group col-md-4">
                                        <h6>Apellido paterno:</h6>
                                        <p class="text-black-50" id="data-paterno">${checkValues(paterno)}</p>
                                    </div>

                                    <div class="form-group col-md-4">
                                        <h6>Apellido materno:</h6>
                                        <p class="text-black-50" id="data-materno">${checkValues(materno)}</p>
                                    </div>
                                </div>
                                <div class="form-row text-center" >

                                    <div class="form-group col-md-6">
                                        <h6>Género:</h6>
                                        <p class="text-black-50">${genderCatalog(checkValues(idGenero))}</p>
                                    </div>


                                    <div class="form-group col-md-6">
                                        <h6 >Estado civil:</h6>
                                        <p class="text-black-50">${checkValues(estadoCivil)}</p>
                                    </div>

                                </div>

                                <div class="form-row text-center">
                                    <div class="form-group col-md-6">
                                        <h6>CURP:</h6>
                                        <p class="text-black-50">${checkValues(curp)}</p>
                                    </div>

                                    <div class="form-group col-md-6">
                                        <h6>RFC:</h6>
                                        <p class="text-black-50">${cleanInputRFC(checkValues(rfc))}</p>
                                    </div>
                                </div>
                            </div>
                        </div></div>
                        <script>
                            setImage()
                        </script>
`;

    $('#section-data-info').append(sectionDatos)

}

const formDatosGenerales = ()=>{

    let stateInitial = statusDatosGenerales.getStateGral()


    const {
        curp,
        estadoCivil,
        idEstadoCivil,
        idGenero,
        idPersona,
        materno ,
        nombreCompletoNPM,
        nombres,
        paterno,
    rfc
    } = stateInitial[0];


    let sectionDatosForm = `<div class="section-data-form" id="section-data-form">

                            <form action="" name="datos-generales-form" id="datos-generales-form">
                                <div class="row justify-content-center text-center">
                                    <div class="form-group col-md-6 justify-content-center">
                                        <small class="justify-content-center text-muted">
                                            *Por favor, adjunte una fotografía cuyo tamaño no supere los 3 mb.
                                        </small>
                                    </div>
                                </div>
                                <div class="">
                                    <div class="form-row">
                                        <div class="avatar-upload">
                                            <div class="avatar-edit">
                                                <input type='file' id="imageUpload" accept="image/png, image/jpeg" onchange="setStyleImagen()"/>
                                                <label for="imageUpload"></label>
                                            </div>
                                            <div class="avatar-preview">
                                                <div id="imagePreview" style="background-image: url(https://www.uaeh.edu.mx/campus/icbi/oferta/maestrias/internet-cosas/images/docentes/d1.png);">
                                                </div>
                                            </div>
                                        </div>

                                    </div>

                                </div>

                                <div class="">

                                    <div class="form-row text-center">
                                        <div class="form-group col-md-4 ">
                                            <h6>Nombre(s):</h6>
                                            <p class="text-black-50" id="data-nombres">${checkValues(nombres)}</p>
                                        </div>

                                        <div class="form-group col-md-4">
                                            <h6>Apellido paterno:</h6>
                                            <p class="text-black-50" id="data-paterno">${checkValues(paterno)}</p>
                                        </div>

                                        <div class="form-group col-md-4">
                                            <h6>Apellido materno:</h6>
                                            <p class="text-black-50" id="data-materno">${checkValues(materno)}</p>
                                        </div>
                                    </div>

                                <div>
                                    <div class="form-row text-center">
                                        <div class="form-group col-md-6">
                                            <h6>Género:</h6>
                                            <p class="text-black-50">${genderCatalog(checkValues(idGenero))}</p>
                                        </div>



                                        <div class="form-group col-md-4">
                                            <h6>Estado civil:</h6>
                                            <select class="browser-default custom-select" name="estado_civil" id="estado_civil" >
                                            ${setSelectCivil(idEstadoCivil)}
                                            </select>
                                        </div>
                                    </div>
                                </div>

                                <div>
                                    <div class="form-row text-center">
                                        <div class="form-group col-md-6">
                                            <h6>CURP:</h6>
                                            <p class="text-black-50">${checkValues(curp)}</p>
                                        </div>

                                        <div class="form-group col-md-4">
                                            ${setInputForm(rfc, 'rfc')}
                                            <div id="linkRFC">
                                                <small id="passwordHelpInline" class="text-muted">
                                                    Puede consultar su RFC <a href="https://www.sat.gob.mx/tramites/operacion/28753/obten-tu-rfc-con-la-clave-unica-de-registro-de-poblacion-curp" target="_blank">aqui.</a>
                                                </small>
                                            </div>
                                            <small id="rfcinValido"  hidden="hidden" style="color: red">

                                            </small>
                                            <small id="rfcValido"  hidden="hidden" style="color: #37ff00">

                                            </small>
                                        </div>

                                    </div>

                                </div>

                            </div>
                            </form>

                            <div class="form-row flex-row-reverse">
                                <div class="form-group col-xs-2 justify-content-center" id="btnSaveDelet">
                                    <br>
                                    <div class="btn-group mr">
                                        <a title="Guardar cambios" class="btn btn-outline-secondary btn-sm boton" name="button" onclick="saveDataChanges()" ><i class="fas fa-save"></i> Guardar</a>
                                    </div>
                                    <div class="btn-group mr">
                                        <a title="Cancelar cambios" class="btn btn-danger btn-sm boton" name="button" onclick="cancelarCambiosDG()"><i class="fas fa-trash-alt"></i> Cancelar</a>
                                    </div>

                                </div>
                            </div>
                `;


    $('#section-datosGenerales-edit').append(sectionDatosForm)
}

//Componentes para datos de nacimiento .....
//PRIMERO SE MUESTRA INFO--- CONSULTA Y DESPUES DE ESO SE HACE FORMULARIO
const setDatosNacimiento = (data) =>{


    const {
        idPersonaNacimiento,
        idPais,
        pais,
        idEntidadFederativa,
        entidadFederativa,
        idMunicipio,
        municipio,
        idLocalidad,
        fecha,
    } = data;



    let sectionDatos = `<div class="section-nacimiento-info" id="section-nacimiento-info" >
                            <div class="form-row text-center">
                                <div class="form-group col-md-4">
                                    <h6>Fecha de Nacimiento</h6>
                                    <p class="text-black-50">${checkInitialvalues(fecha)}</p>
                                </div>

                                <div class="form-group col-md-4">
                                    <h6>Pais de origen:</h6>
                                    <p class="text-black-50">${checkInitialvalues(idPais)}</p>
                                </div>

                                <div class="form-group col-md-4">
                                    <h6>Entidad Federativa:</h6>
                                    <p class="text-black-50">${checkInitialvalues(idEntidadFederativa)}</p>
                                </div>

                            </div>

                            <div class="form-row text-center">

                                <div class="form-group col-md-4">
                                    <h6>Municipio:</h6>
                                    <p class="text-black-50">${checkInitialvalues(idMunicipio)}</p>
                                </div>

                                <div class="form-group col-md-4">
                                    <h6>Lugar de Nacimiento (Como aparece en acta):</h6>
                                    <p class="text-black-50">Agregue dato</p>
                                </div>

                            </div>

                            <div class="form-row text-center">
                                <div class="form-group col-md-4">
                                    <h6>Cuenta con otra nacionalidad:</h6>
                                    <p class="text-black-50">Agregue dato</p>
                                </div>
                            </div>

                            <div>

                            </div>
                        </div>`;

    $('#section-dataNacimiento-info').append(sectionDatos);
}

const setDatosNacimientoFilled = async (data1, data2, data3, data4) =>{


    console.log(data1) // lo de abajo
    console.log(data2) //Lugar
    console.log(data3) //Estado o provincia
    console.log(data4) // Lo de nacionalidad (optional)

    const {
        idPersonaNacimiento,
        idPais,
        idEntidadFederativa,
        entidadFederativa,
        idMunicipio,
        municipio,
        idLocalidad,
        fecha,
    } = data1;



    //retornaPaisNombre(checkInitialvalues(idPais))

    let sectionDatos = `<div class="section-nacimiento-info" id="section-nacimiento-info" >
                            <div class="form-row text-center">
                                <div class="form-group col-md-4">
                                    <h6>Fecha de Nacimiento</h6>
                                    <p class="text-black-50">${timeChangeToLocal(checkInitialvalues(fecha))}</p>
                                </div>

                                <div class="form-group col-md-4">
                                    <h6>Pais de origen:</h6>
                                    <p class="text-black-50">${idPais === null  ?checkInitialvalues(idPais) : retornaPaisNombre(idPais) }</p>
                                </div>

                                <div class="form-group col-md-4">
                                    ${retornaEstado(idEntidadFederativa,data3 )}
                                </div>

                            </div>

                            <div class="form-row text-center">

                                <div class="form-group col-md-4">
                                    ${await retornaProvincia(idMunicipio, data3)}
                                </div>

                                <div class="form-group col-md-6">
                                    <h6>Lugar de Nacimiento (Como aparece en acta):</h6>
                                    <p class="text-black-50">${checkInitialvalues(data2.lugar)}</p>
                                </div>

                            </div>

                            <div class="form-row text-center">
                                <div class="form-group col-md-4">
                                    ${retornaPaisNacionalidad(data4)}
                                </div>
                            </div>
                            <div>
                            </div>
                        </div>`;

    $('#section-dataNacimiento-info').append(sectionDatos);
}

const formDatosNacimientoNacional = (data) =>{
    let sectionDatos = `<form name="datos-Nacimiento-form" action="" id="datos-Nacimiento-form">
                                <div class="form-row">
                                    <div class="form-group col-md-4">
                                        <label for="fechaNacimiento" class="label">Fecha de nacimiento:</label>
                                        <input type="text" maxlength="14" class="form-control" name="fechaNacimiento" id="fechaNacimiento"  autocomplete="off" readonly>
                                    </div>

                                    <div class="form-group col-md-4">
                                        <label for="" class="label">Pais de origen:</label>
                                        <select class="browser-default custom-select" name="paisOrigen" id="paisOrigen" onchange="onShowCountry(this)">
                                            <option selected disabled>Seleccione una opción</option>
                                            ${generateSelectCountry()}
                                        </select>
                                    </div>


                                    <div class="form-group col-md-4">

                                        <div id="entidad-federal">

                                            <label for="entidad" class="label">Entidad federativa:</label>
                                            <select class="browser-default custom-select" name="entidad" id="entidadSelect" disabled onchange="onShowState(this)">
                                                <option selected disabled>Seleccione una opción</option>

                                            </select>
                                        </div>

                                        <div id="EstadoDIV">
                                            <div id="estado-for">
                                                <label for="Estado" class="label">Estado:</label>
                                                <input type="text"  class="form-control" name="Estado" id="Estado" autocomplete="off" oninput="eliminarEspacios(this)" autocomplete="off" maxlength="50">

                                            </div>
                                        </div>
                                    </div>

                                </div>

                                <div class="form-row">
                                    <div class="form-group col-md-4">
                                        <div id="municipio-federal">
                                            <label for="municipio" class="label">Municipio:</label>
                                            <select class="browser-default custom-select" name="municipio" id="municipioSelect" disabled >

                                                <option selected disabled>Seleccione una opción</option>


                                            </select>
                                        </div>

                                        <div id="ProvinciaDIV">
                                            <div id="provincia-for">
                                                <label for="Provincia" class="label">Provincia:</label>
                                                <input type="text"  class="form-control" name="Provincia" id="Provincia" autocomplete="off" oninput="eliminarEspacios(this)" autocomplete="off" maxlength="50">
                                            </div>
                                        </div>
                                    </div>

                                    <div class="form-group col-md-6">
                                        <label for="lugarActa" class="label">Lugar de nacimiento (Como aparece en acta):</label>
                                        <input type="text" class="form-control" name="lugarActa" id="lugarActa" placeholder="" oninput="eliminarEspacios(this)" autocomplete="off" maxlength="50">
                                    </div>

                                </div>
                                <br>
                            </form>

                            <div id="nacionesMultiples">

                            </div>
                            <div class="form-row flex-row-reverse" id="btnNacimiento-edit-cancel">
                                    <div class="form-group col-xs-2 justify-content-center" id="btnSaveDelet">
                                        <br>
                                        <div class="btn-group mr">
                                            <a title="Guardar cambios" class="btn btn-secondary boton btn-sm" name="button" onclick="saveNacimientoInfo()"><i class="fas fa-save"></i> Guardar</a>
                                        </div>
                                        <div class="btn-group mr">
                                            <a title="Cancelar cambios" class="btn btn-danger boton btn-sm" name="button" onclick="cancelEditNacimiento()" ><i class="fas fa-trash-alt"></i> Cancelar</a>
                                        </div>
                                    </div>
                            </div>`;

    $('#section-nacimiento-form').append(sectionDatos);
    agregarDatePicker("fechaNacimiento");
}

const formNacionesMultiples = (data)=>{

    let sectionDatos = `<div id="nacionesMultiples" >
                                    <div class="form-group col-md-4">
                                        <div class="card">
                                            <div class="card-header">
                                                <h6>¿Cuenta con otra nacionalidad?</h6>
                                                <form action="" name="nacionCheck" data-new="false">
                                                    <div class="form-check form-check-inline">
                                                        <input class="form-check-input" type="radio" name="nacionalidadRadio" id="nacionalidadRadioSi" onclick="sectionsNations(this)">
                                                        <label class="form-check-label" for="nacionalidadRadioSi">Si</label>
                                                    </div>
                                                    <div class="form-check form-check-inline">
                                                        <input class="form-check-input" type="radio" name="nacionalidadRadio" id="nacionalidadRadioNo" onclick="sectionsNations(this)" checked>
                                                        <label class="form-check-label" for="nacionalidadRadioNo">No</label>
                                                    </div>
                                                </form>
                                            </div>

                                            <div class="card-body" id="bodyNacionalidades" style="display: none" >
                                                <form action="" data-new="false">
                                                    <div class="form-row" data-new="false">
                                                        <div class="form-group col-md-8">
                                                            <p><b>Seleccione:</b></p>
                                                        </div>
                                                    </div>
                                                </form>
                                                <div id="body-nacionalidades" data-new="false">
                                                    <div id="contenidoNaciones">
                                                        <form action="" name="naciones-multiform1" id="naciones-multiform1">
                                                            <div class="form-row justify-content-center">
                                                                <div class="form-group col-md-12">
                                                                    <select class="browser-default custom-select" name="paisSelectMultiform" id="paisSelect" >
                                                                        <option selected disabled>Seleccione una opción</option>

                                                                    </select>
                                                                </div>

                                                                <!--
                                                                   Recordar que se ha definido que solo se debe de admitir una sola nacion
                                                                <div class="form-group col-md-4">
                                                                    <div class="form-group col-xs-3">
                                                                        <div class="btn-group mr">
                                                                            <a title="Agregar nuevo elemento" class="btn btn-secondary boton btn-sm" onclick="agregarNacion(this)" name="button" ><i class="fas fa-plus"></i></a>
                                                                        </div>
                                                                        <div class="btn-group mr">
                                                                            <a title="Borrar este elemento" class="btn btn-danger boton btn-sm" onclick="eliminarNacion(this)" name="button" ><i class="fas fa-trash"></i></a>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                -->
                                                            </div>
                                                        </form>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>`;

    $('#nacionesMultiples').append(sectionDatos);

}

/// Se empieza a trabajar con seguridad social.....
const setdatosSegSocial = (data)=>{

    //console.log(data)
    //data.forEach((item)=>console.log(item))
    let datos = data[0];

    let tipoSanguineo = datos.tipoSanguineoSS;
    let infonavit = datos.infonavit;
    let personaAf = datos.personaAfore;

    //Comment this....
    console.log(tipoSanguineo);
    console.log(infonavit);
    console.log(personaAf);

    // mostrar positivo
    // NSS (Limpiar dato---- no debe de aparecer el guion)"---
    let sectionDatos = `
                        <div class="section-seguridadSocial-info" id="section-seguridadSocial-info" >
                            <div class="form-row text-center">
                                <div class="form-group col-md-4">
                                    <h6>Factor RH</h6>
                                    <p class="text-black-50">${ tipoSanguineo === null|| tipoSanguineo=== undefined ? checkInitialvalues() : retornaTipoFactor(tipoSanguineo.factorRH) }</p>
                                </div>

                                <div class="form-group col-md-4">
                                    <h6>Grupo sanguíneo</h6>
                                    <p class="text-black-50">${ tipoSanguineo === null ||tipoSanguineo === undefined ? checkInitialvalues(): tipoSanguineo.grupoSanguineo } </p>
                                </div>

                                <div class="form-group col-md-4">
                                    <h6>Número de seguridad social:</h6>
                                    <p class="text-black-50">${ tipoSanguineo === null ||tipoSanguineo === undefined ? checkInitialvalues(): splitNSS(tipoSanguineo.numeroSeguridadSocial) } </p>
                                </div>
                            </div>

                            <div class="form-row text-center">

                                <div class="form-group col-md-4">
                                    <h6>¿Cuenta con credito infonavit?</h6>
                                    <p class="text-black-50">${ infonavit === null ||infonavit===undefined ? "No." :"Si. (número de crédito: "+infonavit.creditoNumero+")"}</p>
                                </div>

                                ${returnInfoAfore(personaAf)}

                            </div>
                        </div>`;
    $('#section-dataSegSocial-info').append(sectionDatos);
}

const setFormSegSocial = (data) =>{

    let dataForm = dataSeguridadSocial.getData()
    let datos = dataForm[0];
    let tipoSanguineo = datos.tipoSanguineoSS;
    let infonavit = datos.infonavit;
    let personaAf = datos.personaAfore;


    console.log(tipoSanguineo)
    console.log(infonavit)
    console.log(personaAf)


    let sectionForm = `<div class="section-seguridadSocial-form" id="section-seguridadSocial-form" >

                            <form name="seguridad-social" id="seguridad-social" action="">

                                <div class="form-row">

                                    <div class="form-group col-md-4">
                                        <label for="factorRH" class="label">Factor RH</label>
                                        <!--<input type="text" class="form-control" name="" id="factor" placeholder="Factor RH" autocomplete="off" >-->
                                        <select class="browser-default custom-select" name="factorRH" id="factorRH">
                                            ${tipoSanguineo === null ||tipoSanguineo === undefined?  setSelectFactorRH(null) : setSelectFactorRH(tipoSanguineo.factorRH)}


                                        </select>
                                    </div>

                                    <div class="form-group col-md-4">
                                        <label for="grupoSanguineo" class="label">Grupo sanguíneo</label>
                                        <!--<input type="text" class="form-control" name="grupoS" id="grupoS" placeholder="Grupo sanguineo" autocomplete="off" >-->
                                        <select class="browser-default custom-select" name="grupoSanguineo" id="grupoSanguineo">
                                            ${tipoSanguineo === null ||tipoSanguineo === undefined ?  setSelectSanguineo(null) : setSelectSanguineo(tipoSanguineo.grupoSanguineo)}
                                        </select>
                                    </div>

                                    <div class="form-group col-md-4">
                                        <label for="numeroSS" class="label">Número de seguridad social</label>
                                        <input type="text" class="form-control" oninput="validarNSS(this)" maxlength="11" name="numeroSeguridadSocial" id="numeroSeguridadSocial" placeholder="N.S.S" autocomplete="off" value="${tipoSanguineo === null ||tipoSanguineo === undefined? '' : splitNSS(tipoSanguineo.numeroSeguridadSocial)}">
                                        <div id="linknss">
                                            <small id="passwordHelpInline" class="text-muted">
                                                Puede consultar su Número de seguridad social <a href="https://serviciosdigitales.imss.gob.mx/gestionAsegurados-web-externo/asignacionNSS" target="_blank">aqui.</a>
                                            </small>
                                        </div>
                                        <small id="NSSinValido"  hidden="hidden" style="color: red">

                                        </small>
                                        <small id="NSSValido"  hidden="hidden" style="color: #37ff00">

                                        </small>


                                    </div>
                                </div>
                                <hr>

                                <div class="form-row">

                                    ${compruebaInfonavit(infonavit)}
                                </div>



                                <div class="form-row">

                                ${compruebaAfore(personaAf)}

                                </div>

                            </form>

                            <div class="form-row flex-row-reverse">
                                <div class="form-group col-xs-2 justify-content-center" id="btnSaveDelet">
                                    <br>
                                    <div class="btn-group mr">

                                        <a title="Guardar cambios" class="btn btn-secondary boton btn-sm" onclick="guardarCambiosSSS()"><i class="fas fa-save"></i> Guardar</a>
                                    </div>
                                    <div class="btn-group mr">

                                        <a title="Cancelar cambios" class="btn btn-danger boton btn-sm" onclick="cancelarCambiosSS()" ><i class="fas fa-trash-alt"></i> Cancelar</a>
                                    </div>

                                </div>
                            </div>

                        </div>`;

    $('#section-dataSegSocial-form').append(sectionForm);

}

//Componente 2 botones nuevos
const buttonsNewComponenTelefono = () =>{
    return `<div class="card-buttonsEdit">
                <button type="button" id="gral-options-agregar" class="btn btn-outline-secondary btn-sm" onclick="validaNuevoTelefono(this)"><i class="fas fa-save"></i> Guardar</button>
                <button type="button" id="gral-options-agregar" class="btn btn-outline-secondary btn-sm" onclick="removeItemPhone(this)"><i class="fas fa-trash-alt"></i> Eliminar</button>
            </div>`;

}

//componente boton nuevo correo
const buttonsNewComponenCorreo = () =>{
    return `<div class="card-buttonsEdit">
                <button type="button" id="gral-options-agregar" class="btn btn-outline-secondary btn-sm" onclick="validaCamposCorreoElectronico(this)"><i class="fas fa-save"></i> Guardar</button>
                <button type="button" id="gral-options-agregar" class="btn btn-outline-secondary btn-sm" onclick="removeItemCorreo(this)"><i class="fas fa-trash-alt"></i> Eliminar</button>
            </div>`;
}

//Componente boton editar telefono....
const buttonEditComponent = () =>{
    return `<div class="card-buttonsEdits" >
        <button type="button" id="gral-options-agregar" class="btn btn-outline-secondary btn-sm" onclick="editarNumTelefonoActual(this)"><i
            class="fas fa-edit"></i> Editar
        </button>
    </div>`;
}

//Componente boton editar correo....
const buttonEditComponentCorreo = () =>{
    return `<div class="card-buttonsEdits" >
        <button type="button" id="gral-options-agregar" class="btn btn-outline-secondary btn-sm" onclick="editarCorreoActual(this)"><i
            class="fas fa-edit"></i> Editar
        </button>
    </div>`;
}

//Botones para edicion 3 botones
const butttonEditCurrentCorreo = () =>{
    return `<div class="card-buttonsEdit">
        <button type="button" id="gral-options-agregar" class="btn btn-outline-secondary btn-sm" onclick="validaActualizaCamposCorreoElectronico(this)"><i
            class="fas fa-save"></i> Guardar
        </button>
        <button type="button" id="gral-options-agregar" class="btn bn-outline-secondary btn-sm" onclick="borrarDatosCamposCallC(this)"><i
            class="fas fa-trash-alt"></i> Borrar
        </button>
        <button type="button" id="gral-options-agregar" class="btn btn-outline-secondary btn-sm" onclick="cancelarCambiosEditC(this)"><i
            class="fas fa-times-circle"></i> Cancelar
        </button>
    </div>`;
}

//Botones para edicion 3 botones
const butttonEditCurrentTelefono = () =>{
    return `<div class="card-buttonsEdit">
        <button type="button" id="gral-options-agregar" class="btn btn-outline-secondary btn-sm" onclick="validarActualizarCamposEdit(this)"><i
            class="fas fa-save"></i> Guardar
        </button>
        <button type="button" id="gral-options-agregar" class="btn bn-outline-secondary btn-sm" onclick="borrarDatosCamposCall(this)"><i
            class="fas fa-trash-alt"></i> Borrar
        </button>
        <button type="button" id="gral-options-agregar" class="btn btn-outline-secondary btn-sm" onclick="cancelarCambiosEdit(this)"><i
            class="fas fa-times-circle"></i> Cancelar
        </button>
    </div>`;
}

//Datos para telefono
const sectionShowDataCurrent = (response) =>{
    return `<section class="card-body__number">
                <h6>Telefono:</h6>
                <p>${response.telefono}</p>
            </section>

            <section class="card-body__type">
                <h6>Tipo:</h6>
                <p>${response.tipoTelefono}</p>
            </section>`;
}

//Muestra el correo actual para su edicion
const sectionShowDataCurrentMail = (response) =>{
    return `<div>
            <section class="card-body__number">
                <h6>Correo electrónico:</h6>
                <p>${response.correoElectronico}</p>
            </section>
            <section class="card-body__type">
                <h6>Tipo:</h6>
                <p>${response.tipoCorreoElectronico !== "Privado"? response.tipoCorreoElectronico: "Personal"}</p>
            </section>
            </div>`;
}

//muestra formulario principal
const sectionFormComponenteFormulario = () =>{

    let j = Math.floor(Math.random() * 100000);
    return `<form action="" name="form-datosTelefono${j}" id="form-datosTelefono${j}" onsubmit="return false;">
        <div class="form-row justify-content-center">
            <div class="form-group col-md-6">
                <h6>Telefono:</h6>
                <input type="text" class="form-control" maxlength="10" name="telefono" id="telefono" maxlength="10" oninput="validarNUM(this)" placeholder="10 digitos" autocomplete="off" value="">
            </div>
            <div class="form-group col-md-6">
                <h6>Tipo:</h6>
                <select class="browser-default custom-select" name="tipoTelefono" id="tipoTelefono">
                    <option selected disabled>...</option>
                    <option value="Móvil">Móvil</option>
                    <option value="Privado">Residencial</option>
                    <option value="Trabajo">Trabajo</option>
                </select>
            </div>
        </div>
    </form>`;
}

//Form para componente interno  Telefono
const sectionFormComponenteFormulario22 = (value) =>{

    let j = Math.floor(Math.random() * 100000);
    return `<form action="" name="form-datosTelefono${j}" id="form-datosTelefono${j}" onsubmit="return false;">
        <div class="form-row justify-content-center">
            <div class="form-group col-md-6">
                <h6>Telefono:</h6>
                <input type="text" class="form-control" maxlength="10" name="telefono" id="telefono" maxlength="10" oninput="validarNUM(this)" placeholder="10 digitos" autocomplete="off" value="${value.telefono}">
            </div>
            <div class="form-group col-md-6">
                <h6>Tipo:</h6>
                <select class="browser-default custom-select" name="tipoTelefono" id="tipoTelefono">
                    <${setSelectTipoTelefono(value.tipoTelefono)}
                </select>
            </div>
        </div>
    </form>`;
}

//form para componente inteno Correo electronico
const sectionFormComponenteFormulario333 = (value) =>{
    let j = Math.floor(Math.random() * 100000);

    let data = `

        <form action="" name="datos-correos${j}" id="datos-correos${j}" onsubmit="return false;">
            <div class="form-row justify-content-center">
                <div class="form-group col-md-12">
                    <h6>Correo electrónico:</h6>
                    <input type="text" class="form-control" name="correoContacto" id="correoContacto" onkeydown="return (event.keyCode!=13);" oninput="eliminarEspacios(this)" placeholder="Correo electrónico" autocomplete="off" value="${value.correoElectronico}">
                </div>

                <div class="form-group col-md-12">
                    <h6>Tipo:</h6>
                    <select class="browser-default custom-select" name="tipoCorreo" id="tipoCorreo">


                        ${setSelectTipoCorreo(value.tipoCorreoElectronico)}

                    </select>
                </div>
            </div>
        </form>
        `;

    return data;
}


//Componente inical cuando no exista otro correo
const nuevoComponentetelefonoInicial = () =>{

    let data = `
    <div class="card card-telefono-mainly">
            <div class="card-header">
                <div disabled hidden id="card-values-Element">
                    <input type="text" name="secretValue1" value="" hidden disabled>
                    <input type="text" name="secretValue2" value="" hidden disabled>
                </div>


                <div id="skeleton-buttons" hidden >
                    <div>
                        <span class="skeleton-loader"></span>
                    </div>
                </div>

                <div id="main-sectionButonsEdit" >
                    ${buttonsNewComponenTelefono()}
                </div>

            </div>

            <div class="card-body card-body-back" >
                <div class="card-body-presentationData" >

                    <div id="card-body__skeletonSectionName" hidden >
                        <div class="skeleton-section-content">
                        <span class="teasting2">
                        </span>
                        </div>
                    </div>

                    <div class="card-body-details" >

                    </div>
                </div>

                <div class="card-body-number" >
                    ${sectionFormComponenteFormulario()}
                </div>
            </div>
    </div>`;


    $('#comunicacionComponente').append(data);
}

//deben de existir los catalogos....
const retornaNumTelefonosIniciales = (response) =>{
    let data = `
    <div class="card card-telefono-mainly">
            <div class="card-header">
                <div disabled hidden id="card-values-Element">
                    <input type="text" name="secretValue1" value="${response.idPersonaTelefono}" hidden disabled>
                    <input type="text" name="secretValue2" value="${response.idTelefono}" hidden disabled>
                </div>


                <div id="skeleton-buttons" hidden >
                    <div>
                        <span class="skeleton-loader"></span>
                    </div>
                </div>

                <div id="main-sectionButonsEdit" >
                    ${buttonEditComponent()}
                </div>

            </div>

            <div class="card-body card-body-back" >
                <div class="card-body-presentationData" >

                    <div id="card-body__skeletonSectionName" hidden >
                        <div class="skeleton-section-content">
                        <span class="teasting2">
                        </span>
                        </div>
                    </div>

                    <div class="card-body-details" >

                    ${sectionShowDataCurrent(response)}
                    </div>
                </div>

                <div class="card-body-number" >
                </div>
            </div>
    </div>`;

    return data;
}

//Componente para mostrar informacion principal
const retornaCorreoElectronicoInicial = (response)=>{

    let data = `<div class="card card-correo-mainly ">
            <div class="card-header" >
                <div disabled hidden id="card-values-Element" >
                    <input type="text" name="secretValue1" value="${response.idPersonaCorreoElectronico}" hidden disabled>
                    <input type="text" name="secretValue2" value="${response.idCorreoElectronico}" hidden disabled>
                </div>

                <div id="skeleton-buttons" hidden >
                    <div>
                        <span class="skeleton-loader"></span>
                    </div>
                </div>

                <div id="main-sectionButonsEdit">

                        ${buttonEditComponentCorreo()}
                </div>

            </div>

            <div class="card-body card-body-back">

                <div class="card-body-skeleton" hidden>
                    <div class="skeleton-section-content">
                        <span class="teasting2"></span>
                    </div>
                </div>


                <div class="card-body-details ">
                    ${sectionShowDataCurrentMail(response)}
                </div>

                <div class="card-body-form ">



                </div>
            </div>
        </div>`;


    return data;

}

//agrega el nuevo componente para boton inicial (Osea que no hay datos....)
const nuevoCorreoElectronicoInicial = ()=>{
    let data = `<div class="card card-correo-mainly ">
            <div class="card-header" >
                <div disabled hidden id="card-values-Element" >
                    <input type="text" name="secretValue1" value="" hidden disabled>
                    <input type="text" name="secretValue2" value="" hidden disabled>
                </div>

                <div id="skeleton-buttons"hidden >
                    <div>
                        <span class="skeleton-loader"></span>
                    </div>
                </div>

                <div id="main-sectionButonsEdit">
                    ${buttonsNewComponenCorreo()}
                </div>

            </div>

            <div class="card-body card-body-back">

                <div class="card-body-skeleton" hidden>
                    <div class="skeleton-section-content">
                        <span class="teasting2"></span>
                    </div>
                </div>


                <div class="card-body-details">

                </div>

                <div class="card-body-form ">
                    ${sectionFormComponentFormularioCorreo()}
                </div>
            </div>
        </div>`;



    $('#comunicacionComponenteCorreo').append(data)
}

//Componente interno cuando es un nuevo componente // nuevo item....
const sectionFormComponentFormularioCorreo = () =>{
    let j = Math.floor(Math.random() * 100000);

    let data = `

        <form action="" name="datos-correos${j}" id="datos-correos${j}" onsubmit="return false;">
            <div class="form-row justify-content-center">
                <div class="form-group col-md-12">
                    <h6>Correo electrónico:</h6>
                    <input type="text" class="form-control" name="correoContacto" id="correoContacto" onkeydown="return (event.keyCode!=13);" oninput="eliminarEspacios(this)" placeholder="Correo electrónico" autocomplete="off">
                </div>

                <div class="form-group col-md-12">
                    <h6>Tipo:</h6>
                    <select class="browser-default custom-select" name="tipoCorreo" id="tipoCorreo">
                        <option selected disabled>...</option>
                        <option value="Institucional">Institucional</option>
                        <option value="Privado">Personal</option>
                        <option value="Trabajo">Trabajo</option>
                    </select>
                </div>
            </div>
        </form>
        `;

    return data;
}

///Datos de domicilio.....SOLO PARA algo existente...
//retorna el domicilio particular si no existe nada (Con formulario inicial)
const componenteDomicilioPrincipal = (item) =>{
    let data = `<div class="card card-domicilio">
                    <div class="card-header">

                        <div class="header-inputs" hidden>
                            <input type="text" value="" name="value1">
                            <input type="text" value="" name="value2">
                        </div>

                        <div class="card-body-skeleton" hidden>
                            <div>
                                <span class="skeleton-loader"></span>
                            </div>
                        </div>

                        <div class="card-header-titles  card-header-sectionTitle" >
                            <div class="card-header-title">
                                <h6 style="font-weight: 300" onmouseover="">
                                    Domicilio de residencia  <span><i class="fas fa-home"></i></span>
                                </h6>
                            </div>
                            <div class="card-header-buttons">
                                ${btnsEditarDomPrincipalNuevo()}
                            </div>
                        </div>
                    </div>

                    <div class="card-body card-body-back">
                        <div class="card-body-skeleton" hidden>
                            <div class="skeleton-section-content">
                                <span class="teasting2"></span>
                            </div>
                        </div>

                        <div class="body-contenedor-domicilio">
                            ${componenteInformacionDomicilio(item)}
                        </div>

                        <div class="body-contenedor-domicilioForm">

                        </div>


                    </div>
                </div>`;
    return data;
}
//retorna el domicilio Alterno si no existe nada (Con formulario inicial)
const componenteInformacionDomicilio = (item=null) =>{
    let data = `
        <div class="container justify-content-center">

            <div class="form-row ">
                <div class="form-group col-md-4">
                    <h6>Tipo de domicilio:</h6>
                    <p>${checkInitialvalues(item.tipoDomicilio !== "Privado" ? item.tipoDomicilio: "Residencial" )}</p>
                </div>

                <div class="form-group col-md-4">
                    <h6>Entidad federativa:</h6>
                    <p>${checkInitialvalues(item.entidadFederativa)}</p>
                </div>

                <div class="form-group col-md-4">
                    <h6>Municipio:</h6>
                    <p>${checkInitialvalues(item.municipio)}</p>
                </div>
            </div>

            <div class="form-row">
                <div class="form-group col-md-4">
                    <h6>Código Postal:</h6>
                    <p>${checkInitialvalues(item.codigoPostal)}</p>
                </div>


                <div class="form-group col-md-4">

                    <h6>Colonia:</h6>
                    <p>${checkInitialvalues(item.asentamiento)}</p>
                </div>


                <div class="form-group col-md-4">
                    <h6>Calle:</h6>
                    <p>${checkInitialvalues(item.calle)}</p>
                </div>
            </div>

            <div class="form-row">
                <div class="form-group col-md-2">
                    <h6>Núm. Exterior:</h6>
                    <p>${checkInitialvalues(item.numeroExterior)}</p>
                </div>

                <div class="form-group col-md-2">
                    <h6>Núm. Interior:</h6>
                    <p>${checkInitialvalues(item.numeroInterior)}</p>
                </div>
            </div>

        </div>
    `
    return data;
}


const componenteInformacionDomicilioNOVALUE = (item=null) =>{
    let data = `
        <div class="container justify-content-center">

            <div class="form-row ">
                <div class="form-group col-md-4">
                    <h6>Tipo de domicilio:</h6>
                    <p>${checkInitialvalues(item)}</p>
                </div>

                <div class="form-group col-md-4">
                    <h6>Entidad federativa:</h6>
                    <p>${checkInitialvalues(item)}</p>
                </div>

                <div class="form-group col-md-4">
                    <h6>Municipio:</h6>
                    <p>${checkInitialvalues(item)}</p>
                </div>
            </div>

            <div class="form-row">
                <div class="form-group col-md-4">
                    <h6>Código Postal:</h6>
                    <p>${checkInitialvalues(item)}</p>
                </div>


                <div class="form-group col-md-4">

                    <h6>Colonia:</h6>
                    <p>${checkInitialvalues(item)}</p>
                </div>


                <div class="form-group col-md-4">
                    <h6>Calle:</h6>
                    <p>${checkInitialvalues(item)}</p>
                </div>
            </div>

            <div class="form-row">
                <div class="form-group col-md-2">
                    <h6>Núm. Exterior:</h6>
                    <p>${checkInitialvalues(item)}</p>
                </div>

                <div class="form-group col-md-2">
                    <h6>Núm. Interior:</h6>
                    <p>${checkInitialvalues(item)}</p>
                </div>
            </div>

        </div>
    `
    return data;
}




//Componente formulario en limpio.... bueno eso parece
const componenteDomicilioFormulario = () =>{

    let j = Math.floor(Math.random() * 100000);

    let data = `
        <form action="" id="datos-domicilio${j}" name="datos-domicilio${j}">

            <div class="form-row">
                <div class="form-group col-md-4">

                    <h6>Tipo de domicilio:</h6>
                    <select class="browser-default custom-select" name="domicilioTipoResidencia" id="domicilioTipoResidencia">
                        <option selected disabled>Selecccione una opción</option>
                        <option value="Privado">Residencial</option>
                        <option value="Trabajo">Trabajo</option>
                        <option value="Fiscal">Fiscal</option>
                    </select>
                </div>

                <div class="form-group col-md-4">
                    <h6>Entidad federativa:</h6>
                    <select class="browser-default custom-select" name="estadoResidencia" id="estadoResidencia${j}" onchange="setSelectMunicipiosOnchg(this)">
                        ${setSelectEstadosDomicilio()}
                    </select>
                </div>

                <div class="form-group col-md-4">
                    <h6>Municipio:</h6>
                    <select class="browser-default custom-select" name="municipioResidencia" id="municipioResidencia${j}" onchange="">
                        <option selected disabled>Selecccione una opción</option>

                    </select>
                </div>
            </div>

            <div class="form-row">

                <div class="form-group col-md-4">
                    <h6>Código Postal:</h6>
                    <input type="text" class="form-control" name="codigopostalResidencia" id="codigopostalResidencia" placeholder="Código Postal" autocomplete="off" maxlength="5" oninput="eliminarEspacios(this)">
                </div>

                <div class="form-group col-md-4">

                    <h6>Colonia:</h6>
                    <input type="text" class="form-control" name="coloniaResidencia" id="coloniaResidencia" placeholder="Colonia" autocomplete="off" oninput="eliminarEspacios(this)">
                </div>


                <div class="form-group col-md-4">
                    <h6>Calle:</h6>
                    <input type="text" class="form-control" name="calleResidencia" id="calleResidencia" placeholder="Calle" autocomplete="off" oninput="eliminarEspacios(this)">
                </div>
            </div>

            <div class="form-row">
                <div class="form-group col-md-2">
                    <h6>Núm. Exterior:</h6>
                    <input type="text" class="form-control" name="numExt" id="numExt" placeholder="Num. exterior" autocomplete="off" oninput="eliminarEspacios(this)">
                </div>


                <div class="form-group col-md-2">
                    <h6>Núm. Interior:</h6>
                    <input type="text" class="form-control" name="numInteriorResidencia" id="numInteriorResidencia" placeholder="Num. interior" autocomplete="off" oninput="eliminarEspacios(this)">
                </div>
            </div>

        </form>`;

    return data;
}

const componenteDomicilioFormularioWITHDATA = async (object) =>{


    let j = Math.floor(Math.random() * 100000);

    let data = `
        <form action="" id="datos-domicilio${j}" name="datos-domicilio${j}">

            <div class="form-row">
                <div class="form-group col-md-4">

                    <h6>Tipo de domicilio:</h6>
                    <select class="browser-default custom-select" name="domicilioTipoResidencia" id="domicilioTipoResidencia">
                        ${setSelectTipoDomicilio(object.tipoDomicilio)}
                    </select>
                </div>

                <div class="form-group col-md-4">
                    <h6>Entidad federativa:</h6>
                    <select class="browser-default custom-select" name="estadoResidencia" id="estadoResidencia${j}" onchange="setSelectMunicipiosOnchg(this)">
                        ${setSelectEstadosDomicilio(object.idEntidadFederativa)}
                    </select>
                </div>

                <div class="form-group col-md-4">
                    <h6>Municipio:</h6>
                    <select class="browser-default custom-select" name="municipioResidencia" id="municipioResidencia${j}">
                    ${await setSelectMunicipiosEstado(object.idEntidadFederativa, object.idMunicipio)}
                    </select>
                </div>
            </div>

            <div class="form-row">

                <div class="form-group col-md-4">
                    <h6>Código Postal:</h6>
                    <input type="text" class="form-control" name="codigopostalResidencia" id="codigopostalResidencia" placeholder="Código Postal" autocomplete="off" maxlength="5"  value="${object.codigoPostal}" oninput="eliminarEspacios(this)">
                </div>

                <div class="form-group col-md-4">

                    <h6>Colonia:</h6>
                    <input type="text" class="form-control" name="coloniaResidencia" id="coloniaResidencia" placeholder="Calle" autocomplete="off" value="${object.asentamiento}" oninput="eliminarEspacios(this)">
                </div>


                <div class="form-group col-md-4">
                    <h6>Calle:</h6>
                    <input type="text" class="form-control" name="calleResidencia" id="calleResidencia" placeholder="Calle" autocomplete="off" value="${object.calle}" oninput="eliminarEspacios(this)">
                </div>

            </div>


            <div class="form-row">
                <div class="form-group col-md-2">
                    <h6>Núm. Exterior:</h6>
                    <input type="text" class="form-control" name="numExt" id="numExt" placeholder="Num. exterior" autocomplete="off" value="${object.numeroExterior}" oninput="eliminarEspacios(this)">
                </div>


                <div class="form-group col-md-2">
                    <h6>Núm. Interior:</h6>
                        <input type="text" class="form-control" name="numInteriorResidencia" id="numInteriorResidencia" placeholder="Num. interior" autocomplete="off" value="${object.numeroInterior}" oninput="eliminarEspacios(this)">
                </div>
            </div>

        </form>`;

    return data;
}

//Existe data de domicilio
const componenteDomicilioPrincipalDATA = (item) =>{

    let data = `<div class="card card-domicilio">
                    <div class="card-header">

                        <div class="header-inputs" hidden>
                            <input type="text" value="${item.idPersonaDomicilio}" name="value1">
                            <input type="text" value="" name="value2">
                        </div>

                        <div class="card-body-skeleton" hidden >
                            <div>
                                <span class="skeleton-loader"></span>
                            </div>
                        </div>

                        <div class="card-header-titles  card-header-sectionTitle" >
                            <div class="card-header-title">
                                <h6 style="font-weight: 300" onmouseover="">
                                    Domicilio de residencia  <span><i class="fas fa-home"></i></span>
                                </h6>
                            </div>
                            <div class="card-header-buttons">
                                ${btnsEditarDomPrincipalExistente()}
                            </div>
                        </div>
                    </div>

                    <div class="card-body card-body-back">

                        <div class="card-body-skeleton" hidden>
                            <div class="skeleton-section-content">
                                <span class="teasting2"></span>
                            </div>
                        </div>

                        <div class="body-contenedor-domicilio">
                            ${componenteInformacionDomicilio(item)}
                        </div>

                        <div class="body-contenedor-domicilioForm">

                        </div>


                    </div>
                </div>`;
    return data;
}

const btnsEditarDomPrincipalExistente = () =>{
    let data = `
        <div>
            <button type="button" id="gral-options-agregar" class="btn btn-outline-secondary btn-sm" onclick="domicilioPrincipalEditarInicial(this)"><i class="fas fa-edit"></i> Editar</button>
        </div>
    `;
    return data;
}

//Actualizar domicilio de residencia...
const btnsGuardarCancelarDomPrincipalExistent = () =>{
    let data = `
        <div>
            <button type="button" id="gral-options-agregar" class="btn btn-outline-secondary btn-sm" onclick="validarEdicionPrincipal(this)"><i class="fas fa-save"></i> Guardar</button>
            <button type="button" id="gral-options-agregar" class="btn btn-outline-secondary btn-sm" onclick="cancelarEdicionPrincipal(this)"><i class="fas fa-times-circle"></i> Cancelar</button>
        </div>
    `;
    return data;
}

//Cuando no existan elementos... agregar este boton para editar un nuevo elemento ...
const btnsEditarDomPrincipalNuevo = () =>{
    let data = `
        <div>
            <button type="button" id="gral-options-agregar" class="btn btn-outline-secondary btn-sm" onclick="nuevoDomicilioPrincipalEdicion(this)"><i class="fas fa-edit"></i> Editar</button>
        </div>
    `;
    return data;
}

//Agregar nuevo domicilio domicilio de residencia...
const btnsGuardarCancelarDomPrincipalNuevo = () =>{
    let data = `
        <div>
            <button type="button" id="gral-options-agregar" class="btn btn-outline-secondary btn-sm" onclick="validaDomicilioCampos(this)"><i class="fas fa-save"></i> Guardar</button>
            <button type="button" id="gral-options-agregar" class="btn btn-outline-secondary btn-sm" onclick="cancelarNuevoElementoDom(this)"><i class="fas fa-times-circle"></i> Cancelar</button>
        </div>
    `;
    return data;
}

//**********************************************************************************************

