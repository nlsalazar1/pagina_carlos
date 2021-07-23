<?php

$usuario = $_POST['usuario'];
$pass = $_POST['pass'];

if($usuario === '' || $pass=== ''){
    echo json_encode('error');
}
if($usuario === 'usuario.com' & $pass=== 'entrada'){
    echo json_encode('correcto');
}
if($usuario != 'usuario.com' || $pass != 'entrada'){
    echo json_encode('incorrecto');
}