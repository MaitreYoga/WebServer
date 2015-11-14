# WebServer
Contient l'ensemble des fichiers appelés lors de l'accès au site ZenLounge (HTML, CSS, JS)

Pour cloner le dépôt git :

1 - Aller dans "glassfish4\glassfish\domains\domain1"

2 - Supprimer le dossier "docroot"

3 - Cloner le dépôt en mettant le nom "docroot"

4 - Aller dans "glassfish4\glassfish\domains\payaradomain"

5 - Supprimer le dossier "docroot"

6 - Faites un lien symbolique renvoyant à votre "docroot"

7 - Copiiez le fichier mysql-connector-java-5.1.-bin.jar dans "payara41/glassfish/lib"