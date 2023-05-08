type inputType = 'text' | 'password' | 'email';

type InputFieldType = {
    type: inputType;
    value: string;
    key: string;
    name: string;
    placeHolder: string;
    error: string;
    maxLength: Number;
    rules: string;
    className:string;
};
