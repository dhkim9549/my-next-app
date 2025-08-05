'use client'

import Image from "next/image";

import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';
import TextField from '@mui/material/TextField';

function doClick() {
  alert("qwer")
}

export default function Home() {
  return (
    <div className="">
      <div className="text-center my-10 py-10 bg-red-200 lg:text-left lg:m-10 lg:p-10">
        <blockquote className="text-2xl font-bold italic text-slate-900">
          Fail Fast App
        </blockquote>
      </div>
      <Paper className="m-4 p-12 bg-red-200 flex flex-wrap flex-col lg:flex-row gap-3 lg:gap-12">
         <TextField
          id="trgtLwdgCd" label="목적물주소 법정동코드" variant="filled"
          inputProps={{min: 0, maxLength:10 }}
          onChange={(e) => {
            setTrgtLwdgCd(e.target.value);
          }}
        />
      </Paper>
      <div className="m-8 lg:mx-20">
        <Button variant="contained" size="large" onClick={doClick}>조회</Button>
      </div>
   </div>
  )
}
