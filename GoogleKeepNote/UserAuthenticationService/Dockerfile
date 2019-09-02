FROM java:8-jre
WORKDIR usr/src
ENV MYSQL_DATABASE=userDb
ENV MYSQL_ROOT_USER=root
ENV MYSQL_ROOT_PASSWORD=root
ENV MYSQL_USER=ganesh
ENV MYSQL_PASSWORD=ganesh
ENV MYSQL_CI_URL=jdbc:mysql://localhost:3306/userDb
ADD ./target/UserAuthenticationService-0.0.1-SNAPSHOT.jar /usr/src/UserAuthenticationService-0.0.1-SNAPSHOT.jar
EXPOSE 8089
ENTRYPOINT ["java","-jar","UserAuthenticationService-0.0.1-SNAPSHOT.jar"]