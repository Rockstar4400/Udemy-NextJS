import { useRouter } from 'next/router';

function BlogPostPage () {
    const router = useRouter();

    console.log(router.query);

    return(
        <div>Blog Post</div>
    );
}

export default BlogPostPage;