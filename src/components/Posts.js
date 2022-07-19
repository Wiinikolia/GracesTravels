import "./../styles/Posts.css";
import Post from "./Post";

const Posts = () => {
const blogPosts = [
	{
	title: "Chicago",
	body: `Grace goes to Chicago`,
	author: "Josh McCoy",
	imgUrl:
		"https://media.istockphoto.com/photos/chicago-skyline-aerial-drone-view-from-above-lake-michigan-and-city-picture-id1141114423?b=1&k=20&m=1141114423&s=170667a&w=0&h=ZfvYvykHFVhzKQPWwEAUlrF7K8zHjrgZEj36NkLqVMY=",
	},
	{
	title: "LA",
	body: `Grace goes to LA`,
	author: "Grace",
	imgUrl:
		"https://a.travel-assets.com/findyours-php/viewfinder/images/res40/481000/481644-Oue-Skyspace-La.jpg",
	},
];

return (
	<div className="posts-container">
	{blogPosts.map((post, index) => (
		<Post key={index} index={index} post={post} />
	))}
	</div>
);
};

export default Posts;
