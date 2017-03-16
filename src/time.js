import fecha from 'fecha';

const getCurrentTime = () => fecha.format(new Date(), "HH:mm")

export default {
  current: getCurrentTime
}
