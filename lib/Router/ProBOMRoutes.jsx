//MAIN ROUTES FOR THINKBOM
const ProBOMRoutes = FlowRouter.group({
  name: 'pro',
});

ProBOMRoutes.route('/ProBOM', {
  action() {
    ReactLayout.render(MainLayout, {
      content: <ProBOM />
    });
  }
});