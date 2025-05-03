import React from 'react';

/**
 * TransparentImage component to handle images with proper transparency
 * Used for icons and logos in the MaoMao site
 * 
 * @param {Object} props - Component props
 * @param {string} props.src - Image source URL
 * @param {string} props.alt - Alt text for the image
 * @param {string} props.width - Width of the image (can be px, %, etc.)
 * @param {string} props.height - Height of the image (optional)
 * @param {string} props.className - Additional CSS classes
 * @returns {JSX.Element} - Rendered component
 */
const TransparentImage = ({
  src,
  alt,
  width = '100%',
  height,
  className = '',
  ...restProps
}) => {
  // Use placeholder SVG icons for standard icon positions if source is not specified
  const getPlaceholderIcon = () => {
    return `data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9IiM3RDM5OEUiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIj48cmVjdCB4PSIzIiB5PSIzIiB3aWR0aD0iMTgiIGhlaWdodD0iMTgiIHJ4PSIyIiByeT0iMiI+PC9yZWN0PjxjaXJjbGUgY3g9IjguNSIgY3k9IjguNSIgcj0iMS41Ij48L2NpcmNsZT48cG9seWxpbmUgcG9pbnRzPSIyMSAxNSAxNiAxMCA1IDIxIj48L3BvbHlsaW5lPjwvc3ZnPg==`;
  };

  // If no src is provided, use placeholder SVG
  const imageSrc = src || getPlaceholderIcon();

  // Common styles for transparent PNG handling
  const styles = {
    display: 'inline-block',
    width: width,
    height: height || 'auto',
    objectFit: 'contain',
    verticalAlign: 'middle',
  };

  return (
    <img
      src={imageSrc}
      alt={alt || 'MaoMao image'}
      style={styles}
      className={`transparent-img ${className}`}
      {...restProps}
    />
  );
};

export default TransparentImage;