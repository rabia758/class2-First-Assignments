
import Image from "next/image";
import profile from"../../image/profile.jpg";


export default function Home() {
  return (
    <>
    <div className="bg-black flex justify-center item-center h-[350px] ">
      <div className="w-[800px] h-[200px] m-[30px] text-orange-400 font-bold text-[35px] pl-[10px] nl-[20px]">
      Hy,
      <br />
      I am <span>Rabia</span>
      <br />
      <h2>I am <span>"Frontened Developer"</span></h2>
      <br />
      <p className="text-[20px]">I am doing internship in codealpha,I have completed html,css and javascript,typescript,Now I am learning artificial intelligence,metaverse and web3.0 in <span>Governourhouse,Karachi.</span></p>
      </div>

      <div className="h-[250px] w-[250px]  justify-center mt-10 item-center">
      <Image src={profile} alt="profile pic"></Image>
      </div>
      </div>
  
  
  
    </>
    
  )
}