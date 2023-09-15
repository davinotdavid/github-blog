import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { formatDistance } from "date-fns";
import ReactMarkdown from "react-markdown";
import {
  BadgeSpan,
  MainContainer,
  BadgeContainer,
  StyledHeader,
  PostContentContainer,
  LinksContainer,
  FirstLetterCapsSpan,
} from "./styles";
import GithubIconSVG from "../../../public/icons/github.svg";
import DateIconSVG from "../../../public/icons/date.svg";
import CommentIconSVG from "../../../public/icons/comment.svg";
import BackIconSVG from "../../../public/icons/back.svg";
import OpenExternalIconSVG from "../../../public/icons/open-external.svg";
import { api } from "../../lib/axios";

interface SinglePostData {
  title: string;
  body: string;
  comments: number;
  created_at: string;
  html_url: string;
  user: {
    login: string;
  };
}

export function SinglePost() {
  const routeParams = useParams();
  const [singlePostData, setSinglePostData] = useState<SinglePostData>(
    {} as SinglePostData
  );

  useEffect(() => {
    async function fetchSinglePostData() {
      const response = await api.get(
        `/repos/davinotdavid/github-blog/issues/${routeParams.postNumber}`
      );

      setSinglePostData(response.data);
    }

    fetchSinglePostData();
  }, [routeParams.postNumber]);

  if (!singlePostData.title) {
    return null;
  }

  return (
    <MainContainer>
      <StyledHeader>
        <LinksContainer>
          <Link to="/">
            <img src={BackIconSVG} alt="" />
            BACK
          </Link>
          <a
            href={singlePostData.html_url}
            target="_blank"
            rel="noopener noreferrer"
          >
            READ ON GITHUB
            <img src={OpenExternalIconSVG} alt="" />
          </a>
        </LinksContainer>

        <h1>{singlePostData.title}</h1>

        <BadgeContainer>
          <BadgeSpan>
            <img src={GithubIconSVG} alt="" />
            <span>{singlePostData.user.login}</span>
          </BadgeSpan>
          <BadgeSpan>
            <img src={DateIconSVG} alt="" />
            <FirstLetterCapsSpan>
              {formatDistance(new Date(singlePostData.created_at), new Date(), {
                addSuffix: true,
              })}
            </FirstLetterCapsSpan>
          </BadgeSpan>
          <BadgeSpan>
            <img src={CommentIconSVG} alt="" />
            <span>
              {singlePostData.comments} comment
              {singlePostData.comments !== 1 && "s"}
            </span>
          </BadgeSpan>
        </BadgeContainer>
      </StyledHeader>

      <PostContentContainer>
        <ReactMarkdown>{singlePostData.body}</ReactMarkdown>
      </PostContentContainer>
    </MainContainer>
  );
}
