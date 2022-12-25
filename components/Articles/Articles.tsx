import { Container } from "../Shared";
import Image from "next/image";

const articles = [
  {
    id: "1",
    title: "Article title goes here and it should be long up to two lines",
    image: "/images/article-img.svg",
    category: "category",
  },
  {
    id: "2",
    title: "Article title goes here and it should be long up to two lines",
    image: "/images/article-img.svg",
    category: "category",
  },
  {
    id: "3",
    title: "Article title goes here and it should be long up to two lines",
    image: "/images/article-img.svg",
    category: "category",
  },
  {
    id: "4",
    title: "Article title goes here and it should be long up to two lines",
    image: "/images/article-img.svg",
    category: "category",
  },
  {
    id: "5",
    title: "Article title goes here and it should be long up to two lines",
    image: "/images/article-img.svg",
    category: "category",
  },
  {
    id: "6",
    title: "Article title goes here and it should be long up to two lines",
    image: "/images/article-img.svg",
    category: "category",
  },
  {
    id: "7",
    title: "Article title goes here and it should be long up to two lines",
    image: "/images/article-img.svg",
    category: "category",
  },
  {
    id: "8",
    title: "Article title goes here and it should be long up to two lines",
    image: "/images/article-img.svg",
    category: "category",
  },
  {
    id: "9",
    title: "Article title goes here and it should be long up to two lines",
    image: "/images/article-img.svg",
    category: "category",
  },
  {
    id: "10",
    title: "Article title goes here and it should be long up to two lines",
    image: "/images/article-img.svg",
    category: "category",
  },
  {
    id: "11",
    title: "Article title goes here and it should be long up to two lines",
    image: "/images/article-img.svg",
    category: "category",
  },
  {
    id: "12",
    title: "Article title goes here and it should be long up to two lines",
    image: "/images/article-img.svg",
    category: "category",
  },
  {
    id: "13",
    title: "Article title goes here and it should be long up to two lines",
    image: "/images/article-img.svg",
    category: "category",
  },
  {
    id: "14",
    title: "Article title goes here and it should be long up to two lines",
    image: "/images/article-img.svg",
    category: "category",
  },
];

export const Articles = () => {
  return (
    <Container>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
        {articles.map((article) => (
          <div key={article.id}>
            <div className="h-[320px]">
              <Image
                src={article.image}
                height={100}
                width={100}
                alt={article.title}
                className="h-full w-full object-cover"
              />
            </div>
            <div className="p-4">
              <h3 className="text-2xl leading-[38px] font-bold line-clamp-2">{article.title}</h3>
              <p className="text-xs text-customGray uppercase mt-2">
                <span>Category</span>
                <span className="mx-2">•</span>
                <span>{article.category}</span>
              </p>
            </div>
          </div>
        ))}
      </div>
    </Container>
  );
};
