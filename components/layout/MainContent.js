const MainContent = ({ Component, props, pageConfig }) => {
  // Return main content
  return (
    <main className={pageConfig?.name}>
      <Component {...props} />
    </main>
  );
};

export default MainContent;
