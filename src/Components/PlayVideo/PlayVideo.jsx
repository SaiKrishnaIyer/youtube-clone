// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from 'react';
import './PlayVideo.css';
import moment from 'moment'; // Ensure moment is installed with `npm install moment`
import like from '../../assets/like.png';
import dislike from '../../assets/dislike.png';
import share from '../../assets/share.png';
import save from '../../assets/save.png';
import user_profile from '../../assets/user-profile.png';
import { API_KEY, value_converter } from '../../data';
import { useParams } from 'react-router-dom';

// eslint-disable-next-line no-empty-pattern
const PlayVideo = ({ }) => {
  const [apiData, setApiData] = useState(null);
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [channelData, setChannelData] = useState(null);
  const [commentData, setCommentData] = useState([]);
  const {videoId} = useParams();
  
  const toggleSubscribe = () => {
    setIsSubscribed(!isSubscribed);
  };

  const formatViewCount = (count) => {
    if (!count) return '0';
    if (count >= 1000000) return `${(count / 1000000).toFixed(1)}M`;
    if (count >= 1000) return `${(count / 1000).toFixed(1)}K`;
    return count;
  };

  const fetchData = async () => {
    try {
      // Fetch Video Data
      const videoDetailsUrl = `https://www.googleapis.com/youtube/v3/videos?part=snippet,contentDetails,statistics&id=${videoId}&key=${API_KEY}`;
      const videoResponse = await fetch(videoDetailsUrl);
      const videoData = await videoResponse.json();

      if (videoData.items && videoData.items.length > 0) {
        const video = videoData.items[0];
        setApiData(video);

        // Fetch Channel Data
        const channelDetailsUrl = `https://www.googleapis.com/youtube/v3/channels?part=snippet,statistics&id=${video.snippet.channelId}&key=${API_KEY}`;
        const channelResponse = await fetch(channelDetailsUrl);
        const channelData = await channelResponse.json();
        setChannelData(channelData.items[0]);

        // Fetch Comments
        const commentUrl = `https://www.googleapis.com/youtube/v3/commentThreads?part=snippet&videoId=${videoId}&key=${API_KEY}`;
        const commentResponse = await fetch(commentUrl);
        const commentData = await commentResponse.json();
        setCommentData(commentData.items || []);
      } else {
        console.error('No video data found.');
      }
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  useEffect(() => {
    fetchData();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [videoId]);

  return (
    <div className="play-video">
      {/* Embed YouTube video */}
      <iframe
        src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
        title="YouTube video"
      ></iframe>

      {/* Video title */}
      <h3>{apiData ? apiData.snippet.title : 'Loading title...'}</h3>

      {/* Video info */}
      <div className="play-video-info">
        <p>
          {apiData
            ? `${formatViewCount(apiData.statistics.viewCount)} views • ${moment(apiData.snippet.publishedAt).fromNow()}`
            : 'Loading views...'}
        </p>
        <div>
          <span>
            <img src={like} alt="Like button icon" />{' '}
            {apiData ? value_converter(apiData.statistics.likeCount) : '0'}
          </span>
          <span>
            <img src={dislike} alt="Dislike button icon" /> 
          </span>
          <span>
            <img src={share} alt="Share button icon" /> Share
          </span>
          <span>
            <img src={save} alt="Save button icon" /> Save
          </span>
        </div>
      </div>
      <hr />

      {/* Publisher info */}
      <div className="publisher">
        <img
          src={channelData ? channelData.snippet.thumbnails.default.url : ''}
          alt="Publisher profile"
        />
        <div>
          <p>{apiData ? apiData.snippet.channelTitle : ''}</p>
          <span>{channelData ? value_converter(channelData.statistics.subscriberCount) : '0'}</span>
        </div>
        <button onClick={toggleSubscribe} aria-label={isSubscribed ? 'Unsubscribe' : 'Subscribe'}>
          {isSubscribed ? 'Subscribed' : 'Subscribe'}
        </button>
      </div>

      {/* Video description */}
      <div className="vid-description">
        <p>{apiData ? apiData.snippet.description.slice(0, 250) : 'Loading description...'}</p>
        <hr />
        <h4>{apiData ? value_converter(apiData.statistics.commentCount) : '0'} Comments</h4>

        {/* Comments section */}
        {commentData.map((item, index) => {
          const comment = item.snippet.topLevelComment.snippet;
          return (
            <div className="comment" key={index}>
              <img src={comment.authorProfileImageUrl || user_profile} alt={`${comment.authorDisplayName}'s profile`} />
              <div>
                <h3>
                  {comment.authorDisplayName} <span>{moment(comment.publishedAt).fromNow()}</span>
                </h3>
                <p>{comment.textDisplay}</p>
                <div className="comment-action">
                  <img src={like} alt="Like button icon" />
                  <span>{formatViewCount(comment.likeCount)}</span>
                  <img src={dislike} alt="Dislike button icon" />
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default PlayVideo;
