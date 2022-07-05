function verificando(){
    swal({
        title:"Atención",
        text: "Solicitud enviada correctamente, " +
            "verifique el correo electronico y siga las instrucciones"

    });
}

//Verificar datos vacios
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

//verifica valores de campos

const verifyMatch = () =>{
    let flag = false
    let match1 = document.getElementById('user').value;
    let match2 = document.getElementById('user1').value;
    match2 !== match1 ? flag = true : flag = false;

    return flag;
}

//permite campos menos ' '
const validateSpace = (element) =>{
    let reg = /\s/g;
    element.value = element.value.replace(reg,"");
}

function cloneDataForms(){
    let elemento = document.getElementById('formPassword')
    let items = elemento.getElementsByTagName('input')
    let array = [...items];
    let arrayObje = [];

    array.forEach(item => arrayObje.push(item.value.trim()));

    let [pass1,pass2, pass3] = arrayObje;
    let data = new constructorValues(pass1,pass2, pass3);
    return JSON.stringify(data);

}

function constructorValues(idPass1, idPass2, idPass3){
    this.idPass1 = idPass1;
    this.idPass2 = idPass2;
    this.idPass3 = idPass3;
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
        let alert2 = '• Los campos no coinciden. <br/>'
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

        //console.log("All alright")
        sendUser();

    }

}


const sendUser = async  () =>{
    let id = await $.ajax({
        type: 'POST',
        url: '/definePasswithUser',
        data:{
            '_token': $('meta[name="csrf-token"]').attr('content'),
            'data' : cloneDataForms()
        },success:(data)=>{

            //console.log(data)
            showResponses(data)
        }
    }).fail(function (jqXHR, textStatus, errorThrown) {
        console.log("Error. " + errorThrown);
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
        sendUserMail(data);
        console.log(data);
    }
}

const sendUserMail = async (data)=>{

    let id = await $.ajax({
        type: 'POST',
        url: '/definePassWithUser2',
        data:{
            '_token': $('meta[name="csrf-token"]').attr('content'),
            'dataSend':data,

        },success:(data)=>{

            console.log(data)
            swal({
            title: "Recuperación de contraseña exitosa!",
            text: "Solicitud enviada correctamente, " +
                "Verifique su correo electrónico y siga las instrucciones para definir su nueva contraseña",
            type: "success",
            timer: 4000,
            showConfirmButton: false
        }, function(){
            window.location.href = "/bolsa-trabajo/login";
        });
        }
    }).fail(function (jqXHR, textStatus, errorThrown) {
        console.log("Error. " + errorThrown);
        swal({
            title:"Atención",
            text:`Error: ${errorThrown}`
        });
    });

}



function prevDefault(item){
    $(`#${item}`).bind('copy paste cut',function(e) {
        e.preventDefault(); return false;
    });
}

function start(){
    prevDefault('user');
    prevDefault('user1');
}

start();

