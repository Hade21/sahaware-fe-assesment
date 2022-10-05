import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../app/store";
import { CardArticle, Footer, Header } from "../../components";
import { setArticle } from "../../features/articleSlice/articleSlice";
import { useGetArticlesQuery } from "../../services/postApi/articleApi";

const ArticlePage = () => {
  const dispatch = useDispatch();
  const { data, isError, isLoading } = useGetArticlesQuery(undefined);
  const content = useSelector((state: RootState) => state.article.content);

  useEffect(() => {
    const initialData = data?.content.slice(0, 7);
    if (!isError) {
      dispatch(setArticle(initialData));
    }
  }, []);

  return (
    <>
      <Header />
      <div className="list-article my-8 grid grid-cols-1 gap-8 px-4 md:mt-20 md:mb-64 md:grid-cols-3 md:px-[17%]">
        {isLoading ? (
          <p className="text-center">Loading...</p>
        ) : isError ? (
          <p className="h-full">Error fetching data</p>
        ) : (
          content?.map((item, i) => {
            return (
              <CardArticle
                id={item.id}
                image={item.image}
                shortDesc={item.short_description}
                title={item.title}
                key={i}
              />
            );
          })
        )}
      </div>
      <Footer />
    </>
  );
};

export default ArticlePage;
