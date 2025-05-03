import React from 'react';
import { Button } from 'antd';
import Image from '../Image';

// Improved regex for image URLs - includes SVG files
export const isImg = /\.(png|jpe?g|gif|svg|webp|bmp|ico)$|^http(s)?:\/\/([\w-]+\.)+[\w-]+(\/[\w-./?%&=]*)?/i;

export const getChildrenToRender = (item, i) => {
  let tag = item.name && item.name.indexOf('title') === 0 ? 'h1' : 'div';
  tag = item.href ? 'a' : tag;
  
  let children = item.children;
  
  // Handle image paths and SVG content
  if (typeof children === 'string') {
    // If it matches image pattern, render as Image component
    if (children.match(isImg)) {
      children = React.createElement(Image, { 
        src: children, 
        alt: item.alt || 'Image', 
        className: item.imgClassName || ''
      });
    }
    // For inline SVG content
    else if (children.includes('<svg')) {
      children = React.createElement('div', {
        dangerouslySetInnerHTML: { __html: children }
      });
    }
  }
  
  // Handle Button component
  if (item.name && item.name.indexOf('button') === 0 && typeof item.children === 'object') {
    children = React.createElement(Button, {
      ...item.children
    });
  }
  
  return React.createElement(tag, { key: i.toString(), ...item }, children);
};