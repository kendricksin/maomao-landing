import React from 'react';
import Image from '../Image.jsx';

// =========== IMAGE PATHS (Previously in ImageExport.js) ===========
// Define all image paths directly here for easier debugging
const VisibilityIcon = '/icons/visibility.svg';
const AISecurityIcon = '/icons/ai-security.svg';
const VenueTypeIcon = '/icons/venue-type.png';
const InstallIcon = '/icons/install.png';
const QRCodeIcon = '/icons/qr-code.svg';
const AICheckIcon = '/icons/ai-check.svg';
const RevenueIcon = '/icons/revenue.svg';
const MaoMaoLogo = '/logo/maomao-logo.png';
const FacebookIcon = '/social/facebook.svg';
const InstagramIcon = '/social/instagram.svg';
const LineIcon = '/social/line.svg';
const NewExperience = '/image/new_exp.png';
const Bennington = '/image/bennington.png';
const LogoDark = '/logo/maomao-logo-dark.svg';

// Add console logging to help debug image paths
console.log('Image paths:');
console.log('MaoMaoLogo:', MaoMaoLogo); // Known working image
console.log('RevenueIcon:', RevenueIcon); // Problem image
console.log('NewExperience:', NewExperience); // Problem image

export const Nav00DataSource = {
  wrapper: { className: 'header0 home-page-wrapper' },
  page: { className: 'home-page' },
  logo: {
    className: 'header0-logo',
    children: MaoMaoLogo,
  },
  Menu: {
    className: 'header0-menu',
    children: [
      {
        name: 'home',
        className: 'header0-item',
        children: {
          href: '/',
          children: [
            {
              children: (
                <span>
                  <p>Home</p>
                </span>
              ),
              name: 'text',
            },
          ],
        },
      },
      {
        name: 'contact',
        className: 'header0-item',
        children: {
          href: '/contact',
          children: [
            {
              children: (
                <span>
                  <p>Contact Us</p>
                </span>
              ),
              name: 'text',
            },
          ],
        },
      },
      {
        name: 'faq',
        className: 'header0-item',
        children: {
          href: '/faq',
          children: [
            {
              children: (
                <span>
                  <p>FAQ</p>
                </span>
              ),
              name: 'text',
            },
          ],
        },
      },
    ],
  },
  mobileMenu: { className: 'header0-mobile-menu' },
};

export const Content110DataSource = {
  OverPack: {
    className: 'home-page-wrapper content11-wrapper',
    playScale: 0.3,
  },
  titleWrapper: {
    className: 'title-wrapper',
    children: [
      {
        name: 'image',
        children: <Image src={LogoDark} alt="Logo" className="title-image" />,
        className: 'title-image',
      },
      {
        name: 'title',
        children: (
          <span>
            <p>MaoMao Social</p>
          </span>
        ),
        className: 'title-h1',
      },
      {
        name: 'content',
        children: (
          <span>
            <p>เปลี่ยนจอทีวีธรรมดาให้เป็นเครื่องสร้างรายได้และประสบการณ์ใหม่</p>
          </span>
        ),
        className: 'title-content',
      },
      {
        name: 'content2',
        children: (
          <span>
            <p>ให้ลูกค้าแชร์รูปและข้อมูลติดต่อขึ้นจอทีวีของร้านผ่าน QR Code</p>
          </span>
        ),
        className: 'title-content',
      },
    ],
  },
  button: {
    className: '',
    children: {
      a: {
        className: 'button',
        href: '/contact',
        children: (
          <span>
            <p>สมัครเป็นพาร์ทเนอร์วันนี้</p>
          </span>
        ),
      },
    },
  },
};

export const Content10DataSource = {
  wrapper: {
    className: 'home-page-wrapper content1-wrapper',
  },
  OverPack: { className: 'home-page content1', playScale: 0.3 },
  imgWrapper: { className: 'content1-img', md: 10, xs: 24 },
  img: {
    children: <Image src={RevenueIcon} alt="Revenue" className="content1-img" />,
  },
  textWrapper: { className: 'content1-text', md: 14, xs: 24 },
  title: {
    className: 'content1-title',
    children: (
      <span>
        <p>สร้างรายได้เสริมโดยไม่ต้องลงทุน</p>
      </span>
    ),
  },
  content: {
    className: 'content1-content',
    children: (
      <span>
        <p>
          แบ่งรายได้ 50/50 จากทุกการแจกวาร์ป ไม่มีค่าใช้จ่ายในการติดตั้ง ไม่มีค่าดูแลระบบ 
          และไม่มีค่าบริการรายเดือน เก็บเฉพาะส่วนแบ่งจากรายได้จริง ร้านค้าสามารถกำหนดราคา
          ได้เองตามความเหมาะสม (แนะนำที่ 99-299 บาท)
        </p>
      </span>
    ),
  },
};

export const Feature20DataSource = {
  wrapper: {
    className: 'home-page-wrapper content2-wrapper',
  },
  OverPack: { className: 'home-page content2', playScale: 0.3 },
  imgWrapper: { className: 'content2-img', md: 10, xs: 24 },
  img: {
    children: <Image src={NewExperience} alt="New Experience" className="content2-img" />,
  },
  textWrapper: { className: 'content2-text', md: 14, xs: 24 },
  title: {
    className: 'content2-title',
    children: (
      <span>
        <p>สร้างสีสันและบรรยากาศที่แปลกใหม่ในร้าน</p>
      </span>
    ),
  },
  content: {
    className: 'content2-content',
    children: (
      <span>
        <p>
          ให้ลูกค้าในร้านของคุณสามารถแชร์รูปภาพและข้อมูลติดต่อขึ้นบนจอทีวีได้อย่างง่ายดาย 
          เพียงแค่สแกน QR Code และจ่ายเงินผ่านระบบ เพิ่มความสนุกและการมีส่วนร่วม 
          สร้างบรรยากาศที่แตกต่างจากร้านอื่น และเพิ่มการมีปฏิสัมพันธ์ระหว่างกลุ่มลูกค้าในร้าน
        </p>
      </span>
    ),
  },
};

export const Feature10DataSource = {
  wrapper: { className: 'home-page-wrapper content1-wrapper' },
  OverPack: { className: 'home-page content1', playScale: 0.3 },
  imgWrapper: { className: 'content1-img', md: 10, xs: 24 },
  img: {
    children: <Image src={RevenueIcon} alt="Revenue" className="content1-img" />,
  },
  textWrapper: { className: 'content1-text', md: 14, xs: 24 },
  title: {
    className: 'content1-title',
    children: (
      <span>
        <p>เทคโนโลยีทันสมัย ใช้งานง่าย</p>
      </span>
    ),
  },
  content: {
    className: 'content1-content',
    children: (
      <span>
        <p>
          ติดตั้งระบบเพียง 5 นาที พร้อมใช้งานทันที ด้วยการเสียบ D6 TV Stick 
          เข้ากับช่อง HDMI ของทีวีและเชื่อมต่อ WiFi ทีมงาน MaoMao ดูแลระบบตลอด 24 ชั่วโมง 
          ลูกค้าใช้งานได้ง่ายผ่านสมาร์ทโฟน ไม่ต้องติดตั้งแอป เพียงสแกน QR Code ที่ปรากฏบนจอ
        </p>
      </span>
    ),
  },
};

export const Feature00DataSource = {
  wrapper: { className: 'home-page-wrapper content0-wrapper' },
  page: { className: 'home-page content0' },
  OverPack: { playScale: 0.3, className: '' },
  titleWrapper: {
    className: 'title-wrapper',
    children: [
      {
        name: 'title',
        children: "ประโยชน์ที่ร้านคุณจะได้รับ", // Simplified to string for proper rendering
        className: 'feature0-title', // Add specific class name
      },
      // Optionally add a description/subtitle if needed
      {
        name: 'content',
        children: "เพิ่มรายได้ สร้างความสนุก และสร้างบรรยากาศที่แปลกใหม่ให้กับร้านของคุณ",
        className: 'feature0-description',
      }
    ],
  },
  childWrapper: {
    className: 'content0-block-wrapper',
    children: [
      {
        name: 'block0',
        className: 'content0-block',
        md: 8,
        xs: 24,
        children: {
          className: 'content0-block-item',
          children: [
            {
              name: 'image',
              className: 'content0-block-icon',
              children: VisibilityIcon,
            },
            {
              name: 'title',
              className: 'content0-block-title',
              children: (
                <span>
                  <p>เพิ่มการมองเห็นของร้าน</p>
                </span>
              ),
            },
            { 
              name: 'content', 
              children: (
                <span>
                  <p>ลูกค้าแชร์ประสบการณ์ในร้านคุณผ่านโซเชียลมีเดีย สร้าง Content Marketing โดยธรรมชาติ</p>
                </span>
              )
            },
          ],
        },
      },
      {
        name: 'block1',
        className: 'content0-block',
        md: 8,
        xs: 24,
        children: {
          className: 'content0-block-item',
          children: [
            {
              name: 'image',
              className: 'content0-block-icon',
              children: AISecurityIcon,
            },
            {
              name: 'title',
              className: 'content0-block-title',
              children: (
                <span>
                  <p>ระบบ AI ตรวจสอบอัตโนมัติ</p>
                </span>
              ),
            },
            {
              name: 'content',
              children: (
                <span>
                  <p>ระบบ AI ตรวจจับและกรองเนื้อหาที่ไม่เหมาะสมโดยอัตโนมัติ ปกป้องภาพลักษณ์ร้านคุณ</p>
                </span>
              )
            },
          ],
        },
      },
      {
        name: 'block2',
        className: 'content0-block',
        md: 8,
        xs: 24,
        children: {
          className: 'content0-block-item',
          children: [
            {
              name: 'image',
              className: 'content0-block-icon',
              children: VenueTypeIcon,
            },
            {
              name: 'title',
              className: 'content0-block-title',
              children: (
                <span>
                  <p>เหมาะกับทุกประเภทร้าน</p>
                </span>
              ),
            },
            {
              name: 'content',
              children: (
                <span>
                  <p>ผับ บาร์ ร้านเหล้า คาราโอเกะ ร้านอาหาร คลับ และสถานบันเทิงยามค่ำคืนทุกประเภท</p>
                </span>
              )
            },
          ],
        },
      },
    ],
  },
};

// How It Works section based on Feature0 grid format
export const HowItWorks0DataSource = {
  wrapper: { className: 'home-page-wrapper content0-wrapper how-it-works-wrapper' },
  page: { className: 'home-page content0' },
  OverPack: { playScale: 0.3, className: '' },
  titleWrapper: {
    className: 'title-wrapper',
    children: [
      {
        name: 'title',
        children: (
          <span>
            <p>MaoMao ทำงานอย่างไร?</p>
          </span>
        ),
      },
    ],
  },
  childWrapper: {
    className: 'content0-block-wrapper',
    children: [
      {
        name: 'block0',
        className: 'content0-block',
        md: 6,
        xs: 24,
        children: {
          className: 'content0-block-item',
          children: [
            {
              name: 'image',
              className: 'content0-block-icon',
              children: InstallIcon,
            },
            {
              name: 'title',
              className: 'content0-block-title',
              children: (
                <span>
                  <p>1. ติดตั้งง่าย</p>
                </span>
              ),
            },
            { 
              name: 'content', 
              children: (
                <span>
                  <p>ทีม MaoMao จัดส่ง TV Stick ให้คุณเสียบเข้ากับช่อง HDMI ของทีวีและเชื่อมต่อ WiFi ใช้เวลาเพียง 5 นาที</p>
                </span>
              )
            },
          ],
        },
      },
      {
        name: 'block1',
        className: 'content0-block',
        md: 6,
        xs: 24,
        children: {
          className: 'content0-block-item',
          children: [
            {
              name: 'image',
              className: 'content0-block-icon',
              children: QRCodeIcon,
            },
            {
              name: 'title',
              className: 'content0-block-title',
              children: (
                <span>
                  <p>2. ลูกค้าสแกน QR Code</p>
                </span>
              ),
            },
            {
              name: 'content',
              children: (
                <span>
                  <p>ลูกค้าสแกน QR Code ที่ปรากฏบนจอทีวี เลือกรูปภาพ ใส่ข้อมูลติดต่อ และชำระเงินผ่านระบบออนไลน์</p>
                </span>
              )
            },
          ],
        },
      },
      {
        name: 'block2',
        className: 'content0-block',
        md: 6,
        xs: 24,
        children: {
          className: 'content0-block-item',
          children: [
            {
              name: 'image',
              className: 'content0-block-icon',
              children: AICheckIcon,
            },
            {
              name: 'title',
              className: 'content0-block-title',
              children: (
                <span>
                  <p>3. AI ตรวจสอบและแสดงผล</p>
                </span>
              ),
            },
            {
              name: 'content',
              children: (
                <span>
                  <p>ระบบ AI ตรวจสอบเนื้อหาที่ไม่เหมาะสมโดยอัตโนมัติ แล้วแสดงรูปและข้อมูลติดต่อบนจอทีวีทันที</p>
                </span>
              )
            },
          ],
        },
      },
      {
        name: 'block3',
        className: 'content0-block',
        md: 6,
        xs: 24,
        children: {
          className: 'content0-block-item',
          children: [
            {
              name: 'image',
              className: 'content0-block-icon',
              children: RevenueIcon,
            },
            {
              name: 'title',
              className: 'content0-block-title',
              children: (
                <span>
                  <p>4. รับรายได้ 50/50</p>
                </span>
              ),
            },
            {
              name: 'content',
              children: (
                <span>
                  <p>ร้านได้รับส่วนแบ่ง 50% จากทุกการแจกวาร์ป โดยโอนเงินให้ทุกสิ้นเดือนโดยอัตโนมัติ</p>
                </span>
              )
            },
          ],
        },
      },
    ],
  },
};

// Case Studies Section using existing components
export const CaseStudies0DataSource = {
  wrapper: { className: 'home-page-wrapper content1-wrapper case-studies-wrapper' },
  OverPack: { className: 'home-page content1', playScale: 0.3 },
  imgWrapper: { className: 'content1-img', md: 18, xs: 32 },
  img: {
    children: <Image src={Bennington} alt="Success" className="content1-img" />,
  },
  textWrapper: { className: 'content1-text', md: 12, xs: 32 },
  title: {
    className: 'content1-title',
    children: (
      <span>
        <p>ร้านค้าที่ประสบความสำเร็จกับ MaoMao</p>
      </span>
    ),
  },
  content: {
    className: 'content1-content',
    children: (
      <span>
        <p>
          <strong>บาร์บีคิว พลาซ่า สาขาทองหล่อ</strong><br />
          รายได้จาก MaoMao เฉลี่ย: 22,000 บาท/เดือน<br />
          จำนวนการแจกวาร์ปเฉลี่ย: 250 ครั้ง/เดือน<br />
          เพิ่มยอดขายเครื่องดื่ม: 15%<br /><br />
          
          <strong>Bourbon Street Bar รัชดา</strong><br />
          รายได้จาก MaoMao เฉลี่ย: 32,000 บาท/เดือน<br />
          จำนวนการแจกวาร์ปเฉลี่ย: 350 ครั้ง/เดือน<br />
          เพิ่มการติดแฮชแท็กร้านบน Social Media: 200%
        </p>
      </span>
    ),
  },
};

export const Pricing00DataSource = {
  wrapper: { className: 'home-page-wrapper pricing0-wrapper' },
  OverPack: { playScale: 0.3, className: 'home-page pricing0' },
  imgWrapper: { className: 'pricing0-img-wrapper', md: 12, xs: 24 },
  img: {
    className: 'pricing0-img',
    name: 'image',
    children:
      'https://gw.alipayobjects.com/mdn/rms_ae7ad9/afts/img/A*OnyWT4Nsxy0AAAAAAAAAAABjARQnAQ',
  },
  childWrapper: {
    className: 'pricing0-text-wrapper',
    md: 12,
    xs: 24,
    children: [
      {
        name: 'title',
        children: 'พร้อมเริ่มต้นใช้งาน MaoMao วันนี้?',
        className: 'pricing0-title',
      },
      {
        name: 'content',
        children:
          'เริ่มต้นใช้งานได้ทันทีโดยไม่มีค่าใช้จ่ายเริ่มต้น ร้านค้าสามารถกำหนดราคาได้เองตามความเหมาะสม แนะนำช่วงราคา 99-299 บาท โดยร้านจะได้รับส่วนแบ่ง 50% จากทุกรายการ ร้านที่ใช้บริการกับเรามีรายได้เสริมเฉลี่ย 20,000-30,000 บาทต่อเดือน',
        className: 'pricing0-content',
      },
      { name: 'pricing', children: 'เริ่มต้นที่ 0 บาท ไม่มีค่าติดตั้ง ไม่มีค่ารายเดือน', className: 'pricing0-pricing' },
      {
        name: 'button',
        children: {
          icon: 'shopping-cart',
          href: '/contact',
          type: 'primary',
          children: 'ติดต่อเรา',
        },
      },
    ],
  },
};

export const Footer21DataSource = {
  wrapper: { className: 'home-page-wrapper footer2-wrapper' },
  OverPack: { className: 'home-page footer2', playScale: 0.05 },
  copyright: {
    className: 'copyright',
    children: [
      {
        name: 'group',
        children: (
          <span>
            <a href="/faq">เงื่อนไขและข้อตกลง</a>
          </span>
        ),
        className: 'copyright-group',
      },
      {
        name: 'image2',
        children:
          'https://gw.alipayobjects.com/zos/rmsportal/fgGmQUfiUfSBfvsQpfOj.svg',
        className: 'copyright-line',
      },
      {
        name: 'copyright',
        children: (
          <span>
            <p>Copyright © MaoMao {new Date().getFullYear()}</p>
          </span>
        ),
        className: 'copyright-text',
      },
    ],
  },
  links: {
    className: 'links',
    children: [
      {
        name: 'facebook',
        href: 'https://facebook.com',
        className: 'links-facebook',
        children: FacebookIcon,
      },
      {
        name: 'instagram',
        href: 'https://instagram.com',
        className: 'links-instagram',
        children: InstagramIcon,
      },
      {
        name: 'line',
        href: 'https://line.me/ti/p/@415hyizr',
        className: 'links-line',
        children: LineIcon,
      },
    ],
  },
};