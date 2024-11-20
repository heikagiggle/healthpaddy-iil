'use client'
import { useGetMealPlans } from "../hooks/meal-plan/GetMealPlan";

const CustomMealPlan = () => {
  const phone = sessionStorage.getItem("phone") || "";
  const { data, loading, success } = useGetMealPlans(phone);
  return <div></div>;
};

export default CustomMealPlan;
