//Primer script vista 7 dias
const startFunctions = ()=>{
    setTimeout(()=>{
        ultimosRegistros().then(r => "Log");
    },1000)
}

const ultimosRegistros = async () =>{
    let id = await $.ajax({
        type:'GET',
        url: '/reclutamientoProfesorHoras/ultimosRegistrosProfesor',
        data:{
            _token: $('meta[name="csrf-token"]').attr("content"),
        },
        success: (data)=>{
            let sppiner = document.getElementById('spinner-show').hidden=true;
            let result = document.getElementById('result').hidden=false;
            let values = '';

            console.log(data)
            //Get the Array data
            data.forEach((item)=>{
                values +=
                    `<tr>
                        <td class="sorting_1"><div class="btn-group mr-2"><a title="Ver detalles" class="btn btn-secondary boton" href="/reclutamientoProfesorHoras/detalleProspecto/${item.idPersona}"><i class="fas fa-id-card"></i>   </a></div></td>
                        <td>${item.paterno}</td>
                        <td>${item.materno}</td>
                        <td>${item.nombres}</td>
                        <td>${item.tipoInvitacion}</td>
                    </tr>`;
            });
            let tbody = document.getElementById('resultados');
            tbody.innerHTML = values;
            $('#data1').DataTable();
        }
    }).fail(function (jqXHR, textStatus, errorThrown) {
        console.log("Error. " + errorThrown);
        return "Error al guardar esto" + errorThrown;
    });
}

startFunctions();
