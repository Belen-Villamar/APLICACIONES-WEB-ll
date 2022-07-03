# Aplicaciones Web II - Sexto A

- Nombres: Villamar Alcívar María Belén.
- Sexto A
- Segundo Parcial
## Complementario 1 - Dockers
## Tabla de contenido
1. [Dockerfile](#dockerfile)
2. [Docker Compose](#docker-compose)

## Dockerfile
***
1. Se crea  el archivo de **Dockerfile**.

2. Se detalla la configuración para la implementación de docker.

3. A crear la imagen antes de comenzar con los contenedores, ejecutando el comando de:
```
docker-compose build 
```
4. Posteriormente, se agrega la salida de cada contenedor ejecutando el comando de:
```
docker-compose up 
```

## Docker Compose
***
En el Docker Compose se establece  la versión y servicios en en el archivo de **docker-compose.yml** como se detallará a continuación:

1. version: Indica que versión de docker-compose se va a utilizar para la cual trabajaremos con la versión 3.

2. services: Indica los diferentes servicios que vamos a utilizar y cada uno de ellos será convertido en un contenedor.

3. depends_on:  Indica que se tiene un contenedor que depende de otro en este caso dependemos de mongo.

4. environment: Permite enviar variables de entorno a nuestro contenedor, normalmente las imágenes utilizan estas variables para distintos temas de configuración para la cual asignaremos MONGODB_CNN.

5. ports: Los puertos que van a enrutar desde el exterior del contenedor al interior para el cual asignamos 3000 por defecto y en el mongo 27017.

6. image: Permite indicar que imagen se a utilizar en este caso la de mongo.
7. command: Sobreescribe el comando predeterminado del contenedor. Se ejecuta el siguiente comando cuando inicia un servicio:
```
 mongod --quiet --logpath /dev/null.
```
