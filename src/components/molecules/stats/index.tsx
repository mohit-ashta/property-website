interface StatsCardProps {
  percentage: string;
  description: string;
}

export const StatsCard: React.FC<StatsCardProps> = ({
  percentage,
  description,
}) => {
  return (
    <div className="flex flex-col">
      <span className="text-[32px] leading-[48px] text-black font-bold poppins">
        {percentage}
      </span>
      <h6 className="text-[15px] leading-[37px] text-black font-normal poppins">
        {description}
      </h6>
    </div>
  );
};
