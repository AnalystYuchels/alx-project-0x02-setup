import PostCard from '@/components/common/PostCard';
import { type PostProps } from '@/interfaces';
import Header from '@/components/layout/Header';

interface PostsPageProps {
  posts: PostProps[];
}

const PostsPage = ({ posts }: PostsPageProps) => {
  return (
    <>
      <Header />
      <main className="p-8 space-y-4">
        <h1 className="text-2xl font-bold mb-4">Posts</h1>
        {posts.map((post, index) => (
          <PostCard
            key={index}
            title={post.title}
            content={post.content}
            userId={post.userId}
          />
        ))}
      </main>
    </>
  );
};

export const getStaticProps = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=5');
  const data = await res.json();

  const posts: PostProps[] = data.map((post: any) => ({
    title: post.title,
    content: post.body,
    userId: post.userId,
  }));

  return {
    props: {
      posts,
    },
  };
};

export default PostsPage;
