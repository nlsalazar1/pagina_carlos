//console.log('funcionando');

var formulario = document.getElementById('formulario');
var respuesta = document.getElementById('respuesta');

formulario.addEventListener('submit', function(e){
    e.preventDefault();
    console.log('me diste un click')

    var datos = new FormData(formulario);

    console.log(datos.get('usuario'))
    console.log(datos.get('pass'))

    var usu = datos.get('usuario')
    var cla = datos.get('pass')

    if(usu === '' || cla=== ''){
        respuesta.innerHTML = `
                <div class="alert alert-danger" role="alert">
                    Llena todos los campos
                </div>
                `
    }
    if(usu === 'usuario.com' & cla=== 'entrada'){
        respuesta.innerHTML = `
                <div class="alert alert-primary" role="alert">
                    Ingreso Exitoso                    
                </div>
                `
        window.location.href = 'https://node-red-ksros-2021-07-04.us-south.cf.appdomain.cloud/ui/#!/0?socketid=QTa78MxoZdB063LJAAAA'
    }
    if(usu != 'usuario.com' || cla != 'entrada' ){
        respuesta.innerHTML = `
                <div class="alert alert-danger" role="alert">
                    El ususario o la clave son incorrectos
                </div>
                `
    }   
})