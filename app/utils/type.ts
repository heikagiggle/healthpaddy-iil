export interface ContainerProps {
    onNextStep?: () => void;
    onPrevStep: () => void;
  }

  export interface TriggerProps {
    trigger: React.ReactNode;
  }