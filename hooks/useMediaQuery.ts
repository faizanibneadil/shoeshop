import { useState, useEffect } from 'react';

export const useMediaQuery = (query: string) => {
    const [matches, setMatches] = useState(false);

    useEffect(() => {
        const mediaQuery = window.matchMedia(query);

        // Define a callback function to update the matches state
        const handleMediaQueryChange = (event: MediaQueryListEvent) => {
            setMatches(event.matches);
        };

        // Add event listener for changes in media query
        mediaQuery.addEventListener('change', handleMediaQueryChange);

        // Initial check for media query match
        setMatches(mediaQuery.matches);

        // Clean up function to remove event listener
        return () => {
            mediaQuery.removeEventListener('change', handleMediaQueryChange);
        };
    }, [query]); // Only re-run the effect if query changes

    return matches;
}