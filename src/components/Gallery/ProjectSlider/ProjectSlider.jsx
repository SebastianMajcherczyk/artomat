import React, { useEffect } from "react";
import AwesomeSlider from "react-awesome-slider";
import withAutoplay from "react-awesome-slider/dist/autoplay";
import "react-awesome-slider/dist/styles.css";
import "./projectSlider.css";
import { Close } from "@mui/icons-material";

const AutoplaySlider = withAutoplay(AwesomeSlider);

const ProjectSlider = ({ project, onClose }) => {
  useEffect(() => {
    // Funkcja modyfikująca elementy wideo
    const modifyVideoElements = () => {
      const videos = document.querySelectorAll(".media-slider video");
      videos.forEach((video) => {
        video.muted = true; // Wyciszenie wideo
        video.autoplay = true; // Automatyczne odtwarzanie
        video.preload = "auto"; // Preload wideo
        video.controls = false; // Ukrycie kontrolek
        video.setAttribute("playsinline", "true"); // Inline na iOS
        video.setAttribute("webkit-playsinline", "true"); // Inline na starszych iOS
        video.setAttribute("disableRemotePlayback", "true"); // Wyłączenie zdalnego odtwarzania
        video.play().catch((e) => {
          console.error("Error trying to play the video:", e);
        });
      });
    };

    // Wywołanie funkcji po zamontowaniu komponentu
    modifyVideoElements();
  }, []);

  return (
    <div className="slider2" onClick={(e) => e.stopPropagation()}>
      <button onClick={onClose} className="close-button">
        <Close />
      </button>
      <AutoplaySlider
        className="media-slider"
        bullets={false}
        infinite={true}
        organicArrows={true}
        play={true}
        cancelOnInteraction={false}
        interval={11000}
        onTransitionStart={() => {
          setTimeout(() => {
            const videos = document.querySelectorAll(".media-slider video");
            videos.forEach((video) => {
              video.play().catch((e) => {
                console.error("Error trying to play the video:", e);
              });
            });
          }, 10);
        }}
      >
        {project.media.map((item, index) => (
          <div key={`${project.id}-${index}`} className="media-item">
            {item.type === "image" ? (
              <img
                src={item.src}
                alt={`media-${item.src}`}
                className="media-content"
              />
            ) : (
              <video
                muted
                className="media-content"
                playsInline // Inline na nowszych przeglądarkach
                webkit-playsinline="true" // Inline na starszych iOS
                disableRemotePlayback // Wyłączenie zdalnego odtwarzania
                preload="auto"
              >
                <source src={item.src} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            )}
          </div>
        ))}
      </AutoplaySlider>
    </div>
  );
};

export default ProjectSlider;
