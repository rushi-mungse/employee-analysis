import Button from "../../Components/Button";
import Card from "../../Components/Card";
import Input from "../../Components/Input";

const StepPassword = () => {
  const onClick = () => {};

  return (
    <Card heading="Enter Password Here" img="lock-emoji" backButton={true}>
      <Input placeholder={"Enter Password here."} />
      <p className="mb-4 text-center text-gray-400">
        Enter your email address for register your account in this service.
      </p>
      <em className="text-orange-600 mb-4"> Happy Journey!</em>
      <Button onClick={onClick} />
    </Card>
  );
};

export default StepPassword;
