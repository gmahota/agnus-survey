import Widget1 from "../../components/dashboard/widget-1";
import Section from "../../components/dashboard/section";
import SectionTitle from "../../components/dashboard/section-title";
import { FiActivity, FiUsers, FiExternalLink, FiClock } from "react-icons/fi";
import { Bar2 } from "../../components/dashboard/bar-chart";
import { Donut1 } from "../../components/dashboard/donut-chart";
import { Line1 } from "../../components/dashboard/line-chart";
import Dropdown1 from "../../components/widgets/dropdown-1";
import Markets from "../../components/dashboard/markets";
import { List } from "../../components/dashboard/list";
import Tasks from "../../components/tasks";
import { Timeline1 } from "../../components/timelines";


const Index = () => {
  return (
    <>
      <SectionTitle title="Overview" subtitle="Serviço - Atendimento" />

      <div className="flex flex-col lg:flex-row w-full lg:space-x-2 space-y-2 lg:space-y-0 mb-2 lg:mb-4">
        <Section
          title="Inqueritos"
          description={<span>Serviço Atendimento</span>}
          right={<Dropdown1 />}
        >
          <div className="flex flex-row w-full">
            <Bar2 />
          </div>
        </Section>
      </div>
    </>
  );
};
export default Index;
