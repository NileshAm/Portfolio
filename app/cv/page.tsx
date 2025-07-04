import { CDNFetch } from "../utils/imageFetch";

const page = () => {
  return (
    <div className="flex justify-center">
      <iframe
        src={CDNFetch("/pdfs/Nilesh_Amarathunge-CV.pdf")}
        className="w-2/3 h-[100vh] rounded-lg mt-2"
        title="Nilesh Amarathunge CV"
      ></iframe>
    </div>
  );
};

export default page;
