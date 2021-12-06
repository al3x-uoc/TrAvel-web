import Image from "next/image"
import { 
    GlobeAltIcon,
    MenuIcon,
    UserCircleIcon,
    UsersIcon,
    SearchIcon,
} from '@heroicons/react/solid'
import { useState } from "react"
import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css file
import { DateRangePicker } from 'react-date-range';
import { useRouter } from "next/router";


function Header({placeholder}) {
    const [searchInput, setSearchInput] = useState('');
    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(new Date());
    const [noOfGuests, setNoOfGuests] = useState(1);
    const router = useRouter();

    const handleSelect = (ranges) => {
        setStartDate(ranges.selection.startDate);
        setEndDate(ranges.selection.endDate);
    }

    const resetInput = () => {
        setSearchInput('');
    }

    const search = () => {
        router.push({
            pathname:"/search",
            query: {
                location: searchInput,
                startDate: startDate.toISOString(),
                endDate: endDate.toISOString(),
                noOfGuests,
            }
        });
    }

    const selectionRange = {
        startDate: startDate,
        endDate: endDate,
        key: 'selection'
    };

    return (
        <header className='sticky top-0 z-50 grid grid-cols-3 bg-white shadow-md p-2 md:px-10'>
            
            {/* Left */}
            <div onClick={() => router.push("/")} className='relative flex items-center h-10 cursor-pointer my-auto space-x-12'>
                <Image src='https://cdn-icons.flaticon.com/png/512/826/premium/826070.png?token=exp=1638788699~hmac=146eb5f4952f7ee2de047f06a7d085a8' layout='fill' objectFit='contain' objectPosition='left'/>
                <h2 className='font-mono font-bold'>TrAvel</h2>
            </div>

            {/* Middle */}
            <div className='flex items-center md:border-2 rounded-full py-2 md:shadow-sm'>
                <input value={searchInput} onChange={(e) => setSearchInput(e.target.value)} className='flex-grow pl-5 bg-transparent outline-none text-sm text-gray-600' type='text' placeholder={placeholder || 'Start your search'}/>
                <SearchIcon className='hidden md:inline-flex h-8 bg-blue-400 text-white rounded-full p-2 cursor-pointer md:mx-2'/>
            </div>

            {/* Right */}
            <div className='flex items-center space-x-4 justify-end text-gray-500'>
                <p className='hidden md:inline cursor-pointer'>Become a host</p>
                <GlobeAltIcon className='h-6 cursor-pointer'/>

                <div className='flex items-center space-x-2 border-2 p-2 rounded-full'>
                    <MenuIcon className='h-6 cursor-pointer'/>
                    <UserCircleIcon className='h-6 cursor-pointer'/>
                </div>

            </div>

            {searchInput && (
                <div className='flex flex-col col-span-3 mx-auto mt-5'>
                    <h2 className='text-2xl pl-2 border-b mb-4'>Calendar</h2>
                    <DateRangePicker 
                        ranges={[selectionRange]}
                        minDate={new Date()}
                        onChange={handleSelect}
                    />
                    <div className='flex items-center border-b'>
                        <h2 className='text-2xl pl-2 flex-grow mb-4'>Number of Guests</h2>
                        <UsersIcon className='h-5'/>
                        <input value={noOfGuests} onChange={(e) => setNoOfGuests(e.target.value)} type="number" min={1} className='w-12 pl-2 text-lg outline-none text-blue-700'/>
                    </div>
                    <div className='flex mt-2 mb-2'>
                        <button onClick={resetInput} className='flex-grow text-gray-500'>Cancel</button>
                        <button onClick={search} className='flex-grow text-blue-700'>Search</button>
                    </div>
                </div>
            )}

        </header>
    )
}

export default Header
