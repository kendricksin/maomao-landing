import React, { useState, useEffect } from 'react';
import { Card, Row, Col, Typography, Tag, Space, Divider } from 'antd';

const { Title, Text, Paragraph } = Typography;

/**
 * A diagnostic component to check image loading status
 * Add this component temporarily to your home page to debug image issues
 */
const ImageDebugger = () => {
  // Define all image paths to test
  const imagePaths = [
    { name: 'MaoMaoLogo', path: '/logo/maomao-logo.png', type: 'png' },
    { name: 'RevenueIcon', path: '/icons/revenue.svg', type: 'svg' },
    { name: 'NewExperience', path: '/image/new_exp.png', type: 'png' },
    { name: 'VisibilityIcon', path: '/icons/visibility.svg', type: 'svg' },
    { name: 'AISecurityIcon', path: '/icons/ai-security.svg', type: 'svg' },
    { name: 'VenueTypeIcon', path: '/icons/venue-type.png', type: 'png' },
    { name: 'InstallIcon', path: '/icons/install.png', type: 'png' },
    { name: 'QRCodeIcon', path: '/icons/qr-code.svg', type: 'svg' },
    { name: 'AICheckIcon', path: '/icons/ai-check.svg', type: 'svg' },
    { name: 'FacebookIcon', path: '/social/facebook.svg', type: 'svg' },
    { name: 'InstagramIcon', path: '/social/instagram.svg', type: 'svg' },
    { name: 'LineIcon', path: '/social/line.svg', type: 'svg' },
    // Test with a known working external image for comparison
    { name: 'ExternalTest', path: 'https://zos.alipayobjects.com/rmsportal/nLzbeGQLPyBJoli.png', type: 'external' },
  ];

  // Create state to track loading status
  const [imageStatus, setImageStatus] = useState({});
  
  useEffect(() => {
    // Check each image path
    imagePaths.forEach(({ name, path }) => {
      const img = new Image();
      
      img.onload = () => {
        setImageStatus(prev => ({
          ...prev,
          [name]: { status: 'success', path, dimensions: `${img.width}x${img.height}` }
        }));
      };
      
      img.onerror = () => {
        setImageStatus(prev => ({
          ...prev,
          [name]: { status: 'error', path, dimensions: 'N/A' }
        }));
      };
      
      img.src = path;
    });
  }, []);

  return (
    <Card title="Image Path Diagnostics" style={{ margin: '40px 0' }}>
      <Title level={4}>Image Loading Status</Title>
      <Paragraph>
        This component tests if images can be loaded from their paths. If images show as "Failed", 
        check the public folder structure to ensure all files exist.
      </Paragraph>
      
      <Divider />
      
      <Row gutter={[16, 16]}>
        {imagePaths.map(({ name, path, type }) => (
          <Col span={8} key={name}>
            <Card 
              size="small" 
              title={name}
              extra={
                <Tag color={
                  !imageStatus[name] ? 'processing' : 
                  imageStatus[name].status === 'success' ? 'success' : 'error'
                }>
                  {!imageStatus[name] ? 'Checking' : 
                   imageStatus[name].status === 'success' ? 'Loaded' : 'Failed'}
                </Tag>
              }
            >
              <Space direction="vertical" style={{ width: '100%' }}>
                <Text type="secondary" style={{ wordBreak: 'break-all' }}>Path: {path}</Text>
                <Text>Type: {type}</Text>
                {imageStatus[name]?.status === 'success' && (
                  <Text>Dimensions: {imageStatus[name].dimensions}</Text>
                )}
                {imageStatus[name]?.status === 'success' && (
                  <div style={{ textAlign: 'center', marginTop: 8 }}>
                    <img 
                      src={path} 
                      alt={name} 
                      style={{ 
                        maxWidth: '100%', 
                        maxHeight: '80px',
                        border: '1px dashed #d9d9d9',
                        padding: '8px',
                        background: type === 'svg' ? '#f5f5f5' : 'transparent'
                      }} 
                    />
                  </div>
                )}
              </Space>
            </Card>
          </Col>
        ))}
      </Row>
      
      <Divider />
      
      <Title level={4}>Public Folder Structure</Title>
      <Paragraph>
        Make sure your public folder has the following structure:
      </Paragraph>
      <pre style={{ background: '#f5f5f5', padding: 16, borderRadius: 4 }}>
{`public/
  ├── logo/
  │   └── maomao-logo.png
  ├── icons/
  │   ├── visibility.svg
  │   ├── ai-security.svg
  │   ├── venue-type.png
  │   ├── install.png
  │   ├── qr-code.svg
  │   ├── ai-check.svg
  │   └── revenue.svg
  ├── social/
  │   ├── facebook.png
  │   ├── instagram.png
  │   └── line.png
  └── image/
      └── new_exp.png`}
      </pre>
    </Card>
  );
};

export default ImageDebugger;