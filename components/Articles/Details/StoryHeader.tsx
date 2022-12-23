import { PageHero } from "../../Shared";

export const StoryHeader = () => {
  return (
    <PageHero
      title="Article title goes here even if it’s long"
      description={
        <p className="line-clamp-3">
          Here goes some short summary which explain the essence of the article but doesn’t spoil the content. It can be
          3 lines long or even longer. lorem lorem lorem lorem lorem lorem lorem lorem
        </p>
      }
      image="/images/article-img.svg"
    />
  );
};
