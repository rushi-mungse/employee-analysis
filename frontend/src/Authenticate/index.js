import { useState } from "react";
import StepEmail from "../Pages/Steps/StepEmail";
import StepPassword from "../Pages/Steps/StepPassword";

const Steps = {
  1: StepEmail,
  2: StepPassword,
};

const Authenticate = () => {
  const [step, setStep] = useState(1);
  const changeStep = () => {
    setStep(step + 1);
  };
  const Step = Steps[step];
  return (
    <div className=" flex items-center justify-center screen-height bg-white flex-col">
      <Step onClick={changeStep} />
    </div>
  );
};

export default Authenticate;
