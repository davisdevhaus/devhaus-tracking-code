import getUTM from './getUTM';
import triggerIdentifyGeo from './triggerIdentifyGeo';

export default function triggerSegmentEvent(eventName = '', data = {}) {
  triggerIdentifyGeo();
  const dataSend = {
    ...data,
    metadata: {
      utm_source: getUTM('utm_source'),
      utm_medium: getUTM('utm_medium'),
      utm_campaign: getUTM('utm_campaign'),
    },
  };
  if (window?.analytics) {
    //console.log(`Segment - ${eventName}`, dataSend);
    window?.analytics?.track(eventName, dataSend);
  } else {
    //console.log(`Segment - ${eventName}`, dataSend);
  }
}
