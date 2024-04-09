import { CommentComponent } from "./CommentComponent";

export const Comment = ({ comments }) => {
  return (
    <div className="mt-5">
      <h2 className="text-[#aaa] capitalize font-semibold text-lg">comments</h2>
      <div>
        {!comments ? (
          <div className="text-sm tracking-widest capitalize mt-5 font-medium text-[#aaa]">
            No comments found
          </div>
        ) : (
          comments?.map((comment, i) => {
            return <CommentComponent key={i} comment={comment} />;
          })
        )}
      </div>
    </div>
  );
};
