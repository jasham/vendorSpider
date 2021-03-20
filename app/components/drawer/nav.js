const menu = [
  {
    title: 'My Csmart',
    image: 'yes',
    expand: false,
    subHeaders: {
      firstColumn: [
        {
          subTitle: 'About Csmart',
          subTitleMenus: [
            { name: 'login', label: 'Login', link: '/login' },
            { name: 'register', label: 'Register', link: '/register' },
          ],
          expand: false,
        },
        {
          subTitle: 'Upgrades',
          subTitleMenus: [
            {
              name: 'broadband',
              label: 'Broadband',
              link: '/#',
            },
            { name: 'mobile', label: 'Mobile', link: '/mydevice-upgrade' },
          ],
          expand: false,
        },
        {
          subTitle: 'Your Details',
          subTitleMenus: [
            { name: 'Your Account', label: 'Your Account', link: '/myAccount' },
          ],
          expand: false,
        },
      ],
      secondColumn: [
        {
          subTitle: 'Pay Monthly',
          subTitleMenus: [
            {
              name: 'bill&payments',
              label: 'Bill & Payments',
              link: '/bill',
            },
            {
              name: 'payyourbill',
              label: 'Pay Your Bill',
              link: '/bill',
            },
            {
              name: 'currentusage',
              label: 'Current Usage',
              link: '/usage',
            },
            {
              name: 'yourupgrade',
              label: 'Your Upgrade',
              link: '/mydevice-upgrade',
            },
          ],
          expand: false,
        },
        {
          subTitle: 'Pay As You Go',
          subTitleMenus: [
            {
              name: 'topup',
              label: 'Top Up',
              link: '#',
            },
            {
              name: 'flexiplans',
              label: 'Flexi Plans',
              link: '#',
            },
            {
              name: 'devicerecycle',
              label: 'Device Recycle',
              link: '#',
            },
            {
              name: 'manageaccount',
              label: 'Manage Account',
              link: '/myAccount',
            },
            {
              name: 'dapp',
              label: 'Download App',
              link: '#',
            },
          ],
          expand: false,
        },
      ],
      thirdColumn: [
        {
          subTitle: 'My Wallet',
          subTitleMenus: [
            {
              name: 'Transaction',
              label: 'Transaction',
              link: '/myCsmart-wallet',
            },
            { name: 'Transfer', label: 'Transfer', link: '#' },
            {
              name: 'Add Money',
              label: 'Add Money',
              link: '/wallet/add-money',
            },
            { name: 'Request', label: 'Request', link: '#' },
          ],
          expand: false,
        },
        {
          subTitle: 'Order & Faults',
          subTitleMenus: [
            {
              name: 'Track your order',
              label: 'Track your order',
              link: '/track-order',
            },
            {
              name: 'Track a fault',
              label: 'Track a fault',
              link: '/track-faults',
            },
            {
              name: 'Cancelling an Order',
              label: 'Cancelling an Order',
              link: '/track-order',
            },
          ],
          expand: false,
        },
      ],
      lastColumn: 'yes',
    },
  },
  {
    title: 'Shop',
    image: 'yes',
    expand: false,
    subHeaders: {
      firstColumn: [
        {
          subTitle: 'Phones',
          subTitleMenus: [
            { name: 'iphone', label: 'IPhone', link: '/mobileshop' },
            { name: 'Pay Monthly', label: 'Pay Monthly', link: '/mobileshop' },
            {
              name: 'Pay As You Go',
              label: 'Pay As You Go',
              link: '/mobileshop',
            },
            { name: '5G Phones', label: '5G Phones', link: '/mobileshop' },
            {
              name: 'Refurbished Phones',
              label: 'Refurbished Phones',
              link: '/mobileshop',
            },
          ],
          expand: false,
        },
        {
          subTitle: 'Watches & Accessories',
          subTitleMenus: [
            {
              name: 'Accessories',
              label: 'Accessories',
              link: '/mobileshop',
            },
            { name: 'Apple Watch', label: 'Apple Watch', link: '/mobileshop' },
            { name: 'AirPods ', label: 'AirPods', link: '/mobileshop' },
          ],
          expand: false,
        },
      ],
      secondColumn: [
        {
          subTitle: 'Tablets',
          subTitleMenus: [
            { name: 'table', label: 'Android Tablets', link: '/mobileshop' },
            { name: 'iPad', label: 'iPad', link: '/mobileshop' },
            {
              name: 'Pay Monthly Tablets',
              label: 'Pay Monthly Tablets',
              link: '/mobileshop',
            },
          ],
          expand: false,
        },
        {
          subTitle: 'Tariffs & Packages',
          subTitleMenus: [
            { name: 'sim', label: 'Pay Monthly sim', link: '/mobileshop' },
            {
              name: 'Pay As You Sim',
              label: 'Pay As You Sim',
              link: '/mobileshop',
            },
            { name: 'Roaming', label: 'Roaming', link: '/mobileshop' },
          ],
          expand: false,
        },
      ],
      thirdColumn: [
        {
          subTitle: 'Latest Deals',
          subTitleMenus: [
            { name: 'table', label: 'Summer Deals', link: '/mobileshop' },
            { name: 'iPad', label: 'Christmas Deals', link: '/mobileshop' },
            {
              name: 'Student Discounts',
              label: 'Student Discounts',
              link: '/mobileshop',
            },
          ],
          expand: false,
        },
      ],
      lastColumn: 'yes',
    },
  },
  {
    title: 'Why Csmart',
    image: 'yes',
    expand: false,
    subHeaders: {
      firstColumn: [
        {
          subTitle: 'Best Network',
          subTitleMenus: [
            { name: 'Coverage Checker', label: 'Coverage Checker', link: '' },
            {
              name: 'Ambition for speed network',
              label: 'Ambition for speed network',
              link: '',
            },
            {
              name: '5G network',
              label: '5G network',
              link: '',
            },
          ],
          expand: false,
        },
        {
          subTitle: 'Services',
          subTitleMenus: [
            {
              name: '24/7 customer support',
              label: '24/7 customer support',
              link: '',
            },
            {
              name: 'Communities',
              label: 'Communities',
              link: '',
            },
          ],
          expand: false,
        },
      ],
      secondColumn: [
        {
          subTitle: 'Entertainment',
          subTitleMenus: [
            {
              name: 'Amazon prime free ',
              label: 'Amazon prime free ',
              link: 'roaming',
            },
            {
              name: 'Netflix free for 6 months',
              label: 'Netflix free for 6 months',
              link: 'roaming',
            },
            {
              name: 'Csmart TV',
              label: 'Csmart TV',
              link: 'roaming',
            },
            {
              name: 'Apple Music',
              label: 'Apple Music',
              link: '',
            },
          ],
          expand: false,
        },
        {
          subTitle: 'Great Extras',
          subTitleMenus: [
            {
              name: 'Best deal on phones ',
              label: 'Best deal on phones ',
              link: 'shop/cart',
            },
            {
              name: 'Store in the cart',
              label: 'Store in the cart',
              link: '',
            },
          ],
          expand: false,
        },
      ],
      thirdColumn: [],
      lastColumn: 'yes',
    },
  },
  {
    title: 'Help',
    image: 'yes',
    expand: false,
    subHeaders: {
      firstColumn: [
        {
          subTitle: 'Getting started or upgrading',
          subTitleMenus: [
            {
              name: 'SIM set up',
              label: 'SIM set up',
              link: '#',
            },
            {
              name: 'How to upgrade',
              label: 'How to upgrade ',
              link: '#',
            },
            {
              name: 'Unlocking your device',
              label: 'Unlocking your device',
              link: '#',
            },
          ],
          expand: false,
        },
        {
          subTitle: 'Roaming and International',
          subTitleMenus: [
            {
              name: 'Roaming Charges',
              label: 'Roaming Charges',
              link: '#',
            },
            {
              name: 'Calling abroad from UK',
              label: 'Calling abroad from UK',
              link: '#',
            },
          ],
          expand: false,
        },
      ],

      secondColumn: [
        {
          subTitle: 'Safety and Security',
          subTitleMenus: [
            {
              name: 'Lost or stolen device',
              label: 'Lost or stolen device',
              link: '#',
            },
            {
              name: 'Insurance',
              label: 'Insurance',
              link: '#',
            },
            {
              name: 'Device health check',
              label: 'Device health check',
              link: '#',
            },
          ],
          expand: false,
        },
        {
          subTitle: 'Get in touch with us',
          subTitleMenus: [
            {
              name: 'Contact us',
              label: 'Contact us',
              link: '#',
            },
            {
              name: 'Make a complaint',
              label: 'Make a complaint',
              link: '#',
            },
            {
              name: 'Block a call',
              label: 'Block a call',
              link: '#',
            },
            {
              name: 'Find nearest Store',
              label: 'Find nearest Store',
              link: '#',
            },
            {
              name: 'Book an Appointment',
              label: 'Book an Appointment',
              link: '#',
            },
            {
              name: 'Feedback',
              label: 'Feedback',
              link: '#',
            },
          ],
          expand: false,
        },
      ],
      thirdColumn: [
        {
          subTitle: 'Bill and Payment',
          subTitleMenus: [
            {
              name: 'Understanding your bill',
              label: 'Understanding your bill',
              link: '#',
            },
            {
              name: 'How to pay a bill',
              label: 'How to pay a bill',
              link: '#',
            },
            {
              name: 'Top up',
              label: 'Top up',
              link: '#',
            },
            {
              name: 'Monitoring the usage',
              label: 'Monitoring the usage',
              link: '#',
            },
            {
              name: 'Viewing your bill',
              label: 'Viewing your bill',
              link: '/bill',
            },
            {
              name: 'Feedback',
              label: 'Feedback',
              link: '#',
            },
          ],
          expand: false,
        },
        {
          subTitle: 'Helpful links',
          subTitleMenus: [
            {
              name: 'Communities',
              label: 'Communities',
              link: '#',
            },
            {
              name: 'FAQ',
              label: 'FAQ',
              link: '#',
            },
            {
              name: 'Password help',
              label: 'Password help',
              link: '#',
            },
            {
              name: 'Find hotspot near you',
              label: 'Find hotspot near you',
              link: '#',
            },
            {
              name: 'Deactivate/Port Out',
              label: 'Deactivate/Port Out',
              link: '#',
            },
          ],
          expand: false,
        },
      ],
      lastColumn: 'yes',
    },
  },
];

export default menu;
