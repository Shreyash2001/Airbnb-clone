import { Button } from '@material-ui/core'
import React from 'react'
import "./SearchPage.css"
import SearchResult from './SearchResult'
function SearchPage() {
    return (
        <div className="searchPage">
           <div className="searchPage__info">
            <p>62 stays  5February to 10February</p>
            <h1>Stays Nearby</h1>
            <Button variant="outlined">Cancellation Flexibility</Button>
            <Button variant="outlined">Type Of Place</Button>
            <Button variant="outlined">Price</Button>
            <Button variant="outlined">Rooms & Beds</Button>
            <Button variant="outlined">More Filters</Button>
           </div>
           <SearchResult 
               img="https://res.cloudinary.com/simplotel/image/upload/x_0,y_615,w_4813,h_1875,c_crop,q_80,fl_progressive/w_600,h_337,f_auto,c_fit/vits-hotels/Listing_Image_skazsy"
               title="VITS Palace"
               description="Best place to visit in summer as of now bookings are started com and visit the pride of nature!!"
               star={4.5}
               location="India"
               price="Rs. 900 / night"
               total="Rs. 3399 total" 
           />
           <SearchResult 
               img="https://res.cloudinary.com/simplotel/image/upload/x_0,y_615,w_4813,h_1875,c_crop,q_80,fl_progressive/w_600,h_337,f_auto,c_fit/vits-hotels/Listing_Image_skazsy"
               title="VITS Palace"
               description="Best place to visit in summer as of now bookings are started com and visit the pride of nature!!"
               star={4.5}
               location="India"
               price="Rs. 900 / night"
               total="Rs. 3399 total" 
           />
           <SearchResult 
               img="https://res.cloudinary.com/simplotel/image/upload/x_0,y_615,w_4813,h_1875,c_crop,q_80,fl_progressive/w_600,h_337,f_auto,c_fit/vits-hotels/Listing_Image_skazsy"
               title="VITS Palace"
               description="Best place to visit in summer as of now bookings are started com and visit the pride of nature!!"
               star={4.5}
               location="India"
               price="Rs. 900 / night"
               total="Rs. 3399 total" 
           />
           <SearchResult 
               img="https://res.cloudinary.com/simplotel/image/upload/x_0,y_615,w_4813,h_1875,c_crop,q_80,fl_progressive/w_600,h_337,f_auto,c_fit/vits-hotels/Listing_Image_skazsy"
               title="VITS Palace"
               description="Best place to visit in summer as of now bookings are started com and visit the pride of nature!!"
               star={4.5}
               location="India"
               price="Rs. 900 / night"
               total="Rs. 3399 total" 
           />
           <SearchResult 
               img="https://res.cloudinary.com/simplotel/image/upload/x_0,y_615,w_4813,h_1875,c_crop,q_80,fl_progressive/w_600,h_337,f_auto,c_fit/vits-hotels/Listing_Image_skazsy"
               title="VITS Palace"
               description="Best place to visit in summer as of now bookings are started com and visit the pride of nature!!"
               star={4.5}
               location="India"
               price="Rs. 900 / night"
               total="Rs. 3399 total" 
           />
        </div>
    )
}

export default SearchPage
