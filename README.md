# Teste para estágio Full-Stack

## Table of contents

- [Links](#links)
- [Tecnologias](#tecnologias)
- [Como executar](#como-executar)
- [Sobre Ellos](#sobre-a-ellos-design)

## Links

- [Desing Link figma](https://www.figma.com/file/1Uq4yiUqZD4nVhVGmctnll/Ellos-design-test?t=HxU3IvITdFdwiZkv-6)
- [Live preview](https://m-marketinglanding.000webhostapp.com/)

## Tecnologias

- Html
- Sass, Css
- Javascript (animations)
- bootstrap (modal)
- php (server)
- mySql

## Como executar

- Clone este repositório com o comando abaixo:

```
git clone https://github.com/vini54/teste-frontendDev-ellos.git
```

- Utilizando o programa [XAMPP](https://www.apachefriends.org/pt_br/index.html) como exemplo, inicie o servidor apache e mysql, então copie/cole a pasta desse projeto no caminho de instalação do xampp: "xampp/htdocs"

- Crie o banco e tabela com os seguintes comandos:

```sql
CREATE DATABASE clients;

USE clients;

CREATE TABLE users(
    user_id int not null primary key auto_increment,
    user_name varchar(30) not null,
    user_email varchar(30) not null,
    user_phone varchar(16) not null,
    user_desc varchar(500) not null
);
```

- Modifique o arquivo em "server/conection.php" com as configurações do seu ambiente mySql

- No navegador, acesse "http://localhost/[nomeDaPasta]/"

## Sobre a Ellos Design

A **Ellos Design** é uma agência de marketing e criação de sites localizada em Guarulhos / SP. Somos uma empresa em constante evolução e sempre estamos abertos para pessoas que gostem de tecnologia e queiram trabalhar na área, mas que principalmente queiram aprender e crescer com a nossa empresa.
