"use client"
import Tabs from '@/components/tabs/Tabs'

const tabs = [
  {
    id: 'Mars',
    description: 'Second most distant planet from Sun and sixth largest planet Solar system, along with Mercury,\n' +
      'Earth and Mars, belongs family terrestrial planets. Named after ancient Roman goddess\n' +
      'love Venus. By number characteristics for example, by mass\n' +
      'and size Venus is considered the sister the Earth.'
  },
  {
    id: 'Neptune',
    description: 'Eighth and farthest planet of Solar system from Sun. Its mass exceeds mass of Earth\n' +
      '17.2 times and is third among planets of Solar system, and Neptune ranks fourth\n' +
      'in equatorial diameter, surpassing Earth by 3.9 times. Planet is named after\n' +
      'Neptune, Roman god of seas'
  },
  {
    id: 'Venus',
    description: 'Second most distant planet from Sun and sixth largest planet in Solar system, along with Mercury,\n' +
      'Earth and Mars, belongs to family of terrestrial planets. Named after ancient Roman goddess\n' +
      'of love Venus. By a number of characteristics for example, by mass\n' +
      'and size Venus is considered the sister of the Earth.'
  },
  {
    id: 'Mercury',
    description: 'Smallest planet in Solar system and closest to Sun. It named after ancient Roman\n' +
      'god of commerce fast Mercury, because it moves through sky faster than other\n' +
      'planets. Its period of revolution around Sun is shortest among all planets of Solar System.'
  }
];

export default function TabPage() {

  return (
    <>
      <h1>Tabs</h1>
      <div className='block'>
        <h2>Tabs with switching animation</h2>
        <hr/>
      </div>
      <div>
        <Tabs tabs={tabs}/>
      </div>
    </>
  );
}
