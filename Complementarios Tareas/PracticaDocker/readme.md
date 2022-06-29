## instalar los modulos del proyecto para poder ejecutar
Primero se debe crear el package.json en la carpeta principal con el comando "npm init -y".
## Instalar modulos para el proyecto
A continuación se procede a instalas 2 modulos en la carpeta principal con el comando 
npm i express mongoose.
## Configuracion en el docker
Como primera instancia se debe tener instalado docker y su extención en Visual Studio Code, seguido de esto denominaremos un archivo como "docker-compose.yml" el cual cumplirá la función de componer distintos contenedores o imagenes para realizar las conecciones, es decir,que creará todo lo que necesita la aplicación para que funcione correctamente.
## Recordatorio
Para instalarse docker compose se debe de ejecutar el siguiente comando en el powershell "[Net.ServicePointManager]::SecurityProtocol = [Net.SecurityProtocolType]::Tls12".
 luego se debe instalar la versión actual con el comando "Invoke-WebRequest "https://github.com/docker/compose/releases/download/1.24.1/docker-compose-Windows-x86_64.exe" -UseBasicParsing -OutFile $Env:ProgramFiles\Docker\docker-compose.exe". Una vez ya instado vamos a verificar si se instaló correctamente con el comando "docker-compose --version".
## Generar en docker
Para esto se utilizará el siguiente comando "docker-compose build".
## Ejecución del proyecto desde docker
Ejecutamos el comando "docker-compose up" para poder inicializarlo.
## Detención del contenedor del docker
Para detener los servicios ejecutamos utilizaremos el comando "docker-compose stop".
