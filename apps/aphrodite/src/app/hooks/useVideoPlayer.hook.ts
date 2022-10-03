import { ChangeEvent, RefObject, useEffect, useState } from 'react';

const useVideoPlayer = (videoElement: RefObject<HTMLVideoElement>) => {
  const [playing, setPlaying] = useState<boolean>(false);
  const [progress, setProgress] = useState<number>(0);
  const [speed, setSpeed] = useState<number>(1);
  const [muted, setMuted] = useState<boolean>(false);

  const togglePlay = () => setPlaying(!playing);
  useEffect(() => {
    if (videoElement && videoElement.current)
      playing ? videoElement.current.play() : videoElement.current.pause();
  }, [playing, videoElement]);

  const handleOnTimeUpdate = () => {
    if (
      videoElement &&
      videoElement.current &&
      videoElement.current.currentTime &&
      videoElement.current.duration
    )
      setProgress(
        (videoElement.current.currentTime / videoElement.current.duration) * 100,
      );
  };

  const handleVideoProgress = (event: ChangeEvent<HTMLInputElement>) => {
    const manualChange = Number(event.target.value);
    if (
      videoElement &&
      videoElement.current &&
      videoElement.current.currentTime &&
      videoElement.current.duration
    ) {
      videoElement.current.currentTime =
        (videoElement.current.duration / 100) * manualChange;
      setProgress(manualChange);
    }
  };

  const handleVideoSpeed = (event: ChangeEvent<HTMLSelectElement>) => {
    const speed = Number(event.target.value);
    setSpeed(speed);
  };

  const toggleMute = () => setMuted(!muted);

  useEffect(() => {
    if (videoElement && videoElement.current && videoElement.current.muted)
      muted ? (videoElement.current.muted = true) : (videoElement.current.muted = false);
  }, [muted, videoElement]);

  return {
    playing,
    progress,
    speed,
    muted,
    togglePlay,
    handleOnTimeUpdate,
    handleVideoProgress,
    handleVideoSpeed,
    toggleMute,
  };
};

export default useVideoPlayer;
