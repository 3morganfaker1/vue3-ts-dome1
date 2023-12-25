export interface FormType {
  ComponentName: string;
  data: FormTypeData[];
}

export interface FormTypeData {
  version?: string;
  value?: string;
  required?: string;
  type?: string;
  tag?: string;
  defalutValue?: string;
  illustrate?: string;
  attrs?: any;
  name?: string;
}
