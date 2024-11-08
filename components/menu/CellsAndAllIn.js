import React, { useState, useEffect } from 'react';
import AllIn from './allIn';
import Cells from './cells';
import shortid from 'shortid';
import slugify from 'slugify';

const CellsAndAllIn = ({
  menuData,
  setModalActive,
  isCellsAndTabs,
  mode,
  config,
  business,
}) => {
  const [activeSection, setActiveSection] = useState(null);
  const [displayedCellSection, setDisplayedCellSection] = useState();

  const onCellClick = selection => {
    const sectionClassName = () =>
      slugify(selection.section.name, { lower: true });

    setTimeout(() => {
      try {
        const element = document.querySelector(`.${sectionClassName()}`);

        if (element) {
          const offset = 250;
          const bodyRect = document.body.getBoundingClientRect().top;
          const elementRect = element.getBoundingClientRect().top;
          const elementPosition = elementRect - bodyRect;
          const offsetPosition = elementPosition - offset;

          window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth',
          });
        }
      } catch (error) {
        console.error('could not scroll');
      }
    }, 500);

    setActiveSection(selection);
  };

  const onBackClick = () => {
    setActiveSection(null);
  };

  useEffect(() => {
    if (activeSection && isCellsAndTabs) {
      // on cell click renders the first section of the tabs
      setDisplayedCellSection({
        section: activeSection.inventory[0].section,
        inventory: activeSection.inventory[0].inventory,
      });
    }
  }, [activeSection, isCellsAndTabs]);

  const childrenWithProps = () => (
    <AllIn
      menuData={displayedCellSection ? displayedCellSection : activeSection}
      setModalActive={setModalActive}
      onBackClick={onBackClick}
      config={config}
      business={business}
    />
  );

  if (isCellsAndTabs) {
    return activeSection ? (
      <div>
        {/* <Tabs
          key={shortid.generate()}
          menuData={activeSection}
          onCellClick={onCellClick}
          activeSection={activeSection}
          setActiveSection={setActiveSection}
          hasNestedTabs
          displayedCellSection={displayedCellSection}
          setDisplayedCellSection={setDisplayedCellSection}
          mode={mode}
        />
        {childrenWithProps()} */}
      </div>
    ) : (
      <Cells
        key={shortid.generate()}
        menuData={menuData}
        onCellClick={onCellClick}
        mode={mode}
      />
    );
  } else {
    return activeSection ? (
      <div>{childrenWithProps()}</div>
    ) : (
      <Cells
        key={shortid.generate()}
        menuData={menuData}
        onCellClick={onCellClick}
        mode={mode}
      />
    );
  }
};

export default CellsAndAllIn;
