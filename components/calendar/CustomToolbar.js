import React from 'react';
import { Flex, IconButton, Heading } from '@chakra-ui/react';
import { Navigate } from 'react-big-calendar';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import dayjs from 'dayjs';

const CustomToolbar = ({ onNavigate, date }) => {
  const navigate = action => {
    onNavigate(action);
  };

  const label = () => {
    const currentDate = dayjs(date);
    return `${currentDate.format('MMMM')} ${currentDate.format('YYYY')}`;
  };

  return (
    <Flex justifyContent="space-between" alignItems="center" mb={4} w="100%">
      <IconButton
        aria-label="Previous Month"
        icon={<FiChevronLeft />}
        onClick={() => navigate(Navigate.PREVIOUS)}
      />
      <Heading as="h3" size="md">
        {label()}
      </Heading>
      <IconButton
        aria-label="Next Month"
        icon={<FiChevronRight />}
        onClick={() => navigate(Navigate.NEXT)}
      />
    </Flex>
  );
};

export default CustomToolbar;
