import React from "react";
import Button from "../controls/button/button";

const Pager = ({currentPage, goToPage}) => (
    <div className="pager">
        <Button label="Previous page" onClick={() => goToPage(currentPage - 1)} disabled={currentPage <= 0}/>
        &nbsp;
        {currentPage + 1}
        &nbsp;
        <Button label="Next page" onClick={() => goToPage(currentPage + 1)}/>
    </div>
);

export default Pager;