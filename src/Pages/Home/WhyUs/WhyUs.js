import React from 'react';
import { Link } from 'react-router-dom';
import fastDeliveryImg from "../../../images/adult-blur-blurred-background-687824.png";
import HomeDeliveryImg from "../../../images/architecture-building-city-2047397.png";
import AutoResponderImg from "../../../images/chef-cook-food-33614.png";
import AutoResponderIcon from "../../../images/icons/Group 1133.png";
import fastDeliveryIcon from "../../../images/icons/Group 204.png";
import HomeDeliveryIcon from "../../../images/icons/Group 245.png";

const WhyUs = () => {
    return (
      <div className="mb-20">
        <div className="md:w-1/2 md:p-20 p-10">
          <h1 className="text-3xl">Why you choose us</h1>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quo iure,
            fuga vero quae doloremque, cumque ratione dolorum.
          </p>
        </div>

        <div className=" mx-10 flex flex-wrap justify-center gap-6">
          <div className="w-80 flex flex-col gap-3">
            <img src={fastDeliveryImg} alt="" />
            <div className="flex justify-center items-start gap-3">
              <img height={"5px"} src={fastDeliveryIcon} alt="" />
              <div>
                <h3 className="text-xl font-semibold">Fast Delivery</h3>
                <p className="text-sm text-gray-500">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Corrupti quaerat nesciunt harum officiis inventore modi.
                </p>
                <Link className="font-medium text-blue-500" to={"/"}>
                  See more 🌶️
                </Link>
              </div>
            </div>
          </div>
          <div className="w-80 flex flex-col gap-3">
            <img src={AutoResponderImg} alt="" />
            <div className="flex justify-center items-start gap-3">
              <img height={"5px"} src={AutoResponderIcon} alt="" />
              <div>
                <h3 className="text-xl font-semibold">
                  A Good Auto Responder.
                </h3>
                <p className="text-sm text-gray-500">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Corrupti quaerat nesciunt harum officiis inventore modi.
                </p>
                <Link className="font-medium text-blue-500" to={"/"}>
                  See more 🌶️
                </Link>
              </div>
            </div>
          </div>
          <div className="w-80 flex flex-col gap-3">
            <img src={HomeDeliveryImg} alt="" />
            <div className="flex justify-center items-start gap-3">
              <img height={"5px"} src={HomeDeliveryIcon} alt="" />
              <div>
                <h3 className="text-xl font-semibold">Home Delivery</h3>
                <p className="text-sm text-gray-500">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Corrupti quaerat nesciunt harum officiis inventore modi.
                </p>
                <Link className="font-medium text-blue-500" to={"/"}>
                  See more 🌶️
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
};

export default WhyUs;