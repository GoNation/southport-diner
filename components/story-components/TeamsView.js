import React from 'react';
import Image from 'next/image';
import extractStory from 'helpers/extractStory';
import buildAvatar from 'helpers/general/buildAvatar';
import Body from 'components/ui/Body';

const TeamsView = ({ stories = [], business }) => {
  return (
    <div className="container mx-auto p-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {stories.map((member, idx) => {
          const story = extractStory(member);
          return (
            <div
              key={idx}
              className="rounded-lg overflow-hidden shadow-md bg-background hover:shadow-lg transition-shadow duration-300"
            >
              <div className="relative h-56 md:h-64">
                <Image
                  className="object-cover transition-transform duration-500 ease-in-out transform scale-100 hover:scale-110"
                  src={
                    story?.images?.length
                      ? story.images[0]
                      : buildAvatar(business)
                  }
                  alt={member.title}
                  layout="fill"
                />
              </div>
              <div className="p-4">
                <h3 className="text-xl font-bold mb-2 text-dark">
                  {member.title}
                </h3>
                <h4 className="text-md text-primary mb-4">{member.subtitle}</h4>
                <Body body={story.body} />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default TeamsView;
