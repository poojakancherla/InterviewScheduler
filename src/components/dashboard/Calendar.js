import React from "react";
import moment from "moment";

import Calendar from "react-big-calendar";

// a localizer for BigCalendar
Calendar.momentLocalizer(moment);

// this weird syntax is just a shorthand way of specifying loaders
require("style-loader");
require("css-loader");
require("react-big-calendar/lib/css/react-big-calendar.css");

const CalendarComponent = () => {
  return (
    // React Components in JSX look like HTML tags
    <Calendar style={{ height: "420px" }} events={[]} />
  );
};

export default CalendarComponent;
