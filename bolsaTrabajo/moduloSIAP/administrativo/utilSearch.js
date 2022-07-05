
const getDataServer = async (url, type, formData = null) => {
    let id = await $.ajax({
        type: type,
        url: '/reclutamientoAdministrativo/' + url,
        data: {

            '_token': $('meta[name="csrf-token"]').attr('content'),
            data: formData
        }, success: (data) => {
            return data;
        }
    }).fail(function (jqXHR, textStatus, errorThrown) {
        swal({
            title: "Atención",
            text: textStatus,
            type: "warning"
        });
    });

    return id;
}

function timeChangeToLocal(dateString) {
    dateString.toString();
    let a = moment(dateString).locale('es');
    let time = a.format('DD MMMM YYYY');
    return time.split(" ").join(' de ');
}

const obtenerMunicipiosBusqueda = async (itemMunicipio) => {
    return await getDataServer(`obtenerMunicipios/${itemMunicipio}`,'GET');
}

//seccion nivel de estudios
const obtenerNombresEstudioxNivel = async (itemNivelAcademico)=>{
    return await getDataServer(`obtenerListadoLicenciaturas/${itemNivelAcademico}`,'GET');
}

const onChangePais = async (element)=>{

    let itemSelect = element[element.selectedIndex].value;

    //cambiar estado del segundo elemento

    let componenteEstado = document.getElementById('ComponenteEstado')
    let selectItemEstado = document.getElementById('estado')

    let componenteMunicipio  = document.getElementById('ComponenteMunicipio');


    console.log(itemSelect)
    if (itemSelect==='1'){
        componenteEstado.hidden = false;
        selectItemEstado.disabled = false
        componenteMunicipio.hidden = false;
    }else{
        componenteEstado.hidden = true;
        selectItemEstado.disabled = true
        componenteMunicipio.hidden = true;
    }
}

const onChangeEstado =async (element) => {
    let itemSelect = element[element.selectedIndex].value;
    let data = await obtenerMunicipiosBusqueda(itemSelect)
    let componenteMunicipio = document.getElementById('ComponenteMunicipio')
    componenteMunicipio.innerHTML = "";

    //let stringValue = `<option disabled selected>Seleccione una opción</option>`;
    let stringValue = ``;
    data.forEach(item => stringValue+= `<option value="${item.idMunicipio}">${item.municipio}</option>`)


    componenteMunicipio.innerHTML+= ComponenteMunicipio(stringValue);

    $('#example-getting-started').BsMultiSelect({
        /*cssPatch : {
            choices: {columnCount:'6' },
        },*/

        cssPatch : {
            choices: {columnCount:'6' },
            picks: {
                listStyleType:'none',
                display:'flex',
                flexWrap:'wrap',
                height:'auto',
                marginBottom:'0'
            },
            picks_def: {
                minHeight:'calc(2.25rem + 2px)'
            },
            picks_lg: {
                minHeight:'calc(2.875rem + 2px)'
            },
            picks_sm: {
                minHeight:'calc(1.8125rem + 2px)'
            },
            picks_focus: {
                borderColor:'#80bdff',
                boxShadow:'0 0 0 0.2rem rgba(0, 123, 255, 0.25)'
            },
        },
        placeholder:'-Selecciona-',
    });
    //$("#dashboardcode-bsmultiselect-generated-input-example-getting-started-id").attr('readonly', true)
}



const ComponenteMunicipio = (items)=>{
    return `<label for="example-getting-started" class="label">Municipio:</label>
            <select  class="browser-default custom-select" id="example-getting-started" multiple="multiple">
                ${items}
            </select>`;
}

//onChangeNivelEstudio =

const onChangeNivelEstudio = async (element) => {

    let itemSelect = parseInt(element[element.selectedIndex].value);
    let data = await  obtenerNombresEstudioxNivel(itemSelect);
    let componenteNombreEstudio = document.getElementById('ComponentNombreEstudio');
    componenteNombreEstudio.innerHTML = "";

    let stringValue = `<option disabled selected>Seleccione una opción</option>`;
    data.forEach(item => stringValue+= `<option value="${item.estudio}">${item.estudio}</option>`)

    //tecnio medio
    if (itemSelect === 6 || itemSelect >=8){
        console.log("Muestralo")
        componenteNombreEstudio.hidden = false;
        componenteNombreEstudio.innerHTML = ComponenteNombreEstudio(stringValue)

    }else{
        console.log("NO LO MUESTRES")
        componenteNombreEstudio.hidden = true;
        componenteNombreEstudio.innerHTML = "";

    }


}

const ComponenteNombreEstudio = (items) =>{

    return `<label for="nombreEstudio" class="label">Nombre de estudios:</label>
            <select class="browser-default custom-select" name="nombreEstudio" id="nombreEstudio">
                ${items}
            </select>`

}

function dataUsuarios() {
    let dataInformacion = [];

    return{
        clearAllData:()=>{
            dataInformacion = [];
        },
        getAllData:()=>{
            return dataInformacion;
        },
        addNewItem : (item) =>{
            dataInformacion.push(item)
        },

        getPersonUser:(idP)=>{
            let filter = dataInformacion.filter(item =>item.idPersona === idP)
            let item = filter[0];
            return item;

        },getValuesIdPersona:()=>{
            let aux_Array = [];

            dataInformacion.forEach(item=>aux_Array.push(item.idPersona))

            return aux_Array;
        }
    }


}
let informacionUsuarioUniverse = dataUsuarios()

function dataFormaciones(){

    let dataInformacion = [];

    return{
        clearAllData:()=>{
            dataInformacion = [];
        },
        getAllData:()=>{
            return dataInformacion;
        },
        addNewItem : (item) =>{
            dataInformacion.push(item)
        },

        getPersonUser:(idP)=>{
            let filter = dataInformacion.filter(item =>item.idPersona === idP)
            let item = filter[0];
            return item;

        },getValuesIdPersona:()=>{
            let aux_Array = [];

            dataInformacion.forEach(item=>aux_Array.push(item.idPersona))

            return aux_Array;
        }
    }

}

let informacionFormacionUniverse = dataFormaciones();


function dataFormacionesCientificas(){

    let dataInformacion = [];

    return{
        clearAllData:()=>{
            dataInformacion = [];
        },
        getAllData:()=>{
            return dataInformacion;
        },
        addNewItem : (item) =>{
            dataInformacion.push(item)
        },

        getPersonUser:(idP)=>{
            let filter = dataInformacion.filter(item =>item.idPersona === idP)
            let item = filter[0];
            return item;

        },getValuesIdPersona:()=>{
            let aux_Array = [];

            dataInformacion.forEach(item=>aux_Array.push(item.idPersona))

            return aux_Array;
        }
    }

}

let informacionFormacionCientificaUniverse = dataFormacionesCientificas();


function dataFormacionesIngles(){

    let dataInformacion = [];

    return{
        clearAllData:()=>{
            dataInformacion = [];
        },
        getAllData:()=>{
            return dataInformacion;
        },
        addNewItem : (item) =>{
            dataInformacion.push(item)
        },

        getPersonUser:(idP)=>{
            let filter = dataInformacion.filter(item =>item.idPersona === idP)
            let item = filter[0];
            return item;

        },getValuesIdPersona:()=>{
            let aux_Array = [];

            dataInformacion.forEach(item=>aux_Array.push(item.idPersona))

            return aux_Array;
        }
    }

}

let informacionFormacionInglesUniverse = dataFormacionesIngles();


function dataFormacionesUnnicos(){

    let dataInformacion = [];

    return{
        clearAllData:()=>{
            dataInformacion = [];
        },
        getAllData:()=>{
            return dataInformacion;
        },
        addNewItem : (item) =>{
            dataInformacion.push(item)
        },

        getPersonUser:(idP)=>{
            let filter = dataInformacion.filter(item =>item.idPersona === idP)
            let item = filter[0];
            return item;

        },getValuesIdPersona:()=>{
            let aux_Array = [];

            dataInformacion.forEach(item=>aux_Array.push(item.idPersona))

            return aux_Array;
        }
    }

}


let informacionFormacionUnicos = dataFormacionesUnnicos();



//Ahora si viene lo chidoooo
const consultarElementos = async ()=> {


    let primeraSeccion = validarPrimeraParte(); //datos basicos
    let segundaSeccion = validarSegundaParte(); // datos ubicacion
    let terceraParte = validarTerceraParte(); // datos Estudios
    let cuartaParte = validarCuartaParte() //SNI
    let quintaParte = validarQuintaParte() // Idiomas


    if (segundaSeccion===true || terceraParte===true){
        swal({
            title: "Atención",
            text: "Revise los filtros de la búsqueda.",

        });

    }else{

        //Eliminando repositorios.....(Es como empezar de nuevo)
        informacionUsuarioUniverse.clearAllData();
        informacionFormacionUniverse.clearAllData();
        informacionFormacionCientificaUniverse.clearAllData();
        informacionFormacionInglesUniverse.clearAllData();
        informacionFormacionUnicos.clearAllData();


        $("#dataProspectos").DataTable().destroy();

        //mostrando spinner

        document.getElementById('spinner-div').hidden = false
        document.getElementById('resultados').hidden = true

        //let dataGral = [...primeraSeccion,...segundaSeccion,...terceraParte,...cuartaParte,...quintaParte];

        //let dataGral = [..primeraSeccion]
        let dataGral = Object.assign(primeraSeccion,segundaSeccion, terceraParte, cuartaParte, quintaParte)

        let array = [];
        array.push(dataGral);
        let data = JSON.stringify(array);

        let response =  await getDataServer(`obtenerListadoPersonasFiltro`,'POST',data);

        informacionUsuarioUniverse.clearAllData(); //Pivote
        informacionFormacionUniverse.clearAllData() // Formacion Academica
        informacionFormacionCientificaUniverse.clearAllData() // formacion Cientifica

        //response.forEach(item => console.log(item))
        response.forEach(item =>informacionUsuarioUniverse.addNewItem(item)) // Guardando


        let arrayToSendItems =[]; //Items unicos....
        //console.log(informacionUsuarioUniverse.getValuesIdPersona())
        arrayToSendItems.push(...new Set(informacionUsuarioUniverse.getValuesIdPersona())) // Elimina repetidos....



        //Variable auxiliar, para poder generar el algoritmo de cruce.....
        let arraySendItem2 = [];
        arraySendItem2.push(...new Set(informacionUsuarioUniverse.getValuesIdPersona())) // Nuevo elemt para valores unicos


        //console.warn(arraySendItem2)



        //tabla pivote  para formaciones academicas
        let arraySender = [];
        let itemsUnicos = {
            itemsPersona:arrayToSendItems
        }

        let dataDeEstudio = Object.assign(itemsUnicos,terceraParte)
        arraySender.push(dataDeEstudio);
        let dataEstudiosss = JSON.stringify(arraySender);


        //tabla pivote para formaciones cientificas
        let arraySenderCientifico = [];
        let dataDeCientifico = Object.assign(itemsUnicos,cuartaParte)
        arraySenderCientifico.push(dataDeCientifico);
        let dataCienti = JSON.stringify(arraySenderCientifico);


        //Tabla pivote para formaciones Lenguas

        let arraySenderIdioma = [];
        let datadeLengua = Object.assign(itemsUnicos,validarQuintaParte())
        arraySenderIdioma.push(datadeLengua)
        let dataLenguasss = JSON.stringify(arraySenderIdioma);





        //Si aqui el array de personas unicos no tiene ningun elemento, lanzar alerta

        let arrayItemsFormacionesUnicos = [];

        let arrayItemsFormacionesCientificas = [];

        let arrayItemsFormacionLenguas = [];



        if (validarTerceraParte().nivelEstudio !==" "){
            //console.log("Solo nuvel de estudios ");
            informacionFormacionUniverse.clearAllData()
            let dataFormacion = await  getDataServer(`obtenerListadoPersonasEstudios`,'POST',dataEstudiosss);
            //console.log(dataFormacion);

            if (dataFormacion.length>0){

                dataFormacion.forEach(item => informacionFormacionUniverse.addNewItem(item))
                arrayItemsFormacionesUnicos.push(...new Set(informacionFormacionUniverse.getValuesIdPersona())) // Solo mantiene unicos...
                //Em teorica aquio seo debe insertar the value dentro de plantilla To update dataJUE....
            }


        }

        if (validarCuartaParte().distincionCientifica!== " "){
            //console.log("Solo distincion cientifica");

            informacionFormacionCientificaUniverse.clearAllData();
            let dataCientifica = await getDataServer('obtenerListadoPersonasCientifica','POST',dataCienti)
            //console.log(dataCientifica);

            if (dataCientifica.length>0){
                dataCientifica.forEach(item =>informacionFormacionCientificaUniverse.addNewItem(item));
                arrayItemsFormacionesCientificas.push(...new Set(informacionFormacionCientificaUniverse.getValuesIdPersona()))

                //dentro de formacion arrayItemsFormacionesCientificas, existen los ids que pertenecen a esto....
               // console.log(arrayItemsFormacionesCientificas)

            }

        }

        if (validarQuintaParte().idioma !==" "){

            //console.log("Solo distincion idioma----");

            //console.log(dataLenguasss)
            informacionFormacionInglesUniverse.clearAllData();
            informacionFormacionUnicos.clearAllData();
            let dataLinguaa = await getDataServer('obtenerListadoPersonasLengua','POST',dataLenguasss)
            //console.log(dataLinguaa)


            if (dataLinguaa.length>0){
                dataLinguaa.forEach((item)=>{
                    informacionFormacionInglesUniverse.addNewItem(item)
                  //  console.log(item)
                });
                arrayItemsFormacionLenguas.push(...new Set(informacionFormacionInglesUniverse.getValuesIdPersona()))
                console.warn(arrayItemsFormacionLenguas)
            }


        }

        console.log("*************** Academicos, Cientificos, Lenguas******************");
        console.log(arrayItemsFormacionesUnicos);
        console.log(arrayItemsFormacionesCientificas);
        console.log(arrayItemsFormacionLenguas);

        //Aqui entra el algoritmo.....//se tiene que cruzar toda la informacion....

        //console.log(arraySendItem2);

        let losQueCumplen = [];

        losQueCumplen.push(...new Set(arrayItemsFormacionesUnicos),... new Set(arrayItemsFormacionesCientificas),... new Set(arrayItemsFormacionLenguas));

        //console.log(losQueCumplen);

        let itemLosQueCumplenUnicos = [...new Set(losQueCumplen)];
        //console.log(itemLosQueCumplenUnicos) //EN funcion de lo requerido...



        if (itemLosQueCumplenUnicos.length>0){
            //registrado....
            itemLosQueCumplenUnicos.forEach(item => informacionFormacionUnicos.addNewItem(item))
        }


        let funtionsSET = [validarSegundaParte(),validarTerceraParte(),validarCuartaParte(),validarQuintaParte()];

        //generacion de estructura HTML
        let dataEscrituraHead = `<thead>
                                <tr>
                                    <th> </th>
                                    <th>Paterno</th>
                                    <th>Materno</th>
                                    <th>Nombres</th>
                                    <th>CURP</th>
                                    <th>Género</th>
                                    <th>Fecha Nacimiento</th>
                                    ${validarSegundaParte()!==true ? writeFilePrimerFormEmcabezado(validarSegundaParte()): ""}
                                    ${validarTerceraParte()!==true ? writeFileSegundoFormEmcabezado(validarTerceraParte()): ""}
                                    ${validarCuartaParte()!==true ? writeFileTerceroFormEmcabezado(validarCuartaParte()): ""}
                                    ${validarQuintaParte()!==true ? writeFileCuartaFormEmcabezado(validarQuintaParte()): ""}
                                </tr>

                                </thead>

                                <tbody name="resultadosProspectos" id="resultadosProspectos" align="center">

                                    ${validatorRowsPrimeraParte(funtionsSET)}

                                </tbody>`




        document.getElementById('dataProspectos').innerHTML = " "
        //document.getElementById('dataProspectos').innerHTML = dataEscrituraHead
        $('#dataProspectos').append(dataEscrituraHead);

        document.getElementById('spinner-div').hidden = true
        document.getElementById('resultados').hidden = false

        let table =  $('#dataProspectos').DataTable();

    }

}

function validatorRowsPrimeraParte(items){

    let [segunda,tercero,cuarto,quinto] = items
    //console.log(segunda)
    //console.log(tercero)
    //console.log(cuarto)
    //console.log(quinto)

    let loosUnicos = informacionFormacionUnicos.getAllData();

    //console.log(loosUnicos)

    if (loosUnicos.length>0){
        let stringUnque = ``;
        loosUnicos.forEach((item)=>{

            let usuario = informacionUsuarioUniverse.getPersonUser(item)
            /*if (usuario.pais === undefined){
                stringUnque+= validatorFinal(usuario);

            }else{
                stringUnque+= validatorFinal(usuario);
            }*/

            stringUnque+= validatorFinal(usuario);
        })

        return stringUnque;

    }else{


        //console.log(items)

        if (segunda.pais  === " " && tercero.nivelEstudio === " " && cuarto.distincionCientifica === " " && quinto.idioma === " "){
            let dataaa = informacionUsuarioUniverse.getAllData()
            console.log(dataaa)
            let stringGenerator = ``;
            dataaa.forEach((item)=>{

                stringGenerator+= `
                <tr>
                    <td class="sorting_1"><div class="btn-group mr-2"><a title="Ver detalles" class="btn btn-secondary boton" href="/reclutamientoAdministrativo/obtenerPersonaAvanzado/${item.idPersona}"><i class="fas fa-id-card"></i>   </a></div></td>
                    <td>${item.apPaterno}</td>
                    <td>${item.apMaterno}</td>
                    <td>${item.nombres}</td>
                    <td>${item.curp}</td>
                    <td>${item.genero}</td>
                    <td>${item.fechaNacimiento === null || undefined ? "Sin datos": timeChangeToLocal(item.fechaNacimiento)}</td>
                    ${validarSegundaParte()!==true ? writeFilePrimerFormBody(validarSegundaParte(),item): ""}
                </tr>`

            })
            return stringGenerator;
        }

        if (segunda.pais  !== " " && tercero.nivelEstudio === " " && cuarto.distincionCientifica === " " && quinto.idioma === " "){
                    let dataaa = informacionUsuarioUniverse.getAllData()
                    console.log(dataaa)
                    let stringGenerator = ``;
                    dataaa.forEach((item)=>{

                        stringGenerator+= `
                        <tr>
                            <td class="sorting_1"><div class="btn-group mr-2"><a title="Ver detalles" class="btn btn-secondary boton" href="/reclutamientoAdministrativo/obtenerPersonaAvanzado/${item.idPersona}"><i class="fas fa-id-card"></i>   </a></div></td>
                            <td>${item.apPaterno}</td>
                            <td>${item.apMaterno}</td>
                            <td>${item.nombres}</td>
                            <td>${item.curp}</td>
                            <td>${item.genero}</td>
                            <td>${item.fechaNacimiento === null || undefined ? "Sin datos": timeChangeToLocal(item.fechaNacimiento)}</td>
                            ${validarSegundaParte()!==true ? writeFilePrimerFormBody(validarSegundaParte(),item): ""}
                        </tr>`

                    })
                    return stringGenerator;
                }
    }

}





const writeFilePrimerFormEmcabezado = (item) => {

    //console.log(item)

    if (validarSegundaParte().pais === " "){
        return ``;
    }else{
        if (item.pais !== "1"){
            return `<th>País</th>`;

        }else{
            return `<th>País</th>
            <th>Estado</th>
            <th>Municipio</th>`
        }
    }
}

//Objeto de validacion.... el objeto que se obtiene
const writeFilePrimerFormBody = (item, item2) => {
    //console.log(item)

    if (validarSegundaParte().pais === " "){
        return "";
    }else{
        if (item.pais !== "1"){
            return `<td>${item2.pais}</td>`;
        }else{
            return `
            <td>${item2.pais}</td>
            <td>${item2.entidad_Federativa}</td>
            <td>${item2.municipio}</td>`
        }
    }
}

const writeFilePrimerFormBody2 = (item, item2) => {
    //console.log(item)

    if (validarSegundaParte().pais === " "){
        return ``;
    }else{
        if (item.pais !== "1"){
            return `<td>${item2.pais}</td>`;
        }else{
            return `
            <td>${item2.pais}</td>
            <td>${item2.entidad_Federativa}</td>
            <td>${item2.municipio}</td>`
        }
    }
}

const writeFileSegundoFormEmcabezado = (item) => {

    console.log(item)
    let level = parseInt(item.nivelEstudio)

    if (item.nivelEstudio === " "){

        return ``;
    }else{

        if (level === 6 || level >=8){

            return `<th>Nivel estudios:</th>
                     <th>Nombre estudios:</th>`;
        }else{
            return `<th>Nivel estudios:</th>`;
        }

    }

}


const writeFileSegundoFormEmcabezado2 = (item, usuario) => {

    let infoFormacion = informacionFormacionUniverse.getPersonUser(usuario.idPersona)

    //console.warn(infoFormacion)

    let level = parseInt(item.nivelEstudio)

    if (item.nivelEstudio === " "){

        return ``;
    }else{

        if (level === 6 || level >=8){

            return `<td>${infoFormacion.nivelEducativo}</td>
                     <td>${infoFormacion.estudio}</td>`;
        }else{
            return `<td>${infoFormacion.nivelEducativo}</td>`;
        }

    }

}

const writeFileTerceroFormEmcabezado = (item) => {

    console.log(item)


    if (item.distincionCientifica === " "){

        return ``;
    }else{

        return `<th>Distinción:</th>`;

    }



}

const writeFileTerceroFormEmcabezado2 = (item, usuario) => {

    let infoDistinticionCientifica  = informacionFormacionCientificaUniverse.getPersonUser(usuario.idPersona)

    //console.log(infoDistinticionCientifica)
    if (item.distincionCientifica === " "){
        return ``;
    }else{
        return `<td>${infoDistinticionCientifica.perfilCientificoDocente}</td>`;
    }

}

const writeFileCuartaFormEmcabezado = (item) => {
    console.log(item)
    if (item.idioma === " "){
        return ``;
    }else{
        return `<th>Idiomas:</th>`;
    }

}

const writeFileCuartaFormEmcabezado2 = (item, usuario) => {


    let itemsFormacionIngles = informacionFormacionInglesUniverse.getPersonUser(usuario.idPersona)

    //console.log(itemsFormacionIngles)

    if (item.idioma === " "){
        return ``;
    }else{
        return `<td>${itemsFormacionIngles.idioma}</td>`;
    }

}

//se valida nombre, apellidos, curp, genero y edad.....
const validarPrimeraParte  = () => {

    let form_data = $("#buscarEmpleadoForm").serializeJSON();
    let edadPrimaria = parseInt(document.getElementById('skip-value-lower').innerText.split(' ')[0]);
    let edadSecundaria = parseInt(document.getElementById('skip-value-upper').innerText.split(' ')[0]);



    let amaternoProspecto = form_data.amaternoProspecto
    let apaternoProspecto = form_data.apaternoProspecto
    let nombresProspecto = form_data.nombresProspecto
    let curp = form_data.curp
    let edadPrimariaS = edadPrimaria
    let edadSecundariaS = edadSecundaria
    let generoProspecto = form_data.generoProspecto
    let paisS = form_data.pais
    let estadoS = form_data.estado

    //Si esta desmarcada la opcion....dalo como valor null
    if (generoProspecto === "-1"){
        generoProspecto = " ";
    }

    return {

         amaternoProspecto:amaternoProspecto
        ,apaternoProspecto:apaternoProspecto
        ,nombresProspecto:nombresProspecto
        ,curp:curp
        ,edadPrimariaS:edadPrimariaS
        ,edadSecundariaS:edadSecundariaS
        ,generoProspecto:generoProspecto

    };

}


//Ubicacion (Pais, estado, municipio)
const validarSegundaParte = ()=> {

    let form_data = $("#buscarEmpleadoForm").serializeJSON();

    let paisS = form_data.pais
    let estadoS = form_data.estado
    let Municipios = [];

    if (paisS === "-1"){
        paisS = " "
        estadoS = " ";
        Municipios = []; // Longitud vacia

        //retornar objeto....

        return {
              pais: paisS
            , estados: estadoS
            , municipios: Municipios
        };

    }else{

        //Esto es mexico
        //pais mex
        if (paisS === '1'){
            if (estadoS === undefined){
                return true;
            }else{


                //jaja
                let vars = $('#example-getting-started option:selected')
                vars.each((index, value)=>{
                    //console.log(index,value.value, value.innerText)
                    Municipios.push(value.value)
                })

                if (Municipios.length===0){
                    return true; // Debe de seleccionar municipios...
                }else{
                    //Aqui retonar objeto completo
                    return {
                        pais: paisS
                        , estados: estadoS
                        , municipios: Municipios
                    };
                }
            }

        }else{

            return {
                 pais: paisS
                , estados: " "
                , municipios: Municipios
            };

        }
    }

}

//Nivel de estudios.....Se pide validacion
const validarTerceraParte = () =>{
    let form_data = $("#buscarEmpleadoForm").serializeJSON()

    let nivelEstudio = form_data.nivelEstudio
    let nombreEstudio = form_data.nombreEstudio;

    if (nivelEstudio === undefined){

        return{
             nivelEstudio:" "
            ,nombreEstudio: " "
        }
    }else{

        let nivelEstuso = parseInt(nivelEstudio)

        if (nivelEstuso === 6 || nivelEstuso >=8){
            if (nombreEstudio === undefined){
                return true;
            }else{
                return{
                    nivelEstudio:nivelEstudio
                    ,nombreEstudio: nombreEstudio
                }
            }

        }else {
            return{
                nivelEstudio:nivelEstudio
                ,nombreEstudio: " "
            }
        }
    }





}

//DistincionSNI ... Se pide validacion
const validarCuartaParte = () => {
    let form_data = $("#buscarEmpleadoForm").serializeJSON()

    let distincionCIentifica = form_data.distincionPerfil;

    if (distincionCIentifica === "-1"){
        return{
            distincionCientifica:" "
        }
    }else{
        return{
            distincionCientifica: distincionCIentifica
        }
    }

}

//Idiomas
const validarQuintaParte = () => {

    let form_data = $("#buscarEmpleadoForm").serializeJSON()

    let idioma = form_data.idioma;

    if (idioma === "-1"){
        return{
            idioma:" "
        }
    }else{
        return{
            idioma: idioma
        }
    }

}


const validatorFinal =(usuario)=>{


    //console.error(usuario.idPersona);
    if (usuario === undefined){
        return " ";

    }else{


        let dataFormacionAcademic = informacionFormacionUniverse.getPersonUser(usuario.idPersona);
        let dataFormacionCientifica = informacionFormacionCientificaUniverse.getPersonUser(usuario.idPersona);
        let dataFormacionIdiomas = informacionFormacionInglesUniverse.getPersonUser(usuario.idPersona);


        /*console.log(dataFormacionAcademic)
        console.log(dataFormacionCientifica)
        console.log(dataFormacionIdiomas)*/


        let arraycito = [];

        if (dataFormacionAcademic === undefined){
            arraycito.push(undefined)
        }else{
            arraycito.push(true)
        }

        if (dataFormacionCientifica === undefined){
            arraycito.push(undefined)
        }else{
            arraycito.push(true)
        }

        if (dataFormacionIdiomas === undefined){
            arraycito.push(undefined)
        }else{
            arraycito.push(true)
        }

        //dependiendo de las condiciones previas... solo mostrar a la correspondiente persona

        //Que se seleciono en el formaulario??


        let validacionEstudios = validarTerceraParte();
        //console.log(validacionEstudios)

        let validacionCientifica = validarCuartaParte();
        //console.log(validacionCientifica)

        let validacionIdioma = validarQuintaParte();
        //console.log(validacionIdioma)


        let comprobador = [];
        //No esta seleccionado
        if (validacionEstudios.nivelEstudio === " "){
            comprobador.push(undefined)
        }else{
            comprobador.push(true)
        }

        if (validacionCientifica.distincionCientifica === " "){
            comprobador.push(undefined)
        }else{
            comprobador.push(true)
        }

        if (validacionIdioma.idioma === " "){
            comprobador.push(undefined)
        }else{
            comprobador.push(true)
        }


        //console.log(comprobador)
        //console.log(arraycito)
        let comprobadorGet = comprobador.toString() === arraycito.toString();

        //console.log(comprobadorGet)

        if (comprobadorGet){
            //console.log("Esta persona si cumple con todos los parametros... puedes continuar")
            return `<tr>
                    <td class="sorting_1"><div class="btn-group mr-2"><a title="Ver detalles" class="btn btn-secondary boton" href="/reclutamientoAdministrativo/obtenerPersonaAvanzado/${usuario.idPersona}"><i class="fas fa-id-card"></i>   </a></div></td>
                    <td>${usuario.apPaterno}</td>
                    <td>${usuario.apMaterno}</td>
                    <td>${usuario.nombres}</td>
                    <td>${usuario.curp}</td>
                    <td>${usuario.genero}</td>
                    <td>${usuario.fechaNacimiento === null || undefined ? "Sin datos": timeChangeToLocal(usuario.fechaNacimiento)}</td>
                    ${writeFilePrimerFormBody(validarSegundaParte(),usuario)}
                    ${writeFileSegundoFormEmcabezado2(validarTerceraParte(),usuario)}
                    ${writeFileTerceroFormEmcabezado2(validarCuartaParte(),usuario)}
                    ${writeFileCuartaFormEmcabezado2(validarQuintaParte(),usuario)}
                </tr>`;

        }else{
            //Elimina el undefined que se devulve si no existe ningun campo
            return " ";
        }
    }

}
