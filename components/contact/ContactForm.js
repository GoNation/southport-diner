import React from 'react';
import Button from '../ui/common/Button';

const ContactForm = ({ privateEvents = false }) => {
  const inputClassList =
    'bg-transparent border-b-2 mb-2 w-full text-white border-white border-2 p-2 lg:w-full';
  const labelClassList = 'mb-2 text-white';

  return (
    <form
      className="md:px-4 w-full"
      name={privateEvents ? 'private-events' : 'contact'}
      method="POST"
      data-netlify="true"
    >
      <input type="hidden" name="form-name" value="contact" />

      <div className="mb-2 flex flex-wrap">
        <div className="w-full lg:w-1/2 pr-2">
          <p className={labelClassList}>
            <label htmlFor="name">Name</label>
          </p>
          <input className={inputClassList} type="text" id="name" name="name" />
        </div>

        <div className="w-full lg:w-1/2 pl-2">
          <p className={labelClassList}>
            <label htmlFor="email">Email</label>
          </p>
          <input
            className={inputClassList}
            type="email"
            id="email"
            name="email"
          />
        </div>

        <div className="w-full lg:w-1/2 pr-2">
          <p className={labelClassList}>
            <label htmlFor="phone">Phone Number</label>
          </p>
          <input
            className={inputClassList}
            type="text"
            id="phone"
            name="phone"
          />
        </div>

        <div className="w-full lg:w-1/2 pl-2">
          <p className={labelClassList}>
            <label htmlFor="stylist">Stylist</label>
          </p>
          <input
            className={inputClassList}
            type="text"
            id="stylist"
            name="stylist"
          />
        </div>

        <div className="w-full lg:w-1/2 pr-2">
          <p className={labelClassList}>
            <label htmlFor="date">Date</label>
          </p>
          <input className={inputClassList} type="date" id="date" name="date" />
        </div>

        <div className="w-full lg:w-1/2 pl-2">
          <p className={labelClassList}>
            <label htmlFor="time">Time</label>
          </p>
          <input className={inputClassList} type="time" id="time" name="time" />
        </div>

        <div className="w-full lg:w-1/2 pr-2">
          <p className={labelClassList}>
            <label htmlFor="service">Service</label>
          </p>
          <input
            className={inputClassList}
            type="text"
            id="service"
            name="service"
          />
        </div>

        <div className="w-full">
          <p className={labelClassList}>
            <label htmlFor="message">Message</label>
          </p>
          <textarea
            className={inputClassList}
            id="message"
            name="message"
            cols="30"
            rows="10"
          />
        </div>
      </div>

      <div>
        <Button fill>Submit</Button>
      </div>
    </form>
  );
};

export default ContactForm;
