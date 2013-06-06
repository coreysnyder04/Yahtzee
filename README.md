This repository is the result of a Manta Code Kata on 6/6/2013 where we were to practice 
test driven development in order write the logic which would power a Yahtzee game. 

**I started by running:  **
mkdir Yahtzee  
cd Yahtzee/  
npm install -g express  
express  
npm install jasmine-node --save-dev  
npm install should  


** Setting Up Test File **  
From there we created our `/spec/yahtzee.spec.js` file which housed our tests

** Creating testable code **  
We created a `/routes/yahtzee.js` file to house the code which we would be testing.  

** Referencing your code **  
In our spec.js we reference our testable code by creating:
`var Yahtzee = require('../routes/yahtzee.js');`
