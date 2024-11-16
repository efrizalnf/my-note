import React from "react";

const SearchNote = ({ onSearch }) => {

    const onSearchbarChange = (event) => {
        onSearch(event.target.value);
    }

    return (
        <div className="note-search">
            <input
                className="input is-primary"
                type="text"
                placeholder="Find my note"
                onChange={onSearchbarChange}
            />
        </div>
    )
}

export default SearchNote;