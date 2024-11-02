"use client";

import React from "react";
import Menu from "@/components/Header/Menu";
import Work from "@/components/Work";
import Preloader from "@/components/Preloader";

function Page() {
  return (
    <>
      <Menu />

      <div className="w-full h-full flex flex-col justify-center items-center">
        <div className="flex flex-col justify-center items-center px-4 md:px-32 mt-16 md:mt-24 lg:mt-48 font-raleway">
          <h3 className="text-white text-center text-2xl md:text-4xl lg:text-5xl">
            <span className="text-[#abfd00]">Package GPS Tracker</span> | UX/UI
            Design
          </h3>
          <p className="text-white text-sm md:text-lg lg:text-2xl text-center px-4 md:px-[100px] lg:px-[200px] xl:px-[250px] my-4 md:my-8 leading-relaxed md:leading-normal">
            The Package GPS Tracker System project is designed to revolutionize
            the way businesses and individuals track and manage package
            deliveries. In today’s fast-paced logistics environment, real-time
            visibility and accurate tracking are critical to ensuring timely
            deliveries and customer satisfaction.
          </p>
        </div>

        <div className="w-full md:w-[720px] lg:w-[960px] xl:w-[1150px] h-full flex-col justify-center items-center mb-10">
          <div className="w-full">
            <img
              src="/images/PGT/Showcase.png"
              alt="Opal Tadpole"
              className="w-full object-cover"
            />
          </div>

          <div className="w-full h-full mt-10">
            <div className="flex flex-col justify-center items-center text-white font-raleway mb-8">
              <h4 className="text-white opacity-50 text-md mb-1">
                Process Highlights
              </h4>
              <p className="text-xl md:text-2xl text-center">
                Design challenge and responsibilities overview
              </p>
            </div>

            <div className="w-full flex flex-col justify-center items-center text-white text-lg md:text-xl font-raleway py-8 border-t">
              <h4 className="text-white pb-4">Challenge</h4>
              <div className="opacity-50">
                <p>
                  One key challenge is ensuring real-time tracking accuracy, as
                  users expect to see their package's location reliably, but GPS
                  data can sometimes be delayed or inaccurate. To address this,
                  a “last known location” indicator with friendly error
                  messaging can help manage expectations when live data is
                  unavailable.
                </p>
                <br />
                <p>
                  The map interface itself presents another challenge: it must
                  be clear and intuitive, with minimal clutter to allow users to
                  quickly locate their package. Highlighting the package’s
                  current position with a distinct, animated marker can help, as
                  can optimizing zoom levels to balance detail with clarity.
                </p>
                <br />
                <p>
                  displaying delivery progress and providing an estimated time
                  of arrival is essential yet challenging. The interface must
                  offer a clear, easily scannable ETA and use visual aids like
                  progress bars or labeled status icons to show the package’s
                  journey at a glance. Notifications further enhance the
                  experience, but excessive notifications can overwhelm users.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 text-white border-b-0 border-white gap-4 border-t py-8 font-raleway">
              <div className="w-full flex flex-col">
                <h4 className="text-white text-lg md:text-xl pb-4">Timeline</h4>
                <div className="opacity-50 text-lg md:text-xl">
                  <p>Sep 2024 - Sep 2024</p>
                </div>
              </div>
              <div className="w-full flex flex-col">
                <h4 className="text-white text-lg md:text-xl pb-4">
                  Disciplines
                </h4>
                <div className="opacity-50 text-lg md:text-xl">
                  <p>User Experience</p>
                  <p>User Interface</p>
                </div>
              </div>
              <div className="w-full flex flex-col">
                <h4 className="text-white text-lg md:text-xl pb-4">
                  Responsibilities
                </h4>
                <div className="opacity-50 text-lg md:text-xl">
                  <p>UX Research</p>
                  <p>Sketching</p>
                  <p>UX/UI Web Design</p>
                  <p>Prototyping</p>
                </div>
              </div>
              <div className="w-full flex flex-col">
                <h4 className="text-white text-lg md:text-xl pb-4">Tools</h4>
                <div className="opacity-50 text-lg md:text-xl">
                  <p>Figma</p>
                  <p>Adobe CS</p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-8">
            <img
              className="w-full object-cover"
              src="/images/PGT/Home.png"
              alt=""
            />
          </div>

          <div className="w-full flex flex-col justify-center items-center text-white text-lg md:text-xl font-raleway py-8">
            <div className="">
              <p>
                The Package GPS Tracker System is an advanced solution designed
                for real-time monitoring and management of package deliveries.
                It leverages GPS technology to provide accurate, live tracking
                of packages throughout the logistics journey. Key features
                include:
              </p>
              <p className="text-md opacity-50 font-raleway">
                <ul className="ml-12 mt-4">
                  <li className="list-disc">
                    Real-Time Tracking: Users can monitor the exact location of
                    packages on an interactive map.
                  </li>
                  <li className="list-disc">
                    Status Updates: Automated notifications keep users informed
                    about delivery progress, delays, and package arrival.
                  </li>
                  <li className="list-disc">
                    Package History: A comprehensive log of previous tracking
                    data is maintained for reference and analysis.
                  </li>
                  <li className="list-disc">
                    User Authentication & Acces s Control: Only authorized users
                    can view package data, ensuring security.
                  </li>
                  <li className="list-disc">
                    Search & Filter Options: Users can easily search for
                    specific packages by tracking number, recipient details, or
                    delivery status.
                  </li>
                  <li className="list-disc">
                    Analytics & Reporting: The system generates detailed reports
                    on delivery performance, helping improve logistics
                    efficiency.
                  </li>
                  <li className="list-disc">
                    Admin Dashboard: Centralized control for managing users,
                    packages, and performance data.
                  </li>
                </ul>
              </p>
            </div>
          </div>

          <div className="mt-8">
            <img
              className="w-full object-cover"
              src="/images/PGT/About Us.png"
              alt=""
            />
          </div>

          <div className="mt-8">
            <img
              className="w-full object-cover"
              src="/images/PGT/User Admin.png"
              alt=""
            />
          </div>
        </div>

        <div className="h-[10px] md:h-[15px] w-full md:w-[960px] lg:w-[1150px] bg-[#abfd00] mx-auto mb-16 md:mb-24 lg:mb-40"></div>
      </div>

      <Work />
    </>
  );
}

export default Page;
