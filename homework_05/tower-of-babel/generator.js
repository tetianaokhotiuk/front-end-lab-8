const max = process.argv[2];
 let FizzBuzz = function*(){
      for (var val = 1; val <= max; val++) {
        if(val % 15 === 0){	
            yield "FizzBuzz";
        }
        else if(val % 3 === 0){       	
            yield "Fizz";      
        }
        else if(val % 5 === 0){
            yield "Buzz";            
        } else { 
        	yield val;
    	}
      }
    }();

    for (var n of FizzBuzz) {
      console.log(n);
    }


