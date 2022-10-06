import { Footer, Header, NewArticleTemplate } from "../../components";

const CreateArticle = () => {
  return (
    <>
      <Header />
      <div className="main mt-20 mb-[234px] px-4 md:px-[17%]">
        <NewArticleTemplate />
      </div>
      <Footer />
    </>
  );
};

export default CreateArticle;
