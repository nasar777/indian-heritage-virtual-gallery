// Virtual Museum page
// Embeds the existing Unity WebGL museum only.
//
// Unity WebGL build should be inside:
// /public/unity-build/
//
// .env:
// VITE_UNITY_BUILD_URL=/unity-build/index.html

import { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/pages.css';

const UNITY_URL =
  import.meta.env.VITE_UNITY_BUILD_URL || null;

export default function VirtualMuseum() {
  const navigate = useNavigate();

  const [progress, setProgress] = useState(0);
  const [loaded, setLoaded] = useState(false);
  const [fullscreen, setFullscreen] = useState(false);

  const wrapperRef = useRef(null);

  // -----------------------------------------
  // Loading progress
  // -----------------------------------------

  useEffect(() => {
    if (!UNITY_URL) return;

    const interval = setInterval(() => {
      setProgress((p) => {
        if (p >= 90) {
          clearInterval(interval);
          return 90;
        }

        return Math.min(
          p + Math.random() * 12,
          90
        );
      });
    }, 400);

    return () => clearInterval(interval);
  }, []);

  // -----------------------------------------
  // Unity iframe loaded
  // -----------------------------------------

  const handleIframeLoad = (event) => {
    const iframe = event.currentTarget;

    setProgress(90);

    const checkUnityLoaded = setInterval(() => {
      try {
        const iframeDoc =
          iframe.contentDocument ||
          iframe.contentWindow.document;

        const loadingBar =
          iframeDoc.querySelector('#unity-loading-bar');

        // Unity has finished loading
        if (
          loadingBar &&
          window.getComputedStyle(loadingBar).display === 'none'
        ) {
          clearInterval(checkUnityLoaded);

          setProgress(100);
          setLoaded(true);
        }
      } catch (error) {
        console.log(
          'Waiting for Unity to finish loading...'
        );
      }
    }, 500);

    // Safety cleanup
    setTimeout(() => {
      clearInterval(checkUnityLoaded);
    }, 10 * 60 * 1000);
  };

  // -----------------------------------------
  // Listen to browser fullscreen state
  // -----------------------------------------

  useEffect(() => {
    const handleFullscreenChange = () => {
      setFullscreen(
        document.fullscreenElement !== null
      );
    };

    document.addEventListener(
      'fullscreenchange',
      handleFullscreenChange
    );

    return () => {
      document.removeEventListener(
        'fullscreenchange',
        handleFullscreenChange
      );
    };
  }, []);

  // -----------------------------------------
  // Enter / Exit fullscreen
  // -----------------------------------------

  const toggleFullscreen = async () => {
    try {
      if (!document.fullscreenElement) {
        await wrapperRef.current?.requestFullscreen();
      } else {
        await document.exitFullscreen();
      }
    } catch (error) {
      console.error(
        'Fullscreen error:',
        error
      );
    }
  };

  // -----------------------------------------
  // Exit museum
  // -----------------------------------------

  const handleExitMuseum = () => {
    if (document.fullscreenElement) {
      document.exitFullscreen();
    }

    navigate('/');
  };

  return (
    <div className="museum-page">

      {/* =====================================
          TOOLBAR
      ====================================== */}

      <div className="museum-toolbar">

        <div className="museum-toolbar-title">
          🏛️ Indian Heritage Virtual Gallery

          <span className="museum-title-sub">
            — 3D Experience
          </span>
        </div>

        <div className="museum-toolbar-actions">

          {/* Fullscreen */}

          {UNITY_URL && (
            <button
              className="museum-action-button"
              onClick={toggleFullscreen}
            >
              {fullscreen
                ? '⊡ Exit Fullscreen'
                : '⛶ Fullscreen'}
            </button>
          )}

          {/* Exit Museum */}

          <button
            className="museum-exit-button"
            onClick={handleExitMuseum}
          >
            ← Exit Gallery
          </button>

        </div>
      </div>

      {/* =====================================
          MUSEUM FRAME
      ====================================== */}

      <div
        className="museum-frame-wrapper"
        ref={wrapperRef}
      >

        {UNITY_URL ? (
          <>

            {/* =================================
                LOADING SCREEN
            ================================== */}

            <div
              className={`museum-loading ${
                loaded ? 'hidden' : ''
              }`}
            >

              <div className="loading-logo">
                🏛️
              </div>

              <div className="loading-title">
                Loading Virtual Gallery…
              </div>

              <div className="loading-bar-wrap">

                <div
                  className="loading-bar"
                  style={{
                    width: `${Math.min(
                      progress,
                      100
                    )}%`,
                  }}
                />

              </div>

              <div className="loading-text">

                {progress < 30
                  ? 'Initializing Unity Engine…'
                  : progress < 60
                  ? 'Loading Gallery Assets…'
                  : progress < 90
                  ? 'Building 3D Environment…'
                  : 'Almost ready…'}

              </div>

              <div className="loading-percentage">
                {Math.round(progress)}%
              </div>

            </div>

            {/* =================================
                UNITY WEBGL
            ================================== */}

            <iframe
              className="museum-iframe"
              src={UNITY_URL}
              title="Indian Heritage Virtual Museum 3D"
              allow="fullscreen; autoplay"
              onLoad={handleIframeLoad}
            />

          </>

        ) : (

          /* =================================
             UNITY NOT CONFIGURED
          ================================= */

          <div className="museum-placeholder">

            <div className="placeholder-icon">
              🏛️
            </div>

            <h2>
              Unity Build Not Configured
            </h2>

            <p>
              To embed your Unity WebGL museum,
              export your Unity project as a
              WebGL build and place it inside:
            </p>

            <code>
              public/unity-build/
            </code>

            <p>
              Then add the following to your
              <code> .env </code>
              file:
            </p>

            <code>
              VITE_UNITY_BUILD_URL=/unity-build/index.html
            </code>

          </div>
        )}

      </div>
    </div>
  );
}
