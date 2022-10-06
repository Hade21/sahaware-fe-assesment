import React from "react";
import { useCookies } from "react-cookie";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../app/store";
import {
  setNewCategory,
  setNewDiscription,
  setNewImage,
  setNewShortDescription,
  setNewTitle,
  setPublished,
} from "../../../features/articleSlice/articleSlice";
import {
  useCreateNewArticleMutation,
  useGetListCategoryQuery,
} from "../../../services/postApi/articleApi";
import {
  Button,
  Input,
  ListCategories,
  TextArea,
  TextEditor,
} from "../../atom";

const NewArticleTemplate = () => {
  const dispatch = useDispatch();
  const [cookies] = useCookies(["token"]);
  const { data } = useGetListCategoryQuery(undefined);
  const [addArticle, { isSuccess }] = useCreateNewArticleMutation();
  const title = useSelector((state: RootState) => state.article.newTitle);
  const short_description = useSelector(
    (state: RootState) => state.article.newShortDescription
  );
  const published = useSelector((state: RootState) => state.article.published);
  const description = useSelector(
    (state: RootState) => state.article.newDiscription
  );
  const category = useSelector((state: RootState) => state.article.newCategory);
  const image = useSelector((state: RootState) => state.article.newImage);

  const handleTitle = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setNewTitle(e.target.value));
  };
  const handleDescription = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    dispatch(setNewDiscription(e.target.value));
  };
  const handleShortDescription = (
    e: React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    dispatch(setNewShortDescription(e.target.value));
  };
  const handleThumbnail = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files && files[0]) {
      const image = URL.createObjectURL(files[0]);
      dispatch(setNewImage(image));
    }
  };
  const handleCategory = (e: React.ChangeEvent<HTMLSelectElement>) => {
    dispatch(setNewCategory(e.target.value));
  };
  const handlePublished = () => {
    dispatch(setPublished(!published));
  };
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const token: string = cookies.token;
    const body = new FormData();
    body.append("title", title);
    body.append("short_description", short_description);
    body.append("description", description);
    body.append("category_id", category);
    body.append("is_visible", published.toString());
    body.append("image", image);
    const data = { body, token };
    addArticle(data);
  };

  return (
    <form
      className="flex flex-col justify-center gap-6 md:flex-row"
      onSubmit={handleSubmit}
    >
      <div className="create-article">
        <h2 className="title mb-8 text-2xl font-medium">
          Create a New Article
        </h2>
        <div className="wrapper flex flex-col gap-7">
          <Input
            id="title"
            label="Title"
            placeholder="Enter your Article Title"
            type="text"
            value={title}
            onChange={handleTitle}
          />
          <TextEditor value={description} onChange={handleDescription} />
        </div>
      </div>
      <div className="publication-detail">
        <h2 className="title mb-8 text-2xl font-medium">Publication Detail</h2>
        <div className="wrapper flex flex-col gap-7">
          <TextArea
            id="short_description"
            label="Short description"
            placeholder="Enter your Article Short Description"
            value={short_description}
            onChange={handleShortDescription}
          />
          <div className="thumbnail">
            <label htmlFor="thumbnail" className="mb-2 text-base font-normal">
              Thumbnail
            </label>
            <input
              type="file"
              name="thumbnail"
              id="thumbnail"
              className="w-full rounded border border-input-border py-[7px]"
            />
          </div>
          <div className="categories">
            <ListCategories data={data?.content} onChange={handleCategory} />
          </div>
          <div className="published">
            <label
              htmlFor="published"
              className="flex w-full items-center justify-between"
            >
              Published
              <input
                type="checkbox"
                name="published"
                id="published"
                className="peer sr-only"
                onChange={handlePublished}
              />
              <div
                className="toggle relative h-3 w-8 rounded-full bg-gray-300 after:absolute after:-top-[3px] after:-left-[2px] after:h-5 after:w-5 after:rounded-full after:bg-gray-400 after:transition-all after:content-[''] peer-checked:bg-toggle-bg peer-checked:bg-opacity-30
           peer-checked:after:translate-x-4  peer-checked:after:bg-toggle-button peer-focus:outline-none"
              />
            </label>
          </div>
          <Button type="submit">Published</Button>
        </div>
      </div>
    </form>
  );
};

export default NewArticleTemplate;
