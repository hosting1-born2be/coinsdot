'use client';

import { createContext, useContext } from 'react';

type SectionObserverContextType = {
  registerSection: (id: string, el: HTMLElement) => void;
  unregisterSection: (id: string) => void;
};

export const SectionObserverContext = createContext<
  SectionObserverContextType | undefined
>(undefined);

export const useSectionObserver = (): SectionObserverContextType => {
  const context = useContext(SectionObserverContext);
  if (!context) {
    throw new Error(
      'useSectionObserver must be used within a SectionObserverContext.Provider',
    );
  }
  return context;
};
