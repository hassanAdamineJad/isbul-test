
  export interface ICvToDrivingLicenseClasses {
    id: number;
    cv_id: number;
    driving_license_class: IDrivingLicenseClass;
    created_at: string;
    updated_at: string;
  }
  export interface IDrivingLicenseClass {
    id: number;
    name: string;
    created_at: string;
    updated_at: string;
  }
  