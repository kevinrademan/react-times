import { configure, addDecorator, setAddon } from '@kadira/storybook';
import infoAddon from '@kadira/react-storybook-addon-info';

addDecorator((story) => {
  return (story());
});

function loadStories() {
  require('../stories/TimePicker');
  require('../stories/DarkColor');
  require('../stories/TwelveHoursMode');
  require('../stories/ClassicThemePicker');
  require('../stories/CustomTrigger');
  require('../stories/DifferentLanguage');
}

setAddon(infoAddon);

configure(loadStories, module);
