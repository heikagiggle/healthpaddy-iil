import { useCallback, useState } from "react";
import toast from "react-hot-toast";

import { routes } from "../helper/routes";
import { ApiResponse } from "../types";
import { useAxios } from "../useAxios";
import {
  HealthConditionPayload,
  HealthConditionResponse,
  UseHealthConditionResponse,
} from "./type";

export const useHealthCondition = (): UseHealthConditionResponse => {
  const { axios, loading } = useAxios();
  const [success, setSuccess] = useState(false);
  const [data, setData] = useState<HealthConditionResponse>();

  const handleHealthCondition = useCallback(
    async (payload: HealthConditionPayload) => {
      try {
        const response = await axios.post<
          unknown,
          ApiResponse<HealthConditionResponse>
        >(routes.HEALTH_CONDTION, payload, {});

        const { data: responseData, message } = response;
        console.log("Response:", response);

        if (responseData?.status !== "successful") {
          toast.error(responseData?.message || message || "An error occurred");
          setSuccess(false);
          return false;
        } else {
          toast.success(
            responseData.message || "Health condition submitted successfully"
          );
          setData(responseData);
          setSuccess(true);

          sessionStorage.setItem(
            "healthConditionResponse",
            JSON.stringify(responseData)
          );

          return true;
        }
      } catch (error) {
        console.error("Error in submitting Health Condition:", error);
        toast.error("Error in submitting Health Condition");
        setSuccess(false);
        return false;
      }
    },
    [axios]
  );

  return { loading, success, data, handleHealthCondition };
};
