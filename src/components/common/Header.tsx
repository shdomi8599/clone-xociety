import Link from "next/link";
import Image from "next/image";
import styled from "@emotion/styled";
import { useEffect, useState } from "react";

import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";

import { Fab } from "@mui/material";
import { SECTIONS } from "@/constants/constants";

const Header = () => {
  const [scrollHeight, setScrollHeight] = useState(0);

  const handleScroll = () => {
    setScrollHeight(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
  }, []);
  return (
    <>
      <BackBox />
      <AppBarBox>
        <Container maxWidth={false}>
          <ToolBarBox disableGutters>
            <LogoImage
              scrollheight={scrollHeight}
              src={"/logo/xociety-header-bi.svg"}
              height={61}
              width={168}
              alt="logo"
            />
            <NavItemBox>
              {SECTIONS.map((section) => (
                <NavItem key={section}>{section}</NavItem>
              ))}
            </NavItemBox>
            <AppBtn variant="extended">
              <Link href={"https://app.xociety.io/"} target="_blank">
                enter app
              </Link>
              <Image
                src={"/icon/enter_app.svg"}
                alt="enter_app"
                width={30}
                height={30}
              />
            </AppBtn>
          </ToolBarBox>
        </Container>
      </AppBarBox>
    </>
  );
};
export default Header;

const BackBox = styled(Box)`
  position: fixed;
  width: 100%;
  display: flex;
  align-items: center;
  z-index: 99;
  height: 90px;
  background: rgba(255, 255, 255, 0.8);
  border-bottom: 1px solid rgba(255, 255, 255, 0.8);
  mix-blend-mode: overlay;
  filter: drop-shadow(rgba(0, 0, 0, 0.25) 0px 4px 4px);
`;

const AppBarBox = styled(AppBar)`
  position: fixed;
  background: none;
  box-shadow: none;
  z-index: 99;
`;

const ToolBarBox = styled(Toolbar)`
  height: 90px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-right: 60px;
`;

type LogoImageProps = {
  scrollheight: number;
};

const LogoImage = styled(Image)<LogoImageProps>`
  opacity: ${({ scrollheight }) => (scrollheight > 600 ? 0 : 1)};
`;

const NavItemBox = styled(Box)`
  flex: 1;
  display: flex;
  justify-content: flex-end;
  gap: 60px;
  padding-right: 50px;
`;

const NavItem = styled(Button)`
  color: black;
  display: block;
  font-family: var(--font-family);
  font-size: 18px;
  font-weight: 700;
`;

const AppBtn = styled(Fab)`
  padding: 0;
  background: black;

  :hover {
    background: black;
  }

  a {
    color: white;
    margin: 18px;
    font-weight: 800;
    text-transform: uppercase;

    :hover {
      color: yellow;
    }
  }

  img {
    padding-right: 10px;
  }
`;
