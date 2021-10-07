class PincodeValidator{

    constructor(...params) {
        this.pincode = params[0];
    }

    get pincode() {
        return this._pincode;
    }

    set pincode(pincode) {

        let idRegex = RegExp('[0-9]{6}');
        if (idRegex.test(pincode)) {
            this._pincode = pincode;
        }
        else {
            throw "Pincode is Invalid";
        }
    }
    toString() {
        return "pincode=" + this.pincode;
    }
}
//valid
try {
    let validator = new PincodeValidator(123456);
    console.log(validator.toString());
}
catch (e) {
    console.error(e);
}
//invalid
try {
    let validator = new PincodeValidator(12456);
    console.log(validator.toString());
}
catch (e) {
    console.error(e);
}