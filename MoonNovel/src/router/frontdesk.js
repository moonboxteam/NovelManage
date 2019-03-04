/**
 * Create by CC on 2018/12/7
 */
'use strict'

const frontdeskRouter = {
  path: 'frontdesk',
  name: 'Frontdesk',
  component: () => import('@/views/frontdesk'),
  children: [
    {
      path: 'shopInfo',
      name: 'ShopInfo',
      component: () => import('@/views/frontdesk/shopInfo')
    }
  ]
}

export default frontdeskRouter
