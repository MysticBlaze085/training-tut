export class FormBase<T> {
    value: T;
    key: string;
    label: string;
    required: boolean;
    order: number;
    controlType: string;
    type: string;
    validators: any[];
    options: { key: string; value: string }[];
    errorMessage: string;

    constructor(
        options: {
            value?: T;
            key?: string;
            label?: string;
            required?: boolean;
            order?: number;
            controlType?: string;
            type?: string;
            validators?: any[];
            options?: { key: string; value: string }[];
            errorMessage?: string;
        } = {}
    ) {
        this.value = options.value;
        this.key = options.key || '';
        this.label = options.label || '';
        this.required = !!options.required;
        this.order = options.order === undefined ? 1 : options.order;
        this.controlType = options.controlType || '';
        this.type = options.type || '';
        this.options = options.options || [];
        this.validators = options.validators || [];
        this.errorMessage = options.errorMessage || '';
    }
}
