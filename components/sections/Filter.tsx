import React, { useState, useEffect } from "react";
import FilterCard from "components/card/Filter";
import FilterBadge from "components/FilterBadge";
import { useRouter } from "next/router";
import Button from "./Button";

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
        userflows: userflowList.map((userflow) => userflow.slug),
        tags: tagsList.map((tag) => tag.slug),
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
        queryUserflows.includes(userflow.slug)
      );
    }

    if (queryTags) {
      queryTags = !Array.isArray(queryTags) ? [queryTags] : queryTags;
      tagsList = tags.filter((tag) => queryTags.includes(tag.slug));
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
      if (!userflowList.some((userflow) => userflow.slug === value.slug)) {
        userflowList.push(value);
        setSelectedUserflows(userflowList);
      }
    }

    if (type == "tags") {
      if (!tagsList.some((tag) => tag.slug === value.slug)) {
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

    if (selectedUserflows.some((userflow) => userflow.slug === value.slug)) {
      userflowList = selectedUserflows.filter(
        (item) => item.slug !== value.slug
      );
      setSelectedUserflows(userflowList);
    } else if (selectedTags.some((tag) => tag.slug === value.slug)) {
      tagsList = selectedTags.filter((item) => item.slug !== value.slug);
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
<<<<<<< HEAD
    <div className="w-full flex lg:relative md:relative sm:relative bottom-6 z-50 fixed">
=======
    <div className="w-full flex xl:relative mt-10">
>>>>>>> main
      <div
        key={`list-index-filter-${listIndex}`}
        className="flex space-x-2 w-full"
      >
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
<<<<<<< HEAD
      <div className="lg:ml-auto md:ml-auto sm:ml-auto mx-auto lg:mx-0 md:mx-0 sm:mx-0 mt-10">
      <div className="hidden lg:block md:block sm:block">
=======
      <div className="lg:ml-auto mx-auto lg:mx-0 lg:bottom-0 bottom-6 z-50 fixed lg:relative w-full lg:justify-end justify-center flex
">
      <div className="hidden xl:block">
>>>>>>> main
        <Button onClick={() => setShowFilter(true)} type="Primary" size="lg" >
        Filter by Categories
        </Button>
        </div>
        <div className="lg:hidden md:hidden sm:hidden">
        <Button onClick={() => setShowFilter(true)} type="Primary" size="sm">
        Filter
        </Button>
        </div>
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
