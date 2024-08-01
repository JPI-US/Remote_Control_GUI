import React from "react";
import { useState } from "react";
import { Card, CardBody, CardHeader, Input } from "reactstrap";
import ".././CSS/DatePicker.css";

export const DPicker = ({ chooseDate }) => {
  const [startDate, setStartDate] = useState(new Date());

  const getProperDate = () => {
    if (startDate.getMonth() > 8)
      if (startDate.getDate() > 9)
        return `${startDate.getFullYear()}-${startDate.getMonth() + 1}-${startDate.getDate()}`;
      else
        return `${startDate.getFullYear()}-${startDate.getMonth() + 1}-0${startDate.getDate()}`;
    else if (startDate.getDate() > 9)
      return `${startDate.getFullYear()}-0${startDate.getMonth() + 1}-${startDate.getDate()}`;
    else
      return `${startDate.getFullYear()}-0${startDate.getMonth() + 1}-0${startDate.getDate()}`;
  };

  return (
    <>
      <Card className="date shadow janta-white">
        <CardHeader className="janta-white card-title">Date</CardHeader>
        <CardBody>
          <Input
            id="exampleDate"
            name="date"
            placeholder="date placeholder"
            type="date"
            defaultValue={getProperDate()}
            onChange={(event) => {
              console.log(new Date(event.target.value.replace(/-/g, "/")));
              chooseDate(new Date(event.target.value.replace(/-/g, "/")));
              setStartDate(new Date(event.target.value.replace(/-/g, "/")));
            }}
          />
        </CardBody>
      </Card>
    </>
  );
};
