import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { RootState } from "../../app/store";
import { Footer, Header } from "../../components";
import { setSelectedArticle } from "../../features/articleSlice/articleSlice";

const DetailPage = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const article = useSelector(
    (state: RootState) => state.article.selectedArticle
  );
  const content = useSelector((state: RootState) => state.article.content);

  useEffect(() => {
    const detailArticle = content?.find((item) => item.id === id);
    dispatch(setSelectedArticle(detailArticle));
  }, [id]);

  return (
    <>
      <Header />
      <div className="article-wrapper mx-auto mt-20 mb-32 flex w-full max-w-2xl flex-col gap-10 px-4 md:px-0">
        <h1 className="title text-4xl font-medium">{article?.title}</h1>
        <p className="short-desc text-2xl font-light">
          {article?.short_description}
        </p>
        <div className="image h-0 w-0 bg-abu pb-2/3 pr-full">
          <img
            src={article?.image}
            alt="thumbnail"
            className="h-full w-full object-cover object-center"
          />
        </div>
        <p
          className="description"
          dangerouslySetInnerHTML={{
            __html: article ? article?.description : "",
          }}
        ></p>
      </div>
      <Footer />
    </>
  );
};

export default DetailPage;
