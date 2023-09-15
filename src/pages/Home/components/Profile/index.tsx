import { useState, useEffect } from "react";
import { BadgeSpan, StyledFooter, StyledSection, StyledHeader } from "./styles";
import { api } from "../../../../lib/axios";
import GithubIconSVG from "../../../../../public/icons/github.svg";
import CompanyIconSVG from "../../../../../public/icons/company.svg";
import PeopleIconSVG from "../../../../../public/icons/people.svg";
import OpenExternalIconSVG from "../../../../../public/icons/open-external.svg";

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

    console.log("Fetching profile data");
  }

  useEffect(() => {
    fetchGithubUserData();
  }, []);

  return (
    <StyledSection>
      <img src={profileData.imageUrl} alt="" />

      <div>
        <StyledHeader>
          <h1>Davi Nakano</h1>
          <a
            href="https://github.com/davinotdavid"
            target="_blank"
            rel="noopener noreferrer"
          >
            GITHUB <img src={OpenExternalIconSVG} alt="" />
          </a>
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
