import triggerIdentifyGeo from './triggerIdentifyGeo';

export default function triggerSegmentIdentify(data = {}) {
  triggerIdentifyGeo();
  if (window.analytics) {
    // if (isDev) console.log(`Segment - Identify`, data);
    window.analytics.identify(data);
  } else {
    //console.log(`Segment - Identify`, data);
  }
}
