import useSWR from 'swr'
import { fetcher } from 'services/api'

export default {
  getSSR: () => fetcher('/capsules'),
  get: (initialData) => useSWR('/capsules', fetcher, { initialData })
}
