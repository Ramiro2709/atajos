<?php

    include "conexion.php";

    $municipios = mysql_query("SELECT * FROM localidades WHERE tipo_localidad = '2' ");
   
    $array_municipios_php = array(); 
    
    $i = 0;
    while ( $municipios_array = mysql_fetch_array($municipios))
    {
        $array_municipios_php[$i]['nombre_municipio'] = $municipios_array['localidad']; //Nombre
        $array_municipios_php[$i]['id_municipio'] = $municipios_array['id_localidad']; //id
        $i++;
        //echo($municipios_array[2]);
    }
    $array_municipios_php['lenght'] = count($array_municipios_php);
    echo json_encode($array_municipios_php);
     
?>