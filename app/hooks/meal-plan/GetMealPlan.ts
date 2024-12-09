import { useEffect, useState } from 'react';

import {  AllMealPlanResponseProps } from './type';
import { routes } from '../helper/routes';
import { useFetcher } from '../useFetcher';

export const useGetMealPlans = (phone: string): AllMealPlanResponseProps => {
  const [success, setSuccess] = useState(false);
  const [loading, setLoading] = useState(true);

  const {
    data: response,
    mutate,
    isValidating: isFetching,
  } = useFetcher<{ status: string; message: string }>(routes.GET_ALL_MEAL_PLANS(phone));

  useEffect(() => {
    if (response && !isFetching) {
      const { success: responseSuccess, message } = response;
      if (responseSuccess) {

        setSuccess(true);
      } else {
        console.error('Error occurred:', message || 'Unknown error');
      }
      setLoading(false);
    }
  }, [isFetching, response]);

  return {
    loading,
    success,
    message: response?.message || 'Meal plans fetched successfully',
  };
};

