Create a HTML page and call rxjs script from there.
https://cdnjs.cloudflare.com/ajax/libs/rxjs/5.4.3/Rx.js
Download and use from local https://cdnjs.com/libraries/rxjs/5.4.3
Reference: https://www.youtube.com/watch?v=2LCo926NFLI&t=330s

node src/lesson.js

2nd option
https://www.javatpoint.com/rxjs-installation
>mkdir rxjsproject
>cd rxjsproject
rxjsproject>npm init
npm install ---save-dev rxjs
node testrx.js 

npm install --save-dev esm
node -r esm testrx.js

-- For execution on webserver 
npm install --save-dev babel-loader @babel/core @babel/preset-env webpack webpack-cli webpack-dev-server   
npm run publish 