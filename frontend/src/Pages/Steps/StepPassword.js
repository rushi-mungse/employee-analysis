import Button from "../../Components/Button";
import Card from "../../Components/Card";
import { useState } from "react";
import Input from "../../Components/Input";
import { useSelector } from "react-redux";
import { userAuthenticate } from "../../http";

const StepPassword = () => {
  const email = useSelector((state) => state.auth.email);
  const [password, setPassword] = useState();
  const getPassword = (e) => {
    setPassword(e.target.value);
  };

  const postData = async () => {
    const data = await userAuthenticate({ email, password });
    console.log(data);
  };

  return (
    <Card heading="Enter Password Here" img="lock-emoji" backButton={true}>
      <Input placeholder={"Enter Password here."} onChange={getPassword} />
      <p className="mb-4 text-center text-gray-400">
        Enter your email address for register your account in this service.
      </p>
      <em className="text-orange-600 mb-4"> Happy Journey!</em>
      <Button onClick={postData} />
    </Card>
  );
};

export default StepPassword;
