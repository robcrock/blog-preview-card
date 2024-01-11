import { formatDate } from "../../../utilities";

export const PublishedAt = ({ date }: { date: Date }) => {
  return (
    <div className="text-sm font-medium leading-[21px] text-neutral-900">
      {`Published ${formatDate(date)}`}
    </div>
  );
};
