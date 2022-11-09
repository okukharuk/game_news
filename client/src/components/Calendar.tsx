import ru from 'date-fns/locale/ru';
import React from 'react';
import ReactDatePicker, { registerLocale } from 'react-datepicker';

import chevronDown from '../public/svgs/chevron-down.svg';
import chevronUp from '../public/svgs/chevron-up.svg';

registerLocale("ru", ru);

interface CalendarProps {
  date: Date;
  handleDate: (date: Date) => void;
  label: string;
  calendarSelected: boolean;
  setCalendarSelected: (selected: boolean) => void;
}

const Calendar: React.FC<CalendarProps> = ({
  date,
  handleDate,
  label,
  calendarSelected,
  setCalendarSelected,
}) => {
  const handleDateSelect = (date: Date) => {};

  const handleDateChange = (date: Date) => {
    handleDate(date);
  };

  return (
    <div className="flex flex-row">
      <div className="mr-4">{label}</div>
      <div
        onMouseOver={() => {
          setCalendarSelected(true);
        }}
        onMouseOut={() => {
          setCalendarSelected(false);
        }}
        className="flex flex-row"
      >
        <ReactDatePicker
          maxDate={new Date()}
          locale="ru"
          className="bg-transparent cursor-pointer w-[4.4rem]"
          selected={date}
          onSelect={handleDateSelect}
          onChange={handleDateChange}
          open={calendarSelected}
        />
        <img src={calendarSelected ? chevronUp : chevronDown} className="w-4" />
      </div>
    </div>
  );
};

export default Calendar;
