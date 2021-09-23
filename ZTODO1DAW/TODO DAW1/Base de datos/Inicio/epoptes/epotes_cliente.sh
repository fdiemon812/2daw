#!/bin/bash
# Realizado por Rafael Moreno Dionisio
#
# Este script se encarga de instalar el cliente epoptes si es necesario y configurarlo con el nombre del cliente y la dirección del servidor epoptes
#
# si es necesario se puede volver a ejecutar cuantas veces sea necesario cambiar tanto el nombre del cliente como la dirección del servidor
#
# Debe ser ejecutado en cada uno de los PC cliente


if [ $# -ne 2 ]
then
	echo -e "\nERROR: Debe indicar el nombre del host (nombre que tendrá este cliente) y la dirección IP del servidor Epoptes\n"
	echo "USO:"
	echo -e " 	$0 Nombre_Cliente IP_delServer_Epoptes\n"
	echo -e "\nModifica los ficheros /etc/hosts y /etc/hostname con el nombre host(cliente) dado.\nModifica el fichero /etc/default/epoptes-client con la dirección IP dada en el segundo argumento y ejecuta epoptes-client -c \n"
    exit
fi

if ! [ $(id -u) = 0 ]; then
   echo -e "\nERROR: Debes ser root para ejecutar este script.\n"
   exit
fi

if [ ! -f /etc/default/epoptes-client ]; then
	echo "No esta instalado epoptes-client"
	echo "(0) Instalando epoptes-client"
	sudo apt update && sudo apt install epoptes-client -y
fi

    echo "$1" > part0.prov
    lineas=$(wc -l /etc/hosts |cut -d ' ' -f 1)
    head -1 /etc/hosts >part1.prov
    resto=$(echo $lineas -2  | bc)
    echo "127.0.1.1   $1" >>part1.prov
    tail -$resto /etc/hosts >>part1.prov
    mv part0.prov /etc/hostname
    echo "(1) Modificado hostname como $1"
    echo "(2) Modificado hosts como $1"
    mv part1.prov /etc/hosts


    echo "# The server where epoptes-client will be connecting to.">part2.prov
    echo "# If unset, thin client user sessions running on the server will try to connect">>part2.prov
    echo "# to \"localhost\", while thin client root sessions and fat or standalone clients">>part2.prov
    echo "# will try to connect to \"server\".">>part2.prov
    echo "# LTSP automatically puts \"server\" in /etc/hosts for thin and fat clients,">>part2.prov
    echo "# but you\'d need to put \"server\" in DNS manually for standalone clients.">>part2.prov
    echo "SERVER=$2">>part2.prov
    echo "">>part2.prov
    echo "# The port where the server will be listening on, and where the client will try">>part2.prov
    echo "# to connect to. For security reasons it defaults to a system port, 789.">>part2.prov
    echo "#PORT=789">>part2.prov
    echo "">>part2.prov
    echo "# Set Wake On LAN for devices that support it. Comment it out to disable it.">>part2.prov
    echo "WOL=g">>part2.prov
    mv part2.prov /etc/default/epoptes-client
    echo "(3) Modificado epoptes-client con la ip $2"
    echo "(4) Obteniendo certificados lanzando epoptes-client..."
    epoptes-client -c
    echo -e "\n(5)Proceso terminado. Necesita reiniciar.\n"
