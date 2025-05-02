import React, { useState } from 'react';
import { Form, Input, Button, Row, Col, Typography } from 'antd';
import { MailOutlined, PhoneOutlined, EnvironmentOutlined } from '@ant-design/icons';

const { Title, Paragraph } = Typography;
const { TextArea } = Input;

const Contact = () => {
  const [submitting, setSubmitting] = useState(false);

  const onFinish = (values) => {
    console.log('Form values:', values);
    setSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setSubmitting(false);
      // Reset form here if needed
    }, 2000);
  };

  return (
    <div className="home-page-wrapper" style={{ padding: '64px 24px' }}>
      <div className="home-page" style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <div className="title-wrapper" style={{ margin: '0 auto 64px', textAlign: 'center' }}>
          <h1>Contact Us</h1>
          <p>Get in touch with our team for any questions about partnerships or services</p>
        </div>
        
        <Row gutter={[48, 48]}>
          <Col xs={24} md={12} style={{ marginBottom: '24px' }}>
            <div style={{ backgroundColor: '#fff', padding: '32px', borderRadius: '6px', boxShadow: '0 2px 8px rgba(0,0,0,0.09)' }}>
              <Form
                layout="vertical"
                onFinish={onFinish}
              >
                <Form.Item
                  name="name"
                  label="Name"
                  rules={[{ required: true, message: 'Please enter your name' }]}
                >
                  <Input placeholder="Your name" size="large" />
                </Form.Item>

                <Form.Item
                  name="email"
                  label="Email"
                  rules={[
                    { required: true, message: 'Please enter your email' },
                    { type: 'email', message: 'Please enter a valid email' }
                  ]}
                >
                  <Input placeholder="Your email" size="large" />
                </Form.Item>

                <Form.Item
                  name="subject"
                  label="Subject"
                  rules={[{ required: true, message: 'Please enter a subject' }]}
                >
                  <Input placeholder="Subject" size="large" />
                </Form.Item>

                <Form.Item
                  name="message"
                  label="Message"
                  rules={[{ required: true, message: 'Please enter your message' }]}
                >
                  <TextArea rows={5} placeholder="Your message" size="large" />
                </Form.Item>

                <Form.Item>
                  <Button 
                    type="primary" 
                    htmlType="submit" 
                    loading={submitting}
                    size="large"
                    style={{ 
                      height: '48px',
                      width: '100%',
                      background: 'linear-gradient(to right, #05cbff, #1e5aff)',
                      border: 'none',
                      borderRadius: '24px'
                    }}
                  >
                    Send Message
                  </Button>
                </Form.Item>
              </Form>
            </div>
          </Col>

          <Col xs={24} md={12}>
            <div style={{ backgroundColor: '#fff', padding: '32px', borderRadius: '6px', boxShadow: '0 2px 8px rgba(0,0,0,0.09)', height: '100%' }}>
              <Title level={3} style={{ marginBottom: '24px' }}>Contact Information</Title>
              <Paragraph style={{ fontSize: '16px', marginBottom: '32px' }}>
                We're here to help with any questions about partnerships, services, or support.
              </Paragraph>

              <div style={{ marginBottom: '24px', display: 'flex', alignItems: 'flex-start' }}>
                <MailOutlined style={{ fontSize: '24px', marginRight: '16px', color: '#1e5aff' }} />
                <div>
                  <Title level={5} style={{ margin: '0 0 8px 0' }}>Email</Title>
                  <Paragraph>info@maomaosocial.com</Paragraph>
                </div>
              </div>

              <div style={{ marginBottom: '24px', display: 'flex', alignItems: 'flex-start' }}>
                <PhoneOutlined style={{ fontSize: '24px', marginRight: '16px', color: '#1e5aff' }} />
                <div>
                  <Title level={5} style={{ margin: '0 0 8px 0' }}>Phone</Title>
                  <Paragraph>+66 123 456 789</Paragraph>
                </div>
              </div>

              <div style={{ display: 'flex', alignItems: 'flex-start' }}>
                <EnvironmentOutlined style={{ fontSize: '24px', marginRight: '16px', color: '#1e5aff' }} />
                <div>
                  <Title level={5} style={{ margin: '0 0 8px 0' }}>Address</Title>
                  <Paragraph>
                    123 Sukhumvit Road<br />
                    Bangkok, 10110<br />
                    Thailand
                  </Paragraph>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default Contact;