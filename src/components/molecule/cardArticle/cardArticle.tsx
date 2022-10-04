import { CardArticleTypes } from "../../../../interface.model";

const CardArticle: React.FC<CardArticleTypes> = ({
  id,
  image,
  title,
  shortDesc,
}) => {
  return (
    <div className="card-article flex h-full w-full flex-col gap-4">
      <div className="image h-0 w-0 overflow-hidden border border-abu bg-abu pb-2/3 pr-full">
        <img
          src={image}
          alt="thumbnail"
          className="h-full w-full object-cover object-center"
        />
      </div>
      <div className="desc flex h-full w-full flex-col justify-between text-left">
        <h2 className="title text-2xl font-medium">{title}</h2>
        <p className="short-desc text-base font-light">{shortDesc}</p>
      </div>
    </div>
  );
};

export default CardArticle;
