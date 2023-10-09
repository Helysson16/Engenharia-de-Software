SELECT u.nome AS nome_usuario, a.nome AS nome_administrador
FROM usuario u, usuarioAdm ua, administrador a
WHERE u.cpf = 'CPF_DO_USUARIO'
    AND u.cpf = ua.FK_cpf
    AND ua.FK_codigo = a.codigo;


SELECT email
FROM usuario
WHERE cpf = 'CPF_DO_USUARIO';

SELECT valor
FROM consumo
WHERE fk_id_usuario = 'CPF_DO_USUARIO';

SELECT meta
FROM meta
WHERE fk_id_usuario = 'CPF_DO_USUARIO'
ORDER BY id_meta DESC
LIMIT 1;


SELECT meta
FROM meta
WHERE fk_id_usuario = 'CPF_DO_USUARIO'
    AND id_meta < (SELECT MAX(id_meta) FROM meta WHERE fk_id_usuario = 'CPF_DO_USUARIO');
    
    SELECT cep
FROM usuario
WHERE cpf = 'CPF_DO_USUARIO';


SELECT cpf
FROM usuario
WHERE nome = 'NOME_DO_USUARIO';


