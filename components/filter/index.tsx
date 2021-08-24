import React, { useState, useEffect } from "react";
import FilterCard from "./Popup";
import FilterBadge from "./Badge";
import { useRouter } from "next/router";
import Button from "components/Button";

const Filter = ({
  tags,
  userflows,
  routeParams,
  routePathname,
  fallbackRoutePathname,
}) => {
  const router = useRouter();

  const [showFilter, setShowFilter] = useState(false);
  const [listIndex, setListIndex] = useState(0);

  const [selectedUserflows, setSelectedUserflows] = useState([]);

  const [selectedTags, setSelectedTags] = useState([]);

  const [selectedList, setSelectedList] = useState([]);

  const updateRoute = (userflowList, tagsList) => {
    const params = routeParams ? routeParams : {};
    const pathname = routePathname ? routePathname : router.pathname;
    const fallbackPathname = fallbackRoutePathname
      ? fallbackRoutePathname
      : router.pathname;
    router.replace({
      pathname:
        userflowList.length || tagsList.length ? pathname : fallbackPathname,
      query: {
        ...params,
        userflows: userflowList.map((userflow) => userflow.id),
        tags: tagsList.map((tag) => tag.id),
      },
    });
  };

  useEffect(() => {
    let queryUserflows = router.query.userflows;
    let queryTags = router.query.tags;

    if (showFilter) {
      return;
    }

    let tagsList = [];
    let userflowList = [];

    if (queryUserflows) {
      queryUserflows = !Array.isArray(queryUserflows)
        ? [queryUserflows]
        : queryUserflows;
      userflowList = userflows.filter((userflow) =>
        queryUserflows.includes(userflow.id)
      );
    }

    if (queryTags) {
      queryTags = !Array.isArray(queryTags) ? [queryTags] : queryTags;
      tagsList = tags.filter((tag) => queryTags.includes(tag.id));
    }

    setSelectedUserflows(userflowList);
    setSelectedTags(tagsList);

    setSelectedList([...userflowList, ...tagsList]);
    setListIndex(listIndex + 1);
  }, [router]);

  const onFilterSelect = (value, type) => {
    let tagsList = selectedTags;
    let userflowList = selectedUserflows;

    if (type == "userflows") {
      if (!userflowList.some((userflow) => userflow.id === value.id)) {
        userflowList.push(value);
        setSelectedUserflows(userflowList);
      }
    }

    if (type == "tags") {
      if (!tagsList.some((tag) => tag.id === value.id)) {
        tagsList.push(value);
        setSelectedTags(tagsList);
      }
    }

    updateRoute(userflowList, tagsList);

    setSelectedList([...userflowList, ...tagsList]);
    setListIndex(listIndex + 1);
    return value;
  };

  const onFilterRemove = (value) => {
    let tagsList = selectedTags;
    let userflowList = selectedUserflows;

    if (selectedUserflows.some((userflow) => userflow.id === value.id)) {
      userflowList = selectedUserflows.filter(
        (item) => item.id !== value.id
      );
      setSelectedUserflows(userflowList);
    } else if (selectedTags.some((tag) => tag.id === value.id)) {
      tagsList = selectedTags.filter((item) => item.id !== value.id);
      setSelectedTags(tagsList);
    }

    updateRoute(userflowList, tagsList);

    setSelectedList([...userflowList, ...tagsList]);
    setListIndex(listIndex + 1);
    return value;
  };

  const onFilterClear = () => {
    setSelectedUserflows([]);
    setSelectedTags([]);

    updateRoute([], []);

    setSelectedList([]);
    setListIndex(listIndex + 1);
  };

  return (
    <div className="static">
      <div key={`list-index-filter-${listIndex}`} className="absolute left-0 space-x-2">
        {selectedUserflows.map((userflow) => (
          <FilterBadge
            key={`userflow-filter-${userflow.id}`}
            onSelect={() => onFilterRemove(userflow)}
            text={userflow.name}
          />
        ))}
        {selectedTags.map((tag) => (
          <FilterBadge
            key={`tag-filter-${tag.id}`}
            onSelect={() => onFilterRemove(tag)}
            text={tag.name}
          />
        ))}
      </div>

      <div className="hidden sm:inline">
        <Button onClick={() => setShowFilter(true)} type="Primary" size="lg" >
          Filter by Categories
        </Button>
      </div>
      
      <div className="sm:hidden bottom-6 z-50 fixed left-0 w-full text-center">
        <Button onClick={() => setShowFilter(true)} type="Primary" size="sm">
          Filter
        </Button>
      </div>

      {showFilter && (
        <FilterCard
          key={`filter-card-${listIndex}`}
          tags={tags}
          index={listIndex}
          userflows={userflows}
          selectedList={selectedList}
          onClose={() => setShowFilter(false)}
          onClear={onFilterClear}
          onSelect={(value, type) => onFilterSelect(value, type)}
          onRemove={onFilterRemove}
        />
      )}
    </div>
  );
};

export default Filter;