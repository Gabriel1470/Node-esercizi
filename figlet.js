const figlet = require('figlet');

figlet('lorem', function(error, data){
    if(error){
        console.log('Error');
        console.dir(error);
        return;
    }
    else{
        console.log(data)
    }
  });