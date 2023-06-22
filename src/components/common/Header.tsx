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
    <AppBar
      sx={{ background: "var(--main-bg);", mixBlendMode: "overlay" }}
      position="fixed"
    >
      <Container maxWidth={false}>
        <Toolbar
          sx={{
            height: "90px",
            xs: "flex",
            justifyContent: "center",
            alignItems: "center",
            zIndex: "99",
            paddingRight: "60px",
          }}
          disableGutters
        >
          <Image src={HeaderLogo} height={61} width={168} alt="logo" />
          <Box
            sx={{
              flexGrow: 1,
              display: {
                md: "flex",
                justifyContent: "flex-end",
                gap: "60px",
                paddingRight: "50px",
              },
            }}
          >
            {SECTIONS.map((section) => (
              <Button
                key={section}
                sx={{
                  my: 2,
                  color: "black",
                  display: "block",
                  fontWeight: "800",
                }}
              >
                {section}
              </Button>
            ))}
          </Box>
          <Fab
            sx={{
              padding: "0",
              background: "black",
              a: { color: "white", margin: "18px", fontWeight: "800" },
              img: { paddingRight: "10px" },
            }}
            variant="extended"
          >
            <Link href={"/"}>ENTER APP</Link>
            <Image src={EnterApp} alt="enter_app" width={30} />
          </Fab>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default Header;
