# 3D File Sharing Social Network
This is an educational project. The main idea is to demonstrate how one can build a  scalable social network using Node.js, React, and Sql with Javascript. 

## Tech/framework used
This is a full stack project, the backend end uses Node.js with Express, and a MySql database. The frontend is React, with redux utilized for state management. We also utalize Firebase Cloud Storage to hold images, files, and user avatars. 

## Features
Home Page:
See the designs, and download files from your friends, and those that you follow on the network!

Discover Page:
Gives you the opportunity to find new people, and discover popular posts on the network. 

Discover People: 
Discover other 3D print designers, follow them, and use their designs!

Top Posts:
Discover the top designs across the network!

## File Structure
The Repo contains two main directories:
1. client
  - contains the react app comprising the frontend, and uses a middleware proxy to connect to the backend for requests
2. server
  - contains the express app that handles data being sent to frontend, and CRUD operations in the SQL db

## Installation
1. Clone the project
2. Cd into server and npm install
3. Cd into client folder and npm install
4. Cd back into server

## Getting Started
Now that the project is installed with dependencies...
1. Download your preferred solution stack for hosting local Sql Servers (MAMP, WAMP, XAMPP).__
<br/>
**OR**__
2. Setup an Amazon Auroura SQL db for use in the app__

## Amazon Auroura Instructions

## Local SQL Server Instructions
1. Start your solution stack, and navigate to localhost/phpmyadmin and log in 
2. Use MySql Workbench or command line to create a table with the included DB_Creator SQL file. 


## Create an environment file named .env in the root directort of the client and server folders

Server Env file should contain:
1. RDS_HOSTNAME = (Amazon Auroura RDS hostname **or** localhost if running on your machine)
2. RDS_PORT = (port for sql server)
3. RDS_DB_NAME = (name of database)
4 .RDS_USERNAME =(username for sql server)
5. RDS_PASSWORD = (password for sql server)

Client Env contains Firebase Connection Keys that can be found in your Firebase Project Settings:
*- do not change ENV names React requires env names to start with REACT_APP_ -*
1. REACT_APP_API_KEY = (Firebase API Key) 
2. REACT_APP_AUTH_DOMAIN = (Firebase Auth domain) 
3. REACT_APP_DATABASE_URL = (Firebase databse url) 
4. REACT_APP_PROJECT_ID = (Firebase project ID) 
5. REACT_APP_STORAGE_BUCKET = (Firebase Storage Bucket ID) 
6. REACT_APP_MESSAGING_SENDER_ID = (Firebase messaging sender ID) 
7. REACT_APP_APP_ID = (Firebase App ID) 
8. REACT_APP_MEASUREMENT_ID =(Firebase measurment ID) 
    
## Running the Project 
1. inside of /server run command npm run dev 
2. frontend will start on localhost:3000 and Backend will start on localhost:5000
     
