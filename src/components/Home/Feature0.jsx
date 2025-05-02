import React from 'react';
import QueueAnim from 'rc-queue-anim';
import { Row, Col } from 'antd';
import OverPack from 'rc-scroll-anim/lib/ScrollOverPack';
import { getChildrenToRender } from './utils';

const Feature0 = (props) => {
  const { dataSource, isMobile, ...otherProps } = props;
  const {
    wrapper,
    titleWrapper,
    page,
    OverPack: overPackData,
    childWrapper,
  } = dataSource;
  
  return (
    <div {...otherProps} {...wrapper}>
      <div {...page}>
        {/* Title section - centered at top */}
        <div {...titleWrapper}>
          {titleWrapper.children.map(getChildrenToRender)}
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
                  md={8}      // 3 blocks per row on medium screens
                  lg={8}      // 3 blocks per row on large screens
                  xl={8}      // 3 blocks per row on extra large screens
                >
                  <div {...item} className={`${item.className || ''} content0-block-wrapper`}>
                    {item.children.map(getChildrenToRender)}
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