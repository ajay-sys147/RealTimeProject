import React from "react";
import VideoPlayer from "./VideoPlayer";
import { Card, CardBody, Typography } from "@material-tailwind/react";

export function Data({ course }) {
  return (
    <Card className="m-8 w-auto bg-blue-gray-200">
      <CardBody>
        <Typography variant="h2" color="blue-gray" className="mb-2">
          {course.name}
        </Typography>
        <Typography variant="h5">{course.description}</Typography>
        <div className="mt-6">
          {course.list.map((play, index) => (
            <VideoPlayer key={index} playlistId={play} />
          ))}
        </div>
      </CardBody>
    </Card>
  );
}
