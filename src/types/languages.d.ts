
  export interface ICvLanguages {
    id: number;
    general_lang: IGeneralLang;
    company: string;
    read_level: string;
    write_level: string;
    speak_level: string;
    is_main: number;
    detail: string;
    created_at: string;
    updated_at: string;
  }
  export interface IGeneralLang {
    id: number;
    name: string;
    name_en: string;
    order: number;
    created_at: string;
    updated_at: string;
  }
  