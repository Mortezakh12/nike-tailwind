import ServiceCard from "../Components/ServiceCard";
import { services } from "./../Constants/index";
const Services = () => {
  return (
    <section className="max-container flex justify-center flex-wrap gap-9">
      {services.map((services) => {
        return <ServiceCard key={services.label} {...services} />;
      })}
    </section>
  );
};
export default Services;
