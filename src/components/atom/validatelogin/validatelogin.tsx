import { useEffect } from "react";
import { useCookies } from "react-cookie";
import { useNavigate } from "react-router-dom";

interface ValidateProps {
  children: React.ReactNode;
}
const Validate = ({ children }: ValidateProps) => {
  const [cookies] = useCookies(["token"]);
  const navigate = useNavigate();

  useEffect(() => {
    if (!cookies.token) {
      return navigate("/");
    }
  }, [cookies.token]);
  return <>{children}</>;
};

export default Validate;
