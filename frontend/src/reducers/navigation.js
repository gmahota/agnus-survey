import {
  FiToggleLeft,
  FiList,
  FiActivity,
  FiCalendar,
  FiStar,
  FiDroplet,
  FiGrid,
  FiClock,
  FiCopy,
  FiUser,
  FiPieChart,
  FiCompass,
  FiHelpCircle,
  FiShoppingCart,
  FiHome
} from 'react-icons/fi'

const initialState = [
  {
    title: "Reports's",
    items: [
      {
        url: '/dashboard',
        icon: <FiCompass size={20} />,
        title: 'Dashboard',
        items: []
      },
      {
        url: '/',
        icon: <FiActivity size={20} />,
        title: 'Serviços',
        items: [
          {
            url: '/survey/servicos-geral',
            title: 'Resumo Geral',
            items: []
          },
          {
            url: '/survey/servicos-Atendimento',
            title: 'Atendimento',
            items: []
          },
          {
            url: '/survey/servicos-gerente',
            title: 'Acesso Gerente',
            items: []
          },
          {
            url: '/survey/servicos-acessos',
            title: 'Facilidade Acesso',
            items: []
          },
          {
            url: '/survey/servicos-seguranca',
            title: 'Fidelidade & Segurança',
            items: []
          },
          {
            url: '/survey/servicos-taxas',
            title: 'Tarifas & Taxas de Juros',
            items: []
          }
        ]
      },
      {
        url: '/',
        icon: <FiList size={20} />,
        title: 'Menu levels',
        items: Array.from(Array(4).keys()).map((i) => {
          return {
            url: '/',
            title: `Level 1-${i + 1}`,
            items: Array.from(Array(4).keys()).map((j) => {
              return {
                url: '/',
                title: `Level 2-${j + 1}`,
                items: Array.from(Array(4).keys()).map((k) => {
                  return {
                    url: '/',
                    title: `Level 3-${k + 1}`,
                    items: Array.from(Array(4).keys()).map((l) => {
                      return {
                        url: '/',
                        title: `Level 4-${l + 1}`,
                        items: []
                      }
                    })
                  }
                })
              }
            })
          }
        })
      },
      {
        url: '/',
        icon: <FiStar size={20} />,
        title: 'Demos',
        badge: {
          color: 'bg-indigo-500 text-white',
          text: 6
        },
        items: [
          {
            url: '/demo-1',
            title: 'Light background',
            items: []
          },
          {
            url: '/demo-2',
            title: 'Dark background',
            items: []
          },
          {
            url: '/demo-4',
            title: 'Dark sidebar',
            items: []
          },
          {
            url: '/demo-3',
            title: 'Small sidebar',
            items: []
          },
          {
            url: '/demo-5',
            title: 'Dark small sidebar',
            items: []
          },
          {
            url: '/demo-6',
            title: 'Dark navbar',
            items: []
          }
        ]
      },
      {
        url: '/',
        icon: <FiCalendar size={20} />,
        title: 'Anual',
        items: [
          {
            url: '/e-commerce',
            title: 'Products',
            items: []
          },
          {
            url: '/invoice',
            title: 'Invoice',
            items: []
          },
          {
            url: '/pricing-tables',
            title: 'Pricing tables',
            items: []
          }
        ]
      }
    ]
  },
  {
    title: 'Pages',
    items: [
      {
        url: '/',
        icon: <FiCopy size={20} />,
        title: 'Authentication',
        badge: {
          color: 'bg-indigo-500 text-white',
          text: 7
        },
        items: [
          {
            url: '/contact-us-1',
            title: 'Contact us',
            items: []
          },
          {
            url: '/login-1',
            title: 'Login 1',
            items: []
          },
          {
            url: '/login-2',
            title: 'Login 2',
            items: []
          },
          {
            url: '/login-3',
            title: 'Login 3',
            items: []
          },
          {
            url: '/create-account',
            title: 'Create account',
            items: []
          },
          {
            url: '/email-confirmation',
            title: 'Email confirmation',
            items: []
          },
          {
            url: '/logout',
            title: 'Logout',
            items: []
          },
          {
            url: '/reset-password',
            title: 'Reset password',
            items: []
          },
          {
            url: '/forgot-password',
            title: 'Forgot password',
            items: []
          },
          {
            url: '/lock-screen',
            title: 'Lock screen',
            items: []
          },
          {
            url: '/subscribe',
            title: 'Subscribe',
            items: []
          }
        ]
      },
      {
        url: '/',
        icon: <FiUser size={20} />,
        title: 'User',
        items: [
          {
            url: '/user-profile',
            title: 'User profile',
            items: []
          },
          {
            url: '/social-feed',
            title: 'Social feed',
            items: []
          }
        ]
      },
      {
        url: '/',
        icon: <FiClock size={20} />,
        title: 'Pages',
        items: [
          {
            url: '/support-1',
            title: 'Support',
            items: []
          },
          {
            url: '/empty-page',
            title: 'Empty page',
            items: []
          },
          {
            url: '/terms-of-service',
            title: 'Terms of service',
            items: []
          },
          {
            url: '/privacy-policy',
            title: 'Privacy policy',
            items: []
          },
          {
            url: '/error-page',
            title: 'Error page',
            items: []
          },
          {
            url: '/coming-soon',
            title: 'Coming soon',
            items: []
          }
        ]
      }
    ]
  }
]

export default function navigation(state = initialState, action) {
  switch (action.type) {
    default:
      return state
  }
}
