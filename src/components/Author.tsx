import avatar from "../assets/images/image-avatar.webp";

export const Author = ({ author }: { author: string }) => {
  return (
    <div className="flex items-center justify-start gap-3">
      <img className="h-8 w-8 rounded-full" src={avatar} />
      <div className="text-sm font-extrabold leading-[21px] text-neutral-900">
        {author}
      </div>
    </div>
  );
};
