import React from 'react';
import QueueAnim from 'rc-queue-anim';
import { Row, Col, Typography } from 'antd';
import OverPack from 'rc-scroll-anim/lib/ScrollOverPack';
import Image from '../Image';

const { Title } = Typography;

/**
 * Feature0 Component
 * 
 * Grid layout feature component with title and feature blocks
 * Enhanced to support custom Image components and improved typography
 */
const Feature0 = (props) => {
  const { dataSource, isMobile, ...otherProps } = props;
  const {
    wrapper,
    titleWrapper,
    page,
    OverPack: overPackData,
    childWrapper,
  } = dataSource;
  
  // Enhanced rendering for each content block
  const renderBlockItem = (item) => {
    return item.children.map((child, i) => {
      // Special handling for image items
      if (child.name === 'image') {
        // If it's already a React element (like our Image component), return it directly
        if (React.isValidElement(child.children)) {
          return React.cloneElement(child.children, {
            key: `image-${i}`,
            className: `${child.className || ''} ${child.children.props.className || ''}`.trim() || undefined,
          });
        }
        
        // If it's a string path, render it with our Image component
        if (typeof child.children === 'string') {
          return (
            <Image 
              key={`image-${i}`}
              src={child.children}
              alt="feature icon"
              className={child.className}
              style={{ width: '100%', height: 'auto' }}
            />
          );
        }
        
        // Fallback
        return <div key={`image-${i}`}>Image Error</div>;
      }
      
      // For title items - enhanced with proper heading
      if (child.name === 'title') {
        return (
          <div key={`title-${i}`} className={child.className || 'content0-block-title'}>
            {typeof child.children === 'string' ? (
              <h3>{child.children}</h3>
            ) : (
              child.children
            )}
          </div>
        );
      }
      
      // For content items
      if (child.name === 'content') {
        return (
          <div key={`content-${i}`} className={child.className || 'content0-block-content'}>
            {typeof child.children === 'string' ? child.children : child.children}
          </div>
        );
      }
      
      // Default rendering for other elements
      return (
        <div key={i.toString()} {...child}>
          {child.children}
        </div>
      );
    });
  };
  
  // Enhanced title rendering with proper heading element
  const renderTitle = (item, i) => {
    if (item.name === 'title') {
      return (
        <Title 
          key={i.toString()} 
          level={2}
          className={item.className || 'feature0-title'}
          style={{ color: '#333', marginBottom: '16px' }}
        >
          {typeof item.children === 'string' ? item.children : item.children}
        </Title>
      );
    }
    
    // For other elements in title wrapper
    return (
      <div key={i.toString()} {...item}>
        {typeof item.children === 'string' ? item.children : item.children}
      </div>
    );
  };
  
  return (
    <div {...otherProps} {...wrapper}>
      <div {...page}>
        {/* Title section - centered at top */}
        <div {...titleWrapper} className={`${titleWrapper.className || ''} title-wrapper`.trim()}>
          {titleWrapper.children.map(renderTitle)}
        </div>
        
        {/* Blocks section - row below title */}
        <OverPack {...overPackData}>
          <QueueAnim
            type="bottom"
            key="block"
            leaveReverse
            component={Row}
            componentProps={{
              ...childWrapper,
              gutter: [16, 16], // Adding consistent gutters
              justify: "center" // Center the blocks horizontally
            }}
          >
            {childWrapper.children.map((block, i) => {
              const { children: item, ...blockProps } = block;
              return (
                <Col 
                  key={i.toString()} 
                  {...blockProps}
                  xs={24}     // Full width on mobile
                  sm={24}     // Full width on small tablets
                  md={item.md || 8}  // Default to 3 blocks per row, but respect provided md value
                  lg={item.lg || 8}  // Default to 3 blocks per row, but respect provided lg value
                  xl={item.xl || 8}  // Default to 3 blocks per row, but respect provided xl value
                >
                  <div {...item} className={`${item.className || ''} content0-block-wrapper`}>
                    {renderBlockItem(item)}
                  </div>
                </Col>
              );
            })}
          </QueueAnim>
        </OverPack>
      </div>
    </div>
  );
};

export default Feature0;