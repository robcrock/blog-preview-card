import { Title, PublishedAt, CategoryBadge, Description } from "./components";

export const Content = ({
  category,
  publishedAt,
  title,
  description,
}: {
  category: string;
  publishedAt: Date;
  title: string;
  description: string;
}) => {
  return (
    <div className="flex flex-col items-start gap-3">
      <CategoryBadge category={category} />
      <PublishedAt date={publishedAt} />
      <Title title={title} />
      <Description description={description} />
    </div>
  );
};
