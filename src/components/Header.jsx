import { Button, Space } from "antd";
import { CgWebsite } from "react-icons/cg";
import { useNavigate } from "react-router-dom";
import { useAuthContext } from "../contexts/Authcontext";
import { removeToken } from "../helpers/auth.helper";

const AppHeader = () => {
  const { user } = useAuthContext();
  const navigate = useNavigate();

  const handleLogout = () => {
    removeToken();
    navigate("/signin", { replace: true });
  };

  return (
    <Space className="header_space">
      <Button className="header_space_brand" href="/" type="link">
        <CgWebsite size={55} />
      </Button>
      <Space className="auth_buttons">
        {user ? (
          <>
            <Button className="auth_button_login" href="/profile" type="link">
              {user.username}
            </Button>
            <Button
              className="auth_button_signUp"
              type="primary"
              onClick={handleLogout}
            >
              Logout
            </Button>
          </>
        ) : (
          <>
            <Button className="auth_button_login" href="/signin" type="link">
              Login
            </Button>
            <Button
              className="auth_button_signUp"
              href="/signup"
              type="primary"
            >
              SignUp
            </Button>
          </>
        )}
      </Space>
    </Space>
  );
};

export default AppHeader;
