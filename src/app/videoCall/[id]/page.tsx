"use client";

import Image from "next/image";
import img from "../../../../public/avatar.png";
import axios from "axios";
import React, { useEffect, useRef, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import { useRoom } from "@huddle01/react";
import {
  useLocalVideo,
  useLocalAudio,
  useLocalScreenShare,
  usePeerIds,
} from "@huddle01/react/hooks";
import RemotePeer from "../../components/RemotePeer/RemotePeer";
import { LiaVideoSlashSolid, LiaVideoSolid } from "react-icons/lia";
import { MdCallEnd } from "react-icons/md";
import { FiMic, FiMicOff } from "react-icons/fi";
import { LuScreenShare, LuScreenShareOff } from "react-icons/lu";
import { HiOutlineSpeakerWave } from "react-icons/hi2";

const VideoCall = () => {
  const [token, setToken] = useState<string>("");
  const videoRef = useRef<HTMLVideoElement>(null);
  const screenRef = useRef<HTMLVideoElement>(null);
  const params = useParams();
  const { enableVideo, isVideoOn, stream, disableVideo } = useLocalVideo();
  const { enableAudio, disableAudio, isAudioOn } = useLocalAudio();
  const { startScreenShare, stopScreenShare, shareStream } =
    useLocalScreenShare();
  const { peerIds } = usePeerIds();
  const router = useRouter();
  const [timeLeft, setTimeLeft] = useState(60);
  const [isTimerActive, setIsTimerActive] = useState(false);

  useEffect(() => {
    if (stream && videoRef.current) {
      videoRef.current.srcObject = stream;
    }
  }, [stream]);

  useEffect(() => {
    if (shareStream && screenRef.current) {
      screenRef.current.srcObject = shareStream;
    }
  }, [shareStream]);

  // token api calls
  const handleAccesToken = async () => {
    try {
      const res = await axios.get(`/api/token?roomId=${params.id}`);
      console.log(res.data," $$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$")
      setToken(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    handleAccesToken();
  }, []);

  const { joinRoom, leaveRoom, closeRoom, state } = useRoom({
    onJoin: (room) => {
      console.log("onJoin", room);
    },
    onPeerJoin: (peer) => {
      console.log("onPeerJoin", peer);
    },
    onLeave: () => {
      router.replace("/orders");
    },
  });

  useEffect(() => {
    if (state === "connected") {
      setIsTimerActive(true);
    } else {
      setIsTimerActive(false);
    }
  }, [state]);

  useEffect(() => {
    if (!isTimerActive) return;

    const timerInterval = setInterval(() => {
      setTimeLeft((prevTime) => {
        if (prevTime <= 1) {
          clearInterval(timerInterval);
          closeRoom();
          return 0;
        }
        return prevTime - 1;
      });
    }, 1000);

    return () => clearInterval(timerInterval);
  }, [isTimerActive, leaveRoom, router]);

  return (
    <div className="  w-full h-[100vh] overflow-hidden md:w-full md:h-[100vh] p-5">
      <div className="text-white flex justify-between  p-5">
        <div className="flex gap-4">
          <Image
            src={img}
            alt="...logo"
            height={40}
            width={40}
            className=" rounded-full"
          />
          <h3>Alison K Fenn</h3>
        </div>
        <div>
          {state === "left" || state === "closed" ? (
            <div>back</div>
          ) : (
            <div className="text-[12px] font-normal">{timeLeft}sec Left</div>
          )}
        </div>
      </div>
      <div className=" w-full h-[90%] md:w-full md:h-[90%] flex flex-col justify-between relative ">
        <div className=" w-full h-[90%] overflow-hidden ">
          {state === "idle" && (
            <div className=" w-full h-[90%] flex justify-center items-center overflow-hidden ">
              <button
                type="button"
                className="bg-blue-500 p-2  rounded-lg text-white"
                onClick={async () => {
                  await joinRoom({
                    roomId: params.id as string,
                    token,
                  });
                }}
              >
                click to connect call...
              </button>
            </div>
          )}
        </div>
        <div className=" w-full h-[80%] md:w-full md:h-full absolute  -z-50 ">
          {state === "connected" && (
            <div className="w-full h-[80%] md:w-full md:h-[80%] ">
              <div className=" w-full h-full md:w-full md:h-full grid-cols-1 grid md:grid-cols-2 items-center   ">
                <div className=" w-[100%] h-[200px] md:w-[500px] md:h-[90%] flex items-center align-middle justify-center text-white text-center mx-auto border-1 rounded-xl bg-gradient-to-b from-[#2A296E] to-[#272738] backdrop-blur-lg border-blue-400">
                  {isVideoOn && (
                    <video
                      ref={videoRef}
                      className="w-full h-full rounded-xl"
                      autoPlay
                      muted
                    />
                  )}
                  {isVideoOn ? null : <h6 className="text-center"> Host</h6>}
                </div>
                <div className=" md:w-[500px] md:h-[500px]  flex justify-center items-center ">
                  {peerIds.map((peerId) =>
                    peerId ? <RemotePeer key={peerId} peerId={peerId} /> : null
                  )}
                </div>
              </div>
            </div>
          )}
        </div>
        <p className=" font-light text-sm text-[#949494] text-end ">{state}</p>
        <div className="w-full h-[90px] md:w-full md:h-[90px] flex justify-center">
          {state === "connected" && (
            <div className="w-full h-full gap-4 flex md:gap-10 justify-center items-center align-middle my-auto ">
              <div>
                {shareStream ? (
                  <LuScreenShareOff
                    size={40}
                    color="#FFFFFF"
                    className=" cursor-pointer"
                    onClick={async () => {
                      await stopScreenShare();
                    }}
                  />
                ) : (
                  <LuScreenShare
                    size={40}
                    color="#FFFFFF"
                    className=" cursor-pointer"
                    onClick={async () => {
                      await startScreenShare();
                    }}
                  />
                )}
              </div>
              <div>
                {isVideoOn ? (
                  <LiaVideoSlashSolid
                    size={50}
                    color="#FFFFFF"
                    className=" cursor-pointer"
                    onClick={async () => {
                      await disableVideo();
                    }}
                  />
                ) : (
                  <LiaVideoSolid
                    size={50}
                    color="#FFFFFF"
                    className=" cursor-pointer"
                    onClick={async () => {
                      await enableVideo();
                    }}
                  />
                )}
              </div>
              <div className="w-[100px] h-[50px] bg-[#F72828] rounded-full flex justify-center align-middle text-center items-center">
                <MdCallEnd
                  onClick={leaveRoom}
                  size={30}
                  color="#FFFFFF"
                  className=" cursor-pointer"
                />
              </div>
              <div>
                {isAudioOn ? (
                  <FiMicOff
                    size={40}
                    color="#FFFFFF"
                    className=" cursor-pointer"
                    onClick={async () => {
                      await disableAudio();
                    }}
                  />
                ) : (
                  <FiMic
                    size={40}
                    color="#FFFFFF"
                    className=" cursor-pointer"
                    onClick={async () => {
                      await enableAudio();
                    }}
                  />
                )}
              </div>

              <div>
                <HiOutlineSpeakerWave
                  size={40}
                  color="#FFFFFF"
                  className=" cursor-pointer"
                />
              </div>
            </div>
          )}

          {state === "left" && (
            <div className="text-white">
              Call has ended.
              <button
                type="button"
                className="bg-blue-500 p-2  rounded-lg "
                onClick={() => {
                  router.refresh();
                  router.push("/");
                }}
              >
                Back
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default VideoCall;
