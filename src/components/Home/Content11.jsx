import React from 'react';
import { Link } from 'react-router-dom';
import OverPack from 'rc-scroll-anim/lib/ScrollOverPack';
import QueueAnim from 'rc-queue-anim';
import TweenOne from 'rc-tween-one';
import { Button } from 'antd';
import Image from '../Image';

/**
 * Content11 Component
 * 
 * Hero banner section with image, title, content and CTA button
 * This enhanced version uses our custom Image component for reliable
 * image rendering including SVGs
 */

class Content11 extends React.PureComponent {
  render() {
    const { ...props } = this.props;
    const { dataSource } = props;
    delete props.dataSource;
    delete props.isMobile;
    
    // Custom render function for title wrapper children
    const renderTitleWrapper = (item, i) => {
      if (item.name === 'image') {
        // For image items
        const imgChild = item.children;
        
        // If already a React element, use directly
        if (React.isValidElement(imgChild)) {
          return React.cloneElement(imgChild, { 
            key: i.toString(),
            className: item.className
          });
        }
        
        // If string URL, render with Image component
        if (typeof imgChild === 'string') {
          return (
            <Image
              key={i.toString()}
              src={imgChild}
              alt="Title"
              className={item.className}
              style={{ maxWidth: '100%' }}
              fallbackSrc={imgChild.startsWith('/') ? imgChild.substring(1) : `/${imgChild}`}
            />
          );
        }
        
        // Fallback
        console.warn('Unknown image format in Content11');
        return null;
      }
      
      // For title items
      if (item.name === 'title') {
        const titleContent = typeof item.children === 'object' 
          ? item.children 
          : <span>{item.children}</span>;
          
        return (
          <h1 key={i.toString()} className={item.className}>
            {titleContent}
          </h1>
        );
      }
      
      // For content items
      if (item.name === 'content' || item.name === 'content2') {
        const content = typeof item.children === 'object'
          ? item.children
          : <span>{item.children}</span>;
          
        return (
          <div key={i.toString()} className={item.className}>
            {content}
          </div>
        );
      }
      
      // Default case - render as div
      return (
        <div key={i.toString()} {...item}>
          {item.children}
        </div>
      );
    };
    
    // Render button component with proper link
    const renderButton = () => {
      const buttonProps = dataSource.button.children.a;
      const buttonContent = typeof buttonProps.children === 'object'
        ? buttonProps.children
        : <span>{buttonProps.children}</span>;
      
      // Check if we have an internal link or external URL
      if (buttonProps.href && buttonProps.href.startsWith('/')) {
        return (
          <Link to={buttonProps.href}>
            <Button type="primary" className={buttonProps.className}>
              {buttonContent}
            </Button>
          </Link>
        );
      }
      
      // Default to regular button with external link if provided
      return (
        <Button 
          type="primary" 
          href={buttonProps.href}
          className={buttonProps.className}
        >
          {buttonContent}
        </Button>
      );
    };
    
    return (
      <OverPack {...props} {...dataSource.OverPack}>
        <QueueAnim
          type="bottom"
          leaveReverse
          key="page"
          delay={[0, 100]}
          {...dataSource.titleWrapper}
        >
          {dataSource.titleWrapper.children.map(renderTitleWrapper)}
        </QueueAnim>
        <TweenOne
          key="button"
          style={{ textAlign: 'center' }}
          {...dataSource.button}
          animation={{ y: 30, opacity: 0, type: 'from', delay: 300 }}
        >
          {renderButton()}
        </TweenOne>
      </OverPack>
    );
  }
}

export default Content11;