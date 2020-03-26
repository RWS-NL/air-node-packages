import { shallow } from 'enzyme';
import React from 'react';
import { PanelGroup, ResizeModes } from '../../src/PanelGroup';

describe('PanelGroup', () => {
  describe('Snapshot Testing', () => {
    test('Required Props', () => {
      const panelGroup = shallow(
        <PanelGroup>
          <div>panel 1</div>
          <div>panel 2</div>
          <div>panel 3</div>
        </PanelGroup>
      );
      expect(panelGroup).toMatchSnapshot();
    });

    test('Optional Props', () => {
      const panelGroup = shallow(
        <PanelGroup
          direction='row'
          borderColor='brown'
          panelWidths={[
            { size: 500, minSize: 300, resize: ResizeModes.dynamic },
            { minSize: 400, resize: ResizeModes.dynamic }
          ]}
        >
          <div>panel 1</div>
          <div>panel 2</div>
          <div>panel 3</div>
        </PanelGroup>
      );

      expect(panelGroup).toMatchSnapshot();
    });

    test('Nested PanelGroup', () => {
      const panelGroup = shallow(
        <PanelGroup direction='row' borderColor='grey'>
          <PanelGroup direction='column' borderColor='grey'>
            <div>panel 1</div>
            <div>panel 2</div>
            <div>panel 3</div>
          </PanelGroup>
          <div>panel 4</div>
          <PanelGroup direction='column' borderColor='grey'>
            <div>panel 5</div>
            <div>panel 6</div>
          </PanelGroup>
        </PanelGroup>
      );

      expect(panelGroup).toMatchSnapshot();
    });

    test('Many Props', () => {
      const panelGroup = shallow(
        <PanelGroup
          borderColor='grey'
          panelWidths={[
            { size: 100, minSize: 50, maxSize: 225, resize: ResizeModes.dynamic },
            { maxSize: 550, resize: ResizeModes.stretch },
            { size: 100, minSize: 50, resize: ResizeModes.dynamic }
          ]}
        >
          <div>panel 1</div>
          <div>panel 2</div>
          <div>panel 3</div>
        </PanelGroup>
      );

      expect(panelGroup).toMatchSnapshot();
    });
  });
});
