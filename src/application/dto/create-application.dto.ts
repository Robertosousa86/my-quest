export class ApplicationDTO {
  jobPlatform?: string;
  companyName?: string;
  companyPhone?: string;
  companyEmail?: string;
  jobName: string;
  jobDescription: string;
  jobResponsibility: string;
  jobRequirement: string;
  jobDesirableRequirement?: string;
  jobBenefits?: string;
  contractType: string;
  salary?: string;
  recruiterName?: string;
  recruiterPhone?: string;
  recruiterEmail?: string;
  feedback?: string;
  userId: number;

  constructor(data: ApplicationDTO) {
    Object.assign(this, data);
  }
}
