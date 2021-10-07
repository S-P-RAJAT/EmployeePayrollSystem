class EmailValidator{

    constructor(...params) {
        this.email = params[0];
    }

    get email() {
        return this._email;
    }

    set email(email) {

        let idRegex = RegExp('^abc([.]?[a-z0-9_+-]+)?@[a-z1-9]+[.][a-z]{2,}([.][a-z]{2,})?$');
        if (idRegex.test(email)) {
            this._email = email;
        }
        else {
            throw "Email is Invalid";
        }
    }
    toString() {
        return "email=" + this.email;
    }
}
//valid
try {
    let validator = new EmailValidator("abc.100@yahoo.com");
    console.log(validator.toString());
}
catch (e) {
    console.error(e);
}
//invalid
try {
    let validator = new EmailValidator("abc123@gmail.a");
    console.log(validator.toString());
}
catch (e) {
    console.error(e);
}