import BreadCumb from "../Components/Common/BreadCumb";
import ServiceDetails from "../Components/ServiceDetails/ServiceDetails";
import services from '../Data/services1.json';
import { useParams } from "react-router-dom";

const ServiceDetailsPage = () => {
    const {slug} = useParams();
    const service = services.find(svc => svc.slug === slug);
    console.log("Service Details:", service);

    return (
        <div className="serviceDetails">
                        {/* <BreadCumb
                            bgImg="/assets/img/page_heading_1.jpg"
                            Title="Service Details"
                        ></BreadCumb>  */}
            <ServiceDetails service={service}></ServiceDetails>           
        </div>
    );
};

export default ServiceDetailsPage;