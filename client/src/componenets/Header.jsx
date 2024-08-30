import { FaSearch } from 'react-icons/fa';
import { Link } from 'react-router-dom'; // Import the Link component

export default function Header() {
  // Define handleSubmit if needed, or remove it from the form
  const handleSubmit = (e) => {
    e.preventDefault();
    // Form submission logic here
  };

  return (
    <header className='bg-slate-200 shadow-md'>
      <div className='flex justify-between items-center max-w-6xl mx-auto p-3'>
          <h1 className='font-bold text-sm sm:text-xl flex flex-wrap'>
            <span className='text-slate-500'>MAH</span>
            <span className='text-slate-700'>42</span>
          </h1>
        <form className='bg-slate-100 p-3 rounded-lg flex items-center'>
         <input type="text" 
         placeholder="Search..." 
         className='bg-transparent focus:outline-none w-24 sm:w-64' />
         <FaSearch className='text-slate-500' />
        </form>
      <ul className='flex gap-4'>
      <Link to='/'>
        <li className='hidden sm:inline text-slate-700 hover:underline'>Home</li>
        </Link>
        <Link to='/about'>
        <li className='hidden sm:inline text-slate-700 hover:underline'>About</li>
        </Link> 
        <Link to='/sign-in'>
        <li className=' text-slate-700 hover:underline'>SignIn</li>
        </Link>
      </ul>
      </div>
    </header> 
  );
}
