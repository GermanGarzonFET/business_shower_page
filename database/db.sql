
use business_shower_page;

CREATE TABLE registros(
    id INT(11) NOT NULL,
    nombre_completo VARCHAR(255) NOT NULL,
    nombre_empresa VARCHAR(255) NOT NULL,
    correo VARCHAR(255) NOT NULL,
    numero_celular VARCHAR(15) NOT NULL,
    numero_nit VARCHAR(25) NOT NULL
);

ALTER TABLE registros
    ADD PRIMARY KEY (id);

ALTER TABLE registros
    MODIFY id INT(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=1;