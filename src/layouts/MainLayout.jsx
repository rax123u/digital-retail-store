import Navbar from '../components/Navbar'

const MainLayout = ({ children }) => {
  return (
  
    <div className='bg-[#F0EBE6] text-[#FF0000] min-h-screen font-sans selection:bg-[#FF0000] selection:text-white'>
      
     
      <div className="relative z-100">
        <Navbar />
      </div>

      
      <main className='min-h-screen'>
        {children}
      </main>

    </div>
  )
}

export default MainLayout