import React, { useState } from "react";
import { styled } from "@mui/material/styles";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import Stack from "@mui/material/Stack";
import Avatar from "@mui/material/Avatar";
import { CameraAlt } from "@material-ui/icons";
const Input = styled("input")({
  display: "none",
});

export default function ImageUploadButton() {
  const [selectedImage, setSelectedImage] = useState([]);
  const onImageChange = (event) => {
    console.log("image selected", event.target.files);
    if (event.target.files && event.target.files[0]) {
      let img = event.target.files[0];
      setSelectedImage(URL.createObjectURL(img));
    }
  };
  return (
    <Stack direction="row" alignItems="center" spacing={2}>
      <Avatar
        alt="Remy Sharp"
        src={selectedImage}
        sx={{ width: 100, height: 100 }}
      />
      <label htmlFor="contained-button-file">
        <Input
          accept="image/*"
          id="contained-button-file"
          multiple
          type="file"
          onChange={(event) => onImageChange(event)}
        />
        <Button variant="contained" component="span" startIcon={<CameraAlt />}>
          Upload
        </Button>
      </label>
    </Stack>
  );
}
