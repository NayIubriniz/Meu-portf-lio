<?php
if ($_SERVER["REQUEST_METHOD"] == "POST"){
    $nome = $_POST['nome'];
    $email = $_POST['email'];
    $mensagem = $_POST['mensagem'];

    //Config email
    $to = "nayra_iubriniz@outlook.com";
    $subject = "Mensagem de Contato";
    $body = "Nome: $nome\nE-mail: $email\nMensagem: $mensagem";

    $headers = "From: $email\r\nReply-To: $email";
    //Enviar o e-mail

    if(mail($to, $subject, $body, $headers)){
        echo "Mensagem enviada com sucesso";
    }else{
        echo "Erro ao enviar a mensagem";
    }
}else{
    echo "Acesso Inválido";
}
?>