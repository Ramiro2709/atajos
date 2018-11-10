<?php

    include "conexion.php";

    ////// ++++++ Para recibir el POST del ts
    $postdata = file_get_contents("php://input");
    $request = json_decode($postdata);
    $Localidad = $request->localidad;
    $Categoria = $request->categoria;
    $tipo_localidad = $request->tipo_localidad;
    //echo json_encode($Localidad);

    if ($tipo_localidad <= 2)
    {
        $sql = "SELECT * FROM telefonos WHERE id_localidad = '$Localidad' AND id_categoria='$Categoria' ";
    } else{
        $sql = "SELECT * FROM telefonos WHERE id_localidad = '$Localidad'";
    }
    $telefono = mysql_query($sql);
   
    $array_telefono_php = array(); 
    
    $i = 0;
    while ( $telefono_array = mysql_fetch_array($telefono))
    {
        $array_telefono_php[$i][0] = $telefono_array[2]; //Nombre
        $array_telefono_php[$i][1] = $telefono_array[3]; //Direccion
        $array_telefono_php[$i][2] = $telefono_array[4]; //Telefono
        $array_telefono_php[$i][3] = $telefono_array[5]; //Pagina Web
        //$array_telefono_php[$i][3] = $telefono_array[6]; //Imagen
        $i++;
        //echo($telefono_array[2]);
    }
    $array_telefono_php['lenght'] = count($array_telefono_php);
    echo json_encode($array_telefono_php);
    //echo $Localidad;
    //echo json_encode($Localidad);
    /*
    $postdata = file_get_contents("php://input");
    $request = json_decode($postdata);
    $Localidad = $request->localidad;
    */
    //echo json_encode('Hola');
     
?>