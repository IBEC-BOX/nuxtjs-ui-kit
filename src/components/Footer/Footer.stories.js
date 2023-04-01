import FooterOne from './FooterOne.vue';
import UiButton from '../Button.vue';
import Logo from '../../stories/assets/logo.svg';
import GitHab from '@svg/githab.svg';
import Tg from '@svg/tg.svg';
import Wp from '@svg/wp.svg';
import appstore from '@svg/appstore.svg';
import googleplay from '@svg/googleplay.svg';

// More on default export: https://storybook.js.org/docs/vue/writing-stories/introduction#default-export
export default {
  title: 'Footer/Footer One',
  component: {
    FooterOne
  },
  // More on argTypes: https://storybook.js.org/docs/vue/api/argtypes
  argTypes: {
      links: {
        control: 'array',
        description: 'An array of links to be displayed in the footer.',
        type: {
          required: false,
          summary: 'Array'
        },
        table: {
          type: {
            summary: 'Array'
          },
          defaultValue: {
            summary: '[]'
          }
        }
      },
      copyright: {
        control: 'text',
        description: 'Copyright text to be displayed in the footer.',
        type: {
          required: false,
          summary: 'String'
        },
        table: {
          type: {
            summary: 'String'
          },
          defaultValue: {
            summary: "''"
          }
        }
      },
      menu: {
        control: 'array',
        description: 'An array of menu items to be displayed in the footer.',
        type: {
          required: false,
          summary: 'Array'
        },
        table: {
          type: {
            summary: 'Array'
          },
          defaultValue: {
            summary: '[]'
          }
        }
      },
      apps: {
        control: 'array',
        description: 'An array of app links to be displayed in the footer.',
        type: {
          required: false,
          summary: 'Array'
        },
        table: {
          type: {
            summary: 'Array'
          },
          defaultValue: {
            summary: '[]'
          }
        }
      },
      socials: {
        control: 'array',
        description: 'An array of social media links to be displayed in the footer.',
        type: {
          required: false,
          summary: 'Array'
        },
        table: {
          type: {
            summary: 'Array'
          },
          defaultValue: {
            summary: '[]'
          }
        }
      },
      logo: {
        control: 'text',
        description: 'Logo image URL to be displayed in the footer.',
        type: {
          required: false,
          summary: 'String'
        },
        table: {
          type: {
            summary: 'String'
          },
          defaultValue: {
            summary: "''"
          }
        }
      },
      logoInBody: {
        control: 'boolean',
        description: 'Whether to display the logo within the footer content or not.',
        type: {
          required: false,
          summary: 'Boolean'
        },
        table: {
          type: {
            summary: 'Boolean'
          },
          defaultValue: {
            summary: 'false'
          }
        }
      },
      showBorder: {
        control: 'boolean',
        description: 'Whether to display the footer border or not.',
        type: {
          required: false,
          summary: 'Boolean'
        },
        table: {
          type: {
            summary: 'Boolean'
          },
          defaultValue: {
            summary: 'true'
          }
        }
      },
      appsOnlyMobile: {
        control: 'boolean',
        description: 'Whether to display app links only on mobile devices or not.',
        type: {
          required: false,
          summary: 'Boolean'
        },
        table: {
          type: {
            summary: 'Boolean'
          },
          defaultValue: {
            summary: 'false'
          }
        }
      },
      footerContent: {
        control: 'text',
        description: 'Custom HTML content to be displayed in the footer.',
        type: {
          required: false,
          summary: 'String'
        },
        table: {
          type: {
            summary: 'String'
          },
          defaultValue: {
            summary: "''"
          }
        }
      }
  },
};

// More on component templates: https://storybook.js.org/docs/vue/writing-stories/introduction#using-args
const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { FooterOne, UiButton },
  // template: '<HeaderOne v-bind="$props" />',
  template: `<FooterOne v-bind="$props">
  <template v-slot:footer-one>
    <div class="d-flex flex-column justify-content-center text-center">
      <h1>Let’s get started on something great</h1>
      <h3>Join over 4,000+ startups already growing with Untitled.</h3>
      <div class="d-flex justify-content-center gap-4 mt-4">
        <UiButton variant="outline-primary">Medium Button</UiButton>
        <UiButton>Medium Button</UiButton>
      </div>
    </div>
  </template>

  <template v-slot:footer-apps-text>
    <span>Get the app</span>
  </template>
</FooterOne>`

});

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/vue/writing-stories/args
Primary.args = {
  logo: Logo,
  links: [
    { id:1, url: '#1', title: 'Tems' },
    { id:2, url: '#2', title: 'Privacy' },
    { id:3, url: '#3', title: 'Cookies' }
  ],
  copyright: `2023 Untitled UI. All rights reserverd`,
  apps: [
    {
      id: 1,
      title: 'Appstore',
      link: '#appstore',
      img: appstore,
    },
    {
      id: 2,
      title: 'Googleplay',
      link: '#googleplay',
      img: googleplay,
    }
  ],
  socials: [
    {id: 1, link: '/', title: 'githab', img: GitHab},
    {id: 12, link: '/', title: 'wp', img: Wp},
    {id: 12, link: '/', title: 'githab', img: GitHab},
    {id: 12, link: '/', title: 'telegram', img: Tg}
  ],
  menu: [
    {
      id:2,
      url: '/2',
      name: 'Product',
      items: [
        {id:7, url: '/7', name: 'Overview'},
        {id:8, url: '/8', name: 'Solutions'},
        {id:9, url: '/9', name: 'Pricing'},
      ]
    },
    {
      id:2,
      url: '/2',
      name: 'Company',
      items: [
        {id:7, url: '/7', name: 'Overview'},
        {id:8, url: '/8', name: 'Solutions'},
        {id:9, url: '/9', name: 'Pricing'},
      ]
    },
    {
      id:2,
      url: '/2',
      name: 'Resources',
      items: [
        {id:7, url: '/7', name: 'Overview'},
        {id:8, url: '/8', name: 'Solutions'},
        {id:9, url: '/9', name: 'Pricing'},
      ]
    },
    {
      id:2,
      url: '/2',
      name: 'Social',
      items: [
        {id:7, url: '/7', name: 'Overview'},
        {id:8, url: '/8', name: 'Solutions'},
        {id:9, url: '/9', name: 'Pricing'},
      ]
    },
    {
      id:2,
      url: '/2',
      name: 'Legal',
      items: [
        {id:7, url: '/7', name: 'Overview'},
        {id:8, url: '/8', name: 'Solutions'},
        {id:9, url: '/9', name: 'Pricing'},
      ]
    },
  ],
};

export const FirstStyle = Template.bind({});
// More on args: https://storybook.js.org/docs/vue/writing-stories/args
FirstStyle.args = {
  links: [
    { id:1, url: '#1', title: 'Tems' },
    { id:2, url: '#2', title: 'Privacy' },
    { id:3, url: '#3', title: 'Cookies' }
  ],
  copyright: `2023 Untitled UI. All rights reserverd`,
};


const Template2 = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { FooterOne, UiButton },
  // template: '<HeaderOne v-bind="$props" />',
  template: `<FooterOne v-bind="$props">
  
  <template v-slot:footer-apps-text>
    <span>Get the app</span>
  </template>
  
</FooterOne>`

});
export const SecondStyle = Template2.bind({});
// More on args: https://storybook.js.org/docs/vue/writing-stories/args
SecondStyle.args = {
  logo: Logo,
  copyright: `2023 Untitled UI. All rights reserverd`,
  apps: [
    {
      id: 1,
      title: 'Appstore',
      link: '#appstore',
      img: appstore,
    },
    {
      id: 2,
      title: 'Googleplay',
      link: '#googleplay',
      img: googleplay,
    }
  ],
  menu: [
    {
      id:2,
      url: '/2',
      name: 'Product',
      items: [
        {id:7, url: '/7', name: 'Overview'},
        {id:8, url: '/8', name: 'Solutions'},
        {id:9, url: '/9', name: 'Pricing'},
        {id:9, url: '/9', name: 'Press'},
        {id:9, url: '/9', name: 'Tutorials'},
        {id:8, url: '/8', name: 'Solutions'},
      ]
    },
    {
      id:2,
      url: '/2',
      name: 'Company',
      items: [
        {id:7, url: '/7', name: 'Overview'},
        {id:8, url: '/8', name: 'Solutions'},
        {id:8, url: '/8', name: 'Overview'},
        {id:9, url: '/9', name: 'Pricing'},
      ]
    },
    {
      id:2,
      url: '/2',
      name: 'Resources',
      items: [
        {id:7, url: '/7', name: 'Overview'},
        {id:8, url: '/8', name: 'Solutions'},
        {id:9, url: '/9', name: 'Pricing'},
      ]
    },
    {
      id:2,
      url: '/2',
      name: 'Social',
      items: [
        {id:7, url: '/7', name: 'Overview'},
        {id:8, url: '/8', name: 'Solutions'},
        {id:9, url: '/9', name: 'Pricing'},
      ]
    },
    {
      id:2,
      url: '/2',
      name: 'Legal',
      items: [
        {id:7, url: '/7', name: 'Overview'},
        {id:8, url: '/8', name: 'Solutions'},
        {id:9, url: '/9', name: 'Pricing'},
      ]
    },
  ],
};

export const ThirdStyle = Template2.bind({});
ThirdStyle.args = {
  logo: Logo,
  logoInBody: true,
  appsOnlyMobile: true,
  footerContent: 'Design amazing digital experiences that create more happy in the world.',
  showBorder: false,
  copyright: `2023 Untitled UI. All rights reserverd`,
  apps: [
    {
      id: 1,
      title: 'Appstore',
      link: '#appstore',
      img: appstore,
    },
    {
      id: 2,
      title: 'Googleplay',
      link: '#googleplay',
      img: googleplay,
    }
  ],
  socials: [
    {id: 1, link: '/', title: 'githab', img: GitHab},
    {id: 12, link: '/', title: 'wp', img: Wp},
    {id: 12, link: '/', title: 'githab', img: GitHab},
    {id: 12, link: '/', title: 'telegram', img: Tg}
  ],
  menu: [
    {
      id:2,
      url: '/2',
      name: 'Product',
      items: [
        {id:7, url: '/7', name: 'Overview'},
        {id:8, url: '/8', name: 'Solutions'},
        {id:9, url: '/9', name: 'Pricing'},
        {id:9, url: '/9', name: 'Press'},
        {id:9, url: '/9', name: 'Tutorials'},
        {id:8, url: '/8', name: 'Solutions'},
      ]
    },
    {
      id:2,
      url: '/2',
      name: 'Company',
      items: [
        {id:7, url: '/7', name: 'Overview'},
        {id:8, url: '/8', name: 'Solutions'},
        {id:8, url: '/8', name: 'Overview'},
        {id:9, url: '/9', name: 'Pricing'},
      ]
    },
    {
      id:2,
      url: '/2',
      name: 'Resources',
      items: [
        {id:7, url: '/7', name: 'Overview'},
        {id:8, url: '/8', name: 'Solutions'},
        {id:9, url: '/9', name: 'Pricing'},
      ]
    },
    {
      id:2,
      url: '/2',
      name: 'Social',
      items: [
        {id:7, url: '/7', name: 'Overview'},
        {id:8, url: '/8', name: 'Solutions'},
        {id:9, url: '/9', name: 'Pricing'},
      ]
    },
    {
      id:2,
      url: '/2',
      name: 'Legal',
      items: [
        {id:7, url: '/7', name: 'Overview'},
        {id:8, url: '/8', name: 'Solutions'},
        {id:9, url: '/9', name: 'Pricing'},
      ]
    },
  ],
};

