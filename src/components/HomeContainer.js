import React from 'react'
import GratitudeContainer from './GratitudeContainer'
import JournalContainer from './JournalContainer'
import './HomeContainer.css'
import 'antd/dist/antd.css';
import { Divider } from 'antd';

export default function HomeContainer() {
  return (
    <div className={"home-container"}>
      <JournalContainer />
     
      <GratitudeContainer />
    </div>
  )
}
