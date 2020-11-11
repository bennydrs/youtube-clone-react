import React from 'react';
import './RecommendedVideos.css';
import VideoCard from './VideoCard';

const RecommendedVideos = () => {
  return (
    <div className="recommendedVideos">
      <div className="recommendedVideos__videos">
        <VideoCard
          title="Let's Build a YouTube Clone with REACT JS for Beginners"
          views="115K views"
          timestamp="3 days ago"
          duration="3.43.01"
          channel="Clever Programmer"
          channelImage="https://yt3.ggpht.com/a/AATXAJydjgDHqK3vz4iHkrPZjHSsjwh1aPsqOwxHCZ_ISA=s48-c-k-c0xffffffff-no-rj-mo"
          image="https://img.youtube.com/vi/NT299zIk2JY/maxresdefault.jpg"
        />
        <VideoCard
          title="Kasbo - Shut The World Out (feat. Frida Sundemo)"
          views="2.3M views"
          timestamp="3 days ago"
          duration="4.29"
          channel="MrSuicideSheep"
          channelImage="https://yt3.ggpht.com/a-/AOh14Gj3vTleysR1RS28s6J-Ppb_zeNh4lrPdcbbMw=s68-c-k-c0x00ffffff-no-rj-mo"
          image="https://i.ytimg.com/an_webp/NpSZHKoToHY/mqdefault_6s.webp?du=3000&sqp=CNLMrf0F&rs=AOn4CLBdU_ptdpqAZqoESAMJD_no6ByJ0Q"
        />
        <VideoCard
          title="Build a Responsive Website | HTML, CSS GRID, Flexbox"
          views="95K views"
          timestamp="2 weeks ago"
          duration="2.02.22"
          channel="Traversy Media"
          channelImage="https://yt3.ggpht.com/a-/AOh14GgcgHR-l77_lkWlrA3mU6xOkCZLB08l3b1oiw=s68-c-k-c0x00ffffff-no-rj-mo"
          image="https://img.youtube.com/vi/p0bGHP-PXD4/maxresdefault.jpg"
        />
        <VideoCard
          title="Belajar Phyton [Dasar] -01 - Apa Itu Phyton"
          views="188K views"
          duration="28.23"
          channel="Kelas Terbuka"
          timestamp="6 months ago"
          channelImage="https://yt3.ggpht.com/a-/AOh14GiQHzmV2OBaHvDxmUd5ogQJIfuW2Hc4TbiUlA=s68-c-k-c0x00ffffff-no-rj-mo"
          image="https://img.youtube.com/vi/iA8lLwmtKQM/maxresdefault.jpg"
        />
        <VideoCard
          title="CSS Loaders Tutorial #1 - Making a Spinner"
          views="1.3M views"
          timestamp="1 days ago"
          duration="11.55"
          channel="The Net Ninja"
          channelImage="https://yt3.ggpht.com/a/AATXAJyWnmk6Ql70o3P-x2eHIR01SiiYamhspnAN04zhWA=s48-c-k-c0xffffffff-no-rj-mo"
          image='https://img.youtube.com/vi/GFkorypkXsQ/maxresdefault.jpg'
        />
        <VideoCard
          title="Top 10 CSS Tricks You Didn't Know!"
          views="313K views"
          timestamp="11 months ago"
          duration="12.37"
          channel="Dev Ed"
          channelImage="https://yt3.ggpht.com/a-/AOh14GhqOT2rmcUlS-pOBQeg8m4GCYTXT87VKNoyyg=s68-c-k-c0x00ffffff-no-rj-mo"
          image='https://img.youtube.com/vi/CxC925yUxSI/maxresdefault.jpg'
        />
        <VideoCard
          title="React Router Tutorial | React For Beginners"
          views="409K views"
          timestamp="11 months ago"
          duration="33.10"
          channel="Dev Ed"
          channelImage="https://yt3.ggpht.com/a-/AOh14GhqOT2rmcUlS-pOBQeg8m4GCYTXT87VKNoyyg=s68-c-k-c0x00ffffff-no-rj-mo"
          image='https://i.ytimg.com/vi/Law7wfdg_ls/mqdefault.jpg'
        />
      </div>
    </div>
  )
}

export default RecommendedVideos;
