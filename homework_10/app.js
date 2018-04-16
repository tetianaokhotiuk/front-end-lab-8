class Input {
    constructor(placeHolder) {
        this.placeHolder = placeHolder || "Type...";
        this._value = "";
    }

    get Value() {
        return this._value;
    }

    setValue(newValue) {
        this._value = newValue;
    }
}

class NumberInput extends Input {
    constructor(placeHolder){
        super(placeHolder);
        this.type = "number";
    }
}

let numberInput = new NumberInput("Type numbers...");

let AddRequiredValidation = function(number) {
    
        if ((number._value === '') || (typeof number._value == 'undefined')) {
            number.valid = false;        
        } else  {
            number.valid = true;
        }

        if (number.valid === false) {
            number.valid = `${number.valid}, because of required validator`;
            console.log(`number._value haven't passed AddRequiredValidation`)
        }
    }

let AddMaxLengthValidation = function(number,maxLength) {

        if ((number._value.toString().length > maxLength)) {
            number.valid = false;
            number.valid =`${number.valid}, because of max length validator`;
            console.log(`number._value haven't passed AddMaxLengthValidation`)
        } else {
            number.valid = true;
            console.log(number._value.toString().length);
        }
        
    }

let AddNumberValidation = function(number) {
        if (typeof number._value !== 'number') {
            number.valid = false;
            number.valid = `${number.valid}, because of number validator`;
            console.log(`number._value haven't passed AddNumberValidation`)
        } else {
            number.valid = true;
            number.valid = `${number.valid}, all validators passed`;
        }
        
    }

         





//  Then you can create add validation decorators and add functionality to numberInput
//  AddRequiredValidation Decorator that add required validation
//  AddMaxLengthValidation Decorator that add max length validation
//  AddNumberValidation Decorator for only number values validation


// The desired behaviour would be
AddRequiredValidation(numberInput);
console.log(numberInput.valid); //---> false, because of required validator

numberInput.setValue("1");
AddNumberValidation(numberInput);
console.log(numberInput.valid) //---> false, because of number validator 

numberInput.setValue(1);
AddNumberValidation(numberInput);
console.log(numberInput.valid); //---> true, all validators pass

numberInput.setValue(1111111111111111111111111111);
AddMaxLengthValidation(numberInput,3);
console.log(numberInput.valid); //---> false, because of max length validator

// Notice after applying some validator to an object, it gets additional "valid" property;


// AddMaxLengthValidation(numberInput,3);
// 
