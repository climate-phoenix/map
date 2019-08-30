export const calculateColor = carbon => {
  if (carbon < 2) {
    return 120
  } else if (carbon < 4) {
    return 90
  } else if (carbon < 6) {
    return 60
  } else if (carbon < 8) {
    return 30
  } else {
    return 0
  }
}

export { COUNTRIES } from './countries'
