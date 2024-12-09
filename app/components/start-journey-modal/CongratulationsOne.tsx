import { ContainerProps } from "../../utils/type";
import { Button } from "../Button/Button";
import Link from "next/link";
import { HealthConditionResponse } from "../../hooks/start-journey/type";
import Image from "next/image";
import { useGetMealPlans } from "../../hooks/meal-plan/GetMealPlan";

interface CongratulationsOneProps extends ContainerProps {
  data: HealthConditionResponse | null;
}

const CongratulationsOne = ({ onPrevStep, data }: CongratulationsOneProps) => {
  const phone = sessionStorage.getItem("phone") || "";
  const { loading, success } = useGetMealPlans(phone);

  if (loading) {
    return <div>Loading meal plan...</div>;
  }

  console.log(data);
  const formatGoal = (goal: string | undefined): string => {
    if (!goal) return "None";
    return goal
      .replace(/-/g, " ") // Replace hyphens with spaces
      .replace(/\b\w/g, (char) => char.toUpperCase()); // Capitalize the first letter of each word
  };

  return (
    <div className="flex flex-col gap-y-4">
    <div className="flex flex-col justify-center items-center">
      <div className="flex flex-col justify-center w-[18rem] shadow-lg p-3">
        <h1 className="text-center text-[#43A5AE] border-b border-[#F9F9F9] pb-1">
          Calorie Summary
        </h1>
        {!data ? (
          <p className="text-center text-gray-500">Loading summary...</p>
        ) : (
          <div className="flex justify-between items-center py-2 gap-x-1">
            <ul className="text-sm flex flex-col gap-y-2">
              <li>Weight Goal</li>
              <li>Calorie Need</li>
              <li>Body Mass Index</li>
              <li>Target Weight</li>
              <li>Duration</li>
              <li>Health Condition</li>
            </ul>
            <ul className="font-semibold text-sm flex flex-col gap-y-2 text-right">
              <li className="text-[#43A5AE]">
                {formatGoal(data?.data?.goal)}
              </li>
              <li>{data?.data.requiredCalorie ?? "None"} cal</li>
              <li>
                {data?.data.bmi ?? "None"} (
                {data?.data.bmiDescription ?? "None"})
              </li>
              <li>{data?.data.targetWeight ?? "None"} kg</li>
              <li>{data?.data.durationInMonth ?? "None"} Months</li>
              <li>{data?.data.healthCondition ?? "None"}</li>
            </ul>
          </div>
        )}
      </div>
    </div>

    <div className="text-[#181818] text-center flex flex-col gap-y-2">
      <h3 className="sm:text-lg mt-2 lg:text-2xl font-semibold leading-snug">
        Congratulations, We’ve successfully calculated your calorie target!
      </h3>
      {/* 
      <p className="text-sm font-medium pt-2">
        To reach your goal, at your current activity level and weight, you’ll
        need to consume:{" "}
        <span className="text-[#6343AE]">
          {data?.data.requiredCalorie ?? "Loading..."} cal per day.
        </span>
      </p> */}
         <p className="text-base font-semibold md:py-2 py-1">
          Your customized meal plan has been successfully sent to your{" "}
          <span className="text-[#43A5AE] text-xl font-bold px-1">
            email.
          </span>
          Enjoy your journey to healthier living!
        </p>
    </div>

    {/* <div className="my-1 flex flex-col justify-center items-center my">
      <h1 className="text-[#18181899] text-sm">Share</h1>
      <div className="flex gap-x-3 items-center mt-3">
        <a href={"https://wa.me/15550548825/?text=hi"}>
          <Image
            src={
              "https://files.skillpaddy.com/public/image/facebook-1728651338133.png"
            }
            alt="facebook"
            width={32}
            height={32}
          />
        </a>
        <a
          href={
            "https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fhealthpaddy.io"
          }
        >
          <Image
            src={
              "https://files.skillpaddy.com/public/image/instagram-1728651693984.png"
            }
            alt="instagram"
            width={32}
            height={32}
          />
        </a>
        <a
          href={
            "https://www.instagram.com/share/?url=https%3A%2F%2Fhealthpaddy.io"
          }
        >
          <Image
            src={
              "https://files.skillpaddy.com/public/image/x-1728651842121.png"
            }
            alt="X"
            width={32}
            height={32}
          />
        </a>
        <a
          href={
            "https://www.instagram.com/share/?url=https%3A%2F%2Fhealthpaddy.io"
          }
        >
          <Image
            src={
              "https://files.skillpaddy.com/public/image/whatsapp-1728651987141.png"
            }
            alt="whatsapp"
            width={32}
            height={32}
          />
        </a>
      </div>
    </div> */}

    <div className="flex justify-between items-center border-t border-[#0000004D] mt-10 pt-4 px-0 mb-1">
      <Button
        className="bg-transparent border-[#43A5AE] text-[#43A5AE] border"
        onClick={onPrevStep}
      >
        Back
      </Button>
      <Link href="/price">
        <Button disabled>Proceed</Button>
      </Link>
    </div>
  </div>
  );
};

export default CongratulationsOne;
