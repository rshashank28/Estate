import {FaSearch} from 'react-icons/fa'
import { Link } from 'react-router-dom';

export default function Header() {
    return (
        <header className=" bg-slate-400 shadow-md ">
            <div className="flex justify-between items-center max-w-6xl mx-auto p-3">
                
                <Link to='/'>
                <h1 className="font-bold text-sm sm:text-xl flex flex-wrap">
                    <span className="text-slate-500">shashank</span>
                    <span className="text-slate-500">rajj</span>
                </h1>
                </Link>
                <form className="bg-slate-100 p-3 rounded-lg flex items-center">
                    <input type="text" placeholder="search..." className="bg-transparent focus:outline-none w-24 sm:w-64" /> <FaSearch className='text-slate-500'/>
                </form>
                <ul className='flex gap-4'>
                   <Link to='/'> <ol className='hidden sm:inline text-slat-700 hover:underline'>Home</ol>
                   </Link>
                   <Link to='/about'> <ol className='hidden sm:inline text-slat-700 hover:underline'>About</ol></Link>
                   <Link to='/sign-in'> <ol className='text-slat-700 hover:underline '>Sign in</ol></Link>
                </ul>
            </div>
        </header>
    );
}
