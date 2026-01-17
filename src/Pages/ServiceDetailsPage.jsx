import BreadCumb from "../Components/Common/BreadCumb";
import ServiceDetails from "../Components/ServiceDetails/ServiceDetails";
import services from '../Data/services1.json';
import { useParams } from "react-router-dom";

const ServiceDetailsPage = () => {
    const {slug} = useParams();
    const service = services.find(svc => svc.slug === slug);
    console.log("Service Details:", service);
    console.log("service image:", service?.image);

    return (
        <div className="serviceDetails">
                        <BreadCumb
                            bgImg={service?.image}
                            Title="Service Details"
                            title={service?.title}
                        ></BreadCumb> 
            <ServiceDetails service={service}></ServiceDetails>           
        </div>
    );
};

export default ServiceDetailsPage;