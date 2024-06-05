import { Tabs } from 'antd';
import React, { useState } from 'react'

const { TabPane } = Tabs;
const tabs = [
    {
        label: (<img src="https://picsum.photos/203" className='rounded-full' width={50} alt="" />
        ),
        key: 'tab1',
        content: (
            <div>
                <h2>Content of Tab 1</h2>
                <p>This is the content for the first tab.</p>
            </div>
        ),
    },
    {
        label: (<img src="https://picsum.photos/203" className='rounded-full' width={50} alt="" />
        ),
        key: 'tab2',
        content: (
            <div>
                <h2>Content of Tab 2</h2>
                <p>This is the content for the second tab.</p>
            </div>
        ),
    },
    {
        label: (<img src="https://picsum.photos/203" className='rounded-full' width={50} alt="" />
        ),
        key: 'tab3',
        content: (
            <div>
                <h2>Content of Tab 2</h2>
                <p>This is the content for the second tab.</p>
            </div>
        ),
    },
];

export default function HomeMenu() {
    const [tabPosition, setTabPosition] = useState('left');

    return (
        <>
            <Tabs tabPosition={tabPosition}>
                {tabs.map((tabItem) => (
                    <TabPane tab={tabItem.label} key={tabItem.key}>
                        {tabItem.content}
                    </TabPane>
                ))}
            </Tabs>
        </>
    );
}
