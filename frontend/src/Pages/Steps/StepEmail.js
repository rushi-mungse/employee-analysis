import Button from "../../Components/Button";
import Card from "../../Components/Card";
import Input from "../../Components/Input";

const StepEmail = ({ onClick }) => {
  return (
    <Card
      heading="Enter Your Email Address"
      img="email-emoji"
      backButton={true}
    >
      <Input placeholder={"Enter email id."} />
      <p className="mb-4 text-center text-gray-400">
        Enter your email address for register your account in this service.
      </p>
      <em className="text-orange-600 mb-4"> Happy Journey!</em>
      <Button onClick={onClick} />
    </Card>
  );
};

export default StepEmail;
