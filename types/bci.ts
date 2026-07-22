export interface BCIDimension {
  id: string;
  name: string;
  desc: string;
  weight: number;
}

export interface BCILevel {
  min: number;
  max: number;
  label: string;
  desc: string;
}
