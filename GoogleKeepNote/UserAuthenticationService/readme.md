## GoogleKeepNote Assignment

### Problem Statement

In this case study KeepNote Step 6 - UserAuthenticationService, We will write main class for spring boot Application, model class, repository class, service class and interface, logging aspect.

### Steps to be followed:

    Step 1: Add relevant dependencies in pom.xml file. 
        Note: Read the comments mentioned in pom.xml file for identifying the relevant dependencies.
    Step 2: Create AuthenticationServiceDB.
    Step 3: Write code for model class(i.e User class).
    Step 4: Write code for UserAuthenticationRepository if needed.
    Step 5: Run UserAuthenticationRepositoryTest.java. 
    step 5: Go thru UserAuthenticationService methods. Don't change any method.
    step 6: Go thru exception classes.
    step 7: Implement UserAuthenticationService methods in UserAuthenticationServiceImpl class.
    Step 8:  Run UserAuthenticationServiceTest.java.
    step 9: Write code for UserAuthenticationController class.
    step 10: Write the code for JWT token generation in jwt package.
    step 11: Write the code for Swagger configuration in config package.
    step 12: Go thru UserAuthenticationServiceApplication.java class.
    step 13: Run UserAuthenticationControllerTest.java class.
    step 14: Run Spring boot application (i.e Run As -> spring boot app).


### Project structure

The folders and files you see in this repositories, is how it is expected to be in projects, which are submitted for automated evaluation by Hobbes

    Project
	|
	├── com.google.keepnote
	|	    └── UserAuthenticationServiceApplication.java               // Spring boot's main class
	├── com.google.keepnote.config             
    |       └── SwaggerConfig.java                                      // This class implements the Swagger configuration for documenting the APIs.
	├── com.google.keepnote.controller
	|		└── UserAuthenticationController.java                       // This class is responsible for processing all requests related to UserAuthentication and builds an appropriate model and passes it to the view for rendering.
	├── com.google.keepnote.jwt             
    |       └── SecurityTokenGenerator.java                             // This class implements the logic to generate JWT token.
	├── com.google.keepnote.model
	|		└── User.java                                               // This class will be acting as the data model.
	├── com.google.keepnote.repository
	|		└── UserAuthenticationRepository.java                       // This class is implementing the epository interface for UserAuthentication Repository
	├── com.google.keepnote.service
	|		└── UserAuthenticationService.java                          // This interface contains all the behaviours of UserAuthenticationRepository
	|		└── UserAuthenticationServiceImpl.java                      // This class implements the UserAuthenticationService interface. This class has to be annotated with @Service annotation.
	├── com.google.keepnote.test.controller                         // All the controller test cases classes are made available in this package
	|		└── UserAuthenticationControllerTest.java
	├── com.google.keepnote.test.repository                         // All the repository test cases classes are made available in this package
	|		└── UserAuthenticationRepositoryTest.java
	├── com.google.keepnote.test.service                            // All the service test cases classes are made available in this package
	|		└── UserAuthenticationServiceTest.java
	├── src/main/resources
	|		└── application.yml                                         // This file contains all the properties for Database Connectivity
	|		└── logback.xml                                             // XML file for configuring the logs
	├── .classpath			                                            // This file is generated automatically while creating the project in eclipse
	├── .hobbes   			                                            // Hobbes specific config options, such as type of evaluation schema, type of tech stack etc., Have saved a default values for convenience
	├── .project			                                            // This is automatically generated by eclipse, if this file is removed your eclipse will not recognize this as your eclipse project. 
	├── pom.xml 			                                            // This is a default file generated by maven, if this file is removed your project will not get recognised in hobbes.
	└── PROBLEM.md  		                                            // This files describes the problem of the assignment/project, you can provide as much as information and clarification you want about the project in this file

*** Release 0.1.0 ***

- Right click on the Assignment select Run As -> spring boot app to run your Assignment.
- Right click on the Assignment select Run As -> JUnit Test to run your Assignment.