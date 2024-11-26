import React from "react";
import { Card, CardHeader, Avatar, IconButton } from "@mui/material";
import { grey, red } from "@mui/material/colors";
import MoreVertIcon from "@mui/icons-material/MoreVert";

const Notification = () => (
  <Card sx={{ position: "fixed", bottom: 16, right: 16, bgcolor: grey[800] }}>
    <CardHeader
      avatar={
        <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
          R
        </Avatar>
      }
      action={
        <IconButton aria-label="settings">
          <MoreVertIcon />
        </IconButton>
      }
      title="Shrimp and Chorizo Paella"
      subheader="September 14, 2016"
    />
  </Card>
);

export default Notification;
