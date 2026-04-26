export interface ConceptItem {
  id: string;
  number: string;
  title: string;
  icon: string;
  color: string;
  intro: string;
  code?: string;
  usage?: string;
  mistake?: any;
}

export interface PrereqItem {
  item: string;
  done: boolean;
  note: string;
  detail: string;
}

export interface RoadmapPhase {
  phase: string;
  label: string;
  duration: string;
  color: string;
  topics: string[];
  buildProjects: string[];
}

export interface ProjectItem {
  name: string;
  desc: string;
  teaches: string;
}

export interface MistakeItem {
  title: string;
  tip: string;
  wrong?: string;
  correct?: string;
  explanation?: string;
}

export interface UseCase {
  num: string;
  title: string;
  body: string;
}

export interface ComparisonRow {
  feature: string;
  react: string;
  [key: string]: string;
}

export interface ActionStep {
  week: string;
  title: string;
  desc: string;
}

export interface TechContent {
  techId: string;
  readTime: string;
  difficulty: string;
  lastUpdated: string;
  openingHook?: any;
  introText: string[];
  realWorldUsages: string[];

  whyLearn: {
    demand: string;
    jobRoles: { role: string; desc: string }[];
    whyCompanies: { reason: string; detail: string }[];
    salaryRange: string;
    careerNote: string;
  };

  howItWorks: {
    intro: string;
    vdomSteps: { num: string; title: string; text: string }[];
    componentCode: string;
    renderCycle: string[];
    closingNote: string;
  };

  coreConcepts: ConceptItem[];
  prerequisites: PrereqItem[];
  roadmap: RoadmapPhase[];
  useCases: UseCase[];

  projects: {
    beginner: ProjectItem[];
    intermediate: ProjectItem[];
    advanced: ProjectItem[];
  };

  mistakes: MistakeItem[];

  interviewQuestions?: {
    beginner: { q: string; a: string }[];
    intermediate: { q: string; a: string }[];
    advanced: { q: string; a: string }[];
  };

  comparison?: {
    headers: string[];
    rows: ComparisonRow[];
  };

  pros?: string[];
  cons?: string[];
  futureScope?: string[];
  actionPlan?: ActionStep[];
}
