
  export interface ICvJobExperiences {
    id: number;
    cv_id: number;
    company_name: string;
    position: string;
    position_level: string;
    sector: ISector;
    section: ISection;
    city?: string;
    country?: string;
    is_abroad: string;
    working_type?: string;
    start_date: string;
    end_date: string;
    leaving_reason: string;
    work_info: string;
    now_working: number;
    created_at: string;
    updated_at: string;
  }
  export interface ISector {
    id: number;
    cv_id: number;
    sector_id: number;
    created_at: string;
    updated_at: string;
  }
  export interface ISection {
    id: number;
    cv_id: number;
    section_id?: number;
    created_at: string;
    updated_at: string;
  }
  