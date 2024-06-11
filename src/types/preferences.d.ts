
export interface ICvJobPreferences {
  id: number;
  cv_id: number;
  job_title?: null;
  work_status?: null;
  experience_level_id?: null;
  salary_expectation_min_id?: null;
  salary_expectation_max_id?: null;
  work_cities: string;
  work_types: string;
  positions: string;
  sectors: string;
  sections: string;
  information?: null;
  created_at: string;
  updated_at: string;
}
