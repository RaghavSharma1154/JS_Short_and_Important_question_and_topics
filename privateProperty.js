//In js we had no property like private property in classes but in ECMA 2022 the 
//private property feature is added in javaScript.

//To make a variable or method private add a # symbol before that variable or function which 
//will make that variable or function private

class BankAccount{
    name = 'anil';
    #pin = 246439;
    #ifcsCode = '00111';

    getPin(){
        return this.#pin;
    }
    #getifcs(){
        return this.#ifcsCode;
    }

    getSpecialDetails(){
        return {
            name:this.name,
            pin:this.#pin,
            ifcs:this.#getifcs(),
        }
    }
}
const obj = new BankAccount();
console.log(obj.getSpecialDetails());