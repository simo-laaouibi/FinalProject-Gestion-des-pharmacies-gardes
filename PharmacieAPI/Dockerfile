# Use an official OpenJDK runtime as a base image
FROM openjdk:17-alpine

# Set the working directory in the container
WORKDIR /app

# Copy the JAR file into the container at /app
COPY target/app.jar /app/app.jar

# Expose the port that the Spring Boot application will run on
EXPOSE 9071

# Specify the command to run on container start
CMD ["java", "-jar", "/app/app.jar"]
