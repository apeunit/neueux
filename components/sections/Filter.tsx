import React, { useState } from "react";
import FilterCard from "../card/Filter";
import FilterBadge from "../FilterBadge";

const Filter = ({ tags, userflows }) => {
  const [showFilter, setShowFilter] = useState(false);
  const [listIndex, setListIndex] = useState(0);

  const [selectedUserflows, setSelectedUserflows] = useState([]);

  const [selectedTags, setSelectedTags] = useState([]);

  const [selectedList, setSelectedList] = useState([]);

  const onFilterSelect = (value, type) => {
    if (type == "userflows") {
      const all = selectedUserflows;

      if (!all.includes(value)) {
        all.push(value);
        setSelectedUserflows(all);
      }
    }

    if (type == "tags") {
      const all = selectedTags;
      if (!all.includes(value)) {
        all.push(value);
        setSelectedTags(all);
      }
    }

    setSelectedList([...selectedUserflows, ...selectedTags]);
    setListIndex(listIndex + 1);
    return value;
  };

  const onFilterRemove = (value) => {
    let tagsList = selectedTags;
    let userflowList = selectedUserflows;

    if (selectedUserflows.includes(value)) {
      userflowList = selectedUserflows.filter(
        (item) => item.slug !== value.slug
      );
      setSelectedUserflows(userflowList);
    } else if (selectedTags.includes(value)) {
      tagsList = selectedTags.filter((item) => item.slug !== value.slug);
      setSelectedTags(tagsList);
    }

    setSelectedList([...userflowList, ...tagsList]);
    setListIndex(listIndex + 1);
    return value;
  };

  return (
    <div className="w-full flex">
      <div key={`list-index-${listIndex}`} className="flex space-x-2">
        {selectedUserflows.map((userflow) => (
          <FilterBadge
            key={`userflow-filter-${userflow.slug}`}
            onSelect={() => onFilterRemove(userflow)}
            text={userflow.name}
          />
        ))}
        {selectedTags.map((tag) => (
          <FilterBadge
            key={`tag-filter-${tag.slug}`}
            onSelect={() => onFilterRemove(tag)}
            text={tag.name}
          />
        ))}
      </div>
      <div className="ml-auto">
        <button
          type="button"
          onClick={() => setShowFilter(true)}
          className="bg-black cursor-pointer text-white text-xs px-4 leading-4 py-3 font-bold transition-250ms rounded-full"
        >
          Filter by Categories
        </button>
      </div>
      {showFilter && (
        <FilterCard
          key={`filter-${listIndex}`}
          tags={tags}
          index={listIndex}
          userflows={userflows}
          selectedList={selectedList}
          onClose={() => setShowFilter(false)}
          onSelect={(value, type) => onFilterSelect(value, type)}
          onRemove={onFilterRemove}
        />
      )}
    </div>
  );
};

export default Filter;
