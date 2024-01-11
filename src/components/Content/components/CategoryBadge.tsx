export const CategoryBadge = ({ category }: { category: string }) => {
  return (
    <div className="inline-flex items-center justify-center rounded bg-amber-300 px-3 py-1">
      <p className=" text-sm font-extrabold leading-[21px] text-neutral-900">
        {category}
      </p>
    </div>
  );
};
