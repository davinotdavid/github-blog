import { StyledHeader } from "./styles";
import LogoSVG from "../../../public/logo.svg";

export function Header() {
  return (
    <StyledHeader>
      <img src={LogoSVG} alt="" />
    </StyledHeader>
  );
}
