import { spacesToUnderScore } from "../../utils";
import { Button, PageHero } from "../Shared";

const categories = ["categories", "categories", "categories", "categories", "categories"];

export const Hero = () => {
  return (
    <PageHero
      title="Articles"
      description="Making a general inquiry, or you’ll like us to talk in detail? Tell us what you need and we will get back to you as soon as possible."
    >
      <div className="pt-10">
        <p className="text-lg leading-[32px] font-bold">Discover what matters most to you</p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-6">
          {categories.map((category) => (
            <Button key={spacesToUnderScore(category)} className="justify-center uppercase" size="small">
              {category}
            </Button>
          ))}
        </div>
      </div>
    </PageHero>
  );
};
