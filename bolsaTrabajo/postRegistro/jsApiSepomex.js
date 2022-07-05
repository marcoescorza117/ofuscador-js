let arrayApiCODIGOPOSTAL = [];
let ArrayColonias = [];
const obtenerEstadosApi =(element)=>{
    var idPais = element.value;
    if (idPais ==="1"){

        eliminarCatalogoOcultarAPI('estadoResidencia');
        eliminarCatalogoOcultarAPI('municipioResidencia')
        eliminarCatalogoOcultarAPI('coloniaResidencia');
        getEstadosApi();

    }else{

        let cp = document.getElementById('codigopostalResidencia');
        cp.value ='';
        eliminarCatalogoOcultarAPI('estadoResidencia');
        eliminarCatalogoOcultarAPI('municipioResidencia')
        eliminarCatalogoOcultarAPI('coloniaResidencia');

    }


}


const getEstadosApi = () => {

    $.ajax({
        type: 'GET',
        url: '/getEstados',
        data: {
            '_token': $('meta[name="csrf-token"]').attr('content'),
        }, success: (data) => {
            var catalogo = document.getElementById('estadoResidencia');
            //Eliminando elemento 0
            data.splice(0, 1);
            //remover opciones y agregando opcion
            eliminarCatalogoOcultarAPI('estadoResidencia');
            data.forEach((item) => {
                var option = document.createElement('option')
                option.value = item.idEntidadFederativa;
                //option.value = item.institucionAfore;
                option.text = item.entidadFederativa;
                catalogo.add(option);
            });

            console.table(data);

        }
    });
}


const obtenerMunicipioApi = (element) => {

    //valor select actual
    var valor = element.value;
    $.ajax({
        type: 'GET',
        url: '/getMunicipios/' + valor,
        data: {
            '_token': $('meta[name="csrf-token"]').attr('content'),
        }, success: (data) => {

            console.table(data);
            var catalogo = document.getElementById('municipioResidencia');

            eliminarCatalogoOcultarAPI('municipioResidencia');
            let cp = document.getElementById('codigopostalResidencia');
            cp.value ='';
            eliminarCatalogoOcultarAPI('coloniaResidencia');

            data.forEach((item) => {
                var option = document.createElement('option')
                option.value = item.idMunicipio;
                //option.value = item.institucionAfore;
                option.text = item.municipio;
                catalogo.add(option);
            });


        }
    });


}


const eliminarCatalogoOcultarAPI = (item) => {

    //Remueve elementos para no sobreescribir
    var catalogo = document.getElementById(item)
    for (let i = catalogo.length; i > 0; i--)
        catalogo.remove(i - 1);

    //Agregando opcion 1
    var optionDisable = document.createElement('option');
    optionDisable.selected = true;
    optionDisable.text = "...";
    optionDisable.disabled = true;
    catalogo.add(optionDisable);

}

const getCPMunicipio = (sel)=>{
    let textoSelect = sel.options[sel.selectedIndex].text;
    let cp = document.getElementById('codigopostalResidencia');
    cp.value ='';
    renderData(textoSelect);

}


async function getCPSMunicipios (textoSelect) {

    let municipio = textoSelect;
    let url = "https://api-sepomex.hckdrk.mx/query/get_cp_por_municipio/"+municipio;
    try{
        let rest = await fetch(url);
        return await rest.json();

    }catch (error){
        console.log(error)
    }
}

async function renderData(textoSelect){

    let datos = await getCPSMunicipios(textoSelect);
    let response1 = datos.response;
    arrayApiCODIGOPOSTAL=[];
    arrayApiCODIGOPOSTAL.push(response1.cp);
    console.log(arrayApiCODIGOPOSTAL);
}

const verificadorCP = (element)=>{

    //console.log(element.value);
    let text = element.value;

    //console.log(text.length);
    if (text.length === 5){
        let array2 = [];
        //console.log("verificacion");
        console.log(text);
        arrayApiCODIGOPOSTAL.forEach((item)=>{
            item.forEach(item2 =>{
                array2.push(item2);
            });
        });

        if (array2.includes(text)){
            console.log("Si esta el CP")
            eliminarCatalogoOcultarAPI('coloniaResidencia');
            renderCP(text);
        }else{
            console.log("No esta el CP:")
            eliminarCatalogoOcultarAPI('coloniaResidencia');
        }
    }
}


async function getColoniaxCP (element){
    let cp = element;
    let url = "https://api-sepomex.hckdrk.mx/query/get_colonia_por_cp/"+element;
    try{
        let rest = await fetch(url);
        return await rest.json();
    }catch (error){
        console.log(error);
    }
}

async function renderCP(element){
    let data = await getColoniaxCP(element);
    ArrayColonias = [];
    ArrayColonias.push(data.response.colonia);
    let catalogoColonias = document.getElementById('coloniaResidencia')
    eliminarCatalogoOcultarAPI('coloniaResidencia');
    ArrayColonias.forEach((item)=>{
        //console.log(item);
        item.forEach((item2, index2)=>{
            //console.log(item2);
            var option = document.createElement('option')
            //console.log(index2+1)
            option.value = index2;
            option.text = item2;
            catalogoColonias.add(option);

        })

    });
}
