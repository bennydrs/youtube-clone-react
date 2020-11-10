import React from 'react';
import './SearchPage.css';
import TuneOutlinedIcon from '@material-ui/icons/TuneOutlined';
import ChannelRow from './ChannelRow';
import VideoRow from './VideoRow';

const SearchPage = () => {
  return (
    <div className="searchPage">
      <div className="searchPage__filter">
        <TuneOutlinedIcon />
        <h2>FILTERS</h2>
      </div>
      <hr/>

      <ChannelRow 
        image="https://yt3.ggpht.com/a/AATXAJyWnmk6Ql70o3P-x2eHIR01SiiYamhspnAN04zhWA=s176-c-k-c0x00ffffff-no-rj-mo"
        channel="The Net Ninja"
        verified
        subs="594K"
        noOfVideos={1.433}
        description="Black-belt your development skills. Tutorials on: - Modern JavaScript (beginner to advanced) - Node.js - React - Vue.js - Firebase ...
        "
      />

      <hr/>

      <VideoRow
        title="CSS Loaders Tutorial #1 - Making a Spinner"
        views="1.3M views"
        timestamp="1 days ago"
        duration="11.55"
        subs="594K"
        channel="The Net Ninja"
        channelImage="https://yt3.ggpht.com/a/AATXAJyWnmk6Ql70o3P-x2eHIR01SiiYamhspnAN04zhWA=s48-c-k-c0xffffffff-no-rj-mo"
        image='https://img.youtube.com/vi/GFkorypkXsQ/maxresdefault.jpg'
        description="Hey gang, in ths CSS loader tutorial I'll show you how to create a simple pulsating spinner."
      />
      <VideoRow
        title="CSS Loaders Tutorial #1 - Making a Spinner"
        views="1.3M views"
        timestamp="1 days ago"
        duration="11.55"
        channel="The Net Ninja"
        channelImage="https://yt3.ggpht.com/a/AATXAJyWnmk6Ql70o3P-x2eHIR01SiiYamhspnAN04zhWA=s48-c-k-c0xffffffff-no-rj-mo"
        image='https://img.youtube.com/vi/GFkorypkXsQ/maxresdefault.jpg'
        description="Hey gang, in ths CSS loader tutorial I'll show you how to create a simple pulsating spinner."
      />
    </div>
  )
}

export default SearchPage;
