const customViewports = {
  mobile: {
    name: 'Mobile >=360px',
    styles: {
      width: '360px',
      height: '2500px',
    },
  },
  smallTablet: {
    name: 'Small tablet >=600px',
    styles: {
      width: '600px',
      height: '2500px',
    },
  },
  tablet: {
    name: 'Tablet >=800px',
    styles: {
      width: '800px',
      height: '2500px',
    },
  },
  smallDesktop: {
    name: 'Small desktop >=1024px',
    styles: {
      width: '1024px',
      height: '2500px',
    },
  },
  desktop: {
    name: 'Desktop >=1200px',
    styles: {
      width: '1200px',
      height: '2500px',
    },
  }
};

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  viewport: {
    viewports: { ...customViewports }
  }
}

import "./reset.css";