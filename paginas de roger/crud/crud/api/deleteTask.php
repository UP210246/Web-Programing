<?php

include "./partials/Connection.php";

$taskId = $_POST['taskId'];

try {
    $deleteStatement = $conn->prepare("DELETE FROM task WHERE idTask = ?");
    $deleteStatement->execute([$taskId]);

} catch (PDOException $e) {
    echo json_encode();
}
?>