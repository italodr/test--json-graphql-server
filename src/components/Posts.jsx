import { gql, useQuery } from "@apollo/client";

const GET_POSTS = gql`
  query {
    allPosts {
      id
      title
      views
      User {
        name
      }
      Comments {
        date
        body
      }
    }
  }
`;

const Posts = () => {
  const { loading, error, data } = useQuery(GET_POSTS);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  const { allPosts: posts } = data;

  return (
    <ul>
      {posts.map((post) => (
        <li key={post.id}>
          {post.title} ({post.views})
        </li>
      ))}
    </ul>
  );
};

export default Posts;
