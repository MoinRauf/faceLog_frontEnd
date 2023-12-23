import React from "react";
import styles from "../../../ReusableCSS/form.module.css";
import Logo from "../../../Components/Logo";
import HoverButton from "../../../Components/CustomButton/HoverButton";
import FormField from "../../../Components/FormField";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import Stack from "@mui/material/Stack";
import axios from "axios";

// const options = {method: 'POST', url: 'http://localhost:3001/SetTimeInterval'};

// axios.request(options).then(function (response) {
//   console.log(response.data);
// }).catch(function (error) {
//   console.error(error);
// });

// es file main <form> </form> k icon remove krne hain

const SetTimeInterval = () => {
  return (
    <div className={styles.formBody} style={{ minHeight: "120vh" }}>
      {/* LOGO */}
      <Logo />

      {/* Blue Admin Registration Form Container */}
      <div className={styles.formContainer} style={{ marginTop: "100px" }}>
        <h1 className={styles.formheading}>Set Time Interval</h1>

        {/* HTML form */}
        <form className={styles.form}>
          <Stack spacing={0} direction="row">
            <FormField label="Attendance Timing" inputType="time"/>
            <FormField
              icon={<AccessTimeIcon />}
              inputType="time"
              placeholder="To"
            />
          </Stack>

          <Stack spacing={0} direction="row">
            <FormField
              label="Present Timing"
              inputType="time"
            />
            <FormField
              icon={<AccessTimeIcon />} // remove
              inputType="time"
            />
          </Stack>
          <Stack spacing={0} direction="row">
            <FormField
              label="Absent Timing"
              inputType="time"
            />
            <FormField
              icon={<AccessTimeIcon />} // remove
              inputType="time"
            />
          </Stack>

          <Stack spacing={0} direction="row">
            <FormField
              label="Late Timing"
              inputType="time"
            />
            <FormField
              icon={<AccessTimeIcon />} // remove
              inputType="time"
            />
          </Stack>
          <Stack spacing={0} direction="row">
            <FormField
              label="Half Day Timing"
              inputType="time"
            />
            <FormField
              icon={<AccessTimeIcon />} // remove
              inputType="time"
            />
          </Stack>

          {/* Register button */}
          <div style={{ margin: "20px 0px 30px" }}>
            <HoverButton label="Submit" bgColor="#16344f" textColor="#d9eff5" />
          </div>
        </form>
      </div>
    </div>
  );
};

export default SetTimeInterval;
