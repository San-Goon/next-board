import {useRouter} from "next/router";
import {NextPage} from "next";

const Post: NextPage = () => {
    const router = useRouter();
    const {postId} = router.query;

    return <div>{postId} 입니다</div>
}

export default Post;
