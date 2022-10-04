import { useSelector } from "react-redux";
import { RootState } from "../../app/store";
import { WomenPictMobile, WomenPictWeb } from "../../assets";
import { CardArticle, Footer, Header } from "../../components";
import { useGetArticlesQuery } from "../../services/postApi/articleApi";

const Homepage = () => {
  const { isLoading, data, isError } = useGetArticlesQuery(undefined);
  const width = useSelector((state: RootState) => state.user.width);

  return (
    <>
      <Header />
      <div className="image overflow-hidden sm:p-20">
        <img
          src={width > 768 ? WomenPictWeb : WomenPictMobile}
          alt="home-image"
          className="h-full w-full"
        />
      </div>
      <div className="article mb-14 mt-8 px-4 sm:mb-28 sm:mt-0 sm:px-20">
        <h1 className="title text-center text-5xl font-bold">Article</h1>
        <div className="list-article mt-12 grid gap-6 sm:grid-cols-3">
          {isLoading ? (
            <p className="w-full text-center">Loading...</p>
          ) : isError ? (
            <p className="text-center">Error fetching data</p>
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
      <Footer />
    </>
  );
};

export default Homepage;
