export const Description = ({ description }: { description: string }) => {
  return (
    <div className="self-stretch text-sm font-medium leading-normal text-zinc-500 lg:text-base">
      {description}
    </div>
  );
};
