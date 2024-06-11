
  export interface ICvLiveInfo {
    id: number;
    cv_id: number;
    country: ICountry;
    city: ICity;
    district: IDistrict;
    neighborhood?: null;
    address: string;
    created_at: string;
    updated_at: string;
  }
  export interface ICountry {
    id: number;
    name_tr: string;
    name_en: string;
    iso: string;
    iso3: string;
    lcode: number;
    phone_code: number;
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
  export interface IDistrict {
    id: number;
    city_id: number;
    name: string;
    slug: string;
    content: string;
    featured: number;
    created_at: string;
    updated_at: string;
  }
  