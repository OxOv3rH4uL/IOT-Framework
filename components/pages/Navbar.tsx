export default function NavBar(){
    return (
        <nav className="bg-black p-4">
          <div className="container mx-auto bg-black">
            <div className="flex items-center justify-between bg-black">
              <div className="text-white font-bold text-3xl bg-black">SPS-IOT</div>
              <div className="flex space-x-20 bg-black">
                <a href="#" className="scroll-m-20 text-2xl font-semibold tracking-tight text-white">Home</a>
                <a href="#" className="scroll-m-20 text-2xl font-semibold tracking-tight text-white">About</a>
                <a href="#" className="scroll-m-20 text-2xl font-semibold tracking-tight text-white">Contact</a>
              </div>
            </div>
          </div>
        </nav>
      );
}