import { accounting } from '../data/accounting'
import { economy } from '../data/economy'
import { hr } from '../data/hr'
import { legal } from '../data/legal'

export const getService = (serviceName: string) => {
  switch (serviceName) {
    case 'legal': {
      return legal
    }
    case 'hr': {
      return hr
    }
    case 'economy': {
      return economy
    }
    case 'accounting': {
      return accounting
    }
  }
}
