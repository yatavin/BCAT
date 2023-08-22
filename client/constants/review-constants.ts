import { ReviewCompletionStatus } from './constants';

export const EvaluationReviewQuestions = [
  {
    maxScore: 15,
    label: 'Population Score:',
    descriptionList: [
      'If Indigenous Govt or Indigenous Govt Partnership = 15 pts (auto)',
      'If Local (non Indigenous) Govt <li 15k pop = 10 pts (auto)',
      'If Local Govt (non Indigenous) > 15k and <25k pop = 5pts (auto)',
      'If Local Govt (non Indigenous) > 25k pop = 0 pts (auto)',
    ],
    disabled: true,
    name: 'populationScore',
  },
  {
    maxScore: 10,
    label: 'Does this project meet community needs and safety guidelines?',
    descriptionList: [
      'Listing of BCAT Design Guide or other publication = 1 pt',
      'Explanation of how project aligns with guide = up to 2 pts',
      'Safety addressed  w/ supporting rationale = up to 3 pts',
      'Supporting data or anecdotal evidence is provided = up to 2 pts',
      'Safety monitoring plan = 2 pts',
    ],
    name: 'communityNeedsAndSafetyGuidelinesScore',
  },
  {
    maxScore: 23,
    label: 'Does this project meet community needs and safety guidelines?',
    descriptionList: [
      'Solid physical barrier, substantial distancing, valid other/alternative approach (traffic calming), end-of-trip facilities only = 5 pt',
      'Minimal physical barrier, minimal physical distancing, or minimal other/alternative approach = 2 pts',
      'Not physically separated = 0 pts',
      'Section 6. Question "Identify which additional safety measures exist within the design of your project" = 1 pt each for each box ticked (ex: Lighting, Signage, etc) (auto)',
      'Section 6. Question "The BC Active Transportation Design Guide recommends minimum widths for different types and contexts of active transportation infrastructure (see pg. 15 of the Program Guidelines). Does the proposed infrastructure align with the Design Guide recommendations?" If Desired, or N/A is selected = 4pts (auto); if Constrained is selected = 2pts (auto); if Local context is selected = 0-4',
      'Section 6. Question "The B.C. Active Transportation Design Guide recommends certain facility types for different road contexts, e.g., speed and volume. Does the proposed infrastructure align with Design Guide recommendations?" if Yes, or N/A is selected = 4pts (auto)',
    ],
    tooltiptext: 'Higher points = small, rural community, legitimate space/cost/capacity concerns. Lower points = not wanting to remove parking, lack of political or community will, cost concerns from larger urban centre with more resources',
    name: 'safetyScore',
  },
  {
    maxScore: 5,
    label: 'Economy and Tourism Score:',
    descriptionList: [
      'What are the economic benefits? = up to 3 pts',
      'How will this project contribute to tourism? = up to 2 pts',
    ],
    tooltiptext: 'Score on how the project connects people to businesses, new business areas, new industry, etc. for economic benefits; Score on how project will protect current tourism or provide new tourism opportunities for tourism;',
    name: 'economyAndTourismScore',
  },
  {
    maxScore: 8,
    label: 'Environment Score :',
    descriptionList: [
      'Environmental Benefits = 3 pts',
      'Will the project retain existing Trees?  = 2 pts',
      'Environmental Best Practices = 3 pts',
    ],
    tooltiptext: 'Score on: GHG reductions, local measurements of GHG share from transportation, local sustainability plans for Environmental Benefits; Score on: local materials and labour, climate adaptation measures, dust mitigation, using recycled materials, drought-friendly plantings, using less toxic materials for Environmental Best Practices;',
    name: 'environmentScore',
  },
  {
    maxScore: 15,
    label: 'Land Use Score:',
    descriptionList: [
      'Multi-modal Integration = 1 pt for each box, max 3 (auto)',
      'Connects w/ community infrastructure = 1 pt for each box, max 4 (auto)',
      'Connect w/  AT infrastructure = 1 pt for each box, max 3 (auto)',
      'Does this project connect with other AT facilities = 2 pts',
      'Is this project a component of larger infrastructure project',
    ],
    name: 'landUseScore',
  },
  {
    maxScore: 8,
    label: 'Accessibility Score:',
    descriptionList: [
      'Does this Project Incorporate Universal Design? = 5 pts',
      'Does This Project Incorporate GBA+ Principles? = 3 pts',
    ],
    tooltiptext: 'Score on: curb cuts, grading, smooth surfaces, ramps, width, accessible washrooms, lighting, handrails, TWSIs, audible crossing signals, etc.; Score on: lighting, gender-neutral and family friendly washrooms, economically disadvantaged area, GBA+ training by project team, age-friendly design, rainbow crosswalks, signage in other languages, Indigenous land acknowledgements/ names on wayfinding signage, etc.;',
    name: 'accessibilityScore',
  },
  {
    maxScore: 3,
    label: 'Promotion Score:',
    tooltiptext: 'Score on promotional & educational activities = media event, signage, advertising, bike/ped maps, cycling courses, targeted outreach',
    name: 'promotionScore',
  },
  {
    maxScore: 3,
    label: 'Letters of Support:',
    name: 'lettersOfSupportScore',
  },
  {
    maxScore: 5,
    label: 'Previous funding:',
    descriptionList: [
      'None = 5 pts',
      'less than (<) $500,000 = 3 pts',
      'more than (>) $500,000 = 0 pts',
    ],
    name: 'previousFundingScore',
    tooltiptext: 'Funding Amount over last 5 years',
  },
  {
    maxScore: 5,
    label: 'Regional Adjustment Scoring:',
    descriptionList: [
      'Vancouver Island/Coast = 1',
      'Lower Mainland /Southwest = 0',
      'Thompson-Okanagan = 2',
      'Kootenay = 3',
      'Cariboo = 4',
      'North Coast = 5',
      'Nechako = 5',
      'Northeast = 5',
    ],
    name: 'regionalAdjustmentScore',
  },
];

export const INITIAL_INFRASTRUCTURE_REVIEW_VALUES = {
  populationScore: 0,
  communityNeedsAndSafetyGuidelinesScore: 0,
  safetyScore: 0,
  economyAndTourismScore: 0,
  environmentScore: 0,
  landUseScore: 0,
  accessibilityScore: 0,
  promotionScore: 0,
  lettersOfSupportScore: 0,
  previousFundingScore: 0,
  regionalAdjustmentScore: 0,
  completionStatus: ReviewCompletionStatus.IN_PROGRESS,
  finalScore: 0,
  overallComments: '',
};
