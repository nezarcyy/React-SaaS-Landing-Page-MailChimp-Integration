import ReactGA from "react-ga";

const useAnalyticsEventTracker = (category="Landing-Page") => {
  const eventTracker = (action = "Subscribe", label = "Subscription") => {
    ReactGA.event({category, action, label});
  }
  return eventTracker;
}
export default useAnalyticsEventTracker;