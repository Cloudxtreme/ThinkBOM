//MAIN ROUTES FOR THINKBOM
const MainBOMRoutes = FlowRouter.group({
  name: 'main',
});

MainBOMRoutes.route('/', {
  action() {
    ReactLayout.render(MainLayout, {
      content: <Home />
    });
  }
});

MainBOMRoutes.route('/MyAccount', {
  action() {
    ReactLayout.render(MainLayout, {
      content: <MyAccount />
    });
  }
});

MainBOMRoutes.route('/Login', {
  action() {
    ReactLayout.render(MainLayout, {
      content: <Login />
    });
  }
});

MainBOMRoutes.route('/Register', {
  action() {
    ReactLayout.render(MainLayout, {
      content: <Register />
    });
  }
});