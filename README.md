# BlackWingsHack2023

<!-- GETTING STARTED -->
## Getting Started

To get a local copy up and running follow these simple steps.

### Prerequisites

Below are the prerequisites you'll need before running the project locally.
* npm
  ```sh
  npm install npm@latest -g
  ```

### Installation

1. Clone the repo
   ```sh
   https://github.com/felicityy-li/BlackWingsHack2023.git
   ```
2. Next, download the env file used for this project (.env).  You should already own this or it has been shared with you via a GitHub Gist.  The csv 
file should be added to the BACKEND ROOT under BlackWingsHack2023/backend.
3. Install npm packages. If you run into any errors that seem dependency-related, just npm install + the error... for ex. npm install react-scripts.
   ```sh
   npm install
   ```
4. Open two terminal tabs.
5. Ensure you are in the backend directory of the repo (backend). Run the backend first in the first terminal tab. The console message should inform you 
the server has started at localhost:8000.
   ```sh
   npm start
   ```
6. Switch to the second terminal tab. Switch into the frontend directory.
   ```sh
   cd ../ && cd frontend
   ```
7. Run the frontend in the second terminal tab. It should run on localhost:3000. If you see any errors in terminal related to the proxy, the 
frontend/backend may not have been started in the correct order. Cut the process and try again! 
   ```sh
   npm start
   ```
Congrats, you've successfully run the project :partying_face:

