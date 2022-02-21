import axios from "axios";
import React, { useEffect, useState } from "react";

function StudioBookings() {
   const [bookings, setBookings] = useState([]);
   const [loadingData, setLoadingData] = useState(false);

   useEffect(() => {
      setLoadingData(true);
      axios
         .get("/booking/getStudioBookings")
         .then((res) => {
            if (res.data) {
               setLoadingData(false);
               setBookings(res.data);
            }
         })
         .catch((err) => {
            console.log(err);
         });
   }, []);
   return (
      <div>
         <h1 className="display-4 text-center py-3">Bookings</h1>

         {loadingData ? (
            <p className="text-center h4">Loading...</p>
         ) : (
            <table className="table table-striped">
               <thead className="thead-dark">
                  <tr>
                     <th scope="col">Date</th>
                     <th scope="col">Name</th>
                     <th scope="col">Email</th>
                     <th scope="col">Phone</th>
                     <th scope="col"></th>
                  </tr>
               </thead>
               <tbody>
                  {bookings.map((b) => (
                     <tr key={b.bookingId}>
                        <td>{b.date}</td>
                        <td>{b.name}</td>
                        <td>{b.email}</td>
                        <td>{b.phone}</td>
                        <td>
                           <button
                              style={{
                                 border: "none",
                                 background: "transparent",
                              }}
                              className="h4 px-3 text-dark"
                              href="https://www.instagram.com/"
                           >
                              <i className="bi bi-trash text-danger" />
                           </button>
                        </td>
                     </tr>
                  ))}
               </tbody>
            </table>
         )}
      </div>
   );
}

export default StudioBookings;
