import React, { useState, useEffect } from 'react';
import { Card, Row, Col, Typography, Table, Tag, Divider, Button, message } from 'antd';

const { Title, Text, Paragraph } = Typography;

// Image paths from ImageExport.js
const imagePaths = [
  { name: 'MaoMaoLogo', path: '/logo/maomao-logo.png', type: 'png', description: 'MaoMao Logo (Known Working)' },
  { name: 'RevenueIcon', path: '/icons/revenue.svg', type: 'svg', description: 'Revenue Icon (Not Working)' },
  { name: 'NewExperience', path: '/image/new_exp.png', type: 'png', description: 'New Experience (Not Working)' },
  { name: 'VisibilityIcon', path: '/icons/visibility.svg', type: 'svg', description: 'Visibility Icon' },
  { name: 'AISecurityIcon', path: '/icons/ai-security.svg', type: 'svg', description: 'AI Security Icon' },
  { name: 'VenueTypeIcon', path: '/icons/venue-type.png', type: 'png', description: 'Venue Type Icon' },
  { name: 'InstallIcon', path: '/icons/install.png', type: 'png', description: 'Install Icon' },
  { name: 'QRCodeIcon', path: '/icons/qr-code.svg', type: 'svg', description: 'QR Code Icon' },
  { name: 'AICheckIcon', path: '/icons/ai-check.svg', type: 'svg', description: 'AI Check Icon' },
  { name: 'FacebookIcon', path: '/social/facebook.png', type: 'png', description: 'Facebook Icon' },
  { name: 'InstagramIcon', path: '/social/instagram.png', type: 'png', description: 'Instagram Icon' },
  { name: 'LineIcon', path: '/social/line.png', type: 'png', description: 'Line Icon' },
  // Test with known working external images for comparison
  { 
    name: 'ExternalTest1', 
    path: 'https://zos.alipayobjects.com/rmsportal/nLzbeGQLPyBJoli.png', 
    type: 'external', 
    description: 'External Test Image 1' 
  },
  { 
    name: 'ExternalTest2', 
    path: 'https://gw.alipayobjects.com/zos/rmsportal/ZsWYzLOItgeaWDSsXdZd.svg', 
    type: 'external-svg', 
    description: 'External Test SVG' 
  }
];

// Also try alternative paths without leading slash
const altImagePaths = imagePaths.map(img => {
  if (img.type !== 'external' && img.type !== 'external-svg' && img.path.startsWith('/')) {
    return {
      ...img,
      name: `${img.name}Alt`,
      path: img.path.substring(1), // Remove leading slash
      description: `${img.description} (alt path without leading slash)`
    };
  }
  return null;
}).filter(Boolean);

// Combine both sets
const allImagePaths = [...imagePaths, ...altImagePaths];

const ImageTestPage = () => {
  const [imageStatus, setImageStatus] = useState({});
  const [publicPath, setPublicPath] = useState('');
  const [assetsPath, setAssetsPath] = useState('');
  
  useEffect(() => {
    // Get the public path and assets path
    setPublicPath(window.location.origin);
    setAssetsPath(process.env.NODE_ENV === 'production' 
      ? window.location.origin 
      : window.location.origin);
    
    // Check each image path
    allImagePaths.forEach(({ name, path }) => {
      const img = new Image();
      
      img.onload = () => {
        setImageStatus(prev => ({
          ...prev,
          [name]: { 
            status: 'success', 
            path, 
            dimensions: `${img.width}x${img.height}`,
            time: new Date().toLocaleTimeString()
          }
        }));
      };
      
      img.onerror = () => {
        setImageStatus(prev => ({
          ...prev,
          [name]: { 
            status: 'error', 
            path, 
            dimensions: 'N/A',
            time: new Date().toLocaleTimeString()
          }
        }));
      };
      
      img.src = path;
    });
  }, []);

  const checkAllImages = () => {
    message.info('Rechecking all images...');
    
    allImagePaths.forEach(({ name, path }) => {
      const img = new Image();
      
      img.onload = () => {
        setImageStatus(prev => ({
          ...prev,
          [name]: { 
            status: 'success', 
            path, 
            dimensions: `${img.width}x${img.height}`,
            time: new Date().toLocaleTimeString()
          }
        }));
      };
      
      img.onerror = () => {
        setImageStatus(prev => ({
          ...prev,
          [name]: { 
            status: 'error', 
            path, 
            dimensions: 'N/A',
            time: new Date().toLocaleTimeString()
          }
        }));
      };
      
      // Add cache-busting parameter to force reload
      img.src = path + '?t=' + new Date().getTime();
    });
  };

  const columns = [
    {
      title: 'Image Name',
      dataIndex: 'name',
      key: 'name',
      sorter: (a, b) => a.name.localeCompare(b.name),
    },
    {
      title: 'Status',
      dataIndex: 'status',
      key: 'status',
      render: (_, record) => {
        const status = imageStatus[record.name]?.status;
        return (
          <Tag color={
            !status ? 'processing' : 
            status === 'success' ? 'success' : 'error'
          }>
            {!status ? 'Checking' : 
            status === 'success' ? 'Loaded' : 'Failed'}
          </Tag>
        );
      },
      filters: [
        { text: 'Loaded', value: 'success' },
        { text: 'Failed', value: 'error' },
        { text: 'Checking', value: 'checking' },
      ],
      onFilter: (value, record) => {
        const status = imageStatus[record.name]?.status;
        if (value === 'checking') return !status;
        return status === value;
      },
    },
    {
      title: 'Path',
      dataIndex: 'path',
      key: 'path',
      render: (path) => <Text copyable>{path}</Text>,
    },
    {
      title: 'Type',
      dataIndex: 'type',
      key: 'type',
      filters: [
        { text: 'PNG', value: 'png' },
        { text: 'SVG', value: 'svg' },
        { text: 'External', value: 'external' },
      ],
      onFilter: (value, record) => record.type.includes(value),
    },
    {
      title: 'Dimensions',
      key: 'dimensions',
      render: (_, record) => imageStatus[record.name]?.dimensions || 'N/A',
    },
    {
      title: 'Check Time',
      key: 'time',
      render: (_, record) => imageStatus[record.name]?.time || 'Pending',
    },
    {
      title: 'Preview',
      key: 'preview',
      render: (_, record) => {
        if (imageStatus[record.name]?.status === 'success') {
          return (
            <img 
              src={record.path} 
              alt={record.name} 
              style={{ 
                maxWidth: '80px', 
                maxHeight: '50px',
                border: '1px dashed #d9d9d9',
                padding: '4px',
                background: record.type.includes('svg') ? '#f5f5f5' : 'transparent'
              }} 
            />
          );
        }
        return 'No preview';
      },
    },
  ];

  const dataSource = allImagePaths.map(img => ({
    key: img.name,
    name: img.name,
    path: img.path,
    type: img.type,
    description: img.description,
  }));

  return (
    <div style={{ padding: '24px', maxWidth: '1200px', margin: '0 auto' }}>
      <Card>
        <Title level={2}>Image Loading Test Page</Title>
        <Paragraph>
          This page tests loading of all images used in the MaoMao application. 
          It helps identify which images are loading correctly and which ones are failing.
        </Paragraph>
        
        <Row gutter={[16, 16]} style={{ marginBottom: '24px' }}>
          <Col span={24}>
            <Card title="Environment Information">
              <Row gutter={16}>
                <Col span={12}>
                  <Text strong>Public Path:</Text> <Text copyable>{publicPath}</Text>
                </Col>
                <Col span={12}>
                  <Text strong>Assets Path:</Text> <Text copyable>{assetsPath}</Text>
                </Col>
              </Row>
              <Divider />
              <Button type="primary" onClick={checkAllImages}>Recheck All Images</Button>
            </Card>
          </Col>
        </Row>
        
        <Table 
          dataSource={dataSource} 
          columns={columns} 
          pagination={false}
          expandable={{
            expandedRowRender: (record) => (
              <p style={{ margin: 0 }}>
                <strong>Description:</strong> {record.description}
              </p>
            ),
          }}
        />
        
        <Divider />
        
        <Title level={4}>Possible Solutions If Images Are Not Loading:</Title>
        <ul>
          <li>Ensure all image files are correctly placed in the public directory</li>
          <li>Check file names and extensions for exact matches (case sensitive)</li>
          <li>Verify directory structure: <code>/public/logo/</code>, <code>/public/icons/</code>, <code>/public/image/</code>, <code>/public/social/</code></li>
          <li>Try paths with and without leading slash</li>
          <li>For SVG files, ensure they have proper XML formatting</li>
          <li>Restart your development server after adding files to the public directory</li>
        </ul>
      </Card>
    </div>
  );
};

export default ImageTestPage;