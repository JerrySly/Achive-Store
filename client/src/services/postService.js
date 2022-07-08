
import { posts } from "@/data/posts";
class PostService{
    getUserPosts(userId){
        return posts.filter(x=>x.userId == userId)
    }
}

export default new PostService();