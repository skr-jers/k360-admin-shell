import { ReactNode, useEffect, useRef, useState } from "react";
import { createRoot, Root } from "react-dom/client";

interface ShadowComponentProps {
    children: ReactNode;
    windowModuleCSS: string;
  } 
const ShadowComponent: React.FC<ShadowComponentProps> = ({ children, windowModuleCSS}) => {
    const shadowHost = useRef<HTMLDivElement>(null);
    const shadowRoot = useRef<ShadowRoot | null>(null);
    const reactRoot = useRef<Root | null>(null);
    const [stylesLoaded, setStylesLoaded] = useState(false);
  
    useEffect(() => {
      if (shadowHost.current && !shadowRoot.current) {
        shadowRoot.current = shadowHost.current.attachShadow({ mode: 'open' });
      }
  
      if (shadowRoot.current && !reactRoot.current) {
        reactRoot.current = createRoot(shadowRoot.current);
      }
    }, []);
  
    useEffect(() => {
      // Esperamos que `window[windowModuleCSS]` esté disponible
      const intervalId = setInterval(() => {
        // @ts-ignore
        const links = window[windowModuleCSS];
  
        if (links && links.length > 0) {
          let loadedLinks = 0;
  
          const checkIfLinksAreLoaded = () => {
            loadedLinks += 1;
            if (loadedLinks === links.length) {
              setStylesLoaded(true);
            }
          };
  
          links.forEach((linkHref: string) => {
            const linkElement = document.createElement('link');
            linkElement.rel = 'stylesheet';
            linkElement.href = linkHref;
            linkElement.onload = checkIfLinksAreLoaded;
  
            if (shadowRoot.current) {
              shadowRoot.current.appendChild(linkElement);
            }
          });
  
          clearInterval(intervalId);
        } else {
          setStylesLoaded(true);
        }
      }, 0);
  
      return () => clearInterval(intervalId);
    }, []);
  
    useEffect(() => {
      if (stylesLoaded && reactRoot.current) {
        reactRoot.current.render(<>{children}</>);
      }
    }, [stylesLoaded, children]);
  
    return <div ref={shadowHost}></div>;
  };

  export default ShadowComponent;