import React from 'react';
import { Collapse, Tabs, Typography, Divider } from 'antd';
import '../Home/less/antMotionStyle.less';

const { Panel } = Collapse;
const { TabPane } = Tabs;
const { Title, Paragraph } = Typography;

class FAQ extends React.Component {
  render() {
    return (
      <div className="home-page-wrapper" style={{ padding: '64px 24px' }}>
        <div className="home-page" style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div className="title-wrapper" style={{ margin: '0 auto 64px', textAlign: 'center' }}>
            <h1>FAQ & Terms</h1>
            <p>Find answers to common questions and learn about our policies</p>
          </div>

          <Tabs defaultActiveKey="1" tabPosition="top" style={{ minHeight: '400px' }}>
            <TabPane tab="Frequently Asked Questions" key="1">
              <Collapse bordered={false} defaultActiveKey={['1']} expandIconPosition="right">
                <Panel header="What is MaoMao Social Platform?" key="1" style={{ marginBottom: '16px' }}>
                  <Paragraph>
                    MaoMao is Thailand's friendliest social community platform designed specifically for bar and restaurant goers.
                    We connect customers with venues to create memorable experiences and build lasting relationships.
                  </Paragraph>
                </Panel>
                <Panel header="How do I become a partner?" key="2" style={{ marginBottom: '16px' }}>
                  <Paragraph>
                    Becoming a partner is easy! Simply fill out the form on our Contact page, and one of our
                    representatives will reach out within 48 hours to discuss partnership options and get you set up.
                  </Paragraph>
                </Panel>
                <Panel header="What benefits do partners receive?" key="3" style={{ marginBottom: '16px' }}>
                  <Paragraph>
                    Partners gain access to our customer base, advanced analytics, promotional tools, and a dedicated
                    profile page. You'll be able to create custom experiences, run targeted promotions, and build
                    customer loyalty through our platform.
                  </Paragraph>
                </Panel>
                <Panel header="Is there a fee to join as a partner?" key="4" style={{ marginBottom: '16px' }}>
                  <Paragraph>
                    We offer multiple partnership tiers to suit businesses of all sizes. Our basic tier starts
                    with a small monthly subscription fee, while premium tiers offer additional features at competitive rates.
                    Contact us for detailed pricing information.
                  </Paragraph>
                </Panel>
                <Panel header="How do customers use the platform?" key="5" style={{ marginBottom: '16px' }}>
                  <Paragraph>
                    Customers download the MaoMao app to discover venues, connect with other users, save their favorite
                    experiences, and receive personalized recommendations. They can check in at venues, participate in
                    special promotions, and maintain a social profile of their nightlife experiences.
                  </Paragraph>
                </Panel>
                <Panel header="What areas of Thailand do you cover?" key="6" style={{ marginBottom: '16px' }}>
                  <Paragraph>
                    We currently operate in Bangkok, Pattaya, Phuket, Chiang Mai, and Koh Samui, with plans to expand
                    to additional locations throughout Thailand in the coming months.
                  </Paragraph>
                </Panel>
              </Collapse>
            </TabPane>
            <TabPane tab="Terms & Conditions" key="2">
              <div style={{ padding: '16px', backgroundColor: '#fff', borderRadius: '6px', boxShadow: '0 2px 8px rgba(0,0,0,0.09)' }}>
                <Title level={3}>Terms of Service</Title>
                <Paragraph>
                  These Terms of Service ("Terms") govern your access to and use of the MaoMao Social Platform, 
                  including our website, mobile applications, and all offered services (collectively, the "Services"). 
                  By accessing or using our Services, you agree to be bound by these Terms.
                </Paragraph>
                
                <Divider />
                
                <Title level={4}>1. Acceptance of Terms</Title>
                <Paragraph>
                  By accessing or using the MaoMao Social Platform, you agree to be bound by these Terms, 
                  our Privacy Policy, and any additional terms that may apply to specific features of the Services. 
                  If you do not agree to these Terms, you may not access or use the Services.
                </Paragraph>
                
                <Title level={4}>2. Eligibility</Title>
                <Paragraph>
                  You must be at least 18 years old to use our Services. By using our Services, you represent 
                  and warrant that you are at least 18 years old and that your use of the Services does not 
                  violate any applicable laws or regulations.
                </Paragraph>
                
                <Title level={4}>3. Partner Accounts</Title>
                <Paragraph>
                  If you register as a partner, you agree to provide accurate, current, and complete information 
                  about your business. You are responsible for maintaining the confidentiality of your account 
                  credentials and for all activities that occur under your account.
                </Paragraph>
                
                <Title level={4}>4. Content Guidelines</Title>
                <Paragraph>
                  You are responsible for all content that you post or share through our Services. Content must 
                  not infringe upon third-party rights, contain illegal material, or violate our community standards. 
                  We reserve the right to remove content that violates these guidelines.
                </Paragraph>
                
                <Title level={4}>5. Limitation of Liability</Title>
                <Paragraph>
                  To the maximum extent permitted by law, MaoMao Social Platform shall not be liable for any 
                  indirect, incidental, special, consequential, or punitive damages resulting from your use 
                  or inability to use the Services.
                </Paragraph>
                
                <Divider />
                
                <Paragraph type="secondary" style={{ fontSize: '14px' }}>
                  Last updated: May 1, 2025
                </Paragraph>
              </div>
            </TabPane>
          </Tabs>
        </div>
      </div>
    );
  }
}

export default FAQ;