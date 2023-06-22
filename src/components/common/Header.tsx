import Link from "next/link";
import Image from "next/image";

import HeaderLogo from "../../../public/logo/xociety-header-bi.svg";
import EnterApp from "../../../public/icon/enter_app.svg";

import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";

import { Fab } from "@mui/material";
import { SECTIONS } from "@/constants/constants";

const Header = () => {
  return (
    <AppBar sx={appBarStyle}>
      <Container maxWidth={false}>
        <Toolbar sx={toolBarStyle} disableGutters>
          <Image src={HeaderLogo} height={61} width={168} alt="logo" />
          <Box sx={boxStyle}>
            {SECTIONS.map((section) => (
              <Button key={section} sx={buttonStyle}>
                {section}
              </Button>
            ))}
          </Box>
          <Fab sx={fabStyle} variant="extended">
            <Link href={"/"}>ENTER APP</Link>
            <Image src={EnterApp} alt="enter_app" width={30} />
          </Fab>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default Header;

const appBarStyle = {
  background: "var(--main-bg);",
  mixBlendMode: "overlay",
  position: "fixed",
};

const toolBarStyle = {
  height: "90px",
  xs: "flex",
  justifyContent: "center",
  alignItems: "center",
  zIndex: "99",
  paddingRight: "60px",
};

const boxStyle = {
  flexGrow: 1,
  display: {
    md: "flex",
    justifyContent: "flex-end",
    gap: "60px",
    paddingRight: "50px",
  },
};

const buttonStyle = {
  my: 2,
  color: "black",
  display: "block",
  fontWeight: "800",
};

const fabStyle = {
  padding: "0",
  background: "black",
  a: { color: "white", margin: "18px", fontWeight: "800" },
  img: { paddingRight: "10px" },
};
