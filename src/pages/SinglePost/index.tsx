import {
  BadgeSpan,
  MainContainer,
  BadgeContainer,
  StyledHeader,
  PostContentContainer,
  LinksContainer,
} from "./styles";
import GithubIconSVG from "../../../public/icons/github.svg";
import CompanyIconSVG from "../../../public/icons/company.svg";
import PeopleIconSVG from "../../../public/icons/people.svg";
import BackIconSVG from "../../../public/icons/back.svg";
import OpenExternalIconSVG from "../../../public/icons/open-external.svg";
import { Link } from "react-router-dom";

export function SinglePost() {
  return (
    <MainContainer>
      <StyledHeader>
        <LinksContainer>
          <Link to="/">
            <img src={BackIconSVG} alt="" />
            BACK
          </Link>
          <a href="#">
            READ ON GITHUB
            <img src={OpenExternalIconSVG} alt="" />
          </a>
        </LinksContainer>

        <h1>JavaScript data types and data structures</h1>

        <BadgeContainer>
          <BadgeSpan>
            <img src={GithubIconSVG} alt="" />
            <span>cameronwll</span>
          </BadgeSpan>
          <BadgeSpan>
            <img src={CompanyIconSVG} alt="" />
            <span>Há 1 dia</span>
          </BadgeSpan>
          <BadgeSpan>
            <img src={PeopleIconSVG} alt="" />
            <span>5 comentários</span>
          </BadgeSpan>
        </BadgeContainer>
      </StyledHeader>

      <PostContentContainer>
        <p>hey!</p>
      </PostContentContainer>
    </MainContainer>
  );
}
