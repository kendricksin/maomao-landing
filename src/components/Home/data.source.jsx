import React from 'react';

export const Nav00DataSource = {
  wrapper: { className: 'header0 home-page-wrapper' },
  page: { className: 'home-page' },
  logo: {
    className: 'header0-logo',
    children: 'https://os.alipayobjects.com/rmsportal/mlcYmsRilwraoAe.svg',
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
        children:
          'https://gw.alipayobjects.com/zos/rmsportal/PiqyziYmvbgAudYfhuBr.svg',
        className: 'title-image',
      },
      {
        name: 'title',
        children: (
          <span>
            <p>MaoMao Social Platform</p>
          </span>
        ),
        className: 'title-h1',
      },
      {
        name: 'content',
        children: (
          <span>
            <p>Thailand's Friendliest Social Community for Drinkers</p>
          </span>
        ),
        className: 'title-content',
      },
      {
        name: 'content2',
        children: (
          <span>
            <p>Enjoy a safe &amp; exciting nightlife with friends</p>
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
        href: '#',
        children: (
          <span>
            <p>Join as partner</p>
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
    children: 'https://zos.alipayobjects.com/rmsportal/nLzbeGQLPyBJoli.png',
  },
  textWrapper: { className: 'content1-text', md: 14, xs: 24 },
  title: {
    className: 'content1-title',
    children: (
      <span>
        <p>Community of Drinkers</p>
      </span>
    ),
  },
  content: {
    className: 'content1-content',
    children: (
      <span>
        <p>
          Manage content descriptions for your bar or restaurant, let customers
          know what unique experiences you offer. Reach out to customers that
          you want to keep, at a personal level.
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
    children: 'https://zos.alipayobjects.com/rmsportal/tvQTfCupGUFKSfQ.png',
  },
  textWrapper: { className: 'content2-text', md: 14, xs: 24 },
  title: {
    className: 'content2-title',
    children: (
      <span>
        <p>In-store Experiences</p>
      </span>
    ),
  },
  content: {
    className: 'content2-content',
    children: (
      <span>
        <p>
          Allow your bar goers to interact before, during, and after visiting
          your bar or restaurant. Help customers to create and retain memorable
          experiences captured across many nights.&nbsp;
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
    children: 'https://zos.alipayobjects.com/rmsportal/nLzbeGQLPyBJoli.png',
  },
  textWrapper: { className: 'content1-text', md: 14, xs: 24 },
  title: {
    className: 'content1-title',
    children: (
      <span>
        <p>Additional Revenue</p>
      </span>
    ),
  },
  content: {
    className: 'content1-content',
    children: (
      <span>
        <p>
          Create new revenue streams through targeted promotions, loyalty programs
          and personalized offerings. Increase customer retention and boost
          average spending per visit.
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
        children: (
          <span>
            <p>Partner Offering</p>
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
        md: 8,
        xs: 24,
        children: {
          className: 'content0-block-item',
          children: [
            {
              name: 'image',
              className: 'content0-block-icon',
              children:
                'https://zos.alipayobjects.com/rmsportal/WBnVOjtIlGWbzyQivuyq.png',
            },
            {
              name: 'title',
              className: 'content0-block-title',
              children: (
                <span>
                  <p>Billing Service</p>
                </span>
              ),
            },
            { 
              name: 'content', 
              children: (
                <span>
                  <p>Simple payment processing and invoicing for all partners</p>
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
              children:
                'https://zos.alipayobjects.com/rmsportal/YPMsLQuCEXtuEkmXTTdk.png',
            },
            {
              name: 'title',
              className: 'content0-block-title',
              children: (
                <span>
                  <p>Historical Data</p>
                </span>
              ),
            },
            {
              name: 'content',
              children: (
                <span>
                  <p>Detailed analytics and insights about your customers</p>
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
              children:
                'https://zos.alipayobjects.com/rmsportal/EkXWVvAaFJKCzhMmQYiX.png',
            },
            {
              name: 'title',
              className: 'content0-block-title',
              children: (
                <span>
                  <p>Community Marketing</p>
                </span>
              ),
            },
            {
              name: 'content',
              children: (
                <span>
                  <p>Targeted promotions to reach your ideal customers</p>
                </span>
              )
            },
          ],
        },
      },
    ],
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
        children: 'Ready to Join MaoMao?',
        className: 'pricing0-title',
      },
      {
        name: 'content',
        children:
          'Get started today and join the growing community of venues on MaoMao Social Platform. Our partners typically see a 15-20% increase in customer retention and a significant boost in repeat visits.',
        className: 'pricing0-content',
      },
      { name: 'pricing', children: 'Starting at ฿1,900/month', className: 'pricing0-pricing' },
      {
        name: 'button',
        children: {
          icon: 'shopping-cart',
          href: '/contact',
          type: 'primary',
          children: 'Contact Us',
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
            <a href="/faq">Terms & Conditions</a>
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
        children:
          'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJmZWF0aGVyIGZlYXRoZXItZmFjZWJvb2siPjxwYXRoIGQ9Ik0xOCAyaC0zYTUgNSAwIDAgMC01IDV2M0g3djRoM3Y4aDRWMTRoM2wxLTRoLTR2LTNhMSAxIDAgMCAxIDEtMWgzeiI+PC9wYXRoPjwvc3ZnPg==',
      },
      {
        name: 'instagram',
        href: 'https://instagram.com',
        className: 'links-instagram',
        children:
          'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJmZWF0aGVyIGZlYXRoZXItaW5zdGFncmFtIj48cmVjdCB4PSIyIiB5PSIyIiB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHJ4PSI1IiByeT0iNSI+PC9yZWN0PjxwYXRoIGQ9Ik0xNiAxMS4zN0ExIDEgMCAwIDEgMTcgMTJ2NCAxYTEgMSAwIDAgMS0xIDFINy45YTEgMSAwIDAgMS0xLTF2LTFIOHYtNmExIDEgMCAwIDEgMS0uNjNsMi0uMzdhMSAxIDAgMCAxIDEuMTUuNTFsLjI1LjVhMSAxIDAgMCAwIC44OS41aDEuNzVhMSAxIDAgMCAxIC45Ni42OEwxNiAxMS4zN3oiPjwvcGF0aD48bGluZSB4MT0iMTcuNSIgeTE9IjYuNSIgeDI9IjE3LjUxIiB5Mj0iNi41Ij48L2xpbmU+PC9zdmc+',
      },
      {
        name: 'twitter',
        href: 'https://twitter.com',
        className: 'links-twitter',
        children:
          'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJmZWF0aGVyIGZlYXRoZXItdHdpdHRlciI+PHBhdGggZD0iTTIzIDNhMTAuOSAxMC45IDAgMCAxLTMuMTQgMS41MyA0LjQ4IDQuNDggMCAwIDAtNy44NiAzdjFBMTAuNjYgMTAuNjYgMCAwIDEgMyA0cy00IDkgNSAxM2ExMS42NCAxMS42NCAwIDAgMS03IDJjOSA1IDIwIDAgMjAtMTEuNWE0LjUgNC41IDAgMCAwLS4wOC0uODNBNy43MiA3LjcyIDAgMCAwIDIzIDN6Ij48L3BhdGg+PC9zdmc+',
      },
    ],
  },
};