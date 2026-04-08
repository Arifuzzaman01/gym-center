import React from 'react';
import { AiFillStar } from 'react-icons/ai';

const ClientFeedBackCard = ({item}) => {
    return (
        <div
              key={item.id}
              className="bg-black rounded-2xl p-8 flex flex-col justify-between shadow-xl transition-transform hover:scale-[1.02]"
            >
              {/* Content */}
              <div>
                <h3 className="text-white text-xl font-bold mb-4">
                  {item.title}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed mb-8 line-clamp-4 text-justify">
               
                  {item.comment}
                </p>
              </div>

              {/* User Info */}
              <div className="flex items-center justify-between mt-4">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full overflow-hidden bg-gray-800">
                    <img
                      src={item?.avatar}
                      alt={item?.name}
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="text-white font-semibold text-sm">
                      {item.name}
                    </h4>
                    <p className="text-gray-500 text-xs">{item.role}</p>
                  </div>
                </div>

                {/* Rating */}
                <div className="flex items-center gap-1">
                  <div className="flex items-center text-yellow-500">
                    {[...Array(4)].map((_, i) => (
                      <AiFillStar key={i} size={14} />
                    ))}
                    {/* Half Star approximation using a different color or partial fill */}
                    <AiFillStar size={14} className="text-yellow-500/50" />
                  </div>
                  <span className="text-gray-400 text-[10px] ml-1">
                    ({item.rating})
                  </span>
                </div>
              </div>
            </div>
    );
};

export default ClientFeedBackCard;