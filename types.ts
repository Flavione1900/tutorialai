export interface StepData {
  id: string;
  number: number;
  title: string;
  description: string;
  details: string[];
  iconName: 'layout' | 'code' | 'link' | 'rocket';
  color: string;
}