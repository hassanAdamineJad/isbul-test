import { ICv } from "./cv";
import { ICvCertificates } from "./certificates";
import { ICvEducations } from "./educations";
import { CvLanguages } from "./languages";
import { ICvToDisability } from "./disability";
import { ICvToDrivingLicenseClasses } from "./drivelLicense";
import { ICvExams } from "./exams";
import { ICvJobExperiences } from "./exprinces";
import { ICvFiles } from "./files";
import { ICvLiveInfo } from "./liveInfo";
import { ICvJobPreferences } from "./preferences";
import { ICvReferences } from "./refrences";
import { ICvSeminars } from "./seminars";
import { IUser } from "./users";

export interface IReview{
    cv: ICv
    user: IUser
    cv_certificates: ICvCertificates[]
    cv_educations: ICvEducations[]
    cv_exams: ICvExams[]
    cv_files: ICvFiles[]
    cv_job_preferences: ICvJobPreferences
    cv_languages: CvLanguages[]
    cv_live_info: ICvLiveInfo
    cv_references: ICvReferences[]
    cv_seminars: ICvSeminars[]
    cv_to_disability: ICvToDisability
    cv_to_driving_license_classes: ICvToDrivingLicenseClasses[]
    cv_job_experiences: ICvJobExperiences[]

}