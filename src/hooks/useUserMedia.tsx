import { useState, useEffect } from 'react';

let useUserMedia = (requestedMedia: any) => {
  const [mediaStream, setMediaStream] = useState<any>(null);

  useEffect(() => {
    let enableStream = async () => {
      try {
        const stream = await navigator.mediaDevices.getUserMedia(requestedMedia);
        setMediaStream(stream);
      } catch(err) {
        // Removed for brevity
      }
    }

    if (!mediaStream) {
      enableStream();
    } else {
      return () => {
        mediaStream.getTracks().forEach((track: any) => {
          track.stop();
        });
      }
    }
    
  }, [mediaStream, requestedMedia]);

  return mediaStream;
}

export default useUserMedia;
