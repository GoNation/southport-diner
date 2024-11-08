import React from 'react';

const MailChimpWidget = () => {
  return (
    <div id="mc_embed_shell">
      {/* Add the CSS link here (you can use Next.js Head component to add it in the <head>) */}
      <link
        href="//cdn-images.mailchimp.com/embedcode/classic-061523.css"
        rel="stylesheet"
        type="text/css"
      />
      {/* Add the JavaScript script */}
      <script
        type="text/javascript"
        src="//s3.amazonaws.com/downloads.mailchimp.com/js/mc-validate.js"
      ></script>

      <div id="mc_embed_signup">
        <form
          action="https://theridgesstamford.us21.list-manage.com/subscribe/post?u=9a537dc914b887b4882e2d6d7&amp;id=e0448a0dee&amp;f_id=00a463e1f0"
          method="post"
          id="mc-embedded-subscribe-form"
          name="mc-embedded-subscribe-form"
          className="validate"
          target="_blank"
        >
          <div id="mc_embed_signup_scroll">
            <h2>
              Stay tuned for updates Sign up for our newsletter &amp; get
              exclusive offers and invites!
            </h2>
            <div className="indicates-required">
              <span className="asterisk">*</span> indicates required
            </div>
            <div className="mc-field-group">
              <label htmlFor="mce-EMAIL">
                Email Address <span className="asterisk">*</span>
              </label>
              <input
                type="email"
                name="EMAIL"
                className="required email"
                id="mce-EMAIL"
                required=""
                value=""
              />
            </div>
            <div id="mce-responses" className="clear foot">
              <div
                className="response"
                id="mce-error-response"
                style={{ display: 'none' }}
              ></div>
              <div
                className="response"
                id="mce-success-response"
                style={{ display: 'none' }}
              ></div>
            </div>
            <div
              aria-hidden="true"
              style={{ position: 'absolute', left: '-5000px' }}
            >
              {/* real people should not fill this in and expect good things - do not remove this or risk form bot signups */}
              <input
                type="text"
                name="b_9a537dc914b887b4882e2d6d7_e0448a0dee"
                tabIndex="-1"
                value=""
              />
            </div>
            <div className="optionalParent">
              <div className="clear foot">
                <input
                  type="submit"
                  name="subscribe"
                  id="mc-embedded-subscribe"
                  className="button"
                  value="Subscribe"
                />
                <p className="brandingLogo" style={{ margin: '0px auto' }}>
                  <a
                    href="http://eepurl.com/iwowhs"
                    title="Mailchimp - email marketing made easy and fun"
                  >
                    <img
                      src="https://eep.io/mc-cdn-images/template_images/branding_logo_text_dark_dtp.svg"
                      alt="referral badge"
                    />
                  </a>
                </p>
              </div>
            </div>
          </div>
        </form>
      </div>
      {/* Add the script tag here (you can use Next.js Head component to add it in the <head>) */}
      {/* ... Script tag ... */}
    </div>
  );
};

export default MailChimpWidget;
