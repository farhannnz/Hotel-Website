import React, { useState,useEffect } from 'react'
import { useActionData } from 'react-router-dom'

const Booking = () => {
   const [bookData,setBookData]= useState([]);
    const [book_name,setBookname]=useState('');
    const [book_date,setBookDate]=useState('');
    
    useEffect(() => {
      console.log({ bookData });
  }, [bookData]);

  const handleSubmit = async (e) => {
   e.preventDefault();
   const bookData = {
       book_name,
       book_date
   };
   
   try {
       const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
           method: 'POST',
           headers: {
               'Content-Type': 'application/json'
           },
           body: JSON.stringify(bookData)
       });
       
       if (response.ok) {
           const data = await response.json();
           console.log('Booking successful:', data);
           // Handle success (e.g., show a success message, reset form, etc.)
       } else {
           console.error('Booking failed');
           // Handle error (e.g., show an error message)
       }
   } catch (error) {
       console.error('Error:', error);
       // Handle error (e.g., show an error message)
   }
};

  return (
    <div className='booking'>
    <form className='booking-form' onSubmit={handleSubmit}>
    <label  for="res-name">Name</label>
    <input value={book_name} onChange={(e)=>{setBookname(e.target.value);}} type='text' id='res-name'/>
    <label for="res-date">Choose date</label>
    <input value= {book_date} onChange={(e)=>{setBookDate(e.target.value);}} type="date" id="res-date"/>
    <label for="res-time">Choose time</label>
    <select id="res-time ">
       <option>17:00</option>
       <option>18:00</option>
       <option>19:00</option>
       <option>20:00</option>
       <option>21:00</option>
       <option>22:00</option>
    </select>
    <label for="guests">Number of guests</label>
    <input type="number"  min="1" max="10" id="guests"/>
    <label for="occasion">Occasion</label>
    <select id="occasion">
       <option>Birthday</option>
       <option>Anniversary</option>
    </select>
    <button  type='submit'> Reserve </button>
 </form>
 </div>
  )
}

export default Booking;
