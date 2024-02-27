import Navigation from '../navigation/Navigation'

const Dashboard = () => {
  return (
    <div className="bg-hero h-[100vh] bg-no-repeat bg-cover bg-center bg-fixed ">
        <Navigation />
        <div className="flex flex-col h-3/4 justify-center items-center text-white">
          <p className="text-4xl">WebReinvent</p>
          <p className="text-sm mt-6">Lets have some coffee together!</p>
        </div>
      </div>
  )
}

export default Dashboard;