import React, { useState } from 'react'
import "./Search.css"
import 'react-date-range/dist/styles.css'; 
import 'react-date-range/dist/theme/default.css'; 
import { DateRangePicker } from "react-date-range";
import { Button } from '@material-ui/core';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { hostedPlaceGetSearchResultsForDates } from './actions/hostActions';

function Search() {
    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(new Date());
    const history = useHistory();

    const dispatch = useDispatch();

    const selectionRange = {
        startDate: startDate,
        endDate: endDate,
        key: "selection"
    }

    var regex = /\d+/;
    var string = startDate.toString();
    var matches = string.match(regex);
    const startMatch = Number(matches[0])

    var regexEnd = /\d+/;
    var stringEnd = endDate.toString();
    var matchesEnd = stringEnd.match(regexEnd);
    const endMatch = Number(matchesEnd[0])

    function handleSelect(ranges) {
        setStartDate(ranges.selection.startDate);
        setEndDate(ranges.selection.endDate);
    }

    return (
        <div className="search">
            <DateRangePicker ranges = {[selectionRange]} onChange={handleSelect} dateDisplayFormat= {"MM dd,yyyy"} />
            <h2>Location
            <LocationOnIcon />
            </h2>
            <div className="search__input">
            <input type="text" placeholder="Where are you going?" onChange={(e) => dispatch(hostedPlaceGetSearchResultsForDates(e.target.value))} />
            
            </div>
            <Button onClick={() => history.push(`/date/search/start=${startMatch}&end=${endMatch}`)}>Search Airbnb</Button>
        </div>
    )
}

export default Search
