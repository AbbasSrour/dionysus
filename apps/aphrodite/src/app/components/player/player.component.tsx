import React, { useEffect, useRef } from 'react';
import useVideoPlayer from '../../hooks/useVideoPlayer.hook';
import './player.scss';
import { BsPlayFill as PlayIcon, BsPauseFill as PauseIcon } from 'react-icons/bs';

interface props {
  source: string | Array<string>;
  autoplay?: boolean;
}

const VideoPlayer: React.FC<props> = ({ source, autoplay }) => {
  const videoElementRef = useRef<HTMLVideoElement>(null);
  const inputElementRef = useRef<HTMLInputElement>(null);
  const player = useVideoPlayer(videoElementRef);
  let mainSource: string;
  if (typeof source === 'string') mainSource = source;
  else mainSource = source[0];

  useEffect(() => {
    if (autoplay) player.togglePlay();
  }, [autoplay]);

  useEffect(() => {
    if (inputElementRef && inputElementRef.current)
      inputElementRef.current.style.backgroundSize = `${player.progress}%`;
  }, [player.progress, inputElementRef]);

  return (
    <div className={'video-player'}>
      <video
        src={mainSource}
        ref={videoElementRef}
        onTimeUpdate={player.handleOnTimeUpdate}
        loop={true}
        autoPlay={autoplay}
      />
      <div className={'video-player__controls'}>
        <button
          className={player.playing ? 'pp-btn play' : 'pp-btn pause'}
          onClick={player.togglePlay}
        >
          {player.playing ? <PauseIcon /> : <PlayIcon />}
        </button>
        <input
          type="range"
          min="0"
          max="100"
          value={player.progress}
          ref={inputElementRef}
          onChange={(e) => player.handleVideoProgress(e)}
        />
        {/*<select*/}
        {/*  className="velocity"*/}
        {/*  value={player.speed}*/}
        {/*  onChange={(e) => player.handleVideoSpeed(e)}*/}
        {/*>*/}
        {/*  <option value="0.50">0.50x</option>*/}
        {/*  <option value="1">1x</option>*/}
        {/*  <option value="1.25">1.25x</option>*/}
        {/*  <option value="2">2x</option>*/}
        {/*</select>*/}
        {/*<button*/}
        {/*  className={player.muted ? 'mute-btn muted' : 'mute-btn'}*/}
        {/*  onClick={player.toggleMute}*/}
        {/*/>*/}
      </div>
    </div>
  );
};

export default VideoPlayer;
