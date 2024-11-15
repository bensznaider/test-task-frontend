﻿# test-task-frontend

In order to start this frontend server, clone this repo in the main folder of the project and then run "npm install" on the terminal to install the necessary dependencies. Create a .env file inside the repo root directory containing this environment variable:  
NEXT_PUBLIC_API_URL="http://localhost:8080"

Bare in mind that this proceeding of pointing out the environment variables in the readme file should be avoided, but I proceeded this way given the instructions provided for the task and also considering that all of the urls are actually public and do not require any API keys.

When everything's ready, run "npm run dev" on the terminal, which will start the local server on port 3000. Before going to http://localhost:3000/ in your browser, make sure you have the backend server already running on port 8080.
