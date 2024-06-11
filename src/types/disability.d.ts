
  export interface ICvToDisability {
    id: number;
    cv_id: number;
    disability_type_id: number;
    disability_percent: number;
    disability_detail: string;
    created_at: string;
    updated_at: string;
    disability_type: IDisabilityType;
  }
  export interface IDisabilityType {
    id: number;
    title: string;
    title_en: string;
    slug: string;
    order: number;
    created_at: string;
    updated_at: string;
  }
  