export const TABS = {
  MAP: 'map',
  AUTH: 'auth',
  COMMS: 'comms',
} as const;

export type TabKey = typeof TABS[keyof typeof TABS];
