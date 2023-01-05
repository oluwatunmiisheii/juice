import { Section, Carousel } from "@/components/Shared";

export const StoryBody = () => {
  return (
    <>
      <Section
        title="Section title goes here"
        description="Here goes some subtitle but it might unecessary to use it as below goes the section content."
      >
        <div className="mt-10">
          <p className="text-lg leading-[38px] tracking-[0.37px]" data-aos="fade-up">
            Paragraph 1. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam a aliquam nunc. Quisque egestas,
            enim nec euismod lobortis, metus ante tincidunt purus, sit amet condimentum metus urna eu velit. Proin justo
            dolor, rutrum eget est ut, ultrices bibendum ligula. Curabitur eget quam at quam pulvinar finibus. Maecenas
            quis maximus nisi, sed tempus tellus. Curabitur ex dui, tincidunt sit amet magna eget, volutpat pretium
            massa. Pellentesque augue mi, accumsan consectetur tortor id, tempor rutrum tellus. Proin dictum tellus
            purus, in condimentum massa commodo eu. Sed sit amet massa bibendum, ultricies lectus in, laoreet metus.
            Phasellus ornare, enim sit amet pretium accumsan, felis quam aliquet ante, ac laoreet orci massa vel metus.
            Sed ex augue, fermentum nec hendrerit at, lacinia a ligula. Phasellus enim purus, bibendum gravida auctor
            ac, suscipit vel velit. Mauris a lectus id nibh sagittis posuere ac sit amet est. Curabitur nunc eros,
            fringilla vitae facilisis et, fermentum in lectus.
          </p>
          <p className="text-lg leading-[38px] tracking-[0.37px] mt-10" data-aos="fade-up">
            Paragraph 2. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam a aliquam nunc. Quisque egestas,
            enim nec euismod lobortis, metus ante tincidunt purus, sit amet condimentum metus urna eu velit. Proin justo
            dolor, rutrum eget est ut, ultrices bibendum ligula. Curabitur eget quam at quam pulvinar finibus. Maecenas
            quis maximus nisi, sed tempus tellus. Curabitur ex dui, tincidunt sit amet magna eget, volutpat pretium
            massa. Pellentesque augue mi, accumsan consectetur tortor id, tempor rutrum tellus. Proin dictum tellus
            purus, in condimentum massa commodo eu. Sed sit amet massa bibendum, ultricies lectus in, laoreet metus.
            Phasellus ornare, enim sit amet pretium accumsan, felis quam aliquet ante, ac laoreet orci massa vel metus.
            Sed ex augue, fermentum nec hendrerit at, lacinia a ligula. Phasellus enim purus, bibendum gravida auctor
            ac, suscipit vel velit. Mauris a lectus id nibh sagittis posuere ac sit amet est. Curabitur nunc eros,
            fringilla vitae facilisis et, fermentum in lectus.
          </p>
        </div>
      </Section>

      {/* emphasized section */}
      <div className="bg-[#B9E9F2] backdrop-blur-[20px]">
        <Section
          title="Section title goes here and it’s an example of a section which is emphasized"
          description="Here goes some subtitle but it might unecessary to use it as below goes the section content."
        >
          <>
            <div className="mt-10">
              <h3 className="text-[28px] leading-[42px] tracking-[0.37px] mb-6 font-bold" data-aos="fade-up">
                Section subtitle goes here
              </h3>
              <p className="text-lg leading-[38px] tracking-[0.37px]" data-aos="fade-up">
                This is the bullet list
              </p>
              <ul className="mt-4 list-disc flex flex-col space-y-4 text-lg leading-[38px] tracking-[0.37px] pl-5">
                <li data-aos="fade-up" data-aos-delay="100">
                  Bullet 1
                </li>
                <li data-aos="fade-up" data-aos-delay="200">
                  Bullet 2
                </li>
                <li data-aos="fade-up" data-aos-delay="300">
                  Bullet 3
                </li>
                <li data-aos="fade-up" data-aos-delay="400">
                  Bullet 4
                </li>
              </ul>
            </div>

            <div className="mt-10">
              <h3 className="text-[28px] leading-[42px] tracking-[0.37px] mb-6 font-bold" data-aos="fade-up">
                Section subtitle goes here
              </h3>
              <p className="text-lg leading-[38px] tracking-[0.37px]" data-aos="fade-up" data-aos-delay="200">
                Paragraph 1. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam a aliquam nunc. Quisque
                egestas, enim nec euismod lobortis, metus ante tincidunt purus, sit amet condimentum metus urna eu
                velit. Proin justo dolor, rutrum eget est ut, ultrices bibendum ligula. Curabitur eget quam at quam
                pulvinar finibus. Maecenas quis maximus nisi, sed tempus tellus. Curabitur ex dui, tincidunt sit amet
                magna eget, volutpat pretium massa. Pellentesque augue mi, accumsan consectetur tortor id, tempor rutrum
                tellus. Proin dictum tellus purus, in condimentum massa commodo eu. Sed sit amet massa bibendum,
                ultricies lectus in, laoreet metus. Phasellus ornare, enim sit amet pretium accumsan, felis quam aliquet
                ante, ac laoreet orci massa vel metus. Sed ex augue, fermentum nec hendrerit at, lacinia a ligula.
                Phasellus enim purus, bibendum gravida auctor ac, suscipit vel velit. Mauris a lectus id nibh sagittis
                posuere ac sit amet est. Curabitur nunc eros, fringilla vitae facilisis et, fermentum in lectus.
              </p>
            </div>

            <div className="mt-10">
              <h3 className="text-[28px] leading-[42px] tracking-[0.37px] mb-6 font-bold">
                Section subtitle and slider goes here
              </h3>
              <Carousel>
                <div
                  className="bg-[url('/images/article-img-big.png')] bg-cover h-[200px] md:h-[400px] bg-center bg-no-repeat rounded-xl"
                  data-aos="fade-up"
                />
                <div
                  className="bg-[url('/images/article-img-big.png')] bg-cover h-[200px] md:h-[400px] bg-center bg-no-repeat rounded-xl"
                  data-aos="fade-up"
                />
                <div
                  className="bg-[url('/images/article-img-big.png')] bg-cover h-[200px] md:h-[400px] bg-center bg-no-repeat rounded-xl"
                  data-aos="fade-up"
                />
              </Carousel>
              <p
                className="text-xs text-customGray leading-[26px] mt-6 text-center uppercase"
                data-aos="fade-up"
                data-aos-delay="100"
              >
                Here comes the image description. It’s optional but it may be good to use it anyway.
              </p>
              <p className="text-lg leading-[38px] tracking-[0.37px] mt-10" data-aos="fade-up" data-aos-delay="200">
                Paragraph 1. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam a aliquam nunc. Quisque
                egestas, enim nec euismod lobortis, metus ante tincidunt purus, sit amet condimentum metus urna eu
                velit. Proin justo dolor, rutrum eget est ut, ultrices bibendum ligula. Curabitur eget quam at quam
                pulvinar finibus. Maecenas quis maximus nisi, sed tempus tellus. Curabitur ex dui, tincidunt sit amet
                magna eget, volutpat pretium massa. Pellentesque augue mi, accumsan consectetur tortor id, tempor rutrum
                tellus. Proin dictum tellus purus, in condimentum massa commodo eu. Sed sit amet massa bibendum,
                ultricies lectus in, laoreet metus. Phasellus ornare, enim sit amet pretium accumsan, felis quam aliquet
                ante, ac laoreet orci massa vel metus. Sed ex augue, fermentum nec hendrerit at, lacinia a ligula.
                Phasellus enim purus, bibendum gravida auctor ac, suscipit vel velit. Mauris a lectus id nibh sagittis
                posuere ac sit amet est. Curabitur nunc eros, fringilla vitae facilisis et, fermentum in lectus.
              </p>
            </div>
          </>
        </Section>
      </div>

      {/* section and image */}
      <Section
        title="Section title goes here and the image"
        description="Here goes some subtitle but it might unecessary to use it as below goes the section content."
      >
        <div className="mt-10">
          <div className="mb-10">
            <div
              className="bg-[url('/images/article-img-big.png')] bg-cover h-[200px] md:h-[400px] bg-center bg-no-repeat rounded-xl"
              data-aos="fade-up"
            />
            <p
              className="text-xs text-customGray leading-[26px] mt-6 text-center uppercase"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              Here comes the image description. It’s optional but it may be good to use it anyway.
            </p>
          </div>
          <p className="text-lg leading-[38px] tracking-[0.37px]" data-aos="fade-up" data-aos-delay="200">
            Paragraph 1. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam a aliquam nunc. Quisque egestas,
            enim nec euismod lobortis, metus ante tincidunt purus, sit amet condimentum metus urna eu velit. Proin justo
            dolor, rutrum eget est ut, ultrices bibendum ligula. Curabitur eget quam at quam pulvinar finibus. Maecenas
            quis maximus nisi, sed tempus tellus. Curabitur ex dui, tincidunt sit amet magna eget, volutpat pretium
            massa. Pellentesque augue mi, accumsan consectetur tortor id, tempor rutrum tellus. Proin dictum tellus
            purus, in condimentum massa commodo eu. Sed sit amet massa bibendum, ultricies lectus in, laoreet metus.
            Phasellus ornare, enim sit amet pretium accumsan, felis quam aliquet ante, ac laoreet orci massa vel metus.
            Sed ex augue, fermentum nec hendrerit at, lacinia a ligula. Phasellus enim purus, bibendum gravida auctor
            ac, suscipit vel velit. Mauris a lectus id nibh sagittis posuere ac sit amet est. Curabitur nunc eros,
            fringilla vitae facilisis et, fermentum in lectus.
          </p>
        </div>
      </Section>

      {/* section and slider */}
      <Section
        title="Section title and slider go here"
        description="Here goes some subtitle but it might unecessary to use it as below goes the section content."
      >
        <div className="mt-10">
          <div className="mb-10">
            <Carousel>
              <div
                className="bg-[url('/images/article-img-big.png')] bg-cover h-[200px] md:h-[400px] bg-center bg-no-repeat rounded-xl"
                data-aos="fade-up"
              />
              <div
                className="bg-[url('/images/article-img-big.png')] bg-cover h-[200px] md:h-[400px] bg-center bg-no-repeat rounded-xl"
                data-aos="fade-up"
              />
              <div
                className="bg-[url('/images/article-img-big.png')] bg-cover h-[200px] md:h-[400px] bg-center bg-no-repeat rounded-xl"
                data-aos="fade-up"
              />
            </Carousel>
            <p
              className="text-xs text-customGray leading-[26px] mt-6 text-center uppercase"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              Here comes the image description. It’s optional but it may be good to use it anyway.
            </p>
          </div>
          <p className="text-lg leading-[38px] tracking-[0.37px]" data-aos="fade-up" data-aos-delay="200">
            Paragraph 1. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam a aliquam nunc. Quisque egestas,
            enim nec euismod lobortis, metus ante tincidunt purus, sit amet condimentum metus urna eu velit. Proin justo
            dolor, rutrum eget est ut, ultrices bibendum ligula. Curabitur eget quam at quam pulvinar finibus. Maecenas
            quis maximus nisi, sed tempus tellus. Curabitur ex dui, tincidunt sit amet magna eget, volutpat pretium
            massa. Pellentesque augue mi, accumsan consectetur tortor id, tempor rutrum tellus. Proin dictum tellus
            purus, in condimentum massa commodo eu. Sed sit amet massa bibendum, ultricies lectus in, laoreet metus.
            Phasellus ornare, enim sit amet pretium accumsan, felis quam aliquet ante, ac laoreet orci massa vel metus.
            Sed ex augue, fermentum nec hendrerit at, lacinia a ligula. Phasellus enim purus, bibendum gravida auctor
            ac, suscipit vel velit. Mauris a lectus id nibh sagittis posuere ac sit amet est. Curabitur nunc eros,
            fringilla vitae facilisis et, fermentum in lectus.
          </p>
        </div>
      </Section>
    </>
  );
};
