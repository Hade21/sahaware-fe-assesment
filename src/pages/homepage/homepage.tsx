import { WomenPictWeb } from "../../assets";
import { CardArticle, Header } from "../../components";
import { useGetArticlesQuery } from "../../services/postApi/articleApi";

const Homepage = () => {
  const { isLoading, data, isError } = useGetArticlesQuery(undefined);

  return (
    <>
      <Header />
      <div className="image overflow-hidden p-20">
        <img src={WomenPictWeb} alt="home-image" className="h-full w-full" />
      </div>
      <div className="article px-20">
        <h1 className="title text-5xl font-bold">Article</h1>
        <div className="list-article mt-12 grid grid-cols-3 gap-6">
          {isLoading ? (
            <p>Loading...</p>
          ) : isError ? (
            <p>Error</p>
          ) : (
            data?.content?.slice(-3).map((article, i) => {
              return (
                <CardArticle
                  key={i}
                  id={article.id}
                  image={article.image}
                  title={article.title}
                  shortDesc={article.short_description}
                />
              );
            })
          )}
        </div>
      </div>
    </>
  );
};

export default Homepage;
