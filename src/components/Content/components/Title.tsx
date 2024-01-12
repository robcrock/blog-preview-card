export const Title = ({ title }: { title: string }) => {
  return (
    <h1 className="self-stretch text-xl font-extrabold leading-9 text-neutral-900 lg:text-2xl">
      {title}
    </h1>
  );
};
