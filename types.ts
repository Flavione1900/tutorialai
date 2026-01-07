export interface StepData {
  id: string;
  number: number;
  title: string;
  description: string;
  details: string[];
  iconName: 'layout' | 'code' | 'link' | 'rocket';
  color: string;
}

export interface ChatMessage {
  id: string;
  role: 'user' | 'model';
  text: string;
  timestamp: Date;
}

export enum GeminiModel {
  FLASH = 'gemini-3-flash-preview',
}