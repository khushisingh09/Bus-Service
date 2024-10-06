import React from 'react';

const ExperienceSection = () => {
  return (
    <div className="container mx-auto mt-10 px-4">
      <div className="flex flex-col md:flex-row items-center md:items-start">
        {/* Left Image */}
        <div className="w-full md:w-1/2 mb-8 md:mb-0">
          <img 
            src="/assets/image3.avif" 
            alt="Luxury Bus Interior" 
            className="w-full rounded-lg shadow-lg"
          />
        </div>

        {/* Right Text Content */}
        <div className="w-full md:w-1/2 md:pl-8">
          {/* Title */}
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-5 sm:mb-7">
            <span className="text-blue-600 text-4xl sm:text-5xl md:text-6xl">5 Years</span> of Experience
          </h2>

          {/* Description Text */}
          <p className="text-gray-600 mb-4 text-left text-base sm:text-lg md:text-xl">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem illo 
            nemo ut debitis dignissimos pariatur officiis, fuga velit iste, impedit 
            optio ducimus sint quibusdam nam laborum distinctio perferendis et! 
            Minus, est? Natus nam cupiditate quae, reiciendis at quos?
          </p>

          <p className="text-gray-600 mb-4 text-left text-base sm:text-lg md:text-xl">
            Enim impedit quaerat esse accusamus id! Consequatur quod iure quaerat 
            error illum distinctio inventore alias cum quos, ea a totam saepe iusto 
            vitae, vel minus, optio sequi reiciendis maxime impedit odit? Tenetur 
            atque enim illo earum quod non maxime voluptates.
          </p>

          <p className="text-gray-600 mb-8 text-left text-base sm:text-lg md:text-xl">
            Voluptate eaque ratione, debitis blanditiis quidem rem rerum dolores 
            doloribus nesciunt accusamus! Sapiente perspiciatis officiis commodi 
            labore similique ipsa, debitis reprehenderit, nam quos totam omnis 
            consequuntur modi qui accusamus tempora minima.
          </p>

          {/* Read More Button */}
          <div className="mt-auto">
            <button className="bg-blue-500 text-white px-8 sm:px-10 py-3 sm:py-4 text-base sm:text-lg rounded-lg hover:bg-blue-700 transition duration-200">
              Read More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExperienceSection;
