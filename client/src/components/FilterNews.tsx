import React from 'react';
import ReactSelect, { ActionMeta } from 'react-select';

import { ISelect, SelectOptions } from '../consts/consts';
import { useAppDispatch } from '../hooks/redux';
import { NewsSlice } from '../store/reducers/NewsSlice';
import { PostsSlice } from '../store/reducers/PostsSlice';
import Calendar from './Calendar';

const FilterNews = () => {
  const [startDate, setStartDate] = React.useState(new Date());
  const [endDate, setEndDate] = React.useState(new Date());

  const [calendarStartSelected, setCalendarStartSelected] =
    React.useState(false);
  const [calendarEndSelected, setCalendarEndSelected] = React.useState(false);
  const [selectedType, setSelectedType] = React.useState<ISelect | null>({
    type: "publishAtDesc",
    label: "От новых к старым",
  });

  const dispatch = useAppDispatch();

  const resetPosts = () => {
    dispatch(NewsSlice.actions.update_page(1));
  };

  const handleSelect = (
    newValue: ISelect | null,
    actionMeta: ActionMeta<ISelect>
  ) => {
    setSelectedType(newValue);
    resetPosts();
    dispatch(NewsSlice.actions.update_type(newValue?.type || "publishAtDesc"));
  };

  const customStyles = {
    control: (provided: any) => ({
      ...provided,
      cursor: "pointer",
      backgroundColor: "transparent",
      outline: "none",
      border: "none",
      boxShadow: "none",
    }),
    option: (provided: any) => ({
      ...provided,
      backgroundColor: "white",
      color: "black",
      "&:hover": {
        backgroundColor: "rgba(37, 99, 235, 0.6)",
        color: "white",
      },
    }),
  };

  React.useEffect(() => {
    dispatch(PostsSlice.actions.reset_posts());
  }, [selectedType, startDate, endDate]);

  return (
    <div className="flex flex-col lg:flex-row w-full h-20 lg:h-16 items-center border-b-[1px] border-main-grey-600 text-main-grey-900 font-light text-sm mb-auto">
      <div className="flex flex-row mt-4 lg:mt-0">
        <Calendar
          date={startDate}
          handleDate={(date: Date) => {
            resetPosts();
            dispatch(NewsSlice.actions.update_from(date.getTime().toString()));
            setStartDate(date);
          }}
          label="От:"
          calendarSelected={calendarStartSelected}
          setCalendarSelected={(selected) => {
            setCalendarStartSelected(selected);
          }}
        />
        <Calendar
          date={endDate}
          handleDate={(date: Date) => {
            resetPosts();
            dispatch(NewsSlice.actions.update_to(date.getTime().toString()));
            setEndDate(date);
          }}
          label="До:"
          calendarSelected={calendarEndSelected}
          setCalendarSelected={(selected) => {
            setCalendarEndSelected(selected);
          }}
        />
      </div>
      <div className="flex flex-row my-auto lg:ml-auto items-center">
        <div>Показывать:</div>
        <ReactSelect
          isSearchable={false}
          styles={customStyles}
          options={SelectOptions}
          onChange={handleSelect}
          value={selectedType}
        />
      </div>
    </div>
  );
};

export default FilterNews;
