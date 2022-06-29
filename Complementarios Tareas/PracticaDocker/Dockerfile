#Primero se va a declarar la version de node a utilizar
FROM node:17
# Creamos la ruta para almacenar el proyecto dentro del docker
RUN mkdir  -p /usr/src/www
# Se define donde se va a trabajar
WORKDIR /usr/src/www
# Se copia el archivo del package.json para poder instalar las dependencias y modulos necesarios
COPY package*.json ./
# Se define el comando para ejecutar la instalacion de package
RUN npm install 
# A continuación se copiará en la ruta
COPY . .
#El puerto a exponer será
EXPOSE 5000
#Comando de ejecucion del proyecto
CMD [ "npm", "start"]