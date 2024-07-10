
const Stats = () => {
    const stats = [
        { label: 'Startups', value: '15+' },
        { label: 'Projects', value: '100+' },
        { label: 'Reviews', value: '70+' },
        { label: 'Countries', value: '25+' }
    ];

    return (
        <div className="w-full p-4">
            <div className="w-1/2">
                <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 ">
                    {stats.map((stat, index) => (
                        <div key={index} className=" text-left ">
                            <div className="text-4xl font-bold text-gray-500">{stat.value}</div>
                            <div className="text-xl  text-gray-400">{stat.label}</div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Stats;
