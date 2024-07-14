import React from 'react';

type Company = {
    name: string;
    logo: string;
};

const companies: Company[] = [
    { name: 'Company A', logo: '../../assets/logo/1.png' },
    { name: 'Company B', logo: '../../assets/logo/1.png' },
    { name: 'Company C', logo: '../../assets/logo/1.png' },
    { name: 'Company D', logo: '../../assets/logo/1.png' },
    { name: 'Company E', logo: '../../assets/logo/1.png' },
];

const Companies: React.FC = () => {
    return (
        <div className="container mx-auto h-auto flex flex-col my-24">
            <header className="w-full md:flex flex-col md:flex-row justify-between items-center">
                <div>
                    <h1 className="text-4xl md:text-6xl font-semibold text-gray-800">
                        Companies I've Worked With<span className='text-3xl pl-2'>■</span>
                    </h1>
                </div>
            </header>

            <div className='mt-10'>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                    {companies.map((company) => (
                        <div key={company.name} className="flex items-center justify-center p-4 border border-gray-200 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
                            <img src={company.logo} alt={`${company.name} logo`} className="h-16 md:h-24 transition-transform duration-300 transform hover:scale-105" />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Companies;
