import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
// import TextareaAutosize from '@mui/material/TextareaAutosize';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import { useState } from "react";
import Swal from "sweetalert2";
import app_config from '../../config';
import { Formik } from "formik";
import Select from '@mui/material/Select';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';

export default function AddNovel() {

  const url = app_config.api_url;
  const [currentUser, setCurrentUser] = useState(JSON.parse(sessionStorage.getItem('user')));

  const novelform = {
    title: "",
  description: "",
  thumbnail: "",
  price: "",
  author: "",
  rentable: false,
  rentprice: 0,
  uploadedBy : currentUser._id
  }

  const [age, setRent] = React.useState('');

  const handleChange = (event) => {
    setRent(event.target.value);
  };

  const [thumbnail, setThumbnail] = useState("");
  const [novel, setNovel] = useState("");

  const novelSubmit = (values) => {
    values.thumbnail = thumbnail;
    values.file = novel;
    console.log(values);

    const reqOpt = {
      method: "POST",
      body: JSON.stringify(values),
      headers: {
        "Content-Type": "application/json",
      },
    };

    fetch(url + "/novel/add", reqOpt)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        Swal.fire({
          icon: "success",
          title: "Success!",
          text: "Novel Added Successfully!",
        });
      });
  };

  const uploadThumbnail = (e) => {
    let formdata = new FormData();
    let file = e.target.files[0];
    setThumbnail(file.name);
    formdata.append("file", file);

    fetch(+ "/util/uploadfile", { method: "POST", body: formdata })
      .then((res) => res.json())
      .then((data) => console.log(data));
  };

  const uploadNovel = (e) => {
    let formdata = new FormData();
    let file = e.target.files[0];
    setNovel(file.name);
    formdata.append("file", file);

    fetch(+ "/util/uploadfile", { method: "POST", body: formdata })
      .then((res) => res.json())
      .then((data) => console.log(data));
  };



  return (
    <Card sx={{ maxWidth: 800 }}>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          '& .MuiTextField-root': { width: '70ch' },
        }}>

        <h1>ADD NOVEL</h1>
        <Formik initialValues={novelform} onSubmit={novelSubmit}>
          {({ values, handleChange, handleSubmit }) => (
            <form onSubmit={handleSubmit}>


              <TextField onChange={handleChange}
                value={values.BookName} id="Title" label=" Title of Book*" variant="filled" /><br /><br />

              <TextField onChange={handleChange}
                value={values.Publication} id="Author" label="Author*" variant="filled" /><br /><br />

              <TextField onChange={handleChange}
                value={values.TitleOfBook} id="Thumbnail" label="Thumbnail*" variant="filled" /><br /><br />

              <TextField onChange={handleChange}
                value={values.AuthorName} id="Price" label="Price*" variant="filled" /><br /><br />

              <InputLabel id="demo-simple-select-label">Rentable</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={age}
                label="Rentable"
                onChange={handleChange}
              >
                <MenuItem value={10}>Yes</MenuItem>
                <MenuItem value={20}>No</MenuItem>
              </Select><br />
              <TextField onChange={handleChange}
                value={values.Publication} id="rentprice" label="Rentprice*" variant="filled" /><br /><br />


              <Stack direction="row" spacing={5}>
                <Button variant="contained" component="label"> Upload File <input type="file" hidden /></Button>
                <Button variant="contained" type="submit" color="success">Submit</Button>
              </Stack>
            </form>
          )}
        </Formik>
      </Box>
    </Card>
  );
}