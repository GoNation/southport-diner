import React from 'react';
import { Card } from '@chakra-ui/react';

const CustomSelect = ({ input, field }) => {
  const { value, onChange } = input;
  const { options } = field;

  return (
    <div>
      {options.map((option, index) => (
        <Card
          key={index}
          isSelected={value === option}
          onClick={() => onChange(option)}
        >
          {option}
        </Card>
      ))}
    </div>
  );
};

export const pageComponentFields = [
  // ... other fields ...
  {
    type: 'string',
    name: 'componentName',
    label: 'Component Name',
    description: 'The name of the component.',
    component: 'custom_select',
    options: ['SideBySideImage'],
  },
  // ... other fields ...
];

export function MyPage({ cms }) {
  // ... other code ...

  React.useEffect(() => {
    cms.plugins.add({
      __type: 'content-creator',
      name: 'Custom Select',
      component: CustomSelect,
    });
  }, []);

  // ... other code ...
}
