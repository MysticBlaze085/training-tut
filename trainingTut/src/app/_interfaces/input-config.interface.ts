export interface FormulaInputConfig {
    type: 'text' | 'select' | 'email' | 'password' | 'textarea';
    group: string;
    name: string;
    validators: any[];
    class: string;
    controller: string;
}
