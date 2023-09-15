import { BadgeSpan, StyledFooter, StyledSection, StyledHeader } from "./styles";
import GithubIconSVG from "../../../../../public/icons/github.svg";
import CompanyIconSVG from "../../../../../public/icons/company.svg";
import PeopleIconSVG from "../../../../../public/icons/people.svg";

export function Profile() {
  return (
    <StyledSection>
      <img src="http://placekitten.com/148/148" alt="" />

      <div>
        <StyledHeader>
          <h1>Davi Nakano</h1>
          <a href="#">GITHUB</a>
        </StyledHeader>
        <p>
          Tristique volutpat pulvinar vel massa, pellentesque egestas. Eu
          viverra massa quam dignissim aenean malesuada suscipit. Nunc, volutpat
          pulvinar vel mass.
        </p>

        <StyledFooter>
          <BadgeSpan>
            <img src={GithubIconSVG} alt="" />
            <span>davinotdavid</span>
          </BadgeSpan>
          <BadgeSpan>
            <img src={CompanyIconSVG} alt="" />
            <span>Rocketseat</span>
          </BadgeSpan>
          <BadgeSpan>
            <img src={PeopleIconSVG} alt="" />
            <span>32 followers</span>
          </BadgeSpan>
        </StyledFooter>
      </div>
    </StyledSection>
  );
}
