//valida campos vacios
const verifyData = ()=>{

    let flag = false;
    let itemsContainer = document.getElementById('formPassword')
    let items = itemsContainer.getElementsByTagName('input');
    let array = [...items];
    let flags = [];

    array.forEach((items)=>{
        items.value.trim() === '' ? flags.push(true) : flags.push(false);
    });

    if (flags.includes(true)){
        flag = true
    }
    return flag;
}

//Valida valores de campos
const verifyMatch = () =>{
    let flag = false
    let match1 = document.getElementById('password0').value;
    let match2 = document.getElementById('password1').value;

    match2 !== match1 ? flag = true : flag = false;

    return flag;
}

/** Permite caracteres != spaces
 *
 */
const validateSpace = (element) =>{
    let item = document.getElementById(element);
    //console.log("Test");
    let reg = /\s/g;

    item.addEventListener('input', ()=>{
        item.value = item.value.replace(reg,"");
    })
}

function cloneDataForm (){
    let elemento = document.getElementById('formPassword')
    let items = elemento.getElementsByTagName('input')
    let array = [...items];
    let arrayObje = [];

    array.forEach(item => arrayObje.push(item.value.trim()));
    let [pass1,pass2,pass3,pass4] = arrayObje;
    let data = new constructorValues(pass2,pass3,pass4)
    return JSON.stringify(data)
}

function constructorValues(idPass1, idPass2, idPass3){
    this.idPass1 = idPass1;
    this.idPass2 = idPass2;
    this.idPass3 = idPass3;
}

const sendPassword = async ()=>{

    let id = await $.ajax({
        type: 'POST',
        url: '/definePass',
        data:{
            '_token': $('meta[name="csrf-token"]').attr('content'),
            'idPass' : cloneDataForm()
        },success:(data)=>{

            //console.log(data)
            showResponses(data)
        }
    }).fail(function (jqXHR, textStatus, errorThrown) {
        console.log("Error. " + errorThrown);
        /*return "Error al guardar esto" + errorThrown;*/
        swal({
            title:"Atención",
            text:`Error: ${errorThrown}`
        });
    });
}

function showResponses(data){
    if(data.errors){
        let arry = data.errors.map((item)=>{
            return '• '+item+'.<br>';
        }).join('');
        swal(
            {
                html: true,
                title: 'Atención',
                text: arry
            }
        );
    }
    if (data.noError == 1){
        //console.log(data.mensaje);
        swal(
            {
                html: true,
                title: 'Atención',
                text: data.mensaje
            }
        );
    }
    if (data.noError == 0){
        swal({
            title: "Registro exitoso!",
            text: "Se ha generado la contraseña, será redirigido al sitio e ingresará el usuario y la contraseña definida, " +
                "Espere un momento, por favor.",
            type: "success",
            timer: 4000,
            showConfirmButton: false
        }, function(){
            window.location.href = "/bolsa-trabajo/login";
        });

        //console.log(data);
    }
}

function enviarContrasenia(){

    let alerts = '';
    let alerta = [];

    if (verifyData()){
        let alert1 = '• Los campos no deben de quedar vacios. <br/>'
        alerts+=alert1;
        alerta.push(true);
    }

    if (verifyMatch()){
        let alert2 = '• Las contraseñas no coinciden. <br/>'
        alerts+=alert2;
        alerta.push(true)
    }

    if (alerta.includes(true)){

        swal({
            title: "Atención",
            text: alerts,
            html: true
        });

    }else{

        sendPassword();

    }

}

function prevDefault(item){
    $(`#${item}`).bind('copy paste cut',function(e) {
        e.preventDefault(); return false;
    });
}

function start(){
    validateSpace('password0');
    validateSpace('password1');

    prevDefault('password0');
    prevDefault('password1');

}

start();
