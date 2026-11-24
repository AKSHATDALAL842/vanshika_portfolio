import { useEffect, useState } from 'react';

// Hash-based route (#/journey) so the Journey page works on any static host,
// without needing server-side rewrites for a /journey path.
const isJourneyHash = () => window.location.hash === '#/journey';

export function useJourneyRoute(): boolean {
  const [isJourney, setIsJourney] = useState(isJourneyHash);

  useEffect(() => {
    const onChange = () => setIsJourney(isJourneyHash());
    window.addEventListener('hashchange', onChange);
    return () => window.removeEventListener('hashchange', onChange);
  }, []);

  return isJourney;
}
