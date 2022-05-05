import Button from "../../Components/Button";
import Card from "../../Components/Card";
import { useState } from "react";
import Input from "../../Components/Input";
import { useSelector, useDispatch } from "react-redux";
import { userAuthenticate } from "../../http";
import { setAuth } from "../../store/Slices/authSlice";

const StepPassword = () => {
  const email = useSelector((state) => state.auth.email);
  const dispatch = useDispatch();
  const [password, setPassword] = useState();
  const getPassword = (e) => {
    setPassword(e.target.value);
  };

  const postData = async () => {
    if (!email || !password) return alert("All fields are required.");
    try {
      const { data } = await userAuthenticate({ email, password });
      if (data.auth) {
        dispatch(setAuth(data));
      }
    } catch (error) {
      alert("Iternal error");
    }
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
