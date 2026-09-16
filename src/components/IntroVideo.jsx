import { useRef, useState } from "react";
import { Play, Volume2, VolumeX } from "lucide-react";

export default function IntroVideo({ src, onEnded, poster }) {
  const videoRef = useRef(null);
  const [started, setStarted] = useState(false);
  const [muted, setMuted] = useState(false);

  const handlePlay = () => {
    setStarted(true);
    const v = videoRef.current;
    if (!v) return;
    v.play();
  };

  const toggleMute = () => {
    const v = videoRef.current;
    if (!v) return;
    v.muted = !v.muted;
    setMuted(v.muted);
  };

  return (
    <div className="intro-video">
      <video
        ref={videoRef}
        className="intro-video-el"
        src={src}
        poster={poster}
        preload="metadata"
        playsInline
        controls={started}
        onEnded={onEnded}
      />

      {!started && (
        <button
          type="button"
          className="intro-video-overlay"
          onClick={handlePlay}
          aria-label="Play introduction video"
        >
          <span className="intro-video-play">
            <Play size={28} fill="currentColor" />
          </span>
          <span className="intro-video-label">Watch 60-second intro</span>
        </button>
      )}

      {started && (
        <button
          type="button"
          className="intro-video-mute"
          onClick={toggleMute}
          aria-label={muted ? "Unmute video" : "Mute video"}
        >
          {muted ? <VolumeX size={16} /> : <Volume2 size={16} />}
        </button>
      )}
    </div>
  );
}
