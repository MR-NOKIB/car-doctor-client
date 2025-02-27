/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { GoArrowRight } from "react-icons/go";
import { Link } from "react-router-dom";

const ServiceCard = ({ service }) => {
    const { img, title, _id, price } = service
    return (
        <div className="card bg-base-100 shadow-xl justify-between">
            <figure className="px-10 pt-10">
                <img
                    src={img}
                    alt="Shoes"
                    className="rounded-xl" />
            </figure>
            <div className="card-body">
                <h2 className="card-title">{title}</h2>
                <div className=" flex justify-between">
                    <p className="text-xl text-orange-500">Price:${price}</p>
                    <Link to={`/checkout/${_id}`} className="text-[24px] text-orange-600">
                        <GoArrowRight />
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default ServiceCard;