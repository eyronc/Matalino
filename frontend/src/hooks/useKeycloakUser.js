import { useState, useEffect } from 'react';
import { useKeycloak } from '@react-keycloak/web';

export function useKeycloakUser() {
  const { keycloak, initialized } = useKeycloak();
  const [user, setUser] = useState({ name: '', email: '', initials: '', isLoaded: false });

  useEffect(() => {
    if (!initialized) return;

    const load = async () => {
      if (!keycloak.authenticated) {
        setUser({ name: 'Guest', email: '', initials: 'G', isLoaded: true });
        return;
      }

      try {
        await keycloak.loadUserProfile();
      } catch (_) {
      }

      const profile = keycloak.profile || {};
      const tokenParsed = keycloak.tokenParsed || {};

      const firstName = profile.firstName || tokenParsed.given_name || '';
      const lastName  = profile.lastName  || tokenParsed.family_name || '';
      const fullName  =
        profile.username === tokenParsed.preferred_username
          ? (tokenParsed.name || `${firstName} ${lastName}`.trim() || tokenParsed.preferred_username || 'User')
          : (tokenParsed.name || `${firstName} ${lastName}`.trim() || profile.username || 'User');

      const email = profile.email || tokenParsed.email || '';

      const initials = fullName
        .split(' ')
        .filter(Boolean)
        .slice(0, 2)
        .map(w => w[0].toUpperCase())
        .join('');

      setUser({ name: fullName, email, initials: initials || '?', isLoaded: true });
    };

    load();

    keycloak.onAuthRefreshSuccess = load;
    return () => { keycloak.onAuthRefreshSuccess = undefined; };
  }, [initialized, keycloak]);

  return user;
}