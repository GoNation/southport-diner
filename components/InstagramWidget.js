// components/InstagramWidget.js
import React from 'react';
import Script from 'next/script';

const InstagramWidget = ({ widgetId, width = '100%', height = '400' }) => {
  return (
    <section>
      <Script
        src="https://cdn.lightwidget.com/widgets/lightwidget.js"
        strategy="beforeInteractive"
      />
      <iframe
        title="Instagram Widget"
        src={`//lightwidget.com/widgets/${widgetId}.html`}
        scrolling="no"
        allowtransparency="true"
        className="lightwidget-widget"
        style={{ width, height, border: '0', overflow: 'hidden' }}
      ></iframe>
    </section>
  );
};

export default InstagramWidget;
