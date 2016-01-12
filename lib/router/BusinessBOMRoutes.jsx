//MAIN ROUTES FOR THINKBOM
const BusinessBOMRoutes = FlowRouter.group({
  name: 'business',
});

BusinessBOMRoutes.route('/BusinessBOM', {
  action() {
    ReactLayout.render(MainLayout, {
      content: <BusinessBOM />
    });
  }
});