import Slider from "react-slick";

interface CarouselProps {
  slidesToShow?: number;
  children: React.ReactNode;
}

function CarouselArrows(props: any) {
  const { className, style, onClick } = props;
  return (
    <div
      className={`!flex items-center !h-10 !w-10 justify-center rounded-xl z-10 ${className}`}
      style={{ ...style, display: "flex", alignItems: "center", background: "white" }}
      onClick={onClick}
    />
  );
}

export const Carousel = ({ slidesToShow = 1, children }: CarouselProps) => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 2000,
    autoplaySpeed: 0,
    slidesToShow,
    slidesToScroll: 1,
    easing: "easeInOut",
    nextArrow: <CarouselArrows />,
    prevArrow: <CarouselArrows />,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: false,
          autoplay: true,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          autoplay: false,
          arrows: true,
        },
      },
    ],
  };

  return <Slider {...settings}>{children}</Slider>;
};
