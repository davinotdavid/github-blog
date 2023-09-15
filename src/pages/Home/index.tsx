import { ChangeEvent, useEffect, useState } from "react";
import { formatDistance } from "date-fns";
import { Profile } from "./components/Profile";
import { MainContainer, PostsContainer, PostsHeader } from "./styles";
import { useDebounce } from "../../hooks/useDebounce";
import { api } from "../../lib/axios";

interface Post {
  number: string;
  title: string;
  body: string;
  created_at: string;
}

interface PostsData {
  total: number;
  posts: Post[];
}

export function Home() {
  const [searchTerm, setSearchTerm] = useState("");
  const [postsData, setPostsData] = useState<PostsData>({
    total: 0,
    posts: [],
  });
  const debouncedSearchTerm = useDebounce(searchTerm);

  function handleOnSearchChanged(e: ChangeEvent<HTMLInputElement>) {
    setSearchTerm(e.target.value);
  }

  async function fetchPosts(debouncedSearchTerm?: string) {
    const response = await api.get("/search/issues", {
      params: {
        q: `${
          debouncedSearchTerm && `${debouncedSearchTerm} `
        }repo:davinotdavid/github-blog`,
      },
    });

    setPostsData({
      total: response.data.total_count,
      posts: response.data.items,
    });

    console.log(response.data);
  }

  useEffect(() => {
    fetchPosts(debouncedSearchTerm);
  }, [debouncedSearchTerm]);

  return (
    <MainContainer>
      <Profile />

      <PostsHeader>
        <h2>Blog posts</h2>
        <span>
          {postsData.total} post{postsData.total !== 1 && "s"}
        </span>
      </PostsHeader>

      <input
        type="text"
        placeholder="Search for content"
        onChange={handleOnSearchChanged}
        value={searchTerm}
      />

      <PostsContainer>
        {postsData.posts.map((post) => (
          <li key={post.number}>
            <header>
              <h3>{post.title}</h3>
              <span>
                {formatDistance(new Date(post.created_at), new Date(), {
                  addSuffix: true,
                })}
              </span>
            </header>

            <p>{post.body}</p>
          </li>
        ))}
      </PostsContainer>
    </MainContainer>
  );
}
