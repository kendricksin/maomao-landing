import React, { useState, useEffect } from 'react';

/**
 * Custom Image component for handling all image types consistently
 * Provides fallback options and error handling
 */
const Image = ({ src, alt, className, style, fallbackSrc, ...rest }) => {
  const [imgSrc, setImgSrc] = useState(src);
  const [hasError, setHasError] = useState(false);
  
  useEffect(() => {
    // Reset state when src changes
    setImgSrc(src);
    setHasError(false);
  }, [src]);

  // Handle image loading error
  const handleError = () => {
    // If we already tried the fallback, don't try again
    if (hasError) return;
    
    // If a fallback was provided, use it
    if (fallbackSrc) {
      setImgSrc(fallbackSrc);
      setHasError(true);
    } else if (src.startsWith('/')) {
      // Try without leading slash
      setImgSrc(src.substring(1));
      setHasError(true);
    }
  };

  // Determine if the source is an external URL
  const isExternalUrl = 
    imgSrc && 
    (imgSrc.startsWith('http://') || imgSrc.startsWith('https://'));

  // SVG content can either be a URL or inline content
  const isSvgContent = 
    typeof imgSrc === 'string' && 
    (imgSrc.includes('<svg') || imgSrc.endsWith('.svg'));

  // For non-URL SVG content, render it directly
  if (typeof imgSrc === 'string' && imgSrc.includes('<svg')) {
    return (
      <div 
        className={className}
        style={style}
        dangerouslySetInnerHTML={{ __html: imgSrc }}
        {...rest}
      />
    );
  }

  // For standard images and URL-based SVGs
  return (
    <img
      src={imgSrc}
      alt={alt || 'Image'}
      className={className}
      style={style}
      onError={handleError}
      {...rest}
    />
  );
};

export default Image;