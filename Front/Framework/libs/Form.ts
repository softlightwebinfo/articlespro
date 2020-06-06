export class Form {
    private _fields = {};
    private _fieldsErrors = {};

    public add(name: string, value: string, type: string) {
        if (!this._isErrorValidate(value, type)) {
            this._fields[name] = value;
            if (name in this._fieldsErrors) {
                delete this._fieldsErrors[name];
            }
        } else {
            if (name in this._fields) {
                delete this._fields[name];
            }
            this._fieldsErrors[name] = {
                type,
                name,
                value,
            };
        }
    }

    private _isErrorValidate(value: string, type: string): boolean {
        switch (type) {
            case "tel": {
                return !Form.ValidatePhone(value);
            }

            case "email": {
                return !Form.ValidateEmail(value);
            }
        }
        return false;
    }

    public static ValidatePhone(phone: string): boolean {
        let str = phone.toString().replace(/\s/g, '');
        return str.length === 9 && /^[679]{1}[0-9]{8}$/.test(str)
    }

    public static ValidateEmail(email: string) {
        let filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
        return filter.test(email);
    }

    validate(): boolean {
        return Object.keys(this._fields).length && !Object.keys(this._fieldsErrors).length;
    }

    getFields() {
        return this._fields;
    }

    validatePasswords() {
        return ("password" in this._fields && "rpassword" in this._fields) && (this._fields["password"] === this._fields['rpassword']);
    }
}
