import "./post.css";
function Post() {
  return (
    <div className={"post"}>
      <h2 className="posttitle">Post Title</h2>
      <div style={{ borderTop: "1px solid black", margin: "10px 0" }}></div>
      <p className="postcontent">This is the content of the post.</p>
    </div>
  );
}
export default Post;
