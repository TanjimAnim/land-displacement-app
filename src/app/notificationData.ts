//notification data

//month declaration for displaying the mentioned date format
const monthNames: string[] = [
  "Jan.",
  "Feb.",
  "Mar.",
  "Apr.",
  "May",
  "June",
  "Jul.",
  "Aug.",
  "Sept.",
  "Oct.",
  "Nov.",
  "Dec.",
];

const today: Date = new Date();

const month: string = monthNames[today.getMonth()];

const day: number = today.getDate();

const year: number = today.getFullYear();

const time: string =
  today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();

export const currentDate: string = `${month} ${day},${year} ${time}`;
const previousDate: string = `${month} ${day - 1},${year} ${time}`;
const olderDate: string = `${month} ${day - 2},${year} ${time}`;

interface Notification {
  id: number;
  status: string;
  title: string;
  message: string;
  dateString: string;
  currentDay: number;
}

export const NotificationData: Notification[] = [
  {
    id: 1,
    status: "info",
    title: "Information Notification",
    message: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    dateString: currentDate,
    currentDay: day,
  },
  {
    id: 2,
    status: "success",
    title: "Success Notification",
    message: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    dateString: currentDate,
    currentDay: day,
  },
  {
    id: 3,
    status: "error",
    title: "Error Notification",
    message: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    dateString: previousDate,
    currentDay: day - 1,
  },
  {
    id: 4,
    status: "warning",
    title: "Warning Notification",
    message: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    dateString: previousDate,
    currentDay: day - 1,
  },
  {
    id: 5,
    status: "success",
    title: "Success Notification",
    message: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    dateString: olderDate,
    currentDay: day - 2,
  },
];
