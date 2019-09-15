FROM openjdk:11.0.4-jre-stretch
WORKDIR /api
CMD ["java", "-jar", "./build/libs/feedback-0.0.1-SNAPSHOT.jar"] 
