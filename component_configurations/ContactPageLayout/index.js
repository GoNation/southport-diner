export const contactPageLayoutConfig = {
  formName: 'contact',
  title: 'Get In Touch',
  desc: ``,
  hideMap: false,
  fields: [
    { type: 'text', name: 'name', placeholder: 'Name' },
    { type: 'email', name: 'email', placeholder: 'Email' },
    { type: 'tel', name: 'phone', placeholder: 'Phone' },
    { type: 'textarea', name: 'message', placeholder: 'Your Message' },
  ],
};

export const privateEventsLayoutConfig = {
  formName: 'priate-events',
  title: 'Private Events Form',
  desc: `Please contact JC Vallejo at (203) 624-0507 or jcvallejo@zincnewhaven.com or complete the inquiry form below to reserve a room for your reception, party, or event.`,
  hideMap: true,
  fields: [
    { type: 'text', name: 'name', placeholder: 'Name' },
    { type: 'email', name: 'email', placeholder: 'Email' },
    { type: 'tel', name: 'phone', placeholder: 'Phone' },
    {
      type: 'select',
      name: 'eventStyle',
      placeholder: 'Select your desired event:',
      options: [
        'On-premise event',
        'drop-off catering',
        'pick-up catering',
        'full-service catering',
      ],
    },
    {
      type: 'textarea',
      name: 'eventDetails',
      placeholder: 'Your event details',
    },
    { type: 'text', name: 'natureOfEvent', placeholder: 'Nature of event' },
    { type: 'date', name: 'eventDate', placeholder: 'Event date' },
    { type: 'time', name: 'startTime', placeholder: 'Start time' },
    { type: 'time', name: 'endTime', placeholder: 'End time' },
    { type: 'number', name: 'numberOfPeople', placeholder: 'Number of people' },
    {
      type: 'textarea',
      name: 'additionalInformation',
      placeholder:
        'Is there any additional information you would like to add? Will you need A/V?',
    },
    {
      type: 'select',
      name: 'referralSource',
      placeholder: 'How did you hear about us?',
      options: [
        'eventup',
        'instagram',
        'facebook',
        'venues by tripleseat',
        'search engine',
        'email',
        'other',
      ],
    },
  ],
};
