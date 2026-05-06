/**
 * Sadece hero arka planı için — tam YT tiplerini sürüklememek adına.
 */
/* eslint-disable @typescript-eslint/no-explicit-any */
export {};

declare global {
  namespace YT {
    const PlayerState: { PLAYING: number; ENDED: number; BUFFERING: number };
  }

  const YT: {
    Player: new (
      id: string,
      opts: {
        height: string;
        width: string;
        videoId: string;
        playerVars: Record<string, string | number | undefined>;
        events: {
          onReady: (e: { target: YTPlayerLike }) => void;
          onStateChange?: (e: { data: number; target: YTPlayerLike }) => void;
        };
      }
    ) => YTPlayerLike;
  };

  interface YTPlayerLike {
    getDuration(): number;
    getCurrentTime(): number;
    getPlayerState(): number;
    seekTo(seconds: number, allowSeekAhead: boolean): void;
    playVideo(): void;
    getIframe(): HTMLIFrameElement;
    destroy(): void;
  }
}
