import React, { useRef, useEffect, useState } from "react";
import { fabric } from "fabric";
import "./WallArtVisualizer.css";
import { LeftSideMotionDiv } from "../Styled/StyledMotionDiv";
import { AnimatedH2, AnimatedH3 } from "../Styled/StyledHeader";

const WallArtVisualizer = () => {
  const canvasRef = useRef();
  const wallImageRef = useRef(null);
  const designImageRef = useRef(null);
  const addedDesignImageRef = useRef(null);
  const resizeDebounceRef = useRef(null);
  const [wallImageURL, setWallImageURL] = useState("");
  const [designImageURL, setDesignImageURL] = useState("");
  const [fabricCanvas, setFabricCanvas] = useState(null);
  const [isSectionVisible, setIsSectionVisible] = useState(false);
  const [hasAnimationPlayed, setHasAnimationPlayed] = useState(false);

  const checkIfSectionIsVisible = () => {
    const section = document.querySelector(".visual");
    const bounds = section.getBoundingClientRect();

    const isVisible =
      bounds.top < window.innerHeight / 2 &&
      bounds.bottom > window.innerHeight / 2;

    return isVisible;
  };

  const handleScroll = () => {
    if (checkIfSectionIsVisible() && !hasAnimationPlayed) {
      setIsSectionVisible(true);
      setHasAnimationPlayed(true);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [hasAnimationPlayed]);

  const getInitialCanvasSize = () => {
    const viewportWidth = window.innerWidth;
    const viewportHeight = window.innerHeight;
    const vw = viewportWidth * 0.01;
    const vh = viewportHeight * 0.01;
    const maxWidth = viewportWidth <= 768 ? 95 * vw : 80 * vw;
    const maxHeight = 80 * vh;
    return { width: maxWidth, height: maxHeight };
  };

  const openFileInput = (inputId) => {
    const input = document.getElementById(inputId);
    if (input) {
      input.click();
    }
  };

  const handleImageChange = (setter) => (event) => {
    const file = event.target.files[0];
    // Resetuj input
    if (file) {
      const reader = new FileReader();
      reader.onload = (loadEvent) => {
        setter(loadEvent.target.result);
        event.target.value = "";
      };
      reader.onerror = (errorEvent) => {
        console.error("Błąd ładowania pliku: ", errorEvent);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleWallImageChange = (event) => {
    handleImageChange(setWallImageURL)(event);
  };

  const handleDesignImageChange = (event) => {
    handleImageChange(setDesignImageURL)(event);
  };

  const [canvasSize, setCanvasSize] = useState(getInitialCanvasSize());

  const resetDesign = () => {
    setDesignImageURL("");
    if (fabricCanvas && addedDesignImageRef.current) {
      fabricCanvas.remove(addedDesignImageRef.current);
      fabricCanvas.renderAll();
    }
  };

  const resetWall = () => {
    setWallImageURL("");
    if (fabricCanvas && fabricCanvas.backgroundImage) {
      fabricCanvas.setBackgroundImage(
        null,
        fabricCanvas.renderAll.bind(fabricCanvas)
      );
      fabricCanvas.renderAll();
    }
  };

  const handleResize = () => {
    clearTimeout(resizeDebounceRef.current);
    resizeDebounceRef.current = setTimeout(() => {
      const newCanvasSize = getInitialCanvasSize();

      if (wallImageURL && wallImageRef.current && fabricCanvas) {
        const wallImage = wallImageRef.current;
        let scale = Math.min(
          newCanvasSize.width / wallImage.width,
          newCanvasSize.height / wallImage.height
        );
        const updatedCanvasWidth = wallImage.width * scale;
        const updatedCanvasHeight = wallImage.height * scale;

        fabricCanvas.setWidth(updatedCanvasWidth);
        fabricCanvas.setHeight(updatedCanvasHeight);
        wallImage.scale(scale);
        fabricCanvas.setBackgroundImage(
          wallImage,
          fabricCanvas.renderAll.bind(fabricCanvas),
          {
            originX: "center",
            originY: "center",
            left: fabricCanvas.width / 2,
            top: fabricCanvas.height / 2,
          }
        );
        fabricCanvas.renderAll();
        setCanvasSize({
          width: updatedCanvasWidth,
          height: updatedCanvasHeight,
        });
      } else {
        setCanvasSize(newCanvasSize);
      }
      if (designImageURL && designImageRef.current && fabricCanvas) {
        const artImage = designImageRef.current;
        const scale = fabricCanvas.width / artImage.width / 4; // Przykładowy współczynnik skalowania
        const positionX = fabricCanvas.width / 2 - (artImage.width * scale) / 2;
        const positionY =
          fabricCanvas.height / 2 - (artImage.height * scale) / 2;

        artImage.set({
          scaleX: scale,
          scaleY: scale,
          left: positionX,
          top: positionY,
        });

        fabricCanvas.renderAll();
      }
    }, 300);
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [fabricCanvas]);

  useEffect(() => {
    if (!canvasRef.current) return;

    if (!fabricCanvas) {
      const newCanvas = new fabric.Canvas(canvasRef.current, {
        width: canvasSize.width,
        height: canvasSize.height,
      });
      setFabricCanvas(newCanvas);
    } else {
      fabricCanvas.setWidth(canvasSize.width);
      fabricCanvas.setHeight(canvasSize.height);
      fabricCanvas.renderAll();
    }
  }, [canvasSize, fabricCanvas]);

  useEffect(() => {
    if (!fabricCanvas) return;
    const { width: maxWidth, height: maxHeight } = getInitialCanvasSize();

    if (wallImageURL) {
      fabric.Image.fromURL(wallImageURL, (wallImage) => {
        wallImageRef.current = wallImage;
        let scale = Math.min(
          maxWidth / wallImage.width,
          maxHeight / wallImage.height
        );

        const newCanvasWidth = wallImage.width * scale;
        const newCanvasHeight = wallImage.height * scale;

        fabricCanvas.setWidth(newCanvasWidth);
        fabricCanvas.setHeight(newCanvasHeight);

        wallImage.scale(scale);
        fabricCanvas.setBackgroundImage(
          wallImage,
          fabricCanvas.renderAll.bind(fabricCanvas),
          {
            originX: "center",
            originY: "center",
            left: fabricCanvas.width / 2,
            top: fabricCanvas.height / 2,
          }
        );
        fabricCanvas.renderAll();
      });
    }

    if (designImageURL) {
      fabric.Image.fromURL(designImageURL, (artImage) => {
        designImageRef.current = artImage;

        if (addedDesignImageRef.current) {
          fabricCanvas.remove(addedDesignImageRef.current); // Usuń poprzednią instancję
        }

        const scale = fabricCanvas.width / artImage.width / 4;
        const positionX = fabricCanvas.width / 2 - (artImage.width * scale) / 2;
        const positionY =
          fabricCanvas.height / 2 - (artImage.height * scale) / 2;

        artImage.set({
          scaleX: scale,
          scaleY: scale,
          left: positionX,
          top: positionY,
          selectable: true,
        });

        fabricCanvas.add(artImage);
        addedDesignImageRef.current = artImage; // Zaktualizuj ref do nowo dodanej instancji
        fabricCanvas.renderAll();
      });
    }
  }, [canvasSize, wallImageURL, designImageURL, fabricCanvas]);

  const saveCanvasAsImage = () => {
    if (canvasRef.current) {
      // Tworzy URL obrazu PNG canvasa
      const imageURL = canvasRef.current.toDataURL("image/png");
      // Tworzy link do pobierania
      const link = document.createElement("a");
      link.download = "canvas-image.png";
      link.href = imageURL;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }
  };

  return (
    <div className="visual-container">
      <AnimatedH2 isSectionVisible={isSectionVisible}>Wizualizacje</AnimatedH2>
      <AnimatedH3 isSectionVisible={isSectionVisible}>
        Stwórz własną symulację nadruku.
      </AnimatedH3>
      <LeftSideMotionDiv isSectionVisible={isSectionVisible} className="visual">
        <div className={`wall-mockup ${wallImageURL ? "invisible" : ""}`}></div>

        <div className={`${wallImageURL ? "canvas" : "invisible"}`}>
          <canvas
            ref={canvasRef}
            style={{
              border: "1px solid black",
            }}
          />
        </div>
        <div className="inputs">
          <input
            id="wall"
            type="file"
            onChange={handleWallImageChange}
            accept="image/*"
            style={{ display: "none" }}
          />
          {!wallImageURL ? (
            <button
              onClick={() => openFileInput("wall")}
              className="label enabled"
            >
              Wybierz zdjęcie ściany
            </button>
          ) : (
            <button onClick={resetWall} className="label">
              Resetuj zdjęcie ściany
            </button>
          )}

          <input
            id="design"
            type="file"
            onChange={handleDesignImageChange}
            accept="image/*"
            disabled={!wallImageURL}
            style={{ display: "none" }}
          />
          {!designImageURL ? (
            <button
              onClick={() => wallImageURL && openFileInput("design")}
              className={`label ${!wallImageURL ? "disabled" : "enabled"}`}
            >
              Wybierz zdjęcie projektu
            </button>
          ) : (
            <button onClick={resetDesign} className="label">
              Resetuj zdjęcie projektu
            </button>
          )}

          <button
            onClick={saveCanvasAsImage}
            className={`label ${!designImageURL ? "disabled" : "enabled"}`}
            disabled={!designImageURL}
          >
            Zapisz wizualizację
          </button>
        </div>
      </LeftSideMotionDiv>
    </div>
  );
};

export default WallArtVisualizer;
