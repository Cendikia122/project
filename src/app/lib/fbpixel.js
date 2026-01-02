export const FB_PIXEL_ID = '1396576578921257';

export const pageview = (url) => {
  if (typeof window !== 'undefined' && window.fbq) {
    window.fbq('track', 'PageView');
  }
};

export const event = (name, params = {}) => {
  if (typeof window !== 'undefined' && window.fbq) {
    window.fbq('track', name, params);
  }
};
