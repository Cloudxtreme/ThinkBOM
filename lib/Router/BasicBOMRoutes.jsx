//MAIN ROUTES FOR THINKBOM
const BasicBOMRoutes = FlowRouter.group({
  name: 'basic',
});

BasicBOMRoutes.route('/BasicBOM', {
  action() {
    ReactLayout.render(MainLayout, {
      content: <BasicBOM />
    });
  }
});