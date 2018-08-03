export default {
  items: [
    {
      name: 'Dashboard',
      url: '/dashboard',
      icon: 'icon-speedometer',
      badge: {
        variant: 'info',
        text: 'NEW',
      },
    },
    {
      title: true,
      name: 'S.A FrontEnd',
      wrapper: {            // optional wrapper object
        element: '',        // required valid HTML5 element tag
        attributes: {}        // optional valid JS object with JS API naming ex: { className: "my-class", style: { fontFamily: "Verdana" }, id: "my-id"}
      },
      class: ''             // optional class names space delimited list for title item ex: "text-center"
    },
    {
      name : 'Mobile Settings', //name: 'Colors',
      url : '/settings', //url: '/theme/colors',
      icon: 'icon-drop',
    },
    {
      name : 'Devices Informations', //name: 'Colors',
      url : '/devices', //url: '/theme/colors',
      icon: 'icon-drop',
    },
    {
      name : 'Messages', //name: 'Colors',
      url : '/messages', //url: '/theme/colors',
      icon: 'icon-drop',
    },

  ],
};
