import React from "react";
import SearchBar from "./Search";

const Header = ({ onSearch }) => {
    return (
        <div className="navbar is-fixed-top p-4 has-text-white has-background-warning note_header">
            <h1 className="navbar-start has-text-left-widescreen has-text-weight-semibold is-family-primary	">Notes App</h1>
            <SearchBar className="navbar-end" onSearch={onSearch} />
        </div>
    )
}

export default Header;