import 'react-native';
import React from 'react';
import { shallow } from 'enzyme';
import LinksSection from '../js/links';
import renderer from 'react-test-renderer';

describe("LinksList Component", () => {
  let component = shallow(<LinksSection />);

  it("should contain a single section", () => {
    expect(component.type()).toEqual("section");
  });

  it("Renders correctly", () => {
    let mockresponse = (JSON.stringify({statusCode: 200,
      headers: {
        'Content-Type': 'text/json',
        'Access-Control-Allow-Origin': '*' },
      body: '{"Items":[{"linktext":"429","checked":false,"createdAt":1504297765443,"link":"http://abc.com","id":"3ef61930-8f54-11e7-820e-537dbefc9ed8","updatedAt":1504297765443},{"linktext":"youtube","checked":false,"createdAt":1504632239189,"link":"https://www.youtube.com/","id":"00d97850-925f-11e7-9796-8334559acf58","updatedAt":1504632239189},{"linktext":"slack","checked":false,"createdAt":1504289254693,"link":"http://slack.com","id":"6e28b550-8f40-11e7-bb58-751cdda69e94","updatedAt":1504289254693},{"linktext":"yt","checked":false,"createdAt":1504632674632,"link":"https://www.youtube.com/channel/UCb4jjgJb5rtQqQN5GcypFow","id":"0464cc80-9260-11e7-94ef-5bdfa54de45e","updatedAt":1504632674632},{"linktext":"USA","checked":false,"createdAt":1504286456992,"link":"http://usa.gov","id":"ea996a00-8f39-11e7-bb58-751cdda69e94","updatedAt":1504286456992},{"sharelink":"sharelink","updatedAt":1504278387501,"linktext":"hahahaha","createdAt":1504278387501,"checked":false,"link":"http://bing.com","id":"20cef4e0-8f27-11e7-967a-6f64e869f43f"},{"linktext":"bad tv","checked":false,"createdAt":1504280722262,"link":"http://abc.com","id":"906f0f60-8f2c-11e7-8a7a-b1ab96772742","updatedAt":1504280722262},{"linktext":"youtube","checked":false,"createdAt":1504632241051,"link":"https://www.youtube.com/","id":"01f596b0-925f-11e7-9796-8334559acf58","updatedAt":1504632241051},{"sharelink":"sharelink","updatedAt":1504289509522,"linktext":"lolwut","createdAt":1504289509522,"checked":false,"link":"http://duckduckgo.com","id":"060c8720-8f41-11e7-aa79-4d9ff3058521"},{"linktext":"selena","checked":false,"createdAt":1504286166367,"link":"http://gomez.org","id":"3d5f8ef0-8f39-11e7-bb58-751cdda69e94","updatedAt":1504286166367},{"linktext":"read it yet","checked":false,"createdAt":1504280457408,"link":"http://reddit.com","id":"f291b310-8f2b-11e7-8c7e-af504c1a540f","updatedAt":1504280457408},{"linktext":"ping","checked":false,"createdAt":1504278542895,"link":"http://pong.com","id":"7d6e0bf0-8f27-11e7-9d1d-031832a7438c","updatedAt":1504278542895}],"Count":12,"ScannedCount":12}'
      })
    );
    const tree = renderer.create(
      <LinksSection />
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
