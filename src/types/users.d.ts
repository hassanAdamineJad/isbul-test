export interface IUser {
    id: number;
    name: string;
    surname: string;
    email: string;
    phone: string;
    phone_code: string;
    country_id: number;
    status: number;
    is_email_verified: number;
    is_phone_verified: number;
    profile: string;
    birth_date: string;
    gender: number;
    last_login_date?: null;
    show_candidate_pool: number;
    not_show_references: number;
    hide_working_company: string;
    is_job_search: number;
    is_blocked: string;
    is_setup: number;
    created_at: string;
    updated_at: string;
  }