<?php

include "./partials/Connection.php";

$idSelectedTask = $_GET['selectedTaskId'];

try{
    $SQL = "select u.id , u.firstName, t.idTask, t.title
    from user u inner join task t
    on  u.id = t.idUser
    where t.idTask = :idTask;";

    
    $state = $conn->prepare($SQL);
    $state->bindParam(':idTask', $idSelectedTask);
    $state->execute();

    $json = [];
    while($row = $state->fetch(PDO::FETCH_ASSOC)){
        array_push($json, [
            "iduser" => $row['id'],
            "name" => $row['firstName'],
            "idtask" => $row['idTask'],
            "title" => $row['title'] 
        ]);
    }

    echo json_encode($json);
}catch(PDOException $e){
    die($e->getMessage());
}
