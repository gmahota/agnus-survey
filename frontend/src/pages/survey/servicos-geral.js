import Widget1 from '../../components/dashboard/widget-1'
import Section from '../../components/dashboard/section'
import SectionTitle from '../../components/dashboard/section-title'
import {FiActivity, FiUsers, FiExternalLink, FiClock} from 'react-icons/fi'
import {Bar1} from '../../components/dashboard/bar-chart'
import {Donut1} from '../../components/dashboard/donut-chart'
import {Line1} from '../../components/dashboard/line-chart'
import Dropdown1 from '../../components/widgets/dropdown-1'
import Markets from '../../components/dashboard/markets'
import {List} from '../../components/dashboard/list'
import Tasks from '../../components/tasks'
import {Timeline1} from '../../components/timelines'

const Index = () => {
  return (
    <>
      <SectionTitle title="Overview" subtitle="Dashboard" />
      <div className="flex flex-col lg:flex-row w-full lg:space-x-2 space-y-2 lg:space-y-0 mb-2 lg:mb-4">
        {/*widget*/}
        <div className="w-full lg:w-1/4">
          <Widget1
            title="Abaixo 5.000,00 MT"
            description="20%"
            right={
              <FiUsers size={24} className="stroke-current text-gray-500" />
            }
          />
        </div>
        {/*widget*/}
        <div className="w-full lg:w-1/4">
          <Widget1
            title="Acima 5.000,00 MT"
            description="30%"
            right={
              <FiActivity size={24} className="stroke-current text-gray-500" />
            }
          />
        </div>
        {/*widget*/}
        <div className="w-full lg:w-1/4">
          <Widget1
            title="Acima 20.000,00 MT"
            description="15%"
            right={
              <FiExternalLink
                size={24}
                className="stroke-current text-gray-500"
              />
            }
          />
        </div>
        {/*widget*/}
        <div className="w-full lg:w-1/4">
          <Widget1
            title="Acima 40.000,00 MT"
            description="35%"
            right={
              <FiClock size={24} className="stroke-current text-gray-500" />
            }
          />
        </div>
      </div>

      <div className="flex flex-col lg:flex-row w-full lg:space-x-2 space-y-2 lg:space-y-0 mb-2 lg:mb-4">
        <div className="w-full lg:w-2/3">
          <Section
            title="Survey"
            description={<span>2021</span>}
            right={<Dropdown1 />}>
            <div className="flex flex-row w-full">
              <Bar1 />
            </div>
          </Section>
        </div>
        <div className="w-full lg:w-1/3">
          <Section
            title="Survey"
            description={<span>Por Idades</span>}
            right={<Dropdown1 />}>
            <div className="flex flex-row w-full">
              <Donut1 />
            </div>
          </Section>
        </div>
      </div>      

      <div className="flex flex-col lg:flex-row w-full lg:space-x-2 space-y-2 lg:space-y-0 mb-2 lg:mb-4">
        
        
          <Section
            title="Nr. Inqueritos"
            description={<span>Por Provincia</span>}
            right={<Dropdown1 />}>
            <div className="flex flex-row w-full">
              <Line1 />
            </div>
          </Section>
        
      </div>
    </>
  )
}
export default Index
