# Automated tests for Twinfield, using Protractor

## Task:
Please, develop tests described below:
1. Search on google.com for 'Twinfield'.
2. Make sure that the link https://www.twinfield.co.uk/ is the first in the list of search results.
3. Follow each available link from search results which contains word 'Twinfield'.

## Running tests: 

1. To run tests, you will need to have Node.js installed. If nodejs isn't installed yet [Please use this link](https://nodejs.org/en/download/)
2. To clone repository, you will need to have Git installed. If git isn't installed yet [Please use this article](https://www.google.com/url?sa=t&rct=j&q=&esrc=s&source=web&cd=3&cad=rja&uact=8&ved=2ahUKEwi5yOjskc3eAhVICCwKHS9sDvcQFjACegQIBhAM&url=https%3A%2F%2Fwww.linode.com%2Fdocs%2Fdevelopment%2Fversion-control%2Fhow-to-install-git-on-linux-mac-and-windows%2F&usg=AOvVaw3o64hjx5x_3KfvldUIW7S-)
3. Open Command Line window in any directory and clone this repository using command: 
```
git clone https://github.com/epishev/twinfieldTask.git
```
5. Move to just created 'twinfieldTask' folder and run command `npm run setup` to install node packages (dependencies) and chromedriver  
6. Now start up a server with: `npm start` command
7. Open the second command line window in 'twinfieldTask' folder to run the tests
8. Run tests with command `npm test`
9. Observe results in the console ([For example](http://prntscr.com/lh3gne))
