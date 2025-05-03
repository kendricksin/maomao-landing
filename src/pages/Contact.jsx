import React, { useState } from 'react';
import {
  Form,
  Input,
  Button,
  Typography,
  Row,
  Col,
  Divider,
  message,
  Space,
} from 'antd';
import {
  UserOutlined,
  ShopOutlined,
  MailOutlined,
  PhoneOutlined,
  MessageOutlined,
  CheckOutlined,
} from '@ant-design/icons';
import '../styles/contact.less';

const { Title, Paragraph } = Typography;
const { TextArea } = Input;

const Contact = () => {
  const [form] = Form.useForm();
  const [submitting, setSubmitting] = useState(false);

  const onFinish = (values) => {
    console.log('Form values:', values);
    setSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setSubmitting(false);
      message.success('ส่งข้อความสำเร็จ! เราจะติดต่อกลับโดยเร็วที่สุด');
      form.resetFields();
    }, 1500);
  };

  return (
    <div className="contact-wrapper">
      {/* Header Section */}
      <div className="contact-header">
        <Title level={2}>ติดต่อเรา</Title>
        <Paragraph>เริ่มใช้งาน MaoMao และสร้างรายได้เสริมให้ร้านของคุณวันนี้</Paragraph>
      </div>
      
      <Row gutter={[24, 24]}>
        {/* Form Section */}
        <Col xs={24} lg={16}>
          <div className="form-container">
            <div className="form-header">
              <Title level={4}>ข้อมูลร้านค้าของคุณ</Title>
            </div>
            
            <Form
              form={form}
              layout="horizontal"
              labelCol={{ xs: 24, sm: 6 }}
              wrapperCol={{ xs: 24, sm: 18 }}
              onFinish={onFinish}
              requiredMark={false}
              className="contact-form"
            >
              <Form.Item
                name="name"
                label="ชื่อ"
                rules={[{ required: true, message: 'กรุณากรอกชื่อของคุณ' }]}
              >
                <Input 
                  prefix={<UserOutlined />} 
                  placeholder="ชื่อของคุณ" 
                />
              </Form.Item>

              <Form.Item
                name="shopName"
                label="ชื่อร้าน"
                rules={[{ required: true, message: 'กรุณากรอกชื่อร้านของคุณ' }]}
              >
                <Input 
                  prefix={<ShopOutlined />} 
                  placeholder="ชื่อร้านของคุณ" 
                />
              </Form.Item>

              <Form.Item
                name="email"
                label="อีเมล"
                rules={[
                  { required: true, message: 'กรุณากรอกอีเมลของคุณ' },
                  { type: 'email', message: 'กรุณากรอกอีเมลที่ถูกต้อง' }
                ]}
              >
                <Input 
                  prefix={<MailOutlined />} 
                  placeholder="อีเมลของคุณ" 
                />
              </Form.Item>

              <Form.Item
                name="phone"
                label="เบอร์โทรศัพท์"
                rules={[{ required: true, message: 'กรุณากรอกเบอร์โทรศัพท์' }]}
              >
                <Input 
                  prefix={<PhoneOutlined />} 
                  placeholder="เบอร์โทรศัพท์" 
                />
              </Form.Item>

              <Form.Item
                name="lineID"
                label="Line ID"
                extra="(ถ้ามี)"
              >
                <Input placeholder="Line ID" />
              </Form.Item>

              <Form.Item
                name="message"
                label="ข้อความ"
                extra="(optional)"
              >
                <TextArea 
                  rows={4} 
                  placeholder="ข้อความหรือคำถามเพิ่มเติม" 
                />
              </Form.Item>

              <Form.Item wrapperCol={{ xs: 24, sm: { span: 18, offset: 6 } }}>
                <Button 
                  type="primary" 
                  htmlType="submit" 
                  loading={submitting}
                  className="submit-button"
                >
                  ส่งข้อความ
                </Button>
              </Form.Item>
            </Form>
          </div>
        </Col>
        
        {/* Promotion Section */}
        <Col xs={24} lg={8}>
          <div className="promo-container">
            <div className="promo-header">
              <div className="promo-tag">โปรโมชั่นพิเศษ</div>
              <Title level={4}>สมัครวันนี้รับสิทธิพิเศษ!</Title>
            </div>
            
            <div className="promo-list">
              <div className="promo-item">
                <CheckOutlined className="promo-icon" />
                <div>รับส่วนแบ่งรายได้ <span className="highlight">60%</span> ในเดือนแรก (ปกติ 50%)</div>
              </div>
              
              <div className="promo-item">
                <CheckOutlined className="promo-icon" />
                <div>ฟรี! แผ่นพับ QR Code สำหรับวางบนโต๊ะ จำนวน 20 ชุด</div>
              </div>
              
              <div className="promo-item">
                <CheckOutlined className="promo-icon" />
                <div>ฟรี! โปรโมชันส่วนลด 20% สำหรับลูกค้า 50 คนแรก</div>
              </div>
            </div>
            
            <Divider className="promo-divider" />
            
            <div className="promo-note">
              *โปรโมชั่นมีระยะเวลาจำกัด เงื่อนไขเป็นไปตามที่บริษัทกำหนด
            </div>
            
            <Divider />
            
            {/* Contact Info */}
            <div className="contact-info">
              <Title level={4}>ข้อมูลติดต่อ</Title>
              <Paragraph>
                ติดต่อทีมงาน MaoMao เพื่อสอบถามข้อมูลเพิ่มเติม
              </Paragraph>
              
              <Space direction="vertical" size="middle" className="info-list">
                <div className="info-item">
                  <MailOutlined className="info-icon" />
                  <div>
                    <div className="info-label">อีเมล</div>
                    <div>maomaolife.team@gmail.com</div>
                  </div>
                </div>
                
                <div className="info-item">
                  <PhoneOutlined className="info-icon" />
                  <div>
                    <div className="info-label">โทรศัพท์</div>
                    <div>xxx-xxx-xxxx</div>
                  </div>
                </div>
                
                <div className="info-item">
                  <MessageOutlined className="info-icon" />
                  <div>
                    <div className="info-label">Line Official</div>
                    <div>@415hyizr (MaoMao Support)</div>
                  </div>
                </div>
              </Space>
            </div>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default Contact;