// TODO all components that aren't comiong from the library must do so.
import findStoryByName from 'helpers/findStoryByName';
import Menu from './menu/Menu';
import Masonry from './gallery/Masonry';
import CustomForm from './ui/common/CustomForm';
import SimpleGrid from './story-components/SimpleGrid';
import ContactPageLayout from './ui/ContactPageLayout';
import InstagramWidget from './InstagramWidget';
import Events from './events/Events';
import AlbumGallery from './AlbumGallery';
import HeroComponent from './HeroComponent';
import findMultipleStoriesByNames from 'helpers/findMultipleStoriesByNames';
import ShoutCard from './shout/ShoutCard';
import findPoweredImage from 'helpers/general/findPoweredImage';
import { dataFactory } from 'helpers/dataFactory';

import {
  SideBySideImage,
  ContentBanner,
  FAQSection,
  ButtonRow,
  Parallax,
  TitleWithBorder,
  ListCards,
  CustomScript,
  ImageComponent,
  Testimonials,
  CardComponent,
  ImageGrid,
  PopUp,
  ImageBoxes,
  HeroShout,
} from 'gonation-components';
import { convertStringToArray } from 'helpers/convertStringToArray';
import { convertMenuDataToTestimonials } from 'helpers';
const findEventById = (id, events) => {
  if (!events) return null;
  const allEvents = events.recurringEventsData.events.concat(
    events.specialEventsData.events
  );
  const foundItems = allEvents.find(event => event.id === id);
  return foundItems;
};

// componentConfig is the object with type, storyName, storyTags etc. commonData is the actual GN data
const componentFactory = (componentConfig, commonData, siteConfig) => {
  const {
    identifier,
    storyName,
    config = {},
    variation,
    sideBySideVariation,
    contentVariation,
    imageVariation,
    withExtendedTopTitle,
  } = componentConfig || {};

  const { shout } = commonData.shoutData;
  const image = shout?.image;
  const ctas = shout?.ctas || {};
  const isDefaultImage = image?.isDefault;
  const cloudinaryId = isDefaultImage
    ? business.avatar.image.cloudinaryId
    : image?.image?.cloudinaryId;
  const shoutImage = `${commonData?.shoutData.imageBaseUrl}/${cloudinaryId}`;
  switch (componentConfig.type || componentConfig.componentName) {
    case 'Hero':
      return (
        <>
          <HeroComponent
            story={findStoryByName(
              identifier || componentConfig.storyName,
              commonData.storiesData.general,
              true
            )}
            event={
              componentConfig.eventId
                ? findEventById(componentConfig.id, commonData.eventsData)
                : null
            }
            business={commonData.aboutData}
            shout={commonData.shoutData?.shout}
            config={componentConfig.config}
          />
        </>
      );
    case 'SideBySideImage':
      // TODO instead of 'story' it should be identifier and or better props instead of story-specific.
      return (
        <SideBySideImage
          story={findStoryByName(
            identifier || storyName,
            commonData.storiesData.general,
            true
          )}
          config={
            config || {
              reversed: true,
              ignoreQuery: true,
            }
          }
          sideBySideVariation={
            variation || config.sideBySideVariation || sideBySideVariation
          }
          contentVariation={config.contentVariation || contentVariation}
          imageVariation={config.imageVariation || imageVariation}
          withExtendedTopTitle={
            config.withExtendedTopTitle || withExtendedTopTitle
          }
        />
      );
    case 'Press':
      return (
        <>
          <SimpleGrid
            stories={commonData.storiesData.press}
            business={commonData.aboutData}
          />
        </>
      );
    case 'Team':
      return (
        <SimpleGrid
          stories={commonData.storiesData.team}
          business={commonData.aboutData}
        />
      );
    case 'Menu':
      return (
        <>
          <Menu
            menuData={commonData.menuInventoryData[0]}
            mode={commonData?.menuInventoryData[0]?.mode}
            config={componentConfig.config}
            business={commonData.aboutData}
          />
        </>
      );
    case 'Gallery':
      return (
        <>
          <Masonry
            data={commonData.galleryData.filter(
              album =>
                !siteConfig?.filteredOutGalleryImages.includes(album.name)
            )}
            config={{
              configName: 'galleryConfig',
              ...componentConfig.config,
            }}
          />
        </>
      );
    case 'CustomForm':
      return (
        <>
          <CustomForm
            fields={componentConfig?.config?.fields}
            config={componentConfig?.config}
          />
        </>
      );
    case 'ContactPageLayout':
      return (
        <>
          <ContactPageLayout
            fields={componentConfig.config.fields}
            aboutData={commonData.aboutData}
            iframe={siteConfig?.iframeURL}
            config={componentConfig.config}
            {...componentConfig.config}
          />
        </>
      );
    case 'Instagram':
      return (
        <>
          <InstagramWidget {...componentConfig.config} />
        </>
      );
    case 'Events':
      return (
        <>
          <Events
            businessData={commonData.aboutData}
            singleEvents={commonData?.eventsData?.specialEventsData?.events}
            recurringEvents={
              commonData?.eventsData?.recurringEventsData?.events
            }
          />
        </>
      );
    case 'AlbumGallery':
      return (
        <AlbumGallery
          galleryData={commonData.galleryData}
          config={{
            configName: 'galleryConfig',
            ...componentConfig.config,
          }}
          filteredOutAlbums={siteConfig?.filteredOutGalleryImages}
        />
      );
    case 'ShoutCard':
      // TODO rebuild this in the library
      return (
        <>
          <ShoutCard
            data={commonData.shoutData}
            config={componentConfig?.config}
            bg={
              componentConfig?.config?.bg
                ? findPoweredImage(
                    componentConfig.config.bg,
                    commonData.poweredImagesData
                  )
                : null
            }
          />
        </>
      );
    case 'ContentBanner':
      return (
        <>
          <ContentBanner
            story={findStoryByName(
              identifier || storyName,
              commonData.storiesData.general,
              true
            )}
            variation={config?.variation || variation}
            contentVariation={
              config?.contentVariation || componentConfig.contentVariation
            }
            config={config}
            {...componentConfig}
          />
        </>
      );
    case 'TitleWithBorder':
      // TODO this data should be coming from the componentConfig
      // ! maybe we'll delete this not sure yet
      const titleWithBorderTitle = findStoryByName(
        identifier || storyName,
        commonData.storiesData.general,
        true
      );
      return (
        <TitleWithBorder
          title={titleWithBorderTitle?.title || 'Default Title'}
          variant={config.variant || null}
        />
      );

    case 'FAQSection':
      // TODO extract this into its own fxn
      const transformMenuDataToFAQs = () => {
        const menuData = commonData.menuInventoryData[1];
        return menuData?.inventory.map(itm => {
          return {
            question: itm.item.name,
            answer: itm.item.desc,
          };
        });
      };
      transformMenuDataToFAQs();
      return (
        <FAQSection variant={'default'} faqs={transformMenuDataToFAQs()} />
      );
    case 'CustomScript':
      return (
        <div id="reservations">
          <CustomScript
            src={componentConfig?.config?.src}
            data={componentConfig?.config?.data}
          />
        </div>
      );
    case 'ButtonRow':
      // TODO fill in with actual data
      return (
        <ButtonRow
          variant="default"
          links={{
            test: 'https://www.google.com',
            another: 'https://www.google.com',
          }}
        />
      );
    case 'ImageComponent':
      // TODO fill in with actual data
      // ! images takes an array of objects of keys 'cloudinaryId': string. it also takes alt and size but defaults to 800 and "small business website image."
      return <ImageComponent img="" variation="default" images={[]} />;
    case 'Testimonials':
      // TODO fill in with actual data
      return (
        <Testimonials
          title="Testimonials"
          testimonials={[
            { testimonial: 'Some review here', author: 'Eric S' },
            { testimonial: 'Another review here', author: 'John D' },
          ]}
          carouselConfiguration={{
            showArrows: false,
            showStatus: false,
          }}
        />
      );
    case 'Card':
      // TODO fill in with actual data,
      // ! also this takes a lot more optional props i will need to account for
      <CardComponent
        title="Sample Title"
        links={{ link1: 'https://example.com' }}
      />;
    case 'ButtonRow':
      // TODO fill in with actual data
      return (
        <ButtonRow
          variant="default"
          links={{
            test: 'https://www.google.com',
            another: 'https://www.google.com',
          }}
        />
      );
    case 'Parallax':
      const story = findStoryByName(
        identifier || componentConfig.data.storyName,
        commonData.storiesData.general,
        true
      );
      return (
        <>
          <Parallax
            backgroundImage={story.images[0]}
            content={story}
            variation={config?.variation || variation}
            {...componentConfig}
          />
        </>
      );
    case 'ListCards':
      // TODO extract this into its own fxn
      const cards = dataFactory(
        componentConfig?.config?.data || data,
        commonData.storiesData.general
      );
      return (
        <>
          <ListCards cards={cards} variant={componentConfig.variant} />
        </>
      );
    case 'PopUp':
      return (
        <>
          <PopUp
            variant="horizontal"
            alwaysDisplay={false}
            data={{
              title: shout?.title || 'Recent Shout',
              subtitle: null,
              message: shout.text,
              images: [shoutImage],
              buttons: Object.entries(ctas).map(([key, value]) => {
                return {
                  label: key,
                  url: value,
                };
              }),
            }}
          />
        </>
      );
    case 'ImageGrid':
      const imageGridData = findStoryByName(
        identifier || componentConfig.storyName,
        commonData.storiesData.general,
        true
      );
      return (
        <ImageGrid
          variant={config?.variant || componentConfig.variant}
          images={imageGridData?.images.map(image => {
            return {
              url: image,
              title: imageGridData.title,
            };
          })}
        />
      );
    case 'Testimonials':
      const testimonials = convertMenuDataToTestimonials(
        commonData?.menuInventoryData[0].inventory[2],
        componentConfig.identifier
      );

      return (
        <>
          <Testimonials
            title={componentConfig?.title || 'Testimonials'}
            testimonials={testimonials}
            {...componentConfig}
          />
        </>
      );
    case 'ImageBoxes':
      const imageBoxesData = findMultipleStoriesByNames(
        identifier || componentConfig.storyName,
        commonData.storiesData.general,
        true
      );
      return (
        <ImageBoxes
          variant={config?.variant || componentConfig.variant}
          data={imageBoxesData.map(data => {
            return {
              imageUrl: data.images[0],
              title: data.title || data?.linkTitle,
              description: data.title,
              href: data?.linkAddress,
            };
          })}
        />
      );
    case 'HeroShout':
      const heroShoutStory = findStoryByName(
        identifier,
        commonData.storiesData.general,
        true
      );

      const heroShoutData = {
        title: heroShoutStory?.title,
        subtitle: heroShoutStory?.subtitle,
        body: heroShoutStory?.body,
        ctaName: heroShoutStory?.linkTitle,
        ctaLink: heroShoutStory?.linkAddress,
        backgroundImage: heroShoutStory?.images[0],
        shoutTitle: shout?.title,
        shoutBody: shout?.text,
        shoutDate: shout?.date,
        shoutImage: shoutImage,
      };
      return (
        <>
          <HeroShout {...heroShoutData} />
        </>
      );

    default:
      return null;
  }
};

export default componentFactory;
