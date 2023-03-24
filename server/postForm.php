<?php 
include("conection.php");

$name = $_POST['name'];
$email = $_POST['email'];
$phone = $_POST['phone'];
$desc = $_POST['desc'];

$sql = "INSERT INTO users (user_name, user_email, user_phone, user_desc) VALUES ('$name', '$email', '$phone','$desc')";

if ($conn->query($sql) === TRUE) {
    echo "Dados inseridos com sucesso!";
} else {
    echo "Erro ao inserir dados: " . $conn->error;
}

$conn->close();
?>