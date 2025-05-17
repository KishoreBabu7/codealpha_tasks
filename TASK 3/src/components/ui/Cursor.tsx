import React, { useEffect, useState } from 'react';

const Cursor: React.FC = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [hidden, setHidden] = useState(true);
  const [clicked, setClicked] = useState(false);
  const [linkHovered, setLinkHovered] = useState(false);

  useEffect(() => {
    // Don't show custom cursor on mobile/touch devices
    if (window.matchMedia('(pointer: coarse)').matches) {
      return;
    }

    const addEventListeners = () => {
      document.addEventListener('mousemove', onMouseMove);
      document.addEventListener('mouseenter', onMouseEnter);
      document.addEventListener('mouseleave', onMouseLeave);
      document.addEventListener('mousedown', onMouseDown);
      document.addEventListener('mouseup', onMouseUp);
    };

    const removeEventListeners = () => {
      document.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseenter', onMouseEnter);
      document.removeEventListener('mouseleave', onMouseLeave);
      document.removeEventListener('mousedown', onMouseDown);
      document.removeEventListener('mouseup', onMouseUp);
    };

    const onMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    const onMouseEnter = () => {
      setHidden(false);
    };

    const onMouseLeave = () => {
      setHidden(true);
    };

    const onMouseDown = () => {
      setClicked(true);
    };

    const onMouseUp = () => {
      setClicked(false);
    };

    // Add link hover effect
    const onLinkHoverIn = () => {
      setLinkHovered(true);
    };

    const onLinkHoverOut = () => {
      setLinkHovered(false);
    };

    const addLinkEvents = () => {
      document.querySelectorAll('a, button, input, textarea, .interactive-card').forEach(el => {
        el.addEventListener('mouseenter', onLinkHoverIn);
        el.addEventListener('mouseleave', onLinkHoverOut);
      });
    };

    const removeLinkEvents = () => {
      document.querySelectorAll('a, button, input, textarea, .interactive-card').forEach(el => {
        el.removeEventListener('mouseenter', onLinkHoverIn);
        el.removeEventListener('mouseleave', onLinkHoverOut);
      });
    };

    addEventListeners();
    addLinkEvents();

    const refreshLinkEvents = setInterval(() => {
      addLinkEvents();
    }, 2000); // Check for new links every 2 seconds

    return () => {
      removeEventListeners();
      removeLinkEvents();
      clearInterval(refreshLinkEvents);
    };
  }, []);

  if (typeof window === 'undefined' || window.matchMedia('(pointer: coarse)').matches) {
    return null;
  }

  return (
    <>
      <div
        className={`cursor-dot ${hidden ? 'opacity-0' : 'opacity-100'} ${clicked ? 'scale-50' : ''}`}
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
          transform: `translate(-50%, -50%) scale(${clicked ? 0.5 : 1})`,
        }}
      />
      <div
        className={`cursor-outline ${hidden ? 'opacity-0' : 'opacity-100'} ${linkHovered ? 'cursor-hover' : ''}`}
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
          width: linkHovered ? '70px' : '40px',
          height: linkHovered ? '70px' : '40px',
        }}
      />
    </>
  );
};

export default Cursor;