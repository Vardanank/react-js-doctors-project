import { DoctorInfo } from "../Images/Svg";

const dateNow = new Date();
const meetingList = [
    {
      meeting: {
        date: dateNow.toDateString(),
        time: dateNow.getTime(),
        connectType: "чат",
        status:'grno'
      },
      doctor: {
        avatar: DoctorInfo,
        name: "Ольга Никитина",
        profile: "pediator",
        experience: " year",
      },
    },
    {
      meeting: {
        date: dateNow.toDateString(),
        time: dateNow.getTime(),
        connectType: "чат",
        status:'grno'
      },
      doctor: {
        avatar: DoctorInfo,
        name: "Ольга Никитина",
        profile: "pediator",
        experience: " year",
      },
    },
    {
      meeting: {
        date: dateNow.toDateString(),
        time: dateNow.getTime(),
        connectType: "чат",
        status:'grno'
      },
      doctor: {
        avatar: DoctorInfo,
        name: "Ольга Никитина",
        profile: "pediator",
        experience: " year",
      },
    },
    {
      meeting: {
        date: dateNow.toDateString(),
        time: dateNow.getTime(),
        connectType: "чат",
        status:'grno'
      },
      doctor: {
        avatar: DoctorInfo,
        name: "Ольга Никитина",
        profile: "pediator",
        experience: " year",
      },
    },
    {
      meeting: {
        date: dateNow.toDateString(),
        time: dateNow.getTime(),
        connectType: "чат",
        status:'grno'
      },
      doctor: {
        avatar: DoctorInfo,
        name: "Ольга Никитина",
        profile: "pediator",
        experience: " year",
      },
    },
  ];
  export default {meetingList}