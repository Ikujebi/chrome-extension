import React, { useState, useRef } from 'react';
import RecordRTC from 'recordrtc';

const ScreenRecorder = () => {
    const [isRecording, setRecording] = useState(false);
    const webcamRef = useRef(null);
    const mediaRecorderRef = useRef(null);
  
    const startRecording = async () => {
      const stream = await navigator.mediaDevices.getUserMedia({ video: true, audio: true });
      webcamRef.current.srcObject = stream;
  
      mediaRecorderRef.current = new RecordRTC(stream, {
        type: 'video',
        mimeType: 'video/webm',
      });
  
      mediaRecorderRef.current.startRecording();
      setRecording(true);
    };

    const stopRecording = () => {
        if (mediaRecorderRef.current) {
          mediaRecorderRef.current.stopRecording(() => {
            const blob = mediaRecorderRef.current.getBlob();
            const url = URL.createObjectURL(blob);
            window.open(url);
            setRecording(false);
          });
        }
      };

  return (
    <div>
    <video ref={webcamRef} autoPlay muted />
    <button onClick={isRecording ? stopRecording : startRecording}>
      {isRecording ? 'Stop Recording' : 'Start Recording'}
    </button>
  </div>
  );
};

export default ScreenRecorder;
