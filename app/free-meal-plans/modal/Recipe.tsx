"use client";
import { DefaultModal } from "../../components/modal/DefaultModal";
import React, { useState } from "react";

interface Props {
  trigger: React.ReactNode;
  recipe: string;
}

const Recipe = ({ trigger, recipe }: Props) => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => {
    setOpen(true);
  };

  const recipeSteps = recipe.split(/\d+\.\s/).filter((step) => step.trim() !== "");

  return (
    <DefaultModal
      heading={"Recipe"}
      description={""}
      trigger={<div onClick={handleOpen}>{trigger}</div>}
      open={open}
      onOpenChange={setOpen}
    >
      {/* Modal content */}
      <div className="space-y-4">
        <ol className="list-decimal pl-6">
          {recipeSteps.map((step, index) => (
            <li key={index} className="mb-2 text-sm leading-relaxed">
              {step.trim()}
            </li>
          ))}
        </ol>
      </div>
    </DefaultModal>
  );
};

export default Recipe;
