import { ReviewCompletionStatus } from './constants';

export interface ApplicationTableProps {
  Application_ID: number;
  Submission: string;
  Confirmation_ID: string;
  Facility_Name: string;
  Assigned_To: string;
  Status: string;
  Created_At: string;
  Updated_At: string;
  Chefs_ID: string;
  BCAAP_Form_ID: number;
}

export type KeyValuePair = {
  [key: string]: any;
};

interface BaseReviewValues {
  overallComments: string;
  finalScore: number;
  status: string;
}

export interface NetworkReviewValues extends BaseReviewValues {
  reasonableCostforCommunitySize: number;
  s3ComponentsScore: number;
  s4DescribeHowATNPAlignsWithCommunityGoals: number;
  s4DescribePotentialEconomicBenefits: number;
  s5DetailsHowATNPWillAddressSafetyConcerns: number;
  s6DescribeConsultationUndertaking: number;
  s6DescribeDataCollectionUndertaking: number;
  s6DescribeHowATNPImplementationWillEnsureSuccess: number;
  fundingReceivedLastFiveYears: number;
}

export interface InfrastructureReviewValues extends BaseReviewValues {
  populationScore: number;
  AApopulationScore: number;
  communityNeedsAndSafetyGuidelinesScore: number;
  safetyScore: number;
  AAsafetyScore: number;
  economyAndTourismScore: number;
  environmentScore: number;
  landUseScore: number;
  AAlandUseScore: number;
  accessibilityScore: number;
  promotionScore: number;
  lettersOfSupportScore: number;
  previousFundingScore: number;
  regionalAdjustmentScore: number;
}

export interface ScoreSummaryTableProps {
  applicationId: number;
}

export interface BroaderReviewScore {
  createdAt: Date;
  updatedAt: Date;
  data: InfrastructureReviewValues | NetworkReviewValues;
  finalScore: number;
  overallComments: string;
  id: number;
  status: ReviewCompletionStatus;
  // TODO: determine what application and user is, id?
  application: string;
  user: string;
  displayName: string;
}

export interface AuthorizationInterface {
  projectManagerSignature: string;
  financialOfficerSignature: string;
}

export interface ApplicationStatusInterface {
  id: number;
  name: string;
}
