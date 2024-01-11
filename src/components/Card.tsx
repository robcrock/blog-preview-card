import { Author } from "./Author";
import { BlogImage } from "./BlogImage";
import { Content } from "./Content/Content";
import illustration from "../assets/images/illustration-article.svg";

export const Card = () => {
  return (
    <div className="hover:shadow-active flex w-[327px] flex-col gap-6 overflow-clip rounded-[20px] border border-neutral-900 bg-white p-6 shadow transition-all lg:w-[384px]">
      <BlogImage image={illustration} />
      <Content
        category={"Learning"}
        publishedAt={new Date("December 21, 2023")}
        title={"HTML & CSS foundations"}
        description={
          "These languages are the backbone of every website, defining structure, content, and presentation."
        }
      />
      <Author author={"Greg Hooper"} />
    </div>
  );
};
