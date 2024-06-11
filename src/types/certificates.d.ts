
  export interface ICvCertificates {
    id: number;
    cv_id: number;
    certificate_work_area: ICertificateWorkArea;
    name: string;
    company: string;
    detail: string;
    date: string;
    created_at: string;
    updated_at: string;
  }

  export interface ICertificateWorkArea {
    id: number;
    title: string;
    title_en: string;
    slug: string;
    order: number;
    created_at: string;
    updated_at: string;
  }
  