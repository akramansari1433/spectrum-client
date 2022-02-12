import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import CircularProgress from "@mui/material/CircularProgress";
import Button from "@mui/material/Button";
import axios from "axios";
import MessageBox from "../../utils/MessageBox";

export default function BookPhotoshoot() {
   const [name, setName] = useState();
   const [email, setEmail] = useState();
   const [phone, setPhone] = useState();
   const [date, setDate] = useState(new Date().toISOString().split("T")[0]);
   const [category, setCategory] = useState("");

   const [response, setResponse] = useState();
   const [error, setError] = useState();
   const [loading, setLoading] = useState(false);

   const [open, setOpen] = useState(false);
   const handleOpen = () => setOpen(true);
   const handleClose = () => setOpen(false);

   const handleSumit = (e) => {
      e.preventDefault();
      setLoading(true);
      axios
         .post("/booking/photoshoot", { name, email, phone, date, category })
         .then((res) => {
            if (res.data.message) {
               setLoading(false);
               handleOpen();
               setResponse(res.data.message);
               e.target.reset();
               setError("");
            }
         })
         .catch((err) => {
            setError(err.response.data.error);
            setLoading(false);
         });
   };

   return (
      <div className="px-md-5 px-3">
         <h1 className="text-center display-4 py-3">Book Photoshoot</h1>

         <hr className="w-75" />

         <form
            className="py-3 d-flex flex-column align-items-center"
            onSubmit={handleSumit}
         >
            <h2 className="py-3">Enter details:</h2>

            <TextField
               label="Name"
               sx={{ width: "20rem", marginBottom: 3 }}
               required
               type="text"
               onChange={(e) => setName(e.target.value)}
            />

            <TextField
               label="Email"
               sx={{ width: "20rem", marginBottom: 3 }}
               required
               type="email"
               onChange={(e) => setEmail(e.target.value)}
            />

            <TextField
               label="Phone"
               InputProps={{ inputProps: { minLength: 10, maxLength: 10 } }}
               sx={{ width: "20rem", marginBottom: 3 }}
               type="tel"
               required
               onKeyPress={(e) => {
                  if (!/[0-9]/.test(e.key)) {
                     e.preventDefault();
                  }
               }}
               onChange={(e) => setPhone(e.target.value)}
            />

            <TextField
               label="Date"
               type="date"
               min={date}
               defaultValue={date}
               sx={{ width: "20rem", marginBottom: 3 }}
               InputProps={{ inputProps: { min: date } }}
               InputLabelProps={{
                  shrink: true,
               }}
               onChange={(e) => setDate(e.target.value)}
               required
            />
            <FormControl sx={{ width: "20rem", marginBottom: 3 }}>
               <InputLabel id="demo-simple-select-label">Category</InputLabel>
               <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={category}
                  label="Category"
                  onChange={(e) => {
                     setCategory(e.target.value);
                  }}
               >
                  <MenuItem value="Wedding">Wedding</MenuItem>
                  <MenuItem value="Pre-Wedding">Pre-Wedding</MenuItem>
                  <MenuItem value="Fashion & Portrait">
                     Fashion & Portrait
                  </MenuItem>
                  <MenuItem value="Makeup">Makeup</MenuItem>
                  <MenuItem value="Baby">Baby</MenuItem>
                  <MenuItem value="Product">Product</MenuItem>
               </Select>
            </FormControl>
            <Button variant="contained" type="submit" color="primary">
               {loading ? (
                  <CircularProgress color="inherit" size={25} />
               ) : (
                  "Book"
               )}
            </Button>

            <p className="text-danger">{error}</p>
         </form>

         <hr className="w-75" />

         <MessageBox
            open={open}
            handleClose={handleClose}
            response={response}
            message="Thank you for choosing us."
         />
      </div>
   );
}