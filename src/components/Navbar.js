import React, { useContext } from "react";
import { Button, Menu, Image } from "semantic-ui-react";

import { AuthContext } from "../context/auth";

import Logo from "../image/logo.png";

function Navbar() {
  const { user, logout } = useContext(AuthContext);

  const navbar = user ? (
    <Menu secondary size="large" color="blue">
      <Menu.Menu>
        <Menu.Item>
          <Image
            src={Logo}
            as="a"
            size="tiny"
            verticalAlign="bottom"
            href="/"
          />
        </Menu.Item>
      </Menu.Menu>
      <Menu.Menu position="right">
        <Menu.Item>
          <div>
            <Button basic color="blue" onClick={logout} content="Logout" />
          </div>
        </Menu.Item>
      </Menu.Menu>
    </Menu>
  ) : (
    <Menu secondary size="large" color="blue">
      <Menu.Menu>
        <Menu.Item>
          <Image
            src={Logo}
            as="a"
            size="tiny"
            verticalAlign="bottom"
            href="/"
          />
        </Menu.Item>
      </Menu.Menu>
    </Menu>
  );

  return navbar;
}

export default Navbar;
