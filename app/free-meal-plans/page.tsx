import Link from "next/link";
import { meal } from "../utils/constants";
import Image from "next/image";
import Recipe from "./modal/Recipe";

const FreeMealPlans = () => {
  return (
    <section className="my-[2rem]">
      <h2 className="text-2xl lg:text-4xl font-bold text-center mb-8 px-5 pt-[2rem] pb-[1rem] leading-snug lg:leading-tight">
        Your free meal plan is ready!
      </h2>

      <div className="flex flex-col justify-center items-center gap-6 mx-[3rem] md:mx-0">
        {meal.map((mealItem, index) => (
          <div
            key={index}
            className="bg-white shadow-xl rounded-lg overflow-hidden transition-transform transform duration-300 w-full md:w-[calc(50%-4rem)] mx-[2rem] lg:w-[50%] lg:mx-0 hover:shadow-2xl flex flex-col"
          >
            <div className={`p-4 ${mealItem.bgColor} text-white`}>
              <h3 className="text-xl font-bold">{mealItem.title}</h3>
              <p className="text-md">{mealItem.calories}</p>
            </div>
            <div className="p-6 flex flex-col flex-grow">
              {mealItem.items.map((item, itemIndex) => (
                <div
                  key={itemIndex}
                  className="flex flex-col sm:flex-row justify-between items-center mb-4"
                >
                  <div className="flex items-center w-full sm:w-3/4">
                    <Image
                      src={item.image}
                      alt="image"
                      width={60}
                      height={60}
                      className="mr-3"
                    />
                    <div className="flex flex-col gap-y-2 w-full">
                      <p className="text-sm lg:text-base">{item.description}</p>
                      <p className="text-xs lg:text-sm text-[#181818CC]">
                        {item.serving}
                      </p>
                      <Recipe
                        recipe={item.recipe}
                        trigger={
                          <p className="md:hidden text-[#43A5AE] text-sm cursor-pointer">
                            See Recipe
                          </p>
                        }
                      />
                    </div>
                  </div>
                  <Recipe
                    recipe={item.recipe}
                    trigger={
                      <p className="hidden md:flex text-[#43A5AE] text-sm cursor-pointer">
                        See Recipe
                      </p>
                    }
                  />
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      <h2 className="text-center mb-8 px-5 pt-[2rem] pb-[1rem] leading-snug lg:leading-tight">
        Get access to the full meal plan for 30 days?{" "}
        <Link href="/price" className="text-blue-500">
          Start your Journey.
        </Link>
      </h2>
    </section>
  );
};

export default FreeMealPlans;
