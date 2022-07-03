# APLICACIONES WEB II
# Nombres: Villamar Alcívar María Belén.
# Curso: Sexto "A" 
#Segundo Parcial

# Complementario 1 - Docker.

# Permite establecer a la imagen base node.
FROM node
# Se copia los archivos y directorios de la imagen de app.
COPY . /app
# Se cambiar de directorio actual en app.
WORKDIR /app 
# Permite copiar todos los archivos del package.json utilizados.
COPY package*.json ./
# Se ejecuta el comando de imagen durante el proceso de construcción, de manera que, 
# instala todos las librerías y paquetes que se utilizaron hacía la imagen del docker.
RUN npm install
# Se define la asignación de puerto para contenedores en ejecución, en este caso se trabajó con el puerto 3000
EXPOSE 3000
# Se establece argumentos estándar para el inicio del contenedor y se ejetuta en el index.js
CMD [ "node", "dist/index.js" ]
