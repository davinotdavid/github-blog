import { useState, useEffect } from "react";
import { BadgeSpan, StyledFooter, StyledSection, StyledHeader } from "./styles";
import GithubIconSVG from "../../../../../public/icons/github.svg";
import CompanyIconSVG from "../../../../../public/icons/company.svg";
import PeopleIconSVG from "../../../../../public/icons/people.svg";
import { api } from "../../../../lib/axios";

interface ProfileData {
  username: string;
  bio?: string;
  imageUrl: string;
  company?: string;
  numberOfFollowers: number;
}

export function Profile() {
  const [profileData, setProfileData] = useState<ProfileData>(
    {} as ProfileData
  );

  async function fetchGithubUserData() {
    const response = await api.get("/users/davinotdavid");
    const { login, avatar_url, followers, company, bio } = response.data;

    setProfileData({
      username: login,
      bio,
      imageUrl: avatar_url,
      company,
      numberOfFollowers: followers,
    });
  }

  useEffect(() => {
    // fetchGithubUserData();
  }, []);

  return (
    <StyledSection>
      <img src={profileData.imageUrl} alt="" />

      <div>
        <StyledHeader>
          <h1>Davi Nakano</h1>
          <a href="#">GITHUB</a>
        </StyledHeader>
        <p>{profileData.bio}</p>

        <StyledFooter>
          <BadgeSpan>
            <img src={GithubIconSVG} alt="" />
            <span>{profileData.username}</span>
          </BadgeSpan>
          <BadgeSpan>
            <img src={CompanyIconSVG} alt="" />
            <span>{profileData.company || "None"}</span>
          </BadgeSpan>
          <BadgeSpan>
            <img src={PeopleIconSVG} alt="" />
            <span>
              {profileData.numberOfFollowers} follower
              {profileData.numberOfFollowers > 1 && "s"}
            </span>
          </BadgeSpan>
        </StyledFooter>
      </div>
    </StyledSection>
  );
}
