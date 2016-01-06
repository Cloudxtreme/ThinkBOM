FlowRouter.route('/', {
  action() {
    ReactLayout.render(MainLayout, {
      content: <Home />
    });
  }
});

FlowRouter.route('/Materials', {
  action() {
    ReactLayout.render(MainLayout, {
      content: <Materials />
    });
  }
});

FlowRouter.route('/Payments', {
  action() {
    ReactLayout.render(MainLayout, {
      content: <Payments />
    });
  }
});