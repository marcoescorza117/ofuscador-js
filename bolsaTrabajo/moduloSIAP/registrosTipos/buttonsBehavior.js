/***
 * Muestra el formulario de la seccion
 */

//Funciones legacy---- NO TOCAR
const btnEdit = (itemInfo,itemForm,itemButton) =>{
    $('#'+itemInfo).hide('fast');
    $('#'+itemForm).show('fast');
    $('.'+itemButton).hide('fast');

}

const btnCancel = ( itemInfo,itemForm,itemButton)=>{
    $('#'+itemForm).hide('fast')
    $('#'+itemInfo).show('fast')
    $('.'+itemButton).show('fast');
}
//Remover funciones anteriores en cuanto se pasen todos los componentes

const editarInformacion = (btnEdit, comTitle, comInfo ) =>{

    if (statusDatosGenerales.getStatusRequest().includes(true)
        && statusDatosGenerales.getEstadoEdicion() !== true){
        visibilityComponent(btnEdit, true);
        visibilityComponent(comTitle, false);
        removeItemComponent(comInfo);
        return true
    }else{
        return  false;
    }
}

//Lo ideal seria que con esta funcion se eliminen los "componentes" de la primera seccion
//No se deben de permancer en estado "hidden": esto es propenso a fallos dentro de la app.
//-----WORKING-----
const cancelChanges =  (element, botones, titulo, state)=>{
    let item = document.getElementById(element);
    item.remove();
    visibilityComponent(botones, false);
    visibilityComponent(titulo, false);

    let dataServer = state.getStateGral()
    setdatosGenerales(dataServer[0]);
    state.setEstadoEdicionFinal();
}

const sendServerDatosGenerales = async ()=>{

    //validaciones -- en caso de existir imagen que pase a lo siguiente
    if(getItemImage()){
        /*if( validateFieldsDatosGenerales() ||validateRFC() ||imageValidate() ){*/
        if( validateFieldsDatosGenerales() || imageValidate() ||validateRFC()){
            swal({
                title: "Atención",
                text: "• Verifique que la imagen y los campos contengan valores válidos.",
                type: "warning"
            });
        }else{
            console.log("Con foto")
            visibilityComponent('section-data-form', true);//1.-Ocultar formulario
            visibilityComponent('section-skeleton_datos-grales', false)//2.-Mostrar skeleton
            let envioP = await sendFilePhoto('editarFotoUsuario','imageUpload');//3.-En este caso se tiene que enviar imagen

            //Si la solucitud del envio de foto es satisfactorio...
            //console.log(envioP)
            if (showResponseEnc(envioP)){

                //Procedo a enviar informacion
                let envio = await servicesEditarDatosGenerales('editarInfoUsuario', 'POST', datosGeneralesGenerator());

                //si el envio de informacion es satisfactorio....
                if (showResponseEnc(envio)){

                    swal({
                        title: 'Atención',
                        text: ' Datos guardados con éxito.',
                        type: "success",

                    },function (){
                    })

                    await  getPeticionDatos() // obtiene datos
                    visibilityComponent('section-skeleton_datos-grales', true)
                    removeItemComponent('section-data-form');  // remueve item formulario
                }else{
                    //tiene que devolver lo contrario
                    visibilityComponent('section-skeleton_datos-grales', true) // Oculta skeleton
                    removeItemComponent('section-data-form');  // remueve item formulario
                    formDatosGenerales(); // muestra item general
                    statusDatosGenerales.setEstadoEdicion();
                }
            }else {
                //Si hay error en back... tiene que hacer esto
                visibilityComponent('section-skeleton_datos-grales', true) // Oculta skeleton
                removeItemComponent('section-data-form');  // remueve item formulario
                formDatosGenerales(); // muestra item general
                statusDatosGenerales.setEstadoEdicion(); // Pone estado inicial
            }
        }

    }else{

        console.log("Sin foto")

        if (validateFieldsDatosGenerales() ||validateRFC()){
            swal({
                title: "Atención",
                text: "• Verifique que los campos tengan valores válidos.",
                type: "warning"
            })
        }else{

            //Procedo a enviar informacion
            let envio = await servicesEditarDatosGenerales('editarInfoUsuario', 'POST', datosGeneralesGenerator());

            //si el envio de informacion es satisfactorio....
            if (showResponseEnc(envio)){

                swal({
                    title: 'Atención',
                    text: ' Datos guardados con éxito.',
                    type: "success",

                },function (){
                })

                await  getPeticionDatos() // obtiene datos
                visibilityComponent('section-skeleton_datos-grales', true)
                removeItemComponent('section-data-form');  // remueve item formulario
            }else{
                //tiene que devolver lo contrario
                visibilityComponent('section-skeleton_datos-grales', true) // Oculta skeleton
                removeItemComponent('section-data-form');  // remueve item formulario
                formDatosGenerales(); // muestra item general
                statusDatosGenerales.setEstadoEdicion();
            }

        }


        /*Revisando error
        if(validateFieldsDatosGenerales() /!*||validateRFC()*!/){
            swal({
                title: "Atención",
                text: "• Verifique que los campos tengan valores válidos.",
                type: "warning"
            })
        }else{
            visibilityComponent('section-skeleton_datos-grales', false)
            visibilityComponent('section-data-form', true);

            let envio = await servicesEditarDatosGenerales('editarInfoUsuario', 'POST', datosGeneralesGenerator());
            await getPeticionDatos();
            console.log(envio);
            removeItemComponent('section-data-form');

            showResponse(envio,null, statusDatosGenerales, formDatosGenerales);
        }*/
    }

    /*if(validateFieldsDatosGenerales() ||validateRFC()){
        swal({
            title: "Atención",
            text: "• Verifique que los campos tengan valores válidos."
        })
    }else{

        let envio = await servicesEditarDatosGenerales('editarInfoUsuario', 'POST', datosGeneralesGenerator());
        console.log(envio);

        //removiendo ccmponente formaulario
        removeItemComponent('section-data-form');
        //Mostrando skeleton
        visibilityComponent('section-skeleton_datos-grales', false)
        showResponse(envio,getPeticionDatos, statusDatosGenerales, formDatosGenerales);
    }*/
}

const getPeticionDatos = async  ()=>{
    let awRequest = await datosRequest('obtenerinfoUsuario' , 'GET', 'buttons-data-gral','section-skeleton_datos-grales', statusDatosGenerales);
    visibilityComponent('gral-options-button', false)
}

////




//???
/*
const guardarInformacionNacimiento = ()=>{

    guardarInformacionNac();
}
*/



const editarInformacionSS = () =>{
    editarInformacionSegSocia();
}

const cancelarCambiosSS = () =>{
    cancelarInformacionSegSocial();
}


const guardarCambiosSSS = () =>{
    guardarInformacionSS();
}








