import React, { useState } from "react";

interface ListCategoriesProps {
  data?: [
    {
      id: string;
      title: string;
    }
  ];
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}
const ListCategories = ({ data, onChange }: ListCategoriesProps) => {
  const [selected, setSelected] = useState("");
  return (
    <div>
      <label htmlFor="list-categories"></label>
      <select
        name="list-category"
        value={selected}
        id="list-category"
        onChange={onChange}
        className="rounded border border-input-border bg-white p-4"
      >
        {data?.map((item, i) => {
          return <option value={item.id}>{item.title}</option>;
        })}
      </select>
    </div>
  );
};

export default ListCategories;
