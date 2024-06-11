
export interface ICvEducations {
  id: number;
  cv_id: number;
  education_level: ICommandType;
  country: number;
  city: ICity;
  education_type: IEducationType;
  university: ICommandType;
  university_branch: ICommandType;
  high_school_name: string;
  high_school_branch: ICommandType;
  high_school_type: ICommandType;
  general_language: IGeneralLanguage;
  note_system: INoteSystem;
  note: number;
  graduation_year: number;
  is_continue: number;
  created_at: string;
  updated_at: string;
}
export interface ICommandType {
  id: number;
  title: string;
  title_en: string;
  slug: string;
  order: number;
  created_at: string;
  updated_at: string;
}
export interface ICity {
  id: number;
  country_id: number;
  name: string;
  slug: string;
  seo_name?: null;
  content: string;
  featured: number;
  created_at: string;
  updated_at: string;
  fake_country_id?: null;
}
export interface IEducationType {
  id: number;
  name: string;
  name_en: string;
  created_at?: null;
  updated_at?: null;
}
export interface IGeneralLanguage {
  id: number;
  name: string;
  name_en: string;
  order: number;
  created_at: string;
  updated_at: string;
}
export interface INoteSystem {
  id: number;
  value: string;
  order: number;
  created_at: string;
  updated_at: string;
}
