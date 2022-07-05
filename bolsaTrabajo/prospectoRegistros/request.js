//Lazy loading....
const isIntersecting = (entry) =>{
    return entry.isIntersecting;
}


async function registrarContenido(contenido, callback){

    let itemFun = callback;
    const observer = new IntersectionObserver((entries)=>{
        entries.filter(isIntersecting).forEach(loadContent)
    });
    observer.observe(contenido);
    console.log(`observando item...TYPE:${contenido}--id:${contenido.id} `);
    //anon function..
    async function loadContent(entry){
        console.log(`你好`)
        let item = document.getElementById(entry.target.id);
        observer.unobserve(item);
        console.log("des-registrando componente");
        console.log("++++++Ejecutando function++++++++++");
        await itemFun();
        console.log("+++++Funcion EJECUTADA****")
    }
}

async function observerElement(item, callback){
    let items = document.getElementById(item);
    await registrarContenido(items, callback);
}

//Observer para modulo candidato registro

observerElement('skeleton-loader-Nacimiento', showInfoNacimiento).then(r => console.log("Componente registrado - prospecto....")) //Observer para datos de nacimiento
observerElement('skeleton-loader-Social', showInfoSegSocial).then(r => console.log("Componente registrado - prospecto...")); // Observer para datos de seguridad social...
observerElement('skeleton-loader-Comunicacion', showInfoComunicacion).then(r => console.log("Componente registrado - prospecto...")); // observer para datos de comunicacion...
observerElement('contenedorSkeletonDomicilio',showDatosDomicilio).then(r => console.log("Componente registrado - prospecto..."));  // observer para datos de domicilio...


observerElement('skeleton-loader-general-Curriculares', showcargaFormacionAcademicaDOCS).then(r => console.log("Componente registrado - prospecto")); // Obserever para datos de documentos
observerElement('contenedorSkeletonFrmAcademica', showFormacionAcademicaFormacion).then(r => console.log("Componente registrado - prospecto")); // Obserever para datos de formacion Academica
observerElement('contenedorSkeletonFrmCientifica', showFormacionesCientificas).then(r => console.log("Componente registrado - prospecto")); // Obserever para datos de formacion Cientifica
observerElement('contenedorSkeletonFrmAdicional', showFormacionesAdicionales).then(r=>console.log("Componente registrado - prospecto"));
//observerElement('contenedorSkeletonFrmLaboral', showFormacionesLABORALes).then(r => console.log("Componente registrado - prospecto")); //Comentado para revision 08062002
//observerElement('contenedorSkeletonFrmTICS', showFormacionTICS).then(r => console.log("Componente registrado - prospecto")); //comentado para revision 08062002
observerElement('contenedorSkeletonFrmLengua', showFormacionesLinguisticas).then(r => console.log("Componente registrado - prospecto"));

//observerElement('contenedorSkeletonEntrevista', showMostrarEntrevista).then(r => console.log("Componente registrado - prospecto")); // Comentado para revision 08062002
//observerElement('contenedorSkeletonFamiliares', showMostrarFamiliares).then(r => console.log("Componente registrado - prospecto"));
observerElement('contenedorSkeletonFamiliares', showFormacionesFAMILIARPariente).then(r => console.log("Componente registrado - prospecto"));
observerElement('contenedorSkeletonAdicional', showMostrarAdicionales).then(r => console.log("Componente registrado - prospecto"));

observerElement('contenedorSkeletonDocumentosPersona', showDocumentacionPersonal).then(r => console.log("Componente registrado - prospecto"));
