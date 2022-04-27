import React from 'react';
import './Widgets.css';
import InfoIcon from '@material-ui/icons/Info';
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';
function Widgets() {
    const newsArticle = (heading, subtitle) => (
        <div className='widgets__article'>
            <div className="widgets__articleLeft">
                <FiberManualRecordIcon/>
            </div>
            <div className="widgets__articleRight">
                <h4>{heading}</h4>
                <p>{subtitle}</p>
            </div>
        </div>
        
    )
  return (
    <div className='widgets'>
        <div className="widgets__header">
            <h2>LinkedIn News</h2>
            <InfoIcon/>
        </div>

        {newsArticle("Myglamm breaks record", "Top news - manish malhotra")}
        {newsArticle("MP-Ml arrested", "Hanuman-chalisa scam")}
        {newsArticle("India wants to be strong with west", "Top news - 7998 readers")}
        {newsArticle("Punjab announces amnesty scheme for public transporters", "Top news - 4562 readers")}
        {newsArticle("80,000 employees leave Infosys", "Tech.news support")}
        {newsArticle("All 3 demolished temples to be rebuild", "Top news - 1560 readers")}
        {newsArticle("Top selling cars in India in March 2022", "Top news - 786 readers")}
    </div>
  );
}

export default Widgets