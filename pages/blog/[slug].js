import ReactMarkdown from "react-markdown";
import SearchAside from "../../components/search/searchAside";
import { getAllPosts } from "../../lib/dato-cms";

function PostPage({ post, posts}){

  console.log(post, 'post')
  console.log(posts, 'posts')

  return (
    <>
      <h1>{post.title}</h1>
      <img src={post.postImg.url}></img>
      <ReactMarkdown>{post.postTxt}</ReactMarkdown>
      {post.videoUrl ?
        <iframe
          width="560"
          height="315"
          src={post.videoUrl}
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen>
        </iframe>
        : ''
      }
       <SearchAside />
    </>
  )
}

export const getStaticProps = async ({ params }) => {
  const slug = params?.slug;
  const posts = await getAllPosts();
  const post = posts.find((s) => s.slug === slug) || null;

  if(!post) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      post,
      allPosts: posts,
    },
    revalidate: 60,
  };
};

export const getStaticPaths = async () => {
  const posts = await getAllPosts();
  const slugs = posts.map((s) => ({ params: { slug: s.slug }}));

  return {
    paths: slugs,
    fallback: false,
  }
}

export default PostPage;