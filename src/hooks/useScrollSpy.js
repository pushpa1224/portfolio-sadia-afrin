import { useState, useEffect } from 'react';

/**
 * @param {string[]} sectionIds - Array of section id strings, e.g. ['home','about','skills']
 * @param {number} offset - px from top of viewport to treat as threshold (default 120)
 * @returns {string} activeSection - the id of the currently visible section
 */
export function useScrollSpy(sectionIds, offset = 120) {
  const [activeSection, setActiveSection] = useState(sectionIds[0]);

  useEffect(() => {
    const handleScroll = () => {
      // Find the section whose top edge is closest to (but above) the offset line
      let current = sectionIds[0];
      for (const id of sectionIds) {
        const el = document.getElementById(id);
        if (!el) continue;
        const rect = el.getBoundingClientRect();
        if (rect.top <= offset) {
          current = id;
        }
      }
      setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // run once on mount

    return () => window.removeEventListener('scroll', handleScroll);
  }, [sectionIds, offset]);

  return activeSection;
}
