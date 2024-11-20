export interface Meal {
  id: string;
  name: string;
  description?: string;
  calories: number;
}

export interface AllMealPlanResponseData {
  id: string;
  name?: string;
  description?: string;
  calories?: number; 
  meals?: Array<Meal>; 
}
export interface AllMealPlanResponseProps {
  success: boolean; 
  loading: boolean;
  mutate?: () => void;
  data: Array<AllMealPlanResponseData>; 
}

